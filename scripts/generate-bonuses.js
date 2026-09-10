import fs from 'fs';
import path from 'path';

console.log('Generating Bonuses data...');

// Bono 1: Guia del Entrenador Chapters
const guiaCapitulos = [
  {
    id: 'cap1',
    title: '1. Principios de la Planificación de Sesiones',
    summary: 'Cómo diseñar entrenamientos con coherencia metodológica y pedagógica.',
    content: `La planificación eficaz es la base del éxito de cualquier entrenador. Una sesión bien estructurada debe responder siempre a cuatro preguntas esenciales: ¿Qué queremos mejorar? ¿Por qué es prioritario ahora? ¿Cómo lo experimentarán los jugadores? ¿Cómo sabremos si se ha asimilado?

Estructura óptima recomendada:
• Fase 1 - Activación y Calentamiento (10-15 min): Entrada en calor dinámica, movilidad y estimulación cognitiva con balón.
• Fase 2 - Bloque Técnico-Táctico Introductorio (15-20 min): Rondas, posesiones condicionadas o tareas combinativas en espacio reducido.
• Fase 3 - Bloque Principal / Situación Real (25-30 min): Juegos de posición o partidos reducidos (SSG) con objetivos tácticos definidos.
• Fase 4 - Vuelta a la Calma y Feedback (5-10 min): Bajas pulsaciones, estiramientos activos y diálogo reflexivo con el grupo.`
  },
  {
    id: 'cap2',
    title: '2. Definición de Objetivos Técnicos y Tácticos',
    summary: 'Diferenciación entre objetivos de proceso y objetivos de resultado.',
    content: `Los objetivos deben ser medibles, observables y alcanzables según la categoría:
• Objetivos Técnicos: Calidad del primer toque orientado, golpeo con empeine total, timing del desmarque, precisión en pases tensos.
• Objetivos Tácticos Colectivos: Crear superioridad numérica en salida, fijar marcas interiores, bascular coordinadamente hacia el balón, achicar espacios hacia delante tras despeje.
• Regla de oro: No trabajar más de 2 objetivos principales por sesión para no saturar la carga cognitiva de los jugadores.`
  },
  {
    id: 'cap3',
    title: '3. Organización Espacial y Gestión del Material',
    summary: 'Optimización del tiempo útil de entrenamiento (Time on Task).',
    content: `El tiempo útil de entrenamiento (balón en juego real) en sesiones amateurs suele ser inferior al 40%. Con una organización profesional podemos elevarlo por encima del 75%:
• Montaje anticipado: Delimitar todas las estaciones con setas de distintos colores antes de la llegada del equipo.
• Reducción de filas: Ningún jugador debe esperar más de 15 segundos su turno en tareas analíticas.
• Provisión de balones: Distribuir balones alrededor de todo el perímetro para reinicios inmediatos.`
  },
  {
    id: 'cap4',
    title: '4. El Arte de la Corrección Pedagógica',
    summary: 'Intervenciones del entrenador: parar la jugada vs. corrección al vuelo.',
    content: `El exceso de interrupciones corta el ritmo de la sesión y genera frustración:
• Corrección al vuelo: Instrucción breve dirigida a un jugador individual mientras el juego continúa ("¡Gira la cadera antes de recibir!").
• Pregunta reflexiva: En lugar de dar la solución, preguntar al jugador: "¿Qué opción de pase tenías a la izquierda?".
• Parada congelada (Freeze): Usar solo para errores colectivos estructurales graves. Máximo 30 segundos de explicación.`
  },
  {
    id: 'cap5',
    title: '5. Dosificación de la Intensidad y Carga Física',
    summary: 'Morfociclo patrón y modulación semanal del esfuerzo.',
    content: `La periodización táctica moderna organiza la semana de competición:
• MD+1 (Postpartido): Recuperación activa y regeneración.
• MD-4: Fuerza y tensión muscular (espacios muy reducidos, aceleraciones y frenadas 1v1 / 2v2).
• MD-3: Resistencia aeróbica y volumen táctico (espacios amplios 8v8 / 11v11, duración extendida).
• MD-2: Velocidad y reactividad (pocas repeticiones, máxima pausa, finalizaciones y velocidad de reacción).
• MD-1: Activación previa al partido, estrategia y balón parado.`
  },
  {
    id: 'cap6',
    title: '6. Evaluación Continua y Registro del Progreso',
    summary: 'Herramientas prácticas para medir la evolución individual y del equipo.',
    content: `Un entrenador profesional no evalúa por impresiones subjetivas del domingo:
• Fichas técnicas por posición para registrar variables clave cada 4-6 semanas.
• Auto-evaluación del jugador: Fomentar el compromiso y autocrítica positiva.
• Grabación en vídeo de fragmentos de partidos para sesiones de vídeo cortas (máximo 8 minutos).`
  }
];

