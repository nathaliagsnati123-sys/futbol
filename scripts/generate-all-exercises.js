import fs from 'fs';
import path from 'path';

// Category distribution
const categoryConfigs = [
  { id: '01. Calentamiento', count: 65, start: 1, end: 65 },
  { id: '02. Técnica Individual', count: 70, start: 66, end: 135 },
  { id: '03. Pase y Recepción', count: 75, start: 136, end: 210 },
  { id: '04. Regate y 1 contra 1', count: 65, start: 211, end: 275 },
  { id: '05. Finalización y Tiro', count: 80, start: 276, end: 355 },
  { id: '06. Ataque', count: 65, start: 356, end: 420 },
  { id: '07. Defensa', count: 65, start: 421, end: 485 },
  { id: '08. Transiciones', count: 60, start: 486, end: 545 },
  { id: '09. Táctica', count: 65, start: 546, end: 610 },
  { id: '10. Velocidad y Agilidad', count: 60, start: 611, end: 670 },
  { id: '11. Preparación Física', count: 55, start: 671, end: 725 },
  { id: '12. Porteros', count: 60, start: 726, end: 785 },
  { id: '13. Fútbol Base', count: 65, start: 786, end: 850 },
  { id: '14. Ejercicios Individuales', count: 50, start: 851, end: 900 },
  { id: '15. Ejercicios en Parejas', count: 55, start: 901, end: 955 },
  { id: '16. Ejercicios Colectivos', count: 45, start: 956, end: 1000 },
];

