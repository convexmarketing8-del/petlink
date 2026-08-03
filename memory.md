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

## Pendientes / a definir
- [ ] Crear proyecto de Firebase y generar credenciales
- [ ] Configurar .env.local con las credenciales de Firebase
- [ ] Confirmar con el amigo que el código de las placas ya está 
  escuchando en la estructura de datos definida en CLAUDE.md
- [ ] Deploy final a Vercel