// Bono 2: 100 Sesiones de entrenamiento listas
const sesiones100 = [];
const objetivosSesion = [
  'Salida de balón y superación de la primera línea de presión',
  'Ataque organizado y desbordes 2v1 por carriles exteriores',
  'Transición rápida defensa-ataque tras robo en medio campo',
  'Presión alta en bloque y recuperación en campo contrario',
  'Finalización y remates en situaciones de centro lateral',
  'Basculación defensiva y defensa del área en bloque bajo',
  'Juego de posición y conservación con tercer hombre',
  'Velocidad de circulación y cambios de orientación precisos',
  'Ataque directo y disputa de segunda jugada',
  'Fuerza explosiva, duelos 1v1 y definición bajo fatiga'
];

for (let i = 1; i <= 100; i++) {
  const obj = objetivosSesion[(i - 1) % objetivosSesion.length];
  const edad = ['9–11 años', '12–14 años', '15–17 años', 'Adultos'][i % 4];
  const nivel = ['Principiante', 'Intermedio', 'Avanzado'][(i + 1) % 3];
  const dur = [60, 75, 90, 100][i % 4];
  const jug = [12, 14, 16, 18, 20][i % 5];

  sesiones100.push({
    id: `SES-${String(i).padStart(3, '0')}`,
    numero: i,
    titulo: `Sesión Completa #${i}: ${obj}`,
    objetivo: obj,
    edad,
    nivel,
    jugadores: `${jug} jugadores + 2 porteros`,
    duracion: `${dur} minutos`,
    calentamiento: {
      titulo: 'Activación con balón y rondos',
      duracion: '15 min',
      descripcion: 'Movilidad articular dinámica, coordinación en escalera y rondo 4v2 con límite a dos toques.',
      ejercicioId: `EX${String(((i * 3) % 65) + 1).padStart(3, '0')}`
    },
    partePrincipal: [
      {
        fase: 'Fase 1: Tarea Combinativa',
        duracion: `${Math.round(dur * 0.25)} min`,
        descripcion: 'Circuito técnico de pases progresivos en rombo con finalización en miniporterías.',
        ejercicioId: `EX${String(((i * 7) % 150) + 100).padStart(3, '0')}`
      },
      {
        fase: 'Fase 2: Tarea Táctica Específica',
        duracion: `${Math.round(dur * 0.35)} min`,
        descripcion: 'Juego de posición o partido reducido en espacio sectorizado aplicando el concepto principal.',
        ejercicioId: `EX${String(((i * 11) % 200) + 300).padStart(3, '0')}`
      }
    ],
    vueltaCalma: {
      duracion: '10 min',
      descripcion: 'Trote regenerativo suave, estiramientos activos globales y charla técnica de balance.'
    }
  });
}

// Bono 3: 150 Ejercicios de Finalización
const ejerciciosFinalizacion150 = [];
const tiposFin = [
  'Disparo tras pared corta frontal y desmarque al hueco',
  'Remate de cabeza y volea tras centro lateral con oposición',
  'Duelo 1v1 con el portero saliendo en velocidad',
  'Finalización de segunda jugada tras rechace o bloqueo',
  'Tiro de media distancia con efecto tras recorte exterior',
  'Llegada al segundo palo en velocidad tras cambio de juego',
  'Tiro cruzado con pie no dominante tras finta corporal',
  'Remate de primera intención al primer poste anticipando al central',
  'Finalización en carrera tras pase filtrado al espacio',
  'Transición ofensiva rápida 2v1 con remate en menos de 6 segundos'
];