// Rich domain vocabularies for realistic football drills
const subcategoriesByCategory = {
  '01. Calentamiento': ['Movilidad Articular Dinámica', 'Activación Neuromuscular', 'Juegos de Posesión Ligera', 'Circuitos Técnicos Dinámicos', 'Rondos de Entrada en Calor', 'Coordinación con Balón'],
  '02. Técnica Individual': ['Control Orientado', 'Conducción y Giros', 'Protección del Balón', 'Fintas y Amagos', 'Golpeo con Ambas Piernas', 'Dominio Aéreo'],
  '03. Pase y Recepción': ['Pase Corto y Primer Toque', 'Tercer Hombre y Paredes', 'Pase Medio y Filtrado', 'Cambio de Orientación', 'Pase con Desmarque', 'Líneas de Pase en Tensión'],
  '04. Regate y 1 contra 1': ['Duelos en Espacio Reducido', 'Regate con Finta Exterior', 'Desborde por Banda', '1v1 Frontal con Portería', '1v1 de Espaldas a Meta', 'Regate tras Control Orientado'],
  '05. Finalización y Tiro': ['Tiro Tras Pared Frontal', 'Centros y Remates al Primer Palo', 'Segunda Jugada y Rebote', 'Disparo de Media Distancia', 'Mano a Mano con Portero', 'Voleas y Semivoleas'],
  '06. Ataque': ['Salida de Balón desde Atrás', 'Ataque Posicional Organizado', 'Desmarques de Ruptura', 'Superioridades Ofensivas 3v2 y 4v3', 'Centros Laterales con Doble Llegada', 'Ataque Rápido por Bandas'],
  '07. Defensa': ['Basculación y Línea de 4', 'Duelos Defensivos y Temporización', 'Presión Alta Tras Pérdida', 'Coberturas y Permutas', 'Defensa de Centros al Área', 'Achique hacia Delante'],
  '08. Transiciones': ['Transición Ofensiva Rápida (Contraataque)', 'Transición Defensiva (Presión Inmediata)', 'Cambio Rápido de Chip 3v2 a 2v3', 'Despliegue Vertical tras Robo', 'Replegarse o Presionar', 'Transición con Comodín Exterior'],
  '09. Táctica': ['Ocupación Racional del Espacio', 'Juego de Posición en Zonas', 'Rombo y Estructuras en Bloque', 'Amplitud y Profundidad Ofensiva', 'Escalafonamiento en Salida', 'Juego en Intervalos Interiores'],
  '10. Velocidad y Agilidad': ['Aceleración Lineal y Deceleración', 'Cambios de Dirección (COD)', 'Velocidad de Reacción Auditiva/Visual', 'Circuitos de Escalera de Agilidad y Balón', 'Sprints Cortos con Duelo Técnico', 'Velocidad Gestual con Balón'],
  '11. Preparación Física': ['Fuerza Resistencia Específica', 'Potencia Aeróbica en Espacio Reducido', 'Juegos Reducidos de Alta Densidad (SSG)', 'Capacidad de Repetición de Sprints (RSA)', 'Fuerza Explosiva en Saltos y Caídas', 'Resistencia Intermitente'],
  '12. Porteros': ['Posicionamiento y Blocaje Frontal', 'Desvíos y Vuelos Laterales', 'Juego Aéreo en Salidas de Córner', 'Mano a Mano y Achiques', 'Inicio del Juego con Pie y Mano', 'Reacción Rápida a Doble Remate'],
  '13. Fútbol Base': ['Iniciación al Pase y Control Divertido', 'Juegos Recreativos de Conducción', 'Mini-Partidos con Retos Técnicos', 'Coordinación Motriz Multideporte', 'Toma de Decisiones Lúdica', 'Fundamentos Básicos sin Presión'],
  '14. Ejercicios Individuales': ['Circuito Técnico en Conos Solitario', 'Técnica de Reboteador en Pared', 'Control y Orientación con 4 Esquinas', 'Conducción en Zigzag de Alta Frecuencia', 'Malabarismos y Toques de Precisión', 'Autopase y Remate de Precisión'],
  '15. Ejercicios en Parejas': ['Pases Dinámicos con Movimiento Continuo', 'Duelo 1v1 con Cambio de Rol Inmediato', 'Paredes en Progresión por Carril', 'Centro y Remate en Tándem', 'Protección y Despojo entre Dos', 'Desmarques Cruzados en Pareja'],
  '16. Ejercicios Colectivos': ['Partido Condicionado a 3 Toques', 'Juego de Posición 7v7 + 3 Comodines', 'Fútbol Reducido con 4 Porterías Pequeñas', 'Oleadas Ofensivas 5v4 en Medio Campo', 'Simulación Real de Partido 8v8', 'Juego de Sector por Carriles']
};

const pitchTypes = ['half_pitch', 'full_pitch', 'penalty_box', 'rondos_grid', 'lane_grid'];

function getCategoryForIndex(idx) {
  for (const cat of categoryConfigs) {
    if (idx >= cat.start && idx <= cat.end) {
      return cat.id;
    }
  }
  return '01. Calentamiento';
}

function padZero(num) {
  return String(num).padStart(3, '0');
}

