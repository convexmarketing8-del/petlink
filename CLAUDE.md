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
Al presionar un botón:
1. Escribe en Firebase Realtime Database bajo el nodo correspondiente 
   (/alimentador o /bebedero) con la acción elegida y un timestamp
2. Muestra estado visual "Enviando..." (spinner)
3. Escucha el campo "estado" en tiempo real — cuando el hardware 
   confirma (estado: "completado"), muestra un check verde + 
   "¡Listo!" por unos segundos, después vuelve al estado normal

Estructura de datos en Firebase:
/alimentador
  - accion: string ("porcion_chica" | "porcion_mediana" | "porcion_grande")
  - timestamp: number
  - estado: string ("pendiente" | "completado")

/bebedero
  - accion: string ("10s" | "20s" | "30s")
  - timestamp: number
  - estado: string ("pendiente" | "completado")

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