for (let i = 1; i <= 150; i++) {
  const tipo = tiposFin[(i - 1) % tiposFin.length];
  ejerciciosFinalizacion150.push({
    id: `FIN-${String(i).padStart(3, '0')}`,
    numero: i,
    nombre: `${tipo} (Variante #${i})`,
    objetivo: 'Potenciar la contundencia en el remate a portería bajo diversas trayectorias y oposición real.',
    materiales: '1 portería reglamentaria, 1 portero, 10 balones, 6 conos, 2 siluetas defensivas.',
    duracion: '15 min',
    intensidad: 'Alta',
    pasos: [
      '1. El pasador inicia la jugada desde el borde del área o banda.',
      '2. El delantero realiza un movimiento de engaño (finta hacia dentro y salida hacia fuera).',
      '3. Golpeo al primer toque buscando el poste más lejano del guardameta.',
      '4. Carrera inmediata hacia el posible rechace.'
    ],
    consejoPro: 'Fijar el tobillo firmemente en el momento del impacto y no inclinar el tronco hacia atrás para evitar que el disparo se eleve excesivamente.'
  });
}

// Bono 4: 120 Ejercicios de Técnica Individual
const ejerciciosTecnica120 = [];
const tiposTecnica = [
  'Control orientado con interior y salida explosiva exterior',
  'Conducción con cambios de ritmo y giros de 180° en cono',
  'Regate de elástica y finta de cuerpo con pie dominante',
  'Protección de balón de espaldas con brazo de apoyo y giro',
  'Toques alternados de precisión con empeine y muslo',
  'Pase tenso a pared y control amortiguado con pecho o suela',
  'Cambio de dirección en 90° con la suela del pie',
  'Doble bicicleta y aceleración en línea recta'
];

for (let i = 1; i <= 120; i++) {
  const tipo = tiposTecnica[(i - 1) % tiposTecnica.length];
  ejerciciosTecnica120.push({
    id: `TEC-${String(i).padStart(3, '0')}`,
    numero: i,
    nombre: `${tipo} - Nivel Pro #${i}`,
    objetivo: 'Dominio absoluto de la superficie de contacto y automatización biomecánica individual.',
    repeticiones: '4 series de 45 segundos con 30 segundos de descanso activo.',
    puntosClave: 'Mantener el centro de gravedad bajo, cabeza erguida para visión periférica y toques sutiles pero seguros.'
  });
}

// Bono 5: 100 Ejercicios Tácticos
const ejerciciosTacticos100 = [];
const tiposTacticos = [
  'Salida de balón 3 central + 2 pivotes vs 3 delanteros rivales',
  'Presión alta en saque de meta rival con marcaje al hombre',
  'Basculación en bloque medio con repliegue zonal tras pase atrás',
  'Transición ofensiva rápida aprovechando el espacio dejado por los laterales',
  'Generación de superioridad en banda mediante triangulación 3v2',
  'Ataque posicional contra bloque bajo cerrado de 5 defensas',
  'Desmarque coordinado de apoyo y ruptura en profundidad de los delanteros',
  'Coberturas entre centrales ante desborde interior del rival'
];

for (let i = 1; i <= 100; i++) {
  const tipo = tiposTacticos[(i - 1) % tiposTacticos.length];
  ejerciciosTacticos100.push({
    id: `TAC-${String(i).padStart(3, '0')}`,
    numero: i,
    nombre: `${tipo} (Estructura #${i})`,
    objetivo: 'Comprender los principios del juego colectivo y sincronizar las líneas en tiempo y espacio.',
    jugadores: '6v6 a 10v10 + porteros',
    espacio: 'Medio campo reglamentario o 3/4 de campo',
    reglaEspecial: 'Gol con valor doble si se produce tras cambio de orientación o combinación a 2 toques.'
  });
}

