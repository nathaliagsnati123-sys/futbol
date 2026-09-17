import { Exercise, CategoryId, AgeGroup, SkillLevel, IntensityLevel, SpaceSize, PlayerGroup } from '../src/types';
import { buildPitchDiagram } from './diagramBuilder';

export function generateCategory5to8(): Exercise[] {
  const exercises: Exercise[] = [];
  let idCounter = 276;

  // ==========================================
  // CATEGORY 05: FINALIZACIÓN Y TIRO (80 exercises: EX276 - EX355)
  // ==========================================
  const cat5 = '05. Finalización y Tiro' as CategoryId;
  const cat5Themes = [
    {
      sub: 'Voleas y Semivoleas',
      names: [
        'Volea Frontal de Empeine Total tras Pase Aéreo Picado desde la Frontal',
        'Semivolea Cruzada a Bote Pronto tras Devolución Corta de Pecho',
        'Volea Lateral con Caída tras Centro Tenso al Segundo Palo',
        'Remate de Tijera en Semivolea tras Centro Pasado',
        'Volea a la Media Vuelta en Zona de Punto de Penalti',
        'Semivolea con Interior Colocada a la Escuadra tras Bote Alto',
        'Circuito de Voleas Alternas con Izquierda y Derecha tras Centro de Banda',
        'Volea Rasante al Poste Corto tras Balón Aéreo Rechazado',
        'Semivolea de Potencia tras Bote Pronto en la Frontal del Área Grande',
        'Remate de Volea tras Autocontrol con Muslo en Carrera',
        'Volea Acrobática de Espaldas con Remate al Palo Largo',
        'Semivolea tras Pase Largo de 30 Metros a la Espalda de los Centrales',
        'Volea de Primer Toque con Pierna Menos Hábil tras Centro Rápido',
        'Circuito de Finalización Continua con Volea Tras Pared Aérea'
      ],
      focus: 'golpeo aéreo, coordinación óculo-pédica y timing de impacto'
    },
    {
      sub: 'Tiro Tras Pared Frontal',
      names: [
        'Pared Frontal Corta 2v1 en la Frontal y Disparo Raso al Rincón',
        'Pared con Tercer Hombre en la Medialuna con Disparo de Primer Toque',
        'Doble Pared Escalonada entre Mediocentro y Delantero con Disparo',
        'Pared Frontal con Exterior del Pie y Tiro Cruzado con Efecto',
        'Pared Rápida de Espaldas con Pivote y Finalización en Carrera',
        'Pared Diagonal para Superar Línea Defensiva y Golpeo al Palo Lejano',
        'Pared Frontal con Amago de Devolución y Tiro Directo Sorpresivo',
        'Combinación de Pared a Un Toque en Espacio Reducido y Definición Fuerte',
        'Pared con Comodín Interior y Entrada en Segunda Línea para Rematar',
        'Pared Frontal con Salto de Línea y Disparo Rasante con Empeine',
        'Pared en Rombo con Tres Jugadores y Finalización de Interior Colocado',
        'Pared Frontal con Oposición Pasiva de Central y Tiro Rápido',
        'Secuencia Continua de Paredes Frontales con Finalización Alternada'
      ],
      focus: 'asociación en tres cuartos y tiro rápido tras pared'
    },
    {
      sub: 'Centros y Remates al Primer Palo',
      names: [
        'Desmarque de Anticipación al Primer Palo y Remate de Primer Toque',
        'Centro Tenso Lateral con Llegada en Carrera y Toque Cruzado de Empeine',
        'Centro Pasado con Doble Entrada: Finta al Segundo Palo y Corte al Primero',
        'Remate de Cabeza Picado al Primer Palo tras Centro de Extremo a Pierna Cambiada',
        'Centro Raso Fuerte a la Zona de Remate Corto con Desvío Sutil',
        'Llegada de Segunda Línea al Primer Palo tras Desmarque de Arrastre del 9',
        'Centro desde la Línea de Fondo (Pase Atrás) hacia el Vértice del Área Pequeña',
        'Duelo Aéreo con Central al Primer Palo y Remate al Palo Cercano',
        'Centro con Rosca Exterior y Remate de Volea al Primer Palo',
        'Desmarque en Diagonal Corta hacia el Primer Palo tras Saque de Banda',
        'Centro Lateral tras 1v1 y Definición de Puntera Anticipando al Defensa',
        'Remate al Primer Palo con Oposición de Dos Centrales en Marca Zonal',
        'Circuito de Doble Centro: Primer Palo Tenso y Segundo Palo por Alto'
      ],
      focus: 'anticipación, ataque al espacio y remate de primer contacto'
    },
    {
      sub: 'Segunda Jugada y Rebote',
      names: [
        'Ataque al Rebote del Portero tras Disparo Frontal de Media Distancia',
        'Segunda Jugada tras Saque de Córner con Disparo Inmediato en la Frontal',
        'Rebote tras Tiro al Poste: Reacción Rápida y Definición al Arco Vacío',
        'Disputa de Segunda Jugada Aérea con Peinada y Remate en Semivolea',
        'Rebote en Barrera de Falta Directa y Definición con Pie No Hábil',
        'Ataque Rápido al Rechace Central del Defensa con Disparo Rasante',
        'Duelo de Reacción en el Área Pequeña tras Balón Dividido Suelto',
        'Segunda Jugada tras Despeje de Puños del Portero con Volea a Puerta',
        'Transición de Remate: Disparo Inicial, Rebote y Segundo Remate en 3 Segundos',
        'Ataque al Balón Suelto en el Punto de Penalti tras Centro Tocado',
        'Reacción al Rechace con Presión Inmediata y Disparo Cruzado',
        'Segunda Jugada tras Centro Rechazado con Incorporación del Lateral',
        'Doble Oportunidad de Gol: Rebote Forzado y Remate en Desequilibrio',
        'Circuito de Agilidad con Caza de Rebotes en Diferentes Zonas del Área'
      ],
      focus: 'percepción, anticipación de rebotes y velocidad de reacción'
    },
    {
      sub: 'Disparo de Media Distancia',
      names: [
        'Disparo Potente de Empeine Total desde 22 Metros tras Conducción Frontal',
        'Tiro Colocado con Interior y Rosca a la Escuadra Contraria',
        'Disparo de Media Distancia tras Amago de Pase y Acomodo con la Suela',
        'Tiro Lejano a Bote Pronto tras Despeje de la Defensa Rival',
        'Disparo Sorpresivo con Punterazo Preciso desde el Borde de la Medialuna',
        'Golpeo de Media Distancia con Pierna Débil tras Recorte Hacia Fuera',
        'Tiro Potente Rasante al Poste Corto Aprovechando la Pantalla del Delantero',
        'Disparo tras Pase Atrás del Extremo desde Línea de Fondo a 20 Metros',
        'Concurso de Precisión de Disparo de Media Distancia con Dianas en Portería',
        'Disparo Lejano tras Giro Rápido de 180 Grados en Zona de Tres Cuartos',
        'Golpeo de Media Distancia con Barrera Móvil de Defensores en Salida',
        'Disparo Cruzado Fuerte a Media Altura tras Carrera en Diagonal',
        'Circuito Técnico de Dos Disparos Lejanos Consecutivos desde Distintos Ángulos'
      ],
      focus: 'potencia, colocación, armada de pierna y ángulo de tiro'
    },
    {
      sub: 'Mano a Mano con Portero',
      names: [
        'Mano a Mano 1v1 con Portero: Definición por Abajo al Palo Largo',
        'Picadita Sutil (Vaselina) ante la Salida a Ras de Suelo del Guardameta',
        'Regate al Portero hacia el Exterior y Definición a Portería Vacía',
        'Mano a Mano con Acoso de Central desde Atrás: Toque Rápido y Cruzado',
        'Finalización de Primer Toque en Mano a Mano tras Pase en Profundidad',
        'Mano a Mano con Amago de Tiro, Frenada y Toque Suave al Rincón',
        'Duelo Delantero vs Portero en Carrera de 20 Metros con Límite de 3 Toques',
        'Mano a Mano tras Desmarque de Ruptura Rompiendo el Fuera de Juego',
        'Definición con la Puntera Anticipando el Achique en Cruz del Portero',
        'Mano a Mano con Opción de Pase de la Muerte a Compañero que Acompaña',
        'Definición en Mano a Mano desde Ángulo Cerrado en Banda Izquierda',
        'Mano a Mano tras Error en Salida del Rival: Calma y Colocación al Rincón',
        'Circuito de Tres Manos a Manos Consecutivos con Fatiga Progresiva'
      ],
      focus: 'lectura de la salida del portero, templanza y recursos de definición'
    }
  ];

  for (const theme of cat5Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat5,
        subcategory: theme.sub,
        objetivoPrincipal: `Maximizar la efectividad en ${theme.focus}, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.`,
        objetivoTecnico: `Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.`,
        objetivoTatico: `Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.`,
        edad: age,
        nivel: 'Intermedio',
        jugadoresMin: 4,
        jugadoresMax: 12,
        jugadoresLabel: '6–10',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Alta',
        espacio: 'Medio',
        materiales: '1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.',
        organizacion: `Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.`,
        desarrollo: `Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.`,
        pasoAPaso: [
          '1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.',
          '2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.',
          '3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.',
          '4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.',
          '5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria.'
        ],
        puntosClave: [
          'No perder de vista la posición del portero antes de golpear.',
          'Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.',
          'Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.',
          'Atacar el rechace inmediatamente tras rematar por si queda un segundo balón.'
        ],
        erroresFrecuentes: [
          'Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.',
          'Dudar en el último instante entre potencia o colocación.',
          'Rematar sin mirar la portería o impactar mordido el esférico.'
        ],
        correcciones: [
          '"Pasa el pecho por encima del balón para que salga raso y con violencia."',
          '"Elige tu rincón antes de armar la pierna y confía en tu golpeo."',
          '"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico."'
        ],
        variacionFacil: 'Permitir un toque de control antes de disparar y reducir la oposición defensiva.',
        variacionDificil: 'Obligar a rematar de primer toque o introducir un defensor en persecución activa.',
        progresion: 'Añadir un central que dispute el centro o rebote en tiempo real.',
        regresion: 'Remates estáticos sin portero a portería vacía para ajustar la precisión.',
        posiciones: 'Delanteros centros, extremos, mediapuntas y mediocentros llegadores.',
        tags: ['finalización', 'tiro', theme.sub.toLowerCase(), 'gol', 'definición'],
        pitchDiagram: buildPitchDiagram(cat5, theme.sub, age, 'Medio', 6)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 06: ATAQUE (65 exercises: EX356 - EX420)
  // ==========================================
  const cat6 = '06. Ataque' as CategoryId;
  const cat6Themes = [
    {
      sub: 'Ataque Posicional Organizado',
      names: [
        'Estructura 4-3-3: Circulación en U y Fijación por Dentro para Progresar por Fuera',
        'Juego de Posición en Rombo con Mediocentro Organizador y Dos Interiores Escalados',
        'Ataque Posicional contra Bloque Medio: Paciencia y Movilización del Rival',
        'Ocupación de los 5 Carriles Ofensivos con Intercambio de Posición entre Extremo y Lateral',
        'Ataque Posicional con Doble Pivote: Uno Equilibra y Otro Se Desprende',
        'Juego Posicional 7v7+3 con Tres Zonas Horizontales y Regla de Conexión Interior',
        'Ataque Posicional con Falso Nueve que Desciende para Crear Superioridad en la Medular',
        'Basculación Ofensiva Rápida para Encontrar al Hombre Libre en Lado Débil',
        'Estructura de Ataque en 3-4-2-1 con Mediapuntas en los Intervalos Defensivos',
        'Ataque Posicional con Fijación de Centrales y Pase Vertical Rompiendo Bloque',
        'Ataque Organizado con Ruptura Sorpresiva del Interior a la Espalda de la Defensa'
      ],
      focus: 'ataque posicional, ocupación de carriles y paciencia asociativa'
    },
    {
      sub: 'Desmarques de Ruptura',
      names: [
        'Desmarque de Ruptura al Espacio a la Espalda de la Línea de 4 Defensiva',
        'Desmarque en Diagonal de Fuera hacia Dentro del Extremo a Pierna Cambiada',
        'Desmarque de Ruptura del Delantero Centro al Intervalo entre Central y Lateral',
        'Desmarque Ciego del Interior que Rompe desde Atrás a Balón Cruzado',
        'Timing de Ruptura: Arrancar en Línea con el Defensor y Acelerar con el Pase',
        'Desmarque de Apoyo Falso Seguido de Ruptura Vertical al Espacio Abandonado',
        'Doble Desmarque de Ruptura Coordinado entre Dos Puntas para Abrir Pasillo Central',
        'Desmarque de Ruptura del Lateral que Desdobla por Banda a Máxima Velocidad',
        'Ruptura en Profundidad tras Amago de Conducción del Mediocentro Organizador',
        'Desmarque de Ruptura con Cambio de Dirección para Romper la Trampa del Fuera de Juego',
        'Circuito de Pase Profundo y Ruptura Sincronizada con Finalización en Carrera'
      ],
      focus: 'desmarques de ruptura, timing y ataque a la última línea'
    },
    {
      sub: 'Superioridades Ofensivas 3v2 y 4v3',
      names: [
        'Oleadas Ofensivas 3v2 con Transición Rápida y Fijar al Impar',
        'Situación de 4v3 en Mitad de Campo con Búsqueda del Hombre Desmarcado en Banda',
        '3v2 Frontal con Límite de 8 Segundos para Definir ante Portería Grande',
        'Superioridad 4v3 con Incorporación Tardía del Mediocentro desde Atrás',
        '3v2 en Pasillo Central: Conducir para Atraer al Central y Filtrar al Espacio',
        'Oleadas Continuas de 3v2 a 2v3: El que Falla Pasa a Defender',
        '4v3 con Dos Porterías Pequeñas y Una Grande para Fomentar Variedad de Elección',
        '3v2 con Inicio desde Saque de Meta Rápido y Salida en Superioridad',
        '4v3 en Espacio de 35x25m con Regla de No Más de Dos Toques por Jugador',
        'Superioridad 3v2 con Balón Dividido Inicial para Medir Reacción',
        '4v3 con Comodín Ofensivo Central para Asegurar el Pase de Continuidad'
      ],
      focus: 'fijar y dividir, superioridad numérica y toma de decisiones en ventaja'
    },
    {
      sub: 'Centros Laterales con Doble Llegada',
      names: [
        'Centro Lateral tras Desborde con Llegada Sincronizada al Primer y Segundo Palo',
        'Centro Retrasado al Punto de Penalti con Arrastre Previo de los Dos Centrales',
        'Centro Tenso a Media Altura con Remate de Primer Toque y Acompañamiento al Rechace',
        'Doble Llegada: Delantero Centro al Primer Poste y Extremo Opuesto al Segundo',
        'Centro de Rosca Exterior desde Tres Cuartos hacia la Entrada del Interior Lejano',
        'Ataque por Banda con Centro Pasado y Reincorporación del Lateral para el Disparo',
        'Centro Tocado al Segundo Palo con Cabezazo Hacia Atrás para el Rematador Frontal',
        'Oleada de Centros Alternos desde Ambas Bandas con Cuatro Rematadores en Caja',
        'Centro Rasante tras Llegada a Línea de Cal y Desmarque en S del Delantero',
        'Llegada al Área con Tres Escalones Ofensivos: Corto, Punto de Penalti y Balcón',
        'Centro tras Saque de Falta Lateral con Pantalla Ofensiva y Remate en Segundo Palo'
      ],
      focus: 'ocupación del área, sincronización de llegadas y calidad del centro'
    },
    {
      sub: 'Ataque Rápido por Bandas',
      names: [
        'Ataque Rápido con Pase Largo a Banda y Doblaje Exterior del Lateral Ofensivo',
        'Conexión Rápida Extremo-Interior-Lateral con Triangulación en Velocidad',
        'Ataque Vertical por Pasillo Exterior con Cambio de Ritmo y Salida Hacia Dentro',
        'Transición Ofensiva Rápida Desplegando por Ambas Bandas en 3 Pases',
        'Ataque Rápido con Balón Cruzado de Banda a Banda para Aislar al Extremo en 1v1',
        'Circuito de Salida Rápida por Carril Lateral con Pared y Carrera al Espacio',
        'Ataque por Banda con Pase Interior Cortado y Carrera al Espacio Libre de Marca',
        'Despliegue Ofensivo Rápido tras Saque de Córner Defensivo hacia el Extremo',
        'Ataque Lateral con Salida en Diagonal Hacia Portería del Extremo Rápido',
        'Triangulación en Banda y Centro Tenso al Corazón del Área en Menos de 6 Segundos',
        'Ataque por Banda con Intercambio de Carriles entre Delantero y Extremo'
      ],
      focus: 'amplitud, verticalidad, doblajes y velocidad por carriles exteriores'
    },
    {
      sub: 'Salida de Balón desde Atrás',
      names: [
        'Salida Lavolpiana: Mediocentro se Incrusta entre Centrales para Salir en 3+2',
        'Salida de Balón 4+Portero contra Presión Alta de 3 Delanteros Rivales',
        'Salida con Laterales Altos y Estirados con Balón Diagonal del Central',
        'Uso del Portero como Hombre Libre en Salida de Balón Bajo Acoso Asfixiante',
        'Salida en Corto con Finta de Apoyo del Interior y Conducción Abierta del Central',
        'Superación de Primera Línea con Pase Filtrado Tenso al Pivote Defensivo',
        'Salida con Tercer Hombre Interior tras Atraer al Delantero hacia un Lado',
        'Salida de Balón ante Bloque Alto con Pase Medio Directo al Pecho del Delantero',
        'Circuito de Automatismo de Salida desde Saque de Puerta en Corto',
        'Salida de Balón con Rotación de Mediocentros para Descolocar Marcas al Hombre'
      ],
      focus: 'iniciación limpia, superioridad con portero y superación de presión'
    }
  ];

  for (const theme of cat6Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat6,
        subcategory: theme.sub,
        objetivoPrincipal: `Dominar los principios tácticos ofensivos en ${theme.focus}, favoreciendo la progresión colectiva y la creación de ocasiones de gol.`,
        objetivoTecnico: `Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.`,
        objetivoTatico: `Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 6,
        jugadoresMax: 16,
        jugadoresLabel: '11–15',
        duracion: '20 min',
        duracionMinutes: 20,
        intensidad: 'Alta',
        espacio: 'Grande',
        materiales: 'Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.',
        organizacion: `Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.`,
        desarrollo: `El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.`,
        pasoAPaso: [
          '1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.',
          '2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.',
          '3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.',
          '4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.',
          '5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida.'
        ],
        puntosClave: [
          'Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.',
          'Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.',
          'Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.',
          'Movilidad constante de los interiores para ofrecer líneas de pase diagonales.'
        ],
        erroresFrecuentes: [
          'Acumular demasiados jugadores en la misma zona congestionando el juego.',
          'Pases lentos en la circulación que permiten bascular cómodamente al adversario.',
          'Desmarques rectilíneos fáciles de interceptar por los defensores.'
        ],
        correcciones: [
          '"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra."',
          '"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro."',
          '"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego."'
        ],
        variacionFacil: 'Añadir comodines ofensivos en banda o reducir el número de defensores.',
        variacionDificil: 'Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.',
        progresion: 'Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.',
        regresion: 'Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.',
        posiciones: 'Delanteros, extremos, mediapuntas, mediocentros y laterales.',
        tags: ['ataque', 'ataque posicional', theme.sub.toLowerCase(), 'ofensivo', 'táctica'],
        pitchDiagram: buildPitchDiagram(cat6, theme.sub, age, 'Grande', 12)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 07: DEFENSA (65 exercises: EX421 - EX485)
  // ==========================================
  const cat7 = '07. Defensa' as CategoryId;
  const cat7Themes = [
    {
      sub: 'Basculación y Línea de 4',
      names: [
        'Basculación Coordinada de la Línea de 4 ante Cambios de Orientación',
        'Mantenimiento de Distancias entre Centrales y Laterales (8-10 Metros)',
        'Basculación en Bloque con Salida del Lateral a Presión y Cierre del Central',
        'Línea Defensiva de 4 contra Oleadas de 3 Delanteros Rivales',
        'Basculación hacia Banda con Salida del Extremo y Cobertura del Doble Pivote',
        'Movimiento en Acordeón: Achique Colectivo ante Pase Atrás del Rival',
        'Basculación Defensiva en Medio Campo Evitando Pases entre Líneas',
        'Sincronización de la Línea de 4 con Balón Descubierto: Replegar al Espacio',
        'Basculación Rápida ante Centro Lateral con Cierre del Lateral Opuesto al Segundo Palo',
        'Defensa de Cuatro con Fuera de Juego Táctico a la Voz de Mando del Central',
        'Circuito de Basculación con Cuerda Elástica Imaginaria entre Defensores'
      ],
      focus: 'basculación, compactación de línea de 4 y distancias'
    },
    {
      sub: 'Duelos Defensivos y Temporización',
      names: [
        'Temporización en 1v1 Frontal: Aguantar Sin Venderse hasta Provocar el Error',
        'Perfil Defensivo: Orientar al Atacante hacia su Pierna Menos Hábil o Banda',
        'Duelo Defensivo 1v1 con Entrada a Tiempo en el Momento del Toque Largo',
        'Temporización en Desventaja Numérica 1v2 para Dar Tiempo al Repliegue',
        'Defensa del 1v1 de Espaldas: Encimar sin Cometer Falta y Evitar el Giro',
        'Duelo en Banda con Uso del Cuerpo y Brazo Legal para Robar la Posición',
        'Temporización en 2v2: Uno Presiona al Balón y el Compañero Realiza la Cobertura',
        'Defensa Agresiva de Balón Dividido con Anticipación Limpia de Pie',
        'Duelo Defensivo Aéreo con Salto y Despeje Hacia Zonas Seguras Laterales',
        'Temporización ante Atacante Rápido: Ceder Metros sin Romper la Estructura',
        'Duelo 1v1 en el Borde del Área Evitando el Disparo Frontal'
      ],
      focus: 'temporización, perfil corporal defensivo y momento de entrada'
    },
    {
      sub: 'Presión Alta Tras Pérdida',
      names: [
        'Regla de los 5 Segundos: Acoso Feroz Inmediato tras Pérdida de Posesión',
        'Presión en Manada: Asfixiar al Poseedor Cerrando Todas sus Salidas Cercanas',
        'Presión Tras Pérdida en Campo Rival con Vigilancia Estricta de los Receptores Lejanos',
        'Juego Reducido con Puntos Extra si el Robo se Produce en Menos de 4 Segundos',
        'Presión Alta Coordinada con Activador: El Delantero Marca el Inicio de la Cacería',
        'Acoso Tras Pérdida en Banda: Encerrar al Rival Contra la Línea de Cal',
        'Presión Inmediata con Anticipación del Interceptor en el Primer Pase Rival',
        'Transición de Chip Mental: De Atacante a Defensor en Menos de Un Segundo',
        'Presión Alta en Saque de Meta Rival con Marcaje al Hombre en Zonas Clave',
        'Rondo 6v3 con Regla de Presión Feroz al Perder para Recuperar en la Zona',
        'Presión Asfixiante en Tres Cuartos con Cierre de Línea Central por los Medios'
      ],
      focus: 'reacción inmediata tras pérdida, acoso y reducción de espacios'
    },
    {
      sub: 'Coberturas y Permutas',
      names: [
        'Cobertura Defensiva en Pareja de Centrales: Uno Salta y el Otro Guarda la Espalda',
        'Permuta Inmediata cuando el Lateral es Superado en Velocidad por Banda',
        'Triángulo Defensivo de Coberturas entre Central, Lateral y Mediocentro',
        'Cobertura al Mediocentro que Sale a Presionar en Zona Central',
        'Doble Cobertura ante Extremo Desequilibrante en Situación de 2v1 Defensivo',
        'Permuta Defensiva tras Desdoble del Lateral Rival para No Dejar Hueco Libre',
        'Cobertura Escalonada en Situación de 3v3 con Basculación Sincronizada',
        'Mecanismo de Ayuda Defensiva Interior cuando el Rival Rompe la Primera Línea',
        'Cobertura del Central Lejano cerrando la Diagonal ante Pase a la Espalda',
        'Juego de Posición Defensivo con Relevos y Permutas Constantes ante Desmarques',
        'Circuito Táctico de Coberturas en Cadena ante Progresión Lateral del Rival'
      ],
      focus: 'cobertura, permuta, relevo y equilibrio de bloque'
    },
    {
      sub: 'Defensa de Centros al Área',
      names: [
        'Organización Defensiva en Centro Lateral: Reparto de Marcas en la Caja',
        'Despeje Orientado del Central ante Centro Tenso al Primer Palo',
        'Defensa de Centro Pasado con Cierre del Lateral Opuesto Evitando Remate',
        'Coordinación entre Centrales y Portero en Balones Aéreos Frontales',
        'Defensa Zonal de Centros Laterales con Ataque al Balón en el Vértice del Área',
        'Bloqueo Corporal Legal de Delanteros para No Dejar Rematar con Comodidad',
        'Defensa de Centro Raso Retrasado con Cierre del Doble Pivote a la Medialuna',
        'Despeje de Cabeza en Desplazamiento Hacia Delante ante Centro Lateral',
        'Defensa de Córner con Estructura Mixta: 4 Zonales y 3 al Hombre',
        'Defensa de Segunda Jugada tras Despeje Inicial en el Área Pequeña',
        'Circuito de Resistencia Aérea con Despejes Consecutivos desde Ambas Bandas'
      ],
      focus: 'defensa del área, despeje orientado y marcaje de rematadores'
    },
    {
      sub: 'Achique hacia Delante',
      names: [
        'Achique de Bloque Defensivo ante Pase Atrás del Adversario',
        'Reducción de Espacios hacia Delante al Observar al Rival de Espaldas',
        'Achique Agresivo tras Despeje Defensivo para Dejar en Fuera de Juego al Rival',
        'Presión Hacia Delante de los Mediocentros para Comprimir el Campo a 30 Metros',
        'Achique Sincronizado de las Tres Líneas al Gritar la Voz de Orden "¡SALIMOS!"',
        'Reducción Espacial Defensiva para Ahogar la Circulación en Zona Media',
        'Achique Defensivo tras Balón Dividido Ganado en Primera Instancia',
        'Juego Condicionado con Líneas Marcadas que Deben Superarse al Adelantar el Bloque',
        'Achique hacia Delante con Vigilancia Estricta de la Espalda ante Balón Descubierto',
        'Entrenamiento de Sincronía Defensiva: Salir Juntos sin Romper el Fuera de Juego'
      ],
      focus: 'achique hacia delante, compresión de líneas y fuera de juego'
    }
  ];

  for (const theme of cat7Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat7,
        subcategory: theme.sub,
        objetivoPrincipal: `Fortalecer la solidez colectiva e individual en ${theme.focus}, reduciendo las opciones ofensivas del rival y protegiendo la meta.`,
        objetivoTecnico: `Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.`,
        objetivoTatico: `Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 6,
        jugadoresMax: 16,
        jugadoresLabel: '11–15',
        duracion: '20 min',
        duracionMinutes: 20,
        intensidad: 'Alta',
        espacio: 'Grande',
        materiales: '10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.',
        organizacion: `Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.`,
        desarrollo: `El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.`,
        pasoAPaso: [
          '1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.',
          '2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.',
          '3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.',
          '4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.',
          '5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas.'
        ],
        puntosClave: [
          'Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.',
          'Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.',
          'Comunicación constante del central líder para marcar cuándo salir o replegar.',
          'No perder la referencia de la marca individual mientras se atiende al balón.'
        ],
        erroresFrecuentes: [
          'Mirar solo el balón descuidando el desmarque del atacante a la espalda.',
          'Entrar al bulto a pies juntos facilitando el regate o autopase del rival.',
          'Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego.'
        ],
        correcciones: [
          '"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón."',
          '"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo."',
          '"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando."'
        ],
        variacionFacil: 'Reducir el número de atacantes rivales o limitar su velocidad de juego.',
        variacionDificil: 'Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.',
        progresion: 'Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.',
        regresion: 'Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.',
        posiciones: 'Defensas centrales, laterales, pivotes defensivos y mediocentros.',
        tags: ['defensa', theme.sub.toLowerCase(), 'basculación', 'cobertura', 'duelo defensivo'],
        pitchDiagram: buildPitchDiagram(cat7, theme.sub, age, 'Grande', 10)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 08: TRANSICIONES (60 exercises: EX486 - EX545)
  // ==========================================
  const cat8 = '08. Transiciones' as CategoryId;
  const cat8Themes = [
    {
      sub: 'Transición con Comodín Exterior',
      names: [
        'Posesión 4v4 con Dos Comodines en Banda que Activan Transición Vertical al Robo',
        'Juego Reducido 5v5+2 Comodines Exteriores: Cambio de Rol Inmediato al Perder',
        'Transición Rápida Apoyándose en Comodín Neutral para Desahogar el Juego',
        'Conservación en Espacio Reducido con Pase Rápido al Comodín tras Intercepción',
        'Juego 3v3+2 en Pasillos con Búsqueda Inmediata del Comodín Profundo',
        'Transición Ofensiva con Comodín de Espaldas que Descarga de Primer Toque',
        'Doble Rondo 4v2 con Comodín Conector entre Cuadrantes al Producirse el Robo',
        'Posesión 6v6 con Comodines en los Fondos para Finalizar en Mini-Porterías',
        'Transición Defensiva Rápida Cerrando la Línea de Pase hacia los Comodines',
        'Juego de Posición con Comodines Flotantes que Cambian de Equipo en Cada Robo'
      ],
      focus: 'uso del comodín para desahogo y velocidad de activación tras robo'
    },
    {
      sub: 'Transición Ofensiva Rápida (Contraataque)',
      names: [
        'Contraataque en 3 Pases: Robo en Campo Propio y Pase Vertical al Extremo',
        'Transición Ofensiva en Menos de 8 Segundos con Despliegue en Abanico',
        'Despliegue Rápido 3v2 tras Robo en Medio Campo con Conducción Fijadora',
        'Contraataque de Primera Intención con Pase en Diagonal Rompiendo Línea Alta',
        'Salida en Tromba 4v3 tras Saque de Córner Rival Defendido con Éxito',
        'Transición Ofensiva con Conducción Explosiva del Interior y Pase al Espacio',
        'Contraataque tras Robo en Presión Alta con Finalización en Menos de 5 Segundos',
        'Transición Rápida con Balón Largo a la Carrera del Delantero en Solitario',
        'Oleada de Contraataque 3v1 con Apoyo Rápido de Segunda Línea',
        'Juego Condicionado: El Gol en Contraataque Vale Triple si se Anota en 10 Segundos'
      ],
      focus: 'velocidad vertical, desmarque en abanico y finalización en pocos segundos'
    },
    {
      sub: 'Transición Defensiva (Presión Inmediata)',
      names: [
        'Acoso Inmediato tras Pérdida para Impedir el Primer Pase Cómodo del Rival',
        'Falta Táctica Inteligente si la Presión Inmediata no Logra Cortar la Transición',
        'Repliegue Intensivo en Velocidad si el Rival Rompe la Primera Línea de Presión',
        'Reorganización del Bloque tras Pérdida en Banda: Encerrar o Correr Hacia Atrás',
        'Transición Defensiva con Asfixia del Poseedor por Tres Jugadores Cercanos',
        'Temporización del Último Defensor mientras los Medios Repliegan a Máxima Potencia',
        'Juego de Posesión con Penalización de Flexiones si no se Presiona al Perder',
        'Transición Defensiva tras Balón Parado Propio con Vigilancias Ofensivas Estrictas',
        'Acoso de Espaldas al Rival para Forzar su Pase Hacia Atrás y Frenar el Ataque',
        'Circuito de Cambio de Mentalidad: Ataque-Pérdida-Sprint Defensivo de 15 Metros'
      ],
      focus: 'reacción al perder el balón, acoso al poseedor y repliegue de seguridad'
    },
    {
      sub: 'Cambio Rápido de Chip 3v2 a 2v3',
      names: [
        'Oleadas Continuas de 3v2 que Pasan Inmediatamente a Defender un 2v3',
        'Juego de Superioridades e Inferioridades Alternadas con Entrada de Nuevos Jugadores',
        'Ataque 3v2 con Transición a 2v3 al Entrar Dos Defensores de Refresco por Banda',
        'Transición Continua en Medio Campo: De Atacante en Ventaja a Defensor en Acoso',
        'Duelo Colectivo 3v2 a 2v3 con Mini-Porterías en los Fondos y Cambio de Balón',
        'Juego de Reacción Rápida: A la Señal Sonora se Invierte el Rol y la Dirección de Ataque',
        'Oleadas de 4v3 a 3v4 con Incorporación Sincronizada desde la Línea de Medios',
        'Transición Dinámica 3v2 con Salida Inmediata del Portero hacia la Otra Meta',
        'Juego de Resistencia Táctica con 4 Series de Cambio Continuo de Rol 3v2 a 2v3',
        'Circuito de Oleadas donde Quien Falla el Tiro Debe Quedarse a Defender en Inferioridad'
      ],
      focus: 'cambio instantáneo de chip mental y adaptación a roles asimétricos'
    },
    {
      sub: 'Despliegue Vertical tras Robo',
      names: [
        'Robo en Zona Medular y Pase Vertical Inmediato entre Centrales',
        'Despliegue en Profundidad con Rupturas Cruzadas de Extremos tras Recuperación',
        'Pase Vertical de Seguridad y Devolución de Cara para Salir en Velocidad',
        'Robo de Balón y Ataque Directo al Espacio Libre sin Pasar por Zonas Lentas',
        'Transición Vertical tras Intercepción con Conducción Hacia Delante para Atraer Marcas',
        'Salida Vertical tras Recuperar en Área Propia con Pase Tensado a Tres Cuartos',
        'Juego de Dos Zonas: Prohibido dar Más de Un Pase Hacia Atrás tras el Robo',
        'Despliegue Vertical con Cambio de Ritmo del Mediocentro que Llega desde Atrás',
        'Robo en Presión Media y Balón Filtrado al Hueco para el Delantero Desmarcado',
        'Transición Vertical Asimétrica Cargando el Ataque por el Lado Débil del Rival'
      ],
      focus: 'verticalidad tras recuperación, mirar hacia delante y desmarque veloz'
    },
    {
      sub: 'Replegarse o Presionar',
      names: [
        'Lectura Táctica Colectiva: ¿Balón Cubierto Presionamos, Balón Libre Replegamos?',
        'Toma de Decisión Grupal tras Pérdida: Presión en Zona o Repliegue en Bloque Medio',
        'Juego Condicionado con Dos Señales Visuales para Elegir entre Acosar o Bajar',
        'Transición Condicionada a la Distancia de la Pérdida respecto a la Portería Propia',
        'Ejercicio de Reconocimiento de Ventaja Rival: Cuándo Cortar y Cuándo Ceder Metros',
        'Repliegue Rápido hacia la Zona de Rechace ante Salida Limpia del Contrario',
        'Presión Colectiva si el Pase Rival es Lento o Forzado a Banda',
        'Decisión Inmediata de los Centrales ante Contraataque: Saltar o Recular',
        'Juego de 6v6 en 40 Metros con Evaluación de la Elección Defensiva tras Cada Pérdida',
        'Circuito Táctico de Transición con Opciones Alternas de Acoso Alto o Repliegue Rápido'
      ],
      focus: 'lectura táctica del momento de presionar o replegar el bloque'
    }
  ];

  for (const theme of cat8Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat8,
        subcategory: theme.sub,
        objetivoPrincipal: `Dominar los momentos críticos de cambio de posesión en ${theme.focus}, optimizando la velocidad de respuesta física y cognitiva.`,
        objetivoTecnico: `Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.`,
        objetivoTatico: `Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 6,
        jugadoresMax: 14,
        jugadoresLabel: '11–15',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Alta',
        espacio: 'Medio',
        materiales: '12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.',
        organizacion: `Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.`,
        desarrollo: `Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.`,
        pasoAPaso: [
          '1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.',
          '2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.',
          '3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.',
          '4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.',
          '5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo.'
        ],
        puntosClave: [
          'Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.',
          'Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.',
          'Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.',
          'Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales.'
        ],
        erroresFrecuentes: [
          'Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.',
          'Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.',
          'Acompañar el contraataque trotando sin pisar el área rival.'
        ],
        correcciones: [
          '"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato."',
          '"El primer pase tras robar debe ser hacia delante, busca el espacio abierto."',
          '"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace."'
        ],
        variacionFacil: 'Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.',
        variacionDificil: 'Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.',
        progresion: 'Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.',
        regresion: 'Mecanizar la salida de contraataque sin oposición activa inicial.',
        posiciones: 'Todas las posiciones de campo.',
        tags: ['transiciones', 'contraataque', theme.sub.toLowerCase(), 'presión tras pérdida', 'velocidad táctica'],
        pitchDiagram: buildPitchDiagram(cat8, theme.sub, age, 'Medio', 10)
      });

      idCounter++;
    }
  }

  console.log(`Generated Categories 5 to 8: ${exercises.length} exercises (EX276 to EX${String(idCounter - 1).padStart(3, '0')})`);
  return exercises;
}
