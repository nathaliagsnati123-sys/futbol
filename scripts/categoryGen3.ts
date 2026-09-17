import { Exercise, CategoryId, AgeGroup, SkillLevel, IntensityLevel, SpaceSize, PlayerGroup } from '../src/types';
import { buildPitchDiagram } from './diagramBuilder';

export function generateCategory9to12(): Exercise[] {
  const exercises: Exercise[] = [];
  let idCounter = 546;

  // ==========================================
  // CATEGORY 09: TÁCTICA (65 exercises: EX546 - EX610)
  // ==========================================
  const cat9 = '09. Táctica' as CategoryId;
  const cat9Themes = [
    {
      sub: 'Juego en Intervalos Interiores',
      names: [
        'Recepción entre Líneas en el Espacio de Mediapunta y Giro Hacia Gol',
        'Pases Diagonales entre Central y Lateral Rival para la Llegada del Interior',
        'Juego Posicional con Cuadrícula Central: Prohibido Permanecer Estático en el Intervalo',
        'Fijación del Mediocentro Defensivo para Liberar el Intervalo a su Espalda',
        'Circulación Paciente hasta que se Abre la Ventana de Pase Interior',
        'Aparición del Extremo hacia el Pasillo Interior para Generar Duda al Lateral',
        'Combinación Rápida de Primer Toque dentro del Intervalo y Apertura a Banda',
        'Juego 5v5+3 con Dos Intervalos Centrales Marcados con Picas',
        'Ataque a Intervalos ante Bloque Bajo con Pared Rápida y Tiro a Puerta',
        'Control Orientado en el Intervalo para Superar la Presión del Pivote',
        'Rueda Táctica de Pases Filtrados hacia Intervalos Interiores con Rotación'
      ],
      focus: 'juego entre líneas, ocupación de intervalos y visión vertical'
    },
    {
      sub: 'Ocupación Racional del Espacio',
      names: [
        'Distribución en 5 Pasillos Longitudinales: Nunca Dos Jugadores en el Mismo Pasillo y Altura',
        'Compensación Espacial: Si el Lateral Sube, el Extremo se Mete por Dentro y el Pivote Cierra',
        'Juego de Posición en Tablero de Ajedrez: Mantener el Equilibrio de la Estructura',
        'Ocupación del Espacio Libre que Deja el Compañero con su Desmarque de Arrastre',
        'Rotación de Posiciones entre Mediocentros e Interiores sin Perder la Organización',
        'Juego en Tres Sectores con Número Máximo de Jugadores por Zona',
        'Equilibrio Defensivo mientras se Ataca: Ocupación de las Zonas de Posible Rechace',
        'Estructura de Ataque en 3-2-5 con Amplitud Máxima y Tres Amenazas en Última Línea',
        'Juego Condicionado de Posición con Penalización por Amontonamiento de Futbolistas',
        'Ocupación Racional del Área de Penalti: Reparto en 3 Zonas de Llegada',
        'Circuito Táctico de Movimientos de Compensación ante Desplazamientos Colectivos'
      ],
      focus: 'geometría del juego, equilibrio de líneas y ocupación racional'
    },
    {
      sub: 'Juego de Posición en Zonas',
      names: [
        'Juego de Posición 4v4+3 Comodines en Espacio de 25x25m con Regla de Salto de Línea',
        'Posesión en 3 Zonas Horizontales: Iniciar en Zona 1, Atraer en Zona 2 y Romper en Zona 3',
        'Juego de Posición 7v7+2 con Zonas de Prohibición para Fomentar la Circulación por Fuera',
        'Estructura Posicional en Zonas de Finalización con Limitación de 3 Toques',
        'Juego de Posición con Sub-Espacios Laterales para Aislamiento de Extremos en 1v1',
        'Posición 6v6 en Dos Cuadrantes: Pasar el Balón de un Cuadrante a Otro tras 4 Pases',
        'Juego de Posición en Tres Pasillos con Regla de Cambio de Orientación Obligatorio',
        'Conservación Posicional con Zona Neutra de Seguridad para el Mediocentro Creador',
        'Juego de Posición con Metas Pequeñas en las Zonas Laterales y Meta Grande Central',
        'Posesión en Zona Central con Obligación de Buscar al Hombre Libre Alejado',
        'Juego de Posición 8v8 con Dos Porteros y Reglas Zonales de Progresión'
      ],
      focus: 'juego de posición, conservación y atracción para liberar espacios'
    },
    {
      sub: 'Rombo y Estructuras en Bloque',
      names: [
        'Construcción del Rombo de Apoyo Permanente Alrededor del Portador del Balón',
        'Estructura de Bloque Medio: Sincronía de Distancias de 30 Metros entre Delantero y Central',
        'Juego en Doble Rombo con Conexiones Rápidas entre las Puntas de la Estructura',
        'Estructura en Bloque Bajo: Negar Espacios Interiores y Obligar a Centros Exteriores',
        'Rombo Ofensivo de Salida con Central, Lateral, Interior y Extremo en Banda',
        'Transición de Bloque Bajo a Bloque Alto ante Saque de Portería Corto del Rival',
        'Rombo de Apoyo en Salida de Balón para Facilitar Múltiples Soluciones de Pase',
        'Mantenimiento del Bloque Compacto en Desplazamientos Laterales Colectivos',
        'Juego en Rombo 4v4 con Comodines en los Vértices para Mantener la Fluidez',
        'Estructura de Bloque con Líneas Escalonadas para Evitar Balones Diagonales a la Espalda',
        'Circuito de Automatismo en Rombo con Pase, Devolución y Desdoblamiento'
      ],
      focus: 'estructuras en rombo, triángulos de pase y bloque compacto'
    },
    {
      sub: 'Amplitud y Profundidad Ofensiva',
      names: [
        'Amplitud con Extremos a Pie Natural y Profundidad con Delanteros que Fijan Centrales',
        'Ensanchar el Campo: Laterales Pegados a la Cal para Abrir Pasillos Interiores',
        'Profundidad Inmediata tras Robo: Desmarque Vertical para Alargar la Defensa Rival',
        'Juego Condicionado: El Balón Debe Tocar Ambos Carriles Exteriores antes de Finalizar',
        'Ataque con Profundidad Escalonada: Un Delantero Viene en Apoyo y el Otro Rompe al Espacio',
        'Amplitud Falsa: Extremo Abierto que Arrastra al Lateral para Dejar el Pasillo Interior Libre',
        'Profundidad a través de Pases Medios Tensos hacia el Delantero Referencia',
        'Juego de 5 Pasillos con Bonificación de Gol si se Utiliza la Máxima Amplitud',
        'Amplitud Rápida tras Balón Parado Defensivo con Extremos Listos para el Despliegue',
        'Profundidad y Apoyo: Principio de la Doble Amenaza Ofensiva',
        'Circuito Táctico de Conexión entre Amplitud en Banda y Profundidad al Área'
      ],
      focus: 'estirar al rival en horizontal (amplitud) y vertical (profundidad)'
    },
    {
      sub: 'Escalafonamiento en Salida',
      names: [
        'Escalonamiento de los Mediocentros: Uno a 10 Metros y Otro a 20 Metros de los Centrales',
        'Salida con Centrales Abiertos y Laterales en Distintas Alturas para Evitar Bloqueos',
        'Escalonamiento entre Interior y Mediapunta para Ofrecer Dos Niveles de Pase Vertical',
        'Estructura de Salida Escalonada ante Presión de 2 Delanteros: Centrales + Pivote',
        'Desplazamiento Escalonado de la Línea Defensiva para Evitar una Línea Recta Vulnerable',
        'Escalonamiento de Apoyos en Banda: Lateral Abajo, Interior en Diagonal, Extremo Arriba',
        'Salida con Portero Adelantado Creando una Primera Línea de Tres con Centrales',
        'Escalonamiento Ofensivo para Evitar que un Solo Defensor Tape Dos Opciones de Pase',
        'Juego de Salida con Zonas Escalonadas Obligatorias para la Progresión del Balón',
        'Circuito de Pase y Movimiento con Ocupación de Tres Alturas de Juego'
      ],
      focus: 'alturas de juego, escalonamiento y líneas de pase en diagonal'
    }
  ];

  for (const theme of cat9Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 2 === 0 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat9,
        subcategory: theme.sub,
        objetivoPrincipal: `Interiorizar los conceptos tácticos avanzados de ${theme.focus}, mejorando la interpretación del juego y la toma de decisiones colectiva.`,
        objetivoTecnico: `Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.`,
        objetivoTatico: `Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 8,
        jugadoresMax: 18,
        jugadoresLabel: '11–15',
        duracion: '20 min',
        duracionMinutes: 20,
        intensidad: 'Media',
        espacio: 'Grande',
        materiales: 'Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.',
        organizacion: `Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.`,
        desarrollo: `Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.`,
        pasoAPaso: [
          '1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.',
          '2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.',
          '3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.',
          '4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.',
          '5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión.'
        ],
        puntosClave: [
          'Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.',
          'No ocupar la misma línea de pase ni la misma altura que un compañero cercano.',
          'Generar triángulos y rombos continuos alrededor del poseedor del balón.',
          'Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco.'
        ],
        erroresFrecuentes: [
          'Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.',
          'Situarse en línea recta detrás de un defensor quedando en sombra de pase.',
          'Moverse hacia el balón en lugar de alejarse para generar espacio al compañero.'
        ],
        correcciones: [
          '"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión."',
          '"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase."',
          '"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro."'
        ],
        variacionFacil: 'Añadir comodines interiores para facilitar la superioridad posicional.',
        variacionDificil: 'Presión orientada del rival con marcaje al hombre en zonas clave.',
        progresion: 'Aumentar las dimensiones a campo completo con simulación de partido 11v11.',
        regresion: 'Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.',
        posiciones: 'Centrocampistas, mediapuntas, defensas y delanteros.',
        tags: ['táctica', theme.sub.toLowerCase(), 'juego de posición', 'modelo de juego', 'colectivo'],
        pitchDiagram: buildPitchDiagram(cat9, theme.sub, age, 'Grande', 14)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 10: VELOCIDAD Y AGILIDAD (60 exercises: EX611 - EX670)
  // ==========================================
  const cat10 = '10. Velocidad y Agilidad' as CategoryId;
  const cat10Themes = [
    {
      sub: 'Sprints Cortos con Duelo Técnico',
      names: [
        'Sprint Frontal de 10 Metros con Disputa de Balón Dividido y Definición',
        'Sprint con Salida desde el Suelo tras Silbato y Duelo 1v1 en Velocidad',
        'Sprint Cruzado entre Dos Jugadores con Llegada a Balón Suelto y Disparo',
        'Carrera de 15 Metros con Salida en Reacción y Control Orientado en Carrera',
        'Sprint Curvo Rodeando la Pica y Duelo Técnico por la Posesión del Esférico',
        'Doble Sprint de 5+5 Metros con Giro de 180 Grados y Pase de Precisión',
        'Sprint en Persecución: Atacante con 2 Metros de Ventaja frente al Defensor',
        'Carrera Explosiva hacia el Área con Remate de Primer Toque ante Salida del Portero',
        'Sprint con Salida de Espaldas: Giro Rápido y Carrera a Balón Lanzado al Hueco',
        'Duelo de Velocidad Pura de 20 Metros con Balón Conducido a la Máxima Intensidad'
      ],
      focus: 'sprint lineal corto, aceleración y duelo técnico'
    },
    {
      sub: 'Velocidad Gestual con Balón',
      names: [
        'Toques Rápidos con la Planta en 10 Segundos a Máxima Frecuencia Motriz',
        'Secuencia Gestual de Regate en Menos de 2 Segundos: Bicicleta y Cambio de Dirección',
        'Velocidad de Golpeo: Conectar 5 Pases a la Pared en el Menor Tiempo Posible',
        'Pisar, Pasar y Recibir a Máxima Frecuencia con Pierna Dominante y No Dominante',
        'Velocidad Gestual de Despeje: Reacción Inmediata ante Balones Lanzados al Azar',
        'Circuito de 4 Estaciones de Velocidad Gestual con 10 Segundos de Trabajo Máximo',
        'Doble Finta a Máxima Velocidad sin Detener la Inercia de Carrera',
        'Toques Rápidos con Empeine Interior en Espacio de 1 Metro Cuadrado',
        'Velocidad de Reacción Gestual ante Luces o Colores con Toque Técnico Específico',
        'Secuencia de Controles Orientados Sucesivos de Alta Frecuencia en Cuadrado de Conos'
      ],
      focus: 'rapidez en la ejecución biomecánica y frecuencia de toques'
    },
    {
      sub: 'Aceleración Lineal y Deceleración',
      names: [
        'Aceleración de 10 Metros con Frenada en Seco en 1 Metro y Pase Rasante',
        'Arranque Explosivo en 5 Metros con Parada en Descenso de Centro de Gravedad',
        'Carrera Progresiva de 20 Metros: Acelerar al 100%, Frenar y Trote de Recuperación',
        'Aceleración con Arrastre de Trineo o Resistencia Elástica de 8 Metros',
        'Deceleración Controlada tras Sprint Máximo para Evitar la Falta al Defensor',
        'Aceleración Lineal con Salida desde Posición de Sentadilla Profunda',
        'Carrera de Frenadas y Arranques en Línea Recta: 5m, 10m y 15m con Balón',
        'Aceleración con Salto Previo de Valla Baja y Aterrizaje Estable Unipodal',
        'Deceleración en Dos Tiempos tras Balón en Profundidad con Control Amortiguado',
        'Sprint con Cambio de Ritmo Brutal: De Trote al 50% a Aceleración al 100%'
      ],
      focus: 'fuerza de frenada, estabilidad articular y aceleración explosiva'
    },
    {
      sub: 'Cambios de Dirección (COD)',
      names: [
        'Circuito Pro-Agility 5-10-5 Metros con Toque Técnico al Completar',
        'Eslalon en W con Cambios de Dirección a 45 Grados y Disparo Final',
        'Cambio de Dirección en 90 Grados con Apoyo Fuerte de Pierna Exterior',
        'Circuito en T con Desplazamientos Frontales, Laterales y de Espaldas',
        'Cambio de Dirección en 180 Grados en Pasillo Estrecho con Balón Conducido',
        'Circuito de Agilidad con Zigzag entre Picas a Máxima Inclinación de Tronco',
        'Cambio de Dirección Reactivo ante la Señal del Compañero en Carrera',
        'Recorrido en Estrella con Retorno al Cono Central y Salida Explosiva',
        'Doble Cambio de Dirección con Finta Corporal y Salida en Conducción Rápida',
        'Circuito COD con Vallas y Conos con Finalización en Mini-Portería'
      ],
      focus: 'cambio de dirección (COD), apoyos laterales y potencia de corte'
    },
    {
      sub: 'Velocidad de Reacción Auditiva/Visual',
      names: [
        'Reacción a la Señal Sonora (Pitido): Sprint hacia el Cono del Color Indicado',
        'Reacción Visual: Salida según el Color de Peto Levantado por el Entrenador',
        'Duelo de Reacción por Parejas: "Rojos y Azules" con Persecución al Nombre',
        'Reacción ante el Bote del Balón: Salida Explosiva al Impactar con el Suelo',
        'Juego del Espejo con Reacción Inversa: Hacer lo Contrario de la Señal Emitida',
        'Reacción ante Lanzamiento de Pelota de Tenis: Atraparla antes del Segundo Bote',
        'Sprint de Reacción con Número Asignado en Grupo de 4 Jugadores',
        'Reacción Visual con Balón: Conducir hacia la Puerta Libre que Señala el Técnico',
        'Reacción Auditiva con Giro de 360 Grados y Definición a Portería',
        'Circuito de Estímulos Mixtos (Visual + Auditivo) con Toma de Decisión Rápida'
      ],
      focus: 'tiempo de reacción, percepción rápida y respuesta motriz inmediata'
    },
    {
      sub: 'Circuitos de Escalera de Agilidad y Balón',
      names: [
        'Escalera de Coordinación: Skiping 1 Pie por Hueco con Pase Raso al Salir',
        'Escalera: Skiping Lateral con Devolución de Volea de Empeine al Compañero',
        'Icky Shuffle en Escalera con Aceleración de 10 Metros y Remate a Puerta',
        'Escalera con Apoyos Dentro-Fuera y Control Orientado al Espacio Libre',
        'Saltos Bipodales en Escalera con Salida Rápida y Eslalon de Conos con Balón',
        'Escalera de Agilidad con Pase Cruzado en Mitad del Recorrido Coordinativo',
        'Doble Escalera Paralela: Competición por Parejas y Conducción hasta Meta',
        'Escalera con Giros de Cadera en Cada Peldaño y Pared Dinámica al Salir',
        'Coordinación en Escalera de Espaldas con Giro de 180 Grados y Sprint a Balón',
        'Circuito Completo: Escalera + Mini-Vallas + Conducción + Disparo Final'
      ],
      focus: 'coordinación de apoyos rápidos en escalera y enlace con gesto con balón'
    }
  ];

  for (const theme of cat10Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat10,
        subcategory: theme.sub,
        objetivoPrincipal: `Desarrollar la velocidad máxima, aceleración y agilidad reactiva en ${theme.focus}, integrando estímulos específicos de fútbol.`,
        objetivoTecnico: `Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.`,
        objetivoTatico: `Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.`,
        edad: age,
        nivel: 'Intermedio',
        jugadoresMin: 2,
        jugadoresMax: 10,
        jugadoresLabel: '6–10',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Alta',
        espacio: 'Medio',
        materiales: 'Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.',
        organizacion: `Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.`,
        desarrollo: `Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.`,
        pasoAPaso: [
          '1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.',
          '2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.',
          '3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.',
          '4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.',
          '5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno.'
        ],
        puntosClave: [
          'Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).',
          'Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.',
          'Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.',
          'Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie.'
        ],
        erroresFrecuentes: [
          'Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.',
          'Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.',
          'Descuidar la técnica del toque de balón por ir con prisas descontroladas.'
        ],
        correcciones: [
          '"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente."',
          '"Da pasitos cortos y rápidos para frenar; no claves los talones."',
          '"El balón debe correr contigo, no tú detrás de un balón descontrolado."'
        ],
        variacionFacil: 'Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.',
        variacionDificil: 'Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.',
        progresion: 'Incorporar oposición en persecución real con balón en disputa.',
        regresion: 'Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.',
        posiciones: 'Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.',
        tags: ['velocidad', 'agilidad', theme.sub.toLowerCase(), 'aceleración', 'sprint'],
        pitchDiagram: buildPitchDiagram(cat10, theme.sub, age, 'Medio', 6)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 11: PREPARACIÓN FÍSICA (55 exercises: EX671 - EX725)
  // ==========================================
  const cat11 = '11. Preparación Física' as CategoryId;
  const cat11Themes = [
    {
      sub: 'Fuerza Explosiva en Saltos y Caídas',
      names: [
        'Pliometría con Salto Bipodal sobre Vallas de 30 cm y Cabezazo a Meta',
        'Saltos Unipodales con Estabilización en Bosu y Pase con Empeine Interior',
        'Salto con Caída desde Cajón (Drop Jump) y Aceleración Explosiva de 10 Metros',
        'Circuito de Multisaltos en Cruz con Balón Medicinal y Pase Posterior',
        'Pliometría Reactiva con Mini-Vallas y Duelo Aéreo con Defensa Central',
        'Saltos Laterales de Potencia sobre Valla y Remate de Volea en Suspensión',
        'Circuito de Potencia de Piernas: Sentadilla con Salto y Disparo Fuerte',
        'Salto Coordinativo con Rodillas al Pecho y Salida en Sprint Vertical',
        'Fuerza Explosiva con Trineo de Resistencia y Conducción Rápida de Balón',
        'Multisaltos Asimétricos con Frenada Rápida y Pase Tensado Rasante'
      ],
      focus: 'fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría'
    },
    {
      sub: 'Resistencia Intermitente',
      names: [
        'Circuito Intermitente 15x15 Segundos: Trote Rápido y Acciones Técnicas',
        'Intervalos 30x30 Segundos de Conducción Intensa y Pases en Cuadrado de 30 Metros',
        'Test de Resistencia Específica con Balón: Vueltas a Medio Campo con Postas Técnicas',
        'Intermitente de Alta Intensidad: Sprint de 20 Metros, 1v1 y Trote de Recuperación',
        'Circuito de 6 Estaciones Físico-Técnicas con 20 Segundos de Trabajo por 20 de Descanso',
        'Resistencia en Pasillos de 40 Metros con Cambios de Sentido y Pase de Empeine',
        'Carreras Fraccionadas con Balón en Triángulo de Resistencia Aeróbico-Anaeróbica',
        'Intermitente en Parejas: Uno Trabaja a Máxima Intensidad mientras el Otro Asiste',
        'Circuito de Carrera Intermitente con Giros de 90 Grados y Remate a Mini-Portería'
      ],
      focus: 'resistencia aeróbica-anaeróbica intermitente con balón'
    },
    {
      sub: 'Fuerza Resistencia Específica',
      names: [
        'Circuito de Fuerza Funcional con Balón: Zancadas con Pase y Planchas con Toque',
        'Duelos de Arrastre Corporal con Balón Protegido y Resistencia de 20 Segundos',
        'Fuerza Resistencia con Bandas Elásticas en Cintura y Conducción Forzada',
        'Circuito de Isometría Core y Cadena Posterior con Devolución de Balón Aéreo',
        'Fuerza de Combate: Pugna en Espacio Reducido de 5x5m con Salida a Gol',
        'Zancadas con Balón en Manos y Pase al Final de Cada Serie de 10 Repeticiones',
        'Circuito de Fuerza Específica con Conos Pesados y Pases de Máxima Distancia',
        'Fuerza Resistencia para Defensores: Saltos, Cargas Legales y Despejes Consecutivos',
        'Trabajo de Fuerza de Empuje y Tracción por Parejas con Finalización Rápida'
      ],
      focus: 'fuerza resistencia, estabilidad central (core) y potencia funcional'
    },
    {
      sub: 'Potencia Aeróbica en Espacio Reducido',
      names: [
        'Juego Reducido 3v3 sin Comodines a Máxima Intensidad: Series de 3 Minutos',
        'Posesión Dinámica 4v4 en 25x20m con Ritmo Cardíaco Superior al 85% FCM',
        'Partidillos de 2v2 en Espacio Reducido con Mini-Porterías y Balones Perimetrales',
        'Posesión de Alta Densidad con 4 Porterías Pequeñas y Transición Continua',
        'Juego 3v3+1 en Espacio Asimétrico con Obligación de Presión Asfixiante',
        'Torneo Rápido de 3v3 de 4 Minutos por Partido con Rotación Dinámica',
        'Juego Reducido con Regla de No Más de 3 Segundos con Balón en los Pies',
        'Conservación 4v4 con Cuatro Jugadores Exteriores que Devuelven a Un Toque',
        'Posesión Intensa en Cuadrante con Pulsómetro para Monitorizar Carga Interna'
      ],
      focus: 'potencia aeróbica, alta frecuencia cardíaca y volumen de acciones por minuto'
    },
    {
      sub: 'Juegos Reducidos de Alta Densidad (SSG)',
      names: [
        'SSG 4v4 en 30x25m con Porteros y Regla de Finalización Rápida',
        'SSG 5v5 con Presión Alta y Marcaje Casi Individual en Todo el Terreno',
        'Juego Reducido de Densidad Máxima con Dos Balones en Juego Alternos',
        'SSG 3v3 con Canchas Múltiples Simultáneas para Cero Tiempos Muertos',
        'Fútbol Reducido con Línea de Fuera de Juego Adelantada para Exigir Esfuerzo Físico',
        'SSG con Porterías Grandes a 25 Metros de Distancia: Disparos Constantes',
        'Juego de Posesión y Finalización en Rombo de Alta Densidad Fisiológica',
        'SSG 4v4+2 con Transición Inmediata al Marcar Gol hacia la Otra Portería',
        'Juego Reducido con Penalización de Trote Perimetral para el Equipo que Pierde'
      ],
      focus: 'small-sided games (SSG), densidad de juego y demanda neuromuscular'
    },
    {
      sub: 'Capacidad de Repetición de Sprints (RSA)',
      names: [
        'Protocolo RSA: 6 Sprints de 20 Metros con 20 Segundos de Recuperación Activa y Balón',
        'RSA con Cambios de Dirección: 5 Repeticiones de Ida y Vuelta con Disparo',
        'Sprints Repetidos en Curva Rodeando el Área y Definición al Primer Palo',
        'RSA en Parejas: Persecución Máxima con 15 Segundos de Descanso entre Series',
        'Circuito RSA de 4 Repeticiones de 30 Metros con Pase Final de 15 Metros',
        'Sprints Repetidos con Frenada Brusca y Retorno en Trote de Recuperación',
        'Protocolo RSA Específico de Bandas: Sprints de 25 Metros con Centro Lateral',
        'Entrenamiento de Tolerancia al Lactato con Sprints Cortos de Máxima Frecuencia',
        'Test de Sprints Múltiples con Control del Índice de Fatiga entre la 1ª y la 6ª Serie'
      ],
      focus: 'capacidad de repetir sprints (RSA) y recuperación inter-esfuerzo'
    }
  ];

  for (const theme of cat11Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 2 === 0 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat11,
        subcategory: theme.sub,
        objetivoPrincipal: `Optimizar la condición física del futbolista en ${theme.focus}, preparando el organismo para los requerimientos condicionales de la competición.`,
        objetivoTecnico: `Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.`,
        objetivoTatico: `Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 4,
        jugadoresMax: 16,
        jugadoresLabel: '11–15',
        duracion: '20 min',
        duracionMinutes: 20,
        intensidad: 'Alta',
        espacio: 'Medio',
        materiales: 'Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.',
        organizacion: `Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).`,
        desarrollo: `Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.`,
        pasoAPaso: [
          '1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.',
          '2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.',
          '3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.',
          '4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).',
          '5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse.'
        ],
        puntosClave: [
          'Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.',
          'Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.',
          'No descuidar la respiración y la recuperación diafragmática durante las pausas.',
          'La fatiga no es excusa para descuidar la calidad del golpeo o el pase.'
        ],
        erroresFrecuentes: [
          'Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.',
          'Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.',
          'Trotar con desidia en las fases de transición técnica.'
        ],
        correcciones: [
          '"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte."',
          '"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar."',
          '"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme."'
        ],
        variacionFacil: 'Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.',
        variacionDificil: 'Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.',
        progresion: 'Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.',
        regresion: 'Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.',
        posiciones: 'Todos los jugadores de campo.',
        tags: ['preparación física', 'físico', theme.sub.toLowerCase(), 'resistencia', 'potencia'],
        pitchDiagram: buildPitchDiagram(cat11, theme.sub, age, 'Medio', 8)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 12: PORTEROS (60 exercises: EX726 - EX785)
  // ==========================================
  const cat12 = '12. Porteros' as CategoryId;
  const cat12Themes = [
    {
      sub: 'Reacción Rápida a Doble Remate',
      names: [
        'Doble Remate Frontal a Bocajarro con Incorporación Inmediata del Portero',
        'Blocaje de Primer Disparo y Reacción al Rebote de Segundo Atacante',
        'Remate con Desvío en Barrera y Estirada Rápida al Poste Opuesto',
        'Doble Tiro Consecutivo desde la Frontal: Uno Raso y Otro a Media Altura',
        'Reacción ante Balón Desviado por el Central con Corrección de Pies',
        'Tiro de Media Distancia, Incorporación del Suelo y Salida a Tapar Mano a Mano',
        'Secuencia de Tres Remates en 6 Segundos para Fomentar la Velocidad de Levantamiento',
        'Disparo al Palo Corto con Rechace y Segundo Remate al Palo Largo',
        'Doble Finalización con Balones de Diferente Tamaño o Peso para Reflejos',
        'Remate Frontal Sorpresa con Pantalla Visual de Muñecos en la Trayectoria'
      ],
      focus: 'reflejos, velocidad de incorporación y dobles acciones en portería'
    },
    {
      sub: 'Posicionamiento y Blocaje Frontal',
      names: [
        'Blocaje en W de Balones Frontales a la Altura del Pecho',
        'Posición Básica y Bisectriz: Orientación del Portero según la Posición del Balón',
        'Blocaje Rasante con Rodilla al Suelo como Segunda Barrera de Seguridad',
        'Desplazamiento Lateral sin Cruzar Piernas y Blocaje Frontal Firme',
        'Blocaje de Balones Aéreos Frontales en el Punto Más Alto con Rodilla Arriba',
        'Ajuste de Pasos Cortos (Pasos de Ajuste) ante Disparos de Media Distancia',
        'Blocaje de Balón Raso Húmedo con Amortiguación Abdominal',
        'Posicionamiento respecto a los Postes: Marcar el Ángulo Cerrando el Primer Palo',
        'Blocaje Frontal tras Salto de Mini-Valla con Retorno Rápido a la Bisectriz',
        'Circuito de 4 Disparos Frontales desde Diferentes Vértices del Área de Penalti'
      ],
      focus: 'blocaje en W, posición básica, bisectriz y seguridad de manos'
    },
    {
      sub: 'Desvíos y Vuelos Laterales',
      names: [
        'Vuelo Lateral con Mano Cambiada a la Escuadra Lejana',
        'Desvío a Ras de Suelo a Córner ante Disparo Cruzado Rasante',
        'Impulso Unipodal Lateral para Desviar Balón a Media Altura',
        'Estirada en Plancha con Palma Firme Desviando Hacia Zonas Laterales Seguras',
        'Vuelo Lateral tras Desplazamiento Previo de Dos Pasos Cruzados',
        'Desvío con la Yema de los Dedos rozando el Balón para Mandarlo al Poste',
        'Vuelo Acrobático ante Disparo con Rosca hacia la Escuadra Contraria',
        'Desvío de Emergencia con el Pie ante Tiro Contrapicado a Bocajarro',
        'Circuito de Caídas Laterales Alternadas con Protección de Cadera y Codo',
        'Vuelo Lateral tras Levantarse de una Posición de Rodillas en el Suelo'
      ],
      focus: 'técnica de caída lateral, vuelo a la escuadra y desvío hacia fuera'
    },
    {
      sub: 'Juego Aéreo en Salidas de Córner',
      names: [
        'Salida Valiente al Corazón del Área ante Centro de Córner con Oposición',
        'Blocaje Aéreo en el Punto Más Alto Protegiéndose con la Rodilla Levantada',
        'Despeje de Puños (Uno o Dos Puños) ante Balón Aéreo Muy Disputado',
        'Cálculo de Trayectorias en Balones Aéreos con Viento o Efecto Cerrado',
        'Voz de Mando Contundente: Gritar "¡MÍA!" o "¡VOY!" antes de Atacar el Balón',
        'Salida ante Falta Lateral Colgada entre el Punto de Penalti y el Área Pequeña',
        'Bloqueo de Rematadores y Despeje de Puño Cruzado hacia la Banda',
        'Juego Aéreo con Simulación de Tráfico Humano en el Área de Meta',
        'Lectura de la Curva del Balón: Córner Cerrado al Primer Palo vs Abierto al Segundo',
        'Circuito de Juego Aéreo con Tres Centros Consecutivos desde Ambas Bandas'
      ],
      focus: 'juego aéreo, salida de córner, salto con rodilla arriba y despeje de puños'
    },
    {
      sub: 'Mano a Mano y Achiques',
      names: [
        'Achique en Cruz (Estilo Balonmano) ante Delantero en los Últimos 5 Metros',
        'Temporización en Mano a Mano: Aguantar Erguido sin Vencerse antes de Tiempo',
        'Salida Rápida a los Pies del Atacante que da un Toque Largo',
        'Cobertura de Ángulo en Mano a Mano Lateral Cerrando el Primer Palo',
        'Lectura de las Intenciones del Delantero: Detectar la Vaselina o el Regate',
        'Achique Agresivo Fuera del Área de Meta Reduciendo el Ángulo de Disparo a la Mitad',
        'Reacción ante el Amago del Delantero en el 1v1 sin Perder el Equilibrio',
        'Doble Achique: Salida al Primer Jugador y Recolocación ante Pase de la Muerte',
        'Mano a Mano con Intervención de Pie Estirado bloqueando el Tiro Rasante',
        'Simulación de 10 Situaciones de Mano a Mano Reales con Delanteros del Equipo'
      ],
      focus: 'achique en cruz, aguantar erguido, salida a los pies y lectura en 1v1'
    },
    {
      sub: 'Inicio del Juego con Pie y Mano',
      names: [
        'Pase Raso Preciso con el Pie al Central Abierto Bajo Presión de Delantero',
        'Saque Tenso con la Mano (Estilo Bowling) al Lateral que Desdobla en Carrera',
        'Saque por Alto con el Brazo Estirado (Lanzamiento de Jabalina) hacia el Extremo',
        'Golpeo de Volea Lateral en Despliegue Rápido de Contraataque',
        'Saque de Puerta en Largo con Empeine Total Cayendo en Zona de Pivote',
        'Juego del Portero como Líbero Ofensivo en la Circulación entre Centrales',
        'Pase con Pierna Inhábil del Portero ante Acoso del Delantero Rival',
        'Pase Picado con el Pie por Encima de la Primera Línea de Presión Alta',
        'Saque Rápido con la Mano tras Córner Atrapado para Iniciar Contraataque en 3 Segundos',
        'Circuito de Distribución de Balón a Cuatro Zonas de Precisión Marcadas con Conos'
      ],
      focus: 'juego de pies del portero, salida limpia, saques de mano y contragolpe'
    }
  ];

  for (const theme of cat12Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat12,
        subcategory: theme.sub,
        objetivoPrincipal: `Especializar al guardameta en las habilidades técnicas, tácticas y psicológicas de ${theme.focus}, aumentando su fiabilidad bajo palos.`,
        objetivoTecnico: `Manejo de la posición de base, blocajes seguros, técnica de estirada y caída sin daño, y precisión en la distribución con pie y mano.`,
        objetivoTatico: `Dominar el área propia, mandar sobre la línea defensiva con autoridad verbal y elegir el momento idóneo para salir o aguantar.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 2,
        jugadoresMax: 6,
        jugadoresLabel: '3–5',
        duracion: '20 min',
        duracionMinutes: 20,
        intensidad: 'Media',
        espacio: 'Medio',
        materiales: '1 portería reglamentaria, 10 balones de entrenamiento, mini-vallas, muñecos de barrera, picas, guantes de portero.',
        organizacion: `Área de penalti y meta grande. El entrenador de porteros o pasadores se sitúan en la frontal y bandas para servir balones con precisión.`,
        desarrollo: `Series específicas de repeticiones donde el portero vivencia situaciones simuladas de partido con retroalimentación inmediata sobre sus apoyos y blocajes.`,
        pasoAPaso: [
          '1. Organización: Posicionar al portero en la portería y a los lanzadores en las zonas de disparo o centro.',
          '2. Posición Inicial: Guardameta en posición básica activa (piernas semi-flexionadas, manos a la altura de la cadera, peso en punteras).',
          '3. Desplazamiento: Pasos de ajuste cortos y rápidos hacia la bisectriz del tiro sin cruzar los pies.',
          '4. Intervención: Realizar la acción técnica requerida (blocaje, desvío lateral, salida aérea o achique en cruz).',
          '5. Reincorporación y Distribución: Levantarse de inmediato y simular el inicio rápido del contraataque con la mano o pie.'
        ],
        puntosClave: [
          'Manos siempre por delante del cuerpo para recibir el balón en la fase de amortiguación.',
          'Gritar con fuerza y determinación "¡MÍA!" al salir a balones aéreos para disuadir rivales.',
          'No tirarse al suelo antes del disparo en el 1v1: obligar al delantero a tomar la decisión difícil.',
          'En los desvíos, dirigir la pelota hacia las esquinas exteriores o línea de fondo, nunca al centro del área.'
        ],
        erroresFrecuentes: [
          'Dejar las manos rígidas provocando que el balón resbale o se escape hacia adelante.',
          'Cruzar las piernas en los desplazamientos laterales perdiendo la base de sustentación.',
          'Dudar en la salida de córner quedándose a media salida en tierra de nadie.'
        ],
        correcciones: [
          '"Forma un triángulo firme con los pulgares e índices (blocaje en W) y acompaña el balón al pecho."',
          '"Pasos cortos y laterales; nunca cruces los pies o no podrás saltar si disparan."',
          '"Si sales, vas con todo y hasta el final; si dudas, quédate en la línea."'
        ],
        variacionFacil: 'Lanzamientos de balón suaves a las manos desde distancias cortas (8-10 metros).',
        variacionDificil: 'Disparos con deflexión previa en un muñeco o defensores disputando el centro aéreo.',
        progresion: 'Incorporar situaciones de 2 atacantes contra el portero para forzar decisiones complejas.',
        regresion: 'Trabajar el blocaje y la caída desde la posición de sentado o de rodillas en el césped.',
        posiciones: 'Porteros (Guardametas).',
        tags: ['porteros', 'guardameta', theme.sub.toLowerCase(), 'blocaje', 'paradas'],
        pitchDiagram: buildPitchDiagram(cat12, theme.sub, age, 'Medio', 3)
      });

      idCounter++;
    }
  }

  console.log(`Generated Categories 9 to 12: ${exercises.length} exercises (EX546 to EX${String(idCounter - 1).padStart(3, '0')})`);
  return exercises;
}