// Bono 6: Programa de Velocidad y Agilidad
const programaVelocidad = {
  titulo: 'Programa de Velocidad y Agilidad para Futbolistas',
  descripcion: 'Protocolo de entrenamiento progresivo dividido en 4 niveles para maximizar aceleración, COD y potencia reactiva.',
  niveles: [
    {
      nivel: 'Nivel 1: Coordinación y Técnica de Carrera (Semanas 1-2)',
      frecuencia: '2 sesiones semanales de 25 minutos',
      objetivos: 'Higiene postural, apoyo sobre metatarsos,braceo coordinado y activación del core.',
      ejercicios: [
        'Skipping bajo y medio en escalera de agilidad (2x4 pasadas)',
        'Salidas desde diferentes posiciones corporales (tumbado, sentados, de espaldas) a 10m',
        'Frenadas controladas en 2 tiempos delimitadas por conos'
      ]
    },
    {
      nivel: 'Nivel 2: Aceleración Lineal y Deceleración (Semanas 3-4)',
      frecuencia: '2 sesiones semanales de 30 minutos',
      objetivos: 'Fuerza de empuje horizontal y desaceleración excéntrica segura para prevenir lesiones.',
      ejercicios: [
        'Sprints de 5m, 10m y 15m con cronometraje o estímulo visual',
        'Deceleraciones reactivas: sprint a máxima velocidad y frenada en 2 metros',
        'Arrancadas resistidas con elástico o arnés deportivo'
      ]
    },
    {
      nivel: 'Nivel 3: Cambios de Dirección (COD) y Agilidad Específica (Semanas 5-6)',
      frecuencia: '2 sesiones semanales de 30 minutos',
      objetivos: 'Capacidad de virar a 45°, 90° y 180° manteniendo el equilibrio y velocidad de salida.',
      ejercicios: [
        'Circuito en W y en T de agilidad con balón al final del recorrido',
        'Duelos de persecución en espejo con compañero a 5 metros de distancia',
        'Eslalon reactivo con fintas sobre picas verticales'
      ]
    },
    {
      nivel: 'Nivel 4: Velocidad Reactiva y Toma de Decisión (Semanas 7-8)',
      frecuencia: '2 sesiones semanales de 35 minutos',
      objetivos: 'Velocidad de reacción ante estímulos aleatorios del juego (pase, voz o señal luminosa).',
      ejercicios: [
        'Sprint reactivo según el color del cono gritado por el entrenador con remate posterior',
        'Duelos 1v1 con arrancada a la señal de caída del balón',
        'Juego reducido de transiciones continuas de 15 segundos a máxima intensidad'
      ]
    }
  ]
};

// Bono 7: Fútbol Base por Edades
const guiaFutbolBase = [
  {
    categoria: '6–8 años (Prebenjamín / Iniciación)',
    etapa: 'Fase Egocéntrica y Lúdica',
    objetivos: 'Descubrimiento del balón, diversión máxima, multilateralidad y coordinación básica.',
    caracteristicas: 'Atención breve (10-15 minutos por actividad), dificultad para entender táctica colectiva o pases.',
    recomendaciones: 'Muchos juegos con 1 balón por niño. Sin posiciones fijas. Partidos 3v3 o 4v4 sin fueras de juego ni clasificaciones.',
    duracionSesion: '45 a 60 minutos'
  },
  {
    categoria: '9–11 años (Benjamín / Alevín)',
    etapa: 'La Edad de Oro del Aprendizaje Motor',
    objetivos: 'Asimilación rápida de gestos técnicos: controles, pases, regates y primeros conceptos de espacio.',
    caracteristicas: 'Gran motivación, aumento de la capacidad de cooperación y comprensión de reglas espaciales.',
    recomendaciones: 'Rondos dinámicos, partidos reducidos 7v7, rotación de puestos y respeto absoluto al rival y árbitro.',
    duracionSesion: '60 a 75 minutos'
  },
  {
    categoria: '12–14 años (Infantil)',
    etapa: 'Transición al Fútbol 11 y Maduración',
    objetivos: 'Comprensión de líneas de juego, roles tácticos, inicio de la preparación física específica coordinativa.',
    caracteristicas: 'Cambios hormonales y de crecimiento. Posibles desajustes temporales de coordinación motora.',
    recomendaciones: 'Paciencia en las correcciones posturales. Explicar el "por qué" táctico de cada ejercicio.',
    duracionSesion: '75 a 90 minutos'
  },
  {
    categoria: '15–17 años (Cadete y Juvenil)',
    etapa: 'Alto Rendimiento y Especialización',
    objetivos: 'Velocidad de ejecución, rigor táctico, transiciones instantáneas y fortaleza psicológica competitiva.',
    caracteristicas: 'Capacidad cognitiva y física cercana al adulto. Gran ambición competitiva.',
    recomendaciones: 'Sesiones de alta intensidad táctica, análisis en vídeo y planes individualizados de fuerza.',
    duracionSesion: '90 minutos'
  }
];

