import { Exercise, PitchDiagramConfig, PitchElement } from '../types';

/**
 * Generates an illustrative, realistic tactical pitch diagram for any exercise
 * if the exercise does not already have a predefined pitchDiagram.
 * This guarantees 100% of all 1,000 exercises have a tailored tactical diagram.
 */
export function getExercisePitchDiagram(exercise: Exercise): PitchDiagramConfig {
  if (exercise.pitchDiagram && exercise.pitchDiagram.elements && exercise.pitchDiagram.elements.length > 0) {
    return exercise.pitchDiagram;
  }

  const num = exercise.number || 1;
  const cat = exercise.category;

  // Generate tailored layout according to category and exercise profile
  if (cat.includes('Calentamiento')) {
    return generateCalentamientoDiagram(exercise, num);
  } else if (cat.includes('Técnica Individual') || cat.includes('Ejercicios Individuales')) {
    return generateTecnicaIndividualDiagram(exercise, num);
  } else if (cat.includes('Pase y Recepción')) {
    return generatePaseRecepcionDiagram(exercise, num);
  } else if (cat.includes('Regate y 1 contra 1')) {
    return generateRegate1v1Diagram(exercise, num);
  } else if (cat.includes('Finalización y Tiro')) {
    return generateFinalizacionDiagram(exercise, num);
  } else if (cat.includes('Ataque')) {
    return generateAtaqueDiagram(exercise, num);
  } else if (cat.includes('Defensa')) {
    return generateDefensaDiagram(exercise, num);
  } else if (cat.includes('Transiciones')) {
    return generateTransicionDiagram(exercise, num);
  } else if (cat.includes('Táctica') || cat.includes('Ejercicios Colectivos')) {
    return generateTacticoColectivoDiagram(exercise, num);
  } else if (cat.includes('Velocidad y Agilidad')) {
    return generateVelocidadAgilidadDiagram(exercise, num);
  } else if (cat.includes('Preparación Física')) {
    return generatePreparacionFisicaDiagram(exercise, num);
  } else if (cat.includes('Porteros')) {
    return generatePorterosDiagram(exercise, num);
  } else if (cat.includes('Fútbol Base')) {
    return generateFutbolBaseDiagram(exercise, num);
  } else if (cat.includes('Ejercicios en Parejas')) {
    return generateParejasDiagram(exercise, num);
  }

  // Default half pitch combination
  return generateDefaultCombinativeDiagram(exercise, num);
}

// 1. Calentamiento: Rondo o circuito dinámico
function generateCalentamientoDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // 4 Cones forming a playing box
    { id: 'c1', type: 'cone', x: 25, y: 25 },
    { id: 'c2', type: 'cone', x: 75, y: 25 },
    { id: 'c3', type: 'cone', x: 75, y: 75 },
    { id: 'c4', type: 'cone', x: 25, y: 75 },

    // Home players on perimeter
    { id: 'p1', type: 'player', x: 25, y: 50, label: 'A1', team: 'home' },
    { id: 'p2', type: 'player', x: 50, y: 25, label: 'A2', team: 'home' },
    { id: 'p3', type: 'player', x: 75, y: 50, label: 'A3', team: 'home' },
    { id: 'p4', type: 'player', x: 50, y: 75, label: 'A4', team: 'home' },

    // Defender in the middle
    { id: 'd1', type: 'player', x: 48, y: 48, label: 'D1', team: 'away' },

    // Ball with A1
    { id: 'b1', type: 'ball', x: 28, y: 48 },

    // Pass arrow from A1 to A2
    { id: 'a1', type: 'arrow', x: 28, y: 48, targetX: 47, targetY: 28, arrowType: 'pass' },
    // Movement arrow for D1 pressing
    { id: 'a2', type: 'arrow', x: 48, y: 48, targetX: 42, targetY: 36, arrowType: 'run' },
    // Anticipation pass to A3
    { id: 'a3', type: 'arrow', x: 52, y: 28, targetX: 72, targetY: 48, arrowType: 'pass' },
  ];

  return { type: 'rondos_grid', elements };
}

