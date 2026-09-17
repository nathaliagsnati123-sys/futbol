import { Exercise } from '../../types';

export const exercises_5: Exercise[] = [
  {
    "id": "EX401",
    "number": 401,
    "name": "Conexión Rápida Extremo-Interior-Lateral con Triangulación en Velocidad",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX402",
    "number": 402,
    "name": "Ataque Vertical por Pasillo Exterior con Cambio de Ritmo y Salida Hacia Dentro",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX403",
    "number": 403,
    "name": "Transición Ofensiva Rápida Desplegando por Ambas Bandas en 3 Pases",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX404",
    "number": 404,
    "name": "Ataque Rápido con Balón Cruzado de Banda a Banda para Aislar al Extremo en 1v1",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX405",
    "number": 405,
    "name": "Circuito de Salida Rápida por Carril Lateral con Pared y Carrera al Espacio",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX406",
    "number": 406,
    "name": "Ataque por Banda con Pase Interior Cortado y Carrera al Espacio Libre de Marca",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX407",
    "number": 407,
    "name": "Despliegue Ofensivo Rápido tras Saque de Córner Defensivo hacia el Extremo",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX408",
    "number": 408,
    "name": "Ataque Lateral con Salida en Diagonal Hacia Portería del Extremo Rápido",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX409",
    "number": 409,
    "name": "Triangulación en Banda y Centro Tenso al Corazón del Área en Menos de 6 Segundos",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX410",
    "number": 410,
    "name": "Ataque por Banda con Intercambio de Carriles entre Delantero y Extremo",
    "category": "06. Ataque",
    "subcategory": "Ataque Rápido por Bandas",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en amplitud, verticalidad, doblajes y velocidad por carriles exteriores, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "ataque rápido por bandas",
      "ofensivo",
      "táctica"
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
    "id": "EX411",
    "number": 411,
    "name": "Salida Lavolpiana: Mediocentro se Incrusta entre Centrales para Salir en 3+2",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX412",
    "number": 412,
    "name": "Salida de Balón 4+Portero contra Presión Alta de 3 Delanteros Rivales",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX413",
    "number": 413,
    "name": "Salida con Laterales Altos y Estirados con Balón Diagonal del Central",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX414",
    "number": 414,
    "name": "Uso del Portero como Hombre Libre en Salida de Balón Bajo Acoso Asfixiante",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX415",
    "number": 415,
    "name": "Salida en Corto con Finta de Apoyo del Interior y Conducción Abierta del Central",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX416",
    "number": 416,
    "name": "Superación de Primera Línea con Pase Filtrado Tenso al Pivote Defensivo",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX417",
    "number": 417,
    "name": "Salida con Tercer Hombre Interior tras Atraer al Delantero hacia un Lado",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX418",
    "number": 418,
    "name": "Salida de Balón ante Bloque Alto con Pase Medio Directo al Pecho del Delantero",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX419",
    "number": 419,
    "name": "Circuito de Automatismo de Salida desde Saque de Puerta en Corto",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX420",
    "number": 420,
    "name": "Salida de Balón con Rotación de Mediocentros para Descolocar Marcas al Hombre",
    "category": "06. Ataque",
    "subcategory": "Salida de Balón desde Atrás",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en iniciación limpia, superioridad con portero y superación de presión, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
    "objetivoTecnico": "Entregar pases con la tensión y dirección idónea, controles orientados hacia delante y golpeos de finalización precisos.",
    "objetivoTatico": "Generar y aprovechar superioridades numéricas y posicionales, temporizar desmarques y ocupar racionalmente los espacios.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Conos de delimitación de zonas, petos de 3 colores, balones reglamentarios, porterías oficiales.",
    "organizacion": "Medio campo o tres cuartos de terreno de juego dividido en pasillos longitudinales y sectores para estructurar el modelo de ataque.",
    "desarrollo": "El equipo con posesión elabora la jugada siguiendo los principios de amplitud y profundidad, mientras la oposición busca cerrar líneas y recuperar.",
    "pasoAPaso": [
      "1. Organización: Delimitar el campo con zonas de inicio, progresión y finalización; ubicar a atacantes y defensores.",
      "2. Posición Inicial: Inicio del juego desde la línea de iniciación con el portero o centrales con posesión.",
      "3. Circulación: Mover el balón de lado a lado para desajustar el bloque rival y fijar marcas.",
      "4. Ruptura: Identificar el momento del pase vertical o desborde exterior y atacar el área con determinación.",
      "5. Finalización y Balance: Concluir con tiro a meta y mantener vigilancia defensiva ante posible pérdida."
    ],
    "puntosClave": [
      "Amplitud constante: fijar a los laterales rivales pegados a la línea de cal.",
      "Paciencia con el balón: no precipitar el pase vertical si la línea de pase está tapada.",
      "Sincronización en las llegadas: no llegar antes de tiempo para no quedar en fuera de juego.",
      "Movilidad constante de los interiores para ofrecer líneas de pase diagonales."
    ],
    "erroresFrecuentes": [
      "Acumular demasiados jugadores en la misma zona congestionando el juego.",
      "Pases lentos en la circulación que permiten bascular cómodamente al adversario.",
      "Desmarques rectilíneos fáciles de interceptar por los defensores."
    ],
    "correcciones": [
      "\"Mantén tu posición abierta; si te juntas con el compañero, traes un defensor extra.\"",
      "\"Circulación rápida: máximo dos toques para mover al bloque rival de un lado a otro.\"",
      "\"Haz el desmarque en curva o en diagonal para ganar la espalda sin caer en fuera de juego.\""
    ],
    "variacionFacil": "Añadir comodines ofensivos en banda o reducir el número de defensores.",
    "variacionDificil": "Limitar el tiempo de posesión a 15 segundos para finalizar la jugada o juego a 2 toques.",
    "progresion": "Incorporar transición defensiva inmediata obligando a defender si el rival roba el balón.",
    "regresion": "Realizar los patrones ofensivos sin oposición activa para memorizar los movimientos.",
    "posiciones": "Delanteros, extremos, mediapuntas, mediocentros y laterales.",
    "tags": [
      "ataque",
      "ataque posicional",
      "salida de balón desde atrás",
      "ofensivo",
      "táctica"
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
    "id": "EX421",
    "number": 421,
    "name": "Basculación Coordinada de la Línea de 4 ante Cambios de Orientación",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX422",
    "number": 422,
    "name": "Mantenimiento de Distancias entre Centrales y Laterales (8-10 Metros)",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX423",
    "number": 423,
    "name": "Basculación en Bloque con Salida del Lateral a Presión y Cierre del Central",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX424",
    "number": 424,
    "name": "Línea Defensiva de 4 contra Oleadas de 3 Delanteros Rivales",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX425",
    "number": 425,
    "name": "Basculación hacia Banda con Salida del Extremo y Cobertura del Doble Pivote",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX426",
    "number": 426,
    "name": "Movimiento en Acordeón: Achique Colectivo ante Pase Atrás del Rival",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX427",
    "number": 427,
    "name": "Basculación Defensiva en Medio Campo Evitando Pases entre Líneas",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX428",
    "number": 428,
    "name": "Sincronización de la Línea de 4 con Balón Descubierto: Replegar al Espacio",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX429",
    "number": 429,
    "name": "Basculación Rápida ante Centro Lateral con Cierre del Lateral Opuesto al Segundo Palo",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX430",
    "number": 430,
    "name": "Defensa de Cuatro con Fuera de Juego Táctico a la Voz de Mando del Central",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX431",
    "number": 431,
    "name": "Circuito de Basculación con Cuerda Elástica Imaginaria entre Defensores",
    "category": "07. Defensa",
    "subcategory": "Basculación y Línea de 4",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en basculación, compactación de línea de 4 y distancias, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "basculación y línea de 4",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX432",
    "number": 432,
    "name": "Temporización en 1v1 Frontal: Aguantar Sin Venderse hasta Provocar el Error",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX433",
    "number": 433,
    "name": "Perfil Defensivo: Orientar al Atacante hacia su Pierna Menos Hábil o Banda",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX434",
    "number": 434,
    "name": "Duelo Defensivo 1v1 con Entrada a Tiempo en el Momento del Toque Largo",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX435",
    "number": 435,
    "name": "Temporización en Desventaja Numérica 1v2 para Dar Tiempo al Repliegue",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX436",
    "number": 436,
    "name": "Defensa del 1v1 de Espaldas: Encimar sin Cometer Falta y Evitar el Giro",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX437",
    "number": 437,
    "name": "Duelo en Banda con Uso del Cuerpo y Brazo Legal para Robar la Posición",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX438",
    "number": 438,
    "name": "Temporización en 2v2: Uno Presiona al Balón y el Compañero Realiza la Cobertura",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX439",
    "number": 439,
    "name": "Defensa Agresiva de Balón Dividido con Anticipación Limpia de Pie",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX440",
    "number": 440,
    "name": "Duelo Defensivo Aéreo con Salto y Despeje Hacia Zonas Seguras Laterales",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX441",
    "number": 441,
    "name": "Temporización ante Atacante Rápido: Ceder Metros sin Romper la Estructura",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX442",
    "number": 442,
    "name": "Duelo 1v1 en el Borde del Área Evitando el Disparo Frontal",
    "category": "07. Defensa",
    "subcategory": "Duelos Defensivos y Temporización",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en temporización, perfil corporal defensivo y momento de entrada, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "duelos defensivos y temporización",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX443",
    "number": 443,
    "name": "Regla de los 5 Segundos: Acoso Feroz Inmediato tras Pérdida de Posesión",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX444",
    "number": 444,
    "name": "Presión en Manada: Asfixiar al Poseedor Cerrando Todas sus Salidas Cercanas",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX445",
    "number": 445,
    "name": "Presión Tras Pérdida en Campo Rival con Vigilancia Estricta de los Receptores Lejanos",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX446",
    "number": 446,
    "name": "Juego Reducido con Puntos Extra si el Robo se Produce en Menos de 4 Segundos",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX447",
    "number": 447,
    "name": "Presión Alta Coordinada con Activador: El Delantero Marca el Inicio de la Cacería",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX448",
    "number": 448,
    "name": "Acoso Tras Pérdida en Banda: Encerrar al Rival Contra la Línea de Cal",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX449",
    "number": 449,
    "name": "Presión Inmediata con Anticipación del Interceptor en el Primer Pase Rival",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX450",
    "number": 450,
    "name": "Transición de Chip Mental: De Atacante a Defensor en Menos de Un Segundo",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX451",
    "number": 451,
    "name": "Presión Alta en Saque de Meta Rival con Marcaje al Hombre en Zonas Clave",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX452",
    "number": 452,
    "name": "Rondo 6v3 con Regla de Presión Feroz al Perder para Recuperar en la Zona",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX453",
    "number": 453,
    "name": "Presión Asfixiante en Tres Cuartos con Cierre de Línea Central por los Medios",
    "category": "07. Defensa",
    "subcategory": "Presión Alta Tras Pérdida",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en reacción inmediata tras pérdida, acoso y reducción de espacios, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "presión alta tras pérdida",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX454",
    "number": 454,
    "name": "Cobertura Defensiva en Pareja de Centrales: Uno Salta y el Otro Guarda la Espalda",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX455",
    "number": 455,
    "name": "Permuta Inmediata cuando el Lateral es Superado en Velocidad por Banda",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX456",
    "number": 456,
    "name": "Triángulo Defensivo de Coberturas entre Central, Lateral y Mediocentro",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX457",
    "number": 457,
    "name": "Cobertura al Mediocentro que Sale a Presionar en Zona Central",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX458",
    "number": 458,
    "name": "Doble Cobertura ante Extremo Desequilibrante en Situación de 2v1 Defensivo",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX459",
    "number": 459,
    "name": "Permuta Defensiva tras Desdoble del Lateral Rival para No Dejar Hueco Libre",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX460",
    "number": 460,
    "name": "Cobertura Escalonada en Situación de 3v3 con Basculación Sincronizada",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX461",
    "number": 461,
    "name": "Mecanismo de Ayuda Defensiva Interior cuando el Rival Rompe la Primera Línea",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX462",
    "number": 462,
    "name": "Cobertura del Central Lejano cerrando la Diagonal ante Pase a la Espalda",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX463",
    "number": 463,
    "name": "Juego de Posición Defensivo con Relevos y Permutas Constantes ante Desmarques",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX464",
    "number": 464,
    "name": "Circuito Táctico de Coberturas en Cadena ante Progresión Lateral del Rival",
    "category": "07. Defensa",
    "subcategory": "Coberturas y Permutas",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en cobertura, permuta, relevo y equilibrio de bloque, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "coberturas y permutas",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX465",
    "number": 465,
    "name": "Organización Defensiva en Centro Lateral: Reparto de Marcas en la Caja",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX466",
    "number": 466,
    "name": "Despeje Orientado del Central ante Centro Tenso al Primer Palo",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX467",
    "number": 467,
    "name": "Defensa de Centro Pasado con Cierre del Lateral Opuesto Evitando Remate",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX468",
    "number": 468,
    "name": "Coordinación entre Centrales y Portero en Balones Aéreos Frontales",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX469",
    "number": 469,
    "name": "Defensa Zonal de Centros Laterales con Ataque al Balón en el Vértice del Área",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX470",
    "number": 470,
    "name": "Bloqueo Corporal Legal de Delanteros para No Dejar Rematar con Comodidad",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX471",
    "number": 471,
    "name": "Defensa de Centro Raso Retrasado con Cierre del Doble Pivote a la Medialuna",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX472",
    "number": 472,
    "name": "Despeje de Cabeza en Desplazamiento Hacia Delante ante Centro Lateral",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX473",
    "number": 473,
    "name": "Defensa de Córner con Estructura Mixta: 4 Zonales y 3 al Hombre",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX474",
    "number": 474,
    "name": "Defensa de Segunda Jugada tras Despeje Inicial en el Área Pequeña",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX475",
    "number": 475,
    "name": "Circuito de Resistencia Aérea con Despejes Consecutivos desde Ambas Bandas",
    "category": "07. Defensa",
    "subcategory": "Defensa de Centros al Área",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en defensa del área, despeje orientado y marcaje de rematadores, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "defensa de centros al área",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX476",
    "number": 476,
    "name": "Achique de Bloque Defensivo ante Pase Atrás del Adversario",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX477",
    "number": 477,
    "name": "Reducción de Espacios hacia Delante al Observar al Rival de Espaldas",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX478",
    "number": 478,
    "name": "Achique Agresivo tras Despeje Defensivo para Dejar en Fuera de Juego al Rival",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX479",
    "number": 479,
    "name": "Presión Hacia Delante de los Mediocentros para Comprimir el Campo a 30 Metros",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX480",
    "number": 480,
    "name": "Achique Sincronizado de las Tres Líneas al Gritar la Voz de Orden \"¡SALIMOS!\"",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX481",
    "number": 481,
    "name": "Reducción Espacial Defensiva para Ahogar la Circulación en Zona Media",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX482",
    "number": 482,
    "name": "Achique Defensivo tras Balón Dividido Ganado en Primera Instancia",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX483",
    "number": 483,
    "name": "Juego Condicionado con Líneas Marcadas que Deben Superarse al Adelantar el Bloque",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX484",
    "number": 484,
    "name": "Achique hacia Delante con Vigilancia Estricta de la Espalda ante Balón Descubierto",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX485",
    "number": 485,
    "name": "Entrenamiento de Sincronía Defensiva: Salir Juntos sin Romper el Fuera de Juego",
    "category": "07. Defensa",
    "subcategory": "Achique hacia Delante",
    "objetivoPrincipal": "Fortalecer la solidez colectiva e individual en achique hacia delante, compresión de líneas y fuera de juego, reduciendo las opciones ofensivas del rival y protegiendo la meta.",
    "objetivoTecnico": "Perfilar el cuerpo con el centro de gravedad bajo, temporizar, interceptar pases y realizar despejes orientados hacia zonas seguras.",
    "objetivoTatico": "Mantener la línea compacta, coordinar basculaciones y coberturas, y reconocer cuándo apretar hacia delante o replegar al espacio.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 16,
    "jugadoresLabel": "11–15",
    "duracion": "20 min",
    "duracionMinutes": 20,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "10 conos de delimitación, petos de 2 colores, balones reglamentarios, portería oficial.",
    "organizacion": "Medio campo defensivo delimitado con sectores para marcar las distancias entre líneas y corredores exteriores.",
    "desarrollo": "El bloque defensivo se organiza para responder a las diferentes situaciones de ataque rival, aplicando principios de contención, cobertura y repliegue coordinado.",
    "pasoAPaso": [
      "1. Organización: Situar a la línea defensiva y medios en su zona de partida; los atacantes inician desde la divisoria.",
      "2. Posición Inicial: Defensores con postura activa, perfilados y comunicándose constantemente.",
      "3. Inicio: El equipo atacante inicia la circulación; el bloque bascula hacia la zona del balón.",
      "4. Intervención: Al saltar un defensor a la marca, los compañeros cierran pasillos interiores y aseguran la cobertura.",
      "5. Recuperación y Salida: Tras interceptar o despejar, achicar hacia delante y buscar un pase de seguridad hacia bandas."
    ],
    "puntosClave": [
      "Balón cubierto: la línea achica hacia delante; balón descubierto: la línea repliega al espacio.",
      "Perfil corporal en diagonal para poder correr hacia atrás y hacia delante con facilidad.",
      "Comunicación constante del central líder para marcar cuándo salir o replegar.",
      "No perder la referencia de la marca individual mientras se atiende al balón."
    ],
    "erroresFrecuentes": [
      "Mirar solo el balón descuidando el desmarque del atacante a la espalda.",
      "Entrar al bulto a pies juntos facilitando el regate o autopase del rival.",
      "Romper la línea defensiva quedándose descolgado y habilitando el fuera de juego."
    ],
    "correcciones": [
      "\"Gira el cuello cada dos segundos: balón y marca, nunca solo el balón.\"",
      "\"Baja la cadera, aguanta con pasitos cortos y espera que él dé el toque largo.\"",
      "\"¡Línea junta! Si tu compañero sale, tú cierras su espalda, no te quedes mirando.\""
    ],
    "variacionFacil": "Reducir el número de atacantes rivales o limitar su velocidad de juego.",
    "variacionDificil": "Atacantes con libertad absoluta de movimientos o permitir incorporaciones de segunda línea.",
    "progresion": "Incorporar contraataque inmediato tras robo para trabajar la transición ofensiva.",
    "regresion": "Trabajar los movimientos de basculación en seco sin balón para mecanizar las distancias.",
    "posiciones": "Defensas centrales, laterales, pivotes defensivos y mediocentros.",
    "tags": [
      "defensa",
      "achique hacia delante",
      "basculación",
      "cobertura",
      "duelo defensivo"
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
    "id": "EX486",
    "number": 486,
    "name": "Posesión 4v4 con Dos Comodines en Banda que Activan Transición Vertical al Robo",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX487",
    "number": 487,
    "name": "Juego Reducido 5v5+2 Comodines Exteriores: Cambio de Rol Inmediato al Perder",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX488",
    "number": 488,
    "name": "Transición Rápida Apoyándose en Comodín Neutral para Desahogar el Juego",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX489",
    "number": 489,
    "name": "Conservación en Espacio Reducido con Pase Rápido al Comodín tras Intercepción",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX490",
    "number": 490,
    "name": "Juego 3v3+2 en Pasillos con Búsqueda Inmediata del Comodín Profundo",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX491",
    "number": 491,
    "name": "Transición Ofensiva con Comodín de Espaldas que Descarga de Primer Toque",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX492",
    "number": 492,
    "name": "Doble Rondo 4v2 con Comodín Conector entre Cuadrantes al Producirse el Robo",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX493",
    "number": 493,
    "name": "Posesión 6v6 con Comodines en los Fondos para Finalizar en Mini-Porterías",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX494",
    "number": 494,
    "name": "Transición Defensiva Rápida Cerrando la Línea de Pase hacia los Comodines",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX495",
    "number": 495,
    "name": "Juego de Posición con Comodines Flotantes que Cambian de Equipo en Cada Robo",
    "category": "08. Transiciones",
    "subcategory": "Transición con Comodín Exterior",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en uso del comodín para desahogo y velocidad de activación tras robo, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición con comodín exterior",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX496",
    "number": 496,
    "name": "Contraataque en 3 Pases: Robo en Campo Propio y Pase Vertical al Extremo",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en velocidad vertical, desmarque en abanico y finalización en pocos segundos, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición ofensiva rápida (contraataque)",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX497",
    "number": 497,
    "name": "Transición Ofensiva en Menos de 8 Segundos con Despliegue en Abanico",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en velocidad vertical, desmarque en abanico y finalización en pocos segundos, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición ofensiva rápida (contraataque)",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX498",
    "number": 498,
    "name": "Despliegue Rápido 3v2 tras Robo en Medio Campo con Conducción Fijadora",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en velocidad vertical, desmarque en abanico y finalización en pocos segundos, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición ofensiva rápida (contraataque)",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX499",
    "number": 499,
    "name": "Contraataque de Primera Intención con Pase en Diagonal Rompiendo Línea Alta",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en velocidad vertical, desmarque en abanico y finalización en pocos segundos, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "12–14 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición ofensiva rápida (contraataque)",
      "presión tras pérdida",
      "velocidad táctica"
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
    "id": "EX500",
    "number": 500,
    "name": "Salida en Tromba 4v3 tras Saque de Córner Rival Defendido con Éxito",
    "category": "08. Transiciones",
    "subcategory": "Transición Ofensiva Rápida (Contraataque)",
    "objetivoPrincipal": "Dominar los momentos críticos de cambio de posesión en velocidad vertical, desmarque en abanico y finalización en pocos segundos, optimizando la velocidad de respuesta física y cognitiva.",
    "objetivoTecnico": "Pase vertical de primera intención, control orientado en velocidad, intercepciones y golpeos de finalización rápida.",
    "objetivoTatico": "Reducir el tiempo de transición, activar la vigilancia defensiva en posesión y explotar los espacios antes del repliegue rival.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 6,
    "jugadoresMax": 14,
    "jugadoresLabel": "11–15",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de 2 o 3 colores, 8 balones reglamentarios, mini-porterías y meta grande.",
    "organizacion": "Espacio de 40x30m con dos zonas de finalización y líneas intermedias para marcar el límite de tiempo de la transición.",
    "desarrollo": "Situaciones continuas de juego donde el robo del balón activa inmediatamente una regla de ataque vertical o una reacción defensiva colectiva.",
    "pasoAPaso": [
      "1. Organización: Disponer dos equipos en una zona central de posesión con metas u objetivos en los extremos.",
      "2. Posición Inicial: Equipo A mantiene la posesión mientras el Equipo B presiona activamente en bloque.",
      "3. Momento del Robo: Al recuperar el balón, el Equipo B tiene un máximo de 8 segundos para conectar o finalizar.",
      "4. Reacción Defensiva: El Equipo A aplica acoso inmediato de 5 segundos para evitar la progresión o repliega.",
      "5. Continuidad: Tras finalizar o salir el balón, se reinicia inmediatamente con un nuevo esférico sin descanso pasivo."
    ],
    "puntosClave": [
      "Cambio de mentalidad instantáneo: los primeros dos segundos tras la pérdida/recuperación deciden la jugada.",
      "Mirar hacia delante en el instante exacto de recuperar: el pase vertical castiga el desorden rival.",
      "Desmarques en abanico para ensanchar el campo y generar dudas en los defensores que repliegan.",
      "Vigilancia ofensiva: los jugadores que no intervienen en el ataque deben marcar a los delanteros rivales."
    ],
    "erroresFrecuentes": [
      "Lamentarse tras perder el balón en lugar de reaccionar de inmediato a la presión.",
      "Dar pases horizontales lentos tras recuperar que permiten al rival reorganizarse.",
      "Acompañar el contraataque trotando sin pisar el área rival."
    ],
    "correcciones": [
      "\"¡Prohibido quejarse! Pierdes el balón y te conviertes en un defensor de inmediato.\"",
      "\"El primer pase tras robar debe ser hacia delante, busca el espacio abierto.\"",
      "\"¡Sprint hacia el área! Quien acompaña la jugada es quien marca el gol del rechace.\""
    ],
    "variacionFacil": "Conceder 12 segundos para finalizar la transición y permitir comodín de apoyo.",
    "variacionDificil": "Limitar a 6 segundos el contraataque y restringir a 2 toques por jugador.",
    "progresion": "Añadir un defensor adicional en repliegue que parte con 5 metros de desventaja.",
    "regresion": "Mecanizar la salida de contraataque sin oposición activa inicial.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "transiciones",
      "contraataque",
      "transición ofensiva rápida (contraataque)",
      "presión tras pérdida",
      "velocidad táctica"
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