// Bono 8: Plan de 30 Días
const plan30Dias = [];
for (let d = 1; d <= 30; d++) {
  const isRest = d % 7 === 0;
  if (isRest) {
    plan30Dias.push({
      dia: d,
      titulo: `Día ${d}: Descanso Activo o Recuperación`,
      objetivo: 'Regeneración muscular, hidratación y análisis reflexivo.',
      duracion: '30 min o descanso total',
      intensidad: 'Baja',
      ejercicios: ['Paseos, movilidad suave, foam roller y visualización de jugadas tácticas.'],
      consejo: 'El descanso forma parte del entrenamiento. Dormir 8 horas optimiza la síntesis proteica.'
    });
  } else {
    const focusList = [
      'Activación neuromuscular y precisión de pase corto',
      'Duelos 1v1 y finalización bajo presión de tiempo',
      'Transición defensiva inmediata tras pérdida de balón',
      'Velocidad de reacción, agilidad en cono y remate cruzado',
      'Juego posicional, tercer hombre y cambios de frente',
      'Simulación competitiva y balones parados ofensivos'
    ];
    const focus = focusList[(d - 1) % focusList.length];
    plan30Dias.push({
      dia: d,
      titulo: `Día ${d}: ${focus}`,
      objetivo: `Consolidar ${focus.toLowerCase()} con repeticiones de alta concentración.`,
      duracion: `${60 + (d % 3) * 15} min`,
      intensidad: d % 3 === 0 ? 'Alta' : 'Media',
      ejercicios: [
        `Calentamiento dinámico con balón (${15} min)`,
        `Bloque analítico específico de ${focus.split('y')[0]} (${20} min)`,
        `Partido reducido 4v4 o 6v6 con regla condicionada (${30} min)`
      ],
      consejo: 'Anota tus sensaciones en la ficha técnica al terminar la jornada para comparar tu evolución.'
    });
  }
}

// Bono 9: Pack de Fichas Técnicas templates
const fichasTemplates = {
  descripcion: 'Modelos profesionales listos para usar, editar, duplicar, imprimir y guardar localmente en tu dispositivo.'
};

