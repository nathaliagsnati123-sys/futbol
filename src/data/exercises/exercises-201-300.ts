import { Exercise } from '../../types';

export const exercises_3: Exercise[] = [
  {
    "id": "EX201",
    "number": 201,
    "name": "Pase Picado por Encima de la Línea Defensiva hacia el Desmarque de Ruptura",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX202",
    "number": 202,
    "name": "Juego en Cuadrícula con Filtración de Balón entre Dos Zonas Prohibidas",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX203",
    "number": 203,
    "name": "Pase Filtrado tras Finta de Tiro con el Empeine en la Frontal",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX204",
    "number": 204,
    "name": "Circuito de Salida de Balón con Pase Medio al Pecho o Pies del Extremo",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX205",
    "number": 205,
    "name": "Pase Diagonal Filtrado entre Lateral y Central para la Entrada de Segunda Línea",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX206",
    "number": 206,
    "name": "Juego de Posesión con Gol Válido Únicamente tras Pase Filtrado entre Conos",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX207",
    "number": 207,
    "name": "Pase Medio Raso con Efecto para Superar la Presión por el Exterior",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX208",
    "number": 208,
    "name": "Circuito de Transición con Pase Filtrado Inmediato tras Recuperación en Bloque",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX209",
    "number": 209,
    "name": "Pase Filtrado en Profundidad tras Amago de Conducción hacia Atrás",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX210",
    "number": 210,
    "name": "Rueda Técnica de Pase Medio con Control Orientado hacia la Otra Portería",
    "category": "03. Pase y Recepción",
    "subcategory": "Pase Medio y Filtrado",
    "objetivoPrincipal": "Mejorar la eficacia en pase filtrado y visión de intervalos, sincronizando la fuerza del golpeo con la velocidad de desplazamiento del receptor.",
    "objetivoTecnico": "Asegurar el impacto limpio con el empeine interior, pie de apoyo equilibrado y orientación adecuada del cuerpo.",
    "objetivoTatico": "Generar ventajas posicionales mediante pases con intención, superando líneas de marcaje y favoreciendo la fluidez colectiva.",
    "edad": "Adultos",
    "nivel": "Intermedio",
    "jugadoresMin": 4,
    "jugadoresMax": 12,
    "jugadoresLabel": "6–10",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Media",
    "espacio": "Medio",
    "materiales": "12 conos de señalización, 6 picas, 8 balones de entrenamiento, petos.",
    "organizacion": "Espacio de 20x20m o medio campo dividido en pasillos y zonas para dar orden táctico y facilitar líneas de pase limpias.",
    "desarrollo": "Los futbolistas ejecutan patrones de pase y recepción con movilidad constante. Se incide en no esperar el balón estático y en ofrecer apoyos en ángulos adecuados.",
    "pasoAPaso": [
      "1. Organización: Disponer el espacio con las estaciones o cuadrantes de pase debidamente delimitados.",
      "2. Posición Inicial: Los jugadores ocupan las posiciones de pase, apoyo o comodín con un balón por estación.",
      "3. Inicio: El portador inicia la acción con un pase tenso y raso hacia el compañero señalado.",
      "4. Interacción: El receptor se perfila, ejecuta el control orientado o devolución de primera y habilita al tercer hombre o siguiente estación.",
      "5. Rotación: Cada jugador sigue la dirección de su pase o rota según la secuencia establecida cada 3 minutos."
    ],
    "puntosClave": [
      "Tensión correcta en el pase: ni tan flojo que muera en el camino ni tan fuerte que sea incontrolable.",
      "Apertura de cadera para ver el destino del balón antes de que llegue a los pies.",
      "Movilidad inmediata tras dar el pase para ofrecer una nueva línea de apoyo.",
      "Comunicación verbal activa solicitando el balón al pie o al espacio."
    ],
    "erroresFrecuentes": [
      "Golpear el balón por debajo elevándolo involuntariamente.",
      "Esperar el balón parado en vez de dar dos pasos al frente para atacarlo.",
      "Recibir con el cuerpo cerrado de espaldas a la progresión del juego."
    ],
    "correcciones": [
      "\"Golpea el balón en su ecuador con el pie firme para que viaje raso.\"",
      "\"Da dos pasos hacia el balón antes del contacto; sé tú quien lo busque.\"",
      "\"Abre el cuerpo y mira hacia delante antes de controlar.\""
    ],
    "variacionFacil": "Aumentar la distancia entre marcas defensivas o permitir 2 toques libres.",
    "variacionDificil": "Limitar a un solo toque o añadir defensores activos que presionen a 2 metros.",
    "progresion": "Incorporar oposición activa completa con conteo de pases consecutivos para puntuar.",
    "regresion": "Realizar la rueda sin defensores, centrándose exclusivamente en la precisión del pase.",
    "posiciones": "Centrocampistas, centrales, laterales y extremos.",
    "tags": [
      "pase",
      "recepción",
      "pase medio y filtrado",
      "precisión",
      "combinación"
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
    "id": "EX211",
    "number": 211,
    "name": "Duelo 1v1 en Cuadrado de 10x10m con Salida a Cuatro Mini-Porterías",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX212",
    "number": 212,
    "name": "1v1 en Jaula Reducida con Límite de 8 Segundos para Definir",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX213",
    "number": 213,
    "name": "Duelo 1v1 con Entrada Lateral y Finta para Buscar Espacio de Tiro",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX214",
    "number": 214,
    "name": "1v1 en Rombo con Porterías Opuestas y Cambio Rápido de Rol al Perder",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX215",
    "number": 215,
    "name": "Duelo en Espacio Reducido con Comodín de Apoyo de Pared Exterior",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX216",
    "number": 216,
    "name": "1v1 Frontal con Regla de Superación Obligatoria antes de Poder Rematar",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX217",
    "number": 217,
    "name": "Duelo en Círculo Central Reducido con Protección y Regate de Salida",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX218",
    "number": 218,
    "name": "1v1 con Presión Inmediata a la Espalda tras Saque de Banda Rápido",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX219",
    "number": 219,
    "name": "Duelo en Rectángulo Estrecho con Puerta Central que Duplica Puntos",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX220",
    "number": 220,
    "name": "1v1 de Agilidad y Cambio de Dirección con Dos Balones Alternados",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX221",
    "number": 221,
    "name": "Duelo Técnico en Espacio Reducido con Mini-Porterías de Espaldas",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Duelos en Espacio Reducido",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en duelo 1v1 en espacios estrechos.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "duelos en espacio reducido",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX222",
    "number": 222,
    "name": "Regate con Finta Exterior y Cambio de Ritmo ante Oponente Frontal",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX223",
    "number": 223,
    "name": "Finta de Cuerpo hacia Dentro y Desborde Explosivo por Fuera con Empeine",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX224",
    "number": 224,
    "name": "Amago de Disparo y Salida en Regate Exterior hacia la Línea de Fondo",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX225",
    "number": 225,
    "name": "Doble Finta Exterior con Salida por la Pierna Menos Hábil",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX226",
    "number": 226,
    "name": "Regate con Paso en Tijera Exterior y Aceleración en Diagonal",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX227",
    "number": 227,
    "name": "Finta de Apoyo con la Suela y Toque Brusco hacia el Exterior del Cono",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX228",
    "number": 228,
    "name": "Regate Exterior tras Control Orientado en Carrera Frontal",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX229",
    "number": 229,
    "name": "1v1 en Banda con Finta de Frenada y Aceleración Exterior Hacia Centro",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX230",
    "number": 230,
    "name": "Finta Exterior con Brazo Extendido para Proteger la Salida de Marca",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX231",
    "number": 231,
    "name": "Regate de Engaño Corporal Completo con Cambio de Peso de Pierna",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX232",
    "number": 232,
    "name": "Regate Exterior con Finalización Rápida con Punterazo de Sorpresa",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate con Finta Exterior",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en finta exterior y aceleración.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate con finta exterior",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX233",
    "number": 233,
    "name": "Desborde 1v1 en Pasillo Lateral y Centro Tenso al Primer Palo",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX234",
    "number": 234,
    "name": "Extremo contra Lateral: 1v1 en Banda con Ayuda de Doblaje del Lateral",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX235",
    "number": 235,
    "name": "Desborde por Fuera con Cambio de Ritmo y Centro Retrasado al Punto de Penalti",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX236",
    "number": 236,
    "name": "1v1 en Banda con Salida Hacia Dentro o Fuera según Perfil del Defensor",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX237",
    "number": 237,
    "name": "Duelo en Carril Lateral con Entrada del Defensor desde Posición Retrasada",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX238",
    "number": 238,
    "name": "Desborde tras Pase Filtrado al Espacio de Banda y 1v1 con Central",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX239",
    "number": 239,
    "name": "1v1 de Extremos con Oposición Real y Centro hacia Dos Rematadores",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX240",
    "number": 240,
    "name": "Desborde con Auto-Pase en Velocidad por la Línea de Cal y Centro Raso",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX241",
    "number": 241,
    "name": "Duelo en Banda con Mini-Portería en Esquina y Portería Grande Central",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX242",
    "number": 242,
    "name": "1v1 Lateral con Frenada en Seco para Descolocar al Defensor y Centrar",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX243",
    "number": 243,
    "name": "Desborde por Banda tras Pared Rápida y Salida en Potencia",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Desborde por Banda",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en desborde lateral, centro y aceleración en pasillo.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "desborde por banda",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX244",
    "number": 244,
    "name": "1v1 Frontal desde la Frontal del Área con Definición ante Portero",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX245",
    "number": 245,
    "name": "Duelo 1v1 Directo con Inicio desde Conos Opuestos en Carrera Cruzada",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX246",
    "number": 246,
    "name": "1v1 Frontal con Defensor Recuperando la Posición desde Atrás",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX247",
    "number": 247,
    "name": "Atacante Frontal contra Central con Límite de 3 Toques para Finalizar",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX248",
    "number": 248,
    "name": "1v1 con Entrada Frontal del Defensor y Regate Hacia su Pierna Débil",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX249",
    "number": 249,
    "name": "Duelo Frontal tras Balón Dividido en Zona de Tres Cuartos",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX250",
    "number": 250,
    "name": "1v1 con Finta Previa en la Frontal y Tiro Rápido al Rincón",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX251",
    "number": 251,
    "name": "Duelo Frontal con Dos Porterías de Precisión en los Vértices del Área",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX252",
    "number": 252,
    "name": "1v1 tras Pase del Propio Defensor que Sale a Presionar de Frente",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX253",
    "number": 253,
    "name": "Duelo Frontal de Potencia con Salida desde el Medio Campo y Tiro",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX254",
    "number": 254,
    "name": "1v1 Frontal con Opción de Tiro Rápido o Regate Completo al Defensor",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 Frontal con Portería",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en encarar de frente, finta y remate rápido.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 frontal con portería",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX255",
    "number": 255,
    "name": "Delantero de Espaldas al Central con Giro Rápido por Ambos Perfiles",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX256",
    "number": 256,
    "name": "1v1 de Espaldas con Apoyo en Comodín y Giro para Definir",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX257",
    "number": 257,
    "name": "Protección de Espaldas y Regate en Ruleta con la Suela para Escapar",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX258",
    "number": 258,
    "name": "1v1 en Zona de Pivote con Amago de Pase y Giro hacia Portería",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX259",
    "number": 259,
    "name": "Recepción de Espaldas con Contacto Físico del Defensor y Salida en Volea",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX260",
    "number": 260,
    "name": "Duelo de Espaldas con Dos Mini-Porterías Laterales para Finalizar",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX261",
    "number": 261,
    "name": "1v1 con Balón Alto de Espaldas: Control de Pecho, Giro y Disparo",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX262",
    "number": 262,
    "name": "Delantero Fijador: Retener el Balón de Espaldas 3 Segundos y Superar",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX263",
    "number": 263,
    "name": "Giro de 180 Grados con la Planta tras Finta Corporal de Espaldas",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX264",
    "number": 264,
    "name": "1v1 de Espaldas con Balón Parado y Salida Explosiva a la Señal",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX265",
    "number": 265,
    "name": "Duelo de Espaldas con Entrada Fuerte del Defensor y Finta de Devolución",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "1v1 de Espaldas a Meta",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en juego de espaldas, giro y protección de pivote.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "1v1 de espaldas a meta",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX266",
    "number": 266,
    "name": "Control Orientado en Velocidad y Regate Inmediato en el Segundo Toque",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX267",
    "number": 267,
    "name": "Control hacia Delante para Fijar al Defensor y Finta de Salida Lateral",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX268",
    "number": 268,
    "name": "Control Orientado con el Exterior que Supera la Entrada del Rival",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX269",
    "number": 269,
    "name": "Control con la Suela para Frenar y Cambio Brusco de Dirección",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX270",
    "number": 270,
    "name": "Recepción Perfilada hacia el Lado Débil del Oponente y Regate Rápido",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX271",
    "number": 271,
    "name": "Control Orientado tras Pase Largo y Desborde Directo en 1v1",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX272",
    "number": 272,
    "name": "Control Orientado hacia Portería y Amago de Tiro para Superar Bloqueo",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX273",
    "number": 273,
    "name": "Control con Muslo en Carrera y Regate de Sombrero ante Salida Rápida",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "12–14 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX274",
    "number": 274,
    "name": "Control Orientado entre Dos Conos y Desborde Inmediato al Defensor",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "15–17 años",
    "nivel": "Intermedio",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX275",
    "number": 275,
    "name": "Doble Toque: Control Orientado y Auto-Pase al Espacio Desocupado",
    "category": "04. Regate y 1 contra 1",
    "subcategory": "Regate tras Control Orientado",
    "objetivoPrincipal": "Desarrollar la audacia, el desequilibrio individual y la capacidad de superar oponentes en control orientado como antesala del desborde.",
    "objetivoTecnico": "Ejecutar fintas verosímiles, cambios bruscos de dirección y ritmo, utilizando ambas piernas y superficies de contacto.",
    "objetivoTatico": "Identificar la pierna débil del defensor, leer su postura corporal y atacar el espacio a su espalda con aceleración.",
    "edad": "9–11 años",
    "nivel": "Principiante",
    "jugadoresMin": 2,
    "jugadoresMax": 8,
    "jugadoresLabel": "3–5",
    "duracion": "15 min",
    "duracionMinutes": 15,
    "intensidad": "Alta",
    "espacio": "Pequeño",
    "materiales": "10 setas marcadoras, 2 mini-porterías o 1 portería con portero, 6 balones, petos de 2 colores.",
    "organizacion": "Pasillo o cuadrante de 15x10m a 20x15m. Filas de atacantes y defensores en vértices opuestos para rotación dinámica.",
    "desarrollo": "Situaciones continuas de duelo 1v1 donde el atacante busca superar la marca y finalizar, mientras el defensor busca temporizar o arrebatar el balón.",
    "pasoAPaso": [
      "1. Organización: Marcar el carril de duelo y ubicar las metas o mini-porterías en los extremos.",
      "2. Posición Inicial: Atacante con balón en el punto de inicio; defensor situado a 8-10 metros de distancia.",
      "3. Inicio: El atacante inicia la conducción hacia el defensor a ritmo controlado para fijar su posición.",
      "4. Duelo: A 1.5 metros del rival, el atacante ejecuta la finta o amago y acelera hacia el espacio liberado.",
      "5. Finalización y Rotación: Disparo a portería en menos de 6 segundos y cambio inmediato de rol entre parejas."
    ],
    "puntosClave": [
      "Bajar el centro de gravedad flexionando rodillas para ganar explosividad en el arranque.",
      "Hacer que la finta sea creíble moviendo hombros y mirada antes del toque definitivo.",
      "Acelerar al 100% tras superar al rival; no quedarse esperando el contacto.",
      "Colocar el cuerpo entre el balón y el defensor para proteger la posición ganada."
    ],
    "erroresFrecuentes": [
      "Fintar demasiado lejos del defensor, permitiéndole corregir su posición fácilmente.",
      "Regatear a velocidad uniforme sin cambio explosivo de ritmo.",
      "Conducir con la cabeza pegada al balón sin observar la colocación del rival."
    ],
    "correcciones": [
      "\"Acércate al defensor hasta obligarlo a dudar antes de lanzar la finta.\"",
      "\"El engaño es suave; la salida es un sprint al máximo.\"",
      "\"Mira el pecho del defensor; sus pies engañan, su tronco te dice hacia dónde va.\""
    ],
    "variacionFacil": "El defensor solo puede defender trotando hacia atrás sin meter el pie (oposición pasiva).",
    "variacionDificil": "Añadir un límite de 5 segundos para finalizar o introducir un segundo defensor en repliegue.",
    "progresion": "Aumentar las dimensiones para exigir mayor capacidad de aceleración y desborde en carrera larga.",
    "regresion": "Realizar la finta frente a una pica fija sin defensor humano para fijar el gesto biomecánico.",
    "posiciones": "Extremos, delanteros, mediapuntas y laterales.",
    "tags": [
      "regate",
      "1v1",
      "regate tras control orientado",
      "finta",
      "desborde",
      "duelo"
    ],
    "pitchDiagram": {
      "type": "lane_grid",
      "elements": [
        {
          "id": "c1",
          "type": "cone",
          "x": 35,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c2",
          "type": "cone",
          "x": 65,
          "y": 25,
          "color": "#f59e0b"
        },
        {
          "id": "c3",
          "type": "cone",
          "x": 35,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "c4",
          "type": "cone",
          "x": 65,
          "y": 75,
          "color": "#f59e0b"
        },
        {
          "id": "mg1",
          "type": "goal",
          "x": 50,
          "y": 20
        },
        {
          "id": "att",
          "type": "player",
          "team": "home",
          "label": "AT",
          "x": 50,
          "y": 70
        },
        {
          "id": "def",
          "type": "player",
          "team": "away",
          "label": "DF",
          "x": 50,
          "y": 45
        },
        {
          "id": "ball",
          "type": "ball",
          "x": 50,
          "y": 66
        },
        {
          "id": "dribble_arr",
          "type": "arrow",
          "arrowType": "run",
          "x": 50,
          "y": 65,
          "targetX": 58,
          "targetY": 42
        }
      ]
    }
  },
  {
    "id": "EX276",
    "number": 276,
    "name": "Volea Frontal de Empeine Total tras Pase Aéreo Picado desde la Frontal",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX277",
    "number": 277,
    "name": "Semivolea Cruzada a Bote Pronto tras Devolución Corta de Pecho",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX278",
    "number": 278,
    "name": "Volea Lateral con Caída tras Centro Tenso al Segundo Palo",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX279",
    "number": 279,
    "name": "Remate de Tijera en Semivolea tras Centro Pasado",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX280",
    "number": 280,
    "name": "Volea a la Media Vuelta en Zona de Punto de Penalti",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX281",
    "number": 281,
    "name": "Semivolea con Interior Colocada a la Escuadra tras Bote Alto",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX282",
    "number": 282,
    "name": "Circuito de Voleas Alternas con Izquierda y Derecha tras Centro de Banda",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX283",
    "number": 283,
    "name": "Volea Rasante al Poste Corto tras Balón Aéreo Rechazado",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX284",
    "number": 284,
    "name": "Semivolea de Potencia tras Bote Pronto en la Frontal del Área Grande",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX285",
    "number": 285,
    "name": "Remate de Volea tras Autocontrol con Muslo en Carrera",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX286",
    "number": 286,
    "name": "Volea Acrobática de Espaldas con Remate al Palo Largo",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX287",
    "number": 287,
    "name": "Semivolea tras Pase Largo de 30 Metros a la Espalda de los Centrales",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX288",
    "number": 288,
    "name": "Volea de Primer Toque con Pierna Menos Hábil tras Centro Rápido",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX289",
    "number": 289,
    "name": "Circuito de Finalización Continua con Volea Tras Pared Aérea",
    "category": "05. Finalización y Tiro",
    "subcategory": "Voleas y Semivoleas",
    "objetivoPrincipal": "Maximizar la efectividad en golpeo aéreo, coordinación óculo-pédica y timing de impacto, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
      "voleas y semivoleas",
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
    "id": "EX290",
    "number": 290,
    "name": "Pared Frontal Corta 2v1 en la Frontal y Disparo Raso al Rincón",
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
    "id": "EX291",
    "number": 291,
    "name": "Pared con Tercer Hombre en la Medialuna con Disparo de Primer Toque",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Maximizar la efectividad en asociación en tres cuartos y tiro rápido tras pared, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
    "id": "EX292",
    "number": 292,
    "name": "Doble Pared Escalonada entre Mediocentro y Delantero con Disparo",
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
    "id": "EX293",
    "number": 293,
    "name": "Pared Frontal con Exterior del Pie y Tiro Cruzado con Efecto",
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
    "id": "EX294",
    "number": 294,
    "name": "Pared Rápida de Espaldas con Pivote y Finalización en Carrera",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Maximizar la efectividad en asociación en tres cuartos y tiro rápido tras pared, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
    "id": "EX295",
    "number": 295,
    "name": "Pared Diagonal para Superar Línea Defensiva y Golpeo al Palo Lejano",
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
    "id": "EX296",
    "number": 296,
    "name": "Pared Frontal con Amago de Devolución y Tiro Directo Sorpresivo",
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
    "id": "EX297",
    "number": 297,
    "name": "Combinación de Pared a Un Toque en Espacio Reducido y Definición Fuerte",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Maximizar la efectividad en asociación en tres cuartos y tiro rápido tras pared, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
    "id": "EX298",
    "number": 298,
    "name": "Pared con Comodín Interior y Entrada en Segunda Línea para Rematar",
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
    "id": "EX299",
    "number": 299,
    "name": "Pared Frontal con Salto de Línea y Disparo Rasante con Empeine",
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
    "id": "EX300",
    "number": 300,
    "name": "Pared en Rombo con Tres Jugadores y Finalización de Interior Colocado",
    "category": "05. Finalización y Tiro",
    "subcategory": "Tiro Tras Pared Frontal",
    "objetivoPrincipal": "Maximizar la efectividad en asociación en tres cuartos y tiro rápido tras pared, automatizando la biomecánica del golpeo y la toma de decisión frente a la portería.",
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
  }
];