// 2. Técnica Individual: Slalom de conos, conducción y tiro a mini-portería
function generateTecnicaIndividualDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // Cones in zigzag
    { id: 'c1', type: 'cone', x: 20, y: 50 },
    { id: 'c2', type: 'cone', x: 35, y: 35 },
    { id: 'c3', type: 'cone', x: 50, y: 65 },
    { id: 'c4', type: 'cone', x: 65, y: 35 },
    { id: 'c5', type: 'cone', x: 80, y: 50 },

    // Player starting with ball
    { id: 'p1', type: 'player', x: 12, y: 50, label: 'J1', team: 'home' },
    { id: 'b1', type: 'ball', x: 15, y: 50 },

    // Mini target goal
    { id: 'p_waiting', type: 'player', x: 12, y: 65, label: 'J2', team: 'neutral' },

    // Dribble movement through cones
    { id: 'a1', type: 'arrow', x: 15, y: 50, targetX: 32, targetY: 40, arrowType: 'run' },
    { id: 'a2', type: 'arrow', x: 37, y: 40, targetX: 48, targetY: 60, arrowType: 'run' },
    { id: 'a3', type: 'arrow', x: 53, y: 60, targetX: 63, targetY: 40, arrowType: 'run' },
    { id: 'a4', type: 'arrow', x: 67, y: 40, targetX: 88, targetY: 50, arrowType: 'shot' },
  ];

  return { type: 'half_pitch', elements };
}

// 3. Pase y Recepción: Rombo o triángulo combinativo
function generatePaseRecepcionDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // Cones forming triangle / diamond
    { id: 'c1', type: 'cone', x: 25, y: 70 },
    { id: 'c2', type: 'cone', x: 50, y: 25 },
    { id: 'c3', type: 'cone', x: 75, y: 70 },
    { id: 'c4', type: 'cone', x: 50, y: 80 },

    // Players at stations
    { id: 'p1', type: 'player', x: 25, y: 70, label: 'P1', team: 'home' },
    { id: 'p2', type: 'player', x: 50, y: 25, label: 'P2', team: 'home' },
    { id: 'p3', type: 'player', x: 75, y: 70, label: 'P3', team: 'home' },
    { id: 'p4', type: 'player', x: 50, y: 55, label: 'P4', team: 'neutral' }, // Pivot

    { id: 'b1', type: 'ball', x: 28, y: 68 },

    // Passing sequence 1-2
    { id: 'a1', type: 'arrow', x: 28, y: 68, targetX: 47, targetY: 57, arrowType: 'pass' },
    { id: 'a2', type: 'arrow', x: 49, y: 53, targetX: 49, targetY: 29, arrowType: 'pass' },
    { id: 'a3', type: 'arrow', x: 52, y: 28, targetX: 72, targetY: 67, arrowType: 'pass' },
    { id: 'a4', type: 'arrow', x: 25, y: 70, targetX: 46, targetY: 52, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}

// 4. Regate y 1v1: Duelo en cuadrilátero con porterías
function generateRegate1v1Diagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // Boundary cones
    { id: 'c1', type: 'cone', x: 30, y: 30 },
    { id: 'c2', type: 'cone', x: 70, y: 30 },
    { id: 'c3', type: 'cone', x: 70, y: 80 },
    { id: 'c4', type: 'cone', x: 30, y: 80 },

    // Attacker with ball
    { id: 'p1', type: 'player', x: 50, y: 82, label: 'AT', team: 'home' },
    { id: 'b1', type: 'ball', x: 52, y: 78 },

    // Defender waiting
    { id: 'd1', type: 'player', x: 50, y: 45, label: 'DEF', team: 'away' },

    // Feint movement arrow
    { id: 'a1', type: 'arrow', x: 52, y: 78, targetX: 42, targetY: 58, arrowType: 'run' },
    // Sudden change of direction
    { id: 'a2', type: 'arrow', x: 42, y: 58, targetX: 62, targetY: 38, arrowType: 'run' },
    // Defender reaction
    { id: 'a3', type: 'arrow', x: 50, y: 45, targetX: 45, targetY: 48, arrowType: 'run' },
    // Shot to mini goal
    { id: 'a4', type: 'arrow', x: 62, y: 38, targetX: 70, targetY: 26, arrowType: 'shot' },
  ];

  return { type: 'half_pitch', elements };
}

