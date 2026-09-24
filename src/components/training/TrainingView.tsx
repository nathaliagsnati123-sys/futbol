import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Plus,
  Trash2,
  Calendar,
  Clock,
  Users,
  Target,
  Printer,
  ChevronRight,
  RefreshCw,
  Eye,
  CheckCircle2,
  Dumbbell,
  Copy,
  Edit3,
  ArrowUp,
  ArrowDown,
  Search,
  X,
  Layers,
  Heart,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';
import { TrainingSession, Exercise, SkillLevel, TrainingPhaseItem } from '../../types';
import { allExercises } from '../../data/exercises';
import {
  getStoredTrainings,
  saveTraining,
  deleteTraining,
  getStoredFavorites,
} from '../../utils/storage';
import { PitchThumbnail } from '../common/PitchThumbnail';
import { getExercisePitchDiagram } from '../../utils/diagramGenerator';

interface Props {
  onSelectExercise: (ex: Exercise) => void;
}

const DEFAULT_PHASES = [
  '1. CALENTAMIENTO Y ACTIVACIÓN',
  '2. PARTE PRINCIPAL (TÉCNICA / TÁCTICA)',
  '3. APLICACIÓN / JUEGO REDUCIDO',
  '4. VUELTA A LA CALMA Y REGENERACIÓN',
];

// Calculate total minutes from string duration values
function calculateTotalMinutes(exercises: TrainingPhaseItem[]): number {
  return exercises.reduce((acc, curr) => {
    const match = curr.duration.match(/(\d+)/);
    const mins = match ? parseInt(match[1], 10) : 15;
    return acc + mins;
  }, 0);
}

// Default initial sessions to seed if none exist
const INITIAL_SEED_SESSIONS: TrainingSession[] = [
  {
    id: 'seed-001',
    title: 'Sesión Pro #1: Salida de Balón y Superación de Líneas',
    date: new Date().toISOString().split('T')[0],
    duration: '75 min',
    ageGroup: '12–14 años',
    level: 'Intermedio',
    playersCount: '14 jugadores + 2 porteros',
    objective: 'Salida de balón y superación de la primera línea de presión rival',
    exercises: [
      {
        phase: '1. CALENTAMIENTO Y ACTIVACIÓN',
        duration: '15 min',
        exercise: allExercises[0] || allExercises[0],
      },
      {
        phase: '2. PARTE PRINCIPAL (TÉCNICA / TÁCTICA)',
        duration: '25 min',
        exercise: allExercises[102] || allExercises[1],
      },
      {
        phase: '3. APLICACIÓN / JUEGO REDUCIDO',
        duration: '25 min',
        exercise: allExercises[305] || allExercises[2],
      },
      {
        phase: '4. VUELTA A LA CALMA Y REGENERACIÓN',
        duration: '10 min',
        exercise: allExercises[950] || allExercises[3],
      },
    ],
    notes:
      'Hacer hincapié en el perfilado corporal para ver el tercer hombre y la velocidad de circulación del balón a dos toques.',
  },
  {
    id: 'seed-002',
    title: 'Sesión Pro #2: Finalización Rápida y Duelos 1v1 en Último Tercio',
    date: new Date().toISOString().split('T')[0],
    duration: '80 min',
    ageGroup: '15–17 años',
    level: 'Avanzado',
    playersCount: '16 jugadores + 2 porteros',
    objective: 'Eficacia en remates al primer toque y desequilibrio individual',
    exercises: [
      {
        phase: '1. CALENTAMIENTO Y ACTIVACIÓN',
        duration: '15 min',
        exercise: allExercises[3] || allExercises[0],
      },
      {
        phase: '2. PARTE PRINCIPAL (TÉCNICA / TÁCTICA)',
        duration: '30 min',
        exercise: allExercises[205] || allExercises[1],
      },
      {
        phase: '3. APLICACIÓN / JUEGO REDUCIDO',
        duration: '25 min',
        exercise: allExercises[402] || allExercises[2],
      },
      {
        phase: '4. VUELTA A LA CALMA Y REGENERACIÓN',
        duration: '10 min',
        exercise: allExercises[960] || allExercises[3],
      },
    ],
    notes:
      'Exigir determinación en el golpeo cruzado y cambios de ritmo explosivos antes de ingresar al área penal.',
  },
];

