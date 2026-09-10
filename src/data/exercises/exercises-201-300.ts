import { Exercise } from '../../types';

export const exercises_3: Exercise[] = [
  {
    "id": "EX201",
    "number": 201,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Cambio de Ritmo Forzado #201",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Desarrollar y automatizar pase medio y filtrado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
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
      "pase medio y filtrado",
      "pase y recepción",
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
    "id": "EX202",
    "number": 202,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Finalización en Miniporterías #202",
    "category": "03. Pase y Recepción",
    "subcategory": "Cambio de Orientación",
    "objetivoPrincipal": "Desarrollar y automatizar cambio de orientación en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX203",
    "number": 203,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Oposición Progresiva #203",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase con Desmarque",
    "objetivoPrincipal": "Desarrollar y automatizar pase con desmarque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX204",
    "number": 204,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Reto de Eficacia Técnica #204",
    "category": "03. Pase y Recepción",
    "subcategory": "Líneas de Pase en Tensión",
    "objetivoPrincipal": "Desarrollar y automatizar líneas de pase en tensión en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
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
      "líneas de pase en tensión",
      "pase y recepción",
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
    "id": "EX205",
    "number": 205,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Comodines Interiores #205",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Corto y Primer Toque",
    "objetivoPrincipal": "Desarrollar y automatizar pase corto y primer toque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
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
      "pase corto y primer toque",
      "pase y recepción",
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
    "id": "EX206",
    "number": 206,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Apoyos Exteriores #206",
    "category": "03. Pase y Recepción",
    "subcategory": "Tercer Hombre y Paredes",
    "objetivoPrincipal": "Desarrollar y automatizar tercer hombre y paredes en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
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
      "tercer hombre y paredes",
      "pase y recepción",
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
    "id": "EX207",
    "number": 207,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Superioridad Numérica Condicionada #207",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Desarrollar y automatizar pase medio y filtrado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
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
      "pase medio y filtrado",
      "pase y recepción",
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
    "id": "EX208",
    "number": 208,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Límite de Toques #208",
    "category": "03. Pase y Recepción",
    "subcategory": "Cambio de Orientación",
    "objetivoPrincipal": "Desarrollar y automatizar cambio de orientación en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX209",
    "number": 209,
    "name": "Rondo con Tercer Hombre y Transición Rápida en Cuadrante Delimitado #209",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase con Desmarque",
    "objetivoPrincipal": "Desarrollar y automatizar pase con desmarque en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX210",
    "number": 210,
    "name": "Circuito Técnico de Control y Pase Tensado Dinámico con Rotación Continua #210",
    "category": "03. Pase y Recepción",
    "subcategory": "Líneas de Pase en Tensión",
    "objetivoPrincipal": "Desarrollar y automatizar líneas de pase en tensión en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 8,
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
      "líneas de pase en tensión",
      "pase y recepción",
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
    "id": "EX211",
    "number": 211,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Cambio de Ritmo Forzado #211",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX212",
    "number": 212,
    "name": "Salida de Balón Frente a Presión Alta con Finalización en Miniporterías #212",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX213",
    "number": 213,
    "name": "Basculación en Bloque y Cobertura Defensiva con Oposición Progresiva #213",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX214",
    "number": 214,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Reto de Eficacia Técnica #214",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX215",
    "number": 215,
    "name": "Transición Ofensiva con Superioridad 3v2 con Comodines Interiores #215",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX216",
    "number": 216,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Apoyos Exteriores #216",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX217",
    "number": 217,
    "name": "Juego de Posición 4v4 + 3 Comodines con Superioridad Numérica Condicionada #217",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX218",
    "number": 218,
    "name": "Ruptura de Líneas Interiores con Pared en V con Límite de Toques #218",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX219",
    "number": 219,
    "name": "Aceleraciones con Fintas y Definición Cruzada en Cuadrante Delimitado #219",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX220",
    "number": 220,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta Dinámico con Rotación Continua #220",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX221",
    "number": 221,
    "name": "Coordinación de Centrales y Laterales en repliegue con Cambio de Ritmo Forzado #221",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX222",
    "number": 222,
    "name": "Circulación Rápida de Balón a Dos Toques con Finalización en Miniporterías #222",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX223",
    "number": 223,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Oposición Progresiva #223",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX224",
    "number": 224,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Reto de Eficacia Técnica #224",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX225",
    "number": 225,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Comodines Interiores #225",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX226",
    "number": 226,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Apoyos Exteriores #226",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX227",
    "number": 227,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Superioridad Numérica Condicionada #227",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX228",
    "number": 228,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Límite de Toques #228",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX229",
    "number": 229,
    "name": "Toma de Decisiones Bajo Presión en Rombo en Cuadrante Delimitado #229",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX230",
    "number": 230,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo Dinámico con Rotación Continua #230",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX231",
    "number": 231,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Cambio de Ritmo Forzado #231",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX232",
    "number": 232,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Finalización en Miniporterías #232",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX233",
    "number": 233,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Oposición Progresiva #233",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX234",
    "number": 234,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Reto de Eficacia Técnica #234",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX235",
    "number": 235,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Comodines Interiores #235",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX236",
    "number": 236,
    "name": "Circuito Técnico de Control y Pase Tensado con Apoyos Exteriores #236",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX237",
    "number": 237,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Superioridad Numérica Condicionada #237",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX238",
    "number": 238,
    "name": "Salida de Balón Frente a Presión Alta con Límite de Toques #238",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX239",
    "number": 239,
    "name": "Basculación en Bloque y Cobertura Defensiva en Cuadrante Delimitado #239",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX240",
    "number": 240,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo Dinámico con Rotación Continua #240",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX241",
    "number": 241,
    "name": "Transición Ofensiva con Superioridad 3v2 con Cambio de Ritmo Forzado #241",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX242",
    "number": 242,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Finalización en Miniporterías #242",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX243",
    "number": 243,
    "name": "Juego de Posición 4v4 + 3 Comodines con Oposición Progresiva #243",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX244",
    "number": 244,
    "name": "Ruptura de Líneas Interiores con Pared en V con Reto de Eficacia Técnica #244",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX245",
    "number": 245,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Comodines Interiores #245",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX246",
    "number": 246,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Apoyos Exteriores #246",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX247",
    "number": 247,
    "name": "Coordinación de Centrales y Laterales en repliegue con Superioridad Numérica Condicionada #247",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX248",
    "number": 248,
    "name": "Circulación Rápida de Balón a Dos Toques con Límite de Toques #248",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX249",
    "number": 249,
    "name": "Defensa de Centros Laterales con Despeje Orientado en Cuadrante Delimitado #249",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX250",
    "number": 250,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea Dinámico con Rotación Continua #250",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX251",
    "number": 251,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Cambio de Ritmo Forzado #251",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX252",
    "number": 252,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Finalización en Miniporterías #252",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX253",
    "number": 253,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Oposición Progresiva #253",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX254",
    "number": 254,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Reto de Eficacia Técnica #254",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX255",
    "number": 255,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Comodines Interiores #255",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX256",
    "number": 256,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Apoyos Exteriores #256",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX257",
    "number": 257,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Superioridad Numérica Condicionada #257",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX258",
    "number": 258,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Límite de Toques #258",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX259",
    "number": 259,
    "name": "Finalización Tras Centro Raso al Punto de Penalti en Cuadrante Delimitado #259",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX260",
    "number": 260,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque Dinámico con Rotación Continua #260",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX261",
    "number": 261,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Cambio de Ritmo Forzado #261",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX262",
    "number": 262,
    "name": "Circuito Técnico de Control y Pase Tensado con Finalización en Miniporterías #262",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX263",
    "number": 263,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Oposición Progresiva #263",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX264",
    "number": 264,
    "name": "Salida de Balón Frente a Presión Alta con Reto de Eficacia Técnica #264",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX265",
    "number": 265,
    "name": "Basculación en Bloque y Cobertura Defensiva con Comodines Interiores #265",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX266",
    "number": 266,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Apoyos Exteriores #266",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX267",
    "number": 267,
    "name": "Transición Ofensiva con Superioridad 3v2 con Superioridad Numérica Condicionada #267",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX268",
    "number": 268,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Límite de Toques #268",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX269",
    "number": 269,
    "name": "Juego de Posición 4v4 + 3 Comodines en Cuadrante Delimitado #269",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX270",
    "number": 270,
    "name": "Ruptura de Líneas Interiores con Pared en V Dinámico con Rotación Continua #270",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar y automatizar regate tras control orientado en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "regate tras control orientado",
      "regate y 1 contra 1",
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
    "id": "EX271",
    "number": 271,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Cambio de Ritmo Forzado #271",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar y automatizar duelos en espacio reducido en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "duelos en espacio reducido",
      "regate y 1 contra 1",
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
    "id": "EX272",
    "number": 272,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Finalización en Miniporterías #272",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar y automatizar regate con finta exterior en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "regate con finta exterior",
      "regate y 1 contra 1",
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
    "id": "EX273",
    "number": 273,
    "name": "Coordinación de Centrales y Laterales en repliegue con Oposición Progresiva #273",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar y automatizar desborde por banda en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "desborde por banda",
      "regate y 1 contra 1",
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
    "id": "EX274",
    "number": 274,
    "name": "Circulación Rápida de Balón a Dos Toques con Reto de Eficacia Técnica #274",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 frontal con portería en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
    "jugadoresLabel": "3–5",
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
      "1v1 frontal con portería",
      "regate y 1 contra 1",
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
    "id": "EX275",
    "number": 275,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Comodines Interiores #275",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar y automatizar 1v1 de espaldas a meta en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 4,
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
      "1v1 de espaldas a meta",
      "regate y 1 contra 1",
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
    "id": "EX276",
    "number": 276,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Apoyos Exteriores #276",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Desarrollar y automatizar voleas y semivoleas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "voleas y semivoleas",
      "finalización y tiro",
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
    "id": "EX277",
    "number": 277,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Superioridad Numérica Condicionada #277",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Desarrollar y automatizar tiro tras pared frontal en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "tiro tras pared frontal",
      "finalización y tiro",
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
    "id": "EX278",
    "number": 278,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Límite de Toques #278",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Desarrollar y automatizar centros y remates al primer palo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "centros y remates al primer palo",
      "finalización y tiro",
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
    "id": "EX279",
    "number": 279,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado en Cuadrante Delimitado #279",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Desarrollar y automatizar segunda jugada y rebote en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "segunda jugada y rebote",
      "finalización y tiro",
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
    "id": "EX280",
    "number": 280,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro Dinámico con Rotación Continua #280",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Desarrollar y automatizar disparo de media distancia en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "disparo de media distancia",
      "finalización y tiro",
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
    "id": "EX281",
    "number": 281,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Cambio de Ritmo Forzado #281",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Desarrollar y automatizar mano a mano con portero en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "mano a mano con portero",
      "finalización y tiro",
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
    "id": "EX282",
    "number": 282,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Finalización en Miniporterías #282",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Desarrollar y automatizar voleas y semivoleas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "voleas y semivoleas",
      "finalización y tiro",
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
    "id": "EX283",
    "number": 283,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Oposición Progresiva #283",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Desarrollar y automatizar tiro tras pared frontal en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "tiro tras pared frontal",
      "finalización y tiro",
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
    "id": "EX284",
    "number": 284,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Reto de Eficacia Técnica #284",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Desarrollar y automatizar centros y remates al primer palo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "centros y remates al primer palo",
      "finalización y tiro",
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
    "id": "EX285",
    "number": 285,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Comodines Interiores #285",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Desarrollar y automatizar segunda jugada y rebote en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "segunda jugada y rebote",
      "finalización y tiro",
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
    "id": "EX286",
    "number": 286,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Apoyos Exteriores #286",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Desarrollar y automatizar disparo de media distancia en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "disparo de media distancia",
      "finalización y tiro",
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
    "id": "EX287",
    "number": 287,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Superioridad Numérica Condicionada #287",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Desarrollar y automatizar mano a mano con portero en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "mano a mano con portero",
      "finalización y tiro",
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
    "id": "EX288",
    "number": 288,
    "name": "Circuito Técnico de Control y Pase Tensado con Límite de Toques #288",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Desarrollar y automatizar voleas y semivoleas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "voleas y semivoleas",
      "finalización y tiro",
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
    "id": "EX289",
    "number": 289,
    "name": "Duelo 1v1 con Finalización Tras Desmarque en Cuadrante Delimitado #289",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Desarrollar y automatizar tiro tras pared frontal en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "tiro tras pared frontal",
      "finalización y tiro",
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
    "id": "EX290",
    "number": 290,
    "name": "Salida de Balón Frente a Presión Alta Dinámico con Rotación Continua #290",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Desarrollar y automatizar centros y remates al primer palo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "centros y remates al primer palo",
      "finalización y tiro",
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
    "id": "EX291",
    "number": 291,
    "name": "Basculación en Bloque y Cobertura Defensiva con Cambio de Ritmo Forzado #291",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Desarrollar y automatizar segunda jugada y rebote en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "segunda jugada y rebote",
      "finalización y tiro",
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
    "id": "EX292",
    "number": 292,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Finalización en Miniporterías #292",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Desarrollar y automatizar disparo de media distancia en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "disparo de media distancia",
      "finalización y tiro",
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
    "id": "EX293",
    "number": 293,
    "name": "Transición Ofensiva con Superioridad 3v2 con Oposición Progresiva #293",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Desarrollar y automatizar mano a mano con portero en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "mano a mano con portero",
      "finalización y tiro",
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
    "id": "EX294",
    "number": 294,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Reto de Eficacia Técnica #294",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Desarrollar y automatizar voleas y semivoleas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "voleas y semivoleas",
      "finalización y tiro",
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
    "id": "EX295",
    "number": 295,
    "name": "Juego de Posición 4v4 + 3 Comodines con Comodines Interiores #295",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Desarrollar y automatizar tiro tras pared frontal en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "tiro tras pared frontal",
      "finalización y tiro",
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
    "id": "EX296",
    "number": 296,
    "name": "Ruptura de Líneas Interiores con Pared en V con Apoyos Exteriores #296",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Desarrollar y automatizar centros y remates al primer palo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "centros y remates al primer palo",
      "finalización y tiro",
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
    "id": "EX297",
    "number": 297,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Superioridad Numérica Condicionada #297",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Desarrollar y automatizar segunda jugada y rebote en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "segunda jugada y rebote",
      "finalización y tiro",
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
    "id": "EX298",
    "number": 298,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Límite de Toques #298",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Desarrollar y automatizar disparo de media distancia en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "disparo de media distancia",
      "finalización y tiro",
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
    "id": "EX299",
    "number": 299,
    "name": "Coordinación de Centrales y Laterales en repliegue en Cuadrante Delimitado #299",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Desarrollar y automatizar mano a mano con portero en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "mano a mano con portero",
      "finalización y tiro",
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
    "id": "EX300",
    "number": 300,
    "name": "Circulación Rápida de Balón a Dos Toques Dinámico con Rotación Continua #300",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Desarrollar y automatizar voleas y semivoleas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
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
      "voleas y semivoleas",
      "finalización y tiro",
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