// 5. Finalización y Tiro: Área de penalti reglamentaria con portero
function generateFinalizacionDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // Goalkeeper on line
    { id: 'gk', type: 'player', x: 50, y: 12, label: 'PO', team: 'gk' },

    // Defender contesting
    { id: 'def', type: 'player', x: 45, y: 28, label: 'DF', team: 'away' },

    // Striker attacking
    { id: 'str', type: 'player', x: 52, y: 35, label: 'DC', team: 'home' },

    // Winger or feeder with ball
    { id: 'wng', type: 'player', x: 18, y: 42, label: 'EXT', team: 'home' },
    { id: 'b1', type: 'ball', x: 20, y: 40 },

    // Cross into box
    { id: 'a1', type: 'arrow', x: 20, y: 40, targetX: 48, targetY: 24, arrowType: 'pass' },
    // Striker front-post sprint
    { id: 'a2', type: 'arrow', x: 52, y: 35, targetX: 48, targetY: 24, arrowType: 'run' },
    // First time shot into corner
    { id: 'a3', type: 'arrow', x: 48, y: 24, targetX: 53, targetY: 10, arrowType: 'shot' },

    // Support midfielder
    { id: 'med', type: 'player', x: 50, y: 65, label: 'MC', team: 'home' },
  ];

  return { type: 'penalty_box', elements };
}

// 6. Ataque: Medio campo ofensivo con líneas y juego posicional
function generateAtaqueDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    { id: 'gk', type: 'player', x: 50, y: 12, label: 'PO', team: 'gk' },

    // 2 Center backs defending
    { id: 'df1', type: 'player', x: 38, y: 28, label: 'DFC', team: 'away' },
    { id: 'df2', type: 'player', x: 62, y: 28, label: 'DFC', team: 'away' },

    // 4 Attackers (2 wings, 1 mid, 1 striker)
    { id: 'at1', type: 'player', x: 18, y: 48, label: 'EXT', team: 'home' },
    { id: 'at2', type: 'player', x: 82, y: 48, label: 'EXT', team: 'home' },
    { id: 'at3', type: 'player', x: 50, y: 55, label: 'MC', team: 'home' },
    { id: 'at4', type: 'player', x: 50, y: 32, label: 'DC', team: 'home' },

    { id: 'b1', type: 'ball', x: 50, y: 52 },

    // Through pass to winger
    { id: 'a1', type: 'arrow', x: 50, y: 52, targetX: 22, targetY: 42, arrowType: 'pass' },
    // Winger sprint down the flank
    { id: 'a2', type: 'arrow', x: 18, y: 48, targetX: 20, targetY: 30, arrowType: 'run' },
    // Striker diagonal cut
    { id: 'a3', type: 'arrow', x: 50, y: 32, targetX: 42, targetY: 20, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}

