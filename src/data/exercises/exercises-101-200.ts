import { Exercise } from '../../types';

export const exercises_2: Exercise[] = [
  {
    "id": "EX101",
    "number": 101,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Cambio de Ritmo Forzado #101",
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
    "id": "EX102",
    "number": 102,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Finalización en Miniporterías #102",
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
    "id": "EX103",
    "number": 103,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Oposición Progresiva #103",
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
    "id": "EX104",
    "number": 104,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Reto de Eficacia Técnica #104",
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
    "id": "EX105",
    "number": 105,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Comodines Interiores #105",
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
    "id": "EX106",
    "number": 106,
    "name": "Circuito Técnico de Control y Pase Tensado con Apoyos Exteriores #106",
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
    "id": "EX107",
    "number": 107,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Superioridad Numérica Condicionada #107",
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
    "id": "EX108",
    "number": 108,
    "name": "Salida de Balón Frente a Presión Alta con Límite de Toques #108",
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
    "id": "EX109",
    "number": 109,
    "name": "Basculación en Bloque y Cobertura Defensiva en Cuadrante Delimitado #109",
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
    "id": "EX110",
    "number": 110,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo Dinámico con Rotación Continua #110",
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
    "id": "EX111",
    "number": 111,
    "name": "Transición Ofensiva con Superioridad 3v2 con Cambio de Ritmo Forzado #111",
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
    "id": "EX112",
    "number": 112,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Finalización en Miniporterías #112",
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
    "id": "EX113",
    "number": 113,
    "name": "Juego de Posición 4v4 + 3 Comodines con Oposición Progresiva #113",
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
    "id": "EX114",
    "number": 114,
    "name": "Ruptura de Líneas Interiores con Pared en V con Reto de Eficacia Técnica #114",
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
    "id": "EX115",
    "number": 115,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Comodines Interiores #115",
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
    "id": "EX116",
    "number": 116,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Apoyos Exteriores #116",
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
    "id": "EX117",
    "number": 117,
    "name": "Coordinación de Centrales y Laterales en repliegue con Superioridad Numérica Condicionada #117",
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
    "id": "EX118",
    "number": 118,
    "name": "Circulación Rápida de Balón a Dos Toques con Límite de Toques #118",
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
    "id": "EX119",
    "number": 119,
    "name": "Defensa de Centros Laterales con Despeje Orientado en Cuadrante Delimitado #119",
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
    "id": "EX120",
    "number": 120,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea Dinámico con Rotación Continua #120",
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
    "id": "EX121",
    "number": 121,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Cambio de Ritmo Forzado #121",
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
    "id": "EX122",
    "number": 122,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Finalización en Miniporterías #122",
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
    "id": "EX123",
    "number": 123,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Oposición Progresiva #123",
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
    "id": "EX124",
    "number": 124,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Reto de Eficacia Técnica #124",
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
    "id": "EX125",
    "number": 125,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Comodines Interiores #125",
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
    "id": "EX126",
    "number": 126,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Apoyos Exteriores #126",
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
    "id": "EX127",
    "number": 127,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Superioridad Numérica Condicionada #127",
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
    "id": "EX128",
    "number": 128,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Límite de Toques #128",
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
    "id": "EX129",
    "number": 129,
    "name": "Finalización Tras Centro Raso al Punto de Penalti en Cuadrante Delimitado #129",
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
    "id": "EX130",
    "number": 130,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque Dinámico con Rotación Continua #130",
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
    "id": "EX131",
    "number": 131,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Cambio de Ritmo Forzado #131",
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
    "id": "EX132",
    "number": 132,
    "name": "Circuito Técnico de Control y Pase Tensado con Finalización en Miniporterías #132",
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
    "id": "EX133",
    "number": 133,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Oposición Progresiva #133",
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
    "id": "EX134",
    "number": 134,
    "name": "Salida de Balón Frente a Presión Alta con Reto de Eficacia Técnica #134",
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
    "id": "EX135",
    "number": 135,
    "name": "Basculación en Bloque y Cobertura Defensiva con Comodines Interiores #135",
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
    "id": "EX136",
    "number": 136,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Apoyos Exteriores #136",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX137",
    "number": 137,
    "name": "Transición Ofensiva con Superioridad 3v2 con Superioridad Numérica Condicionada #137",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX138",
    "number": 138,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Límite de Toques #138",
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
      "líneas de pase en tensión",
      "pase y recepción",
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
    "id": "EX139",
    "number": 139,
    "name": "Juego de Posición 4v4 + 3 Comodines en Cuadrante Delimitado #139",
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
      "pase corto y primer toque",
      "pase y recepción",
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
    "id": "EX140",
    "number": 140,
    "name": "Ruptura de Líneas Interiores con Pared en V Dinámico con Rotación Continua #140",
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
      "tercer hombre y paredes",
      "pase y recepción",
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
    "id": "EX141",
    "number": 141,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Cambio de Ritmo Forzado #141",
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
    "id": "EX142",
    "number": 142,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Finalización en Miniporterías #142",
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
    "id": "EX143",
    "number": 143,
    "name": "Coordinación de Centrales y Laterales en repliegue con Oposición Progresiva #143",
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
    "id": "EX144",
    "number": 144,
    "name": "Circulación Rápida de Balón a Dos Toques con Reto de Eficacia Técnica #144",
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
    "id": "EX145",
    "number": 145,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Comodines Interiores #145",
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
    "id": "EX146",
    "number": 146,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Apoyos Exteriores #146",
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
    "id": "EX147",
    "number": 147,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Superioridad Numérica Condicionada #147",
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
    "id": "EX148",
    "number": 148,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Límite de Toques #148",
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
    "id": "EX149",
    "number": 149,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado en Cuadrante Delimitado #149",
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
    "id": "EX150",
    "number": 150,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro Dinámico con Rotación Continua #150",
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
    "id": "EX151",
    "number": 151,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Cambio de Ritmo Forzado #151",
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
      "pase corto y primer toque",
      "pase y recepción",
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
    "id": "EX152",
    "number": 152,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Finalización en Miniporterías #152",
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
      "tercer hombre y paredes",
      "pase y recepción",
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
    "id": "EX153",
    "number": 153,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Oposición Progresiva #153",
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
      "pase medio y filtrado",
      "pase y recepción",
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
    "id": "EX154",
    "number": 154,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Reto de Eficacia Técnica #154",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX155",
    "number": 155,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Comodines Interiores #155",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX156",
    "number": 156,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Apoyos Exteriores #156",
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
      "líneas de pase en tensión",
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
    "id": "EX157",
    "number": 157,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Superioridad Numérica Condicionada #157",
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
      "pase corto y primer toque",
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
    "id": "EX158",
    "number": 158,
    "name": "Circuito Técnico de Control y Pase Tensado con Límite de Toques #158",
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
      "tercer hombre y paredes",
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
    "id": "EX159",
    "number": 159,
    "name": "Duelo 1v1 con Finalización Tras Desmarque en Cuadrante Delimitado #159",
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
      "pase medio y filtrado",
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
    "id": "EX160",
    "number": 160,
    "name": "Salida de Balón Frente a Presión Alta Dinámico con Rotación Continua #160",
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
      "cambio de orientación",
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
    "id": "EX161",
    "number": 161,
    "name": "Basculación en Bloque y Cobertura Defensiva con Cambio de Ritmo Forzado #161",
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
      "pase con desmarque",
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
    "id": "EX162",
    "number": 162,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Finalización en Miniporterías #162",
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
      "líneas de pase en tensión",
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
    "id": "EX163",
    "number": 163,
    "name": "Transición Ofensiva con Superioridad 3v2 con Oposición Progresiva #163",
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
      "pase corto y primer toque",
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
    "id": "EX164",
    "number": 164,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Reto de Eficacia Técnica #164",
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
      "tercer hombre y paredes",
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
    "id": "EX165",
    "number": 165,
    "name": "Juego de Posición 4v4 + 3 Comodines con Comodines Interiores #165",
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
      "pase medio y filtrado",
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
    "id": "EX166",
    "number": 166,
    "name": "Ruptura de Líneas Interiores con Pared en V con Apoyos Exteriores #166",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX167",
    "number": 167,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Superioridad Numérica Condicionada #167",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX168",
    "number": 168,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Límite de Toques #168",
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
      "líneas de pase en tensión",
      "pase y recepción",
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
    "id": "EX169",
    "number": 169,
    "name": "Coordinación de Centrales y Laterales en repliegue en Cuadrante Delimitado #169",
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
      "pase corto y primer toque",
      "pase y recepción",
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
    "id": "EX170",
    "number": 170,
    "name": "Circulación Rápida de Balón a Dos Toques Dinámico con Rotación Continua #170",
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
      "tercer hombre y paredes",
      "pase y recepción",
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
    "id": "EX171",
    "number": 171,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Cambio de Ritmo Forzado #171",
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
    "id": "EX172",
    "number": 172,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Finalización en Miniporterías #172",
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
    "id": "EX173",
    "number": 173,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Oposición Progresiva #173",
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
    "id": "EX174",
    "number": 174,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Reto de Eficacia Técnica #174",
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
    "id": "EX175",
    "number": 175,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Comodines Interiores #175",
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
    "id": "EX176",
    "number": 176,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Apoyos Exteriores #176",
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
    "id": "EX177",
    "number": 177,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Superioridad Numérica Condicionada #177",
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
    "id": "EX178",
    "number": 178,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Límite de Toques #178",
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
    "id": "EX179",
    "number": 179,
    "name": "Presión en Bloque Medio y Robo en Carril Central en Cuadrante Delimitado #179",
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
    "id": "EX180",
    "number": 180,
    "name": "Movilidad Ofensiva con Permuta de Extremos Dinámico con Rotación Continua #180",
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
    "id": "EX181",
    "number": 181,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Cambio de Ritmo Forzado #181",
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
      "pase corto y primer toque",
      "pase y recepción",
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
    "id": "EX182",
    "number": 182,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Finalización en Miniporterías #182",
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
      "tercer hombre y paredes",
      "pase y recepción",
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
    "id": "EX183",
    "number": 183,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Oposición Progresiva #183",
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
      "pase medio y filtrado",
      "pase y recepción",
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
    "id": "EX184",
    "number": 184,
    "name": "Circuito Técnico de Control y Pase Tensado con Reto de Eficacia Técnica #184",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX185",
    "number": 185,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Comodines Interiores #185",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX186",
    "number": 186,
    "name": "Salida de Balón Frente a Presión Alta con Apoyos Exteriores #186",
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
      "líneas de pase en tensión",
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
    "id": "EX187",
    "number": 187,
    "name": "Basculación en Bloque y Cobertura Defensiva con Superioridad Numérica Condicionada #187",
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
      "pase corto y primer toque",
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
    "id": "EX188",
    "number": 188,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Límite de Toques #188",
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
      "tercer hombre y paredes",
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
    "id": "EX189",
    "number": 189,
    "name": "Transición Ofensiva con Superioridad 3v2 en Cuadrante Delimitado #189",
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
      "pase medio y filtrado",
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
    "id": "EX190",
    "number": 190,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos Dinámico con Rotación Continua #190",
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
      "cambio de orientación",
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
    "id": "EX191",
    "number": 191,
    "name": "Juego de Posición 4v4 + 3 Comodines con Cambio de Ritmo Forzado #191",
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
      "pase con desmarque",
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
    "id": "EX192",
    "number": 192,
    "name": "Ruptura de Líneas Interiores con Pared en V con Finalización en Miniporterías #192",
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
      "líneas de pase en tensión",
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
    "id": "EX193",
    "number": 193,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Oposición Progresiva #193",
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
      "pase corto y primer toque",
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
    "id": "EX194",
    "number": 194,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Reto de Eficacia Técnica #194",
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
      "tercer hombre y paredes",
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
    "id": "EX195",
    "number": 195,
    "name": "Coordinación de Centrales y Laterales en repliegue con Comodines Interiores #195",
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
      "pase medio y filtrado",
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
    "id": "EX196",
    "number": 196,
    "name": "Circulación Rápida de Balón a Dos Toques con Apoyos Exteriores #196",
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
      "cambio de orientación",
      "pase y recepción",
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
    "id": "EX197",
    "number": 197,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Superioridad Numérica Condicionada #197",
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
      "pase con desmarque",
      "pase y recepción",
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
    "id": "EX198",
    "number": 198,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Límite de Toques #198",
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
      "líneas de pase en tensión",
      "pase y recepción",
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
    "id": "EX199",
    "number": 199,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación en Cuadrante Delimitado #199",
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
      "pase corto y primer toque",
      "pase y recepción",
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
    "id": "EX200",
    "number": 200,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros Dinámico con Rotación Continua #200",
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
      "tercer hombre y paredes",
      "pase y recepción",
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
  }
];
