import { Exercise } from '../../types';

export const exercises_1: Exercise[] = [
  {
    "id": "EX001",
    "number": 1,
    "name": "Rueda de Movilidad Pélvica y Cadera con Pase Tenso Frontal",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX002",
    "number": 2,
    "name": "Circuito de Movilidad Escapular y Tronco con Pared a Dos Toques",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX003",
    "number": 3,
    "name": "Desplazamiento Dinámico en Z con Skiping y Control Orientado",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX004",
    "number": 4,
    "name": "Movilidad Coxofemoral con Aperturas Dinámicas y Pase de Primer Toque",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX005",
    "number": 5,
    "name": "Paso Dinámico sobre Vallas Bajas con Devolución de Empeine Aéreo",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX006",
    "number": 6,
    "name": "Movilidad en Estocada Frontal con Rotación y Pase al Espacio",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX007",
    "number": 7,
    "name": "Circuito de Isquiotibiales Dinámicos con Control con Planta y Entrega",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX008",
    "number": 8,
    "name": "Movilidad Articular por Parejas con Giros de 180 Grados y Conducción",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX009",
    "number": 9,
    "name": "Circuito de Activación Articular Multidireccional con Balón en Mano y Suelo",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX010",
    "number": 10,
    "name": "Activación Articular con Carrera Progresiva y Pase Corto Rasante",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX011",
    "number": 11,
    "name": "Movilidad Dinámica de Tobillos y Gemelos con Finta Previa al Pase",
    "category": "01. Calentamiento",
    "subcategory": "Movilidad Articular Dinámica",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante movilidad activa con balón, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "10 setas de delimitación, 5 mini-vallas de 15 cm, 6 balones reglamentarios.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (movilidad activa con balón) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "movilidad articular dinámica",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX012",
    "number": 12,
    "name": "Activación Rápida con Cambios de Apoyo en Escalera y Pase Tensado",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX013",
    "number": 13,
    "name": "Juego de Reacción al Color con Balón y Frenada en Zona Neutral",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX014",
    "number": 14,
    "name": "Activación con Saltos Unipodales y Estabilización previa a la Conducción",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX015",
    "number": 15,
    "name": "Circuito de Agilidad Corta de 3 Metros con Salida Explosiva y Pase Raso",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX016",
    "number": 16,
    "name": "Activación Neuromuscular en Rombo con Giros Rápidos de Cadera",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX017",
    "number": 17,
    "name": "Juego de Espejo por Parejas con Reacción Visual y Pase Cruzado",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX018",
    "number": 18,
    "name": "Activación con Mini-Sprints de 5 Metros y Devolución al Primer Toque",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX019",
    "number": 19,
    "name": "Circuito Neuromuscular con Apoyos Cruzados y Control en Semigiro",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX020",
    "number": 20,
    "name": "Activación de Cadena Posterior con Trote Progresivo y Pase al Hueco",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX021",
    "number": 21,
    "name": "Coordinación de Pies Rápidos entre Picas y Cambio de Orientación",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX022",
    "number": 22,
    "name": "Activación Propioceptiva con Desequilibrio Leve y Devolución con Interior",
    "category": "01. Calentamiento",
    "subcategory": "Activación Neuromuscular",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante neuromuscular y apoyos, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "Escalera de coordinación, 8 conos chinos, 6 balones, 4 picas verticales.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (neuromuscular y apoyos) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "activación neuromuscular",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX023",
    "number": 23,
    "name": "Rondo Lúdico 4v1 con Obligación de Pase con Pierna Menos Hábil",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX024",
    "number": 24,
    "name": "Posesión Dinámica 3v3 en Cuadrado de 15x15 con Comodín Interior",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX025",
    "number": 25,
    "name": "Juego de Conservación 4v4 a Dos Toques con Zonas de Seguridad",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX026",
    "number": 26,
    "name": "Posesión de Entrada en Calor 5v2 con Regla de No Devolver al Mismo",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX027",
    "number": 27,
    "name": "Juego de los 10 Pases en Grupo Dividido con Robo y Cambio de Rol",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX028",
    "number": 28,
    "name": "Posesión en Espacio Reducido con Mini-Porterías de Pase y Sin Oposición",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX029",
    "number": 29,
    "name": "Rondo Circular 6v2 con Dos Jugadores Dentro y Movilidad Perimetral",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX030",
    "number": 30,
    "name": "Juego de Posesión Ligera con Dos Balones Simultáneos para Foco Perceptivo",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX031",
    "number": 31,
    "name": "Posesión 4v2 con Transición Rápida al Recuperar hacia Cuadrante Vecino",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX032",
    "number": 32,
    "name": "Juego de Pases Libres por Grupos con Reconocimiento de Espacio Libre",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX033",
    "number": 33,
    "name": "Posesión 3v3+2 en Espacio Estrecho con Búsqueda Continua de Apoyo Corto",
    "category": "01. Calentamiento",
    "subcategory": "Juegos de Posesión Ligera",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante posesion ligera, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, petos de dos colores, 4 balones.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (posesion ligera) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "juegos de posesión ligera",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX034",
    "number": 34,
    "name": "Circuito en Cruz con Pase Diagonal y Desplazamiento al Vértice Opuesto",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX035",
    "number": 35,
    "name": "Rueda de Pases en Triángulo con Pared Frontal y Tercer Apoyo",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX036",
    "number": 36,
    "name": "Circuito en Y con Control Orientado y Apertura Hacia Banda",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX037",
    "number": 37,
    "name": "Circuito Técnico Cuadrangular con Pase Tenso y Giro con Planta",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX038",
    "number": 38,
    "name": "Rueda de Cuatro Estaciones con Conducción Rápida y Pase de Empeine",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX039",
    "number": 39,
    "name": "Circuito de Doble Pared con Intercambio de Posiciones y Trote Activo",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX040",
    "number": 40,
    "name": "Circuito en Estrella con Devolución de Primera y Carrera de Repliegue",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX041",
    "number": 41,
    "name": "Rueda Técnica con Pase Filtrado entre Picas y Desmarque Lateral",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX042",
    "number": 42,
    "name": "Circuito Dinámico en Zigzag con Slalom Suave y Pase al Pecho o Pie",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX043",
    "number": 43,
    "name": "Circuito Técnico en Doble Cuadrado con Pases Cruzados Simultáneos",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX044",
    "number": 44,
    "name": "Rueda Continua de Pases con Control Tras Finta de Recepción",
    "category": "01. Calentamiento",
    "subcategory": "Circuitos Técnicos Dinámicos",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante circuito tecnico dinamico, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "16 setas marcadoras, 6 picas, 8 balones de fútbol.",
    "organizacion": "Espacio de 20x20m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 20x20 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (circuito tecnico dinamico) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "circuitos técnicos dinámicos",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX045",
    "number": 45,
    "name": "Rondo Tradicional 4v2 con Limitación a 2 Toques Obligatorios",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX046",
    "number": 46,
    "name": "Rondo 5v2 con Comodín Flotante Central y Pases entre Defensores",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX047",
    "number": 47,
    "name": "Rondo 3v1 en Cuadrado Pequeño con Presión Activa a 1 Toque",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX048",
    "number": 48,
    "name": "Rondo 6v2 con Dos Zonas y Obligación de Saltar de Cuadrante al Quinto Pase",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX049",
    "number": 49,
    "name": "Rondo 4v1 de Reacción con Penalización de Flexiones tras Robo Limpio",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX050",
    "number": 50,
    "name": "Rondo 5v2 de Entrada en Calor con Conteo Rápido de Pases Consecutivos",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX051",
    "number": 51,
    "name": "Rondo 4v2 Móvil con Defensores Intercambiables al Tocar el Balón",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX052",
    "number": 52,
    "name": "Rondo Triangular 3v1 con Apoyo Inmediato en Vértices Desocupados",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX053",
    "number": 53,
    "name": "Rondo 6v3 en Cuadrado de 18x18m con Circulación Perimetral Constante",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX054",
    "number": 54,
    "name": "Rondo 4v2 con Portería de Precisión para el Defensor al Recuperar",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX055",
    "number": 55,
    "name": "Rondo Doble 3v1 Simultáneo con Cambio de Balón a la Señal del Entrenador",
    "category": "01. Calentamiento",
    "subcategory": "Rondos de Entrada en Calor",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante rondo de calentamiento, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "8 conos de esquina, petos diferenciadores, 4 balones.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (rondo de calentamiento) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "rondos de entrada en calor",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX056",
    "number": 56,
    "name": "Pisar y Rodar el Balón entre Conos con Apoyos Rápidos Unipodales",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX057",
    "number": 57,
    "name": "Coordinación Bipodal con Pase Alternado de Interior y Exterior",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX058",
    "number": 58,
    "name": "Desplazamiento en Ocho con Balón en la Suela y Parada Seca",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX059",
    "number": 59,
    "name": "Circuito de Frecuencia de Apoyos con Toques Cortos y Salto de Valla",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX060",
    "number": 60,
    "name": "Coordinación de Pies Rápidos con Balón Parado y Pase Posterior a la Carrera",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX061",
    "number": 61,
    "name": "Trote Dinámico con Toques Aéreos Controlados con Muslo y Empeine",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX062",
    "number": 62,
    "name": "Slalom de Coordinación de Espaldas al Balón con Giro y Pase Rápido",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX063",
    "number": 63,
    "name": "Circuito de Agilidad Coordinativa con Doble Toque entre Aros y Salida",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX064",
    "number": 64,
    "name": "Coordinación Rítmica en Escalera con Balón en Parejas a la Devolución",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Ajustar la precisión del pase a ras de suelo y la velocidad del primer toque orientador bajo ritmo creciente.",
    "objetivoTatico": "Generar líneas de pase dinámicas, perfilar el cuerpo antes de recibir y reconocer el espacio libre inmediato.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX065",
    "number": 65,
    "name": "Circuito de Activación Coordinativa de Tobillo y Rodilla con Esférico",
    "category": "01. Calentamiento",
    "subcategory": "Coordinación con Balón",
    "objetivoPrincipal": "Preparar de manera progresiva el sistema osteoarticular y neuromuscular mediante coordinacion motriz con balon, optimizando la predisposición física y cognitiva para la sesión.",
    "objetivoTecnico": "Familiarizarse con el contacto limpio con el empeine e interior del pie, manteniendo la mirada alta.",
    "objetivoTatico": "Comprender la importancia de ofrecerse libre de marcas y cooperar con el compañero más cercano.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "12 min",
    "duracionMinutes": 12,
    "intensidad": "Baja",
    "espacio": "Pequeño",
    "materiales": "6 aros, 10 setas de colores, 6 balones reglamentarios, escalera.",
    "organizacion": "Espacio de 12x12m dividido en cuadrantes o estaciones según la rotación de grupos de 4 a 6 jugadores.",
    "desarrollo": "Los futbolistas realizan series continuas combinando desplazamientos coordinativos y entregas técnicas de balón. Se busca elevar la frecuencia cardíaca de forma controlada y activar los grupos musculares diana.",
    "pasoAPaso": [
      "1. Organización: Disponer un espacio delimitado de 12x12 metros con setas y asignar los jugadores en grupos de trabajo.",
      "2. Posición Inicial: Los futbolistas se distribuyen según las estaciones marcadas manteniendo una distancia fluida de 5 a 10 metros entre sí.",
      "3. Inicio: Comienza la secuencia con un pase inicial raso y activación motriz hacia la primera zona de desplazamiento.",
      "4. Desarrollo: Se encadenan los movimientos previstos (coordinacion motriz con balon) asegurando que cada jugador complete el ciclo sin detener el flujo del ejercicio.",
      "5. Rotación y Carga: Cambiar de rol o dirección del circuito cada 2-3 minutos con pausas breves de hidratación activa."
    ],
    "puntosClave": [
      "Mantener una postura corporal activa sobre la punta de los pies para reaccionar antes.",
      "Golpear con la superficie adecuada (interior para precisión, empeine para tensión firme).",
      "Comunicación constante llamando al compañero por su nombre antes de la entrega.",
      "Respetar las distancias de separación para evitar aglomeraciones en las estaciones."
    ],
    "erroresFrecuentes": [
      "Realizar las acciones con excesiva rigidez postural o sin flexión de rodillas.",
      "Pases lentos o mordidos que obligan al receptor a frenar su desplazamiento dinámico.",
      "Mirar exclusivamente al suelo sin escanear la posición del siguiente compañero."
    ],
    "correcciones": [
      "\"Flexiona ligeramente las rodillas y mantén el tronco equilibrado para mayor fluidez.\"",
      "\"Impacta el balón en el centro con el pie firme; busca que ruede limpio sobre el césped.\"",
      "\"Levanta la cabeza justo antes de conectar para ver el desmarque de tu compañero.\""
    ],
    "variacionFacil": "Aumentar las dimensiones del espacio en 3 metros o permitir un toque extra de acomodo.",
    "variacionDificil": "Obligar a jugar a un solo toque o añadir un jugador comodín de presión pasiva.",
    "progresion": "Introducir un balón adicional al circuito para exigir mayor velocidad de procesamiento visual.",
    "regresion": "Reducir la velocidad de carrera y permitir control orientado obligatorio antes del pase.",
    "posiciones": "Todas las posiciones de campo.",
    "tags": [
      "calentamiento",
      "activación",
      "coordinación con balón",
      "movilidad",
      "pase"
    ],
    "pitchDiagram": {
      "type": "rondos_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 28,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 72,
          "y": 28,
          "color": "#10b981"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 72,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 28,
          "y": 72,
          "color": "#10b981"
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "A",
          "x": 50,
          "y": 24
        },
        {
          "id": "p2",
          "type": "player",
          "team": "home",
          "label": "B",
          "x": 76,
          "y": 50
        },
        {
          "id": "p3",
          "type": "player",
          "team": "home",
          "label": "C",
          "x": 50,
          "y": 76
        },
        {
          "id": "p4",
          "type": "player",
          "team": "home",
          "label": "D",
          "x": 24,
          "y": 50
        },
        {
          "id": "def1",
          "type": "player",
          "team": "away",
          "label": "X",
          "x": 46,
          "y": 48
        },
        {
          "id": "def2",
          "type": "player",
          "team": "away",
          "label": "Y",
          "x": 54,
          "y": 52
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 48,
          "y": 27
        },
        {
          "id": "arr1",
          "type": "arrow",
          "arrowType": "pass",
          "x": 50,
          "y": 28,
          "targetX": 72,
          "targetY": 48
        }
      ]
    }
  },
  {
    "id": "EX066",
    "number": 66,
    "name": "Control de Pecho Amortiguado con Caída y Disparo a Mini-Portería",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX067",
    "number": 67,
    "name": "Dominio Aéreo con Muslo y Conducción Rápida en Zona Delimitada",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX068",
    "number": 68,
    "name": "Control Aéreo de Espaldas con Giro y Pase Rasante al Pasillo",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX069",
    "number": 69,
    "name": "Malabarismos Controlados con Cambios de Pie y Empeine Total",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX070",
    "number": 70,
    "name": "Recepción de Balón Alto con la Suela y Frenada Inmediata",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX071",
    "number": 71,
    "name": "Control Orientado Aéreo con el Interior para Superar Obstáculo Vertical",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX072",
    "number": 72,
    "name": "Circuito de Balones Aéreos Frontales con Control y Salida en Conducción",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX073",
    "number": 73,
    "name": "Amortiguación de Balón Alto con Empeine Exterior en Espacio Reducido",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX074",
    "number": 74,
    "name": "Control Aéreo tras Desplazamiento Lateral Rápido entre Picas",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX075",
    "number": 75,
    "name": "Doble Dominio Aéreo sin Caída con Cabeza y Finalización de Volea Suave",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX076",
    "number": 76,
    "name": "Control Aéreo con Presión Pasiva Dorsal y Protección con Brazos",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX077",
    "number": 77,
    "name": "Secuencia de Toques Aéreos con Dificultad Creciente y Entrega de Precisión",
    "category": "02. Técnica Individual",
    "subcategory": "Dominio Aéreo",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en dominio aéreo y amortiguación, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "6 balones, 8 conos altos, 2 mini-porterías o dianas.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en dominio aéreo y amortiguación, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (dominio aéreo y amortiguación) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "dominio aéreo",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX078",
    "number": 78,
    "name": "Control Orientado con Interior hacia el Espacio Libre en Cuadrado de Postes",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX079",
    "number": 79,
    "name": "Control Orientado con Exterior para Cambiar de Dirección en 90 Grados",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX080",
    "number": 80,
    "name": "Control con la Suela en Arrastre hacia Atrás y Aceleración Frontal",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX081",
    "number": 81,
    "name": "Control Orientado en Semigiro tras Pase Tenso de Compañero",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX082",
    "number": 82,
    "name": "Control Orientado con Salto de Línea Imaginaria entre Dos Conos",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX083",
    "number": 83,
    "name": "Doble Control Orientado Alternando Pierna Hábil y Menos Hábil",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX084",
    "number": 84,
    "name": "Control Orientado en Carrera para No Perder Inercia de Desplazamiento",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX085",
    "number": 85,
    "name": "Recepción Perfilada hacia Delante y Pase Inmediato de Empeine",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX086",
    "number": 86,
    "name": "Control Orientado con Finta de Cuerpo Previa para Despistar Marca",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX087",
    "number": 87,
    "name": "Control Orientado en Espacio Estrecho con Salida por Cuatro Puertas",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX088",
    "number": 88,
    "name": "Control Orientado Bajo Presión Frontal con Salida Lateral Rápida",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX089",
    "number": 89,
    "name": "Circuito en Cruz con Control Orientado hacia la Siguiente Estación",
    "category": "02. Técnica Individual",
    "subcategory": "Control Orientado",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en control orientado y perfil corporal, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Pequeño",
    "materiales": "10 setas de colores, 4 mini-vallas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en control orientado y perfil corporal, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (control orientado y perfil corporal) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "control orientado",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX090",
    "number": 90,
    "name": "Conducción en Eslalon con Empeine Exterior e Interior Alternados",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX091",
    "number": 91,
    "name": "Conducción en Línea Recta con Frenada en Seco y Cambio de Dirección",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX092",
    "number": 92,
    "name": "Giro Cruyff con Interior del Pie tras Conducción Intensa",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX093",
    "number": 93,
    "name": "Conducción Rápida con la Suela hacia Atrás y Giro de 180 Grados",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX094",
    "number": 94,
    "name": "Conducción con Cambio de Ritmo Brutal al Superar Zona de Picas",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX095",
    "number": 95,
    "name": "Eslalon Asimétrico de Conducción con Conos a Distintas Distancias",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX096",
    "number": 96,
    "name": "Conducción Circular con Protección de Balón y Brazo de Apoyo",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX097",
    "number": 97,
    "name": "Conducción en Laberinto de Setas con Toques Cortos y Cabeza Erguida",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX098",
    "number": 98,
    "name": "Giro en Gancho con Empeine Exterior y Aceleración en Diagonal",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX099",
    "number": 99,
    "name": "Conducción Libre en Cuadrado Evitando Colisiones con Compañeros",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  },
  {
    "id": "EX100",
    "number": 100,
    "name": "Conducción con Finta de Parada y Arranque Explosivo hacia Adelante",
    "category": "02. Técnica Individual",
    "subcategory": "Conducción y Giros",
    "objetivoPrincipal": "Perfeccionar la calidad gestual individual en conducción pegada al pie y giros técnicos, incrementando la eficacia técnica en situaciones reales de juego.",
    "objetivoTecnico": "Dominar el contacto preciso con la superficie seleccionada, controlando la fuerza, la inercia del cuerpo y la postura biomecánica.",
    "objetivoTatico": "Generar tiempo y espacio individual ante la presencia de un adversario, facilitando la continuidad de la jugada colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 1,
    "jugadoresMax": 6,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Medio",
    "materiales": "12 picas o conos altos, 10 setas, 6 balones.",
    "organizacion": "Circuito o pasillo técnico de dimensiones adaptadas con rotación individual o por parejas para maximizar repeticiones con balón.",
    "desarrollo": "El futbolista realiza repeticiones analíticas o aplicadas centradas en conducción pegada al pie y giros técnicos, buscando la automatización del patrón motor con retroalimentación inmediata del entrenador.",
    "pasoAPaso": [
      "1. Organización: Delimitar un corredor o cuadrante de trabajo con setas e instalar los elementos auxiliares (picas o mini-porterías).",
      "2. Posición Inicial: El jugador se sitúa con balón en el punto de partida, perfilado según la dirección de la acción técnica.",
      "3. Inicio: Inicia el gesto técnico con una aproximación controlada y mirada periférica activa.",
      "4. Ejecución: Realizar la acción técnica principal (conducción pegada al pie y giros técnicos) con la máxima precisión y velocidad gestual posible.",
      "5. Finalización y Retorno: Concluir con un pase o disparo al objetivo y regresar trotando por la zona de recuperación activa."
    ],
    "puntosClave": [
      "Apoyar el pie no ejecutor firmemente a unos 15-20 cm del balón para mantener el equilibrio.",
      "Acompañar la acción con los brazos para estabilizar el centro de gravedad.",
      "Acelerar el movimiento inmediatamente después de ejecutar el gesto técnico o regate.",
      "Mantener la vista al frente entre toques para no perder la orientación espacial."
    ],
    "erroresFrecuentes": [
      "Tocar el balón demasiado lejos del cuerpo perdiendo el control inmediato del mismo.",
      "Mirar fijamente el esférico en todo momento sin levantar la vista.",
      "Realizar el gesto técnico a velocidad constante sin cambio de ritmo."
    ],
    "correcciones": [
      "\"Lleva el balón pegado a la bota; toques cortos y controlados.\"",
      "\"Levanta la mirada una fracción de segundo antes de ejecutar la acción.\"",
      "\"Cambia de marcha: el amago es pausado, pero la salida debe ser explosiva.\""
    ],
    "variacionFacil": "Reducir la velocidad de ejecución y permitir un toque intermedio de reajuste.",
    "variacionDificil": "Obligar a utilizar exclusivamente la pierna menos hábil o añadir oposición activa.",
    "progresion": "Añadir un defensor semicondicionado que obligue a tomar una decisión de escape inmediata.",
    "regresion": "Eliminar el obstáculo móvil y trabajar de forma estática o a ritmo lento.",
    "posiciones": "Jugadores de todas las demarcaciones.",
    "tags": [
      "técnica individual",
      "conducción y giros",
      "control",
      "conducción",
      "gesto técnico"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 25,
          "y": 50,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 40,
          "y": 35,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 55,
          "y": 65,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 70,
          "y": 40,
          "color": "#f59e0b"
        },
        {
          "id": "goal_mini",
          "type": "goal",
          "x": 88,
          "y": 50
        },
        {
          "id": "p1",
          "type": "player",
          "team": "home",
          "label": "1",
          "x": 15,
          "y": 50
        },
        {
          "id": "ball1",
          "type": "ball",
          "x": 18,
          "y": 48
        },
        {
          "id": "arr_slalom1",
          "type": "arrow",
          "arrowType": "run",
          "x": 18,
          "y": 48,
          "targetX": 38,
          "targetY": 38
        },
        {
          "id": "arr_slalom2",
          "type": "arrow",
          "arrowType": "run",
          "x": 42,
          "y": 38,
          "targetX": 53,
          "targetY": 62
        },
        {
          "id": "arr_finish",
          "type": "arrow",
          "arrowType": "shot",
          "x": 72,
          "y": 42,
          "targetX": 86,
          "targetY": 49
        }
      ]
    }
  }
];
