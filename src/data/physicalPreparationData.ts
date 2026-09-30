export interface PhysicalProtocol {
  id: string;
  nombre: string;
  moduloId: string;
  moduloNombre: string;
  categoria: 'Fuerza & Core' | 'Velocidad & RSA' | 'Resistencia & HIIT' | 'Prevención & FIFA 11+' | 'Circuitos Integrados' | 'Recuperación & Cargas';
  intensidad: 'Media' | 'Alta' | 'Máxima';
  duracionEstimada: string;
  materiales: string;
  organizacion: string;
  seriesRepeticiones: string;
  descanso: string;
  rpeObjetivo: string;
  objetivoFisiologico: string;
  pasoAPaso: string[];
  focoTecnico: string;
  erroresFrecuentes: { error: string; correccion: string }[];
  transferenciaJuego: string;
  variacionFacil: string;
  variacionDificil: string;
}

export interface PhysicalModule {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  icono: string;
  badge: string;
  resumen: string;
  frecuenciaSemanal: string;
  objetivosClave: string[];
  protocolos: PhysicalProtocol[];
}

export interface MorfocicloDay {
  dia: string;
  fase: string;
  concepto: string;
  intensidad: string;
  volumen: string;
  espacio: string;
  duracion: string;
  descripcion: string;
  pasoAPaso: string[];
  precauciones: string;
}