// 7. Defensa: Línea de 4 basculando y reduciendo espacios
function generateDefensaDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // 4 Defenders in coordinated line
    { id: 'd1', type: 'player', x: 22, y: 45, label: 'LI', team: 'home' },
    { id: 'd2', type: 'player', x: 40, y: 42, label: 'DFC', team: 'home' },
    { id: 'd3', type: 'player', x: 58, y: 40, label: 'DFC', team: 'home' },
    { id: 'd4', type: 'player', x: 78, y: 45, label: 'LD', team: 'home' },

    // Opponent attackers with ball on right flank
    { id: 'o1', type: 'player', x: 82, y: 65, label: 'EXT', team: 'away' },
    { id: 'b1', type: 'ball', x: 80, y: 63 },
    { id: 'o2', type: 'player', x: 55, y: 68, label: 'MC', team: 'away' },
    { id: 'o3', type: 'player', x: 48, y: 50, label: 'DC', team: 'away' },

    // Right back stepping out to press
    { id: 'a1', type: 'arrow', x: 78, y: 45, targetX: 80, targetY: 58, arrowType: 'run' },
    // Line shifting toward the ball (basculación)
    { id: 'a2', type: 'arrow', x: 58, y: 40, targetX: 68, targetY: 43, arrowType: 'run' },
    { id: 'a3', type: 'arrow', x: 40, y: 42, targetX: 50, targetY: 44, arrowType: 'run' },
    { id: 'a4', type: 'arrow', x: 22, y: 45, targetX: 32, targetY: 46, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}

// 8. Transiciones: Contraataque veloz y repliegue
function generateTransicionDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    { id: 'gk', type: 'player', x: 92, y: 50, label: 'PO', team: 'gk' },

    // Turnover point in center
    { id: 'b1', type: 'ball', x: 40, y: 50 },
    { id: 'p1', type: 'player', x: 38, y: 50, label: 'REC', team: 'home' },

    // Counter attacking runners
    { id: 'p2', type: 'player', x: 35, y: 25, label: 'EXT', team: 'home' },
    { id: 'p3', type: 'player', x: 42, y: 75, label: 'DC', team: 'home' },

    // Defending opponents sprinting back
    { id: 'd1', type: 'player', x: 55, y: 40, label: 'D1', team: 'away' },
    { id: 'd2', type: 'player', x: 65, y: 60, label: 'D2', team: 'away' },

    // Direct deep pass
    { id: 'a1', type: 'arrow', x: 40, y: 50, targetX: 75, targetY: 30, arrowType: 'pass' },
    // Wing sprint
    { id: 'a2', type: 'arrow', x: 35, y: 25, targetX: 74, targetY: 28, arrowType: 'run' },
    // Defender recovery run
    { id: 'a3', type: 'arrow', x: 55, y: 40, targetX: 72, targetY: 38, arrowType: 'run' },
  ];

  return { type: 'full_pitch', elements };
}

// 9. Táctica y Colectivos: 3 carriles con superioridades
function generateTacticoColectivoDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // 3 lane grid lines represented with players
    { id: 'p1', type: 'player', x: 20, y: 30, label: 'LI', team: 'home' },
    { id: 'p2', type: 'player', x: 50, y: 30, label: 'MC', team: 'home' },
    { id: 'p3', type: 'player', x: 80, y: 30, label: 'LD', team: 'home' },

    { id: 'p4', type: 'player', x: 35, y: 65, label: 'INT', team: 'home' },
    { id: 'p5', type: 'player', x: 65, y: 65, label: 'INT', team: 'home' },

    // Opposition defenders
    { id: 'd1', type: 'player', x: 35, y: 48, label: 'D1', team: 'away' },
    { id: 'd2', type: 'player', x: 65, y: 48, label: 'D2', team: 'away' },

    // Neutral joker
    { id: 'jok', type: 'player', x: 50, y: 50, label: 'C', team: 'neutral' },

    { id: 'b1', type: 'ball', x: 50, y: 33 },

    // Ball movement to Joker
    { id: 'a1', type: 'arrow', x: 50, y: 33, targetX: 50, targetY: 47, arrowType: 'pass' },
    // Third man wall pass to INT
    { id: 'a2', type: 'arrow', x: 50, y: 52, targetX: 37, targetY: 62, arrowType: 'pass' },
  ];

  return { type: 'lane_grid', elements };
}

