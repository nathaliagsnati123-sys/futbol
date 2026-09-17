import React, { useState, useEffect } from 'react';
import { Plus, X, Dumbbell, Clock, Layers, Sparkles, Check } from 'lucide-react';
import { Exercise, TrainingSession, SkillLevel } from '../../types';
import { getStoredTrainings, saveTraining } from '../../utils/storage';

interface Props {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

const PHASES = [
  '1. Calentamiento y Activación',
  '2. Parte Principal: Técnica / Táctica',
  '3. Aplicación y Juego Reducido',
  '4. Vuelta a la Calma',
];

export const AddToTrainingModal: React.FC<Props> = ({
  exercise,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [trainings, setTrainings] = useState<TrainingSession[]>([]);
  const [mode, setMode] = useState<'existing' | 'new'>('existing');
  const [selectedTrainingId, setSelectedTrainingId] = useState<string>('');
  const [selectedPhase, setSelectedPhase] = useState<string>(PHASES[1]);
  const [phaseDuration, setPhaseDuration] = useState<string>('20 min');

  // New training form state
  const [newTitle, setNewTitle] = useState('');
  const [newObjective, setNewObjective] = useState('');
  const [newAge, setNewAge] = useState('12–14 años');
  const [newLevel, setNewLevel] = useState<SkillLevel>('Intermedio');
  const [newPlayers, setNewPlayers] = useState('14 jugadores');

  useEffect(() => {
    if (isOpen && exercise) {
      const stored = getStoredTrainings();
      setTrainings(stored);
      if (stored.length > 0) {
        setSelectedTrainingId(stored[0].id);
        setMode('existing');
      } else {
        setMode('new');
      }

      setPhaseDuration(exercise.duracion || '20 min');
      setNewTitle(`Sesión: ${exercise.name.slice(0, 40)}`);
      setNewObjective(exercise.objetivoPrincipal || 'Desarrollo técnico y táctico');
      setNewAge(exercise.edad || '12–14 años');
      setNewLevel(exercise.nivel || 'Intermedio');
      setNewPlayers(exercise.jugadoresLabel ? `${exercise.jugadoresLabel} jugadores` : '14 jugadores');

      // Smart default phase based on category
      if (exercise.category.includes('Calentamiento') || exercise.category.includes('Rondos')) {
        setSelectedPhase(PHASES[0]);
      } else if (exercise.category.includes('Física') || exercise.category.includes('Velocidad')) {
        setSelectedPhase(PHASES[0]);
      } else if (exercise.category.includes('Reducidos') || exercise.category.includes('Partido')) {
        setSelectedPhase(PHASES[2]);
      } else {
        setSelectedPhase(PHASES[1]);
      }
    }
  }, [isOpen, exercise]);

  if (!isOpen || !exercise) return null;

  const handleAddToExisting = (e: React.FormEvent) => {
    e.preventDefault();
    const training = trainings.find((t) => t.id === selectedTrainingId);
    if (!training) return;

    const updatedSession: TrainingSession = {
      ...training,
      exercises: [
        ...training.exercises,
        {
          phase: selectedPhase,
          duration: phaseDuration,
          exercise,
        },
      ],
    };

    saveTraining(updatedSession);
    onSuccess(`¡Ejercicio "${exercise.id}" agregado a "${training.title}"!`);
    onClose();
  };

  const handleCreateNewSession = (e: React.FormEvent) => {
    e.preventDefault();

    const newSession: TrainingSession = {
      id: `train-${Date.now()}`,
      title: newTitle || `Sesión: ${exercise.name}`,
      date: new Date().toISOString().split('T')[0],
      duration: '75 min',
      ageGroup: newAge,
      level: newLevel,
      playersCount: newPlayers,
      objective: newObjective,
      exercises: [
        {
          phase: selectedPhase,
          duration: phaseDuration,
          exercise,
        },
      ],
      notes: `Sesión creada a partir del ejercicio ${exercise.id} - ${exercise.name}.`,
    };

    saveTraining(newSession);
    onSuccess(`¡Nuevo entrenamiento "${newSession.title}" creado con éxito!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#0b1710] border border-emerald-600/50 rounded-2xl p-6 max-w-lg w-full text-white shadow-2xl space-y-4 animate-fadeIn my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Agregar Ejercicio a Entrenamiento</h3>
              <p className="text-[11px] text-gray-400 truncate max-w-xs">
                {exercise.id} • {exercise.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#06110a] rounded-xl border border-emerald-900/60 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMode('existing')}
            disabled={trainings.length === 0}
            className={`py-2 rounded-lg transition text-center ${
              mode === 'existing'
                ? 'bg-emerald-500 text-black font-bold shadow-sm'
                : 'text-gray-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            Sesión Existente ({trainings.length})
          </button>

          <button
            type="button"
            onClick={() => setMode('new')}
            className={`py-2 rounded-lg transition text-center ${
              mode === 'new'
                ? 'bg-emerald-500 text-black font-bold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            + Crear Nueva Sesión
          </button>
        </div>

        {/* Option 1: Existing Training */}
        {mode === 'existing' && (
          <form onSubmit={handleAddToExisting} className="space-y-4 text-xs">
            <div>
              <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                Selecciona la Sesión
              </label>
              <select
                value={selectedTrainingId}
                onChange={(e) => setSelectedTrainingId(e.target.value)}
                className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                required
              >
                {trainings.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} ({t.exercises.length} ejercicios • {t.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Fase de la Sesión
                </label>
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  {PHASES.map((p) => (
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
                  value={phaseDuration}
                  onChange={(e) => setPhaseDuration(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="10 min">10 min</option>
                  <option value="15 min">15 min</option>
                  <option value="20 min">20 min</option>
                  <option value="25 min">25 min</option>
                  <option value="30 min">30 min</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-emerald-900/50">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-md transition"
              >
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Agregar a Sesión</span>
              </button>
            </div>
          </form>
        )}

        {/* Option 2: New Training Session */}
        {mode === 'new' && (
          <form onSubmit={handleCreateNewSession} className="space-y-3 text-xs">
            <div>
              <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                Nombre de la Nueva Sesión
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Ej: Sesión de Finalización Rápida"
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
                value={newObjective}
                onChange={(e) => setNewObjective(e.target.value)}
                placeholder="Ej: Automatizar transiciones ofensivas"
                required
                className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Edad / Categoría
                </label>
                <select
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
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
                  value={newLevel}
                  onChange={(e) => setNewLevel(e.target.value as SkillLevel)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="Principiante">Principiante</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Fase Inicial
                </label>
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  {PHASES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Duración Tarea
                </label>
                <select
                  value={phaseDuration}
                  onChange={(e) => setPhaseDuration(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="10 min">10 min</option>
                  <option value="15 min">15 min</option>
                  <option value="20 min">20 min</option>
                  <option value="25 min">25 min</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-emerald-900/50">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-md transition"
              >
                <Plus className="w-4 h-4" />
                <span>Crear Entrenamiento</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
