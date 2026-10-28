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

## v3 (28/10/2026)

- **Agenda por día, semana y mes**, con navegación entre fechas (anterior, hoy, siguiente). Las rutas son `#/agenda/dia/AAAA-MM-DD`, `#/agenda/semana/AAAA-MM-DD` y `#/agenda/mes/AAAA-MM`.
- Los turnos de hoy salen de `data.js`; los de cualquier otro día se generan de forma estable (misma fecha, mismos turnos) según el horario de cada agenda (`HORARIOS` en `app.js`): días pasados atendidos o no vino, con su cobro; días futuros confirmados o sin confirmar, con horarios libres.
- **Buscador de profesionales** (por nombre o especialidad) que filtra las pestañas de agendas; pensado para un centro con 40 agendas.

## v3.1 (28/10/2026)

- **Buscador en toda pantalla con profesionales o pacientes**: agenda (profesional, paciente o DNI; si el texto es un paciente, lo busca en todas las agendas del día o de la semana), caja, rendiciones, pacientes, ficha del paciente (turnos, cobros, historia y estudios), informes, conversaciones, importación y configuración. Un solo componente (`buscador(key, placeholder)`) y un solo filtro (`coincide`), sin tildes ni puntos.
