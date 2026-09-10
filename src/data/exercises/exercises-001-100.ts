import { Exercise } from '../../types';

export const exercises_1: Exercise[] = [
  {
    "id": "EX001",
    "number": 1,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Cambio de Ritmo Forzado #1",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX002",
    "number": 2,
    "name": "Circuito Técnico de Control y Pase Tensado con Finalización en Miniporterías #2",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX003",
    "number": 3,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Oposición Progresiva #3",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX004",
    "number": 4,
    "name": "Salida de Balón Frente a Presión Alta con Reto de Eficacia Técnica #4",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX005",
    "number": 5,
    "name": "Basculación en Bloque y Cobertura Defensiva con Comodines Interiores #5",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX006",
    "number": 6,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Apoyos Exteriores #6",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX007",
    "number": 7,
    "name": "Transición Ofensiva con Superioridad 3v2 con Superioridad Numérica Condicionada #7",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX008",
    "number": 8,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Límite de Toques #8",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX009",
    "number": 9,
    "name": "Juego de Posición 4v4 + 3 Comodines en Cuadrante Delimitado #9",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX010",
    "number": 10,
    "name": "Ruptura de Líneas Interiores con Pared en V Dinámico con Rotación Continua #10",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX011",
    "number": 11,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Cambio de Ritmo Forzado #11",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX012",
    "number": 12,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Finalización en Miniporterías #12",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 16 conos de agilidad. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX013",
    "number": 13,
    "name": "Coordinación de Centrales y Laterales en repliegue con Oposición Progresiva #13",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX014",
    "number": 14,
    "name": "Circulación Rápida de Balón a Dos Toques con Reto de Eficacia Técnica #14",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX015",
    "number": 15,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Comodines Interiores #15",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 8 conos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX016",
    "number": 16,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Apoyos Exteriores #16",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX017",
    "number": 17,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Superioridad Numérica Condicionada #17",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX018",
    "number": 18,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Límite de Toques #18",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX019",
    "number": 19,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado en Cuadrante Delimitado #19",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX020",
    "number": 20,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro Dinámico con Rotación Continua #20",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX021",
    "number": 21,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Cambio de Ritmo Forzado #21",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX022",
    "number": 22,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Finalización en Miniporterías #22",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX023",
    "number": 23,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Oposición Progresiva #23",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX024",
    "number": 24,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Reto de Eficacia Técnica #24",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX025",
    "number": 25,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Comodines Interiores #25",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX026",
    "number": 26,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Apoyos Exteriores #26",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX027",
    "number": 27,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Superioridad Numérica Condicionada #27",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 16 conos de agilidad. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX028",
    "number": 28,
    "name": "Circuito Técnico de Control y Pase Tensado con Límite de Toques #28",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX029",
    "number": 29,
    "name": "Duelo 1v1 con Finalización Tras Desmarque en Cuadrante Delimitado #29",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX030",
    "number": 30,
    "name": "Salida de Balón Frente a Presión Alta Dinámico con Rotación Continua #30",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 8 conos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX031",
    "number": 31,
    "name": "Basculación en Bloque y Cobertura Defensiva con Cambio de Ritmo Forzado #31",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX032",
    "number": 32,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Finalización en Miniporterías #32",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX033",
    "number": 33,
    "name": "Transición Ofensiva con Superioridad 3v2 con Oposición Progresiva #33",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX034",
    "number": 34,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Reto de Eficacia Técnica #34",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX035",
    "number": 35,
    "name": "Juego de Posición 4v4 + 3 Comodines con Comodines Interiores #35",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX036",
    "number": 36,
    "name": "Ruptura de Líneas Interiores con Pared en V con Apoyos Exteriores #36",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX037",
    "number": 37,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Superioridad Numérica Condicionada #37",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX038",
    "number": 38,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Límite de Toques #38",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX039",
    "number": 39,
    "name": "Coordinación de Centrales y Laterales en repliegue en Cuadrante Delimitado #39",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX040",
    "number": 40,
    "name": "Circulación Rápida de Balón a Dos Toques Dinámico con Rotación Continua #40",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX041",
    "number": 41,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Cambio de Ritmo Forzado #41",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX042",
    "number": 42,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Finalización en Miniporterías #42",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 16 conos de agilidad. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX043",
    "number": 43,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Oposición Progresiva #43",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX044",
    "number": 44,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Reto de Eficacia Técnica #44",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX045",
    "number": 45,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Comodines Interiores #45",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 8 conos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX046",
    "number": 46,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Apoyos Exteriores #46",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX047",
    "number": 47,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Superioridad Numérica Condicionada #47",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX048",
    "number": 48,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Límite de Toques #48",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX049",
    "number": 49,
    "name": "Presión en Bloque Medio y Robo en Carril Central en Cuadrante Delimitado #49",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX050",
    "number": 50,
    "name": "Movilidad Ofensiva con Permuta de Extremos Dinámico con Rotación Continua #50",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX051",
    "number": 51,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Cambio de Ritmo Forzado #51",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX052",
    "number": 52,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Finalización en Miniporterías #52",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX053",
    "number": 53,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Oposición Progresiva #53",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX054",
    "number": 54,
    "name": "Circuito Técnico de Control y Pase Tensado con Reto de Eficacia Técnica #54",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX055",
    "number": 55,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Comodines Interiores #55",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX056",
    "number": 56,
    "name": "Salida de Balón Frente a Presión Alta con Apoyos Exteriores #56",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX057",
    "number": 57,
    "name": "Basculación en Bloque y Cobertura Defensiva con Superioridad Numérica Condicionada #57",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 16 conos de agilidad. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX058",
    "number": 58,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Límite de Toques #58",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX059",
    "number": 59,
    "name": "Transición Ofensiva con Superioridad 3v2 en Cuadrante Delimitado #59",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX060",
    "number": 60,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos Dinámico con Rotación Continua #60",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Desarrollar y automatizar coordinación con balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Medio",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 8 conos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "coordinación con balón",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX061",
    "number": 61,
    "name": "Juego de Posición 4v4 + 3 Comodines con Cambio de Ritmo Forzado #61",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Desarrollar y automatizar movilidad articular dinámica en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "movilidad articular dinámica",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX062",
    "number": 62,
    "name": "Ruptura de Líneas Interiores con Pared en V con Finalización en Miniporterías #62",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Desarrollar y automatizar activación neuromuscular en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "activación neuromuscular",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX063",
    "number": 63,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Oposición Progresiva #63",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Desarrollar y automatizar juegos de posesión ligera en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "juegos de posesión ligera",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX064",
    "number": 64,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Reto de Eficacia Técnica #64",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Desarrollar y automatizar circuitos técnicos dinámicos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 12,
    "jugadoresLabel": "11–15",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "circuitos técnicos dinámicos",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX065",
    "number": 65,
    "name": "Coordinación de Centrales y Laterales en repliegue con Comodines Interiores #65",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Desarrollar y automatizar rondos de entrada en calor en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 3,
    "jugadoresMax": 5,
    "jugadoresLabel": "3–5",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "rondos de entrada en calor",
      "calentamiento",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX066",
    "number": 66,
    "name": "Circulación Rápida de Balón a Dos Toques con Apoyos Exteriores #66",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Desarrollar y automatizar dominio aéreo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "dominio aéreo",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX067",
    "number": 67,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Superioridad Numérica Condicionada #67",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "control orientado",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX068",
    "number": 68,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Límite de Toques #68",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Desarrollar y automatizar conducción y giros en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "conducción y giros",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX069",
    "number": 69,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación en Cuadrante Delimitado #69",
    "category": "02. Técnica Individual",
    "subcategory": "Protección del Balón",
    "objetivoPrincipal": "Desarrollar y automatizar protección del balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "protección del balón",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX070",
    "number": 70,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros Dinámico con Rotación Continua #70",
    "category": "02. Técnica Individual",
    "subcategory": "Fintas y Amagos",
    "objetivoPrincipal": "Desarrollar y automatizar fintas y amagos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "fintas y amagos",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX071",
    "number": 71,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Cambio de Ritmo Forzado #71",
    "category": "02. Técnica Individual",
    "subcategory": "Golpeo con Ambas Piernas",
    "objetivoPrincipal": "Desarrollar y automatizar golpeo con ambas piernas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "golpeo con ambas piernas",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX072",
    "number": 72,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Finalización en Miniporterías #72",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Desarrollar y automatizar dominio aéreo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 16 conos de agilidad. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "dominio aéreo",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX073",
    "number": 73,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Oposición Progresiva #73",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "control orientado",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX074",
    "number": 74,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Reto de Eficacia Técnica #74",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Desarrollar y automatizar conducción y giros en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "conducción y giros",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX075",
    "number": 75,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Comodines Interiores #75",
    "category": "02. Técnica Individual",
    "subcategory": "Protección del Balón",
    "objetivoPrincipal": "Desarrollar y automatizar protección del balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 8 conos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "protección del balón",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX076",
    "number": 76,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Apoyos Exteriores #76",
    "category": "02. Técnica Individual",
    "subcategory": "Fintas y Amagos",
    "objetivoPrincipal": "Desarrollar y automatizar fintas y amagos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "fintas y amagos",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX077",
    "number": 77,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Superioridad Numérica Condicionada #77",
    "category": "02. Técnica Individual",
    "subcategory": "Golpeo con Ambas Piernas",
    "objetivoPrincipal": "Desarrollar y automatizar golpeo con ambas piernas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "golpeo con ambas piernas",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX078",
    "number": 78,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Límite de Toques #78",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Desarrollar y automatizar dominio aéreo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "dominio aéreo",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX079",
    "number": 79,
    "name": "Rondo con Tercer Hombre y Transición Rápida en Cuadrante Delimitado #79",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "control orientado",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX080",
    "number": 80,
    "name": "Circuito Técnico de Control y Pase Tensado Dinámico con Rotación Continua #80",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Desarrollar y automatizar conducción y giros en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "conducción y giros",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX081",
    "number": 81,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Cambio de Ritmo Forzado #81",
    "category": "02. Técnica Individual",
    "subcategory": "Protección del Balón",
    "objetivoPrincipal": "Desarrollar y automatizar protección del balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "protección del balón",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX082",
    "number": 82,
    "name": "Salida de Balón Frente a Presión Alta con Finalización en Miniporterías #82",
    "category": "02. Técnica Individual",
    "subcategory": "Fintas y Amagos",
    "objetivoPrincipal": "Desarrollar y automatizar fintas y amagos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "fintas y amagos",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX083",
    "number": 83,
    "name": "Basculación en Bloque y Cobertura Defensiva con Oposición Progresiva #83",
    "category": "02. Técnica Individual",
    "subcategory": "Golpeo con Ambas Piernas",
    "objetivoPrincipal": "Desarrollar y automatizar golpeo con ambas piernas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "golpeo con ambas piernas",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX084",
    "number": 84,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Reto de Eficacia Técnica #84",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Desarrollar y automatizar dominio aéreo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "dominio aéreo",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX085",
    "number": 85,
    "name": "Transición Ofensiva con Superioridad 3v2 con Comodines Interiores #85",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "control orientado",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX086",
    "number": 86,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Apoyos Exteriores #86",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Desarrollar y automatizar conducción y giros en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "conducción y giros",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX087",
    "number": 87,
    "name": "Juego de Posición 4v4 + 3 Comodines con Superioridad Numérica Condicionada #87",
    "category": "02. Técnica Individual",
    "subcategory": "Protección del Balón",
    "objetivoPrincipal": "Desarrollar y automatizar protección del balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 16 conos de agilidad. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "protección del balón",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX088",
    "number": 88,
    "name": "Ruptura de Líneas Interiores con Pared en V con Límite de Toques #88",
    "category": "02. Técnica Individual",
    "subcategory": "Fintas y Amagos",
    "objetivoPrincipal": "Desarrollar y automatizar fintas y amagos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "fintas y amagos",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX089",
    "number": 89,
    "name": "Aceleraciones con Fintas y Definición Cruzada en Cuadrante Delimitado #89",
    "category": "02. Técnica Individual",
    "subcategory": "Golpeo con Ambas Piernas",
    "objetivoPrincipal": "Desarrollar y automatizar golpeo con ambas piernas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "golpeo con ambas piernas",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX090",
    "number": 90,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta Dinámico con Rotación Continua #90",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Desarrollar y automatizar dominio aéreo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 8 conos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "dominio aéreo",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX091",
    "number": 91,
    "name": "Coordinación de Centrales y Laterales en repliegue con Cambio de Ritmo Forzado #91",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "control orientado",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX092",
    "number": 92,
    "name": "Circulación Rápida de Balón a Dos Toques con Finalización en Miniporterías #92",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Desarrollar y automatizar conducción y giros en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "conducción y giros",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX093",
    "number": 93,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Oposición Progresiva #93",
    "category": "02. Técnica Individual",
    "subcategory": "Protección del Balón",
    "objetivoPrincipal": "Desarrollar y automatizar protección del balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 10 platos delimitadores. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "protección del balón",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX094",
    "number": 94,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Reto de Eficacia Técnica #94",
    "category": "02. Técnica Individual",
    "subcategory": "Fintas y Amagos",
    "objetivoPrincipal": "Desarrollar y automatizar fintas y amagos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "fintas y amagos",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX095",
    "number": 95,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Comodines Interiores #95",
    "category": "02. Técnica Individual",
    "subcategory": "Golpeo con Ambas Piernas",
    "objetivoPrincipal": "Desarrollar y automatizar golpeo con ambas piernas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "golpeo con ambas piernas",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX096",
    "number": 96,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Apoyos Exteriores #96",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Desarrollar y automatizar dominio aéreo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 setas marcadoras, 6 balones reglamentarios, 2 miniporterías de precisión, cronómetro profesional.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 12 setas marcadoras. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Delanteros centros y extremos desequilibrantes.",
    "tags": [
      "dominio aéreo",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "full_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 6
        },
        {
          "id": "goal2",
          "type": "goal",
          "x": 50,
          "y": 94
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 12
        },
        {
          "id": "gk2",
          "type": "player",
          "team": "gk",
          "label": "13",
          "x": 50,
          "y": 88
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 35,
          "y": 30
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "5",
          "x": 65,
          "y": 30
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 50,
          "y": 45
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "9",
          "x": 48,
          "y": 40
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "10",
          "x": 54,
          "y": 55
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 48,
          "y": 46
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 45,
          "targetX": 63,
          "targetY": 32
        }
      ]
    }
  },
  {
    "id": "EX097",
    "number": 97,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Superioridad Numérica Condicionada #97",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "16 conos de agilidad, 8 picas verticales, 10 balones, petos de 3 colores para equipos y comodines.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Defensas centrales y laterales con proyección ofensiva.",
    "tags": [
      "control orientado",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  },
  {
    "id": "EX098",
    "number": 98,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Límite de Toques #98",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Desarrollar y automatizar conducción y giros en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 platos delimitadores, 1 escalera de agilidad, 6 balones, 1 portería con portero.",
    "organizacion": "Dividir el terreno en tres zonas longitudinales (carril central y dos bandas). Colocar 2 porterías en los extremos y asignar a los jugadores roles de iniciadores, finalizadores y defensores en zona.",
    "desarrollo": "Dinámica estructurada en oleadas continuas: el equipo atacante busca generar superioridad numérica mediante desmarques coordinados mientras el equipo defensor temporiza y bascula para tapar líneas de pase interiores. Se premia el gol tras combinación previa de al menos 4 pases.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Porteros y organizadores de juego desde atrás.",
    "tags": [
      "conducción y giros",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "principiante"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 25
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 75,
          "y": 25
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 75
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 25,
          "y": 75
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "3",
          "x": 50,
          "y": 22
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 78,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "6",
          "x": 50,
          "y": 78
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "4",
          "x": 22,
          "y": 50
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "X1",
          "x": 44,
          "y": 48
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "X2",
          "x": 56,
          "y": 52
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 52,
          "y": 24
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 24,
          "targetX": 76,
          "targetY": 48
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 44,
          "y": 48,
          "targetX": 68,
          "targetY": 46
        }
      ]
    }
  },
  {
    "id": "EX099",
    "number": 99,
    "name": "Toma de Decisiones Bajo Presión en Rombo en Cuadrante Delimitado #99",
    "category": "02. Técnica Individual",
    "subcategory": "Protección del Balón",
    "objetivoPrincipal": "Desarrollar y automatizar protección del balón en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "30 min",
    "duracionMinutes": 30,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "4 estacas fijas, 10 balones, vallas bajas de salto pliométrico, 6 petos y silbato de control.",
    "organizacion": "Delimitar un rectángulo de juego de acuerdo al espacio indicado (Medio). Distribuir a los jugadores por puestos específicos o parejas de trabajo con 4 estacas fijas. Un jugador o comodín inicia con balón desde la zona de seguridad.",
    "desarrollo": "El ejercicio comienza con la circulación del balón entre los jugadores con posesión. Ante la presión del rival, deben buscar opciones de pase en tensión, identificar al tercer hombre o realizar una pared para progresar. Si los defensores recuperan el balón, disponen de 6 segundos para finalizar en una miniportería o conectar con un comodín exterior.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Todos los jugadores de campo en rotación polivalente.",
    "tags": [
      "protección del balón",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "intermedio"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 20,
          "y": 20
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 50,
          "y": 20
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 80,
          "y": 20
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 20,
          "y": 80
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 50,
          "y": 80
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 80,
          "y": 80
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 35,
          "y": 72
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 65,
          "y": 72
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "DEF",
          "x": 50,
          "y": 45
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 28
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 37,
          "y": 71
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 37,
          "y": 70,
          "targetX": 63,
          "targetY": 70
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "run",
          "x": 35,
          "y": 70,
          "targetX": 38,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX100",
    "number": 100,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo Dinámico con Rotación Continua #100",
    "category": "02. Técnica Individual",
    "subcategory": "Fintas y Amagos",
    "objetivoPrincipal": "Desarrollar y automatizar fintas y amagos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "6–10",
    "duracion": "10 min",
    "duracionMinutes": 10,
    "intensidad": "Baja",
    "espacio": "Grande",
    "materiales": "8 conos delimitadores, 10 balones de entrenamiento, 4 petos verdes y 4 naranjas, 1 portería reglamentaria.",
    "organizacion": "Marcar un cuadrado central con 4 estaciones de apoyo en los vértices. Los jugadores se colocan según su rol ofensivo o defensivo, manteniendo las distancias tácticas idóneas de entre 8 y 15 metros entre compañeros.",
    "desarrollo": "Secuencia continua donde el portador del balón realiza un control orientado hacia delante, fija a la marca y decide si superar en 1v1 mediante finta corporal o filtrar un pase en profundidad al compañero que ataca el espacio. La rotación de roles se efectúa tras cada serie de 3 repeticiones por jugador.",
    "pasoAPaso": [
      "1. El jugador A inicia la jugada con un pase tenso y raso hacia los pies del jugador B.",
      "2. El jugador B realiza un control orientado perfilándose hacia el carril de progresión libre de marca.",
      "3. Ante la entrada del defensor, el jugador B ejecuta una finta de apoyo y conecta de primera con el jugador C (tercer hombre).",
      "4. El jugador C devuelve en profundidad al espacio para la carrera del jugador A que desdobla por banda.",
      "5. Se concluye la acción con un centro medido o disparo cruzado al poste lejano."
    ],
    "puntosClave": [
      "Observar la tensión y precisión en la entrega del balón con el pie dominante y no dominante.",
      "Exigir una postura corporal semiperfilada antes de recibir para ver todo el panorama de juego.",
      "Comunicación verbal y no verbal activa antes y durante cada pase.",
      "Velocidad de reacción inmediata en los dos segundos posteriores a la pérdida del balón."
    ],
    "erroresFrecuentes": [
      "Recibir el balón de espaldas al campo rival sin escanear previamente las marcas cercanas.",
      "Entregar pases flotados o lentos que facilitan la anticipación y corte del adversario.",
      "Quedarse estático tras dar el pase en lugar de ofrecer una línea de apoyo inmediata.",
      "Precipitación en el remate o finta por falta de control emocional bajo presión."
    ],
    "correcciones": [
      "Corregir la orientación de la cadera al momento del control: \"Abre el cuerpo y mira la portería antes de tocar el balón\".",
      "Instar a golpear con mayor firmeza en la zona media del esférico: \"Pase raso, firme y con intención\".",
      "Marcar la pauta de movimiento continuo: \"Paso y voy, nunca miro el balón parado\".",
      "Pedir serenidad en el último toque: \"Levanta la mirada una décima de segundo antes de impactar a portería\"."
    ],
    "variacionFacil": "Aumentar las dimensiones del campo en 5 metros por lado o permitir un comodín neutral adicional para facilitar la superioridad numérica ofensiva.",
    "variacionDificil": "Limitar el juego a un máximo de 2 toques por jugador o introducir un defensor suplementario de presión asfixiante tras el primer pase.",
    "progresion": "Incorporar oposición activa completa y añadir la regla de finalizar la jugada en menos de 8 segundos tras cruzar la divisoria.",
    "regresion": "Realizar la secuencia de pases y movimientos de forma analítica sin oposición pasiva para memorizar el patrón biomecánico.",
    "posiciones": "Centrocampistas, interiores y mediapuntas.",
    "tags": [
      "fintas y amagos",
      "técnica individual",
      "ejercicio",
      "entrenamiento",
      "avanzado"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal1",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk1",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 15
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 45,
          "y": 35
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 55
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 60
        },
        {
          "id": "d1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 48,
          "y": 30
        },
        {
          "id": "d2",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 58,
          "y": 45
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 60,
          "y": 56
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 40
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 40
        },
        {
          "id": "a1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 62,
          "y": 55,
          "targetX": 45,
          "targetY": 37
        },
        {
          "id": "a2",
          "type": "arrow",
          "arrowType": "shot",
          "x": 45,
          "y": 35,
          "targetX": 48,
          "targetY": 10
        }
      ]
    }
  }
];
