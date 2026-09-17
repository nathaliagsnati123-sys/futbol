import { Exercise, CategoryId, AgeGroup, SkillLevel, IntensityLevel, SpaceSize, PlayerGroup } from '../src/types';
import { buildPitchDiagram } from './diagramBuilder';

export function generateCategory1to4(): Exercise[] {
  const exercises: Exercise[] = [];

  // ==========================================
  // CATEGORY 01: CALENTAMIENTO (65 exercises: EX001 - EX065)
  // ==========================================
  const cat1 = '01. Calentamiento' as CategoryId;
  const cat1Subs = [
    'Movilidad Articular Dinámica',
    'Activación Neuromuscular',
    'Juegos de Posesión Ligera',
    'Circuitos Técnicos Dinámicos',
    'Rondos de Entrada en Calor',
    'Coordinación con Balón'
  ];

  const cat1Themes = [
    {
      sub: 'Movilidad Articular Dinámica',
      names: [
        'Rueda de Movilidad Pélvica y Cadera con Pase Tenso Frontal',
        'Circuito de Movilidad Escapular y Tronco con Pared a Dos Toques',
        'Desplazamiento Dinámico en Z con Skiping y Control Orientado',
        'Movilidad Coxofemoral con Aperturas Dinámicas y Pase de Primer Toque',
        'Paso Dinámico sobre Vallas Bajas con Devolución de Empeine Aéreo',
        'Movilidad en Estocada Frontal con Rotación y Pase al Espacio',
        'Circuito de Isquiotibiales Dinámicos con Control con Planta y Entrega',
        'Movilidad Articular por Parejas con Giros de 180 Grados y Conducción',
        'Circuito de Activación Articular Multidireccional con Balón en Mano y Suelo',
        'Activación Articular con Carrera Progresiva y Pase Corto Rasante',
        'Movilidad Dinámica de Tobillos y Gemelos con Finta Previa al Pase'
      ],
      ages: ['9–11 años', '12–14 años', '15–17 años', 'Adultos'] as AgeGroup[],
      intensity: 'Baja' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.',
      keyDrill: 'movilidad activa con balón'
    },
    {
      sub: 'Activación Neuromuscular',
      names: [
        'Activación Rápida con Cambios de Apoyo en Escalera y Pase Tensado',
        'Juego de Reacción al Color con Balón y Frenada en Zona Neutral',
        'Activación con Saltos Unipodales y Estabilización previa a la Conducción',
        'Circuito de Agilidad Corta de 3 Metros con Salida Explosiva y Pase Raso',
        'Activación Neuromuscular en Rombo con Giros Rápidos de Cadera',
        'Juego de Espejo por Parejas con Reacción Visual y Pase Cruzado',
        'Activación con Mini-Sprints de 5 Metros y Devolución al Primer Toque',
        'Circuito Neuromuscular con Apoyos Cruzados y Control en Semigiro',
        'Activación de Cadena Posterior con Trote Progresivo y Pase al Hueco',
        'Coordinación de Pies Rápidos entre Picas y Cambio de Orientación',
        'Activación Propioceptiva con Desequilibrio Leve y Devolución con Interior'
      ],
      ages: ['12–14 años', '15–17 años', 'Adultos'] as AgeGroup[],
      intensity: 'Media' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: 'Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.',
      keyDrill: 'neuromuscular y apoyos'
    },
    {
      sub: 'Juegos de Posesión Ligera',
      names: [
        'Rondo Lúdico 4v1 con Obligación de Pase con Pierna Menos Hábil',
        'Posesión Dinámica 3v3 en Cuadrado de 15x15 con Comodín Interior',
        'Juego de Conservación 4v4 a Dos Toques con Zonas de Seguridad',
        'Posesión de Entrada en Calor 5v2 con Regla de No Devolver al Mismo',
        'Juego de los 10 Pases en Grupo Dividido con Robo y Cambio de Rol',
        'Posesión en Espacio Reducido con Mini-Porterías de Pase y Sin Oposición',
        'Rondo Circular 6v2 con Dos Jugadores Dentro y Movilidad Perimetral',
        'Juego de Posesión Ligera con Dos Balones Simultáneos para Foco Perceptivo',
        'Posesión 4v2 con Transición Rápida al Recuperar hacia Cuadrante Vecino',
        'Juego de Pases Libres por Grupos con Reconocimiento de Espacio Libre',
        'Posesión 3v3+2 en Espacio Estrecho con Búsqueda Continua de Apoyo Corto'
      ],
      ages: ['9–11 años', '12–14 años', '15–17 años', 'Adultos'] as AgeGroup[],
      intensity: 'Media' as IntensityLevel,
      space: 'Medio' as SpaceSize,
      materials: '12 conos de señalización, petos de dos colores, 4 balones.',
      keyDrill: 'posesion ligera'
    },
    {
      sub: 'Circuitos Técnicos Dinámicos',
      names: [
        'Circuito en Cruz con Pase Diagonal y Desplazamiento al Vértice Opuesto',
        'Rueda de Pases en Triángulo con Pared Frontal y Tercer Apoyo',
        'Circuito en Y con Control Orientado y Apertura Hacia Banda',
        'Circuito Técnico Cuadrangular con Pase Tenso y Giro con Planta',
        'Rueda de Cuatro Estaciones con Conducción Rápida y Pase de Empeine',
        'Circuito de Doble Pared con Intercambio de Posiciones y Trote Activo',
        'Circuito en Estrella con Devolución de Primera y Carrera de Repliegue',
        'Rueda Técnica con Pase Filtrado entre Picas y Desmarque Lateral',
        'Circuito Dinámico en Zigzag con Slalom Suave y Pase al Pecho o Pie',
        'Circuito Técnico en Doble Cuadrado con Pases Cruzados Simultáneos',
        'Rueda Continua de Pases con Control Tras Finta de Recepción'
      ],
      ages: ['12–14 años', '15–17 años', 'Adultos'] as AgeGroup[],
      intensity: 'Media' as IntensityLevel,
      space: 'Medio' as SpaceSize,
      materials: '16 setas marcadoras, 6 picas, 8 balones de fútbol.',
      keyDrill: 'circuito tecnico dinamico'
    },
    {
      sub: 'Rondos de Entrada en Calor',
      names: [
        'Rondo Tradicional 4v2 con Limitación a 2 Toques Obligatorios',
        'Rondo 5v2 con Comodín Flotante Central y Pases entre Defensores',
        'Rondo 3v1 en Cuadrado Pequeño con Presión Activa a 1 Toque',
        'Rondo 6v2 con Dos Zonas y Obligación de Saltar de Cuadrante al Quinto Pase',
        'Rondo 4v1 de Reacción con Penalización de Flexiones tras Robo Limpio',
        'Rondo 5v2 de Entrada en Calor con Conteo Rápido de Pases Consecutivos',
        'Rondo 4v2 Móvil con Defensores Intercambiables al Tocar el Balón',
        'Rondo Triangular 3v1 con Apoyo Inmediato en Vértices Desocupados',
        'Rondo 6v3 en Cuadrado de 18x18m con Circulación Perimetral Constante',
        'Rondo 4v2 con Portería de Precisión para el Defensor al Recuperar',
        'Rondo Doble 3v1 Simultáneo con Cambio de Balón a la Señal del Entrenador'
      ],
      ages: ['12–14 años', '15–17 años', 'Adultos'] as AgeGroup[],
      intensity: 'Media' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '8 conos de esquina, petos diferenciadores, 4 balones.',
      keyDrill: 'rondo de calentamiento'
    },
    {
      sub: 'Coordinación con Balón',
      names: [
        'Pisar y Rodar el Balón entre Conos con Apoyos Rápidos Unipodales',
        'Coordinación Bipodal con Pase Alternado de Interior y Exterior',
        'Desplazamiento en Ocho con Balón en la Suela y Parada Seca',
        'Circuito de Frecuencia de Apoyos con Toques Cortos y Salto de Valla',
        'Coordinación de Pies Rápidos con Balón Parado y Pase Posterior a la Carrera',
        'Trote Dinámico con Toques Aéreos Controlados con Muslo y Empeine',
        'Slalom de Coordinación de Espaldas al Balón con Giro y Pase Rápido',
        'Circuito de Agilidad Coordinativa con Doble Toque entre Aros y Salida',
        'Coordinación Rítmica en Escalera con Balón en Parejas a la Devolución',
        'Circuito de Activación Coordinativa de Tobillo y Rodilla con Esférico'
      ],
      ages: ['9–11 años', '12–14 años', '15–17 años'] as AgeGroup[],
      intensity: 'Baja' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.',
      keyDrill: 'coordinacion motriz con balon'
    }
  ];

  let idCounter = 1;

  for (const theme of cat1Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age = theme.ages[i % theme.ages.length];
      const isYoung = age === '6–8 años' || age === '9–11 años';

      const objPrin = `Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante ${theme.keyDrill}, optimizando la predisposición física y cognitiva para la sesión.`;
      const objTec = isYoung
        ? 'Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.'
        : 'Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.';
      const objTat = isYoung
        ? 'Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.'
        : 'Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.';

      const pasos = [
        `1. Organización: Disponer un espacio delimitado de ${theme.space === 'Pequeño' ? '12x12 metros' : '20x20 metros'} con setas y asignar los jugadores en grupos de trabajo.`,
        `2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.`,
        `3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.`,
        `4. Desarrollo: Se encadenan los movimientos previstos (${theme.keyDrill}) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.`,
        `5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa.`
      ];

      const puntos = [
        'Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.',
        'Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).',
        'Comunicación constante llamando al compañero por su nombre antes de la entrega.',
        'Respetar las distancias de separación para evitar aglomeraciones en las estaciones.'
      ];

      const errores = [
        'Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.',
        'Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.',
        'Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero.'
      ];

      const correcciones = [
        '"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez."',
        '"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped."',
        '"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero."'
      ];

      const varFacil = 'Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.';
      const varDificil = 'Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.';
      const prog = 'Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.';
      const reg = 'Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.';

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat1,
        subcategory: theme.sub,
        objetivoPrincipal: objPrin,
        objetivoTecnico: objTec,
        objetivoTatico: objTat,
        edad: age,
        nivel: isYoung ? 'Principiante' : 'Intermedio',
        jugadoresMin: 4,
        jugadoresMax: 12,
        jugadoresLabel: '6–10',
        duracion: '12 min',
        duracionMinutes: 12,
        intensidad: theme.intensity,
        espacio: theme.space,
        materiales: theme.materials,
        organizacion: `Espacio de ${theme.space === 'Pequeño' ? '12x12m' : '20x20m'} dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.`,
        desarrollo: `Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.`,
        pasoAPaso: pasos,
        puntosClave: puntos,
        erroresFrecuentes: errores,
        correcciones: correcciones,
        variacionFacil: varFacil,
        variacionDificil: varDificil,
        progresion: prog,
        regresion: reg,
        posiciones: 'Todas las posiciones de campo.',
        tags: ['calentamiento', 'activación', theme.sub.toLowerCase(), 'movilidad', 'pase'],
        pitchDiagram: buildPitchDiagram(cat1, theme.sub, age, theme.space, 8)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 02: TÉCNICA INDIVIDUAL (70 exercises: EX066 - EX135)
  // ==========================================
  const cat2 = '02. Técnica Individual' as CategoryId;
  const cat2Themes = [
    {
      sub: 'Dominio Aéreo',
      names: [
        'Control de Pecho Amortiguado con Caída y Disparo a Mini-Portería',
        'Dominio Aéreo con Muslo y Conducción Rápida en Zona Delimitada',
        'Control Aéreo de Espaldas con Giro y Pase Rasante al Pasillo',
        'Malabarismos Controlados con Cambios de Pie y Empeine Total',
        'Recepción de Balón Alto con la Suela y Frenada Inmediata',
        'Control Orientado Aéreo con el Interior para Superar Obstáculo Vertical',
        'Circuito de Balones Aéreos Frontales con Control y Salida en Conducción',
        'Amortiguación de Balón Alto con Empeine Exterior en Espacio Reducido',
        'Control Aéreo tras Desplazamiento Lateral Rápido entre Picas',
        'Doble Dominio Aéreo sin Caída con Cabeza y Finalización de Volea Suave',
        'Control Aéreo con Presión Pasiva Dorsal y Protección con Brazos',
        'Secuencia de Toques Aéreos con Dificultad Creciente y Entrega de Precisión'
      ],
      intensity: 'Media' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '6 balones, 8 conos altos, 2 mini-porterías o dianas.',
      techFocus: 'dominio aéreo y amortiguación'
    },
    {
      sub: 'Control Orientado',
      names: [
        'Control Orientado con Interior hacia el Espacio Libre en Cuadrado de Postes',
        'Control Orientado con Exterior para Cambiar de Dirección en 90 Grados',
        'Control con la Suela en Arrastre hacia Atrás y Aceleración Frontal',
        'Control Orientado en Semigiro tras Pase Tenso de Compañero',
        'Control Orientado con Salto de Línea Imaginaria entre Dos Conos',
        'Doble Control Orientado Alternando Pierna Hábil y Menos Hábil',
        'Control Orientado en Carrera para No Perder Inercia de Desplazamiento',
        'Recepción Perfilada hacia Delante y Pase Inmediato de Empeine',
        'Control Orientado con Finta de Cuerpo Previa para Despistar Marca',
        'Control Orientado en Espacio Estrecho con Salida por Cuatro Puertas',
        'Control Orientado Bajo Presión Frontal con Salida Lateral Rápida',
        'Circuito en Cruz con Control Orientado hacia la Siguiente Estación'
      ],
      intensity: 'Media' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '10 setas de colores, 4 mini-vallas, 6 balones.',
      techFocus: 'control orientado y perfil corporal'
    },
    {
      sub: 'Conducción y Giros',
      names: [
        'Conducción en Eslalon con Empeine Exterior e Interior Alternados',
        'Conducción en Línea Recta con Frenada en Seco y Cambio de Dirección',
        'Giro Cruyff con Interior del Pie tras Conducción Intensa',
        'Conducción Rápida con la Suela hacia Atrás y Giro de 180 Grados',
        'Conducción con Cambio de Ritmo Brutal al Superar Zona de Picas',
        'Eslalon Asimétrico de Conducción con Conos a Distintas Distancias',
        'Conducción Circular con Protección de Balón y Brazo de Apoyo',
        'Conducción en Laberinto de Setas con Toques Cortos y Cabeza Erguida',
        'Giro en Gancho con Empeine Exterior y Aceleración en Diagonal',
        'Conducción Libre en Cuadrado Evitando Colisiones con Compañeros',
        'Conducción con Finta de Parada y Arranque Explosivo hacia Adelante',
        'Circuito de Cuatro Giros Técnicos Sucesivos en Espacio de 15x15m'
      ],
      intensity: 'Alta' as IntensityLevel,
      space: 'Medio' as SpaceSize,
      materials: '12 picas o conos altos, 10 setas, 6 balones.',
      techFocus: 'conducción pegada al pie y giros técnicos'
    },
    {
      sub: 'Protección del Balón',
      names: [
        'Protección del Balón de Espaldas al Oponente en Cuadrado de 3x3m',
        'Duelo de Cobertura Dinámica del Esférico con Brazo Separador',
        'Protección en Giro Utilizando la Cadera como Barrera Protectora',
        'Mantener Posesión Individual con Balón Cubierto ante Carga Legal',
        'Protección de Balón y Salida hacia Espacio Abierto en Conducción',
        'Juego del Escudo por Parejas con Límite de 10 Segundos de Posesión',
        'Protección del Balón en Zona de Córner y Pase hacia Atrás',
        'Duelo de Fuerza y Equilibrio Corporal Protegiendo con Pie Lejano',
        'Protección en Movimiento con Cambio Continuo de Lado del Balón',
        'Protección Tras Recepción Forzada con Oponente Encima',
        'Duelo de Resistencia en Protección con Finalización en Mini-Arco'
      ],
      intensity: 'Alta' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '8 conos, petos, balones para cada pareja.',
      techFocus: 'uso del cuerpo, brazo de apoyo y centro de gravedad bajo'
    },
    {
      sub: 'Fintas y Amagos',
      names: [
        'Finta de Cuerpo y Salida por el Lado Opuesto ante Pica Fija',
        'Amago de Disparo con Recorte Interior y Cambio de Trayectoria',
        'Paso por Encima del Balón (Bicicleta Simple) y Aceleración Explosiva',
        'Doble Bicicleta con Cambio de Ritmo y Salida por Fuera',
        'Finta de Mirada y Pase con el Exterior para Engañar al Rival',
        'La Elástica: Toque Exterior e Interior Fluido en Un Solo Tiempo',
        'Amago de Pase con la Planta y Conducción Rápida en Diagonal',
        'Finta Corporal con Desplazamiento de Cadera y Salida en Velocidad',
        'Regate de Ruleta Marsellesa con Dos Toques de Suela Consecutivos',
        'Finta de Tiro con el Empeine y Recorte con la Suela hacia la Otra Pierna',
        'Amago de Conducción Frontal y Frenada en Seco para Descolocar Marca'
      ],
      intensity: 'Alta' as IntensityLevel,
      space: 'Pequeño' as SpaceSize,
      materials: '6 picas verticales simulando rivales, 8 setas, 6 balones.',
      techFocus: 'engaño gestual, disociación y aceleración posterior'
    },
    {
      sub: 'Golpeo con Ambas Piernas',
      names: [
        'Circuito de Golpeo Alterno con Empeine Total a Mini-Porterías',
        'Pase Raso de Precisión con Pierna No Dominante a Puertas Estrechas',
        'Golpeo de Volea Suave con Izquierda y Derecha hacia Reboteador',
        'Disparo Colocado con el Interior del Pie Dominante y No Dominante',
        'Conducción con Pierna Derecha y Definición Inmediata con la Izquierda',
        'Circuito de Pared y Golpeo Cruzado con Pierna Débil',
        'Golpeo de Empeine Interior con Rosca hacia la Escuadra con Ambos Pies',
        'Pase Largo por Alto de 20 Metros Alternando Piernas en Parejas',
        'Golpeo tras Bote Pronto con Ambas Piernas hacia Portería',
        'Doble Disparo Consecutivo en Poste Corto con Piernas Distintas',
        'Golpeo Rasante Tenso de Primer Toque con Pierna Inhábil',
        'Rueda Técnica de Golpeo Bilateral con Control Previo de Suela'
      ],
      intensity: 'Media' as IntensityLevel,
      space: 'Medio' as SpaceSize,
      materials: '2 porterías pequeñas o dianas, 8 balones, 8 conos marcadores.',
      techFocus: 'biomecánica de golpeo bilateral y equilibrio del pie de apoyo'
    }
  ];

  for (const theme of cat2Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '9–11 años' : i % 3 === 1 ? '12–14 años' : '15–17 años');

      const objPrin = `Perfeccionar la calidad gestual individual en ${theme.techFocus}, incrementando la eficacia técnica en situaciones reales de juego.`;
      const objTec = `Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.`;
      const objTat = `Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.`;

      const pasos = [
        `1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).`,
        `2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.`,
        `3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.`,
        `4. Ejecución: Realizar la acción técnica principal (${theme.techFocus}) con la máxima precisión y velocidad gestual posible.`,
        `5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa.`
      ];

      const puntos = [
        'Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.',
        'Acompañar la acción con los brazos para estabilizar el centro de gravedad.',
        'Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.',
        'Mantener la vista al frente entre toques para no perder la orientación espacial.'
      ];

      const errores = [
        'Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.',
        'Mirar fijamente el esférico en todo momento sin levantar la vista.',
        'Realizar el gesto técnico a velocidad constante sin cambio de ritmo.'
      ];

      const correcciones = [
        '"Lleva el balón pegado a la bota; toques cortos y controlados."',
        '"Levanta la mirada una fracción de segundo antes de ejecutar la acción."',
        '"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva."'
      ];

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat2,
        subcategory: theme.sub,
        objetivoPrincipal: objPrin,
        objetivoTecnico: objTec,
        objetivoTatico: objTat,
        edad: age,
        nivel: age === '9–11 años' ? 'Principiante' : 'Intermedio',
        jugadoresMin: 1,
        jugadoresMax: 6,
        jugadoresLabel: '3–5',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: theme.intensity,
        espacio: theme.space,
        materiales: theme.materials,
        organizacion: `Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.`,
        desarrollo: `El futbolista realiza repeticiones analíticas o aplicadas centradas en ${theme.techFocus}, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.`,
        pasoAPaso: pasos,
        puntosClave: puntos,
        erroresFrecuentes: errores,
        correcciones: correcciones,
        variacionFacil: 'Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.',
        variacionDificil: 'Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.',
        progresion: 'Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.',
        regresion: 'Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.',
        posiciones: 'Jugadores de todas las demarcaciones.',
        tags: ['técnica individual', theme.sub.toLowerCase(), 'control', 'conducción', 'gesto técnico'],
        pitchDiagram: buildPitchDiagram(cat2, theme.sub, age, theme.space, 4)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 03: PASE Y RECEPCIÓN (75 exercises: EX136 - EX210)
  // ==========================================
  const cat3 = '03. Pase y Recepción' as CategoryId;
  const cat3Themes = [
    {
      sub: 'Cambio de Orientación',
      names: [
        'Juego en Zonas 5v5 con Puntos Dobles por Cambio de Orientación Limpio',
        'Circuito en U con Pase Corto Interior y Desplazamiento Largo al Espacio Opuesto',
        'Conservación 4v4+2 con Búsqueda de Comodín en Banda Lejana',
        'Cambio de Juego con Pase Aéreo Tenso tras Fijación en Carril Central',
        'Rueda de Cuatro Esquinas con Doble Cambio de Orientación Cruzado',
        'Juego de Posición en Tres Sectores con Prohibición de Jugar Dos Veces en la Misma Banda',
        'Pase Diagonal en Ruptura hacia el Extremo Opuesto tras Pase Atrás',
        'Circuito de Basculación Ofensiva y Cambio de Frente con Empeine Interior',
        '4v4 en Campo Reducido con Mini-Porterías en las Cuatro Esquinas',
        'Pase Largo de 30 Metros con Bote y Control Orientado del Receptor en Banda',
        'Estructura de Salida con Pivot y Apertura Rápida a Lateral Desdoblado',
        'Juego Condicionado de 3 Zonas Longitudinales con Cambio Directo de Banda a Banda',
        'Rueda Técnica de Pase Raso Fuerte con Apertura al Lado Ciego del Rival'
      ],
      focus: 'cambio de juego y amplitud'
    },
    {
      sub: 'Pase con Desmarque',
      names: [
        'Desmarque de Apoyo y Ruptura en Pareja con Pase al Espacio Libre',
        'Circuito en Y con Desmarque en Diagonal y Pase Filtrado al Hueco',
        'Pase a la Espalda de la Pica Defensiva tras Desmarque de Distracción',
        'Rueda de Pases con Finta de Recepción y Desmarque hacia Fuera',
        'Secuencia 2v1 con Fijación del Portador y Desmarque en Profundidad del Apoyo',
        'Desmarque en S para Superar la Línea y Recibir Pase Tenso de Primer Toque',
        'Pase con Desmarque Cruzado entre Dos Delanteros ante Pareja de Centrales',
        'Circuito Técnico con Desmarque al Espacio y Centro Raso al Punto de Penalti',
        'Juego de Pases 3v2 con Desmarques Continuos para Generar Líneas Limpias',
        'Desmarque hacia Banda tras Devolución Corta y Pase en Profundidad',
        'Rueda en Triángulo con Desmarque de Ruptura y Devolución de Cara',
        'Desmarque en Rombo con Amago hacia el Balón y Salida Explosiva en Largo',
        'Circuito de Pase y Carrera con Temporización del Desmarque para No Caer en Fuera de Juego'
      ],
      focus: 'timing del desmarque y precisión en la entrega'
    },
    {
      sub: 'Líneas de Pase en Tensión',
      names: [
        'Rondo 4v2 con Pase Filtrado Tenso entre los Dos Defensores Centrales',
        'Juego de Posición 6v3 con Bonificación por Pases que Rompan Líneas',
        'Circuito Cuadrado con Pases Tensos a Ras de Césped a 15 Metros',
        'Pase Vertical de Seguridad entre Líneas y Devolución de Primer Toque',
        'Circuito en Rombo con Pases con Máxima Tensión de Empeine Interior',
        'Conservación 5v5 con Canales Centrales Marcados para Pases en Tensión',
        'Pase Rápido con Sonido Seco: Evitar Balones Flotados o Frenados',
        'Juego de 4 Puertas Centrales con Pases Firmes que Conectan con Pivote',
        'Circuito Técnico en L con Pase Tenso y Control Orientado de Alta Velocidad',
        'Rueda de Pases con Distancias Crecientes de 10 a 25 Metros con Firmeza',
        'Duelo de Pases Directos en Pasillo Estrecho entre Marcas Activas',
        'Pase Tenso tras Conducción Fijadora para Batir la Primera Línea de Presión',
        'Juego 3v3+1 en Rectángulo Alargado con Conexiones Verticales Obligatorias'
      ],
      focus: 'tensión, rasante y velocidad de circulación'
    },
    {
      sub: 'Pase Corto y Primer Toque',
      names: [
        'Rueda de Pases a Un Toque en Triángulo Reducido de 8 Metros',
        'Juego de la Pared Rápida a Un Toque en Cuadrado de 10x10m',
        'Rondo 4v1 a Un Toque Obligatorio con Máxima Movilidad de Pies',
        'Circuito de Doble Devolución de Cara con Tercer Hombre en Velocidad',
        'Conservación en Espacio Súper Reducido con Límite Estricto de Un Toque',
        'Rueda de Pases Cruzados Simultáneos al Primer Toque entre Cuatro Jugadores',
        'Pases Cortos en Cadena con Apoyo Continuo del Tercer Jugador',
        'Juego de Toques Rápidos en Parejas con Desplazamiento Frontal Sincronizado',
        'Rondo 5v2 a Un Toque tras Pase Exterior y Dos Toques Dentro',
        'Circuito de Agilidad con Pase de Primer Toque tras Salto de Valla',
        'Rueda de Pase Corto y Apoyo Inmediato con Cambio de Ángulo',
        'Combinación Rápida de Primer Toque en la Frontal del Área para Finalizar'
      ],
      focus: 'velocidad de ejecución a un solo toque'
    },
    {
      sub: 'Tercer Hombre y Paredes',
      names: [
        'Mecanismo de Tercer Hombre en Y: Pase Vertical, Devolución y Balón al Espacio',
        'Pared Clásica 2v1 con Superación de Obstáculo y Carrera de Reincorporación',
        'Juego de Posición 4v4+3 con Búsqueda Constante del Tercer Hombre Alejado',
        'Pared Doble en Pasillo Central con Devolución de Espaldas y Disparo',
        'Tercer Hombre con Lateral que Rompe al Espacio tras Devolución del Extremo',
        'Circuito en Rombo Aplicando el Principio del Tercer Hombre con Giro',
        'Pared en Profundidad con Desmarque en Diagonal tras Fijar al Marcador',
        'Juego Reducido con Comodín Interior que Funciona como Pared Automática',
        'Secuencia 3v1 con Pared Frontal y Conexión con el Tercer Apoyo',
        'Tercer Hombre Ofensivo en Último Tercio de Campo con Centro al Área',
        'Pared con Exterior del Pie para Salir de Zona Congestionada de Presión',
        'Circuito Continuo de Tercer Hombre con Rotación hacia el Puesto de Pase'
      ],
      focus: 'asociación, tercer hombre y paredes dinámicas'
    },
    {
      sub: 'Pase Medio y Filtrado',
      names: [
        'Pase Filtrado a la Espalda de los Centrales para la Carrera del Delantero',
        'Circuito de Pase a Media Distancia (15-20m) con Empeine Interior Tenso',
        'Pase Picado por Encima de la Línea Defensiva hacia el Desmarque de Ruptura',
        'Juego en Cuadrícula con Filtración de Balón entre Dos Zonas Prohibidas',
        'Pase Filtrado tras Finta de Tiro con el Empeine en la Frontal',
        'Circuito de Salida de Balón con Pase Medio al Pecho o Pies del Extremo',
        'Pase Diagonal Filtrado entre Lateral y Central para la Entrada de Segunda Línea',
        'Juego de Posesión con Gol Válido Únicamente tras Pase Filtrado entre Conos',
        'Pase Medio Raso con Efecto para Superar la Presión por el Exterior',
        'Circuito de Transición con Pase Filtrado Inmediato tras Recuperación en Bloque',
        'Pase Filtrado en Profundidad tras Amago de Conducción hacia Atrás',
        'Rueda Técnica de Pase Medio con Control Orientado hacia la Otra Portería'
      ],
      focus: 'pase filtrado y visión de intervalos'
    }
  ];

  for (const theme of cat3Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 4 === 0 ? '9–11 años' : i % 4 === 1 ? '12–14 años' : i % 4 === 2 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat3,
        subcategory: theme.sub,
        objetivoPrincipal: `Mejorar la eficacia en ${theme.focus}, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.`,
        objetivoTecnico: `Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.`,
        objetivoTatico: `Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.`,
        edad: age,
        nivel: age === '9–11 años' ? 'Principiante' : 'Intermedio',
        jugadoresMin: 4,
        jugadoresMax: 12,
        jugadoresLabel: '6–10',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Media',
        espacio: 'Medio',
        materiales: '12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.',
        organizacion: `Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.`,
        desarrollo: `Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.`,
        pasoAPaso: [
          '1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.',
          '2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.',
          '3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.',
          '4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.',
          '5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos.'
        ],
        puntosClave: [
          'Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.',
          'Apertura de cadera para ver el destino del balón antes de que llegue a los pies.',
          'Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.',
          'Comunicación verbal activa solicitando el balón al pie o al espacio.'
        ],
        erroresFrecuentes: [
          'Golpear el balón por debajo elevándolo involuntariamente.',
          'Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.',
          'Recibir con el cuerpo cerrado de espaldas a la progresión del juego.'
        ],
        correcciones: [
          '"Golpea el balón en su ecuador con el pie firme para que viaje raso."',
          '"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque."',
          '"Abre el cuerpo y mira hacia delante antes de controlar."'
        ],
        variacionFacil: 'Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.',
        variacionDificil: 'Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.',
        progresion: 'Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.',
        regresion: 'Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.',
        posiciones: 'Centrocampistas, centrales, laterales y extremos.',
        tags: ['pase', 'recepción', theme.sub.toLowerCase(), 'precisión', 'combinación'],
        pitchDiagram: buildPitchDiagram(cat3, theme.sub, age, 'Medio', 8)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 04: REGATE Y 1 CONTRA 1 (65 exercises: EX211 - EX275)
  // ==========================================
  const cat4 = '04. Regate y 1 contra 1' as CategoryId;
  const cat4Themes = [
    {
      sub: 'Duelos en Espacio Reducido',
      names: [
        'Duelo 1v1 en Cuadrado de 10x10m con Salida a Cuatro Mini-Porterías',
        '1v1 en Jaula Reducida con Límite de 8 Segundos para Definir',
        'Duelo 1v1 con Entrada Lateral y Finta para Buscar Espacio de Tiro',
        '1v1 en Rombo con Porterías Opuestas y Cambio Rápido de Rol al Perder',
        'Duelo en Espacio Reducido con Comodín de Apoyo de Pared Exterior',
        '1v1 Frontal con Regla de Superación Obligatoria antes de Poder Rematar',
        'Duelo en Círculo Central Reducido con Protección y Regate de Salida',
        '1v1 con Presión Inmediata a la Espalda tras Saque de Banda Rápido',
        'Duelo en Rectángulo Estrecho con Puerta Central que Duplica Puntos',
        '1v1 de Agilidad y Cambio de Dirección con Dos Balones Alternados',
        'Duelo Técnico en Espacio Reducido con Mini-Porterías de Espaldas'
      ],
      focus: 'duelo 1v1 en espacios estrechos'
    },
    {
      sub: 'Regate con Finta Exterior',
      names: [
        'Regate con Finta Exterior y Cambio de Ritmo ante Oponente Frontal',
        'Finta de Cuerpo hacia Dentro y Desborde Explosivo por Fuera con Empeine',
        'Amago de Disparo y Salida en Regate Exterior hacia la Línea de Fondo',
        'Doble Finta Exterior con Salida por la Pierna Menos Hábil',
        'Regate con Paso en Tijera Exterior y Aceleración en Diagonal',
        'Finta de Apoyo con la Suela y Toque Brusco hacia el Exterior del Cono',
        'Regate Exterior tras Control Orientado en Carrera Frontal',
        '1v1 en Banda con Finta de Frenada y Aceleración Exterior Hacia Centro',
        'Finta Exterior con Brazo Extendido para Proteger la Salida de Marca',
        'Regate de Engaño Corporal Completo con Cambio de Peso de Pierna',
        'Regate Exterior con Finalización Rápida con Punterazo de Sorpresa'
      ],
      focus: 'finta exterior y aceleración'
    },
    {
      sub: 'Desborde por Banda',
      names: [
        'Desborde 1v1 en Pasillo Lateral y Centro Tenso al Primer Palo',
        'Extremo contra Lateral: 1v1 en Banda con Ayuda de Doblaje del Lateral',
        'Desborde por Fuera con Cambio de Ritmo y Centro Retrasado al Punto de Penalti',
        '1v1 en Banda con Salida Hacia Dentro o Fuera según Perfil del Defensor',
        'Duelo en Carril Lateral con Entrada del Defensor desde Posición Retrasada',
        'Desborde tras Pase Filtrado al Espacio de Banda y 1v1 con Central',
        '1v1 de Extremos con Oposición Real y Centro hacia Dos Rematadores',
        'Desborde con Auto-Pase en Velocidad por la Línea de Cal y Centro Raso',
        'Duelo en Banda con Mini-Portería en Esquina y Portería Grande Central',
        '1v1 Lateral con Frenada en Seco para Descolocar al Defensor y Centrar',
        'Desborde por Banda tras Pared Rápida y Salida en Potencia'
      ],
      focus: 'desborde lateral, centro y aceleración en pasillo'
    },
    {
      sub: '1v1 Frontal con Portería',
      names: [
        '1v1 Frontal desde la Frontal del Área con Definición ante Portero',
        'Duelo 1v1 Directo con Inicio desde Conos Opuestos en Carrera Cruzada',
        '1v1 Frontal con Defensor Recuperando la Posición desde Atrás',
        'Atacante Frontal contra Central con Límite de 3 Toques para Finalizar',
        '1v1 con Entrada Frontal del Defensor y Regate Hacia su Pierna Débil',
        'Duelo Frontal tras Balón Dividido en Zona de Tres Cuartos',
        '1v1 con Finta Previa en la Frontal y Tiro Rápido al Rincón',
        'Duelo Frontal con Dos Porterías de Precisión en los Vértices del Área',
        '1v1 tras Pase del Propio Defensor que Sale a Presionar de Frente',
        'Duelo Frontal de Potencia con Salida desde el Medio Campo y Tiro',
        '1v1 Frontal con Opción de Tiro Rápido o Regate Completo al Defensor'
      ],
      focus: 'encarar de frente, finta y remate rápido'
    },
    {
      sub: '1v1 de Espaldas a Meta',
      names: [
        'Delantero de Espaldas al Central con Giro Rápido por Ambos Perfiles',
        '1v1 de Espaldas con Apoyo en Comodín y Giro para Definir',
        'Protección de Espaldas y Regate en Ruleta con la Suela para Escapar',
        '1v1 en Zona de Pivote con Amago de Pase y Giro hacia Portería',
        'Recepción de Espaldas con Contacto Físico del Defensor y Salida en Volea',
        'Duelo de Espaldas con Dos Mini-Porterías Laterales para Finalizar',
        '1v1 con Balón Alto de Espaldas: Control de Pecho, Giro y Disparo',
        'Delantero Fijador: Retener el Balón de Espaldas 3 Segundos y Superar',
        'Giro de 180 Grados con la Planta tras Finta Corporal de Espaldas',
        '1v1 de Espaldas con Balón Parado y Salida Explosiva a la Señal',
        'Duelo de Espaldas con Entrada Fuerte del Defensor y Finta de Devolución'
      ],
      focus: 'juego de espaldas, giro y protección de pivote'
    },
    {
      sub: 'Regate tras Control Orientado',
      names: [
        'Control Orientado en Velocidad y Regate Inmediato en el Segundo Toque',
        'Control hacia Delante para Fijar al Defensor y Finta de Salida Lateral',
        'Control Orientado con el Exterior que Supera la Entrada del Rival',
        'Control con la Suela para Frenar y Cambio Brusco de Dirección',
        'Recepción Perfilada hacia el Lado Débil del Oponente y Regate Rápido',
        'Control Orientado tras Pase Largo y Desborde Directo en 1v1',
        'Control Orientado hacia Portería y Amago de Tiro para Superar Bloqueo',
        'Control con Muslo en Carrera y Regate de Sombrero ante Salida Rápida',
        'Control Orientado entre Dos Conos y Desborde Inmediato al Defensor',
        'Doble Toque: Control Orientado y Auto-Pase al Espacio Desocupado'
      ],
      focus: 'control orientado como antesala del desborde'
    }
  ];

  for (const theme of cat4Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '9–11 años' : i % 3 === 1 ? '12–14 años' : '15–17 años');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat4,
        subcategory: theme.sub,
        objetivoPrincipal: `Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en ${theme.focus}.`,
        objetivoTecnico: `Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.`,
        objetivoTatico: `Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.`,
        edad: age,
        nivel: age === '9–11 años' ? 'Principiante' : 'Intermedio',
        jugadoresMin: 2,
        jugadoresMax: 8,
        jugadoresLabel: '3–5',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Alta',
        espacio: 'Pequeño',
        materiales: '10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.',
        organizacion: `Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.`,
        desarrollo: `Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.`,
        pasoAPaso: [
          '1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.',
          '2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.',
          '3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.',
          '4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.',
          '5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas.'
        ],
        puntosClave: [
          'Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.',
          'Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.',
          'Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.',
          'Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada.'
        ],
        erroresFrecuentes: [
          'Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.',
          'Regatear a velocidad uniforme sin cambio explosivo de ritmo.',
          'Conducir con la cabeza pegada al balón sin observar la colocación del rival.'
        ],
        correcciones: [
          '"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta."',
          '"El engaño es suave; la salida es un sprint al máximo."',
          '"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va."'
        ],
        variacionFacil: 'El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).',
        variacionDificil: 'Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.',
        progresion: 'Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.',
        regresion: 'Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.',
        posiciones: 'Extremos, delanteros, mediapuntas y laterales.',
        tags: ['regate', '1v1', theme.sub.toLowerCase(), 'finta', 'desborde', 'duelo'],
        pitchDiagram: buildPitchDiagram(cat4, theme.sub, age, 'Pequeño', 4)
      });

      idCounter++;
    }
  }

  console.log(`Generated Categories 1 to 4: ${exercises.length} exercises (EX001 to EX${String(idCounter - 1).padStart(3, '0')})`);
  return exercises;
}