export const PROTOCOLOS_FISICOS: PhysicalProtocol[] = [
  // --- MÓDULO 1: FUERZA Y CORE ---
  {
    id: 'FIS-001',
    nombre: 'Sentadilla Búlgara con Carga Progresiva y Aceleración Concéntrica',
    moduloId: 'mod1',
    moduloNombre: 'Fuerza Funcional Específica',
    categoria: 'Fuerza & Core',
    intensidad: 'Alta',
    duracionEstimada: '15 min',
    materiales: 'Banco o cajón de 40 cm, 2 mancuernas de 8 a 16 kg o chaleco lastrado.',
    organizacion: 'Colocar el banco en zona plana. El futbolista apoya el empeine de la pierna retrasada sobre el banco, manteniendo la pierna adelantada a un paso de distancia.',
    seriesRepeticiones: '4 series x 6 repeticiones por pierna',
    descanso: '90 segundos entre series',
    rpeObjetivo: 'RPE 8 / 10',
    objetivoFisiologico: 'Desarrollar la fuerza unilateral máxima y la tasa de desarrollo de la fuerza (RFD) en glúteo mayor, cuádriceps e isquiotibiales.',
    pasoAPaso: [
      'Paso 1 - Colocación inicial: Apoya el empeine del pie retrasado en el banco. Adelanta el pie de apoyo de modo que al descender la rodilla quede sobre el talón o empeine.',
      'Paso 2 - Activación y postura: Mantén el torso erguido con una inclinación anterior controlada de 10-15° para reclutar la cadena posterior sin arquear las lumbares.',
      'Paso 3 - Descenso excéntrico controlado (3 segundos): Desciende flexionando la rodilla delantera hasta que el muslo quede paralelo al suelo o la rodilla trasera roce ligeramente el césped.',
      'Paso 4 - Impulso concéntrico explosivo (1 segundo): Empuja fuerte con todo el pie delantero (haciendo foco en el talón y metatarso) regresando a la posición inicial sin bloquear bruscamente la articulación.',
      'Paso 5 - Transición y simetría: Completa las 6 repeticiones, descansa 15 segundos y repite con la pierna contraria con idéntico control de cadera.'
    ],
    focoTecnico: 'La rodilla delantera jamás debe colapsar hacia el interior (valgo dinámico). Debe estar alineada con el segundo dedo del pie en todo el recorrido.',
    erroresFrecuentes: [
      {
        error: 'El torso se inclina excesivamente hacia adelante por falta de fuerza de core.',
        correccion: 'Activar el abdomen antes de descender y fijar la mirada en un punto a 3 metros.'
      },
      {
        error: 'El talón delantero se despega del suelo cargando la rótula.',
        correccion: 'Adelantar ligeramente el pie de apoyo 5 cm para repartir la presión en toda la planta.'
      }
    ],
    transferenciaJuego: 'Potencia de arranque en los primeros 3 pasos de carrera, capacidad de frenar tras carrera de alta intensidad y solidez al cubrir el balón con el cuerpo.',
    variacionFacil: 'Realizar el ejercicio con peso corporal (sin mancuernas) apoyando las manos en la cadera.',
    variacionDificil: 'Añadir un salto vertical reactivo al final de la fase concéntrica (Sentadilla Búlgara Pliométrica).'
  },
  {
    id: 'FIS-002',
    nombre: 'Press Pallof Antirrotacional con Desplazamiento Lateral',
    moduloId: 'mod1',
    moduloNombre: 'Fuerza Funcional Específica',
    categoria: 'Fuerza & Core',
    intensidad: 'Media',
    duracionEstimada: '12 min',
    materiales: 'Banda elástica de resistencia media-alta anclada a poste de portería o valla.',
    organizacion: 'Anclar la banda a la altura del esternón. El jugador se coloca lateralmente al punto de anclaje a 2 metros de distancia con tensión previa en la goma.',
    seriesRepeticiones: '3 series x 10 repeticiones + 3 pasos laterales por lado',
    descanso: '60 segundos entre series',
    rpeObjetivo: 'RPE 7 / 10',
    objetivoFisiologico: 'Reforzar la rigidez del complejo lumbopélvico frente a momentos de torsión externa, fortaleciendo oblicuos, transverso y glúteo medio.',
    pasoAPaso: [
      'Paso 1 - Posición atlética base: Pies paralelos al ancho de los hombros, rodillas semiflexionadas a 20°, cadera retrasada en posición de recepción y core activado.',
      'Paso 2 - Extensión de brazos: Sujeta la banda con ambas manos unidas pegadas al pecho. Extiende los brazos rectos hacia el frente en 1 segundo resistiendo el tirón lateral.',
      'Paso 3 - Fijación isométrica (2 segundos): Mantén los brazos completamente estirados sin permitir que el torso rote ni un solo milímetro hacia el anclaje.',
      'Paso 4 - Pasos laterales en tensión: Da 2 pasos laterales alejándote del poste manteniendo los brazos extendidos y 2 pasos de regreso con máxima estabilidad.',
      'Paso 5 - Recogida al pecho y respiro: Vuelve las manos al esternón, inhala profundamente y prepárate para la siguiente repetición.'
    ],
    focoTecnico: 'Los hombros y las crestas ilíacas deben formar un plano frontal perfecto perpendicular a la línea de fuerza de la banda.',
    erroresFrecuentes: [
      {
        error: 'Girar los hombros hacia el poste por fatiga de los oblicuos.',
        correccion: 'Reducir la distancia al anclaje o aflojar la tensión de la banda elástica.'
      },
      {
        error: 'Elevar los hombros hacia las orejas compensando con trapecios.',
        correccion: 'Descender las escápulas y sacar pecho orgulloso durante toda la extensión.'
      }
    ],
    transferenciaJuego: 'Resistir cargas hombro a hombro con rivales en conducción, estabilidad al chocar en el aire y menor riesgo de sobrecarga lumbar en golpeos con efecto.',
    variacionFacil: 'Realizar la extensión estática sin los pasos laterales adicionales.',
    variacionDificil: 'Ejecutar el ejercicio en posición de zancada (lunge) isométrica unilateral.'
  },
  {
    id: 'FIS-003',
    nombre: 'Peso Muerto Rumano Unilateral con Mancuerna Cruzada',
    moduloId: 'mod1',
    moduloNombre: 'Fuerza Funcional Específica',
    categoria: 'Fuerza & Core',
    intensidad: 'Alta',
    duracionEstimada: '14 min',
    materiales: '1 mancuerna o kettlebell de 10 a 18 kg.',
    organizacion: 'Espacio despejado de 3x3 metros. Jugador de pie sobre una pierna, sujetando la carga con la mano contralateral (mano opuesta a la pierna apoyada).',
    seriesRepeticiones: '3 series x 8 repeticiones por pierna',
    descanso: '75 segundos entre series',
    rpeObjetivo: 'RPE 7.5 / 10',
    objetivoFisiologico: 'Hipertrofia funcional y fuerza excéntrica en isquiotibiales (porción larga del bíceps femoral) y estabilidad de tobillo en cadena cerrada.',
    pasoAPaso: [
      'Paso 1 - Desbloqueo inicial: Apoya el pie derecho firmemente. Desbloquea la rodilla derecha unos 15° y mantén ese ángulo fijo durante todo el movimiento.',
      'Paso 2 - Bisagra de cadera hacia atrás: Empuja la cadera hacia atrás como si quisieras tocar una pared imaginaria con el glúteo, mientras la pierna izquierda se eleva alineada con el tronco.',
      'Paso 3 - Descenso de la carga (3 segundos): Baja la mancuerna en línea vertical rozando la espinilla hasta llegar a media tibia, sintiendo tensión elástica en los isquiotibiales.',
      'Paso 4 - Extensión potente de cadera: Contrae activamente el glúteo de apoyo para regresar a la verticalidad, clavando el talón contra el suelo.',
      'Paso 5 - Control propioceptivo: Evita apoyar el pie libre en el suelo entre repeticiones para mantener la estimulación continua de los estabilizadores del tobillo.'
    ],
    focoTecnico: 'La pelvis debe permanecer neutra y paralela al suelo. Evitar que la cadera de la pierna que vuela se abra hacia afuera.',
    erroresFrecuentes: [
      {
        error: 'Flexionar la columna lumbar en lugar de mover la cadera.',
        correccion: 'Mantener las escápulas conectadas y el pecho abierto imaginando una vara recta pegada a la columna.'
      },
      {
        error: 'Flexionar demasiado la rodilla convirtiendo el peso muerto en una sentadilla.',
        correccion: 'El desplazamiento debe ser puramente anteroposterior de la pelvis, no vertical.'
      }
    ],
    transferenciaJuego: 'Frenadas bruscas tras sprint a máxima velocidad y prevención de tirones musculares en la fase de desaceleración del golpeo de balón.',
    variacionFacil: 'Apoyar la punta del pie trasero como "rueda de bicicleta" (Staggered Stance) para mayor equilibrio.',
    variacionDificil: 'Realizar la subida explosiva terminando con elevación de rodilla al pecho y salto reactivo monopodal.'
  },

  // --- MÓDULO 2: VELOCIDAD & RSA ---
  {
    id: 'FIS-004',
    nombre: 'Protocolo RSA Específico: 6 Sprints de 25m con Doble Freno y Salida 90°',
    moduloId: 'mod2',
    moduloNombre: 'Velocidad, Aceleración y RSA',
    categoria: 'Velocidad & RSA',
    intensidad: 'Máxima',
    duracionEstimada: '18 min',
    materiales: '6 conos, cronómetro o fotocélulas, silbato y balones exteriores.',
    organizacion: 'Trazar un pasillo en forma de Z: Cono A (salida) a 10m de Cono B (giro a derecha 90°), y Cono B a 15m de Cono C (línea de llegada). 4 jugadores por estación.',
    seriesRepeticiones: '2 bloques de 6 repeticiones (20s pausa entre repeticiones, 4 min pausa activa entre bloques)',
    descanso: '20 segundos micropausa / 4 minutos macropausa',
    rpeObjetivo: 'RPE 9.5 / 10',
    objetivoFisiologico: 'Aumentar la Capacidad de Repetición de Sprints (RSA), optimizando la resíntesis rápida de fosfocreatina (PCr) y el aclaramiento de lactato sanguíneo.',
    pasoAPaso: [
      'Paso 1 - Posicionamiento de salida: Pies desfasados, peso en el metatarso delantero, inclinación de tronco a 45° y mirada en el cono B.',
      'Paso 2 - Aceleración explosiva inicial (0 a 10m): 3 zancadas potentes con empuje horizontal total y braceo enérgico.',
      'Paso 3 - Deceleración excéntrica anticipada: A 2 metros del cono B, bajar el centro de gravedad con pasos de frenado cortos y reactivos (choppy steps).',
      'Paso 4 - Cambio de dirección a 90°: Bloquear con el pie exterior, empujar con el borde interno y reorientar hombros y cadera hacia el cono C.',
      'Paso 5 - Sprint de aceleración final (15m): Reacelerar a velocidad máxima hasta rebasar con claridad la línea del cono C.',
      'Paso 6 - Micropausa activa cronometrada: Regresar caminando con respiración diafragmática durante exactamente 20 segundos antes del siguiente arranque.'
    ],
    focoTecnico: 'Descender el centro de gravedad en la frenada sin erguir el tronco antes de tiempo para no perder tracción.',
    erroresFrecuentes: [
      {
        error: 'Llegar a la frenada con el cuerpo retrasado resbalando en el césped.',
        correccion: 'Mantener la cabeza sobre los pies y amortiguar con la musculatura del cuádriceps y glúteo.'
      },
      {
        error: 'Descansar de forma pasiva sentado en el suelo aumentando la rigidez muscular.',
        correccion: 'Caminar suavemente con brazos relajados para favorecer el retorno venoso.'
      }
    ],
    transferenciaJuego: 'Capacidad de presionar al central rival, reaccionar al pase lateral y esprintar a interceptar al extremo sin perder potencia en los últimos 20 minutos.',
    variacionFacil: 'Reducir el sprint a 15m lineales sin cambio de dirección en jugadores que salen de lesión.',
    variacionDificil: 'Añadir un pase tenso y control en carrera tras cruzar el cono C con definición inmediata a miniportería.'
  },
  {
    id: 'FIS-005',
    nombre: 'Aceleración de 0 a 10m con Salidas Multidireccionales Reactivas',
    moduloId: 'mod2',
    moduloNombre: 'Velocidad, Aceleración y RSA',
    categoria: 'Velocidad & RSA',
    intensidad: 'Máxima',
    duracionEstimada: '15 min',
    materiales: '8 conos de colores, 1 silbato o estímulo visual (paletas de color).',
    organizacion: 'Línea de salida con conos a 5m y 10m. Los jugadores se colocan en parejas: uno es el líder de salida reactiva y el entrenador da estímulo auditivo/visual.',
    seriesRepeticiones: '3 series x 4 repeticiones (2 de espaldas, 2 laterales, 2 boca abajo en plancha)',
    descanso: '90 segundos entre repeticiones',
    rpeObjetivo: 'RPE 9 / 10',
    objetivoFisiologico: 'Potenciar la aceleración pura de los primeros 3 a 5 metros y la velocidad de reacción acústico-visual.',
    pasoAPaso: [
      'Paso 1 - Posición inicial variable: Serie 1 de espaldas a la meta; Serie 2 en posición lateral de basculación defensiva; Serie 3 en plancha abdominal en el césped.',
      'Paso 2 - Recepción del estímulo instantáneo: Ante el silbato o señal de color, reaccionar en menos de 0.2 segundos activando la musculatura extensora.',
      'Paso 3 - Giro y pivoteo reactivo: Rotar la cadera y plantar el pie de empuje directamente debajo del centro de masas.',
      'Paso 4 - Primeros 3 pasos de máxima potencia: Pasos con frecuencia acelerada, tobillo en dorsiflexión y braceo amplio rozando la cadera.',
      'Paso 5 - Frenada suave post-meta: Rebasar la marca de 10m y desacelerar progresivamente en 5 metros adicionales sin parar en seco.'
    ],
    focoTecnico: 'Evitar el "paso en falso" hacia atrás antes de salir. El primer movimiento de pie debe ser directamente hacia adelante.',
    erroresFrecuentes: [
      {
        error: 'Erguir el tronco inmediatamente en el primer paso perdiendo el ángulo de empuje.',
        correccion: 'Mantener la mirada en el suelo los primeros 3 pasos manteniendo la línea recta talón-cadera-cabeza a 45°.'
      }
    ],
    transferenciaJuego: 'Ganar balones divididos ante despejes, anticipación a centros laterales y desmarques de ruptura a la espalda de la línea defensiva.',
    variacionFacil: 'Iniciar siempre de frente en posición atlética estática.',
    variacionDificil: 'Salida con persecución 1v1 donde el perseguidor sale 1 metro por detrás intentando tocar la espalda del delantero.'
  },

  // --- MÓDULO 3: RESISTENCIA & HIIT ---
  {
    id: 'FIS-006',
    nombre: 'HIIT Intermitente 15s / 15s al 115% VAM con Conducción y Giro',
    moduloId: 'mod3',
    moduloNombre: 'Resistencia Específica y HIIT',
    categoria: 'Resistencia & HIIT',
    intensidad: 'Alta',
    duracionEstimada: '20 min',
    materiales: '12 conos, 1 balón por cada 2 jugadores, pulsómetros o cronómetro con avisos periódicos.',
    organizacion: 'Delimitar 2 líneas paralelas distanciadas a 60 metros (adaptada al 115% de la Velocidad Aeróbica Máxima del grupo). En el centro, un cono intermedio a 30m.',
    seriesRepeticiones: '2 bloques de 8 minutos (16 repeticiones de 15s de trabajo x 15s de recuperación pasiva/trote)',
    descanso: '15 segundos entre repeticiones / 3 minutos entre bloques',
    rpeObjetivo: 'RPE 8.5 / 10',
    objetivoFisiologico: 'Elevar el consumo máximo de oxígeno (VO2 Máx), aumentar la densidad mitocondrial muscular y acelerar la recuperación entre jugadas de alta intensidad.',
    pasoAPaso: [
      'Paso 1 - Arranque al silbato: Al sonido de inicio, sprintar conduciendo el balón a ritmo constante durante 15 segundos exactos cubriendo la distancia objetivo.',
      'Paso 2 - Freno controlado al segundo 15: Pisar el balón justo en la línea de meta marcada o realizar un giro de 180° pisando con la suela.',
      'Paso 3 - Micropausa de 15 segundos: Dejar el balón quieto y trotar muy suavemente en el sitio realizando respiraciones profundas nasales.',
      'Paso 4 - Salida en sentido contrario: Al siguiente aviso sonoro, sprintar de regreso con el pie menos hábil cubriendo la misma distancia.',
      'Paso 5 - Monitorización de la FC: La frecuencia cardíaca debe situarse entre el 88% y el 94% de la FC máxima al final del bloque.'
    ],
    focoTecnico: 'Los toques de balón deben ser precisos cada 2 zancadas para no perder velocidad de desplazamiento por controlar mal el esférico.',
    erroresFrecuentes: [
      {
        error: 'Salir al 100% en las primeras 2 repeticiones y no poder mantener el ritmo en el minuto 6.',
        correccion: 'Calcular el ritmo de crucero exacto: cubrir la misma distancia en cada repetición de 15 segundos.'
      }
    ],
    transferenciaJuego: 'Capacidad aeróbica para mantener el despliegue físico durante los 90 minutos de partido sin desfallecer en el segundo tiempo.',
    variacionFacil: 'Realizar el protocolo sin balón en carrera lineal continua.',
    variacionDificil: 'Incluir una pared con un compañero al llegar al segundo 7 de la carrera.'
  },
  {
    id: 'FIS-007',
    nombre: 'Small-Sided Game 4v4 + 2 Comodines con Demanda Metabólica Máxima',
    moduloId: 'mod3',
    moduloNombre: 'Resistencia Específica y HIIT',
    categoria: 'Resistencia & HIIT',
    intensidad: 'Alta',
    duracionEstimada: '25 min',
    materiales: 'Espacio de 32 x 28 metros, 4 porterías pequeñas o 2 reglamentarias con porteros, 15 balones en el perímetro, petos.',
    organizacion: 'Campo cerrado de 32x28m (área relativa por jugador de ~90 m² para maximizar aceleraciones y desaceleraciones). Balones en todas las bandas para reinicios en < 3 segundos.',
    seriesRepeticiones: '4 series x 4 minutos',
    descanso: '2 minutos de micropausa activa de hidratación y corrección táctica',
    rpeObjetivo: 'RPE 9 / 10',
    objetivoFisiologico: 'Entrenamiento integrado de la capacidad glucolítica y aeróbica en contexto de toma de decisiones táctica bajo fatiga real.',
    pasoAPaso: [
      'Paso 1 - Montaje y asignación: 2 equipos de 4 jugadores + 2 comodines exteriores que juegan siempre con el equipo en posesión.',
      'Paso 2 - Regla de intensidad continua: Límite a 2 toques por jugador. Si el balón sale de banda, el entrenador introduce inmediatamente otro esférico en campo contrario.',
      'Paso 3 - Presión tras pérdida obligatoria: Al perder la pelota, los 4 jugadores del equipo defensor deben presionar en los primeros 5 segundos en campo rival.',
      'Paso 4 - Rotación de comodines: En cada serie de 4 minutos, rotar a los 2 comodines para que todos experimenten la máxima exigencia física interior.',
      'Paso 5 - Medición de efectividad: Sumar goles convertidos y porcentaje de recuperaciones en campo rival.'
    ],
    focoTecnico: 'Los apoyos interiores deben crearse a máxima velocidad sin esperar el balón parado.',
    erroresFrecuentes: [
      {
        error: 'Jugadores que se quedan estáticos cuando el balón está en la banda contraria.',
        correccion: 'Exigir basculación activa de todo el bloque para no dejar líneas abiertas.'
      }
    ],
    transferenciaJuego: 'Duelos en espacio reducido, salida bajo presión asfixiante y mantenimiento de la lucidez en la entrega de pase con pulsaciones por encima de 175 ppm.',
    variacionFacil: 'Aumentar las dimensiones a 38x32m para permitir más tiempo de decisión con menos choques.',
    variacionDificil: 'Reducir a 1 toque en zona de finalización e introducir marcaje al hombre estricto.'
  },

  // --- MÓDULO 4: PREVENCIÓN & FIFA 11+ ---
  {
    id: 'FIS-008',
    nombre: 'Curl Nórdico de Isquiotibiales Progresivo (Nordic Hamstring)',
    moduloId: 'mod4',
    moduloNombre: 'Prevención de Lesiones y FIFA 11+',
    categoria: 'Prevención & FIFA 11+',
    intensidad: 'Alta',
    duracionEstimada: '10 min',
    materiales: 'Colchoneta o almohadilla para rodillas, 1 compañero para sujeción firme de tobillos (o barra bloqueada).',
    organizacion: 'El ejecutante se arrodilla con las tibias en el suelo y los tobillos fijados contra el césped por un compañero con todo su peso corporal.',
    seriesRepeticiones: '3 series x 4 a 6 repeticiones de máxima calidad excéntrica',
    descanso: '90 segundos entre series',
    rpeObjetivo: 'RPE 8 / 10',
    objetivoFisiologico: 'Aumentar la longitud de los fascículos musculares y la fuerza excéntrica del bíceps femoral, reduciendo hasta un 51% las roturas fibrilares en carrera.',
    pasoAPaso: [
      'Paso 1 - Alineación corporal de bloqueo: Arrodillado con el cuerpo completamente recto desde la rodilla hasta la coronilla. Glúteos contraídos, abdomen duro y hombros relajados.',
      'Paso 2 - Sujeción firme del compañero: El compañero debe sujetar los tobillos contra el suelo bloqueando el talón para evitar cualquier balanceo.',
      'Paso 3 - Descenso excéntrico controlado (3 a 5 segundos): Deja caer el cuerpo lentamente hacia adelante, resistiendo la gravedad únicamente con la fuerza de los isquiotibiales.',
      'Paso 4 - Amortiguación con manos: Cuando no puedas sostener más la caída, coloca las palmas de las manos para amortiguar suavemente el contacto con el suelo.',
      'Paso 5 - Empuje suave de retorno: Realiza un pequeño empuje con las manos contra el suelo para ayudar a volver a la posición vertical sin forzar la zona lumbar.'
    ],
    focoTecnico: 'No doblar la cintura (flexionar la cadera) durante el descenso. La línea rodilla-cadera-hombro debe ser una tabla rígida inquebrantable.',
    erroresFrecuentes: [
      {
        error: 'Sacar el glúteo hacia atrás "partiendo" el cuerpo por la cadera para no caer.',
        correccion: 'Apretar glúteos fuertemente y empujar la pelvis hacia adelante antes de iniciar la bajada.'
      },
      {
        error: 'Dejarse caer sin frenar los primeros 2 segundos.',
        correccion: 'Resistir desde el primer centímetro con contracción máxima sostenida.'
      }
    ],
    transferenciaJuego: 'Blindaje directo contra el mecanismo lesional clásico del fútbol: la zancada de sprint en fase de desaceleración previa al contacto con el suelo.',
    variacionFacil: 'Utilizar una banda elástica atada al pecho desde un poste trasero que asista la bajada.',
    variacionDificil: 'Detener la bajada de forma isométrica durante 2 segundos a 45° antes de completar la caída.'
  },
  {
    id: 'FIS-009',
    nombre: 'Aductores de Copenhague en 3 Niveles de Palanca',
    moduloId: 'mod4',
    moduloNombre: 'Prevención de Lesiones y FIFA 11+',
    categoria: 'Prevención & FIFA 11+',
    intensidad: 'Media',
    duracionEstimada: '10 min',
    materiales: 'Banco sueco de 40 cm o un compañero de equipo.',
    organizacion: 'Posición de plancha lateral apoyando el antebrazo en el césped. La pierna superior se apoya en el banco o es sostenida por el compañero.',
    seriesRepeticiones: '3 series x 8 repeticiones lentas por pierna (o 15s isométrico)',
    descanso: '60 segundos entre series',
    rpeObjetivo: 'RPE 7.5 / 10',
    objetivoFisiologico: 'Reforzar el aductor largo y mediano para erradicar la osteopatía dinámica de pubis (pubalgia) y equilibrar el balance aductor/abductor.',
    pasoAPaso: [
      'Paso 1 - Elección del nivel de palanca: Nivel 1 (banco a la altura de la rodilla); Nivel 2 (banco a media pantorrilla); Nivel 3 (banco en el tobillo, máxima palanca).',
      'Paso 2 - Elevación a plancha lateral: Apoya el antebrazo en el suelo y eleva la cadera hasta que el cuerpo quede alineado en el plano frontal.',
      'Paso 3 - Elevación de la pierna inferior: Despega la pierna inferior del suelo elevándola hasta contactar suavemente con la base del banco en 1 segundo.',
      'Paso 4 - Descenso excéntrico (2 segundos): Baja la pierna inferior casi hasta el suelo sin perder la elevación de la cadera ni rotar la pelvis.',
      'Paso 5 - Cambio controlado: Repite las 8 repeticiones y cambia de lado con máxima fluidez.'
    ],
    focoTecnico: 'La pelvis no debe hundirse hacia el suelo. Mantener el glúteo medio del lado de apoyo firme y el abdomen tenso.',
    erroresFrecuentes: [
      {
        error: 'Dejar caer la cadera hacia el césped por debilidad del aductor superior.',
        correccion: 'Empezar en Nivel 1 (apoyo en rodilla) hasta dominar 15 segundos sin caída de pelvis.'
      }
    ],
    transferenciaJuego: 'Fuerza de golpeo interior tenso, cambios de dirección laterales cortantes y protección contra sobrecargas inguinales típicas de pretemporada.',
    variacionFacil: 'Nivel 1 con flexión de rodilla a 90° apoyando la cara interna del muslo en el banco.',
    variacionDificil: 'Nivel 3 con el tobillo apoyado y añadiendo un movimiento de bicicleta con la pierna libre.'
  },

  // --- MÓDULO 5: CIRCUITOS INTEGRADOS ---
  {
    id: 'FIS-010',
    nombre: 'Circuito Físico-Técnico Cuadrangular: Fuerza Reactiva + Pase Tenso + Definición',
    moduloId: 'mod5',
    moduloNombre: 'Circuitos Físico-Técnicos Integrados',
    categoria: 'Circuitos Integrados',
    intensidad: 'Alta',
    duracionEstimada: '20 min',
    materiales: '4 vallas bajas (30 cm), 6 picas de slalom, 1 portería reglamentaria con portero, 10 balones.',
    organizacion: 'Circuito continuo organizado en estación: Estación A (3 saltos a pies juntos sobre vallas) -> Estación B (slalom entre 4 picas a sprint) -> Estación C (pared con entrenador) -> Estación D (remate al primer toque en carrera).',
    seriesRepeticiones: '2 bloques de 6 repeticiones por jugador (rotación continua cada 35 segundos)',
    descanso: '45s entre repeticiones / 3 minutos entre bloques',
    rpeObjetivo: 'RPE 8.5 / 10',
    objetivoFisiologico: 'Integrar la potencia neuromuscular del tren inferior con la precisión motora y el gesto técnico bajo déficit de oxígeno.',
    pasoAPaso: [
      'Paso 1 - Estación A (Saltos pliométricos): 3 saltos frontales reactivos sobre vallas con mínimo tiempo de contacto en el suelo (< 250 ms) y braceo vertical.',
      'Paso 2 - Estación B (Slalom ágil): Salida inmediata en aceleración zigzagueando entre 4 picas separadas a 1.5 metros con centro de gravedad bajo.',
      'Paso 3 - Estación C (Asociación técnica): Salir del slalom, pedir el balón con voz (\"¡Aquí!\"), devolver pase tenso a 1 toque al asistente.',
      'Paso 4 - Estación D (Desmarque y golpeo): Realizar curva de desmarque hacia el área grande para recibir la pared devuelta y definir con empeine al segundo palo.',
      'Paso 5 - Retorno regenerativo: Volver caminando por fuera del campo realizando respiración diafragmática y rotando al siguiente puesto.'
    ],
    focoTecnico: 'Fijar el pie de apoyo al lado del balón con firmeza en el remate final sin dejarse llevar por la inercia de la carrera.',
    erroresFrecuentes: [
      {
        error: 'Tirar por encima de la portería por golpear con el tronco retrasado a causa del cansancio del slalom.',
        correccion: 'Inclinar el pecho sobre el balón en el momento exacto del impacto.'
      }
    ],
    transferenciaJuego: 'Replica con exactitud la secuencia real de partido: salto de cabeza previo, carrera de desmarque a la banda, apoyo en corto y definición a portería.',
    variacionFacil: 'Sustituir las vallas por aros en el suelo con apoyos rápidos de carrera de frecuencia.',
    variacionDificil: 'Añadir un defensor pasivo que sale en persecución desde la estación C para presionar el tiro.'
  },

  // --- MÓDULO 6: CONTROL DE CARGAS & RECUPERACIÓN ---
  {
    id: 'FIS-011',
    nombre: 'Protocolo de Monitorización sRPE y Ratio Agudo:Crónico (ACWR)',
    moduloId: 'mod6',
    moduloNombre: 'Monitorización de Cargas y Morfociclo',
    categoria: 'Recuperación & Cargas',
    intensidad: 'Media',
    duracionEstimada: '5 min post-sesión',
    materiales: 'Tabla impresa con Escala de Borg/Foster (0 a 10), app o planilla Excel/Fichas de FÚTBOL+.',
    organizacion: 'Reunir o consultar a los futbolistas de forma individual y privada 30 minutos después de terminar el entrenamiento o partido oficial.',
    seriesRepeticiones: 'Registro diario sistemático en cada microciclo semanal',
    descanso: 'N/A',
    rpeObjetivo: 'Monitoreo de fatiga',
    objetivoFisiologico: 'Predecir picos de fatiga neuromuscular, evitar sobreentrenamiento y ajustar individualmente el volumen e intensidad de los microciclos.',
    pasoAPaso: [
      'Paso 1 - Espera de 30 minutos: No preguntar inmediatamente al terminar para evitar el sesgo del último esfuerzo de la sesión (recency bias).',
      'Paso 2 - Pregunta estandarizada: Mostrar la escala visual y preguntar: \"En una escala del 0 al 10, ¿cómo calificarías el esfuerzo global de la sesión de hoy?\".',
      'Paso 3 - Cálculo de la carga individual (sRPE): Multiplicar el valor RPE por la duración en minutos. Ejemplo: RPE 7 × 80 min = 560 Unidades Arbitrarias (UA).',
      'Paso 4 - Comparación con la carga crónica: Contrastar la carga aguda (últimos 7 días) con la carga crónica (media de los últimos 28 días) para obtener el ratio ACWR.',
      'Paso 5 - Toma de decisión técnica: Si el ratio ACWR supera 1.4 o el jugador reporta RPE > 8 en día regenerativo, reducir su volumen en un 30% en la siguiente sesión.'
    ],
    focoTecnico: 'Garantizar que el jugador responda con total sinceridad sin temor a ser juzgado o apartado del once titular.',
    erroresFrecuentes: [
      {
        error: 'Preguntar al grupo entero a viva voz (los jugadores tenderán a responder lo mismo que los capitanes).',
        correccion: 'Registro individual mediante planilla o aplicación digital.'
      }
    ],
    transferenciaJuego: 'Equipo con máxima frescura en el día de partido, reducción de lesiones no traumáticas en un 40% y mayor disponibilidad de plantilla.',
    variacionFacil: 'Registro simplificado clasificando la sesión en: Ligera (< 300 UA), Moderada (300-500 UA) o Dura (> 500 UA).',
    variacionDificil: 'Cruzar los datos de sRPE con cuestionarios diarios de bienestar (Wellbeing: Sueño, Agujetas, Estrés, Humor).'
  },
  {
    id: 'FIS-012',
    nombre: 'Protocolo de Recuperación Post-Partido: Hidroterapia y Ventana Nutricional',
    moduloId: 'mod6',
    moduloNombre: 'Monitorización de Cargas y Morfociclo',
    categoria: 'Recuperación & Cargas',
    intensidad: 'Media',
    duracionEstimada: '45 min post-partido',
    materiales: 'Bañeras o bidones de inmersión en agua fría (10-12°C), bebida recuperadora con carbohidratos y proteínas (ratio 4:1).',
    organizacion: 'Zona de vestuarios. Iniciar en los primeros 15 minutos tras el pitido final del encuentro oficial.',
    seriesRepeticiones: 'Aplicar obligatoriamente tras partidos de 90 minutos',
    descanso: 'N/A',
    rpeObjetivo: 'Recuperación acelerada',
    objetivoFisiologico: 'Reducir la inflamación celular, mitigar el daño muscular inducido por el ejercicio (DOMS) y restablecer las reservas de glucógeno hepático y muscular.',
    pasoAPaso: [
      'Paso 1 - Hidratación inmediata (0 a 10 min): Pesar al jugador si es posible. Beber 1.5 litros de líquidos con electrolitos por cada kilogramo de peso corporal perdido durante el partido.',
      'Paso 2 - Reposición glucogénica y proteica (10 a 25 min): Ingerir 1.2 g de carbohidratos de alto índice glucémico + 0.4 g de proteína por kg de peso (batido recuperador o fruta con proteína).',
      'Paso 3 - Inmersión en agua fría (25 a 40 min): Sumergir el cuerpo hasta el pecho en agua a 10-12°C durante 10 a 12 minutos continuos.',
      'Paso 4 - Movilidad pasiva ligera: 5 minutos de movilidad articular suave de tobillos y caderas sin estiramientos estáticos violentos.',
      'Paso 5 - Higiene del sueño (Noche): Dormir un mínimo de 8 a 9 horas en habitación oscura y fresca (18-20°C) para maximizar la liberación nocturna de hormona de crecimiento.'
    ],
    focoTecnico: 'No usar agua helada (< 8°C) ya que provoca vasoconstricción excesiva y dolor agudo innecesario.',
    erroresFrecuentes: [
      {
        error: 'Consumir alcohol o comida ultraprocesada en el vestuario post-partido bloqueando la síntesis proteica.',
        correccion: 'Proveer fruta fresca, batidos y comida limpia inmediatamente accesible en el vestuario.'
      }
    ],
    transferenciaJuego: 'Permite al equipo competir al 100% en semanas de doble partido (miércoles y domingo) sin caer en fatiga acumulativa.',
    variacionFacil: 'Duchas de contraste frío/calor (1 min caliente / 1 min fría x 5 ciclos) si no se dispone de cubetas de hielo.',
    variacionDificil: 'Añadir presoterapia con botas de compresión neumática durante 20 minutos tras la inmersión.'
  }
];

