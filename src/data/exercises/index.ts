import { Exercise, CategoryId } from '../../types';
import { exercises_1 } from './exercises-001-100';
import { exercises_2 } from './exercises-101-200';
import { exercises_3 } from './exercises-201-300';
import { exercises_4 } from './exercises-301-400';
import { exercises_5 } from './exercises-401-500';
import { exercises_6 } from './exercises-501-600';
import { exercises_7 } from './exercises-601-700';
import { exercises_8 } from './exercises-701-800';
import { exercises_9 } from './exercises-801-900';
import { exercises_10 } from './exercises-901-1000';

export const allExercises: Exercise[] = [
  ...exercises_1,
  ...exercises_2,
  ...exercises_3,
  ...exercises_4,
  ...exercises_5,
  ...exercises_6,
  ...exercises_7,
  ...exercises_8,
  ...exercises_9,
  ...exercises_10,
];

export const CATEGORIES_LIST: { id: CategoryId; name: string; count: number; icon: string; description: string }[] = [
  {
    id: '01. Calentamiento',
    name: 'Calentamiento',
    count: 65,
    icon: 'Flame',
    description: 'Movilidad articular, activación neuromuscular y juegos de posesión ligera para preparar el cuerpo y mente.'
  },
  {
    id: '02. Técnica Individual',
    name: 'Técnica Individual',
    count: 70,
    icon: 'Footprints',
    description: 'Control orientado, conducción rápida, dominio con ambas piernas, fintas y gestos técnicos esenciales.'
  },
  {
    id: '03. Pase y Recepción',
    name: 'Pase y Recepción',
    count: 75,
    icon: 'GitFork',
    description: 'Tercer hombre, paredes dinámicas, cambios de orientación y juego asociativo bajo presión.'
  },
  {
    id: '04. Regate y 1 contra 1',
    name: 'Regate y 1 contra 1',
    count: 65,
    icon: 'Zap',
    description: 'Duelos ofensivos y defensivos, fintas corporales, cambios de ritmo y desborde por bandas.'
  },
  {
    id: '05. Finalización y Tiro',
    name: 'Finalización y Tiro',
    count: 80,
    icon: 'Target',
    description: 'Disparos frontales, remate de centros, segundas jugadas, tiros con efecto y mano a mano.'
  },
  {
    id: '06. Ataque',
    name: 'Ataque',
    count: 65,
    icon: 'Swords',
    description: 'Salida limpia desde atrás, ataques posicionales, desmarques de ruptura y superioridades numéricas.'
  },
  {
    id: '07. Defensa',
    name: 'Defensa',
    count: 65,
    icon: 'Shield',
    description: 'Basculación de bloque, coberturas, permutas, presión alta tras pérdida y defensa de centros.'
  },
  {
    id: '08. Transiciones',
    name: 'Transiciones',
    count: 60,
    icon: 'ArrowLeftRight',
    description: 'Contraataques verticales inmediatos y repliegue defensivo intensivo tras pérdida del esférico.'
  },
  {
    id: '09. Táctica',
    name: 'Táctica',
    count: 65,
    icon: 'Compass',
    description: 'Ocupación racional de espacios, juego de posición, amplitud, profundidad e intervalos entre líneas.'
  },
  {
    id: '10. Velocidad y Agilidad',
    name: 'Velocidad y Agilidad',
    count: 60,
    icon: 'Gauge',
    description: 'Aceleración lineal, cambios de dirección (COD), coordinación neuromuscular y velocidad de reacción.'
  },
  {
    id: '11. Preparación Física',
    name: 'Preparación Física',
    count: 55,
    icon: 'Activity',
    description: 'Fuerza funcional, potencia aeróbica específica, juegos reducidos de alta intensidad (SSG) y RSA.'
  },
  {
    id: '12. Porteros',
    name: 'Porteros',
    count: 60,
    icon: 'HandMetal',
    description: 'Blocajes, desvíos acrobáticos, juego aéreo, achiques rápidos y distribución precisa con pies y manos.'
  },
  {
    id: '13. Fútbol Base',
    name: 'Fútbol Base',
    count: 65,
    icon: 'Users2',
    description: 'Metodología formativa lúdica para niños, juegos de coordinación motriz y toma de decisiones temprana.'
  },
  {
    id: '14. Ejercicios Individuales',
    name: 'Ejercicios Individuales',
    count: 50,
    icon: 'User',
    description: 'Entrenamientos en solitario con conos, pared de rebote y circuitos de auto-perfeccionamiento técnico.'
  },
  {
    id: '15. Ejercicios en Parejas',
    name: 'Ejercicios en Parejas',
    count: 55,
    icon: 'Users',
    description: 'Pases continuos en progresión, duelos 1v1 con relevo, centros y remates coordinados de a dos.'
  },
  {
    id: '16. Ejercicios Colectivos',
    name: 'Ejercicios Colectivos',
    count: 45,
    icon: 'Layers',
    description: 'Partidos reducidos condicionados, juegos de sector y situaciones de partido 7v7, 8v8 y 11v11.'
  }
];

export function getExerciseById(id: string): Exercise | undefined {
  return allExercises.find((e) => e.id.toLowerCase() === id.toLowerCase());
}

export function getExercisesByCategory(catId: CategoryId): Exercise[] {
  return allExercises.filter((e) => e.category === catId);
}
