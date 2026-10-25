# Demo Cordis — prototipo navegable

Prototipo del módulo de caja, rendición e historia clínica para Cordis, conectado al sistema de atención.
Todo corre en el navegador con datos ficticios (ninguna persona, DNI ni teléfono es real).

- `src/` — estilos, datos y aplicación
- `build.py` — arma `index.html` (un solo archivo) a partir de `src/`
- Publicado en https://demo-cordis.potenta.ai

Potenta AI · 2026

## v2 (25/10/2026)

- **Conversaciones** (recepción y dirección): bandeja de lo que el asistente derivó a una persona y lo que resolvió solo; se puede responder desde ahí (el asistente se pausa en esa conversación).
- **Tablero** (dirección): métricas de atención (del sistema de atención) y de operación y caja (de este módulo) en una pantalla.
- **Panel y accesos** (dirección): maqueta del menú del panel del sistema de atención tal como lo ve cada rol, tabla de quién usa qué y cómo se accede.
- **Mi agenda** (profesional): tarjeta con el resumen del día que llega por WhatsApp a las 8:00; el profesional solo marca Entró / Atendido.
