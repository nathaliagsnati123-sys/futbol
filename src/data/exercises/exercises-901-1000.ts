import { Exercise } from '../../types';

export const exercises_10: Exercise[] = [
  {
    "id": "EX901",
    "number": 901,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Cambio de Ritmo Forzado #901",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX902",
    "number": 902,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Finalización en Miniporterías #902",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX903",
    "number": 903,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Oposición Progresiva #903",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX904",
    "number": 904,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Reto de Eficacia Técnica #904",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX905",
    "number": 905,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Comodines Interiores #905",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX906",
    "number": 906,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Apoyos Exteriores #906",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX907",
    "number": 907,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Superioridad Numérica Condicionada #907",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX908",
    "number": 908,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Límite de Toques #908",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX909",
    "number": 909,
    "name": "Finalización Tras Centro Raso al Punto de Penalti en Cuadrante Delimitado #909",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX910",
    "number": 910,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque Dinámico con Rotación Continua #910",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX911",
    "number": 911,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Cambio de Ritmo Forzado #911",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX912",
    "number": 912,
    "name": "Circuito Técnico de Control y Pase Tensado con Finalización en Miniporterías #912",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX913",
    "number": 913,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Oposición Progresiva #913",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX914",
    "number": 914,
    "name": "Salida de Balón Frente a Presión Alta con Reto de Eficacia Técnica #914",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX915",
    "number": 915,
    "name": "Basculación en Bloque y Cobertura Defensiva con Comodines Interiores #915",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX916",
    "number": 916,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Apoyos Exteriores #916",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX917",
    "number": 917,
    "name": "Transición Ofensiva con Superioridad 3v2 con Superioridad Numérica Condicionada #917",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX918",
    "number": 918,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Límite de Toques #918",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX919",
    "number": 919,
    "name": "Juego de Posición 4v4 + 3 Comodines en Cuadrante Delimitado #919",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX920",
    "number": 920,
    "name": "Ruptura de Líneas Interiores con Pared en V Dinámico con Rotación Continua #920",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX921",
    "number": 921,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Cambio de Ritmo Forzado #921",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX922",
    "number": 922,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Finalización en Miniporterías #922",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX923",
    "number": 923,
    "name": "Coordinación de Centrales y Laterales en repliegue con Oposición Progresiva #923",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX924",
    "number": 924,
    "name": "Circulación Rápida de Balón a Dos Toques con Reto de Eficacia Técnica #924",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX925",
    "number": 925,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Comodines Interiores #925",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX926",
    "number": 926,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Apoyos Exteriores #926",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX927",
    "number": 927,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Superioridad Numérica Condicionada #927",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX928",
    "number": 928,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Límite de Toques #928",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX929",
    "number": 929,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado en Cuadrante Delimitado #929",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX930",
    "number": 930,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro Dinámico con Rotación Continua #930",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX931",
    "number": 931,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Cambio de Ritmo Forzado #931",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX932",
    "number": 932,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Finalización en Miniporterías #932",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX933",
    "number": 933,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Oposición Progresiva #933",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX934",
    "number": 934,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Reto de Eficacia Técnica #934",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX935",
    "number": 935,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Comodines Interiores #935",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX936",
    "number": 936,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Apoyos Exteriores #936",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX937",
    "number": 937,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Superioridad Numérica Condicionada #937",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX938",
    "number": 938,
    "name": "Circuito Técnico de Control y Pase Tensado con Límite de Toques #938",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX939",
    "number": 939,
    "name": "Duelo 1v1 con Finalización Tras Desmarque en Cuadrante Delimitado #939",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX940",
    "number": 940,
    "name": "Salida de Balón Frente a Presión Alta Dinámico con Rotación Continua #940",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX941",
    "number": 941,
    "name": "Basculación en Bloque y Cobertura Defensiva con Cambio de Ritmo Forzado #941",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX942",
    "number": 942,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Finalización en Miniporterías #942",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX943",
    "number": 943,
    "name": "Transición Ofensiva con Superioridad 3v2 con Oposición Progresiva #943",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX944",
    "number": 944,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Reto de Eficacia Técnica #944",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX945",
    "number": 945,
    "name": "Juego de Posición 4v4 + 3 Comodines con Comodines Interiores #945",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX946",
    "number": 946,
    "name": "Ruptura de Líneas Interiores con Pared en V con Apoyos Exteriores #946",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX947",
    "number": 947,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Superioridad Numérica Condicionada #947",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX948",
    "number": 948,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Límite de Toques #948",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX949",
    "number": 949,
    "name": "Coordinación de Centrales y Laterales en repliegue en Cuadrante Delimitado #949",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX950",
    "number": 950,
    "name": "Circulación Rápida de Balón a Dos Toques Dinámico con Rotación Continua #950",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Desarrollar y automatizar duelo 1v1 con cambio de rol inmediato en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "duelo 1v1 con cambio de rol inmediato",
      "ejercicios en parejas",
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
    "id": "EX951",
    "number": 951,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Cambio de Ritmo Forzado #951",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Desarrollar y automatizar paredes en progresión por carril en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "paredes en progresión por carril",
      "ejercicios en parejas",
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
    "id": "EX952",
    "number": 952,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Finalización en Miniporterías #952",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Desarrollar y automatizar centro y remate en tándem en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "centro y remate en tándem",
      "ejercicios en parejas",
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
    "id": "EX953",
    "number": 953,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación con Oposición Progresiva #953",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Desarrollar y automatizar protección y despojo entre dos en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "protección y despojo entre dos",
      "ejercicios en parejas",
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
    "id": "EX954",
    "number": 954,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros con Reto de Eficacia Técnica #954",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Desarrollar y automatizar desmarques cruzados en pareja en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "desmarques cruzados en pareja",
      "ejercicios en parejas",
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
    "id": "EX955",
    "number": 955,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Comodines Interiores #955",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Desarrollar y automatizar pases dinámicos con movimiento continuo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
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
      "pases dinámicos con movimiento continuo",
      "ejercicios en parejas",
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
    "id": "EX956",
    "number": 956,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Apoyos Exteriores #956",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX957",
    "number": 957,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Superioridad Numérica Condicionada #957",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX958",
    "number": 958,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Límite de Toques #958",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX959",
    "number": 959,
    "name": "Presión en Bloque Medio y Robo en Carril Central en Cuadrante Delimitado #959",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX960",
    "number": 960,
    "name": "Movilidad Ofensiva con Permuta de Extremos Dinámico con Rotación Continua #960",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX961",
    "number": 961,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Cambio de Ritmo Forzado #961",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX962",
    "number": 962,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Finalización en Miniporterías #962",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX963",
    "number": 963,
    "name": "Rondo con Tercer Hombre y Transición Rápida con Oposición Progresiva #963",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX964",
    "number": 964,
    "name": "Circuito Técnico de Control y Pase Tensado con Reto de Eficacia Técnica #964",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX965",
    "number": 965,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Comodines Interiores #965",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX966",
    "number": 966,
    "name": "Salida de Balón Frente a Presión Alta con Apoyos Exteriores #966",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX967",
    "number": 967,
    "name": "Basculación en Bloque y Cobertura Defensiva con Superioridad Numérica Condicionada #967",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX968",
    "number": 968,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Límite de Toques #968",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX969",
    "number": 969,
    "name": "Transición Ofensiva con Superioridad 3v2 en Cuadrante Delimitado #969",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX970",
    "number": 970,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos Dinámico con Rotación Continua #970",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX971",
    "number": 971,
    "name": "Juego de Posición 4v4 + 3 Comodines con Cambio de Ritmo Forzado #971",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX972",
    "number": 972,
    "name": "Ruptura de Líneas Interiores con Pared en V con Finalización en Miniporterías #972",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX973",
    "number": 973,
    "name": "Aceleraciones con Fintas y Definición Cruzada con Oposición Progresiva #973",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX974",
    "number": 974,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta con Reto de Eficacia Técnica #974",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX975",
    "number": 975,
    "name": "Coordinación de Centrales y Laterales en repliegue con Comodines Interiores #975",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX976",
    "number": 976,
    "name": "Circulación Rápida de Balón a Dos Toques con Apoyos Exteriores #976",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX977",
    "number": 977,
    "name": "Defensa de Centros Laterales con Despeje Orientado con Superioridad Numérica Condicionada #977",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX978",
    "number": 978,
    "name": "Oleada Ofensiva 4v3 con Incorporación de Segunda Línea con Límite de Toques #978",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX979",
    "number": 979,
    "name": "Transición Rápida Defensa-Ataque tras Interceptación en Cuadrante Delimitado #979",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX980",
    "number": 980,
    "name": "Juego en Espacios Reducidos con Apoyo de Porteros Dinámico con Rotación Continua #980",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX981",
    "number": 981,
    "name": "Desmarque de Apoyo y Tiro Raso Ajustado con Cambio de Ritmo Forzado #981",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX982",
    "number": 982,
    "name": "Circuito de Fuerza Explosiva y Tiro Tras Giro con Finalización en Miniporterías #982",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX983",
    "number": 983,
    "name": "Toma de Decisiones Bajo Presión en Rombo con Oposición Progresiva #983",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX984",
    "number": 984,
    "name": "Trabajo de Amplitud con Cambio de Juego Largo con Reto de Eficacia Técnica #984",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX985",
    "number": 985,
    "name": "Presión en Bloque Medio y Robo en Carril Central con Comodines Interiores #985",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX986",
    "number": 986,
    "name": "Movilidad Ofensiva con Permuta de Extremos con Apoyos Exteriores #986",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX987",
    "number": 987,
    "name": "Finalización Tras Centro Raso al Punto de Penalti con Superioridad Numérica Condicionada #987",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX988",
    "number": 988,
    "name": "Eslalon de Alta Velocidad y Definición de Primer Toque con Límite de Toques #988",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX989",
    "number": 989,
    "name": "Rondo con Tercer Hombre y Transición Rápida en Cuadrante Delimitado #989",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX990",
    "number": 990,
    "name": "Circuito Técnico de Control y Pase Tensado Dinámico con Rotación Continua #990",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX991",
    "number": 991,
    "name": "Duelo 1v1 con Finalización Tras Desmarque con Cambio de Ritmo Forzado #991",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX992",
    "number": 992,
    "name": "Salida de Balón Frente a Presión Alta con Finalización en Miniporterías #992",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX993",
    "number": 993,
    "name": "Basculación en Bloque y Cobertura Defensiva con Oposición Progresiva #993",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX994",
    "number": 994,
    "name": "Ataque Rápido por Bandas y Remate al Primer Palo con Reto de Eficacia Técnica #994",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
    "id": "EX995",
    "number": 995,
    "name": "Transición Ofensiva con Superioridad 3v2 con Comodines Interiores #995",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Desarrollar y automatizar simulación real de partido 8v8 en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "simulación real de partido 8v8",
      "ejercicios colectivos",
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
    "id": "EX996",
    "number": 996,
    "name": "Presión Tras Pérdida en Zona de Tres Cuartos con Apoyos Exteriores #996",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Desarrollar y automatizar juego de sector por carriles en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de sector por carriles",
      "ejercicios colectivos",
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
    "id": "EX997",
    "number": 997,
    "name": "Juego de Posición 4v4 + 3 Comodines con Superioridad Numérica Condicionada #997",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Desarrollar y automatizar partido condicionado a 3 toques en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "partido condicionado a 3 toques",
      "ejercicios colectivos",
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
    "id": "EX998",
    "number": 998,
    "name": "Ruptura de Líneas Interiores con Pared en V con Límite de Toques #998",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Desarrollar y automatizar juego de posición 7v7 + 3 comodines en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Principiante",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "juego de posición 7v7 + 3 comodines",
      "ejercicios colectivos",
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
    "id": "EX999",
    "number": 999,
    "name": "Aceleraciones con Fintas y Definición Cruzada en Cuadrante Delimitado #999",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Desarrollar y automatizar fútbol reducido con 4 porterías pequeñas en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "fútbol reducido con 4 porterías pequeñas",
      "ejercicios colectivos",
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
    "id": "EX1000",
    "number": 1000,
    "name": "Circuito de Agilidad con Balón y Remate a Puerta Dinámico con Rotación Continua #1000",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Desarrollar y automatizar oleadas ofensivas 5v4 en medio campo en situaciones reales de juego, fomentando la velocidad perceptiva y la correcta toma de decisiones bajo presión temporal y espacial.",
    "objetivoTecnico": "Perfeccionar la precisión del gesto técnico, el golpeo con la superficie idónea del pie, el control orientado hacia el espacio libre y la fluidez en la ejecución biomecánica.",
    "objetivoTatico": "Fijar al adversario para liberar líneas de pase, reconocer el momento oportuno de progresión o conservación del balón y asegurar el equilibrio posicional del bloque.",
    "edad": "6–8 años",
    "nivel": "Avanzado",
    "jugadoresMin": 12,
    "jugadoresMax": 18,
    "jugadoresLabel": "16+",
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
      "oleadas ofensivas 5v4 en medio campo",
      "ejercicios colectivos",
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
