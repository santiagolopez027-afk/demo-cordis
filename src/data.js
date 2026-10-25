/* Datos ficticios del prototipo. Ninguna persona, DNI ni teléfono es real. */
const PROFESIONALES = [
  {id:'pm', nombre:'Dra. Laura Méndez', corto:'Dra. Méndez', esp:'Cardiología clínica', dur:20, estudio:false, tel:'387 400 1001', gcal:true},
  {id:'pr', nombre:'Dr. Pablo Ruiz', corto:'Dr. Ruiz', esp:'Cardiología y ecocardiografía', dur:20, estudio:false, tel:'387 400 1002', gcal:true},
  {id:'ps', nombre:'Dra. Carolina Soto', corto:'Dra. Soto', esp:'Cardiología', dur:20, estudio:false, tel:'387 400 1003', gcal:false,
   nota:'Atiende IPSS los martes. Los 20 cupos del mes se liberan el día 20; el asistente los ofrece solo mientras queden.'},
  {id:'erg', nombre:'Ergometría', corto:'Ergometría', esp:'Estudio · Lic. Marcos Vega', dur:30, estudio:true, tel:'387 400 1004', gcal:false},
  {id:'hol', nombre:'Holter 24 h', corto:'Holter', esp:'Estudio · colocación y retiro', dur:15, estudio:true, tel:'', gcal:false},
];

const OBRAS = [
  {id:'pami',   nombre:'PAMI',          copago:0,     copagoEstudio:0,     orden:true},
  {id:'ipss',   nombre:'IPSS',          copago:20000, copagoEstudio:18000, orden:true},
  {id:'osde',   nombre:'OSDE',          copago:0,     copagoEstudio:0,     orden:true},
  {id:'swiss',  nombre:'Swiss Medical', copago:0,     copagoEstudio:0,     orden:true},
  {id:'sancor', nombre:'Sancor Salud',  copago:15000, copagoEstudio:12000, orden:true},
  {id:'part',   nombre:'Particular',    copago:45000, copagoEstudio:38000, orden:false},
];

const MEDIOS = {
  efectivo:{nombre:'Efectivo'}, transferencia:{nombre:'Transferencia'}, debito:{nombre:'Débito'},
  credito:{nombre:'Crédito'}, mp:{nombre:'Seña MercadoPago'}, orden:{nombre:'Orden de obra social'},
};

