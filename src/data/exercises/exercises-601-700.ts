import { Exercise } from '../../types';

export const exercises_7: Exercise[] = [
  {
    "id": "EX601",
    "number": 601,
    "name": "Escalonamiento de los Mediocentros: Uno a 10 Metros y Otro a 20 Metros de los Centrales",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX602",
    "number": 602,
    "name": "Salida con Centrales Abiertos y Laterales en Distintas Alturas para Evitar Bloqueos",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX603",
    "number": 603,
    "name": "Escalonamiento entre Interior y Mediapunta para Ofrecer Dos Niveles de Pase Vertical",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX604",
    "number": 604,
    "name": "Estructura de Salida Escalonada ante Presión de 2 Delanteros: Centrales + Pivote",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX605",
    "number": 605,
    "name": "Desplazamiento Escalonado de la Línea Defensiva para Evitar una Línea Recta Vulnerable",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX606",
    "number": 606,
    "name": "Escalonamiento de Apoyos en Banda: Lateral Abajo, Interior en Diagonal, Extremo Arriba",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX607",
    "number": 607,
    "name": "Salida con Portero Adelantado Creando una Primera Línea de Tres con Centrales",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX608",
    "number": 608,
    "name": "Escalonamiento Ofensivo para Evitar que un Solo Defensor Tape Dos Opciones de Pase",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX609",
    "number": 609,
    "name": "Juego de Salida con Zonas Escalonadas Obligatorias para la Progresión del Balón",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX610",
    "number": 610,
    "name": "Circuito de Pase y Movimiento con Ocupación de Tres Alturas de Juego",
    "category": "09. Táctica",
    "subcategory": "Escalafonamiento en Salida",
    "objetivoPrincipal": "Interiorizar los conceptos tácticos avanzados de alturas de juego, escalonamiento y líneas de pase en diagonal, mejorando la interpretación del juego y la toma de decisiones colectiva.",
    "objetivoTecnico": "Pases con peso y dirección precisa, controles orientados en función del espacio y velocidad de circulación colectiva.",
    "objetivoTatico": "Dominar los principios posicionales, sincronizar las alturas y distancias colectivas y crear ventajas tácticas ante cualquier sistema rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 8,
    "jugadoresMax": 18,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Media",
    "espacio": "Grande",
    "materiales": "Setas para marcar pasillos y zonas tácticas, petos de 3 colores, balones reglamentarios, porterías.",
    "organizacion": "Medio campo o tres cuartos con delimitación clara de los 5 pasillos verticales o 3 zonas horizontales según el objetivo táctico.",
    "desarrollo": "Juegos de posición estructurados y ejercicios de aplicación real donde los futbolistas interactúan respetando principios tácticos del modelo de juego.",
    "pasoAPaso": [
      "1. Organización: Marcar el terreno con las líneas guía o sub-zonas correspondientes a la estructura táctica.",
      "2. Posición Inicial: Los jugadores ocupan sus posiciones habituales en el sistema de juego elegido.",
      "3. Circulación y Búsqueda: Mover el balón buscando atraer al rival para generar el espacio en el sector deseado.",
      "4. Activación del Concepto: Identificar la superioridad o el hombre libre en el momento oportuno y acelerar la jugada.",
      "5. Corrección Colectiva: Paradas pedagógicas breves del entrenador para congelar la jugada y reflexionar sobre la toma de decisión."
    ],
    "puntosClave": [
      "Jugar a espaldas de la línea de presión rival para obligarles a correr hacia su portería.",
      "No ocupar la misma línea de pase ni la misma altura que un compañero cercano.",
      "Generar triángulos y rombos continuos alrededor del poseedor del balón.",
      "Paciencia y velocidad: paciencia para elaborar, máxima velocidad para ejecutar cuando se abre el hueco."
    ],
    "erroresFrecuentes": [
      "Desesperarse y forzar pases verticales cuando el rival tiene los intervalos cerrados.",
      "Situarse en línea recta detrás de un defensor quedando en sombra de pase.",
      "Moverse hacia el balón en lugar de alejarse para generar espacio al compañero."
    ],
    "correcciones": [
      "\"Si no ves el hueco, vuelve a circular por detrás; no regales la posesión.\"",
      "\"Sal de la sombra del defensor; un paso en diagonal te hace visible para el pase.\"",
      "\"Fija tu posición y ten fe en que el balón te llegará; no invadas el carril de otro.\""
    ],
    "variacionFacil": "Añadir comodines interiores para facilitar la superioridad posicional.",
    "variacionDificil": "Presión orientada del rival con marcaje al hombre en zonas clave.",
    "progresion": "Aumentar las dimensiones a campo completo con simulación de partido 11v11.",
    "regresion": "Reducir el número de jugadores a un 4v4+2 en espacio acotado para simplificar los estímulos.",
    "posiciones": "Centrocampistas, mediapuntas, defensas y delanteros.",
    "tags": [
      "táctica",
      "escalafonamiento en salida",
      "juego de posición",
      "modelo de juego",
      "colectivo"
    ],
    "pitchDiagram": {
      "type": "half_pitch",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 8
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "POR",
          "x": 50,
          "y": 14
        },
        {
          "id": "df1",
          "type": "player",
          "team": "away",
          "label": "2",
          "x": 30,
          "y": 28
        },
        {
          "id": "df2",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 44,
          "y": 26
        },
        {
          "id": "df3",
          "type": "player",
          "team": "away",
          "label": "5",
          "x": 56,
          "y": 26
        },
        {
          "id": "df4",
          "type": "player",
          "team": "away",
          "label": "3",
          "x": 70,
          "y": 28
        },
        {
          "id": "at1",
          "type": "player",
          "team": "home",
          "label": "7",
          "x": 25,
          "y": 50
        },
        {
          "id": "at2",
          "type": "player",
          "team": "home",
          "label": "8",
          "x": 45,
          "y": 58
        },
        {
          "id": "at3",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 55,
          "y": 58
        },
        {
          "id": "at4",
          "type": "player",
          "team": "home",
          "label": "11",
          "x": 75,
          "y": 50
        },
        {
          "id": "at5",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 50,
          "y": 40
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 53,
          "y": 56
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 54,
          "y": 55,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX611",
    "number": 611,
    "name": "Sprint Frontal de 10 Metros con Disputa de Balón Dividido y Definición",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX612",
    "number": 612,
    "name": "Sprint con Salida desde el Suelo tras Silbato y Duelo 1v1 en Velocidad",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX613",
    "number": 613,
    "name": "Sprint Cruzado entre Dos Jugadores con Llegada a Balón Suelto y Disparo",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX614",
    "number": 614,
    "name": "Carrera de 15 Metros con Salida en Reacción y Control Orientado en Carrera",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX615",
    "number": 615,
    "name": "Sprint Curvo Rodeando la Pica y Duelo Técnico por la Posesión del Esférico",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX616",
    "number": 616,
    "name": "Doble Sprint de 5+5 Metros con Giro de 180 Grados y Pase de Precisión",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX617",
    "number": 617,
    "name": "Sprint en Persecución: Atacante con 2 Metros de Ventaja frente al Defensor",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX618",
    "number": 618,
    "name": "Carrera Explosiva hacia el Área con Remate de Primer Toque ante Salida del Portero",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX619",
    "number": 619,
    "name": "Sprint con Salida de Espaldas: Giro Rápido y Carrera a Balón Lanzado al Hueco",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX620",
    "number": 620,
    "name": "Duelo de Velocidad Pura de 20 Metros con Balón Conducido a la Máxima Intensidad",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Sprints Cortos con Duelo Técnico",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en sprint lineal corto, aceleración y duelo técnico, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "sprints cortos con duelo técnico",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX621",
    "number": 621,
    "name": "Toques Rápidos con la Planta en 10 Segundos a Máxima Frecuencia Motriz",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX622",
    "number": 622,
    "name": "Secuencia Gestual de Regate en Menos de 2 Segundos: Bicicleta y Cambio de Dirección",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX623",
    "number": 623,
    "name": "Velocidad de Golpeo: Conectar 5 Pases a la Pared en el Menor Tiempo Posible",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX624",
    "number": 624,
    "name": "Pisar, Pasar y Recibir a Máxima Frecuencia con Pierna Dominante y No Dominante",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX625",
    "number": 625,
    "name": "Velocidad Gestual de Despeje: Reacción Inmediata ante Balones Lanzados al Azar",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX626",
    "number": 626,
    "name": "Circuito de 4 Estaciones de Velocidad Gestual con 10 Segundos de Trabajo Máximo",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX627",
    "number": 627,
    "name": "Doble Finta a Máxima Velocidad sin Detener la Inercia de Carrera",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX628",
    "number": 628,
    "name": "Toques Rápidos con Empeine Interior en Espacio de 1 Metro Cuadrado",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX629",
    "number": 629,
    "name": "Velocidad de Reacción Gestual ante Luces o Colores con Toque Técnico Específico",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX630",
    "number": 630,
    "name": "Secuencia de Controles Orientados Sucesivos de Alta Frecuencia en Cuadrado de Conos",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad Gestual con Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en rapidez en la ejecución biomecánica y frecuencia de toques, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad gestual con balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX631",
    "number": 631,
    "name": "Aceleración de 10 Metros con Frenada en Seco en 1 Metro y Pase Rasante",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX632",
    "number": 632,
    "name": "Arranque Explosivo en 5 Metros con Parada en Descenso de Centro de Gravedad",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX633",
    "number": 633,
    "name": "Carrera Progresiva de 20 Metros: Acelerar al 100%, Frenar y Trote de Recuperación",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX634",
    "number": 634,
    "name": "Aceleración con Arrastre de Trineo o Resistencia Elástica de 8 Metros",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX635",
    "number": 635,
    "name": "Deceleración Controlada tras Sprint Máximo para Evitar la Falta al Defensor",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX636",
    "number": 636,
    "name": "Aceleración Lineal con Salida desde Posición de Sentadilla Profunda",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX637",
    "number": 637,
    "name": "Carrera de Frenadas y Arranques en Línea Recta: 5m, 10m y 15m con Balón",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX638",
    "number": 638,
    "name": "Aceleración con Salto Previo de Valla Baja y Aterrizaje Estable Unipodal",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX639",
    "number": 639,
    "name": "Deceleración en Dos Tiempos tras Balón en Profundidad con Control Amortiguado",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX640",
    "number": 640,
    "name": "Sprint con Cambio de Ritmo Brutal: De Trote al 50% a Aceleración al 100%",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Aceleración Lineal y Deceleración",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en fuerza de frenada, estabilidad articular y aceleración explosiva, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "aceleración lineal y deceleración",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX641",
    "number": 641,
    "name": "Circuito Pro-Agility 5-10-5 Metros con Toque Técnico al Completar",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX642",
    "number": 642,
    "name": "Eslalon en W con Cambios de Dirección a 45 Grados y Disparo Final",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX643",
    "number": 643,
    "name": "Cambio de Dirección en 90 Grados con Apoyo Fuerte de Pierna Exterior",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX644",
    "number": 644,
    "name": "Circuito en T con Desplazamientos Frontales, Laterales y de Espaldas",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX645",
    "number": 645,
    "name": "Cambio de Dirección en 180 Grados en Pasillo Estrecho con Balón Conducido",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX646",
    "number": 646,
    "name": "Circuito de Agilidad con Zigzag entre Picas a Máxima Inclinación de Tronco",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX647",
    "number": 647,
    "name": "Cambio de Dirección Reactivo ante la Señal del Compañero en Carrera",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX648",
    "number": 648,
    "name": "Recorrido en Estrella con Retorno al Cono Central y Salida Explosiva",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX649",
    "number": 649,
    "name": "Doble Cambio de Dirección con Finta Corporal y Salida en Conducción Rápida",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX650",
    "number": 650,
    "name": "Circuito COD con Vallas y Conos con Finalización en Mini-Portería",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Cambios de Dirección (COD)",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en cambio de dirección (COD), apoyos laterales y potencia de corte, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "cambios de dirección (cod)",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX651",
    "number": 651,
    "name": "Reacción a la Señal Sonora (Pitido): Sprint hacia el Cono del Color Indicado",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX652",
    "number": 652,
    "name": "Reacción Visual: Salida según el Color de Peto Levantado por el Entrenador",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX653",
    "number": 653,
    "name": "Duelo de Reacción por Parejas: \"Rojos y Azules\" con Persecución al Nombre",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX654",
    "number": 654,
    "name": "Reacción ante el Bote del Balón: Salida Explosiva al Impactar con el Suelo",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX655",
    "number": 655,
    "name": "Juego del Espejo con Reacción Inversa: Hacer lo Contrario de la Señal Emitida",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX656",
    "number": 656,
    "name": "Reacción ante Lanzamiento de Pelota de Tenis: Atraparla antes del Segundo Bote",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX657",
    "number": 657,
    "name": "Sprint de Reacción con Número Asignado en Grupo de 4 Jugadores",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX658",
    "number": 658,
    "name": "Reacción Visual con Balón: Conducir hacia la Puerta Libre que Señala el Técnico",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX659",
    "number": 659,
    "name": "Reacción Auditiva con Giro de 360 Grados y Definición a Portería",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX660",
    "number": 660,
    "name": "Circuito de Estímulos Mixtos (Visual + Auditivo) con Toma de Decisión Rápida",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Velocidad de Reacción Auditiva/Visual",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en tiempo de reacción, percepción rápida y respuesta motriz inmediata, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "velocidad de reacción auditiva/visual",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX661",
    "number": 661,
    "name": "Escalera de Coordinación: Skiping 1 Pie por Hueco con Pase Raso al Salir",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX662",
    "number": 662,
    "name": "Escalera: Skiping Lateral con Devolución de Volea de Empeine al Compañero",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX663",
    "number": 663,
    "name": "Icky Shuffle en Escalera con Aceleración de 10 Metros y Remate a Puerta",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX664",
    "number": 664,
    "name": "Escalera con Apoyos Dentro-Fuera y Control Orientado al Espacio Libre",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX665",
    "number": 665,
    "name": "Saltos Bipodales en Escalera con Salida Rápida y Eslalon de Conos con Balón",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX666",
    "number": 666,
    "name": "Escalera de Agilidad con Pase Cruzado en Mitad del Recorrido Coordinativo",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX667",
    "number": 667,
    "name": "Doble Escalera Paralela: Competición por Parejas y Conducción hasta Meta",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX668",
    "number": 668,
    "name": "Escalera con Giros de Cadera en Cada Peldaño y Pared Dinámica al Salir",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX669",
    "number": 669,
    "name": "Coordinación en Escalera de Espaldas con Giro de 180 Grados y Sprint a Balón",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX670",
    "number": 670,
    "name": "Circuito Completo: Escalera + Mini-Vallas + Conducción + Disparo Final",
    "category": "10. Velocidad y Agilidad",
    "subcategory": "Circuitos de Escalera de Agilidad y Balón",
    "objetivoPrincipal": "Desarrollar la velocidad máxima, aceleración y agilidad reactiva en coordinación de apoyos rápidos en escalera y enlace con gesto con balón, integrando estímulos específicos de fútbol.",
    "objetivoTecnico": "Mantener la precisión gestual y el control del balón a máxima velocidad de desplazamiento sin pérdida de fluidez.",
    "objetivoTatico": "Anticipar trayectorias, ganar duelos por velocidad espacial y acelerar en los momentos determinantes de la jugada.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 10,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Escaleras de agilidad, setas de colores, cronómetro, picas, balones reglamentarios, vallas bajas.",
    "organizacion": "Estaciones lineales o en abanico con pasillos de aceleración de 10 a 20 metros y zonas de recuperación completa.",
    "desarrollo": "Repeticiones cortas (3 a 6 segundos) a intensidad máxima absoluta (100%), seguidas de descansos completos (1:5 o 1:6) para asegurar la calidad neuromuscular.",
    "pasoAPaso": [
      "1. Organización: Colocar las picas, vallas o escalera de coordinación delimitando los carriles de aceleración.",
      "2. Posición Inicial: Los deportistas se colocan en posición de salida activa sobre las puntas de los pies.",
      "3. Estímulo de Inicio: A la señal visual, auditiva o al movimiento del balón, arrancar a la máxima potencia.",
      "4. Ejecución: Completar la secuencia motriz y el cambio de dirección o acción técnica sin frenar antes de tiempo.",
      "5. Recuperación: Retornar caminando despacio hidratándose para garantizar la recuperación del fosfágeno."
    ],
    "puntosClave": [
      "Inclinación del tronco hacia delante en la fase de aceleración inicial (primeros 5 metros).",
      "Bajar el centro de gravedad flexionando rodillas antes de iniciar cualquier cambio de dirección.",
      "Braceo activo y potente coordinado con la zancada para generar mayor impulso horizontal.",
      "Calidad máxima en cada repetición: si baja la velocidad por fatiga, finalizar la serie."
    ],
    "erroresFrecuentes": [
      "Erguir el tronco demasiado pronto en la salida perdiendo potencia horizontal.",
      "Frenar con pasos largos y rodillas bloqueadas aumentando el riesgo lesional.",
      "Descuidar la técnica del toque de balón por ir con prisas descontroladas."
    ],
    "correcciones": [
      "\"Empuja el suelo hacia atrás en los primeros tres pasos; mantén la mirada al frente.\"",
      "\"Da pasitos cortos y rápidos para frenar; no claves los talones.\"",
      "\"El balón debe correr contigo, no tú detrás de un balón descontrolado.\""
    ],
    "variacionFacil": "Reducir las distancias a 5 metros y eliminar la toma de decisión reactiva.",
    "variacionDificil": "Añadir resistencia con bandas elásticas o estímulos sensoriales complejos.",
    "progresion": "Incorporar oposición en persecución real con balón en disputa.",
    "regresion": "Realizar las carreras sin balón centrándose exclusivamente en la mecánica de carrera.",
    "posiciones": "Extremos, delanteros, laterales y cualquier jugador que requiera velocidad punta.",
    "tags": [
      "velocidad",
      "agilidad",
      "circuitos de escalera de agilidad y balón",
      "aceleración",
      "sprint"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX671",
    "number": 671,
    "name": "Pliometría con Salto Bipodal sobre Vallas de 30 cm y Cabezazo a Meta",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX672",
    "number": 672,
    "name": "Saltos Unipodales con Estabilización en Bosu y Pase con Empeine Interior",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX673",
    "number": 673,
    "name": "Salto con Caída desde Cajón (Drop Jump) y Aceleración Explosiva de 10 Metros",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX674",
    "number": 674,
    "name": "Circuito de Multisaltos en Cruz con Balón Medicinal y Pase Posterior",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX675",
    "number": 675,
    "name": "Pliometría Reactiva con Mini-Vallas y Duelo Aéreo con Defensa Central",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX676",
    "number": 676,
    "name": "Saltos Laterales de Potencia sobre Valla y Remate de Volea en Suspensión",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX677",
    "number": 677,
    "name": "Circuito de Potencia de Piernas: Sentadilla con Salto y Disparo Fuerte",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX678",
    "number": 678,
    "name": "Salto Coordinativo con Rodillas al Pecho y Salida en Sprint Vertical",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX679",
    "number": 679,
    "name": "Fuerza Explosiva con Trineo de Resistencia y Conducción Rápida de Balón",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX680",
    "number": 680,
    "name": "Multisaltos Asimétricos con Frenada Rápida y Pase Tensado Rasante",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Explosiva en Saltos y Caídas",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza explosiva, ciclo estiramiento-acortamiento (CEA) y pliometría, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza explosiva en saltos y caídas",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX681",
    "number": 681,
    "name": "Circuito Intermitente 15x15 Segundos: Trote Rápido y Acciones Técnicas",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX682",
    "number": 682,
    "name": "Intervalos 30x30 Segundos de Conducción Intensa y Pases en Cuadrado de 30 Metros",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX683",
    "number": 683,
    "name": "Test de Resistencia Específica con Balón: Vueltas a Medio Campo con Postas Técnicas",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX684",
    "number": 684,
    "name": "Intermitente de Alta Intensidad: Sprint de 20 Metros, 1v1 y Trote de Recuperación",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX685",
    "number": 685,
    "name": "Circuito de 6 Estaciones Físico-Técnicas con 20 Segundos de Trabajo por 20 de Descanso",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX686",
    "number": 686,
    "name": "Resistencia en Pasillos de 40 Metros con Cambios de Sentido y Pase de Empeine",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX687",
    "number": 687,
    "name": "Carreras Fraccionadas con Balón en Triángulo de Resistencia Aeróbico-Anaeróbica",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX688",
    "number": 688,
    "name": "Intermitente en Parejas: Uno Trabaja a Máxima Intensidad mientras el Otro Asiste",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX689",
    "number": 689,
    "name": "Circuito de Carrera Intermitente con Giros de 90 Grados y Remate a Mini-Portería",
    "category": "11. Preparación Física",
    "subcategory": "Resistencia Intermitente",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en resistencia aeróbica-anaeróbica intermitente con balón, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "resistencia intermitente",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX690",
    "number": 690,
    "name": "Circuito de Fuerza Funcional con Balón: Zancadas con Pase y Planchas con Toque",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX691",
    "number": 691,
    "name": "Duelos de Arrastre Corporal con Balón Protegido y Resistencia de 20 Segundos",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX692",
    "number": 692,
    "name": "Fuerza Resistencia con Bandas Elásticas en Cintura y Conducción Forzada",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX693",
    "number": 693,
    "name": "Circuito de Isometría Core y Cadena Posterior con Devolución de Balón Aéreo",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX694",
    "number": 694,
    "name": "Fuerza de Combate: Pugna en Espacio Reducido de 5x5m con Salida a Gol",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX695",
    "number": 695,
    "name": "Zancadas con Balón en Manos y Pase al Final de Cada Serie de 10 Repeticiones",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX696",
    "number": 696,
    "name": "Circuito de Fuerza Específica con Conos Pesados y Pases de Máxima Distancia",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX697",
    "number": 697,
    "name": "Fuerza Resistencia para Defensores: Saltos, Cargas Legales y Despejes Consecutivos",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX698",
    "number": 698,
    "name": "Trabajo de Fuerza de Empuje y Tracción por Parejas con Finalización Rápida",
    "category": "11. Preparación Física",
    "subcategory": "Fuerza Resistencia Específica",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en fuerza resistencia, estabilidad central (core) y potencia funcional, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "fuerza resistencia específica",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX699",
    "number": 699,
    "name": "Juego Reducido 3v3 sin Comodines a Máxima Intensidad: Series de 3 Minutos",
    "category": "11. Preparación Física",
    "subcategory": "Potencia Aeróbica en Espacio Reducido",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en potencia aeróbica, alta frecuencia cardíaca y volumen de acciones por minuto, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "potencia aeróbica en espacio reducido",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  },
  {
    "id": "EX700",
    "number": 700,
    "name": "Posesión Dinámica 4v4 en 25x20m con Ritmo Cardíaco Superior al 85% FCM",
    "category": "11. Preparación Física",
    "subcategory": "Potencia Aeróbica en Espacio Reducido",
    "objetivoPrincipal": "Optimizar la condición física del futbolista en potencia aeróbica, alta frecuencia cardíaca y volumen de acciones por minuto, preparando el organismo para los requerimientos condicionales de la competición.",
    "objetivoTecnico": "Mantener la precisión biomecánica del gesto técnico (pase, control, remate) en estados avanzados de fatiga fisiológica.",
    "objetivoTatico": "Sostener la lucidez táctica y la toma de decisiones correcta bajo pulsaciones cardíacas elevadas.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 4,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "Vallas de diferentes alturas, cajones pliométricos, conos, petos, balones reglamentarios, cronómetro.",
    "organizacion": "Espacio acotado según la orientación del esfuerzo (circuitos por postas o campos reducidos para SSG de alta densidad).",
    "desarrollo": "Estructura de entrenamiento condicional integrado donde se dosifican las cargas de trabajo (volumen, densidad e intensidad) con control estricto de tiempos.",
    "pasoAPaso": [
      "1. Organización: Montar las estaciones de trabajo físico-técnico asegurando la distancia reglamentaria.",
      "2. Posición Inicial: Los jugadores se dividen en grupos homogéneos por puestos específicos o capacidad física.",
      "3. Ejecución del Esfuerzo: Realizar la serie al porcentaje de intensidad indicado (85-100%) sin guardarse energía.",
      "4. Acción Técnica: Enlazar el esfuerzo físico con una acción de fútbol real (remate, pase de tensión o duelo).",
      "5. Micropausa: Respetar escrupulosamente los segundos de descanso entre repeticiones e hidratarse."
    ],
    "puntosClave": [
      "Mantener la postura corporal y la alineación de rodilla y tobillo en cada caída de salto.",
      "Máxima autoexigencia en las series de alta intensidad para generar la adaptación fisiológica deseada.",
      "No descuidar la respiración y la recuperación diafragmática durante las pausas.",
      "La fatiga no es excusa para descuidar la calidad del golpeo o el pase."
    ],
    "erroresFrecuentes": [
      "Dosificar el esfuerzo en las primeras repeticiones perdiendo el estímulo de intensidad máxima.",
      "Colapsar las rodillas hacia dentro (valgo de rodilla) al aterrizar de los saltos.",
      "Trotar con desidia en las fases de transición técnica."
    ],
    "correcciones": [
      "\"¡Todo lo que tengas en esta serie! El descanso está programado para recuperarte.\"",
      "\"Separa las rodillas y amortigua con los cuádriceps al caer; silencio al aterrizar.\"",
      "\"Concéntrate en el balón: aunque los pulmones ardan, el pie debe estar firme.\""
    ],
    "variacionFacil": "Aumentar el tiempo de recuperación entre series en un 25% o reducir la distancia de carrera.",
    "variacionDificil": "Reducir la micropausa de descanso o añadir un obstáculo pliométrico adicional.",
    "progresion": "Incrementar el número total de repeticiones o pasar de juego reducido 4v4 a 3v3.",
    "regresion": "Realizar el trabajo sin elementos técnicos de finalización para centrarse solo en la motricidad.",
    "posiciones": "Todos los jugadores de campo.",
    "tags": [
      "preparación física",
      "físico",
      "potencia aeróbica en espacio reducido",
      "resistencia",
      "potencia"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 40,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 60,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 40,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 60,
          "y": 50,
          "color": "#3b82f6"
        },
        {
          "id": "c5",
          "type": "cone",
          "x": 40,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "c6",
          "type": "cone",
          "x": 60,
          "y": 75,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 50,
          "y": 85
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 82
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 80,
          "targetX": 50,
          "targetY": 30
        }
      ]
    }
  }
];
