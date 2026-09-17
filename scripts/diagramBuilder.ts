import { PitchDiagramConfig, PitchElement } from '../src/types';

export function buildPitchDiagram(
  category: string,
  subcategory: string,
  age: string,
  space: string,
  playersCount: number
): PitchDiagramConfig {
  const catLower = category.toLowerCase();
  const subLower = subcategory.toLowerCase();

  // 1. Ejercicios Individuales (1 solo jugador: técnica solitaria, slalom, rebote o precisión)
  if (playersCount === 1 || catLower.includes('individual')) {
    return {
      type: 'lane_grid',
      elements: [
        { id: 'c1', type: 'cone', x: 25, y: 50, color: '#f59e0b' },
        { id: 'c2', type: 'cone', x: 40, y: 35, color: '#f59e0b' },
        { id: 'c3', type: 'cone', x: 55, y: 65, color: '#f59e0b' },
        { id: 'c4', type: 'cone', x: 70, y: 40, color: '#f59e0b' },
        { id: 'goal_mini', type: 'goal', x: 88, y: 50 },
        { id: 'p1', type: 'player', team: 'home', label: '1', x: 15, y: 50 },
        { id: 'ball1', type: 'ball', x: 18, y: 48 },
        { id: 'arr_slalom1', type: 'arrow', arrowType: 'run', x: 18, y: 48, targetX: 38, targetY: 38 },
        { id: 'arr_slalom2', type: 'arrow', arrowType: 'run', x: 42, y: 38, targetX: 53, targetY: 62 },
        { id: 'arr_finish', type: 'arrow', arrowType: 'shot', x: 72, y: 42, targetX: 86, targetY: 49 }
      ]
    };
  }

  // 2. Ejercicios en Parejas (Exactamente 2 jugadores en cooperación o duelo directo)
  if (playersCount === 2 || catLower.includes('pareja')) {
    return {
      type: 'lane_grid',
      elements: [
        { id: 'c1', type: 'cone', x: 25, y: 35, color: '#10b981' },
        { id: 'c2', type: 'cone', x: 25, y: 65, color: '#10b981' },
        { id: 'c3', type: 'cone', x: 75, y: 35, color: '#10b981' },
        { id: 'c4', type: 'cone', x: 75, y: 65, color: '#10b981' },
        { id: 'p1', type: 'player', team: 'home', label: 'A', x: 30, y: 50 },
        { id: 'p2', type: 'player', team: 'home', label: 'B', x: 70, y: 50 },
        { id: 'ball1', type: 'ball', x: 33, y: 48 },
        { id: 'pass_ab', type: 'arrow', arrowType: 'pass', x: 34, y: 48, targetX: 66, targetY: 48 },
        { id: 'run_a', type: 'arrow', arrowType: 'run', x: 32, y: 52, targetX: 48, targetY: 38 },
        { id: 'pass_return', type: 'arrow', arrowType: 'pass', x: 67, y: 52, targetX: 50, targetY: 40 }
      ]
    };
  }

  // 3. Fútbol Base / Iniciación Infantil (6–8 años y 9–11 años base: lúdico, multi-conos de colores y mini-metas)
  if (catLower.includes('base') || age === '6–8 años') {
    return {
      type: 'rondos_grid',
      elements: [
        { id: 'c1', type: 'cone', x: 20, y: 25, color: '#3b82f6' },
        { id: 'c2', type: 'cone', x: 80, y: 25, color: '#ef4444' },
        { id: 'c3', type: 'cone', x: 80, y: 75, color: '#f59e0b' },
        { id: 'c4', type: 'cone', x: 20, y: 75, color: '#10b981' },
        { id: 'goal_k1', type: 'goal', x: 16, y: 50 },
        { id: 'goal_k2', type: 'goal', x: 84, y: 50 },
        { id: 'kid1', type: 'player', team: 'home', label: '1', x: 35, y: 40 },
        { id: 'kid2', type: 'player', team: 'home', label: '2', x: 65, y: 40 },
        { id: 'kid3', type: 'player', team: 'home', label: '3', x: 50, y: 65 },
        { id: 'coach', type: 'player', team: 'neutral', label: 'PROFE', x: 50, y: 22 },
        { id: 'ball1', type: 'ball', x: 38, y: 42 },
        { id: 'ball2', type: 'ball', x: 62, y: 42 },
        { id: 'fun_arrow', type: 'arrow', arrowType: 'run', x: 37, y: 44, targetX: 47, targetY: 58 }
      ]
    };
  }

  // 4. Porteros (Goalkeepers)
  if (catLower.includes('portero')) {
    return {
      type: 'penalty_box',
      elements: [
        { id: 'goal_main', type: 'goal', x: 50, y: 12 },
        { id: 'gk1', type: 'player', team: 'gk', label: 'POR', x: 50, y: 18 },
        { id: 'coach', type: 'player', team: 'neutral', label: 'ENT', x: 50, y: 55 },
        { id: 'c1', type: 'cone', x: 42, y: 22, color: '#f59e0b' },
        { id: 'c2', type: 'cone', x: 58, y: 22, color: '#f59e0b' },
        { id: 'c3', type: 'cone', x: 38, y: 40, color: '#ef4444' },
        { id: 'c4', type: 'cone', x: 62, y: 40, color: '#ef4444' },
        { id: 'ball1', type: 'ball', x: 49, y: 51 },
        { id: 'pass1', type: 'arrow', arrowType: 'shot', x: 50, y: 51, targetX: 50, targetY: 22 }
      ]
    };
  }

  // 5. Finalización y Tiro (Finishing & Shooting)
  if (catLower.includes('finalización') || catLower.includes('tiro')) {
    return {
      type: 'penalty_box',
      elements: [
        { id: 'goal_main', type: 'goal', x: 50, y: 10 },
        { id: 'gk', type: 'player', team: 'gk', label: '1', x: 50, y: 16 },
        { id: 'att1', type: 'player', team: 'home', label: '9', x: 48, y: 45 },
        { id: 'att2', type: 'player', team: 'home', label: '10', x: 62, y: 60 },
        { id: 'def1', type: 'player', team: 'away', label: '4', x: 45, y: 30 },
        { id: 'c1', type: 'cone', x: 30, y: 50, color: '#f59e0b' },
        { id: 'c2', type: 'cone', x: 70, y: 50, color: '#f59e0b' },
        { id: 'ball', type: 'ball', x: 60, y: 58 },
        { id: 'pass_arr', type: 'arrow', arrowType: 'pass', x: 60, y: 57, targetX: 50, targetY: 46 },
        { id: 'shot_arr', type: 'arrow', arrowType: 'shot', x: 49, y: 44, targetX: 49, targetY: 14 }
      ]
    };
  }

  // 6. Regate y 1 contra 1 (Dribbling & 1v1)
  if (catLower.includes('regate') || catLower.includes('1 contra 1')) {
    return {
      type: 'lane_grid',
      elements: [
        { id: 'c1', type: 'cone', x: 35, y: 25, color: '#f59e0b' },
        { id: 'c2', type: 'cone', x: 65, y: 25, color: '#f59e0b' },
        { id: 'c3', type: 'cone', x: 35, y: 75, color: '#f59e0b' },
        { id: 'c4', type: 'cone', x: 65, y: 75, color: '#f59e0b' },
        { id: 'mg1', type: 'goal', x: 50, y: 20 },
        { id: 'att', type: 'player', team: 'home', label: 'AT', x: 50, y: 70 },
        { id: 'def', type: 'player', team: 'away', label: 'DF', x: 50, y: 45 },
        { id: 'ball', type: 'ball', x: 50, y: 66 },
        { id: 'dribble_arr', type: 'arrow', arrowType: 'run', x: 50, y: 65, targetX: 58, targetY: 42 }
      ]
    };
  }

  // 7. Rondos / Posesión / Calentamiento
  if (catLower.includes('pase') || subLower.includes('rondo') || catLower.includes('calentamiento')) {
    return {
      type: 'rondos_grid',
      elements: [
        { id: 'c1', type: 'cone', x: 28, y: 28, color: '#10b981' },
        { id: 'c2', type: 'cone', x: 72, y: 28, color: '#10b981' },
        { id: 'c3', type: 'cone', x: 72, y: 72, color: '#10b981' },
        { id: 'c4', type: 'cone', x: 28, y: 72, color: '#10b981' },
        { id: 'p1', type: 'player', team: 'home', label: 'A', x: 50, y: 24 },
        { id: 'p2', type: 'player', team: 'home', label: 'B', x: 76, y: 50 },
        { id: 'p3', type: 'player', team: 'home', label: 'C', x: 50, y: 76 },
        { id: 'p4', type: 'player', team: 'home', label: 'D', x: 24, y: 50 },
        { id: 'def1', type: 'player', team: 'away', label: 'X', x: 46, y: 48 },
        { id: 'def2', type: 'player', team: 'away', label: 'Y', x: 54, y: 52 },
        { id: 'ball', type: 'ball', x: 48, y: 27 },
        { id: 'arr1', type: 'arrow', arrowType: 'pass', x: 50, y: 28, targetX: 72, targetY: 48 }
      ]
    };
  }

  // 5. Ataque, Defensa, Táctica, Transiciones Colectivas
  if (catLower.includes('ataque') || catLower.includes('defensa') || catLower.includes('táctica') || catLower.includes('transición')) {
    return {
      type: 'half_pitch',
      elements: [
        { id: 'goal_main', type: 'goal', x: 50, y: 8 },
        { id: 'gk', type: 'player', team: 'gk', label: 'POR', x: 50, y: 14 },
        { id: 'df1', type: 'player', team: 'away', label: '2', x: 30, y: 28 },
        { id: 'df2', type: 'player', team: 'away', label: '4', x: 44, y: 26 },
        { id: 'df3', type: 'player', team: 'away', label: '5', x: 56, y: 26 },
        { id: 'df4', type: 'player', team: 'away', label: '3', x: 70, y: 28 },
        { id: 'at1', type: 'player', team: 'home', label: '7', x: 25, y: 50 },
        { id: 'at2', type: 'player', team: 'home', label: '8', x: 45, y: 58 },
        { id: 'at3', type: 'player', team: 'home', label: '10', x: 55, y: 58 },
        { id: 'at4', type: 'player', team: 'home', label: '11', x: 75, y: 50 },
        { id: 'at5', type: 'player', team: 'home', label: '9', x: 50, y: 40 },
        { id: 'ball', type: 'ball', x: 53, y: 56 },
        { id: 'pass_arr', type: 'arrow', arrowType: 'pass', x: 54, y: 55, targetX: 72, targetY: 48 }
      ]
    };
  }

  // 6. Fútbol Base / Niños (6-8 años)
  if (catLower.includes('base') || age === '6–8 años') {
    return {
      type: 'rondos_grid',
      elements: [
        { id: 'c1', type: 'cone', x: 25, y: 25, color: '#3b82f6' },
        { id: 'c2', type: 'cone', x: 75, y: 25, color: '#ef4444' },
        { id: 'c3', type: 'cone', x: 75, y: 75, color: '#f59e0b' },
        { id: 'c4', type: 'cone', x: 25, y: 75, color: '#10b981' },
        { id: 'kid1', type: 'player', team: 'home', label: '1', x: 35, y: 40 },
        { id: 'kid2', type: 'player', team: 'home', label: '2', x: 65, y: 40 },
        { id: 'kid3', type: 'player', team: 'home', label: '3', x: 40, y: 65 },
        { id: 'kid4', type: 'player', team: 'home', label: '4', x: 60, y: 65 },
        { id: 'coach', type: 'player', team: 'neutral', label: 'PROFE', x: 50, y: 18 },
        { id: 'ball1', type: 'ball', x: 37, y: 43 },
        { id: 'ball2', type: 'ball', x: 63, y: 43 }
      ]
    };
  }

  // 8. Ejercicios Colectivos / Fútbol Reducido (6v6, 7v7, 8v8, Juegos Posicionales, Partidos Condicionados)
  if (
    catLower.includes('colectivo') ||
    catLower.includes('reducido') ||
    subLower.includes('reducido') ||
    subLower.includes('posicional') ||
    subLower.includes('6v6') ||
    subLower.includes('7v7') ||
    subLower.includes('porterías') ||
    playersCount >= 12
  ) {
    const is4MiniGoals = subLower.includes('4 porterías') || subLower.includes('mini-porterías') || catLower.includes('4 porterías');
    const is7v7Plus3 = subLower.includes('7v7+3') || subLower.includes('posicional 7v7');

    if (is7v7Plus3) {
      return {
        type: 'full_pitch',
        elements: [
          // Home team (7 players: Green)
          { id: 'h_gk', type: 'player', team: 'home', label: '1', x: 12, y: 50 },
          { id: 'h_df1', type: 'player', team: 'home', label: '2', x: 25, y: 30 },
          { id: 'h_df2', type: 'player', team: 'home', label: '4', x: 25, y: 70 },
          { id: 'h_mc1', type: 'player', team: 'home', label: '6', x: 38, y: 50 },
          { id: 'h_ext1', type: 'player', team: 'home', label: '7', x: 48, y: 22 },
          { id: 'h_ext2', type: 'player', team: 'home', label: '11', x: 48, y: 78 },
          { id: 'h_dc', type: 'player', team: 'home', label: '9', x: 58, y: 50 },

          // Away team (7 players: Red)
          { id: 'a_gk', type: 'player', team: 'away', label: '1', x: 88, y: 50 },
          { id: 'a_df1', type: 'player', team: 'away', label: '3', x: 75, y: 30 },
          { id: 'a_df2', type: 'player', team: 'away', label: '5', x: 75, y: 70 },
          { id: 'a_mc1', type: 'player', team: 'away', label: '8', x: 62, y: 50 },
          { id: 'a_ext1', type: 'player', team: 'away', label: '10', x: 52, y: 35 },
          { id: 'a_ext2', type: 'player', team: 'away', label: '14', x: 52, y: 65 },
          { id: 'a_dc', type: 'player', team: 'away', label: '19', x: 42, y: 50 },

          // 3 Comodines (Yellow Neutral)
          { id: 'com1', type: 'player', team: 'neutral', label: 'C1', x: 50, y: 15 },
          { id: 'com2', type: 'player', team: 'neutral', label: 'C2', x: 50, y: 50 },
          { id: 'com3', type: 'player', team: 'neutral', label: 'C3', x: 50, y: 85 },

          // Ball & Movement
          { id: 'ball', type: 'ball', x: 40, y: 48 },
          { id: 'pass1', type: 'arrow', arrowType: 'pass', x: 41, y: 48, targetX: 48, targetY: 50 },
          { id: 'press1', type: 'arrow', arrowType: 'run', x: 60, y: 50, targetX: 52, targetY: 50 }
        ]
      };
    }

    if (is4MiniGoals) {
      // 6v6 with 4 Mini-Porterías (e.g. EX970)
      return {
        type: 'full_pitch',
        elements: [
          // 4 Mini-goals represented at vertices/wings
          { id: 'mg1', type: 'goal', x: 10, y: 25 },
          { id: 'mg2', type: 'goal', x: 10, y: 75 },
          { id: 'mg3', type: 'goal', x: 90, y: 25 },
          { id: 'mg4', type: 'goal', x: 90, y: 75 },

          // Boundary corner cones marking the reduced pitch perimeter
          { id: 'c1', type: 'cone', x: 18, y: 18, color: '#f59e0b' },
          { id: 'c2', type: 'cone', x: 82, y: 18, color: '#f59e0b' },
          { id: 'c3', type: 'cone', x: 82, y: 82, color: '#f59e0b' },
          { id: 'c4', type: 'cone', x: 18, y: 82, color: '#f59e0b' },

          // Home Team (6 players: Green)
          { id: 'h1', type: 'player', team: 'home', label: '1', x: 22, y: 50 },
          { id: 'h2', type: 'player', team: 'home', label: '2', x: 32, y: 30 },
          { id: 'h3', type: 'player', team: 'home', label: '4', x: 32, y: 70 },
          { id: 'h4', type: 'player', team: 'home', label: '8', x: 44, y: 40 },
          { id: 'h5', type: 'player', team: 'home', label: '10', x: 44, y: 60 },
          { id: 'h6', type: 'player', team: 'home', label: '9', x: 55, y: 50 },

          // Away Team (6 players: Red)
          { id: 'a1', type: 'player', team: 'away', label: '1', x: 78, y: 50 },
          { id: 'a2', type: 'player', team: 'away', label: '3', x: 68, y: 30 },
          { id: 'a3', type: 'player', team: 'away', label: '5', x: 68, y: 70 },
          { id: 'a4', type: 'player', team: 'away', label: '6', x: 56, y: 38 },
          { id: 'a5', type: 'player', team: 'away', label: '7', x: 56, y: 62 },
          { id: 'a6', type: 'player', team: 'away', label: '11', x: 45, y: 50 },

          // Ball in active play
          { id: 'ball', type: 'ball', x: 46, y: 42 },

          // Tactical arrows: pass, support run, pressing run
          { id: 'pass_arr', type: 'arrow', arrowType: 'pass', x: 46, y: 42, targetX: 53, targetY: 48 },
          { id: 'run_arr', type: 'arrow', arrowType: 'run', x: 34, y: 32, targetX: 42, targetY: 26 },
          { id: 'press_arr', type: 'arrow', arrowType: 'run', x: 55, y: 40, targetX: 48, targetY: 42 }
        ]
      };
    }

    // Standard Collective / 7v7 / 8v8 game on full pitch
    return {
      type: 'full_pitch',
      elements: [
        // Home Team (6 outfield + 1 GK = 7 players: Green / Cyan)
        { id: 'h_gk', type: 'player', team: 'gk', label: '1', x: 8, y: 50 },
        { id: 'h1', type: 'player', team: 'home', label: '2', x: 24, y: 28 },
        { id: 'h2', type: 'player', team: 'home', label: '4', x: 22, y: 50 },
        { id: 'h3', type: 'player', team: 'home', label: '3', x: 24, y: 72 },
        { id: 'h4', type: 'player', team: 'home', label: '8', x: 40, y: 38 },
        { id: 'h5', type: 'player', team: 'home', label: '10', x: 40, y: 62 },
        { id: 'h6', type: 'player', team: 'home', label: '9', x: 54, y: 50 },

        // Away Team (6 outfield + 1 GK = 7 players: Red)
        { id: 'a_gk', type: 'player', team: 'away', label: 'POR', x: 92, y: 50 },
        { id: 'a1', type: 'player', team: 'away', label: '2', x: 76, y: 28 },
        { id: 'a2', type: 'player', team: 'away', label: '4', x: 78, y: 50 },
        { id: 'a3', type: 'player', team: 'away', label: '3', x: 76, y: 72 },
        { id: 'a4', type: 'player', team: 'away', label: '6', x: 60, y: 38 },
        { id: 'a5', type: 'player', team: 'away', label: '5', x: 60, y: 62 },
        { id: 'a6', type: 'player', team: 'away', label: '11', x: 46, y: 50 },

        // Ball & actions
        { id: 'ball', type: 'ball', x: 42, y: 40 },
        { id: 'pass1', type: 'arrow', arrowType: 'pass', x: 43, y: 40, targetX: 52, targetY: 48 },
        { id: 'press1', type: 'arrow', arrowType: 'run', x: 58, y: 40, targetX: 45, targetY: 41 }
      ]
    };
  }

  // Default: Technical agility grid
  return {
    type: 'lane_grid',
    elements: [
      { id: 'c1', type: 'cone', x: 40, y: 25, color: '#f59e0b' },
      { id: 'c2', type: 'cone', x: 60, y: 25, color: '#f59e0b' },
      { id: 'c3', type: 'cone', x: 40, y: 50, color: '#3b82f6' },
      { id: 'c4', type: 'cone', x: 60, y: 50, color: '#3b82f6' },
      { id: 'c5', type: 'cone', x: 40, y: 75, color: '#10b981' },
      { id: 'c6', type: 'cone', x: 60, y: 75, color: '#10b981' },
      { id: 'p1', type: 'player', team: 'home', label: '1', x: 50, y: 85 },
      { id: 'ball', type: 'ball', x: 50, y: 82 },
      { id: 'arr1', type: 'arrow', arrowType: 'run', x: 50, y: 80, targetX: 50, targetY: 30 }
    ]
  };
}