const PACIENTES = [
  {dni:'10234567', nombre:'Teresa',   apellido:'Guantay',   nac:'1952-03-14', obra:'pami',   afiliado:'150-2234-9',  origen:'importado',
   telefonos:[{num:'387 512 3301', titular:'Valeria Guantay (hija)', propio:false}], nota:'Reserva su hija desde el mismo WhatsApp. Pedir que traiga la credencial de PAMI.'},
  {dni:'29876543', nombre:'Valeria',  apellido:'Guantay',   nac:'1985-07-02', obra:'osde',   afiliado:'61-887-22',   origen:'importado',
   telefonos:[{num:'387 512 3301', titular:'Propio', propio:true}]},
  {dni:'12345678', nombre:'Ramón',    apellido:'Cardozo',   nac:'1957-11-23', obra:'pami',   afiliado:'150-9981-1',  origen:'importado',
   telefonos:[{num:'387 455 7890', titular:'Propio', propio:true}]},
  {dni:'14567890', nombre:'Mirta',    apellido:'Flores',    nac:'1961-05-09', obra:'ipss',   afiliado:'22.110.4', origen:'importado',
   telefonos:[{num:'387 601 2233', titular:'Propio', propio:true},{num:'387 601 2234', titular:'Daniel Flores (hijo)', propio:false}]},
  {dni:'20112334', nombre:'Jorge',    apellido:'Villagra',  nac:'1973-01-30', obra:'swiss',  afiliado:'SM 3321-004', origen:'importado',
   telefonos:[{num:'387 522 8800', titular:'Propio', propio:true}]},
  {dni:'27654321', nombre:'Analía',   apellido:'Rodríguez', nac:'1981-09-17', obra:'sancor', afiliado:'SS 77-1290',  origen:'importado',
   telefonos:[{num:'387 410 5566', titular:'Propio', propio:true}]},
  {dni:'8765432',  nombre:'Luis',     apellido:'Gómez Paz', nac:'1948-02-05', obra:'pami',   afiliado:'150-1120-7',  origen:'importado',
   telefonos:[{num:'387 433 0011', titular:'Propio', propio:true}]},
  {dni:'33210987', nombre:'Carla',    apellido:'Torres',    nac:'1990-12-11', obra:'part',   afiliado:'',            origen:'whatsapp',
   telefonos:[{num:'387 577 1200', titular:'Propio', propio:true}], nota:'Paciente nueva. Datos tomados por el asistente al reservar.'},
  {dni:'16998877', nombre:'Héctor',   apellido:'Zalazar',   nac:'1965-06-21', obra:'ipss',   afiliado:'19.440.2', origen:'importado',
   telefonos:[{num:'387 466 7001', titular:'Propio', propio:true}]},
  {dni:'11223344', nombre:'Norma',    apellido:'Ibáñez',    nac:'1954-08-08', obra:'pami',   afiliado:'150-5540-3',  origen:'importado',
   telefonos:[{num:'387 489 3344', titular:'Propio', propio:true}]},
  {dni:'36555444', nombre:'Matías',   apellido:'Arias',     nac:'1994-04-19', obra:'osde',   afiliado:'61-120-77',   origen:'whatsapp',
   telefonos:[{num:'387 590 2020', titular:'Propio', propio:true}], nota:'Paciente nuevo. Reservó por WhatsApp hoy.'},
  {dni:'13444555', nombre:'Rosa',     apellido:'Chocobar',  nac:'1959-10-02', obra:'ipss',   afiliado:'15.300.9', origen:'importado',
   telefonos:[{num:'387 421 9090', titular:'Propio', propio:true}]},
  {dni:'22333111', nombre:'Pedro',    apellido:'Lamas',     nac:'1976-03-27', obra:'part',   afiliado:'',            origen:'web',
   telefonos:[{num:'387 515 6677', titular:'Propio', propio:true}]},
  {dni:'18777666', nombre:'Silvia',   apellido:'Mamaní',    nac:'1968-07-15', obra:'sancor', afiliado:'SS 44-7781',  origen:'importado',
   telefonos:[{num:'387 448 1234', titular:'Propio', propio:true}]},
  {dni:'6543210',  nombre:'Elena',    apellido:'Burgos',    nac:'1945-01-09', obra:'pami',   afiliado:'150-0231-5',  origen:'importado',
   telefonos:[{num:'387 498 7711', titular:'Marcela Burgos (hija)', propio:false}], nota:'No usa WhatsApp. Los avisos van a su hija.'},
  {dni:'25000111', nombre:'Gustavo',  apellido:'Reyes',     nac:'1979-05-30', obra:'swiss',  afiliado:'SM 1180-221', origen:'importado',
   telefonos:[{num:'387 530 4455', titular:'Propio', propio:true}]},
];

