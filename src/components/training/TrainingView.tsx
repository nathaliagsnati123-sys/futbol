import React, { useState } from 'react';
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
  CheckCircle,
  Dumbbell,
} from 'lucide-react';
import { TrainingSession, Exercise } from '../../types';
import { allExercises } from '../../data/exercises';
import { getStoredTrainings, saveTraining, deleteTraining } from '../../utils/storage';

interface Props {
  onSelectExercise: (ex: Exercise) => void;
}

export const TrainingView: React.FC<Props> = ({ onSelectExercise }) => {
  const [trainings, setTrainings] = useState<TrainingSession[]>(() => getStoredTrainings());
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(
    trainings.length > 0 ? trainings[0] : null
  );

  // Generator form state
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [genObjective, setGenObjective] = useState('Salida de balón y superación de líneas');
  const [genAge, setGenAge] = useState('12–14 años');
  const [genLevel, setGenLevel] = useState<'Principiante' | 'Intermedio' | 'Avanzado'>('Intermedio');
  const [genPlayers, setGenPlayers] = useState('14 jugadores');
  const [genDuration, setGenDuration] = useState('90 min');

  const handleGenerateSession = (e: React.FormEvent) => {
    e.preventDefault();

    // Pick 5 relevant exercises smartly
    const warmupPool = allExercises.filter(
      (e) => e.category.includes('Calentamiento') || e.category.includes('Rondos')
    );
    const techPool = allExercises.filter(
      (e) => e.category.includes('Pase') || e.category.includes('Técnica') || e.category.includes('Control')
    );
    const tacticalPool = allExercises.filter(
      (e) => e.category.includes('Posición') || e.category.includes('Táctica') || e.category.includes('Presión')
    );
    const finishingPool = allExercises.filter(
      (e) => e.category.includes('Finalización') || e.category.includes('1x1')
    );
    const gamePool = allExercises.filter(
      (e) => e.category.includes('Reducidos') || e.category.includes('Transiciones')
    );

    const pickRandom = (arr: Exercise[], fallbackIdx: number) => {
      if (arr.length === 0) return allExercises[fallbackIdx % allExercises.length];
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const ex1 = pickRandom(warmupPool, 0);
    const ex2 = pickRandom(techPool, 100);
    const ex3 = pickRandom(tacticalPool, 200);
    const ex4 = pickRandom(finishingPool, 300);
    const ex5 = pickRandom(gamePool, 400);

    const newSession: TrainingSession = {
      id: `train-${Date.now()}`,
      title: `Sesión: ${genObjective}`,
      date: new Date().toISOString().split('T')[0],
      duration: genDuration,
      ageGroup: genAge,
      level: genLevel,
      playersCount: genPlayers,
      objective: genObjective,
      exercises: [
        { phase: '1. Calentamiento y Activación Dinámica', duration: '15 min', exercise: ex1 },
        { phase: '2. Tarea Técnica y Coordinativa', duration: '20 min', exercise: ex2 },
        { phase: '3. Juego de Posición / Bloque Táctico', duration: '25 min', exercise: ex3 },
        { phase: '4. Finalización y Definición a Portería', duration: '15 min', exercise: ex4 },
        { phase: '5. Partido Reducido Condicionado', duration: '15 min', exercise: ex5 },
      ],
      notes: `Enfatizar la rapidez en la circulación, perfilado previo a la recepción y comunicación verbal entre líneas.`,
    };

    saveTraining(newSession);
    const updated = getStoredTrainings();
    setTrainings(updated);
    setSelectedSession(newSession);
    setIsGeneratorOpen(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Seguro que deseas eliminar esta sesión?')) {
      deleteTraining(id);
      const updated = getStoredTrainings();
      setTrainings(updated);
      if (selectedSession?.id === id) {
        setSelectedSession(updated.length > 0 ? updated[0] : null);
      }
    }
  };

  const handleSwapExercise = (phaseIndex: number) => {
    if (!selectedSession) return;
    const randomEx = allExercises[Math.floor(Math.random() * allExercises.length)];
    const updatedExercises = [...selectedSession.exercises];
    updatedExercises[phaseIndex] = {
      ...updatedExercises[phaseIndex],
      exercise: randomEx,
    };
    const updatedSession = {
      ...selectedSession,
      exercises: updatedExercises,
    };
    saveTraining(updatedSession);
    setSelectedSession(updatedSession);
    setTrainings(getStoredTrainings());
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0a1810] p-5 sm:p-6 rounded-2xl border border-emerald-900/50 shadow-md">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Dumbbell className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Planificador y Generador de Sesiones
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            Crea entrenamientos completos estructurados minuto a minuto, guárdalos localmente o imprímelos para el campo.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsGeneratorOpen(true)}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-lg shadow-emerald-950/60 transition hover:scale-[1.02] active:scale-[0.98] shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>Generar Nueva Sesión</span>
        </button>
      </div>

      {/* Generator Modal */}
      {isGeneratorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#0b1710] border border-emerald-600/50 rounded-2xl p-6 max-w-lg w-full text-white shadow-2xl space-y-4 animate-fadeIn my-auto">
            <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Generador Automático de Sesión</h3>
              </div>
              <button
                onClick={() => setIsGeneratorOpen(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleGenerateSession} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                  Objetivo Principal de la Sesión
                </label>
                <input
                  type="text"
                  value={genObjective}
                  onChange={(e) => setGenObjective(e.target.value)}
                  placeholder="Ej: Salida de balón, Presión alta, Definición 1v1..."
                  required
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
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
                    <option value="6–8 años">6–8 años (Iniciación)</option>
                    <option value="9–11 años">9–11 años (Alevín)</option>
                    <option value="12–14 años">12–14 años (Infantil)</option>
                    <option value="15–17 años">15–17 años (Juvenil)</option>
                    <option value="Adultos">Adultos / Senior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Nivel del Equipo
                  </label>
                  <select
                    value={genLevel}
                    onChange={(e) => setGenLevel(e.target.value as any)}
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
                    Número de Jugadores
                  </label>
                  <input
                    type="text"
                    value={genPlayers}
                    onChange={(e) => setGenPlayers(e.target.value)}
                    placeholder="Ej: 14 jugadores + 2 porteros"
                    className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1 uppercase text-[10px]">
                    Duración Total
                  </label>
                  <select
                    value={genDuration}
                    onChange={(e) => setGenDuration(e.target.value)}
                    className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="60 min">60 minutos</option>
                    <option value="75 min">75 minutos</option>
                    <option value="90 min">90 minutos</option>
                    <option value="105 min">105 minutos</option>
                    <option value="120 min">120 minutos</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/40 text-[11px] text-gray-300">
                ⚡ El algoritmo seleccionará 5 ejercicios complementarios organizados en Calentamiento, Tarea Técnica, Táctica, Finalización y Partido Reducido.
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

      {/* Main Layout: Saved Sessions list (left) & Active session preview (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Saved Sessions List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              Mis Sesiones Guardadas ({trainings.length})
            </h3>
          </div>

          {trainings.length === 0 ? (
            <div className="p-8 text-center bg-[#0a1710] rounded-2xl border border-emerald-900/40 text-gray-400 space-y-3">
              <Dumbbell className="w-8 h-8 text-emerald-500/50 mx-auto" />
              <p className="text-xs">No tienes sesiones guardadas todavía.</p>
              <button
                onClick={() => setIsGeneratorOpen(true)}
                className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/30 transition"
              >
                Crear mi primera sesión
              </button>
            </div>
          ) : (
            <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
              {trainings.map((session) => (
                <div
                  key={session.id}
                  onClick={() => setSelectedSession(session)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedSession?.id === session.id
                      ? 'bg-[#11271b] border-emerald-500 text-white shadow-md'
                      : 'bg-[#09150e] border-emerald-900/40 text-gray-300 hover:border-emerald-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] text-emerald-400 font-mono font-semibold">
                      {session.date}
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full">
                      {session.duration}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white line-clamp-1 mb-1">
                    {session.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <span>{session.ageGroup}</span>
                    <span>•</span>
                    <span>{session.level}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Selected Session Detail & Interactive Flow */}
        <div className="lg:col-span-8">
          {selectedSession ? (
            <div className="bg-[#09150e] rounded-2xl border border-emerald-900/50 p-5 sm:p-6 space-y-6 shadow-xl">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-emerald-900/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold flex-wrap">
                    <span>📅 {selectedSession.date}</span>
                    <span>•</span>
                    <span>⏱️ {selectedSession.duration}</span>
                    <span>•</span>
                    <span>👥 {selectedSession.playersCount}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    {selectedSession.title}
                  </h3>
                  <p className="text-xs text-gray-300 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Objetivo: {selectedSession.objective}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-gray-300 hover:text-white border border-emerald-900/60 bg-[#06110a] text-xs font-semibold transition"
                    title="Imprimir hoja de sesión"
                  >
                    <Printer className="w-3.5 h-3.5" />
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

              {/* Step by step training exercises */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Secuencia de Ejercicios del Entrenamiento
                </h4>

                <div className="space-y-3">
                  {selectedSession.exercises.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#0d1f14] border border-emerald-900/50 hover:border-emerald-700/60 transition space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-500 text-black font-extrabold text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="font-bold text-xs text-white">
                            {item.phase}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-gray-400 bg-[#06120b] border border-emerald-950 px-2 py-0.5 rounded-md font-mono">
                            ⏱️ {item.duration}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleSwapExercise(idx)}
                            title="Cambiar por otro ejercicio aleatorio"
                            className="p-1 text-gray-400 hover:text-emerald-400 transition"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#08150e] p-3 rounded-lg border border-emerald-950">
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono font-bold text-emerald-400">
                              {item.exercise.id}
                            </span>
                            <span className="text-xs font-bold text-white">
                              {item.exercise.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400 line-clamp-1">
                            {item.exercise.objetivoPrincipal}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectExercise(item.exercise)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition shrink-0"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Ver Ficha</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coaching Notes */}
              {selectedSession.notes && (
                <div className="bg-[#07130b] p-4 rounded-xl border border-emerald-900/40 text-xs text-gray-300">
                  <span className="font-bold text-emerald-400 block mb-1 uppercase text-[10px]">
                    Notas para el Entrenador:
                  </span>
                  <p className="leading-relaxed">{selectedSession.notes}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-12 text-center bg-[#09150e] rounded-2xl border border-emerald-900/40 text-gray-400">
              <Dumbbell className="w-10 h-10 text-emerald-600/50 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">Selecciona una sesión de la lista</p>
              <p className="text-xs mt-1">O haz clic en "Generar Nueva Sesión" arriba.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
