import { Exercise } from '../../types';

export const exercises_4: Exercise[] = [
  {
    "id": "EX301",
    "number": 301,
    "name": "Pared Frontal con Oposición Pasiva de Central y Tiro Rápido",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Maximizar la efectividad en asociación en tres cuartos y tiro rápido tras pared, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "tiro tras pared frontal",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX302",
    "number": 302,
    "name": "Secuencia Continua de Paredes Frontales con Finalización Alternada",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Maximizar la efectividad en asociación en tres cuartos y tiro rápido tras pared, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "tiro tras pared frontal",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX303",
    "number": 303,
    "name": "Desmarque de Anticipación al Primer Palo y Remate de Primer Toque",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX304",
    "number": 304,
    "name": "Centro Tenso Lateral con Llegada en Carrera y Toque Cruzado de Empeine",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX305",
    "number": 305,
    "name": "Centro Pasado con Doble Entrada: Finta al Segundo Palo y Corte al Primero",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX306",
    "number": 306,
    "name": "Remate de Cabeza Picado al Primer Palo tras Centro de Extremo a Pierna Cambiada",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX307",
    "number": 307,
    "name": "Centro Raso Fuerte a la Zona de Remate Corto con Desvío Sutil",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX308",
    "number": 308,
    "name": "Llegada de Segunda Línea al Primer Palo tras Desmarque de Arrastre del 9",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX309",
    "number": 309,
    "name": "Centro desde la Línea de Fondo (Pase Atrás) hacia el Vértice del Área Pequeña",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX310",
    "number": 310,
    "name": "Duelo Aéreo con Central al Primer Palo y Remate al Palo Cercano",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX311",
    "number": 311,
    "name": "Centro con Rosca Exterior y Remate de Volea al Primer Palo",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX312",
    "number": 312,
    "name": "Desmarque en Diagonal Corta hacia el Primer Palo tras Saque de Banda",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX313",
    "number": 313,
    "name": "Centro Lateral tras 1v1 y Definición de Puntera Anticipando al Defensa",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX314",
    "number": 314,
    "name": "Remate al Primer Palo con Oposición de Dos Centrales en Marca Zonal",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX315",
    "number": 315,
    "name": "Circuito de Doble Centro: Primer Palo Tenso y Segundo Palo por Alto",
    "category": "05. Finalización y Tiro",
    "subcategory": "Centros y Remates al Primer Palo",
    "objetivoPrincipal": "Maximizar la efectividad en anticipación, ataque al espacio y remate de primer contacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "centros y remates al primer palo",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX316",
    "number": 316,
    "name": "Ataque al Rebote del Portero tras Disparo Frontal de Media Distancia",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX317",
    "number": 317,
    "name": "Segunda Jugada tras Saque de Córner con Disparo Inmediato en la Frontal",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX318",
    "number": 318,
    "name": "Rebote tras Tiro al Poste: Reacción Rápida y Definición al Arco Vacío",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX319",
    "number": 319,
    "name": "Disputa de Segunda Jugada Aérea con Peinada y Remate en Semivolea",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX320",
    "number": 320,
    "name": "Rebote en Barrera de Falta Directa y Definición con Pie No Hábil",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX321",
    "number": 321,
    "name": "Ataque Rápido al Rechace Central del Defensa con Disparo Rasante",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX322",
    "number": 322,
    "name": "Duelo de Reacción en el Área Pequeña tras Balón Dividido Suelto",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX323",
    "number": 323,
    "name": "Segunda Jugada tras Despeje de Puños del Portero con Volea a Puerta",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX324",
    "number": 324,
    "name": "Transición de Remate: Disparo Inicial, Rebote y Segundo Remate en 3 Segundos",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX325",
    "number": 325,
    "name": "Ataque al Balón Suelto en el Punto de Penalti tras Centro Tocado",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX326",
    "number": 326,
    "name": "Reacción al Rechace con Presión Inmediata y Disparo Cruzado",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX327",
    "number": 327,
    "name": "Segunda Jugada tras Centro Rechazado con Incorporación del Lateral",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX328",
    "number": 328,
    "name": "Doble Oportunidad de Gol: Rebote Forzado y Remate en Desequilibrio",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX329",
    "number": 329,
    "name": "Circuito de Agilidad con Caza de Rebotes en Diferentes Zonas del Área",
    "category": "05. Finalización y Tiro",
    "subcategory": "Segunda Jugada y Rebote",
    "objetivoPrincipal": "Maximizar la efectividad en percepción, anticipación de rebotes y velocidad de reacción, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "segunda jugada y rebote",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX330",
    "number": 330,
    "name": "Disparo Potente de Empeine Total desde 22 Metros tras Conducción Frontal",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX331",
    "number": 331,
    "name": "Tiro Colocado con Interior y Rosca a la Escuadra Contraria",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX332",
    "number": 332,
    "name": "Disparo de Media Distancia tras Amago de Pase y Acomodo con la Suela",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX333",
    "number": 333,
    "name": "Tiro Lejano a Bote Pronto tras Despeje de la Defensa Rival",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX334",
    "number": 334,
    "name": "Disparo Sorpresivo con Punterazo Preciso desde el Borde de la Medialuna",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX335",
    "number": 335,
    "name": "Golpeo de Media Distancia con Pierna Débil tras Recorte Hacia Fuera",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX336",
    "number": 336,
    "name": "Tiro Potente Rasante al Poste Corto Aprovechando la Pantalla del Delantero",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX337",
    "number": 337,
    "name": "Disparo tras Pase Atrás del Extremo desde Línea de Fondo a 20 Metros",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX338",
    "number": 338,
    "name": "Concurso de Precisión de Disparo de Media Distancia con Dianas en Portería",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX339",
    "number": 339,
    "name": "Disparo Lejano tras Giro Rápido de 180 Grados en Zona de Tres Cuartos",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX340",
    "number": 340,
    "name": "Golpeo de Media Distancia con Barrera Móvil de Defensores en Salida",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX341",
    "number": 341,
    "name": "Disparo Cruzado Fuerte a Media Altura tras Carrera en Diagonal",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX342",
    "number": 342,
    "name": "Circuito Técnico de Dos Disparos Lejanos Consecutivos desde Distintos Ángulos",
    "category": "05. Finalización y Tiro",
    "subcategory": "Disparo de Media Distancia",
    "objetivoPrincipal": "Maximizar la efectividad en potencia, colocación, armada de pierna y ángulo de tiro, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "disparo de media distancia",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX343",
    "number": 343,
    "name": "Mano a Mano 1v1 con Portero: Definición por Abajo al Palo Largo",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX344",
    "number": 344,
    "name": "Picadita Sutil (Vaselina) ante la Salida a Ras de Suelo del Guardameta",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX345",
    "number": 345,
    "name": "Regate al Portero hacia el Exterior y Definición a Portería Vacía",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX346",
    "number": 346,
    "name": "Mano a Mano con Acoso de Central desde Atrás: Toque Rápido y Cruzado",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX347",
    "number": 347,
    "name": "Finalización de Primer Toque en Mano a Mano tras Pase en Profundidad",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX348",
    "number": 348,
    "name": "Mano a Mano con Amago de Tiro, Frenada y Toque Suave al Rincón",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX349",
    "number": 349,
    "name": "Duelo Delantero vs Portero en Carrera de 20 Metros con Límite de 3 Toques",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX350",
    "number": 350,
    "name": "Mano a Mano tras Desmarque de Ruptura Rompiendo el Fuera de Juego",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX351",
    "number": 351,
    "name": "Definición con la Puntera Anticipando el Achique en Cruz del Portero",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX352",
    "number": 352,
    "name": "Mano a Mano con Opción de Pase de la Muerte a Compañero que Acompaña",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX353",
    "number": 353,
    "name": "Definición en Mano a Mano desde Ángulo Cerrado en Banda Izquierda",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX354",
    "number": 354,
    "name": "Mano a Mano tras Error en Salida del Rival: Calma y Colocación al Rincón",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX355",
    "number": 355,
    "name": "Circuito de Tres Manos a Manos Consecutivos con Fatiga Progresiva",
    "category": "05. Finalización y Tiro",
    "subcategory": "Mano a Mano con Portero",
    "objetivoPrincipal": "Maximizar la efectividad en lectura de la salida del portero, templanza y recursos de definición, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
    "objetivoTecnico": "Armar la pierna con velocidad, colocar el pie de apoyo firme y orientar la superficie de contacto al punto débil del portero.",
    "objetivoTatico": "Elegir la mejor opción de remate según el perfil corporal, el ángulo de tiro y el posicionamiento del guardameta y defensores.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "1 portería reglamentaria con portero, 12 balones, 8 conos, 4 picas o muñecos de barrera.",
    "organizacion": "Área grande y zona frontal de tres cuartos. Pasillos de entrada para pasadores y finalizadores con rotación fluida.",
    "desarrollo": "Secuencias dinámicas de remate a puerta donde los futbolistas combinan previamente y atacan el área con determinación para finalizar en pocos toques.",
    "pasoAPaso": [
      "1. Organización: Situar al portero en meta y a los pasadores/asistentes en las bandas o frontal del área.",
      "2. Posición Inicial: Los delanteros esperan su turno en el semicírculo o posición de desmarque.",
      "3. Inicio: Pase de habilitación inicial desde la zona de creación hacia el rematador o pared previa.",
      "4. Remate: El atacante ejecuta la finalización con el gesto técnico idóneo sin dudar ni demorar el disparo.",
      "5. Rotación: El rematador recoge un balón si es necesario y rota al puesto de pasador o a la fila contraria."
    ],
    "puntosClave": [
      "No perder de vista la posición del portero antes de golpear.",
      "Inclinar ligeramente el tronco hacia delante para evitar que el disparo se marche alto.",
      "Fijar el tobillo con firmeza en el momento exacto del impacto con el balón.",
      "Atacar el rechace inmediatamente tras rematar por si queda un segundo balón."
    ],
    "erroresFrecuentes": [
      "Echar el cuerpo excesivamente hacia atrás en el golpeo elevando el tiro.",
      "Dudar en el último instante entre potencia o colocación.",
      "Rematar sin mirar la portería o impactar mordido el esférico."
    ],
    "correcciones": [
      "\"Pasa el pecho por encima del balón para que salga raso y con violencia.\"",
      "\"Elige tu rincón antes de armar la pierna y confía en tu golpeo.\"",
      "\"Bloquea el tobillo y golpea con el empeine limpio en el centro del esférico.\""
    ],
    "variacionFacil": "Permitir un toque de control antes de disparar y reducir la oposición defensiva.",
    "variacionDificil": "Obligar a rematar de primer toque o introducir un defensor en persecución activa.",
    "progresion": "Añadir un central que dispute el centro o rebote en tiempo real.",
    "regresion": "Remates estáticos sin portero a portería vacía para ajustar la precisión.",
    "posiciones": "Delanteros centros, extremos, mediapuntas y mediocentros llegadores.",
    "tags": [
      "finalización",
      "tiro",
      "mano a mano con portero",
      "gol",
      "definición"
    ],
    "pitchDiagram": {
      "type": "penalty_box",
      "elements": [
        {
          "id": "goal_main",
          "type": "goal",
          "x": 50,
          "y": 10
        },
        {
          "id": "gk",
          "type": "player",
          "team": "gk",
          "label": "1",
          "x": 50,
          "y": 16
        },
        {
          "id": "att1",
          "type": "player",
          "team": "home",
          "label": "9",
          "x": 48,
          "y": 45
        },
        {
          "id": "att2",
          "type": "player",
          "team": "home",
          "label": "10",
          "x": 62,
          "y": 60
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "4",
          "x": 45,
          "y": 30
        },
        {
          "id": "c1",
          "type": "cone",
          "x": 30,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 70,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 60,
          "y": 58
        },
        {
          "id": "pass_arr",
          "type": "arrow",
          "arrowType": "pass",
          "x": 60,
          "y": 57,
          "targetX": 50,
          "targetY": 46
        },
        {
          "id": "shot_arr",
          "type": "arrow",
          "arrowType": "shot",
          "x": 49,
          "y": 44,
          "targetX": 49,
          "targetY": 14
        }
      ]
    }
  },
  {
    "id": "EX356",
    "number": 356,
    "name": "Estructura 4-3-3: Circulación en U y Fijación por Dentro para Progresar por Fuera",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX357",
    "number": 357,
    "name": "Juego de Posición en Rombo con Mediocentro Organizador y Dos Interiores Escalados",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX358",
    "number": 358,
    "name": "Ataque Posicional contra Bloque Medio: Paciencia y Movilización del Rival",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX359",
    "number": 359,
    "name": "Ocupación de los 5 Carriles Ofensivos con Intercambio de Posición entre Extremo y Lateral",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX360",
    "number": 360,
    "name": "Ataque Posicional con Doble Pivote: Uno Equilibra y Otro Se Desprende",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX361",
    "number": 361,
    "name": "Juego Posicional 7v7+3 con Tres Zonas Horizontales y Regla de Conexión Interior",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX362",
    "number": 362,
    "name": "Ataque Posicional con Falso Nueve que Desciende para Crear Superioridad en la Medular",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX363",
    "number": 363,
    "name": "Basculación Ofensiva Rápida para Encontrar al Hombre Libre en Lado Débil",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX364",
    "number": 364,
    "name": "Estructura de Ataque en 3-4-2-1 con Mediapuntas en los Intervalos Defensivos",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX365",
    "number": 365,
    "name": "Ataque Posicional con Fijación de Centrales y Pase Vertical Rompiendo Bloque",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX366",
    "number": 366,
    "name": "Ataque Organizado con Ruptura Sorpresiva del Interior a la Espalda de la Defensa",
    "category": "06. Ataque",
    "subcategory": "Ataque Posicional Organizado",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ataque posicional, ocupación de carriles y paciencia asociativa, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "ataque posicional organizado",
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
    "id": "EX367",
    "number": 367,
    "name": "Desmarque de Ruptura al Espacio a la Espalda de la Línea de 4 Defensiva",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX368",
    "number": 368,
    "name": "Desmarque en Diagonal de Fuera hacia Dentro del Extremo a Pierna Cambiada",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX369",
    "number": 369,
    "name": "Desmarque de Ruptura del Delantero Centro al Intervalo entre Central y Lateral",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX370",
    "number": 370,
    "name": "Desmarque Ciego del Interior que Rompe desde Atrás a Balón Cruzado",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX371",
    "number": 371,
    "name": "Timing de Ruptura: Arrancar en Línea con el Defensor y Acelerar con el Pase",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX372",
    "number": 372,
    "name": "Desmarque de Apoyo Falso Seguido de Ruptura Vertical al Espacio Abandonado",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX373",
    "number": 373,
    "name": "Doble Desmarque de Ruptura Coordinado entre Dos Puntas para Abrir Pasillo Central",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX374",
    "number": 374,
    "name": "Desmarque de Ruptura del Lateral que Desdobla por Banda a Máxima Velocidad",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX375",
    "number": 375,
    "name": "Ruptura en Profundidad tras Amago de Conducción del Mediocentro Organizador",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX376",
    "number": 376,
    "name": "Desmarque de Ruptura con Cambio de Dirección para Romper la Trampa del Fuera de Juego",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX377",
    "number": 377,
    "name": "Circuito de Pase Profundo y Ruptura Sincronizada con Finalización en Carrera",
    "category": "06. Ataque",
    "subcategory": "Desmarques de Ruptura",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en desmarques de ruptura, timing y ataque a la última línea, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "desmarques de ruptura",
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
    "id": "EX378",
    "number": 378,
    "name": "Oleadas Ofensivas 3v2 con Transición Rápida y Fijar al Impar",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX379",
    "number": 379,
    "name": "Situación de 4v3 en Mitad de Campo con Búsqueda del Hombre Desmarcado en Banda",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX380",
    "number": 380,
    "name": "3v2 Frontal con Límite de 8 Segundos para Definir ante Portería Grande",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX381",
    "number": 381,
    "name": "Superioridad 4v3 con Incorporación Tardía del Mediocentro desde Atrás",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX382",
    "number": 382,
    "name": "3v2 en Pasillo Central: Conducir para Atraer al Central y Filtrar al Espacio",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX383",
    "number": 383,
    "name": "Oleadas Continuas de 3v2 a 2v3: El que Falla Pasa a Defender",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX384",
    "number": 384,
    "name": "4v3 con Dos Porterías Pequeñas y Una Grande para Fomentar Variedad de Elección",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX385",
    "number": 385,
    "name": "3v2 con Inicio desde Saque de Meta Rápido y Salida en Superioridad",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX386",
    "number": 386,
    "name": "4v3 en Espacio de 35x25m con Regla de No Más de Dos Toques por Jugador",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX387",
    "number": 387,
    "name": "Superioridad 3v2 con Balón Dividido Inicial para Medir Reacción",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX388",
    "number": 388,
    "name": "4v3 con Comodín Ofensivo Central para Asegurar el Pase de Continuidad",
    "category": "06. Ataque",
    "subcategory": "Superioridades Ofensivas 3v2 y 4v3",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en fijar y dividir, superioridad numérica y toma de decisiones en ventaja, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "superioridades ofensivas 3v2 y 4v3",
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
    "id": "EX389",
    "number": 389,
    "name": "Centro Lateral tras Desborde con Llegada Sincronizada al Primer y Segundo Palo",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX390",
    "number": 390,
    "name": "Centro Retrasado al Punto de Penalti con Arrastre Previo de los Dos Centrales",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX391",
    "number": 391,
    "name": "Centro Tenso a Media Altura con Remate de Primer Toque y Acompañamiento al Rechace",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX392",
    "number": 392,
    "name": "Doble Llegada: Delantero Centro al Primer Poste y Extremo Opuesto al Segundo",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX393",
    "number": 393,
    "name": "Centro de Rosca Exterior desde Tres Cuartos hacia la Entrada del Interior Lejano",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX394",
    "number": 394,
    "name": "Ataque por Banda con Centro Pasado y Reincorporación del Lateral para el Disparo",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX395",
    "number": 395,
    "name": "Centro Tocado al Segundo Palo con Cabezazo Hacia Atrás para el Rematador Frontal",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX396",
    "number": 396,
    "name": "Oleada de Centros Alternos desde Ambas Bandas con Cuatro Rematadores en Caja",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX397",
    "number": 397,
    "name": "Centro Rasante tras Llegada a Línea de Cal y Desmarque en S del Delantero",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX398",
    "number": 398,
    "name": "Llegada al Área con Tres Escalones Ofensivos: Corto, Punto de Penalti y Balcón",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX399",
    "number": 399,
    "name": "Centro tras Saque de Falta Lateral con Pantalla Ofensiva y Remate en Segundo Palo",
    "category": "06. Ataque",
    "subcategory": "Centros Laterales con Doble Llegada",
    "objetivoPrincipal": "Dominar los principios tácticos ofensivos en ocupación del área, sincronización de llegadas y calidad del centro, favoreciendo la progresión colectiva y la creación de ocasiones de gol.",
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
      "centros laterales con doble llegada",
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
    "id": "EX400",
    "number": 400,
    "name": "Ataque Rápido con Pase Largo a Banda y Doblaje Exterior del Lateral Ofensivo",
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
  }
];