/* Turnos de hoy. estado: solicitado | confirmado | llego | atencion | atendido | novino */
const TURNOS_HOY = [
  /* Dr. Ruiz, mañana: todo atendido y rendido */
  {id:'t01', prof:'pr', dni:'29876543', hora:'09:00', tipo:'Consulta', estado:'atendido', llego:'08:51', entro:'09:02', salio:'09:19', origen:'whatsapp'},
  {id:'t02', prof:'pr', dni:'22333111', hora:'09:20', tipo:'Consulta', estado:'atendido', llego:'09:10', entro:'09:21', salio:'09:38', origen:'web'},
  {id:'t03', prof:'pr', dni:'25000111', hora:'09:40', tipo:'Ecocardiograma', estado:'atendido', llego:'09:32', entro:'09:42', salio:'10:05', origen:'whatsapp'},
  {id:'t04', prof:'pr', dni:'13444555', hora:'10:20', tipo:'Consulta', estado:'atendido', llego:'10:15', entro:'10:24', salio:'10:41', origen:'recepcion'},
  {id:'t05', prof:'pr', dni:'18777666', hora:'10:40', tipo:'Consulta', estado:'atendido', llego:'10:30', entro:'10:43', salio:'10:58', origen:'whatsapp'},
  /* Dra. Méndez, tarde */
  {id:'t11', prof:'pm', dni:'10234567', hora:'15:00', tipo:'Consulta', estado:'atendido', llego:'14:52', entro:'15:03', salio:'15:21', origen:'whatsapp'},
  {id:'t12', prof:'pm', dni:'12345678', hora:'15:20', tipo:'Consulta', estado:'atendido', llego:'15:11', entro:'15:22', salio:'15:40', origen:'recepcion'},
  {id:'t13', prof:'pm', dni:'14567890', hora:'15:40', tipo:'Consulta', estado:'atendido', llego:'15:30', entro:'15:42', salio:'16:01', origen:'whatsapp'},
  {id:'t14', prof:'pm', dni:'20112334', hora:'16:00', tipo:'Consulta', estado:'novino', origen:'web'},
  {id:'t15', prof:'pm', dni:'27654321', hora:'16:20', tipo:'Consulta', estado:'atendido', llego:'16:12', entro:'16:22', salio:'16:39', origen:'whatsapp'},
  {id:'t16', prof:'pm', dni:'33210987', hora:'16:40', tipo:'Primera consulta', estado:'atencion', llego:'16:31', entro:'16:41', origen:'whatsapp', nuevo:true},
  {id:'t17', prof:'pm', dni:'16998877', hora:'17:00', tipo:'Consulta', estado:'llego', llego:'16:55', origen:'whatsapp'},
  {id:'t18', prof:'pm', dni:'11223344', hora:'17:20', tipo:'Control', estado:'confirmado', origen:'recepcion'},
  {id:'t19', prof:'pm', dni:'36555444', hora:'17:40', tipo:'Primera consulta', estado:'confirmado', origen:'whatsapp', nuevo:true, reservado:'hoy 14:12'},
  {id:'t20', prof:'pm', dni:'22333111', hora:'18:00', tipo:'Consulta', estado:'solicitado', origen:'web', sena:10000},
  /* Ergometría, tarde */
  {id:'t31', prof:'erg', dni:'13444555', hora:'15:30', tipo:'Ergometría', estado:'atendido', llego:'15:20', entro:'15:33', salio:'16:02', origen:'recepcion'},
  {id:'t32', prof:'erg', dni:'18777666', hora:'16:00', tipo:'Ergometría', estado:'atendido', llego:'15:55', entro:'16:05', salio:'16:31', origen:'whatsapp'},
  {id:'t33', prof:'erg', dni:'25000111', hora:'16:30', tipo:'Ergometría', estado:'llego', llego:'16:24', origen:'whatsapp'},
  {id:'t34', prof:'erg', dni:'6543210',  hora:'17:00', tipo:'Ergometría', estado:'confirmado', origen:'recepcion'},
  {id:'t35', prof:'erg', dni:'8765432',  hora:'17:30', tipo:'Ergometría', estado:'confirmado', origen:'whatsapp'},
];

const COBROS_HOY = [
  {id:'c01', turno:'t01', hora:'08:53', lineas:[{medio:'orden', importe:0, ref:'OSDE 7781-02'}]},
  {id:'c02', turno:'t02', hora:'09:12', lineas:[{medio:'efectivo', importe:45000, ref:''}]},
  {id:'c03', turno:'t03', hora:'09:34', lineas:[{medio:'orden', importe:0, ref:'Swiss 0192-77'}]},
  {id:'c04', turno:'t04', hora:'10:17', lineas:[{medio:'orden', importe:0, ref:'IPSS 3390-11'},{medio:'transferencia', importe:20000, ref:'Alias cordis.caja'}]},
  {id:'c05', turno:'t05', hora:'10:32', lineas:[{medio:'orden', importe:0, ref:'Sancor 55-210'},{medio:'efectivo', importe:15000, ref:''}]},
  {id:'c11', turno:'t11', hora:'14:55', lineas:[{medio:'orden', importe:0, ref:'PAMI 4432-1'}]},
  {id:'c12', turno:'t12', hora:'15:13', lineas:[{medio:'orden', importe:0, ref:'PAMI 4432-2'}]},
  {id:'c13', turno:'t13', hora:'15:32', lineas:[{medio:'orden', importe:0, ref:'IPSS 3390-14'},{medio:'efectivo', importe:20000, ref:''}]},
  {id:'c15', turno:'t15', hora:'16:14', lineas:[{medio:'orden', importe:0, ref:'Sancor 55-233'},{medio:'transferencia', importe:15000, ref:'Alias cordis.caja'}]},
  {id:'c16', turno:'t16', hora:'16:33', lineas:[{medio:'efectivo', importe:25000, ref:''},{medio:'transferencia', importe:20000, ref:'Alias cordis.caja'}]},
  {id:'c31', turno:'t31', hora:'15:22', lineas:[{medio:'orden', importe:0, ref:'IPSS 3391-02'},{medio:'efectivo', importe:18000, ref:''}]},
  {id:'c32', turno:'t32', hora:'15:57', lineas:[{medio:'orden', importe:0, ref:'Sancor 55-240'},{medio:'debito', importe:12000, ref:'Posnet 0412'}]},
];