export const MODULOS_FISICOS: PhysicalModule[] = [
  {
    id: 'mod1',
    numero: 1,
    titulo: 'Módulo 1: Fuerza Funcional Específica y Core',
    subtitulo: 'Fuerza unilateral, cadenas cinéticas y estabilidad lumbopélvica',
    icono: 'Dumbbell',
    badge: 'Fuerza & Potencia',
    resumen: 'Entrenamiento de fuerza sin sobrecargas que entorpezcan la velocidad. Enfoque prioritario en fuerza monopodal, estabilidad lumbopélvica antirrotacional y equilibrio de cadenas musculares.',
    frecuenciaSemanal: '2 sesiones semanales (MD-4 y MD-2 adaptado)',
    objetivosClave: [
      'Aumentar la tasa de desarrollo de la fuerza (RFD) en arrancadas.',
      'Fortalecer el core como puente de transmisión biomecánica.',
      'Equilibrar el ratio isquiotibiales/cuádriceps por encima de 0.65.'
    ],
    protocolos: PROTOCOLOS_FISICOS.filter((p) => p.moduloId === 'mod1')
  },
  {
    id: 'mod2',
    numero: 2,
    titulo: 'Módulo 2: Velocidad, Aceleración y RSA',
    subtitulo: 'Aceleración lineal, cambios de dirección (COD) y capacidad repetida',
    icono: 'Zap',
    badge: 'Velocidad & Explosividad',
    resumen: 'Desarrollo de las 3 fases de la velocidad en el fútbol: el primer paso (0-5m), la aceleración de ruptura (5-15m) y la capacidad de repetir sprints al 100% de intensidad con recuperaciones incompletas.',
    frecuenciaSemanal: '2 sesiones semanales (MD-4 y MD-2)',
    objetivosClave: [
      'Perfeccionar la técnica de inclinación a 45° en aceleración.',
      'Mejorar la desaceleración excéntrica en cambios de dirección.',
      'Disminuir el porcentaje de caída en el test RSA por debajo del 6%.'
    ],
    protocolos: PROTOCOLOS_FISICOS.filter((p) => p.moduloId === 'mod2')
  },
  {
    id: 'mod3',
    numero: 3,
    titulo: 'Módulo 3: Resistencia Específica y HIIT en Fútbol',
    subtitulo: 'Potencia aeróbica máxima (VAM), HIIT corto y Small-Sided Games',
    icono: 'Activity',
    badge: 'Resistencia Específica',
    resumen: 'Entrenamiento de la resistencia metabólica intermitente que demanda el juego moderno, combinando tareas interválicas de alta intensidad con partidos reducidos competitivos.',
    frecuenciaSemanal: '1-2 sesiones semanales (MD-3 Día de Resistencia)',
    objetivosClave: [
      'Alcanzar pulsaciones > 88% FC Máx en tareas integradas.',
      'Aumentar la tolerancia al ácido láctico en situaciones de fatiga.',
      'Preservar la calidad técnica y la toma de decisiones al final del partido.'
    ],
    protocolos: PROTOCOLOS_FISICOS.filter((p) => p.moduloId === 'mod3')
  },
  {
    id: 'mod4',
    numero: 4,
    titulo: 'Módulo 4: Prevención de Lesiones y Protocolo FIFA 11+',
    subtitulo: 'Isquiotibiales, aductores, ligamento cruzado anterior y tobillos',
    icono: 'Shield',
    badge: 'Prevención Lesional',
    resumen: 'Protocolos basados en evidencia médica y científica para reducir más del 40% la incidencia de lesiones musculares y articulares a lo largo de toda la temporada competitiva.',
    frecuenciaSemanal: 'Aplicación diaria durante la fase de activación (15 min)',
    objetivosClave: [
      'Fortalecimiento excéntrico del bíceps femoral (Nordic Curl).',
      'Prevención de pubalgia mediante el ejercicio de Copenhague.',
      'Control neuromuscular para erradicar el valgo dinámico de rodilla.'
    ],
    protocolos: PROTOCOLOS_FISICOS.filter((p) => p.moduloId === 'mod4')
  },
  {
    id: 'mod5',
    numero: 5,
    titulo: 'Módulo 5: Circuitos Físico-Técnicos Integrados con Balón',
    subtitulo: 'Transferencia directa de la condición física a situaciones reales de juego',
    icono: 'Footprints',
    badge: 'Circuitos con Balón',
    resumen: 'Circuitos por estaciones que fusionan saltos, slaloms de agilidad y aceleraciones con gestos técnicos determinantes: controles orientados, centros y remates bajo estrés físico.',
    frecuenciaSemanal: '1 sesión semanal (MD-3 o MD-2 según objetivo)',
    objetivosClave: [
      'Reproducir la exigencia metabólica del partido con balón en juego.',
      'Acelerar las transiciones entre esfuerzo muscular y precisión motriz.',
      'Incrementar la competitividad y el compromiso del futbolista.'
    ],
    protocolos: PROTOCOLOS_FISICOS.filter((p) => p.moduloId === 'mod5')
  },
  {
    id: 'mod6',
    numero: 6,
    titulo: 'Módulo 6: Monitorización de Cargas (RPE) y Morfociclo Semanal',
    subtitulo: 'Cuantificación del esfuerzo, ratio agudo:crónico y protocolos de recuperación',
    icono: 'SlidersHorizontal',
    badge: 'Periodización & Cargas',
    resumen: 'Guía metodológica para que el cuerpo técnico organice la semana competitiva (Morfociclo Patrón) y monitorice la carga interna mediante la escala sRPE de Foster para evitar el sobreentrenamiento.',
    frecuenciaSemanal: 'Monitoreo diario post-entrenamiento y post-partido',
    objetivosClave: [
      'Calcular la carga de entrenamiento en Unidades Arbitrarias (UA).',
      'Mantener el ratio ACWR en el rango óptimo seguro (0.8 - 1.3).',
      'Implementar estrategias de hidroterapia, nutrición y sueño reparador.'
    ],
    protocolos: PROTOCOLOS_FISICOS.filter((p) => p.moduloId === 'mod6')
  }
];

