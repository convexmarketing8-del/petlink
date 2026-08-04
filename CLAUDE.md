@AGENTS.md
# PetLink — Landing de control para alimentador/bebedero automático

## Qué es este proyecto
Landing page simple pero de diseño profesional para un prototipo de tesis 
(técnico en hardware). Permite controlar remotamente, vía Firebase Realtime 
Database, un alimentador automático de mascotas (ESP32) y un bebedero 
automático (ESP8266).

No es una app compleja: es una sola página con dos "paneles de control" 
que envían comandos a Firebase, que luego leen los microcontroladores.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Firebase Realtime Database (solo lectura/escritura desde el front, 
  sin backend propio)
- Fuentes: Space Grotesk (títulos) + Inter (texto/UI), vía Google Fonts

## Identidad visual
- Dark mode elegante, look premium
- Fondo base: #0D0F12
- Fondo de cards: #161A1F, borde sutil #22262C
- Acento Alimentador: #FF8A3D (naranja)
- Acento Bebedero: #3DC9FF (celeste)
- Texto principal: #F5F5F5 | Texto muted: #8A8F98
- Éxito/completado: #4ADE80

## Estructura de la página
1. Header: logo "PetLink" + menú desplegable (Alimentador / Bebedero / 
   Cómo funciona)
2. Hero: título "PetLink" + tagline "Siempre cerca, incluso cuando no estás"
3. Sección Alimentador: card con 3 botones — Porción chica / mediana / grande
4. Sección Bebedero: card con 3 botones — 10s / 20s / 30s
5. Sección "Cómo funciona": scrolleable, debajo de las dos anteriores, 
   explica brevemente el flujo (usuario aprieta botón → se envía la 
   orden → el dispositivo la ejecuta)

## Comportamiento de los botones
Alimentador y bebedero usan esquemas de Firebase DIFERENTES entre sí 
(no son simétricos) porque así los implementó el hardware real.

**Alimentador (ESP32)** — trabaja en la RAÍZ de la base de datos:
1. Al presionar un botón, escribe en la raíz `{ ejecutar: true, comando: 
   "CHICA" | "MEDIANA" | "GRANDE" }`
2. Muestra estado visual "Enviando..." (spinner)
3. Escucha "/ejecutar" en tiempo real — el hardware lo pone en `true` al 
   recibir la orden y de vuelta en `false` cuando termina (y escribe el 
   resultado en "/estado", ej: "OK: CHICA"). Cuando vuelve a `false`, 
   muestra check verde + "¡Listo!" por unos segundos, después vuelve al 
   estado normal

**Bebedero (ESP8266)** — trabaja dentro del nodo "/bebedero":
1. Al presionar un botón, escribe en "/bebedero" `{ activar: true, 
   tiempo: 10 | 20 | 30 }`
2. Muestra estado visual "Enviando..." (spinner)
3. Escucha "/bebedero/activar" en tiempo real — el hardware pone 
   "/bebedero/estado" en "ENCENDIDO" mientras funciona, y al terminar 
   pone "activar" de vuelta en `false` y "estado" en "APAGADO". Cuando 
   "activar" vuelve a `false`, muestra check verde + "¡Listo!" por unos 
   segundos, después vuelve al estado normal
4. También existe "/bebedero/nivelBajo" (boolean, sensor de nivel bajo) 
   pero no se usa en la interfaz por ahora

Estructura de datos en Firebase:
/ (raíz)
  - ejecutar: boolean
  - comando: string ("CHICA" | "MEDIANA" | "GRANDE")
  - estado: string (resultado del hardware, ej. "OK: CHICA")

/bebedero
  - activar: boolean
  - tiempo: number (10 | 20 | 30, en segundos)
  - estado: string ("ENCENDIDO" | "APAGADO")
  - nivelBajo: boolean (sensor aparte, no conectado a la interfaz)

## Reglas de trabajo
- No tocar la lógica de los microcontroladores (ESP32/ESP8266) — eso 
  lo maneja otra persona por fuera de este repo, nosotros solo 
  escribimos/leemos en Firebase
- Priorizar mobile-first: se va a mostrar principalmente desde celular
- Mantener el diseño simple pero con detalles cuidados (microanimaciones, 
  buen espaciado, tipografía prolija) — el proyecto se presenta 
  frente a un jurado de tesis, tiene que verse profesional
- Nunca commitear .env.local ni credenciales de Firebase
- Hosting: Vercel