const EVOLUCIONES = [
  {id:'e1', dni:'10234567', prof:'pm', fecha:'2024-05-21', importada:true,
   texto:'Control de hipertensión. TA 150/90. Refiere cefaleas matinales. Se ajusta enalapril a 10 mg cada 12 h. Solicito laboratorio y ECG. Control en 60 días.'},
  {id:'e2', dni:'10234567', prof:'pm', fecha:'2025-03-12', importada:true,
   texto:'Trae ergometría: negativa para isquemia, buena capacidad funcional. TA 135/85. Continúa esquema. Indico caminata diaria 30 min. Control en 6 meses.'},
  {id:'e3', dni:'10234567', prof:'pm', fecha:'HOY', importada:false,
   texto:'TA 138/84. Asintomática. Laboratorio: colesterol total 232, LDL 148. Se agrega atorvastatina 10 mg. Solicito nuevo laboratorio en 90 días. Control en 3 meses.'},
  {id:'e4', dni:'14567890', prof:'pr', fecha:'2025-09-30', importada:true,
   texto:'Palpitaciones intermitentes. ECG sinusal. Solicito Holter de 24 h y ecocardiograma.'},
  {id:'e5', dni:'14567890', prof:'pm', fecha:'HOY', importada:false,
   texto:'Trae Holter: extrasístoles supraventriculares aisladas, sin arritmias complejas. Ecocardiograma dentro de parámetros normales. Se tranquiliza a la paciente. Control en 6 meses.'},
  {id:'e6', dni:'13444555', prof:'pr', fecha:'HOY', importada:false,
   texto:'Dolor precordial atípico de esfuerzo. Examen normal. Solicito ergometría hoy mismo. Pendiente de resultado.'},
  {id:'e7', dni:'12345678', prof:'pm', fecha:'2026-04-08', importada:true,
   texto:'Post angioplastia (2023). Asintomático. Doble antiagregación completa. Continúa estatina. Control en 6 meses.'},
];

const ESTUDIOS = [
  {id:'s1', dni:'10234567', tipo:'Ergometría', fecha:'2025-03-12', prof:'erg', estado:'enviado', archivo:'ergometria-2025-03-12.pdf', token:'a1b2c3', enviado:'2025-03-13 09:40',
   informe:'Prueba ergométrica graduada en cinta, protocolo de Bruce. Alcanza 7 METs, 85% de la frecuencia cardíaca máxima teórica. Sin cambios del segmento ST. Respuesta tensional normal. Sin arritmias. Conclusión: prueba negativa para isquemia inducible, buena capacidad funcional.'},
  {id:'s2', dni:'10234567', tipo:'ECG de reposo', fecha:'2026-10-20', prof:'pm', estado:'informado', archivo:'ecg-2026-10-20.pdf',
   informe:'Ritmo sinusal, 72 lpm. Eje normal. Sin alteraciones de la repolarización.'},
  {id:'s3', dni:'14567890', tipo:'Holter 24 h', fecha:'2026-09-30', prof:'hol', estado:'enviado', archivo:'holter-2026-09-30.pdf', token:'h8k2m1', enviado:'2026-10-02 11:05',
   informe:'Ritmo de base sinusal. FC media 76 lpm. 214 extrasístoles supraventriculares aisladas. Sin pausas ni arritmias complejas.'},
  {id:'s4', dni:'13444555', tipo:'Ergometría', fecha:'HOY', prof:'erg', estado:'realizado', archivo:'ergometria-trazado.pdf'},
  {id:'s5', dni:'18777666', tipo:'Ergometría', fecha:'HOY', prof:'erg', estado:'realizado', archivo:'ergometria-trazado.pdf'},
  {id:'s6', dni:'25000111', tipo:'Ecocardiograma Doppler', fecha:'HOY', prof:'pr', estado:'realizado', archivo:'eco-imagenes.zip'},
];