export const MORFOCICLO_PATRON: MorfocicloDay[] = [
  {
    dia: 'MD+1',
    fase: 'Recuperación Activa y Regeneración',
    concepto: 'Limpieza de metabolitos y descarga del sistema nervioso central.',
    intensidad: 'Muy Baja (RPE 3-4)',
    volumen: 'Bajo',
    espacio: 'Amplio sin oposición',
    duracion: '45 minutos',
    descripcion: 'Sesión para los futbolistas que jugaron más de 60 minutos: trote suave, movilidad dinámica, estiramientos activos, hidroterapia y juego lúdico con balón.',
    pasoAPaso: [
      'Paso 1: 10 min de trote regenerativo a baja frecuencia cardíaca (< 65% FC Máx).',
      'Paso 2: 15 min de circuito de movilidad articular (cadera, tobillo y columna torácica).',
      'Paso 3: 10 min de rondos recreativos amplios a 2 toques sin presión física.',
      'Paso 4: 10 min de inmersión en agua fría (10-12°C) y feedback médico.'
    ],
    precauciones: 'Prohibido realizar trabajos de fuerza máxima o cambios de dirección bruscos.'
  },
  {
    dia: 'MD+2 / MD-5',
    fase: 'Día de Descanso Total',
    concepto: 'Desconexión mental y regeneración del tejido muscular.',
    intensidad: 'Nula',
    volumen: 'Cero',
    espacio: 'Fuera de las instalaciones',
    duracion: 'Descanso total',
    descripcion: 'Día libre reglamentario. Nutrición adecuada rica en micronutrientes, hidratación constante y mínimo 8-9 horas de sueño nocturno.',
    pasoAPaso: [
      'Paso 1: Caminata suave opcional de 20 minutos con la familia.',
      'Paso 2: Mantener ingesta de proteínas de calidad cada 3-4 horas.',
      'Paso 3: Cero estímulos competitivos ni análisis táctico estresante.'
    ],
    precauciones: 'Evitar actividades de impacto como pádel o deportes de riesgo.'
  },
  {
    dia: 'MD-4',
    fase: 'Día de Fuerza y Tensión Muscular',
    concepto: 'Espacios muy reducidos, duelos 1v1/2v2 y máxima tensión muscular.',
    intensidad: 'Muy Alta (RPE 8.5-9.5)',
    volumen: 'Medio',
    espacio: 'Muy Reducido (50-80 m² por jugador)',
    duracion: '75-80 minutos',
    descripcion: 'Se busca la máxima aceleración y frenada excéntrica. Tareas de fuerza funcional en gimnasio previas al campo y juegos reducidos con porteros de 1v1 a 3v3 con límite de tiempo corto.',
    pasoAPaso: [
      'Paso 1: 15 min de activación FIFA 11+ con énfasis en prevención de isquiotibiales y aductores.',
      'Paso 2: 20 min de circuito de fuerza preventiva (sentadilla búlgara, nórdico y saltos pliométricos).',
      'Paso 3: 25 min de duelos 1v1 y 2v2 a máxima intensidad con transiciones rápidas.',
      'Paso 4: 15 min de partido reducido 3v3 en 25x20m con series cortas de 2 minutos.',
      'Paso 5: 5 min de vuelta a la calma y registro del RPE individual.'
    ],
    precauciones: 'Dar micropausas suficientes para que la intensidad no decaiga.'
  },
  {
    dia: 'MD-3',
    fase: 'Día de Resistencia y Duración (Volumen Táctico)',
    concepto: 'Espacios amplios, partidos sectorizados 8v8 a 11v11 y volumen total.',
    intensidad: 'Alta (RPE 8-9)',
    volumen: 'Muy Alto (Pico de metros totales)',
    espacio: 'Amplio (150-250 m² por jugador)',
    duracion: '90 minutos',
    descripcion: 'El día de mayor carga de trabajo de la semana. Se entrena el modelo de juego principal en espacios reales, simulando el ritmo continuo del partido de competición.',
    pasoAPaso: [
      'Paso 1: 15 min de calentamiento con rondos posicionales 6v2 y posesiones dinámicas.',
      'Paso 2: 20 min de tarea táctica combinativa de área a área con centros laterales.',
      'Paso 3: 40 min de partido 10v10 o 11v11 en campo reglamentario dividido en 3 bloques de 12 min.',
      'Paso 4: 15 min de carrera intermitente metabólica complementaria para jugadores de menor minutaje.',
      'Paso 5: Vuelta a la calma, hidratación y batido recuperador.'
    ],
    precauciones: 'Monitorear la distancia total recorrida a alta intensidad (> 19.8 km/h).'
  },
  {
    dia: 'MD-2',
    fase: 'Día de Velocidad, Reactividad y Chispa',
    concepto: 'Máxima velocidad de desplazamiento, pausas completas y frescura mental.',
    intensidad: 'Máxima puntual (RPE 7-8 global)',
    volumen: 'Bajo',
    espacio: 'Medio con transiciones rápidas',
    duracion: '60 minutos',
    descripcion: 'Poco volumen pero máxima reactividad neuromuscular. Finalizaciones rápidas, sprints de 10-15m con salidas imprevistas y partidos 5v5 con porterías grandes.',
    pasoAPaso: [
      'Paso 1: 15 min de activación de agilidad y coordinación con escaleras y vallas bajas.',
      'Paso 2: 15 min de protocolo de aceleración pura (sprints de 10 a 20m con descanso completo de 90s).',
      'Paso 3: 20 min de finalizaciones a portería con centros, remates al primer toque y duelos 2v1 en velocidad.',
      'Paso 4: 10 min de partidos reducidos muy dinámicos con reinicio veloz de balones.',
      'Paso 5: Estiramientos dinámicos suaves.'
    ],
    precauciones: 'Evitar series largas que generen fatiga residual para el partido.'
  },
  {
    dia: 'MD-1',
    fase: 'Activación Previa y Balón Parado',
    concepto: 'Despertar neuromuscular, estrategia, jugadas ensayadas y confianza.',
    intensidad: 'Media-Baja (RPE 4-5)',
    volumen: 'Muy Bajo',
    espacio: 'Sectorizado',
    duracion: '45 minutos',
    descripcion: 'Sesión breve y lúdica previa a la competición. Rondo recreativo, 2 o 3 aceleraciones cortas de 5 metros y ensayo exhaustivo de saques de esquina, faltas y penaltis.',
    pasoAPaso: [
      'Paso 1: 10 min de rondo libre y juegos de activación con risas y cohesión de grupo.',
      'Paso 2: 5 min de progresiones de 5 a 10 metros para comprobar las botas y el césped.',
      'Paso 3: 25 min de ABP (Acciones a Balón Parado): córners ofensivos, barreras defensivas y saques de banda.',
      'Paso 4: 5 min de tiros libres directos y charla motivacional final del cuerpo técnico.'
    ],
    precauciones: 'Duración estrictamente controlada (< 50 min) para no vaciar depósitos de glucógeno.'
  },
  {
    dia: 'MD (Match Day)',
    fase: 'Día de Partido Oficial',
    concepto: 'Rendimiento competitivo máximo y aplicación táctica.',
    intensidad: 'Máxima (RPE 10/10)',
    volumen: 'Competitivo (90+ minutos)',
    espacio: 'Reglamentario',
    duracion: '110 minutos (incluye calentamiento prepartido)',
    descripcion: 'Activación previa reglamentaria de 25 minutos (movilidad, rondos 5v2, posesión corta, aceleraciones y finalizaciones). Competición oficial y protocolo de recuperación inmediato.',
    pasoAPaso: [
      'Paso 1: Activación prepartido estructurada de 25 min (0 a 10 min movilidad/trote, 10 a 18 min posesión, 18 a 23 min sprints y tiros).',
      'Paso 2: Charla final en vestuario y salida al terreno de juego.',
      'Paso 3: Disputa de los 90 minutos con hidratación en las pausas.',
      'Paso 4: Inmediato protocolo post-partido: batido recuperador en vestuario y baño de inmersión en frío.'
    ],
    precauciones: 'Supervisar el estado físico de los jugadores sustituidos para planificar su compensación en MD+1.'
  }
];