// Generate an exercise systematically with rich content
function generateSingleExercise(num) {
  const id = `EX${padZero(num)}`;
  const category = getCategoryForIndex(num);
  const subList = subcategoriesByCategory[category];
  const subcategory = subList[(num - 1) % subList.length];

  // Specific age groups rotation
  const ages = ['6–8 años', '9–11 años', '12–14 años', '15–17 años', 'Adultos', 'Todas las edades'];
  let edad = ages[(num * 3) % ages.length];
  if (category === '13. Fútbol Base') {
    edad = ['6–8 años', '9–11 años', '12–14 años'][num % 3];
  }

  // Levels
  const levels = ['Principiante', 'Intermedio', 'Avanzado'];
  const nivel = levels[(num + 1) % levels.length];

  // Players
  let minP = 4, maxP = 12, pGroup = '6–10';
  if (category === '14. Ejercicios Individuales') {
    minP = 1; maxP = 1; pGroup = '1';
  } else if (category === '15. Ejercicios en Parejas') {
    minP = 2; maxP = 2; pGroup = '2';
  } else if (category === '04. Regate y 1 contra 1') {
    minP = 2; maxP = 4; pGroup = '3–5';
  } else if (category === '16. Ejercicios Colectivos') {
    minP = 12; maxP = 18; pGroup = '16+';
  } else if (category === '03. Pase y Recepción' || category === '01. Calentamiento') {
    const pick = num % 3;
    if (pick === 0) { minP = 4; maxP = 8; pGroup = '6–10'; }
    else if (pick === 1) { minP = 6; maxP = 12; pGroup = '11–15'; }
    else { minP = 3; maxP = 5; pGroup = '3–5'; }
  } else if (category === '12. Porteros') {
    minP = 2; maxP = 4; pGroup = '3–5';
  } else {
    minP = 6; maxP = 14; pGroup = '6–10';
  }

  // Duration
  const durations = ['10 min', '15 min', '20 min', '25 min', '30 min'];
  const duracion = durations[num % durations.length];
  const duracionMinutes = parseInt(duracion);

  // Intensity
  const intensities = ['Baja', 'Media', 'Alta'];
  let intensidad = intensities[(num + 2) % intensities.length];
  if (category === '01. Calentamiento') intensidad = num % 2 === 0 ? 'Baja' : 'Media';
  if (category === '10. Velocidad y Agilidad' || category === '11. Preparación Física') intensidad = 'Alta';

  // Space
  const spaces = ['Pequeño', 'Medio', 'Grande'];
  const espacio = spaces[(num + 1) % spaces.length];

  // Generate realistic distinct names based on tactical scenario
  const actionTerms = [
    'Rondo con Tercer Hombre y Transición Rápida',
    'Circuito Técnico de Control y Pase Tensado',
    'Duelo 1v1 con Finalización Tras Desmarque',
    'Salida de Balón Frente a Presión Alta',
    'Basculación en Bloque y Cobertura Defensiva',
    'Ataque Rápido por Bandas y Remate al Primer Palo',
    'Transición Ofensiva con Superioridad 3v2',
    'Presión Tras Pérdida en Zona de Tres Cuartos',
    'Juego de Posición 4v4 + 3 Comodines',
    'Ruptura de Líneas Interiores con Pared en V',
    'Aceleraciones con Fintas y Definición Cruzada',
    'Circuito de Agilidad con Balón y Remate a Puerta',
    'Coordinación de Centrales y Laterales en repliegue',
    'Circulación Rápida de Balón a Dos Toques',
    'Defensa de Centros Laterales con Despeje Orientado',
    'Oleada Ofensiva 4v3 con Incorporación de Segunda Línea',
    'Transición Rápida Defensa-Ataque tras Interceptación',
    'Juego en Espacios Reducidos con Apoyo de Porteros',
    'Desmarque de Apoyo y Tiro Raso Ajustado',
    'Circuito de Fuerza Explosiva y Tiro Tras Giro',
    'Toma de Decisiones Bajo Presión en Rombo',
    'Trabajo de Amplitud con Cambio de Juego Largo',
    'Presión en Bloque Medio y Robo en Carril Central',
    'Movilidad Ofensiva con Permuta de Extremos',
    'Finalización Tras Centro Raso al Punto de Penalti',
    'Eslalon de Alta Velocidad y Definición de Primer Toque'
  ];

  const variants = [
    'Dinámico con Rotación Continua',
    'con Oposición Progresiva',
    'con Apoyos Exteriores',
    'en Cuadrante Delimitado',
    'con Finalización en Miniporterías',
    'con Comodines Interiores',
    'con Límite de Toques',
    'con Cambio de Ritmo Forzado',
    'con Reto de Eficacia Técnica',
    'con Superioridad Numérica Condicionada'
  ];

  const name = `${actionTerms[(num - 1) % actionTerms.length]} ${variants[(num * 7) % variants.length]} #${num}`;

  // Objectives
  const objPrincipal = `Desarrollar y automatizar ${subcategory.toLowerCase()} en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.`;
  const objTecnico = `Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.`;
  const objTatico = `Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.`;

  // Materials
  const mats = [
    '8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.',
    '12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.',
    '16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.',
    '10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.',
    '4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.'
  ];
  const materiales = mats[num % mats.length];

  // Organization
  const orgs = [
    `Delimitar un rectángulo de juego de acuerdo al espacio indicado (${espacio}). Distribuir a los jugadores por puestos específicos o parejas de trabajo con ${materiales.split(',')[0]}. Un jugador o comodín inicia con balón desde la zona de seguridad.`,
    `Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.`,
    `Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.`
  ];
  const organizacion = orgs[num % orgs.length];

  // Desarrollo
  const desarrollos = [
    `El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.`,
    `Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.`,
    `Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.`
  ];
  const desarrollo = desarrollos[num % desarrollos.length];

  const pasoAPaso = [
    `1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.`,
    `2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.`,
    `3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).`,
    `4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.`,
    `5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano.`
  ];

  const puntosClave = [
    `Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.`,
    `Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.`,
    `Comunicación verbal y no verbal activa antes y durante cada pase.`,
    `Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón.`
  ];

  const erroresFrecuentes = [
    `Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.`,
    `Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.`,
    `Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.`,
    `Precipitación en el remate o finta por falta de control emocional bajo presión.`
  ];

  const correcciones = [
    `Corregir la orientación de la cadera al momento del control: "Abre el cuerpo y mira la portería antes de tocar el balón".`,
    `Instar a golpear con mayor firmeza en la zona media del esférico: "Pase raso, firme y con intención".`,
    `Marcar la pauta de movimiento continuo: "Paso y voy, nunca miro el balón parado".`,
    `Pedir serenidad en el último toque: "Levanta la mirada una décima de segundo antes de impactar a portería".`
  ];

  const variacionFacil = `Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.`;
  const variacionDificil = `Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.`;
  const progresion = `Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.`;
  const regresion = `Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.`;

  const posList = [
    'Centrocampistas, interiores y mediapuntas.',
    'Delanteros centros y extremos desequilibrantes.',
    'Defensas centrales y laterales con proyección ofensiva.',
    'Porteros y organizadores de juego desde atrás.',
    'Todos los jugadores de campo en rotación polivalente.'
  ];
  const posiciones = posList[num % posList.length];

  // Specific tags
  const tagsPool = [
    subcategory.toLowerCase(),
    category.split('.')[1].trim().toLowerCase(),
    nivel.toLowerCase(),
    intensidad.toLowerCase(),
    'rondo',
    'posesión',
    'finalización',
    'pressing',
    'táctica',
    'técnica',
    'velocidad',
    'partido reducido',
    '1v1',
    'fútbol base'
  ];
  const tags = Array.from(new Set([subcategory.toLowerCase(), category.split('.')[1].trim().toLowerCase(), 'ejercicio', 'entrenamiento', nivel.toLowerCase()]));

  // Pitch diagram setup
  const pitchType = pitchTypes[num % pitchTypes.length];
  const pitchDiagram = generatePitchDiagram(pitchType, num);

  return {
    id,
    number: num,
    name,
    category,
    subcategory,
    objetivoPrincipal: objPrincipal,
    objetivoTecnico: objTecnico,
    objetivoTatico: objTatico,
    edad,
    nivel,
    jugadoresMin: minP,
    jugadoresMax: maxP,
    jugadoresLabel: pGroup,
    duracion,
    duracionMinutes,
    intensidad,
    espacio,
    materiales,
    organizacion,
    desarrollo,
    pasoAPaso,
    puntosClave,
    erroresFrecuentes,
    correcciones,
    variacionFacil,
    variacionDificil,
    progresion,
    regresion,
    posiciones,
    tags,
    pitchDiagram
  };
}

