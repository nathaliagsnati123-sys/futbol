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
  Bot,
  Sparkles,
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
  onAskFutIa?: (exercise: Exercise) => void;
}

export const ExerciseDetailModal: React.FC<Props> = ({
  exercise,
  onClose,
  isFavorite,
  isCompleted,
  onToggleFavorite,
  onToggleCompleted,
  onAddToTraining,
  onAskFutIa,
}) => {
  if (!exercise) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="exercise-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto print:static print:inset-auto print:block print:w-full print:h-auto print:max-h-none print:overflow-visible print:bg-transparent print:backdrop-blur-none print:p-0 print:m-0 print:z-auto"
    >
      <div
        id="exercise-detail-modal-card"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b1610] border border-emerald-700/40 text-gray-100 shadow-2xl overflow-hidden my-auto animate-fadeIn print:static print:w-full print:max-w-none print:h-auto print:max-h-none print:overflow-visible print:bg-white print:text-black print:border-none print:shadow-none print:p-0 print:m-0 print:rounded-none"
      >
        {/* Printable Official Header (Visible on Paper / Print Only) */}
        <div className="hidden print:block border-b-2 border-emerald-800 pb-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-black text-base">
                ⚽+
              </div>
              <div>
                <h1 className="text-base font-black uppercase tracking-wider text-emerald-950">
                  FÚTBOL+ • FICHA TÉCNICA OFICIAL
                </h1>
                <p className="text-[10px] text-gray-600 font-medium">
                  Sistema Profesional de Entrenamiento • 1.000 Ejercicios
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-black text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-300">
                {exercise.id}
              </span>
              <p className="text-[10px] text-gray-600 mt-1 font-semibold">
                {exercise.category} • {exercise.subcategory}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 p-4 sm:p-6 border-b border-emerald-900/60 bg-[#07130b] shrink-0 print:border-b print:border-gray-300 print:p-0 print:pb-3 print:bg-transparent">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap print:hidden">
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
            <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight print:text-2xl print:text-black print:font-black">
              {exercise.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0 print:hidden">
            {/* Quick Ask FUT IA */}
            {onAskFutIa && (
              <button
                type="button"
                onClick={() => {
                  onAskFutIa(exercise);
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-black text-xs font-black hover:brightness-110 shadow-md transition"
                title="Explicar paso a paso este ejercicio con FUT IA"
              >
                <Bot className="w-3.5 h-3.5 stroke-[2.2]" />
                <span className="hidden sm:inline">Paso a Paso con</span>
                <span>FUT IA</span>
              </button>
            )}

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
        <div
          id="exercise-detail-modal-body"
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-sm print:overflow-visible print:p-0 print:pt-4 print:space-y-4 print:h-auto print:max-h-none print:block print:text-black"
        >
          {/* Tactical Pitch Illustration & Visual Sequence */}
          <div className="print-break-inside-avoid">
            <ExerciseIllustrationSection exercise={exercise} />
          </div>

          {/* Key Parameters Cards Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 print:grid-cols-4 print:gap-2 print-break-inside-avoid">
            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40 print:bg-gray-50 print:border-gray-300 print:p-2.5">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">Edad Recomendada</span>
              <span className="text-xs font-semibold text-white print:text-black print:font-bold">{exercise.edad}</span>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40 print:bg-gray-50 print:border-gray-300 print:p-2.5">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">Nivel de Habilidad</span>
              <span className="text-xs font-semibold text-emerald-300 print:text-emerald-800 print:font-bold">{exercise.nivel}</span>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40 print:bg-gray-50 print:border-gray-300 print:p-2.5">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">Jugadores y Espacio</span>
              <span className="text-xs font-semibold text-white print:text-black print:font-bold">{exercise.jugadoresLabel} jug. • {exercise.espacio}</span>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-900/40 print:bg-gray-50 print:border-gray-300 print:p-2.5">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">Duración e Intensidad</span>
              <span className="text-xs font-semibold text-white print:text-black print:font-bold">{exercise.duracion} • {exercise.intensidad}</span>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="bg-[#08170e] p-4 rounded-xl border border-emerald-800/40 space-y-3 print:bg-gray-50 print:border-gray-300 print:p-3 print:space-y-2 print-break-inside-avoid">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 print:text-emerald-900">
              <Target className="w-3.5 h-3.5" />
              Objetivos de la Tarea
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs print:grid-cols-3 print:gap-2">
              <div>
                <span className="font-bold text-white block mb-1 text-[11px] print:text-black">Objetivo Principal:</span>
                <p className="text-gray-300 leading-relaxed print:text-gray-800">{exercise.objetivoPrincipal}</p>
              </div>
              <div>
                <span className="font-bold text-emerald-300 block mb-1 text-[11px] print:text-emerald-900">Objetivo Técnico:</span>
                <p className="text-gray-300 leading-relaxed print:text-gray-800">{exercise.objetivoTecnico}</p>
              </div>
              <div>
                <span className="font-bold text-blue-300 block mb-1 text-[11px] print:text-blue-900">Objetivo Táctico:</span>
                <p className="text-gray-300 leading-relaxed print:text-gray-800">{exercise.objetivoTatico}</p>
              </div>
            </div>
          </div>

          {/* Materials & Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3 print-break-inside-avoid">
            <div className="bg-[#0a1810] p-4 rounded-xl border border-emerald-900/40 print:bg-gray-50 print:border-gray-300 print:p-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 print:text-emerald-900">
                Materiales Necesarios
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed print:text-gray-800">{exercise.materiales}</p>
            </div>

            <div className="bg-[#0a1810] p-4 rounded-xl border border-emerald-900/40 print:bg-gray-50 print:border-gray-300 print:p-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 print:text-emerald-900">
                Organización del Espacio
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed print:text-gray-800">{exercise.organizacion}</p>
            </div>
          </div>

          {/* Development & Step-by-Step */}
          <div className="space-y-3 print:space-y-2 print-break-inside-avoid">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 print:text-emerald-900">
              <Zap className="w-3.5 h-3.5" />
              Desarrollo de la Dinámica
            </h4>
            <p className="text-xs text-gray-200 leading-relaxed bg-[#07130b] p-4 rounded-xl border border-emerald-900/40 print:bg-white print:border-gray-300 print:text-gray-800 print:p-3">
              {exercise.desarrollo}
            </p>

            <div className="space-y-2 mt-3 print:mt-2">
              <span className="text-xs font-bold text-white block print:text-black">Secuencia paso a paso:</span>
              <div className="space-y-1.5">
                {exercise.pasoAPaso.map((paso, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-gray-300 bg-[#09170f] p-2.5 rounded-lg border border-emerald-950 print:bg-gray-50 print:border-gray-200 print:text-gray-800 print:p-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0 print:bg-emerald-100 print:text-emerald-900 print:border print:border-emerald-300">
                      {idx + 1}
                    </span>
                    <p className="leading-snug">{paso}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Puntos Clave & Errores Frecuentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3 print-break-inside-avoid">
            <div className="bg-[#08180e] p-4 rounded-xl border border-emerald-800/40 print:bg-emerald-50/40 print:border-emerald-200 print:p-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-2.5 print:text-emerald-900">
                <Lightbulb className="w-3.5 h-3.5 text-yellow-400 print:text-amber-600" />
                Puntos Clave para el Entrenador
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-200 print:text-gray-800">
                {exercise.puntosClave.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold print:text-emerald-700">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#180d0d] p-4 rounded-xl border border-red-900/40 print:bg-red-50/40 print:border-red-200 print:p-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-1.5 mb-2.5 print:text-red-900">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400 print:text-red-600" />
                Errores Frecuentes y Corrección
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300 print:text-gray-800">
                {exercise.erroresFrecuentes.map((err, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold print:text-red-600">✕</span>
                    <div>
                      <span className="text-gray-200 font-medium print:text-gray-900">{err}</span>
                      {exercise.correcciones[idx] && (
                        <p className="text-[11px] text-emerald-300 mt-0.5 print:text-emerald-800">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs print:grid-cols-4 print:gap-2 print-break-inside-avoid">
            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-200 print:p-2.5">
              <span className="font-bold text-green-400 flex items-center gap-1 mb-1 text-[11px] print:text-green-800">
                <TrendingDown className="w-3.5 h-3.5" />
                Variación Fácil (Regresión)
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px] print:text-gray-800">{exercise.variacionFacil}</p>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-200 print:p-2.5">
              <span className="font-bold text-amber-400 flex items-center gap-1 mb-1 text-[11px] print:text-amber-800">
                <TrendingUp className="w-3.5 h-3.5" />
                Variación Difícil (Progresión)
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px] print:text-gray-800">{exercise.variacionDificil}</p>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-200 print:p-2.5">
              <span className="font-bold text-blue-400 block mb-1 text-[11px] print:text-blue-800">Posiciones Idóneas</span>
              <p className="text-gray-300 leading-relaxed text-[11px] print:text-gray-800">{exercise.posiciones}</p>
            </div>

            <div className="bg-[#09150f] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-200 print:p-2.5">
              <span className="font-bold text-gray-400 flex items-center gap-1 mb-1 text-[11px] print:text-gray-700">
                <Tag className="w-3.5 h-3.5" />
                Etiquetas / Tags
              </span>
              <div className="flex flex-wrap gap-1">
                {exercise.tags.map((t, idx) => (
                  <span key={idx} className="bg-emerald-950 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded border border-emerald-800/40 print:bg-gray-200 print:text-gray-800 print:border-gray-300">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Printable Official Footer (Visible on Paper / Print Only) */}
          <div className="hidden print:flex items-center justify-between border-t border-gray-300 pt-3 mt-4 text-[10px] text-gray-500">
            <span>FÚTBOL+ Pro Training • Ficha de Ejercicio {exercise.id}</span>
            <span>www.futbolplus.app • 1.000 Ejercicios Profesionales</span>
          </div>
        </div>

        {/* Modal Footer Actions (Screen Only) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 border-t border-emerald-900/60 bg-[#07130b] shrink-0 print:hidden">
          <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
            {onAskFutIa && (
              <button
                type="button"
                onClick={() => {
                  onAskFutIa(exercise);
                  onClose();
                }}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-black text-xs font-black shadow-md hover:brightness-110 transition"
              >
                <Bot className="w-4 h-4" />
                <span>Paso a Paso con FUT IA</span>
              </button>
            )}

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