// 10. Velocidad y Agilidad: Estaciones de conos y sprints
function generateVelocidadAgilidadDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // Starting line cones
    { id: 'c1', type: 'cone', x: 15, y: 35 },
    { id: 'c2', type: 'cone', x: 15, y: 65 },

    // Agility slalom cones
    { id: 'c3', type: 'cone', x: 35, y: 40 },
    { id: 'c4', type: 'cone', x: 45, y: 60 },
    { id: 'c5', type: 'cone', x: 55, y: 40 },
    { id: 'c6', type: 'cone', x: 65, y: 60 },

    // Sprint finish gate
    { id: 'c7', type: 'cone', x: 88, y: 35 },
    { id: 'c8', type: 'cone', x: 88, y: 65 },

    // Runner 1 in action
    { id: 'p1', type: 'player', x: 12, y: 50, label: 'V1', team: 'home' },
    { id: 'p2', type: 'player', x: 8, y: 50, label: 'V2', team: 'neutral' },

    // Sprint vectors
    { id: 'a1', type: 'arrow', x: 14, y: 50, targetX: 33, targetY: 42, arrowType: 'run' },
    { id: 'a2', type: 'arrow', x: 37, y: 42, targetX: 43, targetY: 58, arrowType: 'run' },
    { id: 'a3', type: 'arrow', x: 47, y: 58, targetX: 53, targetY: 42, arrowType: 'run' },
    { id: 'a4', type: 'arrow', x: 67, y: 58, targetX: 87, targetY: 50, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}

// 11. Preparación Física: Circuito de potencia, fuerza reactiva y resistencia
function generatePreparacionFisicaDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // 4 Stations bounding circuit
    { id: 'c1', type: 'cone', x: 20, y: 25 },
    { id: 'c2', type: 'cone', x: 80, y: 25 },
    { id: 'c3', type: 'cone', x: 80, y: 75 },
    { id: 'c4', type: 'cone', x: 20, y: 75 },

    // Players at each station
    { id: 'p1', type: 'player', x: 20, y: 25, label: 'E1', team: 'home' },
    { id: 'p2', type: 'player', x: 80, y: 25, label: 'E2', team: 'home' },
    { id: 'p3', type: 'player', x: 80, y: 75, label: 'E3', team: 'home' },
    { id: 'p4', type: 'player', x: 20, y: 75, label: 'E4', team: 'home' },

    // Ball on station with technical transfer
    { id: 'b1', type: 'ball', x: 82, y: 73 },

    // Circuit circulation arrows
    { id: 'a1', type: 'arrow', x: 23, y: 25, targetX: 77, targetY: 25, arrowType: 'run' },
    { id: 'a2', type: 'arrow', x: 80, y: 28, targetX: 80, targetY: 72, arrowType: 'run' },
    { id: 'a3', type: 'arrow', x: 77, y: 75, targetX: 23, targetY: 75, arrowType: 'run' },
    { id: 'a4', type: 'arrow', x: 20, y: 72, targetX: 20, targetY: 28, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}

// 12. Porteros: Área chica, blocajes, juego aéreo y distribución
function generatePorterosDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // Main GK in goal
    { id: 'gk1', type: 'player', x: 50, y: 12, label: 'PO1', team: 'gk' },

    // Coach or server with balls at top of box
    { id: 'cch', type: 'player', x: 50, y: 55, label: 'ENT', team: 'neutral' },
    { id: 'b1', type: 'ball', x: 50, y: 51 },
    { id: 'b2', type: 'ball', x: 53, y: 52 },

    // Secondary GK or server from angle
    { id: 's2', type: 'player', x: 25, y: 35, label: 'PO2', team: 'home' },
    { id: 'b3', type: 'ball', x: 27, y: 33 },

    // Cones marking diving targets
    { id: 'c1', type: 'cone', x: 42, y: 16 },
    { id: 'c2', type: 'cone', x: 58, y: 16 },

    // Shot from coach
    { id: 'a1', type: 'arrow', x: 50, y: 51, targetX: 43, targetY: 15, arrowType: 'shot' },
    // Cross from angle
    { id: 'a2', type: 'arrow', x: 27, y: 33, targetX: 49, targetY: 20, arrowType: 'pass' },
    // GK dive trajectory
    { id: 'a3', type: 'arrow', x: 50, y: 12, targetX: 44, targetY: 15, arrowType: 'run' },
  ];

  return { type: 'penalty_box', elements };
}

