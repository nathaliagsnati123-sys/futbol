import { Exercise } from '../../types';

export const exercises_10: Exercise[] = [
  {
    "id": "EX901",
    "number": 901,
    "name": "Pases Rasos Frontales en Carrera Sincronizada a 10 Metros de Distancia",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX902",
    "number": 902,
    "name": "Pase y Devolución con Desplazamiento Lateral Paralelo en Carril de 20 Metros",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX903",
    "number": 903,
    "name": "Pases Cruzados en Diagonal en Parejas Intercambiando Carriles en Carrera",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX904",
    "number": 904,
    "name": "Pase con Bote Amortiguado de Muslo y Devolución de Volea sin Tocar el Suelo",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX905",
    "number": 905,
    "name": "Pases Continuos a Un Toque Rodeando un Cono Central en Órbita Circular",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX906",
    "number": 906,
    "name": "Secuencia de Pases Corto-Largo en Tándem con Carrera Progresiva",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX907",
    "number": 907,
    "name": "Pase con la Zurda y Devolución con la Diestra en Movimiento Continuo",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX908",
    "number": 908,
    "name": "Pases en Ocho Alrededor de Dos Picas con Frecuencia Máxima de Contactos",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX909",
    "number": 909,
    "name": "Pases con Salto Previo de Mini-Valla por Ambos Miembros de la Pareja",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX910",
    "number": 910,
    "name": "Desafío de la Pareja: 50 Pases a Dos Toques en Carrera sin un Solo Error",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Pases Dinámicos con Movimiento Continuo",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante pases en movimiento continuo, sincronía de carrera y precisión recíproca.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "pases dinámicos con movimiento continuo",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX911",
    "number": 911,
    "name": "Duelo 1v1 en Cuadrado de 10x10m: El que Roba Pasa Inmediatamente a Atacar",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX912",
    "number": 912,
    "name": "Duelo 1v1 con Dos Mini-Porterías: Atacar una Meta y Defender la Otra al Perder",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX913",
    "number": 913,
    "name": "Duelo de Espaldas con Giro: Atacante Protege y Defensor Presiona sin Falta",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX914",
    "number": 914,
    "name": "1v1 Frontal con Finta Corporal Obligatoria antes de Traspasar la Línea de Meta",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX915",
    "number": 915,
    "name": "Duelo 1v1 con Balón Dividido Lanzado por el Entrenador: Sprint y Posesión",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX916",
    "number": 916,
    "name": "Duelo de Velocidad y Regate: Carrera en Paralelo y Corte Hacia Dentro",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX917",
    "number": 917,
    "name": "1v1 Continuo en Parejas: 3 Series de 30 Segundos de Máxima Agresividad Limpia",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX918",
    "number": 918,
    "name": "Duelo 1v1 Aéreo: Disputa de Balón Elevado con Salto y Amortiguación Orientada",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX919",
    "number": 919,
    "name": "Duelo 1v1 con Limitación de Tiempo: Solo 6 Segundos para Anotar o Quitar el Balón",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Duelo 1v1 con Cambio de Rol Inmediato",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante duelos 1v1 entre dos compañeros, cambio inmediato de rol y competitividad sana.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "duelo 1v1 con cambio de rol inmediato",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX920",
    "number": 920,
    "name": "Pared Clásica \"Toca y Vete\" a lo Largo de un Pasillo de 25 Metros",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX921",
    "number": 921,
    "name": "Pared con Devolución de Exterior del Pie y Aceleración al Espacio Libre",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX922",
    "number": 922,
    "name": "Pared Doble Escalonada con Finta Previa de Desmarque de Apoyo",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX923",
    "number": 923,
    "name": "Pared en Velocidad con Superación de Tres Siluetas Defensivas Estáticas",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX924",
    "number": 924,
    "name": "Pared Aérea con Pase Picado por Encima de un Cono Alto y Carrera",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX925",
    "number": 925,
    "name": "Pared con Tercer Apoyo Simulado y Finalización Conjunta en Mini-Portería",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX926",
    "number": 926,
    "name": "Pared en Banda: Lateral Sube, Extremo Descarga y Lateral Centra al Espacio",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX927",
    "number": 927,
    "name": "Secuencia Continua de Paredes Alternas: Ida con Paredes Cortas, Vuelta con Paredes Medias",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX928",
    "number": 928,
    "name": "Pared bajo Acoso Pasivo del Compañero que Rota tras Cada Recorrido",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Paredes en Progresión por Carril",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante paredes en progresión, timing de entrega y carrera al espacio libre.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "paredes en progresión por carril",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX929",
    "number": 929,
    "name": "Tándem Asistente-Rematador: Conducción a Banda, Centro y Remate al Primer Palo",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX930",
    "number": 930,
    "name": "Centro Tenso Retrasado al Punto de Penalti con Entrada Sincronizada del Compañero",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX931",
    "number": 931,
    "name": "Centro de Rosca Exterior desde Tres Cuartos y Remate de Cabeza Picado",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX932",
    "number": 932,
    "name": "Pase de la Muerte en Línea de Fondo con Freno y Tiro Cruzado del Compañero",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX933",
    "number": 933,
    "name": "Centro Aéreo Pasado al Segundo Palo con Remate de Volea sin Caer el Balón",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX934",
    "number": 934,
    "name": "Tándem con Intercambio de Roles: El que Centra Pasa a Rematar en la Siguiente Jugada",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX935",
    "number": 935,
    "name": "Centro Tras Pared en Banda con Remate en Carrera Anticipando al Portero",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX936",
    "number": 936,
    "name": "Centro Rasante Fuerte con Desvío Sutil de Taco o Puntera al Palo Corto",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX937",
    "number": 937,
    "name": "Circuito de 5 Centros y Remates Consecutivos Evaluando la Efectividad del Dúo",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Centro y Remate en Tándem",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante asociación en centros y remates, conexión visual y timing de llegada.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "centro y remate en tándem",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX938",
    "number": 938,
    "name": "Pugna Corporal en Espacio de 3x3m: 15 Segundos de Protección sin Ceder el Balón",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX939",
    "number": 939,
    "name": "Uso Legal de los Brazos y Centro de Gravedad Bajo para Bloquear al Compañero",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX940",
    "number": 940,
    "name": "El Reloj de Protección: Girar con el Balón Protegido Manteniendo al Rival en la Espalda",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX941",
    "number": 941,
    "name": "Disputa de Balón Suelto con Carga de Hombro con Hombro Reglamentaria",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX942",
    "number": 942,
    "name": "Protección de Balón con Finta de Salida Hacia un Lado y Escape por el Opuesto",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX943",
    "number": 943,
    "name": "Despojo Limpio: Meter el Pie en el Momento del Toque de la Suela sin Cometer Falta",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX944",
    "number": 944,
    "name": "Duelo de Fuerza Específica por Parejas con Balón en Juego en la Línea de Banda",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX945",
    "number": 945,
    "name": "Protección y Descarga: Aguantar la Carga 3 Segundos y Conectar Pase Seguro",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX946",
    "number": 946,
    "name": "Competición de Parejas de Aguante y Despojo con Puntuación por Robos Limpios",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Protección y Despojo entre Dos",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante protección del balón con el cuerpo, juego de espaldas y recuperación limpia.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "protección y despojo entre dos",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX947",
    "number": 947,
    "name": "Desmarques Cruzados en X entre Dos Delanteros para Descolocar a los Centrales",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX948",
    "number": 948,
    "name": "Doble Ruptura Coordinada: Uno Viene en Apoyo en Corto y el Otro Rompe en Profundidad",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX949",
    "number": 949,
    "name": "Desmarque en Tijera en la Frontal del Área para Abrir Pasillo de Disparo Directo",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX950",
    "number": 950,
    "name": "Desmarque Ciego del Compañero que Cruza por Detrás del Portador del Balón",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX951",
    "number": 951,
    "name": "Sincronización de Carreras Cruzadas ante Balón Parado Lateral",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX952",
    "number": 952,
    "name": "Desmarque de Arrastre: Atraer al Defensor hacia Banda para Dejar el Centro al Compañero",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX953",
    "number": 953,
    "name": "Desmarques Cruzados con Recepción Orientada y Disparo Cruzado a Puerta",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX954",
    "number": 954,
    "name": "Ejercicio de Lectura en Pareja: Moverse al Espacio Opuesto que Elige el Compañero",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX955",
    "number": 955,
    "name": "Circuito de Automatismos de Desmarques Cruzados con Finalización Rápida",
    "category": "15. Ejercicios en Parejas",
    "subcategory": "Desmarques Cruzados en Pareja",
    "objetivoPrincipal": "Fomentar la complicidad, la sincronización motriz y la sinergia táctica en parejas mediante desmarques cruzados, movimientos complementarios y desajuste defensivo.",
    "objetivoTecnico": "Pases con tensión adecuada para el compañero, golpeos de volea, controles con apoyo orientado y remates precisos.",
    "objetivoTatico": "Coordinar movimientos complementarios (si tú vas yo vengo), comunicar verbalmente y resolver duelos de a dos.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 2,
    "jugadoresLabel": "2",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 balón reglamentario por pareja, 6 conos, petos de diferente color para el 1v1.",
    "organizacion": "Pasillo o sector de 20x15m donde la pareja interactúa con espacio suficiente para desplazarse en velocidad.",
    "desarrollo": "Los dos futbolistas cooperan o compiten directamente realizando secuencias intensas con intercambio constante de roles.",
    "pasoAPaso": [
      "1. Organización: La pareja se ubica a la distancia requerida frente a frente o en carrera paralela.",
      "2. Puesta en Juego: Inicio de la combinación con pase raso con la tensión exacta al pie bueno del compañero.",
      "3. Coordinación: Ajustar la velocidad de carrera y la distancia para que el pase no quede ni corto ni largo.",
      "4. Acción Determinante: Culminar con la pared, el duelo 1v1 o el centro y remate con máxima determinación.",
      "5. Cambio de Rol: Invertir inmediatamente las posiciones (asistente pasa a rematador o atacante a defensor)."
    ],
    "puntosClave": [
      "Comunicación constante: pedir el balón con la voz y marcar con la mano dónde se quiere el pase.",
      "Puntualidad en el desmarque: no salir antes de tiempo para evitar fueras de juego o pérdidas de inercia.",
      "Empatía en el pase: enviar un pase fácil de controlar y con la fuerza justa para la carrera.",
      "Intensidad y respeto mutuo en los duelos de protección y despojo."
    ],
    "erroresFrecuentes": [
      "Dar pases flojos que obligan al compañero a frenar su carrera bruscamente.",
      "No hablar ni comunicarse durante la secuencia.",
      "Perder la distancia óptima entre ambos amontonándose en el mismo espacio."
    ],
    "correcciones": [
      "\"Pon el pase delante de su carrera, no a sus talones; hazle correr hacia delante.\"",
      "\"¡Habla! Pide el balón con tu nombre o avisa si tiene marca a la espalda.\"",
      "\"Mantened la distancia de 8 a 10 metros entre ambos para tener ángulo de pase.\""
    ],
    "variacionFacil": "Realizar la secuencia al trote suave sin oposición defensiva.",
    "variacionDificil": "Obligar a ejecutar todos los pases al primer toque o con tiempo límite de 5 segundos.",
    "progresion": "Incorporar una portería con portero para finalizar la jugada de la pareja.",
    "regresion": "Trabajar los pases en estático reduciendo la distancia a 5 metros.",
    "posiciones": "Cualquier demarcación por parejas (centrales, laterales-extremos, delanteros).",
    "tags": [
      "parejas",
      "dúos",
      "desmarques cruzados en pareja",
      "cooperación",
      "duelos en pareja"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 25,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 75,
          "y": 35,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 75,
          "y": 65,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 30,
          "y": 50
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 70,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 33,
          "y": 48
        },
        {
          "id": "pass_ab",
          "type": "arrow",
          "arrowType": "pass",
          "x": 34,
          "y": 48,
          "targetX": 66,
          "targetY": 48
        },
        {
          "id": "run_a",
          "type": "arrow",
          "arrowType": "run",
          "x": 32,
          "y": 52,
          "targetX": 48,
          "targetY": 38
        },
        {
          "id": "pass_return",
          "type": "arrow",
          "arrowType": "pass",
          "x": 67,
          "y": 52,
          "targetX": 50,
          "targetY": 40
        }
      ]
    }
  },
  {
    "id": "EX956",
    "number": 956,
    "name": "Juego Posicional 7v7+3 en Cuadrante de 35x35m con Comodín Interior y Dos en Amplitud",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX957",
    "number": 957,
    "name": "7v7+3 con Tres Zonas de Juego y Regla de Conexión Obligatoria con el Pivote Central",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX958",
    "number": 958,
    "name": "Posesión 7v7+3 con Limitación de Dos Toques para Estimular la Circulación a Máxima Velocidad",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX959",
    "number": 959,
    "name": "Juego Posicional con Transición Tras Robo: Comodines Apoyan Inmediatamente al Recuperador",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX960",
    "number": 960,
    "name": "7v7+3 con Metas de Pase en los Cuatro Costados del Cuadrado Táctico",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX961",
    "number": 961,
    "name": "Juego de Posición con Prohibición de Pases Flotados: Todo el Juego a Ras de Suelo",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX962",
    "number": 962,
    "name": "7v7+3 con Asignación de Roles Específicos Reproduciendo el Sistema 1-4-3-3",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX963",
    "number": 963,
    "name": "Torneo de Posesión Posicional 7v7+3 con Series de 4 Minutos y Pulsómetros",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Posición 7v7 + 3 Comodines",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante juego de posición 7v7+3, superioridad con comodines, circulación y tercer hombre, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de posición 7v7 + 3 comodines",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX964",
    "number": 964,
    "name": "Fútbol 6v6 con 4 Mini-Porterías en los Vértices para Fomentar Cambios de Orientación",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX965",
    "number": 965,
    "name": "Juego Colectivo con 4 Porterías Pequeñas y Regla de Gol de Primer Toque",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX966",
    "number": 966,
    "name": "4 Porterías con Asignación de Metas: El Equipo Anota si Conduce a Través de Ellas",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX967",
    "number": 967,
    "name": "Fútbol Reducido 7v7 con Mini-Porterías Invertidas para Obligar a Ganar la Espalda",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX968",
    "number": 968,
    "name": "Juego Colectivo con Rotación de Metas Defendidas a la Señal Sonora del Entrenador",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX969",
    "number": 969,
    "name": "Fútbol Reducido con 4 Metas y Bono de 2 Puntos si el Centro Proviene de Banda",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX970",
    "number": 970,
    "name": "Competición 6v6 con Mini-Porterías y Tiempo de Ataque Limitado a 15 Segundos",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX971",
    "number": 971,
    "name": "Juego de 4 Metas con Vigilancia Defensiva Continua para Evitar el Pase Cruzado",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Fútbol Reducido con 4 Porterías Pequeñas",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante cambios de sentido, basculación de bloque hacia lado débil y precisión en metas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "fútbol reducido con 4 porterías pequeñas",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX972",
    "number": 972,
    "name": "Oleadas Continuas de 5 Atacantes contra 4 Defensores + Portero en Medio Campo",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX973",
    "number": 973,
    "name": "Oleada 5v4 con Incorporación del Lateral por Sorpresa desde la Línea Divisoria",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX974",
    "number": 974,
    "name": "5v4 en Tres Cuartos: Fijar a los Dos Centrales y Desbordar por Fuera en 2v1",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX975",
    "number": 975,
    "name": "Oleada de Ataque 5v4 con Finalización Rápida en Menos de 10 Segundos de Posesión",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX976",
    "number": 976,
    "name": "5v4 con Transición Defensiva Inmediata: Si los 4 Defensores Roban, Atacan Dos Mini-Porterías",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX977",
    "number": 977,
    "name": "Oleadas Asimétricas 5v4 Cargando el Ataque por el Perfil Izquierdo del Rival",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX978",
    "number": 978,
    "name": "5v4 con Desmarques Coordinados de Doble Punta y Entrada de Segunda Línea",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX979",
    "number": 979,
    "name": "Circuito de Tres Oleadas Consecutivas 5v4 con Nuevos Jugadores de Refresco",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Oleadas Ofensivas 5v4 en Medio Campo",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante superioridad ofensiva 5v4, fijar y dividir, desbordes y finalización de oleadas, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "oleadas ofensivas 5v4 en medio campo",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX980",
    "number": 980,
    "name": "Partido 8v8 en Espacio Área a Área con Porteros Oficiales y Fuera de Juego Real",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX981",
    "number": 981,
    "name": "8v8 con Línea de 3 Defensas, 3 Medios y 2 Puntas contra Sistema 1-4-2-1",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX982",
    "number": 982,
    "name": "Simulación de Partido 8v8 con Cronómetro Oficial y Reglas Reales de Competición",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX983",
    "number": 983,
    "name": "Partido 8v8 con Escenario de Marcador: Equipo Rojo Defiende 1-0 con 10 Minutos por Delante",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX984",
    "number": 984,
    "name": "8v8 con Campo Estrecho para Exigir Agilidad Mental y Duelos Físicos Continuos",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX985",
    "number": 985,
    "name": "Partido Colectivo 8v8 con Dos Balones en Reserva para Cero Tiempos Muertos",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX986",
    "number": 986,
    "name": "Simulación 8v8 con Paradas Tácticas Pedagógicas para Corregir Basculaciones",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Simulación Real de Partido 8v8",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante partido real 8v8, aplicación global del modelo de juego y lectura competitiva, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "simulación real de partido 8v8",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX987",
    "number": 987,
    "name": "Fútbol Colectivo Dividido en 3 Pasillos Verticales con Ocupación Obligatoria de Carriles",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX988",
    "number": 988,
    "name": "Juego Sectorial: Los Defensores Solo Pueden Conectar con los Medios en el Carril Central",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX989",
    "number": 989,
    "name": "Atracción en Pasillo Interior y Progresión Explosiva por los Carriles Laterales",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX990",
    "number": 990,
    "name": "Juego de Sector con Prohibición de Más de Tres Jugadores en el Mismo Pasillo",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX991",
    "number": 991,
    "name": "Fútbol Sectorizado con Zonas de Aislamiento 1v1 para Extremos en los Carriles Exteriores",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX992",
    "number": 992,
    "name": "Basculación Sectorial Colectiva: Desplazar Todo el Bloque Dejando un Carril Libre",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX993",
    "number": 993,
    "name": "Juego Colectivo por Carriles con Salto de Línea en Diagonal hacia la Meta",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Juego de Sector por Carriles",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante orden sectorial en pasillos verticales, equilibrio posicional y juego de carriles, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "juego de sector por carriles",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX994",
    "number": 994,
    "name": "Partido Formal 11v11 Condicionado a Máximo 3 Toques por Jugador en Todo el Terreno",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX995",
    "number": 995,
    "name": "Partido a 3 Toques en Zona de Inicio y 2 Toques en Zona de Creación con Finalización Libre",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX996",
    "number": 996,
    "name": "Juego Colectivo con Regla de Oro: Gol Válido solo si Previamente Hubo una Pared a 1 Toque",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX997",
    "number": 997,
    "name": "Partido Condicionado con Presión Alta Asfixiante Aprovechando la Limitación de Toques",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX998",
    "number": 998,
    "name": "Fútbol Colectivo a 3 Toques con Penalización de Falta Indirecta al Cuarto Toque",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX999",
    "number": 999,
    "name": "Partido Condicionado con Pase Atrás Prohibido en los Últimos 30 Metros de Campo",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "Adultos",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
    "id": "EX1000",
    "number": 1000,
    "name": "11v11 con Regla de Toques Libres Exclusivamente para el Delantero Dentro del Área",
    "category": "16. Ejercicios Colectivos",
    "subcategory": "Partido Condicionado a 3 Toques",
    "objetivoPrincipal": "Consolidar los principios tácticos del modelo de juego colectivo mediante velocidad mental, dinamismo colectivo a 3 toques y fluidez del bloque, integrando a todo el equipo.",
    "objetivoTecnico": "Pases de máxima precisión bajo fatiga, controles orientados en espacio congestionado y golpeos eficaces en situación real.",
    "objetivoTatico": "Sincronizar basculaciones, escalonamientos y coberturas entre líneas, e interpretar los momentos del partido con madurez colectiva.",
    "edad": "15–17 años",
    "nivel": "Avanzado",
    "jugadoresMin": 14,
    "jugadoresMax": 22,
    "jugadoresLabel": "16+",
    "duracion": "25 min",
    "duracionMinutes": 25,
    "intensidad": "Alta",
    "espacio": "Grande",
    "materiales": "Campo grande o reglamentario, 2 porterías oficiales, petos de 2 colores, 12 balones oficiales, picas para marcar sectores.",
    "organizacion": "Terreno de juego amplio estructurado en pasillos o zonas de progresión según la consigna táctica.",
    "desarrollo": "Partido o situación colectiva formal donde los futbolistas aplican el plan de partido bajo condiciones reglamentarias provocadoras.",
    "pasoAPaso": [
      "1. Charla Táctica Inicial: El cuerpo técnico define el sistema de juego y los condicionantes del partido.",
      "2. Alineación y Ocupación: Cada equipo se distribuye sobre el terreno respetando su estructura posicional.",
      "3. Inicio y Fluidez: Puesta en marcha con arbitraje real para sancionar fueras de juego y faltas.",
      "4. Correcciones en Vivo: Instrucciones verbales dinámicas del técnico sin detener el ritmo salvo necesidad pedagógica.",
      "5. Reflexión Final: Análisis de las tomas de decisiones colectivas y refuerzo de los patrones exitosos."
    ],
    "puntosClave": [
      "Mantener las distancias de bloque (nunca más de 30-35 metros entre la última y la primera línea).",
      "Voz de mando clara y constante de los líderes en la zaga y el centro del campo.",
      "Interpretar cuándo acelerar la jugada y cuándo temporizar mediante posesión segura.",
      "Solidaridad de los atacantes en el trabajo de presión y repliegue defensivo."
    ],
    "erroresFrecuentes": [
      "Desconexión de los delanteros tras la pérdida del balón dejando solo a los medios.",
      "Precipitarse lanzando balones largos sin sentido cuando el rival está bien replegado.",
      "Romper la línea del fuera de juego por falta de sincronización del lateral."
    ],
    "correcciones": [
      "\"¡Equipo corto! Si el central achica, los delanteros presionan hacia atrás.\"",
      "\"Paciencia: mueve el balón de lado a lado hasta que el rival deje un hueco.\"",
      "\"¡Línea defensiva alineada! Mirad al central que manda y tirad el fuera de juego juntos.\""
    ],
    "variacionFacil": "Permitir comodines neutrales de apoyo para facilitar la salida de balón.",
    "variacionDificil": "Reducir el número de toques permitidos a 2 toques en todo el terreno de juego.",
    "progresion": "Simular situaciones de marcador adverso con inferioridad numérica temporal.",
    "regresion": "Reducir las dimensiones a medio campo para facilitar la compacidad defensiva.",
    "posiciones": "Plantilla completa: porteros, defensas, medios y delanteros.",
    "tags": [
      "colectivo",
      "partido",
      "partido condicionado a 3 toques",
      "táctica colectiva",
      "modelo de juego"
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
