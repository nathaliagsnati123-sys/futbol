import React from 'react';
import { Heart, Check, Clock, Users, PlusCircle } from 'lucide-react';
import { Exercise } from '../../types';
import { PitchThumbnail } from '../common/PitchThumbnail';
import { getExercisePitchDiagram } from '../../utils/diagramGenerator';

interface Props {
  exercise: Exercise;
  isFavorite: boolean;
  isCompleted: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onToggleCompleted: (e: React.MouseEvent, id: string) => void;
  onSelect: (exercise: Exercise) => void;
  onAddToTraining?: (e: React.MouseEvent, exercise: Exercise) => void;
}

export const ExerciseCard: React.FC<Props> = ({
  exercise,
  isFavorite,
  isCompleted,
  onToggleFavorite,
  onToggleCompleted,
  onSelect,
  onAddToTraining,
}) => {
  const diagram = getExercisePitchDiagram(exercise);

  return (
    <div
      onClick={() => onSelect(exercise)}
      className="group relative flex flex-col justify-between rounded-xl bg-[#0c1811] border border-emerald-950 hover:border-emerald-500/50 p-3.5 transition-all duration-150 hover:bg-[#102217] hover:shadow-md cursor-pointer"
    >
      {/* Top row: ID badge, Category & Quick Actions */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="font-mono text-xs font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
            {exercise.id}
          </span>
          <span className="text-[11px] text-gray-400 truncate">
            {exercise.category.split('.')[1]?.trim() || exercise.category}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
          {/* Favorite toggle */}
          <button
            type="button"
            onClick={(e) => onToggleFavorite(e, exercise.id)}
            title={isFavorite ? 'En favoritos' : 'Añadir a favoritos'}
            className={`p-1.5 rounded-lg border transition-all ${
              isFavorite
                ? 'bg-red-500/20 text-red-500 border-red-500/40'
                : 'text-gray-500 border-emerald-950 hover:text-red-400 hover:border-red-900/50 bg-[#07130b]'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>

          {/* Completed toggle */}
          <button
            type="button"
            onClick={(e) => onToggleCompleted(e, exercise.id)}
            title={isCompleted ? 'Marcado como completado' : 'Marcar como completado'}
            className={`p-1.5 rounded-lg border transition-all ${
              isCompleted
                ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                : 'text-gray-500 border-emerald-950 hover:text-emerald-400 hover:border-emerald-800 bg-[#07130b]'
            }`}
          >
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Tactical Pitch Thumbnail */}
      <div className="mb-2.5 overflow-hidden rounded-lg border border-emerald-950/80 group-hover:border-emerald-800/50 transition-colors">
        <PitchThumbnail diagram={diagram} className="transition-transform duration-200 group-hover:scale-[1.02]" />
      </div>

      {/* Name & Short Goal */}
      <div className="mb-3 flex-1">
        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
          {exercise.name}
        </h3>
        <p className="text-[11px] text-gray-400 line-clamp-2 mt-1 leading-relaxed">
          {exercise.objetivoPrincipal}
        </p>
      </div>

      {/* Clean Bottom Metadata Strip */}
      <div className="pt-2 border-t border-emerald-950 flex items-center justify-between text-[11px] text-gray-400">
        <div className="flex items-center gap-2 truncate">
          <span>⏱️ {exercise.duracion}</span>
          <span>•</span>
          <span>👥 {exercise.jugadoresLabel}</span>
        </div>

        {onAddToTraining && (
          <button
            type="button"
            onClick={(e) => onAddToTraining(e, exercise)}
            title="Añadir al planificador de entrenamientos"
            className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold transition shrink-0"
          >
            <PlusCircle className="w-3 h-3" />
            <span>+ Entreno</span>
          </button>
        )}
      </div>
    </div>
  );
};
