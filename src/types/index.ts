export type CategoryId =
  | '01. Calentamiento'
  | '02. Técnica Individual'
  | '03. Pase y Recepción'
  | '04. Regate y 1 contra 1'
  | '05. Finalización y Tiro'
  | '06. Ataque'
  | '07. Defensa'
  | '08. Transiciones'
  | '09. Táctica'
  | '10. Velocidad y Agilidad'
  | '11. Preparación Física'
  | '12. Porteros'
  | '13. Fútbol Base'
  | '14. Ejercicios Individuales'
  | '15. Ejercicios en Parejas'
  | '16. Ejercicios Colectivos';

export type AgeGroup =
  | '6–8 años'
  | '9–11 años'
  | '12–14 años'
  | '15–17 años'
  | 'Adultos'
  | 'Todas las edades';

export type SkillLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

export type IntensityLevel = 'Baja' | 'Media' | 'Alta';

export type SpaceSize = 'Pequeño' | 'Medio' | 'Grande';

export type PlayerGroup = '1' | '2' | '3–5' | '6–10' | '11–15' | '16+';

export type ObjectiveFilter =
  | 'Técnica'
  | 'Pase'
  | 'Recepción'
  | 'Regate'
  | 'Finalización'
  | 'Ataque'
  | 'Defensa'
  | 'Táctica'
  | 'Transiciones'
  | 'Velocidad'
  | 'Agilidad'
  | 'Preparación Física'
  | 'Porteros';

export interface PitchElement {
  id: string;
  type: 'player' | 'cone' | 'ball' | 'goal' | 'arrow' | 'zone';
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  label?: string;
  team?: 'home' | 'away' | 'neutral' | 'gk';
  targetX?: number; // for arrows / passes
  targetY?: number;
  arrowType?: 'pass' | 'run' | 'shot'; // pass: dashed, run: wavy/dotted, shot: bold
  color?: string;
}

export interface PitchDiagramConfig {
  type: 'half_pitch' | 'full_pitch' | 'penalty_box' | 'rondos_grid' | 'lane_grid';
  elements: PitchElement[];
}

export interface Exercise {
  id: string; // EX001 to EX1000
  number: number;
  name: string;
  category: CategoryId;
  subcategory: string;
  objetivoPrincipal: string;
  objetivoTecnico: string;
  objetivoTatico: string;
  edad: AgeGroup;
  nivel: SkillLevel;
  jugadoresMin: number;
  jugadoresMax: number;
  jugadoresLabel: PlayerGroup;
  duracion: string;
  duracionMinutes: number;
  intensidad: IntensityLevel;
  espacio: SpaceSize;
  materiales: string;
  organizacion: string;
  desarrollo: string;
  pasoAPaso: string[];
  puntosClave: string[];
  erroresFrecuentes: string[];
  correcciones: string[];
  variacionFacil: string;
  variacionDificil: string;
  progresion: string;
  regresion: string;
  posiciones: string;
  tags: string[];
  pitchDiagram?: PitchDiagramConfig;
}

export interface FilterState {
  searchQuery: string;
  objective: string;
  category: string;
  age: string;
  level: string;
  players: string;
  duration: string;
  intensity: string;
  space: string;
}

export interface FichaTecnica {
  id: string;
  title: string;
  type: 'ficha_sesion' | 'ficha_ejercicio' | 'ficha_evaluacion_jugador' | 'ficha_evaluacion_equipo' | 'plan_semanal';
  createdAt: string;
  updatedAt: string;
  data: Record<string, any>;
}

export interface TrainingPhaseItem {
  phase: string;
  duration: string;
  exercise: Exercise;
}

export interface TrainingSession {
  id: string;
  title: string;
  date: string;
  duration: string;
  ageGroup: string;
  level: SkillLevel;
  playersCount: string;
  objective: string;
  exercises: TrainingPhaseItem[];
  notes?: string;
}

// Technical Sheets
export interface FichaSesion {
  id: string;
  tipo: 'sesion';
  fecha: string;
  equipo: string;
  categoria: string;
  edad: string;
  entrenador: string;
  objetivo: string;
  duracion: string;
  numeroJugadores: string;
  materiales: string;
  intensidad: string;
  observaciones: string;
  ejerciciosIds: string[];
  createdAt: string;
}

export interface FichaEjercicio {
  id: string;
  tipo: 'ejercicio';
  nombre: string;
  objetivo: string;
  categoria: string;
  duracion: string;
  jugadores: string;
  materiales: string;
  organizacion: string;
  desarrollo: string;
  puntosClave: string;
  variaciones: string;
  observaciones: string;
  createdAt: string;
}

export interface FichaEvaluacionJugador {
  id: string;
  tipo: 'jugador';
  nombre: string;
  fecha: string;
  posicion: string;
  tecnica: number; // 1 - 10
  pase: number;
  control: number;
  regate: number;
  finalizacion: number;
  tactica: number;
  defensa: number;
  velocidad: number;
  actitud: number;
  observaciones: string;
  createdAt: string;
}

export interface FichaEvaluacionEquipo {
  id: string;
  tipo: 'equipo';
  equipo: string;
  fecha: string;
  organizacionOfensiva: number; // 1 - 10
  organizacionDefensiva: number;
  transiciones: number;
  presion: number;
  posesion: number;
  finalizacion: number;
  comunicacion: number;
  intensidad: number;
  observaciones: string;
  createdAt: string;
}

export interface DiaPlanSemanal {
  dia: string;
  objetivo: string;
  duracion: string;
  tipoEntrenamiento: string;
  ejercicios: string;
  observaciones: string;
}

export interface FichaPlanSemanal {
  id: string;
  tipo: 'semanal';
  titulo: string;
  semana: string;
  equipo: string;
  dias: {
    lunes: DiaPlanSemanal;
    martes: DiaPlanSemanal;
    miercoles: DiaPlanSemanal;
    jueves: DiaPlanSemanal;
    viernes: DiaPlanSemanal;
    sabado: DiaPlanSemanal;
    domingo: DiaPlanSemanal;
  };
  createdAt: string;
}

export type AnyFichaTecnica =
  | FichaSesion
  | FichaEjercicio
  | FichaEvaluacionJugador
  | FichaEvaluacionEquipo
  | FichaPlanSemanal;

export interface BonusItem {
  id: number;
  numberStr: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  badge: string;
  iconName: string;
}
