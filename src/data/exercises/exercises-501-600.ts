import { Exercise } from '../../types';

export const exercises_6: Exercise[] = [
  {
    "id": "EX501",
    "number": 501,
    "name": "Transición Ofensiva con Superioridad 3v2 con Cambio de Ritmo Forzado #501",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX502",
    "number": 502,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Finalización en Miniporterías #502",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX503",
    "number": 503,
    "name": "Juego de Posición 4v4 + 3 Comodines con Oposición Progresiva #503",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX504",
    "number": 504,
    "name": "Ruptura de Líneas Interiores con Pared en V con Reto de Eficacia Técnica #504",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX505",
    "number": 505,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Comodines Interiores #505",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX506",
    "number": 506,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Apoyos Exteriores #506",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX507",
    "number": 507,
    "name": "Coordinación de Centrales y Laterales en repliegue con Superioridad Numérica Condicionada #507",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX508",
    "number": 508,
    "name": "Circulación Rápida de Balón a Dos Toques con Límite de Toques #508",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX509",
    "number": 509,
    "name": "Defensa de Centros Laterales con Despeje Orientado en Cuadrante Delimitado #509",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX510",
    "number": 510,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea Dinámico con Rotación Continua #510",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX511",
    "number": 511,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Cambio de Ritmo Forzado #511",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX512",
    "number": 512,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Finalización en Miniporterías #512",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX513",
    "number": 513,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Oposición Progresiva #513",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX514",
    "number": 514,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Reto de Eficacia Técnica #514",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX515",
    "number": 515,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Comodines Interiores #515",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX516",
    "number": 516,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Apoyos Exteriores #516",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX517",
    "number": 517,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Superioridad Numérica Condicionada #517",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX518",
    "number": 518,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Límite de Toques #518",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX519",
    "number": 519,
    "name": "Finalización Tras Centro Raso al Punto de Penalti en Cuadrante Delimitado #519",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX520",
    "number": 520,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque Dinámico con Rotación Continua #520",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX521",
    "number": 521,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Cambio de Ritmo Forzado #521",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX522",
    "number": 522,
    "name": "Circuito Técnico de Control y Pase Tensado con Finalización en Miniporterías #522",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX523",
    "number": 523,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Oposición Progresiva #523",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX524",
    "number": 524,
    "name": "Salida de Balón Frente a Presión Alta con Reto de Eficacia Técnica #524",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX525",
    "number": 525,
    "name": "Basculación en Bloque y Cobertura Defensiva con Comodines Interiores #525",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX526",
    "number": 526,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Apoyos Exteriores #526",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX527",
    "number": 527,
    "name": "Transición Ofensiva con Superioridad 3v2 con Superioridad Numérica Condicionada #527",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX528",
    "number": 528,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Límite de Toques #528",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX529",
    "number": 529,
    "name": "Juego de Posición 4v4 + 3 Comodines en Cuadrante Delimitado #529",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX530",
    "number": 530,
    "name": "Ruptura de Líneas Interiores con Pared en V Dinámico con Rotación Continua #530",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX531",
    "number": 531,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Cambio de Ritmo Forzado #531",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX532",
    "number": 532,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Finalización en Miniporterías #532",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX533",
    "number": 533,
    "name": "Coordinación de Centrales y Laterales en repliegue con Oposición Progresiva #533",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX534",
    "number": 534,
    "name": "Circulación Rápida de Balón a Dos Toques con Reto de Eficacia Técnica #534",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX535",
    "number": 535,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Comodines Interiores #535",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX536",
    "number": 536,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Apoyos Exteriores #536",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX537",
    "number": 537,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Superioridad Numérica Condicionada #537",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX538",
    "number": 538,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Límite de Toques #538",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX539",
    "number": 539,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado en Cuadrante Delimitado #539",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX540",
    "number": 540,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro Dinámico con Rotación Continua #540",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar transición con comodín exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición con comodín exterior",
      "transiciones",
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
    "id": "EX541",
    "number": 541,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Cambio de Ritmo Forzado #541",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Desarrollar y automatizar transición ofensiva rápida (contraataque) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición ofensiva rápida (contraataque)",
      "transiciones",
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
    "id": "EX542",
    "number": 542,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Finalización en Miniporterías #542",
    "category": "08. Transiciones",
    "subcategory": "Transición Defensiva (Presión Inmediata)",
    "objetivoPrincipal": "Desarrollar y automatizar transición defensiva (presión inmediata) en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "transición defensiva (presión inmediata)",
      "transiciones",
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
    "id": "EX543",
    "number": 543,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Oposición Progresiva #543",
    "category": "08. Transiciones",
    "subcategory": "Cambio Rápido de Chip 3v2 a 2v3",
    "objetivoPrincipal": "Desarrollar y automatizar cambio rápido de chip 3v2 a 2v3 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio rápido de chip 3v2 a 2v3",
      "transiciones",
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
    "id": "EX544",
    "number": 544,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Reto de Eficacia Técnica #544",
    "category": "08. Transiciones",
    "subcategory": "Despliegue Vertical tras Robo",
    "objetivoPrincipal": "Desarrollar y automatizar despliegue vertical tras robo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "despliegue vertical tras robo",
      "transiciones",
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
    "id": "EX545",
    "number": 545,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Comodines Interiores #545",
    "category": "08. Transiciones",
    "subcategory": "Replegarse o Presionar",
    "objetivoPrincipal": "Desarrollar y automatizar replegarse o presionar en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "replegarse o presionar",
      "transiciones",
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
    "id": "EX546",
    "number": 546,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Apoyos Exteriores #546",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX547",
    "number": 547,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Superioridad Numérica Condicionada #547",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX548",
    "number": 548,
    "name": "Circuito Técnico de Control y Pase Tensado con Límite de Toques #548",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX549",
    "number": 549,
    "name": "Duelo 1v1 con Finalización Tras Desmarque en Cuadrante Delimitado #549",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX550",
    "number": 550,
    "name": "Salida de Balón Frente a Presión Alta Dinámico con Rotación Continua #550",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX551",
    "number": 551,
    "name": "Basculación en Bloque y Cobertura Defensiva con Cambio de Ritmo Forzado #551",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX552",
    "number": 552,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Finalización en Miniporterías #552",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX553",
    "number": 553,
    "name": "Transición Ofensiva con Superioridad 3v2 con Oposición Progresiva #553",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX554",
    "number": 554,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Reto de Eficacia Técnica #554",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX555",
    "number": 555,
    "name": "Juego de Posición 4v4 + 3 Comodines con Comodines Interiores #555",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX556",
    "number": 556,
    "name": "Ruptura de Líneas Interiores con Pared en V con Apoyos Exteriores #556",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX557",
    "number": 557,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Superioridad Numérica Condicionada #557",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX558",
    "number": 558,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Límite de Toques #558",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX559",
    "number": 559,
    "name": "Coordinación de Centrales y Laterales en repliegue en Cuadrante Delimitado #559",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX560",
    "number": 560,
    "name": "Circulación Rápida de Balón a Dos Toques Dinámico con Rotación Continua #560",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX561",
    "number": 561,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Cambio de Ritmo Forzado #561",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX562",
    "number": 562,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Finalización en Miniporterías #562",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX563",
    "number": 563,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Oposición Progresiva #563",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX564",
    "number": 564,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Reto de Eficacia Técnica #564",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX565",
    "number": 565,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Comodines Interiores #565",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX566",
    "number": 566,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Apoyos Exteriores #566",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX567",
    "number": 567,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Superioridad Numérica Condicionada #567",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX568",
    "number": 568,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Límite de Toques #568",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX569",
    "number": 569,
    "name": "Presión en Bloque Medio y Robo en Carril Central en Cuadrante Delimitado #569",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX570",
    "number": 570,
    "name": "Movilidad Ofensiva con Permuta de Extremos Dinámico con Rotación Continua #570",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX571",
    "number": 571,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Cambio de Ritmo Forzado #571",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX572",
    "number": 572,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Finalización en Miniporterías #572",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX573",
    "number": 573,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Oposición Progresiva #573",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX574",
    "number": 574,
    "name": "Circuito Técnico de Control y Pase Tensado con Reto de Eficacia Técnica #574",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX575",
    "number": 575,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Comodines Interiores #575",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX576",
    "number": 576,
    "name": "Salida de Balón Frente a Presión Alta con Apoyos Exteriores #576",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX577",
    "number": 577,
    "name": "Basculación en Bloque y Cobertura Defensiva con Superioridad Numérica Condicionada #577",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX578",
    "number": 578,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Límite de Toques #578",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX579",
    "number": 579,
    "name": "Transición Ofensiva con Superioridad 3v2 en Cuadrante Delimitado #579",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX580",
    "number": 580,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos Dinámico con Rotación Continua #580",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX581",
    "number": 581,
    "name": "Juego de Posición 4v4 + 3 Comodines con Cambio de Ritmo Forzado #581",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX582",
    "number": 582,
    "name": "Ruptura de Líneas Interiores con Pared en V con Finalización en Miniporterías #582",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX583",
    "number": 583,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Oposición Progresiva #583",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX584",
    "number": 584,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Reto de Eficacia Técnica #584",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX585",
    "number": 585,
    "name": "Coordinación de Centrales y Laterales en repliegue con Comodines Interiores #585",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX586",
    "number": 586,
    "name": "Circulación Rápida de Balón a Dos Toques con Apoyos Exteriores #586",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX587",
    "number": 587,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Superioridad Numérica Condicionada #587",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX588",
    "number": 588,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Límite de Toques #588",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX589",
    "number": 589,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación en Cuadrante Delimitado #589",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX590",
    "number": 590,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros Dinámico con Rotación Continua #590",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX591",
    "number": 591,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Cambio de Ritmo Forzado #591",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX592",
    "number": 592,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Finalización en Miniporterías #592",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX593",
    "number": 593,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Oposición Progresiva #593",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX594",
    "number": 594,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Reto de Eficacia Técnica #594",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
    "id": "EX595",
    "number": 595,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Comodines Interiores #595",
    "category": "09. Táctica",
    "subcategory": "Ocupación Racional del Espacio",
    "objetivoPrincipal": "Desarrollar y automatizar ocupación racional del espacio en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "ocupación racional del espacio",
      "táctica",
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
    "id": "EX596",
    "number": 596,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Apoyos Exteriores #596",
    "category": "09. Táctica",
    "subcategory": "Juego de Posición en Zonas",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición en zonas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego de posición en zonas",
      "táctica",
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
    "id": "EX597",
    "number": 597,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Superioridad Numérica Condicionada #597",
    "category": "09. Táctica",
    "subcategory": "Rombo y Estructuras en Bloque",
    "objetivoPrincipal": "Desarrollar y automatizar rombo y estructuras en bloque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "rombo y estructuras en bloque",
      "táctica",
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
    "id": "EX598",
    "number": 598,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Límite de Toques #598",
    "category": "09. Táctica",
    "subcategory": "Amplitud y Profundidad Ofensiva",
    "objetivoPrincipal": "Desarrollar y automatizar amplitud y profundidad ofensiva en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "amplitud y profundidad ofensiva",
      "táctica",
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
    "id": "EX599",
    "number": 599,
    "name": "Rondo con Tercer Hombre y Transición Rápida en Cuadrante Delimitado #599",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Desarrollar y automatizar escalafonamiento en salida en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "escalafonamiento en salida",
      "táctica",
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
    "id": "EX600",
    "number": 600,
    "name": "Circuito Técnico de Control y Pase Tensado Dinámico con Rotación Continua #600",
    "category": "09. Táctica",
    "subcategory": "Juego en Intervalos Interiores",
    "objetivoPrincipal": "Desarrollar y automatizar juego en intervalos interiores en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "juego en intervalos interiores",
      "táctica",
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
  }
];
