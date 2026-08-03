import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0D0F12",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 55,
            top: 91,
            width: 70,
            height: 56,
            borderRadius: "50%",
            background: "#FF8A3D",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 33,
            top: 56,
            width: 28,
            height: 35,
            borderRadius: "50%",
            background: "#FF8A3D",
            transform: "rotate(-18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 31,
            width: 27,
            height: 35,
            borderRadius: "50%",
            background: "#FF8A3D",
            transform: "rotate(-8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 93,
            top: 31,
            width: 27,
            height: 35,
            borderRadius: "50%",
            background: "#FF8A3D",
            transform: "rotate(8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 119,
            top: 56,
            width: 28,
            height: 35,
            borderRadius: "50%",
            background: "#FF8A3D",
            transform: "rotate(18deg)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