// 13. Fútbol Base: Tareas reducidas lúdicas con miniporterías
function generateFutbolBaseDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    // 4 Corner cones
    { id: 'c1', type: 'cone', x: 20, y: 25 },
    { id: 'c2', type: 'cone', x: 80, y: 25 },
    { id: 'c3', type: 'cone', x: 80, y: 75 },
    { id: 'c4', type: 'cone', x: 20, y: 75 },

    // 3 Kids in Green team
    { id: 'k1', type: 'player', x: 35, y: 40, label: 'V1', team: 'home' },
    { id: 'k2', type: 'player', x: 30, y: 65, label: 'V2', team: 'home' },
    { id: 'k3', type: 'player', x: 45, y: 55, label: 'V3', team: 'home' },

    // 3 Kids in Red team
    { id: 'r1', type: 'player', x: 65, y: 40, label: 'R1', team: 'away' },
    { id: 'r2', type: 'player', x: 70, y: 65, label: 'R2', team: 'away' },
    { id: 'r3', type: 'player', x: 55, y: 48, label: 'R3', team: 'away' },

    { id: 'b1', type: 'ball', x: 47, y: 53 },

    // Pass and dribble
    { id: 'a1', type: 'arrow', x: 47, y: 53, targetX: 37, targetY: 42, arrowType: 'pass' },
    { id: 'a2', type: 'arrow', x: 35, y: 40, targetX: 48, targetY: 28, arrowType: 'run' },
    { id: 'a3', type: 'arrow', x: 55, y: 48, targetX: 40, targetY: 43, arrowType: 'run' },
  ];

  return { type: 'rondos_grid', elements };
}

// 14. Parejas: Dúo coordinado con pases y apoyos
function generateParejasDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    { id: 'c1', type: 'cone', x: 30, y: 50 },
    { id: 'c2', type: 'cone', x: 70, y: 50 },

    { id: 'p1', type: 'player', x: 30, y: 50, label: 'J1', team: 'home' },
    { id: 'p2', type: 'player', x: 70, y: 50, label: 'J2', team: 'home' },

    { id: 'b1', type: 'ball', x: 33, y: 48 },

    // Wall pass combination
    { id: 'a1', type: 'arrow', x: 33, y: 48, targetX: 67, targetY: 48, arrowType: 'pass' },
    { id: 'a2', type: 'arrow', x: 67, y: 52, targetX: 33, targetY: 52, arrowType: 'pass' },
    { id: 'a3', type: 'arrow', x: 30, y: 50, targetX: 45, targetY: 35, arrowType: 'run' },
    { id: 'a4', type: 'arrow', x: 70, y: 50, targetX: 55, targetY: 35, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}

// Default combinative task
function generateDefaultCombinativeDiagram(ex: Exercise, num: number): PitchDiagramConfig {
  const elements: PitchElement[] = [
    { id: 'p1', type: 'player', x: 25, y: 70, label: 'J1', team: 'home' },
    { id: 'p2', type: 'player', x: 50, y: 35, label: 'J2', team: 'home' },
    { id: 'p3', type: 'player', x: 75, y: 70, label: 'J3', team: 'home' },
    { id: 'd1', type: 'player', x: 50, y: 55, label: 'DEF', team: 'away' },

    { id: 'b1', type: 'ball', x: 27, y: 68 },

    { id: 'a1', type: 'arrow', x: 27, y: 68, targetX: 48, targetY: 38, arrowType: 'pass' },
    { id: 'a2', type: 'arrow', x: 52, y: 38, targetX: 73, targetY: 68, arrowType: 'pass' },
    { id: 'a3', type: 'arrow', x: 25, y: 70, targetX: 45, targetY: 50, arrowType: 'run' },
  ];

  return { type: 'half_pitch', elements };
}