const USUARIOS = [
  {nombre:'Vicky', rol:'Recepción', acceso:'Agenda, caja, rendiciones, pacientes (sin historia clínica)'},
  {nombre:'Agustina', rol:'Recepción', acceso:'Agenda, caja, rendiciones, pacientes (sin historia clínica)'},
  {nombre:'Dra. Laura Méndez', rol:'Profesional', acceso:'Su agenda, historia clínica, informes'},
  {nombre:'Dr. Pablo Ruiz', rol:'Profesional', acceso:'Su agenda, historia clínica, informes'},
  {nombre:'Lic. Marcos Vega', rol:'Técnico', acceso:'Agenda de ergometría, carga de estudios'},
  {nombre:'Dirección', rol:'Administración', acceso:'Todo, configuración, importación'},
];

const CUPOS = [
  {prof:'ps', obra:'ipss', dia:'Martes', cupos:20, libera:'Día 20 de cada mes', usados:14},
  {prof:'pm', obra:'pami', dia:'Lunes a viernes', cupos:8, libera:'Diario', usados:3},
  {prof:'erg', obra:'ipss', dia:'Lunes a viernes', cupos:4, libera:'Diario', usados:2},
];

const IMPORT_REVISAR = [
  {dni:'—',        nombre:'ACOSTA, JUAN (sin documento)', motivo:'Ficha sin DNI en el sistema anterior', accion:'Pedir DNI en el próximo contacto'},
  {dni:'1234567',  nombre:'PEREZ, MARIA',                 motivo:'DNI de 7 dígitos que coincide con otra ficha', accion:'Unificar fichas'},
  {dni:'30111222', nombre:'GOMEZ, LUCIA / GOMEZ, LUCÍA',  motivo:'Dos fichas con el mismo DNI y distinto nombre', accion:'Unificadas, revisar historia'},
  {dni:'99999999', nombre:'PRUEBA, SISTEMA',              motivo:'Registro de prueba del proveedor', accion:'Descartar'},
  {dni:'2345678',  nombre:'LOPEZ, CARLOS',                motivo:'3 archivos adjuntos sin fecha', accion:'Fecha tomada del nombre del archivo'},
];

/* Rendiciones de días anteriores: valores deterministas por profesional y día (sin cobros de detalle). */
function historialRendiciones(diasHabiles){
  const base = {pm:{t:12, ef:70000, tr:40000, de:12000, mp:10000, or:7}, pr:{t:10, ef:60000, tr:35000, de:0, mp:0, or:6}, erg:{t:6, ef:36000, tr:18000, de:12000, mp:0, or:4}};
  const out = [];
  diasHabiles.forEach((fecha, i) => {
    Object.keys(base).forEach((prof, j) => {
      const b = base[prof]; const k = ((i * 7 + j * 3) % 5) - 2; /* -2..2 */
      const tot = {efectivo:b.ef + k * 5000, transferencia:b.tr + k * 5000, debito:b.de, credito:0, mp:b.mp, ordenes:b.or + (k > 0 ? 1 : 0)};
      tot.total = tot.efectivo + tot.transferencia + tot.debito + tot.credito + tot.mp;
      out.push({id:`r-${prof}-${fecha}`, prof, fecha, estado:'recibida', turnos:b.t + k, cerrada:'19:05', enviada:'19:06', recibida:'20:10', totales:tot, cobros:[]});
    });
  });
  return out;
}

const RESUMEN_OBRAS_MES = [
  {obra:'PAMI',          turnos:184, copagos:0,       ordenes:184},
  {obra:'IPSS',          turnos:131, copagos:2420000, ordenes:131},
  {obra:'OSDE',          turnos:62,  copagos:0,       ordenes:62},
  {obra:'Swiss Medical', turnos:48,  copagos:0,       ordenes:48},
  {obra:'Sancor Salud',  turnos:57,  copagos:795000,  ordenes:57},
  {obra:'Particular',    turnos:73,  copagos:3105000, ordenes:0},
];
