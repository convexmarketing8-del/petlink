# Memoria del proyecto PetLink

## Contexto
Proyecto hecho para un amigo que presenta tesis de técnico en hardware. 
La landing es la interfaz de control de un prototipo real (alimentador 
+ bebedero automático de mascotas).

## Decisiones tomadas
- Arquitectura: Landing (Next.js) → Firebase Realtime DB → ESP32 
  (alimentador) + ESP8266 (bebedero)
- Firebase se crea con la cuenta de Gonzalo, se comparten las 
  credenciales de conexión con quien programa las placas
- Menú desplegable: solo 3 opciones (Alimentador, Bebedero, Cómo funciona)
- Sección "Cómo funciona": scrolleable en la misma landing, debajo de 
  las secciones de Alimentador y Bebedero (no es modal)
- Diseño: dark mode elegante, look premium
- Hosting: Vercel (no Hostinger, porque Next.js necesita un hosting 
  que lo soporte nativamente)
- Firebase Realtime Database en "modo de prueba" (sin autenticación) 
  ya que es un prototipo de tesis, no producción

## Decisiones tomadas (cont.)
- La estructura de datos de Firebase NO es simétrica entre dispositivos: 
  el alimentador (ESP32) escribe/lee en la raíz (`/ejecutar`, `/comando`, 
  `/estado`), el bebedero (ESP8266) usa el nodo `/bebedero` (`activar`, 
  `tiempo`, `estado`, `nivelBajo`). Ver detalle en CLAUDE.md, sección 
  "Estructura de datos en Firebase" — esta ya es la estructura real 
  que usa el hardware, no una propuesta.

## Pendientes / a definir
- [ ] Crear proyecto de Firebase y generar credenciales
- [ ] Configurar .env.local con las credenciales de Firebase
- [ ] Deploy final a Vercel