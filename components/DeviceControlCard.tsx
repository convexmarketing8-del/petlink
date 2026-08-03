"use client";

import { onValue, ref, set } from "firebase/database";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { database } from "@/lib/firebase";

type ButtonState = "idle" | "sending" | "done" | "error";

interface DeviceOption {
  id: string;
  label: string;
}

interface DeviceControlCardProps {
  title: string;
  icon: ReactNode;
  accent: string;
  options: DeviceOption[];
  node: "alimentador" | "bebedero";
}

const TIMEOUT_MS = 18000;
const DONE_MS = 2000;
const ERROR_RESET_MS = 3000;

export default function DeviceControlCard({
  title,
  icon,
  accent,
  options,
  node,
}: DeviceControlCardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [state, setState] = useState<ButtonState>("idle");

  const unsubscribeRef = useRef<(() => void) | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const cleanup = () => {
    unsubscribeRef.current?.();
    unsubscribeRef.current = null;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => cleanup, []);

  const scheduleErrorReset = () => {
    timersRef.current.push(
      setTimeout(() => {
        setActiveId(null);
        setState("idle");
      }, ERROR_RESET_MS),
    );
  };

  const handleClick = async (optionId: string) => {
    if (activeId) return;

    cleanup();
    setActiveId(optionId);
    setState("sending");

    const deviceRef = ref(database, `/${node}`);
    const estadoRef = ref(database, `/${node}/estado`);

    try {
      await set(deviceRef, {
        accion: optionId,
        // eslint-disable-next-line react-hooks/purity -- runs inside a click handler, not during render
        timestamp: Date.now(),
        estado: "pendiente",
      });
    } catch {
      setState("error");
      scheduleErrorReset();
      return;
    }

    timersRef.current.push(
      setTimeout(() => {
        cleanup();
        setState("error");
        scheduleErrorReset();
      }, TIMEOUT_MS),
    );

    const unsubscribe = onValue(estadoRef, (snapshot) => {
      if (snapshot.val() === "completado") {
        cleanup();
        setState("done");

        timersRef.current.push(
          setTimeout(async () => {
            await set(deviceRef, { accion: null, estado: "idle" });
            setActiveId(null);
            setState("idle");
          }, DONE_MS),
        );
      }
    });
    unsubscribeRef.current = unsubscribe;
  };

  return (
    <div
      className="w-full max-w-md rounded-3xl border p-6 sm:p-8"
      style={
        {
          backgroundColor: "var(--color-card)",
          borderColor: "var(--color-card-border)",
          "--accent": accent,
          "--accent-soft": `${accent}1A`,
          "--accent-border": `${accent}40`,
          "--accent-glow": `${accent}59`,
        } as CSSProperties
      }
    >
      <div className="flex items-center gap-3.5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: "var(--accent-soft)", color: accent }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F5F5]">
            {title}
          </h3>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
            <span className="text-xs text-[#8A8F98]">Conectado</span>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3">
        {options.map((option) => {
          const isActive = activeId === option.id;
          const buttonState: ButtonState = isActive ? state : "idle";
          const disabled = activeId !== null;

          return (
            <button
              key={option.id}
              type="button"
              disabled={disabled}
              onClick={() => handleClick(option.id)}
              className="group relative flex items-center justify-center gap-2.5 rounded-xl border px-5 py-3.5 text-center text-sm font-medium transition-all duration-300 ease-out enabled:hover:scale-[1.02] enabled:hover:shadow-[0_0_28px_-6px_var(--accent-glow)] enabled:active:scale-[0.97] disabled:cursor-not-allowed"
              style={{
                borderColor:
                  buttonState === "done"
                    ? "#4ADE8055"
                    : buttonState === "error"
                      ? "#F8717155"
                      : "var(--accent-border)",
                backgroundColor:
                  buttonState === "idle" ? "transparent" : "var(--accent-soft)",
                color:
                  buttonState === "done"
                    ? "#4ADE80"
                    : buttonState === "error"
                      ? "#F87171"
                      : "#F5F5F5",
              }}
            >
              {buttonState === "sending" && (
                <span
                  className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
                  aria-hidden
                />
              )}
              {buttonState === "done" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
              {buttonState === "error" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                  aria-hidden
                >
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.3 3.9 1.8 18a1.5 1.5 0 0 0 1.3 2.3h17.8a1.5 1.5 0 0 0 1.3-2.3L13.7 3.9a1.5 1.5 0 0 0-2.6 0Z" />
                </svg>
              )}
              <span>
                {buttonState === "sending"
                  ? "Enviando..."
                  : buttonState === "done"
                    ? "¡Listo!"
                    : buttonState === "error"
                      ? "No se pudo conectar, intentá de nuevo"
                      : option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