function generatePitchDiagram(type, seed) {
  // Elements coordinates
  const elements = [];

  if (type === 'half_pitch' || type === 'penalty_box') {
    elements.push({ id: 'goal1', type: 'goal', x: 50, y: 8 });
    elements.push({ id: 'gk1', type: 'player', team: 'gk', label: '1', x: 50, y: 15 });
    elements.push({ id: 'p1', type: 'player', team: 'home', label: '9', x: 45, y: 35 });
    elements.push({ id: 'p2', type: 'player', team: 'home', label: '10', x: 62, y: 55 });
    elements.push({ id: 'p3', type: 'player', team: 'home', label: '7', x: 25, y: 60 });
    elements.push({ id: 'd1', type: 'player', team: 'away', label: '4', x: 48, y: 30 });
    elements.push({ id: 'd2', type: 'player', team: 'away', label: '5', x: 58, y: 45 });
    elements.push({ id: 'ball1', type: 'ball', x: 60, y: 56 });
    elements.push({ id: 'c1', type: 'cone', x: 30, y: 40 });
    elements.push({ id: 'c2', type: 'cone', x: 70, y: 40 });
    elements.push({ id: 'a1', type: 'arrow', arrowType: 'pass', x: 62, y: 55, targetX: 45, targetY: 37 });
    elements.push({ id: 'a2', type: 'arrow', arrowType: 'shot', x: 45, y: 35, targetX: 48, targetY: 10 });
  } else if (type === 'rondos_grid') {
    elements.push({ id: 'c1', type: 'cone', x: 25, y: 25 });
    elements.push({ id: 'c2', type: 'cone', x: 75, y: 25 });
    elements.push({ id: 'c3', type: 'cone', x: 75, y: 75 });
    elements.push({ id: 'c4', type: 'cone', x: 25, y: 75 });
    elements.push({ id: 'p1', type: 'player', team: 'home', label: '3', x: 50, y: 22 });
    elements.push({ id: 'p2', type: 'player', team: 'home', label: '8', x: 78, y: 50 });
    elements.push({ id: 'p3', type: 'player', team: 'home', label: '6', x: 50, y: 78 });
    elements.push({ id: 'p4', type: 'player', team: 'home', label: '4', x: 22, y: 50 });
    elements.push({ id: 'd1', type: 'player', team: 'away', label: 'X1', x: 44, y: 48 });
    elements.push({ id: 'd2', type: 'player', team: 'away', label: 'X2', x: 56, y: 52 });
    elements.push({ id: 'ball1', type: 'ball', x: 52, y: 24 });
    elements.push({ id: 'a1', type: 'arrow', arrowType: 'pass', x: 50, y: 24, targetX: 76, targetY: 48 });
    elements.push({ id: 'a2', type: 'arrow', arrowType: 'run', x: 44, y: 48, targetX: 68, targetY: 46 });
  } else if (type === 'lane_grid') {
    elements.push({ id: 'c1', type: 'cone', x: 20, y: 20 });
    elements.push({ id: 'c2', type: 'cone', x: 50, y: 20 });
    elements.push({ id: 'c3', type: 'cone', x: 80, y: 20 });
    elements.push({ id: 'c4', type: 'cone', x: 20, y: 80 });
    elements.push({ id: 'c5', type: 'cone', x: 50, y: 80 });
    elements.push({ id: 'c6', type: 'cone', x: 80, y: 80 });
    elements.push({ id: 'p1', type: 'player', team: 'home', label: 'A', x: 35, y: 72 });
    elements.push({ id: 'p2', type: 'player', team: 'home', label: 'B', x: 65, y: 72 });
    elements.push({ id: 'd1', type: 'player', team: 'away', label: 'DEF', x: 50, y: 45 });
    elements.push({ id: 'p3', type: 'player', team: 'home', label: 'C', x: 50, y: 28 });
    elements.push({ id: 'ball1', type: 'ball', x: 37, y: 71 });
    elements.push({ id: 'a1', type: 'arrow', arrowType: 'pass', x: 37, y: 70, targetX: 63, targetY: 70 });
    elements.push({ id: 'a2', type: 'arrow', arrowType: 'run', x: 35, y: 70, targetX: 38, targetY: 40 });
  } else {
    // full_pitch
    elements.push({ id: 'goal1', type: 'goal', x: 50, y: 6 });
    elements.push({ id: 'goal2', type: 'goal', x: 50, y: 94 });
    elements.push({ id: 'gk1', type: 'player', team: 'gk', label: '1', x: 50, y: 12 });
    elements.push({ id: 'gk2', type: 'player', team: 'gk', label: '13', x: 50, y: 88 });
    elements.push({ id: 'p1', type: 'player', team: 'home', label: '4', x: 35, y: 30 });
    elements.push({ id: 'p2', type: 'player', team: 'home', label: '5', x: 65, y: 30 });
    elements.push({ id: 'p3', type: 'player', team: 'home', label: '8', x: 50, y: 45 });
    elements.push({ id: 'd1', type: 'player', team: 'away', label: '9', x: 48, y: 40 });
    elements.push({ id: 'd2', type: 'player', team: 'away', label: '10', x: 54, y: 55 });
    elements.push({ id: 'ball1', type: 'ball', x: 48, y: 46 });
    elements.push({ id: 'a1', type: 'arrow', arrowType: 'pass', x: 50, y: 45, targetX: 63, targetY: 32 });
  }

  return {
    type,
    elements
  };
}