const output = `// Auto-generated 9 Professional Bonuses data
export const GUIA_ENTRENADOR = ${JSON.stringify(guiaCapitulos, null, 2)};
export const SESIONES_100 = ${JSON.stringify(sesiones100, null, 2)};
export const EJERCICIOS_FINALIZACION_150 = ${JSON.stringify(ejerciciosFinalizacion150, null, 2)};
export const EJERCICIOS_TECNICA_120 = ${JSON.stringify(ejerciciosTecnica120, null, 2)};
export const EJERCICIOS_TACTICOS_100 = ${JSON.stringify(ejerciciosTacticos100, null, 2)};
export const PROGRAMA_VELOCIDAD = ${JSON.stringify(programaVelocidad, null, 2)};
export const GUIA_FUTBOL_BASE = ${JSON.stringify(guiaFutbolBase, null, 2)};
export const PLAN_30_DIAS = ${JSON.stringify(plan30Dias, null, 2)};

export const BONUSES_METADATA = [
  {
    id: 1,
    numberStr: 'BONO 1',
    title: 'Guía Profesional del Entrenador de Fútbol',
    shortDesc: 'Planificación de sesiones, pedagogía de corrección, morfociclo patrón y dirección de equipo.',
    fullDesc: 'Manual metodológico completo para entrenadores modernos: desde el diseño de microciclos hasta la gestión del tiempo útil y la comunicación positiva.',
    features: ['6 Capítulos exhaustivos', 'Morfociclo patrón explicado', 'Técnicas de corrección pedagógica', 'Gestión de cargas físicas'],
    badge: 'Manual Metodológico',
    iconName: 'BookOpen'
  },
  {
    id: 2,
    numberStr: 'BONO 2',
    title: '100 Sesiones de Entrenamiento Listas',
    shortDesc: '100 sesiones estructuradas paso a paso con calentamiento, fase principal y vuelta a la calma.',
    fullDesc: 'Colección de 100 sesiones completas organizadas por edades y niveles, listas para llevar al campo sin perder horas planificando.',
    features: ['100 Sesiones completas', 'Filtro por edades y niveles', 'Desglose minuto a minuto', 'Objetivos claros y medibles'],
    badge: '100 Sesiones',
    iconName: 'ClipboardList'
  },
  {
    id: 3,
    numberStr: 'BONO 3',
    title: '150 Ejercicios de Finalización',
    shortDesc: '150 ejercicios exclusivos para disparos, centros, 1v1, segundas jugadas y voleas.',
    fullDesc: 'La recopilación más potente de finalizaciones: situaciones reales de partido, tiros en carrera, remates al primer toque y definición bajo presión.',
    features: ['150 Drills exclusivos', 'Consejos pro de golpeo', 'Variedad de trayectorias', 'Oposición progresiva'],
    badge: '150 Ejercicios',
    iconName: 'Target'
  },
  {
    id: 4,
    numberStr: 'BONO 4',
    title: '120 Ejercicios de Técnica Individual',
    shortDesc: '120 ejercicios de control, regate, giros, protección y dominio con ambas piernas.',
    fullDesc: 'Catálogo de maestría técnica para elevar el talento individual de tus futbolistas: controles orientados, cambios de dirección y fintas.',
    features: ['120 Drills de técnica', 'Ambas piernas', 'Dominio del espacio', 'Micro-habilidades clave'],
    badge: '120 Ejercicios',
    iconName: 'Footprints'
  },
  {
    id: 5,
    numberStr: 'BONO 5',
    title: '100 Ejercicios Tácticos',
    shortDesc: '100 ejercicios de presión, basculación, coberturas, salida de balón y transiciones.',
    fullDesc: 'Entrenamientos tácticos colectivos para dotar a tu equipo de inteligencia posicional, sincronía de líneas y superioridades numéricas.',
    features: ['100 Tareas tácticas', 'Superioridades e inferioridades', 'Juegos de posición', 'Presión tras pérdida'],
    badge: '100 Ejercicios',
    iconName: 'Shield'
  },
  {
    id: 6,
    numberStr: 'BONO 6',
    title: 'Programa de Velocidad y Agilidad',
    shortDesc: 'Plan progresivo en 4 niveles para aceleración, cambios de dirección (COD) y reactividad.',
    fullDesc: 'Desarrolla la velocidad explosiva que marca diferencias en el fútbol moderno mediante un programa de 8 semanas paso a paso.',
    features: ['4 Niveles progresivos', 'Ejercicios con y sin balón', 'Prevención de lesiones', 'Protocolo de aceleración'],
    badge: 'Programa 8 Semanas',
    iconName: 'Zap'
  },
  {
    id: 7,
    numberStr: 'BONO 7',
    title: 'Fútbol Base: Guía por Edades',
    shortDesc: 'Metodología pedagógica y adaptaciones específicas para 6-8, 9-11, 12-14 y 15-17 años.',
    fullDesc: 'Guía imprescindible para entrenadores formadores: comprende las fases sensibles del desarrollo motriz y psicológico según la edad.',
    features: ['4 Rangos de edad', 'Objetivos psicomotores', 'Límites de carga recomendados', 'Reglas pedagógicas'],
    badge: 'Guía Formativa',
    iconName: 'Users'
  },
  {
    id: 8,
    numberStr: 'BONO 8',
    title: 'Plan de Entrenamiento de 30 Días',
    shortDesc: 'Calendario completo de 30 días estructurado con progresión diaria y descansos activos.',
    fullDesc: 'Una pretemporada o bloque de acondicionamiento de 30 días listo para aplicar, con objetivos diarios, dosificación de cargas y consejos prácticos.',
    features: ['30 Días planificados', 'Calendario interactivo', 'Cargas equilibradas', 'Descansos inteligentes'],
    badge: 'Plan 30 Días',
    iconName: 'Calendar'
  },
  {
    id: 9,
    numberStr: 'BONO 9',
    title: 'Pack de Fichas Técnicas de Entrenamiento',
    shortDesc: 'Ficha de sesión, ejercicio, evaluación de jugador, equipo y planificador semanal.',
    fullDesc: 'Conjunto de herramientas profesionales interactivas que puedes rellenar, guardar en tu dispositivo, duplicar, editar e imprimir para tus entrenamientos.',
    features: ['Ficha de Sesión', 'Ficha de Ejercicio', 'Evaluación Jugador 1-10', 'Evaluación Equipo', 'Plan Semanal Lun-Dom'],
    badge: '5 Plantillas Pro',
    iconName: 'FileSpreadsheet'
  }
];
`;

const destFile = path.resolve('src/data/bonuses.ts');
fs.writeFileSync(destFile, output, 'utf-8');
console.log('Successfully generated src/data/bonuses.ts!');
