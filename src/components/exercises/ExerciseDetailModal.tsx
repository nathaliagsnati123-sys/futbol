import React from 'react';
import {
  X,
  Heart,
  Check,
  Clock,
  Users,
  Target,
  Shield,
  Layers,
  Zap,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Tag,
  Share2,
  Printer,
  PlusCircle,
} from 'lucide-react';
import { Exercise } from '../../types';
import { PitchDiagram } from '../common/PitchDiagram';
import { ExerciseIllustrationSection } from './ExerciseIllustrationSection';

interface Props {
  exercise: Exercise | null;
  onClose: () => void;
  isFavorite: boolean;
  isCompleted: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  onAddToTraining?: (exercise: Exercise) => void;
}

export const ExerciseDetailModal: React.FC<Props> = ({
  exercise,
  onClose,
  isFavorite,
  isCompleted,
  onToggleFavorite,
  onToggleCompleted,
  onAddToTraining,
}) => {
  if (!exercise) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b1610] border border-emerald-700/40 text-gray-100 shadow-2xl overflow-hidden my-auto animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 p-4 sm:p-6 border-b border-emerald-900/60 bg-[#07130b] shrink-0">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded-md">
                {exercise.id}
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                {exercise.category}
              </span>
              <span className="text-xs text-gray-400">
                • {exercise.subcategory}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
              {exercise.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Favorite */}
            <button
              type="button"
              onClick={() => onToggleFavorite(exercise.id)}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-red-500/20 text-red-500 border-red-500/40'
                  : 'text-gray-400 border-emerald-900/60 hover:text-red-400 hover:border-red-900 bg-emerald-950/40'
              }`}
              title={isFavorite ? 'En favoritos' : 'Añadir a favoritos'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </button>

            {/* Quick Completed */}
            <button
              type="button"
              onClick={() => onToggleCompleted(exercise.id)}
              className={`p-2 rounded-xl border transition-all ${
                isCompleted
                  ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                  : 'text-gray-400 border-emerald-900/60 hover:text-emerald-400 hover:border-emerald-700 bg-emerald-950/40'
              }`}
              title={isCompleted ? 'Completado' : 'Marcar como completado'}
            >
              <Check className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 border border-transparent transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-sm">
          {/* Tactical Pitch Illustration & Visual Sequence */}
          <ExerciseIllustrationSection exercise={exercise} />

          {/* Key Parameters Cards Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Edad Recomendada</span>
              <span className="text-xs font-semibold text-white">{exercise.edad}</span>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Nivel de Habilidad</span>
              <span className="text-xs font-semibold text-emerald-300">{exercise.nivel}</span>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Jugadores y Espacio</span>
              <span className="text-xs font-semibold text-white">{exercise.jugadoresLabel} jug. • {exercise.espacio}</span>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Duración e Intensidad</span>
              <span className="text-xs font-semibold text-white">{exercise.duracion} • {exercise.intensidad}</span>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="bg-[#08170e] p-4 rounded-xl border border-emerald-800/40 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              Objetivos de la Tarea
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="font-bold text-white block mb-1 text-[11px]">Objetivo Principal:</span>
                <p className="text-gray-300 leading-relaxed">{exercise.objetivoPrincipal}</p>
              </div>
              <div>
                <span className="font-bold text-emerald-300 block mb-1 text-[11px]">Objetivo Técnico:</span>
                <p className="text-gray-300 leading-relaxed">{exercise.objetivoTecnico}</p>
              </div>
              <div>
                <span className="font-bold text-blue-300 block mb-1 text-[11px]">Objetivo Táctico:</span>
                <p className="text-gray-300 leading-relaxed">{exercise.objetivoTatico}</p>
              </div>
            </div>
          </div>

          {/* Materials & Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0a1810] p-4 rounded-xl border border-emerald-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Materiales Necesarios
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed">{exercise.materiales}</p>
            </div>

            <div className="bg-[#0a1810] p-4 rounded-xl border border-emerald-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Organización del Espacio
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed">{exercise.organizacion}</p>
            </div>
          </div>

          {/* Development & Step-by-Step */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Desarrollo de la Dinámica
            </h4>
            <p className="text-xs text-gray-200 leading-relaxed bg-[#07130b] p-4 rounded-xl border border-emerald-900/40">
              {exercise.desarrollo}
            </p>

            <div className="space-y-2 mt-3">
              <span className="text-xs font-bold text-white block">Secuencia paso a paso:</span>
              <div className="space-y-1.5">
                {exercise.pasoAPaso.map((paso, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-gray-300 bg-[#09170f] p-2.5 rounded-lg border border-emerald-950"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="leading-snug">{paso}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Puntos Clave & Errores Frecuentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#08180e] p-4 rounded-xl border border-emerald-800/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-2.5">
                <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
                Puntos Clave para el Entrenador
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-200">
                {exercise.puntosClave.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#180d0d] p-4 rounded-xl border border-red-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-1.5 mb-2.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                Errores Frecuentes y Corrección
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {exercise.erroresFrecuentes.map((err, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <div>
                      <span className="text-gray-200 font-medium">{err}</span>
                      {exercise.correcciones[idx] && (
                        <p className="text-[11px] text-emerald-300 mt-0.5">
                          ✓ Corrección: {exercise.correcciones[idx]}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Variations & Progressions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950">
              <span className="font-bold text-green-400 flex items-center gap-1 mb-1 text-[11px]">
                <TrendingDown className="w-3.5 h-3.5" />
                Variación Fácil (Regresión)
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px]">{exercise.variacionFacil}</p>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950">
              <span className="font-bold text-amber-400 flex items-center gap-1 mb-1 text-[11px]">
                <TrendingUp className="w-3.5 h-3.5" />
                Variación Difícil (Progresión)
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px]">{exercise.variacionDificil}</p>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950">
              <span className="font-bold text-blue-400 block mb-1 text-[11px]">Posiciones Idóneas</span>
              <p className="text-gray-300 leading-relaxed text-[11px]">{exercise.posiciones}</p>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950">
              <span className="font-bold text-gray-400 flex items-center gap-1 mb-1 text-[11px]">
                <Tag className="w-3.5 h-3.5" />
                Etiquetas / Tags
              </span>
              <div className="flex flex-wrap gap-1">
                {exercise.tags.map((t, idx) => (
                  <span key={idx} className="bg-emerald-950 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded border border-emerald-800/40">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 border-t border-emerald-900/60 bg-[#07130b] shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onAddToTraining && (
              <button
                type="button"
                onClick={() => {
                  onAddToTraining(exercise);
                  onClose();
                }}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Añadir a Entrenamiento</span>
              </button>
            )}

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-gray-400 hover:text-white border border-emerald-900/50 hover:bg-white/5 text-xs font-medium transition"
              title="Imprimir ficha de ejercicio"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir Ficha</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onToggleFavorite(exercise.id)}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
                isFavorite
                  ? 'bg-red-500/20 text-red-400 border-red-500/40'
                  : 'text-gray-300 border-emerald-900/60 hover:bg-emerald-950'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{isFavorite ? 'En favoritos' : '♡ Favoritos'}</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleCompleted(exercise.id)}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                isCompleted
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-900/50'
                  : 'bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900'
              }`}
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{isCompleted ? '✓ Completado' : 'Marcar Completado'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
