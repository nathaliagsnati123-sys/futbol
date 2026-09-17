import { Exercise, CategoryId, AgeGroup, SkillLevel, IntensityLevel, SpaceSize, PlayerGroup } from '../src/types';
import { buildPitchDiagram } from './diagramBuilder';

export function generateCategory13to16(): Exercise[] {
  const exercises: Exercise[] = [];
  let idCounter = 786;

  // ==========================================
  // CATEGORY 13: FÚTBOL BASE (65 exercises: EX786 - EX850)
  // Ages: 6–8 años and 9–11 años exclusively.
  // Playful, motor skills, discovery, joy of the game.
  // ==========================================
  const cat13 = '13. Fútbol Base' as CategoryId;
  const cat13Themes = [
    {
      sub: 'Fundamentos Básicos sin Presión',
      names: [
        'El Espejo Mágico: Imitar Movimientos del Monitor con Balón en los Pies',
        'Caza del Tesoro: Conducir y Recoger Conos de Colores Repartidos por el Campo',
        'Toques Suaves de Campana entre Ambos Pies al Ritmo de Canciones Infantiles',
        'El Semáforo: Conducir en Verde, Pisar en Ámbar y Estatua en Rojo',
        'Pisar y Rolar el Balón Hacia Delante y Atrás con la Planta del Pie',
        'El Laberinto de Conos: Conducir sin Tocar Ningún Obstáculo con Ambas Piernas',
        'Pases al Castillo de Conos para Derribar la Torre Central con Precisión',
        'Autopase Suave y Carrera para Atrapar el Balón antes de que Salga del Círculo',
        'Pisar el Balón con la Suela y Dar Tres Vueltas Rápidas Alrededor de Él',
        'Conducción Libre con Cambios de Velocidad al Oír el Silbato Animado',
        'El Túnel Divertido: Pasar el Balón por Debajo de las Piernas de los Compañeros'
      ],
      focus: 'familiarización con el balón, dominio motor lúdico y alegría por el juego'
    },
    {
      sub: 'Iniciación al Pase y Control Divertido',
      names: [
        'Los Bolos de Fútbol: Pases Rasos con el Interior para Derribar Botellas o Conos',
        'Pase entre Amigos a Través de Puertas Mágicas de Colores',
        'Control Suave con el Interior: "Acariciar el Balón como si Fuera un Gatito"',
        'El Reloj de Pases: Conectar 5 Pases Seguidos sin que el Balón se Detenga',
        'Pases en Parejas con Reto de Atrapar el Balón con la Suela en un Solo Toque',
        'Pase Raso a la Casita: Enviar el Balón Dentro de un Cuadrado de 2x2 Metros',
        'Pase en Zigzag entre Cuatro Amigos Formando una Estrella en el Césped',
        'Control y Saludo: Detener el Balón con la Planta, Levantar la Mano y Pasar',
        'Pase de Precisión a Mini-Portería sin Portero desde 6 Metros de Distancia',
        'Rueda de Pases Divertida en Círculo con Dos Balones Rodando a la Vez',
        'Pase con la Pierna Menos Hábil con Celebración Grupal al Acertar la Puerta'
      ],
      focus: 'superficie del interior del pie, control de planta y pase cooperativo'
    },
    {
      sub: 'Juegos Recreativos de Conducción',
      names: [
        'El Comecocos: Conducir el Balón Siguiendo las Líneas Pintadas del Campo',
        'La Selva Misteriosa: Esquivar "Monos y Leones" Protegiendo el Esférico',
        'Carrera de Fórmulas 1: Conducir por Circuitos Curvos de Conos Bajos',
        'El Lobo Feroz: Conducir Hacia la Casa del Lobo y Regresar Rápido al Oír su Aullido',
        'Pisar y Proteger: El Juego de Proteger el Balón con el Cuerpo sin Empujar',
        'Conducción con Toques de Empeine Exterior esquivando Huellas en el Suelo',
        'Robo de Colas: Conducir Mientras se Intenta Quitar el Peto que Cuelga del Compañero',
        'Conducción Espacial: Esquivar Meteoritos (Balones Rodantes Lanzados por el Técnico)',
        'Circuito de Montaña Rusa: Conducir Subiendo y Bajando Pequeñas Rampas o Setas',
        'Conducción en Parejas Tomados de la Mano sin Perder el Control del Balón',
        'El Tren de Conducción: Seguir al Líder del Vagón con Toques Cortos y Seguros'
      ],
      focus: 'conducción con empeine exterior, protección corporal básica y visión periférica'
    },
    {
      sub: 'Mini-Partidos con Retos Técnicos',
      names: [
        'Partidillo 3v3 con 4 Porterías Pequeñas: ¡Vale Gol en Cualquiera de Ellas!',
        'Mini-Partido con Reto: El Gol Solo Vale si Previamente se Hizo un Pase',
        'Fútbol Fantasía 2v2 con Porteros Volantes y Celebraciones Creativas',
        'Partidillo con Porterías Hechas de Conos Gigantes y Saques con la Mano',
        'Juego 3v3 con Regla: Todos los Jugadores Deben Tocar el Balón antes del Gol',
        'Mini-Partido de Campeones con Música Alegre de Fondo y Rotación de Canchas',
        'Fútbol 4v4 con Balones de Espuma Ligera para Fomentar la Confianza y Cero Miedo',
        'Partidillo con Tarjetas de Reto: "Marcar con la Zurda", "Hacer una Finta"',
        'Mini-Partido 3v3 con Canchas Múltiples y Partidos Cortos de 3 Minutos',
        'Fútbol Sonrisa: El Gol Celebrado en Grupo con Baile Suma Dos Puntos',
        'Torneo de Fin de Semana Relámpago con Medallas Simbólicas para Todos'
      ],
      focus: 'aplicación libre en partidos pequeños, retos técnicos y fomento de la empatía'
    },
    {
      sub: 'Coordinación Motriz Multideporte',
      names: [
        'Circuito Motor: Reptar por el Suelo, Saltar el Cono y Chutar a Gol',
        'Rayuela Futbolera: Saltos a la Pata Coja con Control de Balón Posterior',
        'Pasa la Pelota con la Mano, Salta la Valla y Conduce con el Pie',
        'Juegos de Equilibrio sobre Líneas de Tiza con Conducción Alternada',
        'Lanzamiento de Balón al Aire, Aplaudir Tres Veces y Controlar con el Muslo',
        'Carrera de Animales: Andar como Cangrejos, Ranas y Osos antes de Disparar',
        'Circuito Psicomotor con Aros de Colores, Picas Bajas y Definición Alegre',
        'Equilibrio con un Pie sobre el Balón y Saludo al Monitor con Ambas Manos',
        'Saltar dentro y fuera de Aros Coordinando Apoyos y Recibir Pase Suave',
        'Transporte de Balones en Parejas sin Usar las Manos (Espalda con Espalda)',
        'Circuito de Agilidad Infantil: Rueda de Voltereta en Colchoneta y Gol Alegre'
      ],
      focus: 'patrones motores fundamentales, coordinación óculo-pédica y equilibrio'
    },
    {
      sub: 'Toma de Decisiones Lúdica',
      names: [
        '¿A Qué Puerta Voy? Conducir Hacia la Portería Cuyo Color Grite el Entrenador',
        'El Cazador Dormido: Elegir Si Pasar o Regatear según se Mueva el Defensor',
        'Juego de Elección Rápida: Mini-Portería Izquierda o Derecha según la Señal Visual',
        '2v1 Infantil: Descubrir si Conviene Conducir o Pasar al Amigo Desmarcado',
        'Lectura de Números: Contar con los Dedos mientras se Conduce el Balón',
        'El Guardián del Tesoro: Engañar con el Cuerpo para Pasar por el Lado Vacío',
        'Juego del Dilema: Anotar Gol Rápido o Esperar la Llegada del Compañero',
        'Reconocimiento de Espacios Libres mediante Círculos de Colores Vacíos',
        'Elección de Superficie: Chutar Fuerte con Empeine o Suave con el Interior',
        'Circuito de Tres Opciones: Disparo, Pase a Muñeco o Regate a Cono Gigante'
      ],
      focus: 'toma de decisión temprana mediante juegos de pistas y estímulos visuales'
    }
  ];

  for (const theme of cat13Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 2 === 0 ? '6–8 años' : '9–11 años');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat13,
        subcategory: theme.sub,
        objetivoPrincipal: `Promover el desarrollo motriz y la pasión por el fútbol a través de ${theme.focus}, en un entorno seguro y formativo.`,
        objetivoTecnico: `Contacto inicial y familiarización con todas las superficies del pie, controles suaves con la suela y golpeos divertidos.`,
        objetivoTatico: `Aprender a compartir el balón con los compañeros, reconocer el espacio libre y disfrutar tanto atacando como defendiendo.`,
        edad: age,
        nivel: 'Principiante',
        jugadoresMin: 4,
        jugadoresMax: 12,
        jugadoresLabel: '6–10',
        duracion: '12 min',
        duracionMinutes: 12,
        intensidad: 'Baja',
        espacio: 'Pequeño',
        materiales: 'Conos de colores vivos, aros de psicomotricidad, balones ligeros (talla 3 o 4), petos infantiles, mini-porterías.',
        organizacion: `Área delimitada de 15x15m o 20x20m sin esquinas peligrosas. Todo el material preparado con colores atractivos y llamativos.`,
        desarrollo: `Dinámicas basadas en cuentos motores, metáforas infantiles y juegos cooperativos donde cada niño tiene contacto constante con el balón.`,
        pasoAPaso: [
          '1. Explicación Fantástica: El monitor reúne a los niños en círculo y presenta la actividad como un juego o aventura.',
          '2. Demostración Práctica: Mostrar el gesto técnico de forma exagerada y divertida para que los niños lo copien visualmente.',
          '3. Práctica Libre Guiada: Los niños exploran el movimiento a su propio ritmo con música o consignas positivas.',
          '4. Retos Divertidos: Introducir pequeñas misiones ("¿quién logra 5 toques sin que se escape el balón?") sin eliminar a nadie.',
          '5. Cierre Positivo: Chocar los cinco con todos los participantes celebrando el esfuerzo y la sonrisa.'
        ],
        puntosClave: [
          'Cada niño con su propio balón el mayor tiempo posible.',
          'Prohibido el castigo o la eliminación de jugadores: si fallan, siguen jugando de inmediato.',
          'Uso de metáforas ("frenar el coche", "pisar la luna") para facilitar la comprensión.',
          'Fomentar la cooperación y el respeto hacia los compañeros desde la primera sesión.'
        ],
        erroresFrecuentes: [
          'Golpear el balón con la puntera descontrolada levantándolo peligrosamente.',
          'Mirar fijamente los cordones de las zapatillas sin levantar la cabeza.',
          'Desanimarse si el balón se escapa de los límites del campo.'
        ],
        correcciones: [
          '"¡Acaricia el balón con la parte de dentro de la zapatilla, como si fuera de cristal!"',
          '"Levanta los ojos para ver a qué amigo le puedes pasar el tesoro."',
          '"¡No pasa nada si se escapa, ve a por él con una gran sonrisa y sigue jugando!"'
        ],
        variacionFacil: 'Hacer el espacio más amplio y permitir tocar el balón con cualquier superficie.',
        variacionDificil: 'Usar únicamente el pie menos hábil o añadir un obstáculo divertido.',
        progresion: 'Pasar del juego individual al juego en parejas cooperativas.',
        regresion: 'Realizar los ejercicios caminando despacio con el balón en las manos o rodándolo suavemente.',
        posiciones: 'Todos los niños y niñas en formación integral.',
        tags: ['fútbol base', 'iniciación', theme.sub.toLowerCase(), 'psicomotricidad', 'lúdico'],
        pitchDiagram: buildPitchDiagram(cat13, theme.sub, age, 'Pequeño', 6)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 14: EJERCICIOS INDIVIDUALES (50 exercises: EX851 - EX900)
  // Player count: exactly 1 player! Autonomy, solo training, ball mastery.
  // ==========================================
  const cat14 = '14. Ejercicios Individuales' as CategoryId;
  const cat14Themes = [
    {
      sub: 'Malabarismos y Toques de Precisión',
      names: [
        'Secuencia de Toques Aéreos: Pie Derecho, Muslo, Cabeza, Muslo y Pie Izquierdo',
        'Toques en Suspensión con Empeine Total Manteniendo el Balón a la Altura de la Rodilla',
        'Dominio Aéreo con Superficie Externa del Pie y Amortiguación con el Empeine',
        'Control de Balón Caído del Cielo: "Matar la Pelota" con la Suela al Primer Contacto',
        'Malabarismos en Sentadilla Profunda sin Dejar Caer el Esférico',
        'Toques Alternados Continuos Izquierda-Derecha con Toque Suave al Centro',
        'La Vuelta al Mundo (Around the World): Técnica y Fluidez en Solitario',
        'Dominio de Balón Caminando hacia Delante y Atrás sobre una Línea Recta',
        'Desafío de 100 Toques Consecutivos sin Bote de Balón en Espacio de 2x2m'
      ],
      focus: 'malabarismos, dominio aéreo, sensibilidad del toque y propiocepción'
    },
    {
      sub: 'Autopase y Remate de Precisión',
      names: [
        'Autopase Alto con Giro de 180 Grados y Golpeo Colocado a Mini-Portería',
        'Lanzamiento de Balón al Aire, Carrera de 10 Metros y Remate de Volea',
        'Autopase Picado contra el Césped y Golpeo de Empeine Rasante al Poste',
        'Autopase en Diagonal, Amago de Cuerpo y Tiro Potente a la Escuadra',
        'Pase al Espacio Vacío, Sprint Explosivo y Finalización con Pierna Menos Hábil',
        'Autopase con el Tacón por la Espalda y Disparo Rápido de Puntera Colocada',
        'Balón Lanzado con las Manos hacia Atrás, Giro Rápido y Remate de Semivolea',
        'Circuito Individual de Tres Remates Consecutivos a Tres Porterías Pequeñas',
        'Autopase en Sombrerito por Encima de un Cono Alto y Remate antes del Segundo Bote'
      ],
      focus: 'autopase, control en carrera, golpeo de precisión en soledad'
    },
    {
      sub: 'Circuito Técnico en Conos Solitario',
      names: [
        'Eslalon Continuo entre 8 Conos Bajos con Toques Exclusivos de Exterior e Interior',
        'Circuito en Cruz: Conducción Frontal, Freno con Planta, Conducción Lateral y Retroceso',
        'Figura en 8 Alrededor de Dos Picas con Conducción Ajustada con Ambas Piernas',
        'Circuito de Cuatro Cuadrados: Cambio de Sentido en Cada Vértice con Recorte',
        'Conducción en Laberinto de Conos Alternando Suela, Empeine e Interior',
        'Circuito Técnico de 5 Estaciones con 30 Segundos de Trabajo Máximo en Cada Una',
        'Eslalon en Retroceso (Marcha Atrás) Pisando el Balón con las Dos Plantas',
        'Circuito en Reloj: Ir al Cono Central y Salir hacia Cada una de las 12 Posiciones'
      ],
      focus: 'circuitos de habilidad en conos, giros, frenadas y cambios de sentido solitarios'
    },
    {
      sub: 'Técnica de Reboteador en Pared',
      names: [
        'Pases Consecutivos contra Pared a 1 Toque con Pie Alterno durante 60 Segundos',
        'Pase Fuerte a la Pared, Control Orientado Hacia Fuera y Pase de Retorno',
        'Pared de Rebote: Control con Pecho, Amortiguación con Muslo y Volea a la Pared',
        'Disparo Raso contra el Frontón, Giro Rápido y Control del Rechace Impredecible',
        'Pase Diagonal contra Pared, Carrera al Espacio de Rebote y Toque de Primera',
        'Pase aéreo contra el Muro, Salto y Cabeceo Dirigido a Diana Pintada',
        'Reboteador Rápido: 3 Pases Cortos y 1 Pase Fuerte con Cambio de Pierna',
        'Circuito de Pared en L: Golpear a Muro Frontal, Recibir y Girar para Golpear al Lateral'
      ],
      focus: 'entrenamiento con pared/reboteador, velocidad de pase y lectura de rechaces'
    },
    {
      sub: 'Control y Orientación con 4 Esquinas',
      names: [
        'Cuadrado de 4 Esquinas: Lanzar Balón al Aire y Salir Conduciendo por la Esquina Indicada',
        'Control Orientado en Cuadrado: Recibir Balón de Rebote y Orientar a 90 Grados',
        'Cuatro Postas Técnicas: Conducción en Rombo con Recorte de Croqueta en Cada Esquina',
        'Control y Salida Explosiva en Esquina Opuesta en Menos de 2 Segundos',
        'Ejercicio Individual de las 4 Esquinas con Reto de Tiempo con Cronómetro',
        'Control Aéreo dentro del Cuadrado sin que el Balón Salga de los Límites de los Conos',
        'Toques de Planta en las 4 Esquinas con Desplazamientos Laterales en Eslalon',
        'Cuadrante Técnico con Variación de Superficies de Amortiguación en Cada Vértice'
      ],
      focus: 'orientación espacial en 4 esquinas, control direccional y agilidad individual'
    },
    {
      sub: 'Conducción en Zigzag de Alta Frecuencia',
      names: [
        'Zigzag en Picas a Máxima Frecuencia de Pasos con Balón Cosido a la Bota',
        'Conducción en Zigzag Alternando Interior de Pie Derecho con Exterior de Izquierdo',
        'Zigzag de Alta Velocidad con Freno en Seco en el Último Cono y Sprint sin Balón',
        'Conducción Serpenteante entre 10 Setas Separadas a Solo 50 Centímetros',
        'Zigzag con Balón de Talla Reducida (Fútbol Sala) para Exigir Precisión Extrema',
        'Conducción Rápida en Zigzag con Gafas de Visión Limitada para No Mirar al Suelo',
        'Zigzag en Subida con Pendiente Ligera para Desarrollar Fuerza de Impulso con Balón',
        'Circuito de Zigzag Cronometrado con Registro Personal de Mejor Marca'
      ],
      focus: 'frecuencia de apoyos, toques milimétricos en zigzag y control fino'
    }
  ];

  for (const theme of cat14Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '9–11 años' : i % 3 === 1 ? '12–14 años' : '15–17 años');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat14,
        subcategory: theme.sub,
        objetivoPrincipal: `Maximizar la autonomía y el perfeccionamiento técnico individual mediante ${theme.focus}, sin depender de compañeros.`,
        objetivoTecnico: `Toque sutil de balón, control orientado en espacios mínimos, sincronización del gesto y golpeos de precisión milimétrica.`,
        objetivoTatico: `Desarrollar la auto-corrección consciente, la concentración mental y la confianza individual con el esférico.`,
        edad: age,
        nivel: 'Intermedio',
        jugadoresMin: 1,
        jugadoresMax: 1,
        jugadoresLabel: '1',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Media',
        espacio: 'Pequeño',
        materiales: '1 balón de fútbol, 6 conos o picas, 1 pared o red de rebote, cronómetro personal.',
        organizacion: `Espacio reducido de 5x5m a 10x10m (incluso apto para patio, jardín o pasillo de entrenamiento individual).`,
        desarrollo: `El futbolista trabaja de forma autónoma realizando repeticiones estructuradas con foco en la calidad del toque y la búsqueda de fluidez rítmica.`,
        pasoAPaso: [
          '1. Preparación: Colocar los conos o la zona de rebote según el diagrama del ejercicio.',
          '2. Activación: 2 minutos de toques libres y toques de planta suaves para calibrar la sensibilidad.',
          '3. Serie Principal: Ejecutar la secuencia de toques o el circuito respetando la técnica estricta.',
          '4. Auto-Evaluación: Contar repeticiones logradas sin fallo o cronometrar el tiempo del recorrido.',
          '5. Descanso y Repetición: Pausa de 30 segundos entre series y cambio obligatorio de pierna de inicio.'
        ],
        puntosClave: [
          'Calidad por encima de cantidad: cada toque debe ser limpio y deliberado.',
          'Mantener las rodillas ligeramente flexionadas y el centro de gravedad bajo.',
          'No mirar el balón continuamente; intentar levantar la vista en cada ciclo de toques.',
          'Usar ambas piernas por igual para corregir asimetrías técnicas.'
        ],
        erroresFrecuentes: [
          'Golpear el balón con demasiada fuerza alejándolo del radio de acción corporal.',
          'Permanecer con el cuerpo rígido y las piernas estiradas.',
          'Utilizar exclusivamente la pierna dominante ignorando la pierna débil.'
        ],
        correcciones: [
          '"Da toques cortos y acaricia el balón para que no se separe más de medio metro."',
          '"Baja la cadera y mantén los tobillos flexibles como resortes."',
          '"Oblígate a hacer una serie entera con tu pierna menos hábil aunque cueste al principio."'
        ],
        variacionFacil: 'Permitir un bote entre cada toque de balón o aumentar la separación entre conos.',
        variacionDificil: 'Hacer el ejercicio a máxima velocidad o con un balón más pequeño (talla 1 o fútbol sala).',
        progresion: 'Añadir un remate final de precisión hacia una diana colgada en la portería o pared.',
        regresion: 'Realizar los toques estático sobre el césped sin desplazamientos.',
        posiciones: 'Cualquier jugador de campo o portero en trabajo individual autónomo.',
        tags: ['individual', 'solitario', theme.sub.toLowerCase(), 'control', 'técnica individual'],
        pitchDiagram: buildPitchDiagram(cat14, theme.sub, age, 'Pequeño', 1)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 15: EJERCICIOS EN PAREJAS (55 exercises: EX901 - EX955)
  // Player count: exactly 2 players (duplas)! Synergy, coordination, duels.
  // ==========================================
  const cat15 = '15. Ejercicios en Parejas' as CategoryId;
  const cat15Themes = [
    {
      sub: 'Pases Dinámicos con Movimiento Continuo',
      names: [
        'Pases Rasos Frontales en Carrera Sincronizada a 10 Metros de Distancia',
        'Pase y Devolución con Desplazamiento Lateral Paralelo en Carril de 20 Metros',
        'Pases Cruzados en Diagonal en Parejas Intercambiando Carriles en Carrera',
        'Pase con Bote Amortiguado de Muslo y Devolución de Volea sin Tocar el Suelo',
        'Pases Continuos a Un Toque Rodeando un Cono Central en Órbita Circular',
        'Secuencia de Pases Corto-Largo en Tándem con Carrera Progresiva',
        'Pase con la Zurda y Devolución con la Diestra en Movimiento Continuo',
        'Pases en Ocho Alrededor de Dos Picas con Frecuencia Máxima de Contactos',
        'Pases con Salto Previo de Mini-Valla por Ambos Miembros de la Pareja',
        'Desafío de la Pareja: 50 Pases a Dos Toques en Carrera sin un Solo Error'
      ],
      focus: 'pases en movimiento continuo, sincronía de carrera y precisión recíproca'
    },
    {
      sub: 'Duelo 1v1 con Cambio de Rol Inmediato',
      names: [
        'Duelo 1v1 en Cuadrado de 10x10m: El que Roba Pasa Inmediatamente a Atacar',
        'Duelo 1v1 con Dos Mini-Porterías: Atacar una Meta y Defender la Otra al Perder',
        'Duelo de Espaldas con Giro: Atacante Protege y Defensor Presiona sin Falta',
        '1v1 Frontal con Finta Corporal Obligatoria antes de Traspasar la Línea de Meta',
        'Duelo 1v1 con Balón Dividido Lanzado por el Entrenador: Sprint y Posesión',
        'Duelo de Velocidad y Regate: Carrera en Paralelo y Corte Hacia Dentro',
        '1v1 Continuo en Parejas: 3 Series de 30 Segundos de Máxima Agresividad Limpia',
        'Duelo 1v1 Aéreo: Disputa de Balón Elevado con Salto y Amortiguación Orientada',
        'Duelo 1v1 con Limitación de Tiempo: Solo 6 Segundos para Anotar o Quitar el Balón'
      ],
      focus: 'duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana'
    },
    {
      sub: 'Paredes en Progresión por Carril',
      names: [
        'Pared Clásica "Toca y Vete" a lo Largo de un Pasillo de 25 Metros',
        'Pared con Devolución de Exterior del Pie y Aceleración al Espacio Libre',
        'Pared Doble Escalonada con Finta Previa de Desmarque de Apoyo',
        'Pared en Velocidad con Superación de Tres Siluetas Defensivas Estáticas',
        'Pared Aérea con Pase Picado por Encima de un Cono Alto y Carrera',
        'Pared con Tercer Apoyo Simulado y Finalización Conjunta en Mini-Portería',
        'Pared en Banda: Lateral Sube, Extremo Descarga y Lateral Centra al Espacio',
        'Secuencia Continua de Paredes Alternas: Ida con Paredes Cortas, Vuelta con Paredes Medias',
        'Pared bajo Acoso Pasivo del Compañero que Rota tras Cada Recorrido'
      ],
      focus: 'paredes en progresión, timing de entrega y carrera al espacio libre'
    },
    {
      sub: 'Centro y Remate en Tándem',
      names: [
        'Tándem Asistente-Rematador: Conducción a Banda, Centro y Remate al Primer Palo',
        'Centro Tenso Retrasado al Punto de Penalti con Entrada Sincronizada del Compañero',
        'Centro de Rosca Exterior desde Tres Cuartos y Remate de Cabeza Picado',
        'Pase de la Muerte en Línea de Fondo con Freno y Tiro Cruzado del Compañero',
        'Centro Aéreo Pasado al Segundo Palo con Remate de Volea sin Caer el Balón',
        'Tándem con Intercambio de Roles: El que Centra Pasa a Rematar en la Siguiente Jugada',
        'Centro Tras Pared en Banda con Remate en Carrera Anticipando al Portero',
        'Centro Rasante Fuerte con Desvío Sutil de Taco o Puntera al Palo Corto',
        'Circuito de 5 Centros y Remates Consecutivos Evaluando la Efectividad del Dúo'
      ],
      focus: 'asociación en centros y remates, conexión visual y timing de llegada'
    },
    {
      sub: 'Protección y Despojo entre Dos',
      names: [
        'Pugna Corporal en Espacio de 3x3m: 15 Segundos de Protección sin Ceder el Balón',
        'Uso Legal de los Brazos y Centro de Gravedad Bajo para Bloquear al Compañero',
        'El Reloj de Protección: Girar con el Balón Protegido Manteniendo al Rival en la Espalda',
        'Disputa de Balón Suelto con Carga de Hombro con Hombro Reglamentaria',
        'Protección de Balón con Finta de Salida Hacia un Lado y Escape por el Opuesto',
        'Despojo Limpio: Meter el Pie en el Momento del Toque de la Suela sin Cometer Falta',
        'Duelo de Fuerza Específica por Parejas con Balón en Juego en la Línea de Banda',
        'Protección y Descarga: Aguantar la Carga 3 Segundos y Conectar Pase Seguro',
        'Competición de Parejas de Aguante y Despojo con Puntuación por Robos Limpios'
      ],
      focus: 'protección del balón con el cuerpo, juego de espaldas y recuperación limpia'
    },
    {
      sub: 'Desmarques Cruzados en Pareja',
      names: [
        'Desmarques Cruzados en X entre Dos Delanteros para Descolocar a los Centrales',
        'Doble Ruptura Coordinada: Uno Viene en Apoyo en Corto y el Otro Rompe en Profundidad',
        'Desmarque en Tijera en la Frontal del Área para Abrir Pasillo de Disparo Directo',
        'Desmarque Ciego del Compañero que Cruza por Detrás del Portador del Balón',
        'Sincronización de Carreras Cruzadas ante Balón Parado Lateral',
        'Desmarque de Arrastre: Atraer al Defensor hacia Banda para Dejar el Centro al Compañero',
        'Desmarques Cruzados con Recepción Orientada y Disparo Cruzado a Puerta',
        'Ejercicio de Lectura en Pareja: Moverse al Espacio Opuesto que Elige el Compañero',
        'Circuito de Automatismos de Desmarques Cruzados con Finalización Rápida'
      ],
      focus: 'desmarques cruzados, movimientos complementarios y desajuste defensivo'
    }
  ];

  for (const theme of cat15Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 3 === 0 ? '12–14 años' : i % 3 === 1 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat15,
        subcategory: theme.sub,
        objetivoPrincipal: `Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante ${theme.focus}.`,
        objetivoTecnico: `Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.`,
        objetivoTatico: `Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.`,
        edad: age,
        nivel: 'Intermedio',
        jugadoresMin: 2,
        jugadoresMax: 2,
        jugadoresLabel: '2',
        duracion: '15 min',
        duracionMinutes: 15,
        intensidad: 'Alta',
        espacio: 'Medio',
        materiales: '1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.',
        organizacion: `Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.`,
        desarrollo: `Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.`,
        pasoAPaso: [
          '1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.',
          '2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.',
          '3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.',
          '4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.',
          '5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor).'
        ],
        puntosClave: [
          'Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.',
          'Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.',
          'Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.',
          'Intensidad y respeto mutuo en los duelos de protección y despojo.'
        ],
        erroresFrecuentes: [
          'Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.',
          'No hablar ni comunicarse durante la secuencia.',
          'Perder la distancia óptima entre ambos amontonándose en el mismo espacio.'
        ],
        correcciones: [
          '"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante."',
          '"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda."',
          '"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase."'
        ],
        variacionFacil: 'Realizar la secuencia al trote suave sin oposición defensiva.',
        variacionDificil: 'Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.',
        progresion: 'Incorporar una portería con portero para finalizar la jugada de la pareja.',
        regresion: 'Trabajar los pases en estático reduciendo la distancia a 5 metros.',
        posiciones: 'Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).',
        tags: ['parejas', 'dúos', theme.sub.toLowerCase(), 'cooperación', 'duelos en pareja'],
        pitchDiagram: buildPitchDiagram(cat15, theme.sub, age, 'Medio', 2)
      });

      idCounter++;
    }
  }

  // ==========================================
  // CATEGORY 16: EJERCICIOS COLECTIVOS (45 exercises: EX956 - EX1000)
  // Large team exercises, sectorial work, 11v11, 8v8, conditioned matches.
  // ==========================================
  const cat16 = '16. Ejercicios Colectivos' as CategoryId;
  const cat16Themes = [
    {
      sub: 'Juego de Posición 7v7 + 3 Comodines',
      names: [
        'Juego Posicional 7v7+3 en Cuadrante de 35x35m con Comodín Interior y Dos en Amplitud',
        '7v7+3 con Tres Zonas de Juego y Regla de Conexión Obligatoria con el Pivote Central',
        'Posesión 7v7+3 con Limitación de Dos Toques para Estimular la Circulación a Máxima Velocidad',
        'Juego Posicional con Transición Tras Robo: Comodines Apoyan Inmediatamente al Recuperador',
        '7v7+3 con Metas de Pase en los Cuatro Costados del Cuadrado Táctico',
        'Juego de Posición con Prohibición de Pases Flotados: Todo el Juego a Ras de Suelo',
        '7v7+3 con Asignación de Roles Específicos Reproduciendo el Sistema 1-4-3-3',
        'Torneo de Posesión Posicional 7v7+3 con Series de 4 Minutos y Pulsómetros'
      ],
      focus: 'juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre'
    },
    {
      sub: 'Fútbol Reducido con 4 Porterías Pequeñas',
      names: [
        'Fútbol 6v6 con 4 Mini-Porterías en los Vértices para Fomentar Cambios de Orientación',
        'Juego Colectivo con 4 Porterías Pequeñas y Regla de Gol de Primer Toque',
        '4 Porterías con Asignación de Metas: El Equipo Anota si Conduce a Través de Ellas',
        'Fútbol Reducido 7v7 con Mini-Porterías Invertidas para Obligar a Ganar la Espalda',
        'Juego Colectivo con Rotación de Metas Defendidas a la Señal Sonora del Entrenador',
        'Fútbol Reducido con 4 Metas y Bono de 2 Puntos si el Centro Proviene de Banda',
        'Competición 6v6 con Mini-Porterías y Tiempo de Ataque Limitado a 15 Segundos',
        'Juego de 4 Metas con Vigilancia Defensiva Continua para Evitar el Pase Cruzado'
      ],
      focus: 'cambios de sentido, basculación de bloque hacia lado débil y precisión en metas'
    },
    {
      sub: 'Oleadas Ofensivas 5v4 en Medio Campo',
      names: [
        'Oleadas Continuas de 5 Atacantes contra 4 Defensores + Portero en Medio Campo',
        'Oleada 5v4 con Incorporación del Lateral por Sorpresa desde la Línea Divisoria',
        '5v4 en Tres Cuartos: Fijar a los Dos Centrales y Desbordar por Fuera en 2v1',
        'Oleada de Ataque 5v4 con Finalización Rápida en Menos de 10 Segundos de Posesión',
        '5v4 con Transición Defensiva Inmediata: Si los 4 Defensores Roban, Atacan Dos Mini-Porterías',
        'Oleadas Asimétricas 5v4 Cargando el Ataque por el Perfil Izquierdo del Rival',
        '5v4 con Desmarques Coordinados de Doble Punta y Entrada de Segunda Línea',
        'Circuito de Tres Oleadas Consecutivas 5v4 con Nuevos Jugadores de Refresco'
      ],
      focus: 'superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas'
    },
    {
      sub: 'Simulación Real de Partido 8v8',
      names: [
        'Partido 8v8 en Espacio Área a Área con Porteros Oficiales y Fuera de Juego Real',
        '8v8 con Línea de 3 Defensas, 3 Medios y 2 Puntas contra Sistema 1-4-2-1',
        'Simulación de Partido 8v8 con Cronómetro Oficial y Reglas Reales de Competición',
        'Partido 8v8 con Escenario de Marcador: Equipo Rojo Defiende 1-0 con 10 Minutos por Delante',
        '8v8 con Campo Estrecho para Exigir Agilidad Mental y Duelos Físicos Continuos',
        'Partido Colectivo 8v8 con Dos Balones en Reserva para Cero Tiempos Muertos',
        'Simulación 8v8 con Paradas Tácticas Pedagógicas para Corregir Basculaciones'
      ],
      focus: 'partido real 8v8, aplicación global del modelo de juego y lectura competitiva'
    },
    {
      sub: 'Juego de Sector por Carriles',
      names: [
        'Fútbol Colectivo Dividido en 3 Pasillos Verticales con Ocupación Obligatoria de Carriles',
        'Juego Sectorial: Los Defensores Solo Pueden Conectar con los Medios en el Carril Central',
        'Atracción en Pasillo Interior y Progresión Explosiva por los Carriles Laterales',
        'Juego de Sector con Prohibición de Más de Tres Jugadores en el Mismo Pasillo',
        'Fútbol Sectorizado con Zonas de Aislamiento 1v1 para Extremos en los Carriles Exteriores',
        'Basculación Sectorial Colectiva: Desplazar Todo el Bloque Dejando un Carril Libre',
        'Juego Colectivo por Carriles con Salto de Línea en Diagonal hacia la Meta'
      ],
      focus: 'orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles'
    },
    {
      sub: 'Partido Condicionado a 3 Toques',
      names: [
        'Partido Formal 11v11 Condicionado a Máximo 3 Toques por Jugador en Todo el Terreno',
        'Partido a 3 Toques en Zona de Inicio y 2 Toques en Zona de Creación con Finalización Libre',
        'Juego Colectivo con Regla de Oro: Gol Válido solo si Previamente Hubo una Pared a 1 Toque',
        'Partido Condicionado con Presión Alta Asfixiante Aprovechando la Limitación de Toques',
        'Fútbol Colectivo a 3 Toques con Penalización de Falta Indirecta al Cuarto Toque',
        'Partido Condicionado con Pase Atrás Prohibido en los Últimos 30 Metros de Campo',
        '11v11 con Regla de Toques Libres Exclusivamente para el Delantero Dentro del Área'
      ],
      focus: 'velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque'
    }
  ];

  for (const theme of cat16Themes) {
    for (let i = 0; i < theme.names.length; i++) {
      const idStr = `EX${String(idCounter).padStart(3, '0')}`;
      const name = theme.names[i];
      const age: AgeGroup = (i % 2 === 0 ? '15–17 años' : 'Adultos');

      exercises.push({
        id: idStr,
        number: idCounter,
        name,
        category: cat16,
        subcategory: theme.sub,
        objetivoPrincipal: `Consolidar los principios tácticos del modelo de juego colectivo mediante ${theme.focus}, integrando a todo el equipo.`,
        objetivoTecnico: `Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.`,
        objetivoTatico: `Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.`,
        edad: age,
        nivel: 'Avanzado',
        jugadoresMin: 14,
        jugadoresMax: 22,
        jugadoresLabel: '16+',
        duracion: '25 min',
        duracionMinutes: 25,
        intensidad: 'Alta',
        espacio: 'Grande',
        materiales: 'Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.',
        organizacion: `Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.`,
        desarrollo: `Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.`,
        pasoAPaso: [
          '1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.',
          '2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.',
          '3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.',
          '4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.',
          '5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos.'
        ],
        puntosClave: [
          'Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).',
          'Voz de mando clara y constante de los líderes en la zaga y el centro del campo.',
          'Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.',
          'Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo.'
        ],
        erroresFrecuentes: [
          'Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.',
          'Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.',
          'Romper la línea del fuera de juego por falta de sincronización del lateral.'
        ],
        correcciones: [
          '"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás."',
          '"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco."',
          '"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos."'
        ],
        variacionFacil: 'Permitir comodines neutrales de apoyo para facilitar la salida de balón.',
        variacionDificil: 'Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.',
        progresion: 'Simular situaciones de marcador adverso con inferioridad numérica temporal.',
        regresion: 'Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.',
        posiciones: 'Plantilla completa: porteros, defensas, medios y delanteros.',
        tags: ['colectivo', 'partido', theme.sub.toLowerCase(), 'táctica colectiva', 'modelo de juego'],
        pitchDiagram: buildPitchDiagram(cat16, theme.sub, age, 'Grande', 18)
      });

      idCounter++;
    }
  }

  console.log(`Generated Categories 13 to 16: ${exercises.length} exercises (EX786 to EX${String(idCounter - 1).padStart(3, '0')})`);
  return exercises;
}