// Generate files in 10 batches
const targetDir = path.resolve('src/data/exercises');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Generating 1,000 exercises across 10 modular files...');

for (let batch = 1; batch <= 10; batch++) {
  const start = (batch - 1) * 100 + 1;
  const end = batch * 100;
  const fileName = `exercises-${padZero(start)}-${padZero(end)}.ts`;
  const filePath = path.join(targetDir, fileName);

  const batchExercises = [];
  for (let i = start; i <= end; i++) {
    batchExercises.push(generateSingleExercise(i));
  }

  const content = `import { Exercise } from '../../types';

export const exercises_${batch}: Exercise[] = ${JSON.stringify(batchExercises, null, 2)};
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Created ${fileName} (${batchExercises.length} exercises, EX${padZero(start)} to EX${padZero(end)})`);
}

// Create index.ts
const indexContent = `import { Exercise, CategoryId } from '../../types';
import { exercises_1 } from './exercises-001-100';
import { exercises_2 } from './exercises-101-200';
import { exercises_3 } from './exercises-201-300';
import { exercises_4 } from './exercises-301-400';
import { exercises_5 } from './exercises-401-500';
import { exercises_6 } from './exercises-501-600';
import { exercises_7 } from './exercises-601-700';
import { exercises_8 } from './exercises-701-800';
import { exercises_9 } from './exercises-801-900';
import { exercises_10 } from './exercises-901-1000';

export const allExercises: Exercise[] = [
  ...exercises_1,
  ...exercises_2,
  ...exercises_3,
  ...exercises_4,
  ...exercises_5,
  ...exercises_6,
  ...exercises_7,
  ...exercises_8,
  ...exercises_9,
  ...exercises_10,
];

export const CATEGORIES_LIST: { id: CategoryId; name: string; count: number; icon: string; description: string }[] = [
  {
    id: '01. Calentamiento',
    name: 'Calentamiento',
    count: 65,
    icon: 'Flame',
    description: 'Movilidad articular, activación neuromuscular y juegos de posesión ligera para preparar el cuerpo y mente.'
  },
  {
    id: '02. Técnica Individual',
    name: 'Técnica Individual',
    count: 70,
    icon: 'Footprints',
    description: 'Control orientado, conducción rápida, dominio con ambas piernas, fintas y gestos técnicos esenciales.'
  },
  {
    id: '03. Pase y Recepción',
    name: 'Pase y Recepción',
    count: 75,
    icon: 'GitFork',
    description: 'Tercer hombre, paredes dinámicas, cambios de orientación y juego asociativo bajo presión.'
  },
  {
    id: '04. Regate y 1 contra 1',
    name: 'Regate y 1 contra 1',
    count: 65,
    icon: 'Zap',
    description: 'Duelos ofensivos y defensivos, fintas corporales, cambios de ritmo y desborde por bandas.'
  },
  {
    id: '05. Finalización y Tiro',
    name: 'Finalización y Tiro',
    count: 80,
    icon: 'Target',
    description: 'Disparos frontales, remate de centros, segundas jugadas, tiros con efecto y mano a mano.'
  },
  {
    id: '06. Ataque',
    name: 'Ataque',
    count: 65,
    icon: 'Swords',
    description: 'Salida limpia desde atrás, ataques posicionales, desmarques de ruptura y superioridades numéricas.'
  },
  {
    id: '07. Defensa',
    name: 'Defensa',
    count: 65,
    icon: 'Shield',
    description: 'Basculación de bloque, coberturas, permutas, presión alta tras pérdida y defensa de centros.'
  },
  {
    id: '08. Transiciones',
    name: 'Transiciones',
    count: 60,
    icon: 'ArrowLeftRight',
    description: 'Contraataques verticales inmediatos y repliegue defensivo intensivo tras pérdida del esférico.'
  },
  {
    id: '09. Táctica',
    name: 'Táctica',
    count: 65,
    icon: 'Compass',
    description: 'Ocupación racional de espacios, juego de posición, amplitud, profundidad e intervalos entre líneas.'
  },
  {
    id: '10. Velocidad y Agilidad',
    name: 'Velocidad y Agilidad',
    count: 60,
    icon: 'Gauge',
    description: 'Aceleración lineal, cambios de dirección (COD), coordinación neuromuscular y velocidad de reacción.'
  },
  {
    id: '11. Preparación Física',
    name: 'Preparación Física',
    count: 55,
    icon: 'Activity',
    description: 'Fuerza funcional, potencia aeróbica específica, juegos reducidos de alta intensidad (SSG) y RSA.'
  },
  {
    id: '12. Porteros',
    name: 'Porteros',
    count: 60,
    icon: 'HandMetal',
    description: 'Blocajes, desvíos acrobáticos, juego aéreo, achiques rápidos y distribución precisa con pies y manos.'
  },
  {
    id: '13. Fútbol Base',
    name: 'Fútbol Base',
    count: 65,
    icon: 'Users2',
    description: 'Metodología formativa lúdica para niños, juegos de coordinación motriz y toma de decisiones temprana.'
  },
  {
    id: '14. Ejercicios Individuales',
    name: 'Ejercicios Individuales',
    count: 50,
    icon: 'User',
    description: 'Entrenamientos en solitario con conos, pared de rebote y circuitos de auto-perfeccionamiento técnico.'
  },
  {
    id: '15. Ejercicios en Parejas',
    name: 'Ejercicios en Parejas',
    count: 55,
    icon: 'Users',
    description: 'Pases continuos en progresión, duelos 1v1 con relevo, centros y remates coordinados de a dos.'
  },
  {
    id: '16. Ejercicios Colectivos',
    name: 'Ejercicios Colectivos',
    count: 45,
    icon: 'Layers',
    description: 'Partidos reducidos condicionados, juegos de sector y situaciones de partido 7v7, 8v8 y 11v11.'
  }
];

export function getExerciseById(id: string): Exercise | undefined {
  return allExercises.find((e) => e.id.toLowerCase() === id.toLowerCase());
}

export function getExercisesByCategory(catId: CategoryId): Exercise[] {
  return allExercises.filter((e) => e.category === catId);
}
`;

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');
console.log('Created index.ts with full allExercises export!');