export const TrainingView: React.FC<Props> = ({ onSelectExercise }) => {
  const [trainings, setTrainings] = useState<TrainingSession[]>(() => {
    const stored = getStoredTrainings();
    return stored.length > 0 ? stored : INITIAL_SEED_SESSIONS;
  });

  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(
    trainings.length > 0 ? trainings[0] : null
  );

  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isManualCreateOpen, setIsManualCreateOpen] = useState(false);
  const [isEditSessionOpen, setIsEditSessionOpen] = useState(false);
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Generator form state
  const [genObjective, setGenObjective] = useState('Finalización y Remate');
  const [genAge, setGenAge] = useState('12–14 años');
  const [genLevel, setGenLevel] = useState<SkillLevel>('Intermedio');
  const [genPlayers, setGenPlayers] = useState('14 jugadores');
  const [genDuration, setGenDuration] = useState('75 min');
  const [genIntensity, setGenIntensity] = useState('Media');

  // Manual session form state
  const [manualTitle, setManualTitle] = useState('');
  const [manualObjective, setManualObjective] = useState('');
  const [manualAge, setManualAge] = useState('12–14 años');
  const [manualLevel, setManualLevel] = useState<SkillLevel>('Intermedio');
  const [manualPlayers, setManualPlayers] = useState('14 jugadores');
  const [manualNotes, setManualNotes] = useState('');

  // Add exercise to session modal state
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerCategory, setPickerCategory] = useState('');
  const [pickerOnlyFavorites, setPickerOnlyFavorites] = useState(false);
  const [pickerSelectedPhase, setPickerSelectedPhase] = useState(DEFAULT_PHASES[1]);
  const [pickerDuration, setPickerDuration] = useState('20 min');

  // Seed storage once mounted if empty
  useEffect(() => {
    const stored = getStoredTrainings();
    if (stored.length === 0) {
      INITIAL_SEED_SESSIONS.forEach((s) => saveTraining(s));
    }
  }, []);

  // Sync when storage updates
  useEffect(() => {
    const handleUpdate = () => {
      const stored = getStoredTrainings();
      setTrainings(stored);
      if (selectedSession) {
        const refreshed = stored.find((s) => s.id === selectedSession.id);
        if (refreshed) setSelectedSession(refreshed);
      }
    };
    window.addEventListener('futbol_trainings_updated', handleUpdate);
    return () => window.removeEventListener('futbol_trainings_updated', handleUpdate);
  }, [selectedSession]);

  // Intelligent Session Generator based on Pedagogical architecture & rigorous criteria
  const handleGenerateSession = (e: React.FormEvent) => {
    e.preventDefault();

    const usedIds = new Set<string>();

    // Parse numeric player count from select
    let playersNum = 14;
    if (genPlayers.includes('8')) playersNum = 10;
    else if (genPlayers.includes('12')) playersNum = 12;
    else if (genPlayers.includes('14') || genPlayers.includes('16')) playersNum = 16;
    else if (genPlayers.includes('18') || genPlayers.includes('20')) playersNum = 20;

    const sessionDurationTotal = parseInt(genDuration, 10) || 75;
    const isShort = sessionDurationTotal <= 60;

    // Age scoring matrix for strict pedagogical compatibility
    const getAgeScore = (exAge: string, targetAge: string): number => {
      if (exAge === targetAge) return 30;
      if (targetAge === '6–8 años') return exAge === '9–11 años' ? 5 : -60;
      if (targetAge === '9–11 años') return exAge === '6–8 años' || exAge === '12–14 años' ? 10 : -25;
      if (targetAge === '12–14 años') return exAge === '9–11 años' || exAge === '15–17 años' ? 10 : -15;
      if (targetAge === '15–17 años') return exAge === 'Adultos' || exAge === '12–14 años' ? 15 : -30;
      if (targetAge === 'Adultos') return exAge === '15–17 años' ? 15 : -50;
      return 0;
    };

    // Scored exercise picker ensuring uniqueness and best match
    const pickBest = (
      pool: Exercise[],
      preferObjective: boolean = false,
      isCooldown: boolean = false
    ): Exercise => {
      // 1. Never reuse already picked exercise IDs in this session
      let available = pool.filter((ex) => !usedIds.has(ex.id));
      if (available.length === 0) available = pool;

      // 2. Strict exact-age filter when sufficient candidates exist
      const exactAgeList = available.filter((ex) => ex.edad === genAge);
      const candidateList = exactAgeList.length >= 2 ? exactAgeList : available;

      const scored = candidateList.map((ex) => {
        let score = 0;
        score += getAgeScore(ex.edad, genAge);
        if (ex.nivel === genLevel) score += 10;

        // Player count capacity check
        if (ex.jugadoresMin > playersNum) score -= 15;

        // Semantic objective matching
        if (preferObjective) {
          const norm = genObjective.toLowerCase();
          const words = norm.split(' ').filter((w) => w.length > 3);
          if (ex.name.toLowerCase().includes(norm)) score += 35;
          if (ex.category.toLowerCase().includes(norm)) score += 25;
          if (ex.objetivoPrincipal.toLowerCase().includes(norm)) score += 20;
          if (ex.tags.some((t) => t.toLowerCase().includes(norm))) score += 15;
          for (const w of words) {
            if (ex.name.toLowerCase().includes(w)) score += 8;
            if (ex.objetivoPrincipal.toLowerCase().includes(w)) score += 5;
          }
        }

        // Cool-down specific scoring
        if (isCooldown) {
          if (ex.intensidad === 'Baja') score += 35;
          if (ex.subcategory.toLowerCase().includes('movilidad')) score += 25;
          if (ex.category.includes('Calentamiento')) score += 10;
        }

        return { ex, score };
      });

      scored.sort((a, b) => b.score - a.score);
      const bestScore = scored[0].score;
      const topCandidates = scored.filter((s) => s.score >= bestScore - 5);
      const chosen = topCandidates[Math.floor(Math.random() * topCandidates.length)].ex;
      usedIds.add(chosen.id);
      return chosen;
    };

    // 1. Calentamiento pool
    const warmupPool = allExercises.filter(
      (ex) =>
        ex.category.includes('Calentamiento') ||
        (genAge === '6–8 años' && ex.category.includes('Fútbol Base')) ||
        ex.subcategory.toLowerCase().includes('movilidad') ||
        ex.subcategory.toLowerCase().includes('dinámica')
    );
    const exWarmup = pickBest(warmupPool);

    // 2. Parte Principal Técnica (Objective focused)
    const exMainTech = pickBest(allExercises, true);

    // 3. Parte Principal Táctica / Transición / Posición
    const tacticalPool = allExercises.filter(
      (ex) =>
        ex.category.includes('Táctica') ||
        ex.category.includes('Ataque') ||
        ex.category.includes('Defensa') ||
        ex.category.includes('Transiciones') ||
        ex.category.includes('Pase y Recepción') ||
        (genAge === '6–8 años' && ex.category.includes('Fútbol Base'))
    );
    const exMainTact = pickBest(tacticalPool);

    // 4. Juego reducido / Aplicación real / Duelos
    const gamePool = allExercises.filter(
      (ex) =>
        ex.category.includes('Colectivos') ||
        ex.category.includes('Regate') ||
        ex.category.includes('Reducidos') ||
        ex.name.toLowerCase().includes('juego') ||
        ex.name.toLowerCase().includes('partido') ||
        ex.name.toLowerCase().includes('duelo') ||
        (genAge === '6–8 años' && ex.category.includes('Fútbol Base'))
    );
    const exGame = pickBest(gamePool);

    // 5. Vuelta a la calma (strict low intensity, regenerative mobility, gentle breathing)
    const coolDownPool = allExercises.filter(
      (ex) =>
        (ex.intensidad === 'Baja' || ex.subcategory.toLowerCase().includes('movilidad')) &&
        !ex.category.includes('Colectivos') &&
        !ex.category.includes('Transiciones')
    );
    const exCool = pickBest(coolDownPool, false, true);

    const exercisesList: TrainingPhaseItem[] = isShort
      ? [
          { phase: '1. CALENTAMIENTO Y ACTIVACIÓN', duration: '12 min', exercise: exWarmup },
          { phase: `2. PARTE PRINCIPAL: ${genObjective.toUpperCase()}`, duration: '20 min', exercise: exMainTech },
          { phase: '3. APLICACIÓN / JUEGO REDUCIDO CONDICIONADO', duration: '20 min', exercise: exGame },
          { phase: '4. VUELTA A LA CALMA Y REGENERACIÓN', duration: '8 min', exercise: exCool },
        ]
      : [
          { phase: '1. CALENTAMIENTO Y ACTIVACIÓN', duration: '15 min', exercise: exWarmup },
          { phase: `2. PARTE PRINCIPAL: TÉCNICA (${genObjective})`, duration: '20 min', exercise: exMainTech },
          { phase: `3. PARTE PRINCIPAL: TÁCTICA COLECTIVA`, duration: '20 min', exercise: exMainTact },
          { phase: '4. APLICACIÓN / JUEGO REDUCIDO Y SITUACIÓN REAL', duration: '20 min', exercise: exGame },
          { phase: '5. VUELTA A LA CALMA Y FEEDBACK', duration: '10 min', exercise: exCool },
        ];

    const newSession: TrainingSession = {
      id: `train-${Date.now()}`,
      title: `Sesión: ${genObjective}`,
      date: new Date().toISOString().split('T')[0],
      duration: `${calculateTotalMinutes(exercisesList)} min`,
      ageGroup: genAge,
      level: genLevel,
      playersCount: genPlayers,
      objective: `Trabajo metodológico de ${genObjective} adaptado a categoría ${genAge} y nivel ${genLevel}.`,
      exercises: exercisesList,
      notes: `Sesión generada con foco en ${genObjective}. Mantener intensidad ${genIntensity}, corregir posturas corporales antes de recibir y fomentar la comunicación constante.`,
    };

    saveTraining(newSession);
    const updated = getStoredTrainings();
    setTrainings(updated);
    setSelectedSession(newSession);
    setIsGeneratorOpen(false);
    showToast(`¡Sesión inteligente "${newSession.title}" generada y guardada!`);
  };

  // Manual Session Creation
  const handleCreateManualSession = (e: React.FormEvent) => {
    e.preventDefault();

    const newSession: TrainingSession = {
      id: `train-${Date.now()}`,
      title: manualTitle || 'Nueva Sesión de Entrenamiento',
      date: new Date().toISOString().split('T')[0],
      duration: '0 min',
      ageGroup: manualAge,
      level: manualLevel,
      playersCount: manualPlayers,
      objective: manualObjective || 'Objetivo específico definido por el entrenador',
      exercises: [],
      notes: manualNotes || 'Notas metodológicas y observaciones tácticas.',
    };

    saveTraining(newSession);
    const updated = getStoredTrainings();
    setTrainings(updated);
    setSelectedSession(newSession);
    setIsManualCreateOpen(false);
    setManualTitle('');
    setManualObjective('');
    setManualNotes('');
    showToast('¡Sesión creada! Ahora puedes agregar ejercicios.');
  };

  // Update session metadata
  const handleUpdateSessionMetadata = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSession) return;

    saveTraining(selectedSession);
    const updated = getStoredTrainings();
    setTrainings(updated);
    setIsEditSessionOpen(false);
    showToast('¡Datos de la sesión actualizados!');
  };

  // Delete session
  const handleDelete = (id: string) => {
    if (window.confirm('¿Seguro que deseas eliminar este entrenamiento?')) {
      deleteTraining(id);
      const updated = getStoredTrainings();
      setTrainings(updated);
      if (selectedSession?.id === id) {
        setSelectedSession(updated.length > 0 ? updated[0] : null);
      }
      showToast('Entrenamiento eliminado.');
    }
  };

  // Duplicate session
  const handleDuplicateSession = () => {
    if (!selectedSession) return;

    const cloned: TrainingSession = {
      ...selectedSession,
      id: `train-${Date.now()}`,
      title: `${selectedSession.title} (Copia)`,
      date: new Date().toISOString().split('T')[0],
      exercises: [...selectedSession.exercises],
    };

    saveTraining(cloned);
    const updated = getStoredTrainings();
    setTrainings(updated);
    setSelectedSession(cloned);
    showToast('¡Entrenamiento duplicado correctamente!');
  };

  // Move exercise Up / Down
  const handleMoveExercise = (fromIdx: number, direction: 'up' | 'down') => {
    if (!selectedSession) return;
    const toIdx = direction === 'up' ? fromIdx - 1 : fromIdx + 1;
    if (toIdx < 0 || toIdx >= selectedSession.exercises.length) return;

    const list = [...selectedSession.exercises];
    const temp = list[fromIdx];
    list[fromIdx] = list[toIdx];
    list[toIdx] = temp;

    const updatedSession = {
      ...selectedSession,
      exercises: list,
      duration: `${calculateTotalMinutes(list)} min`,
    };

    saveTraining(updatedSession);
    setSelectedSession(updatedSession);
  };

  // Remove exercise from session
  const handleRemoveExercise = (idx: number) => {
    if (!selectedSession) return;
    if (window.confirm('¿Deseas quitar este ejercicio de la sesión?')) {
      const list = selectedSession.exercises.filter((_, i) => i !== idx);
      const updatedSession = {
        ...selectedSession,
        exercises: list,
        duration: `${calculateTotalMinutes(list)} min`,
      };

      saveTraining(updatedSession);
      setSelectedSession(updatedSession);
      showToast('Ejercicio retirado de la sesión.');
    }
  };

  // Swap exercise with random
  const handleSwapExercise = (phaseIndex: number) => {
    if (!selectedSession) return;
    const randomEx = allExercises[Math.floor(Math.random() * allExercises.length)];
    const list = [...selectedSession.exercises];
    list[phaseIndex] = {
      ...list[phaseIndex],
      exercise: randomEx,
    };
    const updatedSession = {
      ...selectedSession,
      exercises: list,
    };
    saveTraining(updatedSession);
    setSelectedSession(updatedSession);
    showToast(`Ejercicio reemplazado por ${randomEx.id}`);
  };

  // Add exercise from picker modal into active session
  const handleAddExerciseFromPicker = (ex: Exercise) => {
    if (!selectedSession) return;

    const newItem: TrainingPhaseItem = {
      phase: pickerSelectedPhase,
      duration: pickerDuration,
      exercise: ex,
    };

    const updatedList = [...selectedSession.exercises, newItem];
    const updatedSession: TrainingSession = {
      ...selectedSession,
      exercises: updatedList,
      duration: `${calculateTotalMinutes(updatedList)} min`,
    };

    saveTraining(updatedSession);
    setSelectedSession(updatedSession);
    setIsAddExerciseModalOpen(false);
    showToast(`¡Ejercicio ${ex.id} añadido a la sesión!`);
  };

  // Filtered saved sessions
  const filteredTrainings = trainings.filter((t) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.objective.toLowerCase().includes(q) ||
      t.ageGroup.toLowerCase().includes(q)
    );
  });

  // Filter exercises for the picker modal
  const favorites = getStoredFavorites();
  const pickerExercises = allExercises.filter((ex) => {
    if (pickerOnlyFavorites && !favorites.includes(ex.id)) return false;
    if (pickerCategory && !ex.category.includes(pickerCategory)) return false;
    if (pickerSearch) {
      const q = pickerSearch.toLowerCase();
      return (
        ex.id.toLowerCase().includes(q) ||
        ex.name.toLowerCase().includes(q) ||
        ex.objetivoPrincipal.toLowerCase().includes(q) ||
        ex.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs shadow-2xl animate-bounce">
          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner & Control Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0a1810] p-5 sm:p-6 rounded-2xl border border-emerald-900/50 shadow-md print:hidden">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Dumbbell className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Mis Entrenamientos & Planificador Pro
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-300">
            Diseña, genera o personaliza sesiones completas de fútbol estructuradas por fases, calcula la duración total y exporta para el campo.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={() => setIsManualCreateOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#07150c] hover:bg-[#0c2214] text-emerald-300 border border-emerald-700/50 font-bold text-xs sm:text-sm transition hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            <span>Crear desde Cero</span>
          </button>

          <button
            type="button"
            onClick={() => setIsGeneratorOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generador Inteligente</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 print:block">
        {/* Left Column: Saved Sessions List */}
        <div className="lg:col-span-4 space-y-3 print:hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Mis Sesiones Guardadas ({trainings.length})</span>
            </h3>
          </div>

          {/* Quick Search Sessions */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar sesión por título o concepto..."
              className="w-full pl-9 pr-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {filteredTrainings.length === 0 ? (
            <div className="p-8 text-center bg-[#0a1710] rounded-2xl border border-emerald-900/40 text-gray-400 space-y-3">
              <Dumbbell className="w-8 h-8 text-emerald-500/50 mx-auto" />
              <p className="text-xs">No se encontraron sesiones con ese criterio.</p>
              <button
                type="button"
                onClick={() => setIsGeneratorOpen(true)}
                className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/30 transition"
              >
                Generar una sesión ahora
              </button>
            </div>
          ) : (
            <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredTrainings.map((session) => {
                const totalMins = calculateTotalMinutes(session.exercises);
                const isCurrent = selectedSession?.id === session.id;

                return (
                  <div
                    key={session.id}
                    onClick={() => setSelectedSession(session)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#11271b] border-emerald-500 text-white shadow-lg'
                        : 'bg-[#09150e] border-emerald-900/40 text-gray-300 hover:border-emerald-700/60 hover:bg-[#0c1c13]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-emerald-400 font-mono font-semibold">
                        {session.date}
                      </span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                        ⏱️ {totalMins > 0 ? `${totalMins} min` : session.duration}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white line-clamp-1 mb-1">
                      {session.title}
                    </h4>

                    <div className="flex items-center justify-between text-[10px] text-gray-400">
                      <span>
                        {session.exercises.length} {session.exercises.length === 1 ? 'ejercicio' : 'ejercicios'}
                      </span>
                      <span>• {session.ageGroup}</span>
                      <span className="text-emerald-400 font-medium">{session.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Selected Session Command Center */}
        <div className="lg:col-span-8 print:w-full print:max-w-none print:col-span-12 print:block">
          {selectedSession ? (
            <div className="bg-[#09150e] rounded-2xl border border-emerald-900/50 p-5 sm:p-6 space-y-6 shadow-xl print:bg-white print:border-none print:p-0 print:shadow-none print:space-y-4">
              {/* Official Printable Session Header (Visible on Paper / Print Only) */}
              <div className="hidden print:block border-b-2 border-emerald-800 pb-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-black text-base">
                      ⚽+
                    </div>
                    <div>
                      <h1 className="text-base font-black uppercase tracking-wider text-emerald-950">
                        FÚTBOL+ • PLANILLA DE SESIÓN DE ENTRENAMIENTO
                      </h1>
                      <p className="text-[10px] text-gray-600 font-medium">
                        Planificación Metodológica de Campo • 1.000 Ejercicios
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-gray-700">
                    <p className="font-bold text-black text-sm">{selectedSession.title}</p>
                    <p>Fecha: {selectedSession.date} • Duración: {calculateTotalMinutes(selectedSession.exercises)} min</p>
                    <p className="text-[10px] text-emerald-800 font-semibold">{selectedSession.ageGroup} • Nivel {selectedSession.level}</p>
                  </div>
                </div>
              </div>

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-emerald-900/50 print:border-b print:border-gray-300 print:pb-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold flex-wrap print:text-black">
                    <span className="bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 print:bg-gray-100 print:border-gray-300 print:text-black">
                      📅 {selectedSession.date}
                    </span>
                    <span className="bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 text-emerald-300 font-bold print:bg-emerald-50 print:border-emerald-300 print:text-emerald-900">
                      ⏱️ Total: {calculateTotalMinutes(selectedSession.exercises)} min ({selectedSession.exercises.length} tareas)
                    </span>
                    <span className="bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 print:bg-gray-100 print:border-gray-300 print:text-black">
                      👥 {selectedSession.playersCount}
                    </span>
                    <span className="bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 print:bg-gray-100 print:border-gray-300 print:text-black">
                      🎯 {selectedSession.ageGroup} • {selectedSession.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white print:text-2xl print:text-black print:font-black">
                    {selectedSession.title}
                  </h3>

                  <p className="text-xs text-gray-300 flex items-center gap-1.5 print:text-gray-800">
                    <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0 print:text-emerald-800" />
                    <span><strong>Objetivo:</strong> {selectedSession.objective}</span>
                  </p>
                </div>

                {/* Session Actions Toolbar */}
                <div className="flex items-center gap-2 flex-wrap shrink-0 print:hidden">
                  <button
                    type="button"
                    onClick={() => setIsEditSessionOpen(true)}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-gray-300 hover:text-white border border-emerald-900/60 bg-[#06110a] text-xs font-semibold transition"
                    title="Editar detalles del entrenamiento"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Editar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDuplicateSession}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-gray-300 hover:text-white border border-emerald-900/60 bg-[#06110a] text-xs font-semibold transition"
                    title="Duplicar esta sesión"
                  >
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span>Duplicar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-gray-300 hover:text-white border border-emerald-900/60 bg-[#06110a] text-xs font-semibold transition"
                    title="Imprimir hoja de sesión para el campo"
                  >
                    <Printer className="w-3.5 h-3.5 text-amber-400" />
                    <span>Imprimir</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(selectedSession.id)}
                    className="p-2 rounded-xl text-red-400 hover:text-red-300 border border-red-900/40 bg-red-950/20 text-xs transition"
                    title="Eliminar sesión"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Step by step training exercises list */}
              <div className="space-y-4 print:space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 print:text-emerald-950">
                    <Layers className="w-4 h-4" />
                    <span>Secuencia Metodológica de Tareas</span>
                  </h4>

                  <button
                    type="button"
                    onClick={() => setIsAddExerciseModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow transition print:hidden"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Agregar Ejercicio a la Sesión</span>
                  </button>
                </div>

                {selectedSession.exercises.length === 0 ? (
                  <div className="p-8 text-center bg-[#07130b] rounded-xl border border-dashed border-emerald-900 text-gray-400 space-y-2 print:bg-white print:border-gray-300 print:text-black">
                    <p className="text-xs font-semibold text-white print:text-black">Esta sesión no contiene ejercicios todavía.</p>
                    <p className="text-[11px]">Haz clic en el botón verde arriba para seleccionar tareas de la biblioteca de 1.000.</p>
                  </div>
                ) : (
                  <div className="space-y-3 print:space-y-3">
                    {selectedSession.exercises.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#0d1f14] border border-emerald-900/50 hover:border-emerald-700/60 transition space-y-2.5 print:bg-white print:border-gray-300 print:text-black print:p-3 print:space-y-2 print-break-inside-avoid shadow-none"
                      >
                        {/* Phase Header with reorder controls */}
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-emerald-500 text-black font-black text-xs flex items-center justify-center shrink-0 print:bg-emerald-100 print:text-emerald-950 print:border print:border-emerald-300">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-xs text-white uppercase tracking-wide print:text-black">
                              {item.phase}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-emerald-300 bg-[#06120b] border border-emerald-950 px-2 py-0.5 rounded-md font-mono font-bold print:bg-gray-100 print:border-gray-300 print:text-black">
                              ⏱️ {item.duration}
                            </span>

                            <div className="flex items-center gap-1.5 print:hidden">
                              {/* Move Up */}
                              <button
                                type="button"
                                onClick={() => handleMoveExercise(idx, 'up')}
                                disabled={idx === 0}
                                title="Subir tarea en la secuencia"
                                className="p-1.5 rounded-md text-gray-400 hover:text-white bg-[#06120b] border border-emerald-950 disabled:opacity-30 transition"
                              >
                                <ArrowUp className="w-3 h-3" />
                              </button>

                              {/* Move Down */}
                              <button
                                type="button"
                                onClick={() => handleMoveExercise(idx, 'down')}
                                disabled={idx === selectedSession.exercises.length - 1}
                                title="Bajar tarea en la secuencia"
                                className="p-1.5 rounded-md text-gray-400 hover:text-white bg-[#06120b] border border-emerald-950 disabled:opacity-30 transition"
                              >
                                <ArrowDown className="w-3 h-3" />
                              </button>

                              {/* Swap random */}
                              <button
                                type="button"
                                onClick={() => handleSwapExercise(idx)}
                                title="Reemplazar por otro ejercicio aleatorio coherente"
                                className="p-1.5 rounded-md text-gray-400 hover:text-emerald-400 bg-[#06120b] border border-emerald-950 transition"
                              >
                                <RefreshCw className="w-3 h-3" />
                              </button>

                              {/* Remove */}
                              <button
                                type="button"
                                onClick={() => handleRemoveExercise(idx)}
                                title="Eliminar de esta sesión"
                                className="p-1.5 rounded-md text-red-400 hover:text-red-300 bg-[#160b0b] border border-red-950 transition"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Exercise Card Summary with Thumbnail */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#08150e] p-3 rounded-lg border border-emerald-950 print:bg-gray-50 print:border-gray-200 print:text-black">
                          <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="w-20 shrink-0 hidden sm:block print:block print:w-24">
                              <PitchThumbnail
                                diagram={getExercisePitchDiagram(item.exercise)}
                                className="w-20 print:w-24 rounded border border-emerald-900/60 print:border-gray-300"
                              />
                            </div>

                            <div className="space-y-0.5 flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800 print:bg-emerald-100 print:text-emerald-950 print:border-emerald-300">
                                  {item.exercise.id}
                                </span>
                                <span className="text-xs font-bold text-white truncate print:text-black">
                                  {item.exercise.name}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-400 line-clamp-1 print:text-gray-800 print:line-clamp-none">
                                {item.exercise.objetivoPrincipal}
                              </p>
                              <div className="flex items-center gap-2 text-[10px] text-gray-400 pt-0.5 print:text-gray-700">
                                <span>👥 {item.exercise.jugadoresLabel} jug.</span>
                                <span>• 📍 {item.exercise.espacio}</span>
                                <span>• ⚡ {item.exercise.intensidad}</span>
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => onSelectExercise(item.exercise)}
                            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition shrink-0 w-full sm:w-auto print:hidden"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Ver Ficha</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Coaching Notes */}
              {selectedSession.notes && (
                <div className="bg-[#07130b] p-4 rounded-xl border border-emerald-900/40 text-xs text-gray-300 space-y-1 print:bg-gray-50 print:border-gray-300 print:text-gray-800 print-break-inside-avoid">
                  <span className="font-bold text-emerald-400 uppercase text-[10px] block print:text-emerald-950">
                    Notas y Observaciones del Entrenador:
                  </span>
                  <p className="leading-relaxed text-gray-300 print:text-gray-800">{selectedSession.notes}</p>
                </div>
              )}

              {/* Printable Official Session Footer (Visible on Paper / Print Only) */}
              <div className="hidden print:flex items-center justify-between border-t border-gray-300 pt-3 mt-4 text-[10px] text-gray-500">
                <span>FÚTBOL+ Planificación Metodológica de Campo • {selectedSession.exercises.length} Tareas</span>
                <span>www.futbolplus.app • 1.000 Ejercicios Profesionales</span>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-[#09150e] rounded-2xl border border-emerald-900/40 text-gray-400">
              <Dumbbell className="w-10 h-10 text-emerald-600/50 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">Selecciona una sesión de la lista</p>
              <p className="text-xs mt-1">O crea una nueva usando los botones de la barra superior.</p>
            </div>
          )}
        </div>
      </div>

      {/* MODAL 1: GENERADOR INTELIGENTE */}
      {isGeneratorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#0b1710] border border-emerald-600/50 rounded-2xl p-6 max-w-lg w-full text-white shadow-2xl space-y-4 animate-fadeIn my-auto">
            <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Generador Metodológico Inteligente</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsGeneratorOpen(false)}
                className="text-gray-400 hover:text-white text-sm p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleGenerateSession} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Objetivo Específico a Desarrollar
                </label>
                <select
                  value={genObjective}
                  onChange={(e) => setGenObjective(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="Finalización y Remate">Finalización y Remate a Portería</option>
                  <option value="Salida de balón y superación de líneas">Salida de Balón y Superación de Líneas</option>
                  <option value="Pase y Tercer Hombre">Pase, Control Orientado y Tercer Hombre</option>
                  <option value="Presión alta y recuperación en campo rival">Presión Alta y Robo en Campo Rival</option>
                  <option value="Regate, Fintas y 1v1">Regate, Fintas y Desequilibrio 1v1</option>
                  <option value="Transición rápida defensa-ataque">Transición Rápida Defensa-Ataque</option>
                  <option value="Posesión y Juego de Posición">Posesión y Amplitud Posicional</option>
                  <option value="Defensa en bloque y basculación">Defensa en Bloque y Basculación Colectiva</option>
                  <option value="Velocidad y Agilidad Integrada">Velocidad, Agilidad y Reactividad</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Categoría / Edad
                  </label>
                  <select
                    value={genAge}
                    onChange={(e) => setGenAge(e.target.value)}
                    className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="6–8 años">6–8 años (Prebenjamín)</option>
                    <option value="9–11 años">9–11 años (Benjamín / Alevín)</option>
                    <option value="12–14 años">12–14 años (Infantil)</option>
                    <option value="15–17 años">15–17 años (Cadete / Juvenil)</option>
                    <option value="Adultos">Adultos / Senior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Nivel del Grupo
                  </label>
                  <select
                    value={genLevel}
                    onChange={(e) => setGenLevel(e.target.value as SkillLevel)}
                    className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Jugadores
                  </label>
                  <select
                    value={genPlayers}
                    onChange={(e) => setGenPlayers(e.target.value)}
                    className="w-full px-2 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="8–10 jugadores">8–10 jug.</option>
                    <option value="12 jugadores">12 jug.</option>
                    <option value="14–16 jugadores">14–16 jug.</option>
                    <option value="18–20 jugadores">18–20 jug.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Duración Total
                  </label>
                  <select
                    value={genDuration}
                    onChange={(e) => setGenDuration(e.target.value)}
                    className="w-full px-2 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="60 min">60 min</option>
                    <option value="75 min">75 min</option>
                    <option value="90 min">90 min</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Intensidad
                  </label>
                  <select
                    value={genIntensity}
                    onChange={(e) => setGenIntensity(e.target.value)}
                    className="w-full px-2 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-800/40 text-[11px] text-gray-300 space-y-1">
                <span className="font-bold text-emerald-400 block">Arquitectura Metodológica en 4 Fases:</span>
                <p>1. Calentamiento Dinámico ➔ 2. Parte Principal Técnica ➔ 3. Aplicación en Juego Reducido ➔ 4. Vuelta a la Calma.</p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-emerald-900/50">
                <button
                  type="button"
                  onClick={() => setIsGeneratorOpen(false)}
                  className="px-4 py-2 rounded-xl text-gray-400 hover:text-white font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-md shadow-emerald-950/50"
                >
                  Generar y Guardar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: CREAR SESIÓN MANUAL DESDE CERO */}
      {isManualCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#0b1710] border border-emerald-600/50 rounded-2xl p-6 max-w-lg w-full text-white shadow-2xl space-y-4 animate-fadeIn my-auto">
            <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Crear Entrenamiento desde Cero</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsManualCreateOpen(false)}
                className="text-gray-400 hover:text-white text-sm p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateManualSession} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Título del Entrenamiento
                </label>
                <input
                  type="text"
                  value={manualTitle}
                  onChange={(e) => setManualTitle(e.target.value)}
                  placeholder="Ej: Sesión Miércoles: Amplitud y Finalizaciones"
                  required
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Objetivo Principal
                </label>
                <input
                  type="text"
                  value={manualObjective}
                  onChange={(e) => setManualObjective(e.target.value)}
                  placeholder="Ej: Automatizar centros laterales y ocupación de zonas de remate"
                  required
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Edad / Cat.
                  </label>
                  <select
                    value={manualAge}
                    onChange={(e) => setManualAge(e.target.value)}
                    className="w-full px-2 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="6–8 años">6–8 años</option>
                    <option value="9–11 años">9–11 años</option>
                    <option value="12–14 años">12–14 años</option>
                    <option value="15–17 años">15–17 años</option>
                    <option value="Adultos">Adultos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Nivel
                  </label>
                  <select
                    value={manualLevel}
                    onChange={(e) => setManualLevel(e.target.value as SkillLevel)}
                    className="w-full px-2 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Jugadores
                  </label>
                  <input
                    type="text"
                    value={manualPlayers}
                    onChange={(e) => setManualPlayers(e.target.value)}
                    placeholder="14 jug."
                    className="w-full px-2 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Notas Metodológicas Iniciales
                </label>
                <textarea
                  value={manualNotes}
                  onChange={(e) => setManualNotes(e.target.value)}
                  rows={2}
                  placeholder="Instrucciones para asistentes, material a preparar con antelación..."
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-emerald-900/50">
                <button
                  type="button"
                  onClick={() => setIsManualCreateOpen(false)}
                  className="px-4 py-2 rounded-xl text-gray-400 hover:text-white font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-md"
                >
                  Crear y Añadir Tareas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: EDITAR METADATOS DE LA SESIÓN */}
      {isEditSessionOpen && selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#0b1710] border border-emerald-600/50 rounded-2xl p-6 max-w-lg w-full text-white shadow-2xl space-y-4 animate-fadeIn my-auto">
            <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Editar Datos del Entrenamiento</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditSessionOpen(false)}
                className="text-gray-400 hover:text-white text-sm p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateSessionMetadata} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Título de la Sesión
                </label>
                <input
                  type="text"
                  value={selectedSession.title}
                  onChange={(e) =>
                    setSelectedSession({ ...selectedSession, title: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Objetivo
                </label>
                <input
                  type="text"
                  value={selectedSession.objective}
                  onChange={(e) =>
                    setSelectedSession({ ...selectedSession, objective: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Edad / Categoría
                  </label>
                  <input
                    type="text"
                    value={selectedSession.ageGroup}
                    onChange={(e) =>
                      setSelectedSession({ ...selectedSession, ageGroup: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Jugadores
                  </label>
                  <input
                    type="text"
                    value={selectedSession.playersCount}
                    onChange={(e) =>
                      setSelectedSession({ ...selectedSession, playersCount: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Notas para el Entrenador
                </label>
                <textarea
                  value={selectedSession.notes || ''}
                  onChange={(e) =>
                    setSelectedSession({ ...selectedSession, notes: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-emerald-900/50">
                <button
                  type="button"
                  onClick={() => setIsEditSessionOpen(false)}
                  className="px-4 py-2 rounded-xl text-gray-400 hover:text-white font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-md"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: AGREGAR EJERCICIO DESDE LA BIBLIOTECA DE 1.000 */}
      {isAddExerciseModalOpen && selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-5 overflow-y-auto">
          <div className="bg-[#0b1710] border border-emerald-600/50 rounded-2xl p-5 sm:p-6 max-w-3xl w-full text-white shadow-2xl space-y-4 animate-fadeIn my-auto max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Añadir Ejercicio a "{selectedSession.title}"
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    Busca entre los 1.000 ejercicios o selecciona de tus favoritos
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsAddExerciseModalOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {/* Target Phase & Duration Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#06110a] rounded-xl border border-emerald-900/60 text-xs shrink-0">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Fase de la Sesión
                </label>
                <select
                  value={pickerSelectedPhase}
                  onChange={(e) => setPickerSelectedPhase(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#09170f] border border-emerald-900/60 rounded-lg text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  {DEFAULT_PHASES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Duración asignada
                </label>
                <select
                  value={pickerDuration}
                  onChange={(e) => setPickerDuration(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#09170f] border border-emerald-900/60 rounded-lg text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="10 min">10 min</option>
                  <option value="15 min">15 min</option>
                  <option value="20 min">20 min</option>
                  <option value="25 min">25 min</option>
                  <option value="30 min">30 min</option>
                </select>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  value={pickerSearch}
                  onChange={(e) => setPickerSearch(e.target.value)}
                  placeholder="Buscar ejercicio por nombre, ID o tag..."
                  className="w-full pl-9 pr-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="button"
                onClick={() => setPickerOnlyFavorites(!pickerOnlyFavorites)}
                className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                  pickerOnlyFavorites
                    ? 'bg-red-500/20 text-red-400 border-red-500/40'
                    : 'bg-[#06110a] text-gray-400 border-emerald-900/60 hover:text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${pickerOnlyFavorites ? 'fill-red-500 text-red-500' : ''}`} />
                <span>Solo Favoritos</span>
              </button>
            </div>

            {/* Exercise List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin max-h-[350px]">
              {pickerExercises.length === 0 ? (
                <div className="p-8 text-center text-gray-400 text-xs">
                  No se encontraron ejercicios con ese criterio.
                </div>
              ) : (
                pickerExercises.slice(0, 40).map((ex) => (
                  <div
                    key={ex.id}
                    className="p-3 rounded-xl bg-[#09170f] border border-emerald-900/40 flex items-center justify-between gap-3 hover:border-emerald-700/60 transition"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 shrink-0">
                        {ex.id}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h5 className="text-xs font-bold text-white truncate">{ex.name}</h5>
                        <p className="text-[10px] text-gray-400 truncate">
                          {ex.category} • {ex.nivel} • {ex.duracion}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddExerciseFromPicker(ex)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Seleccionar</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-emerald-900/60 text-xs text-gray-400 shrink-0">
              <span>Mostrando hasta 40 resultados coincidentes</span>
              <button
                type="button"
                onClick={() => setIsAddExerciseModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
