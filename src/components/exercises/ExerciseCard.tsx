import React from 'react';
import { Heart, Check, Clock, Users, ChevronRight, Eye, Layers } from 'lucide-react';
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
}

export const ExerciseCard: React.FC<Props> = ({
  exercise,
  isFavorite,
  isCompleted,
  onToggleFavorite,
  onToggleCompleted,
  onSelect,
}) => {
  const diagram = getExercisePitchDiagram(exercise);
  const getLevelBadgeClass = (lvl: string) => {
    switch (lvl) {
      case 'Principiante':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Intermedio':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Avanzado':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      default:
        return 'bg-gray-500/15 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div
      onClick={() => onSelect(exercise)}
      className="group relative flex flex-col justify-between rounded-xl bg-[#0f1d15] border border-emerald-900/40 p-3.5 transition-all duration-200 hover:border-emerald-500/50 hover:bg-[#122319] hover:shadow-lg hover:shadow-black/50 cursor-pointer"
    >
      {/* Top row: ID badge + Actions (Favorite & Complete) */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-md">
            {exercise.id}
          </span>
          <span className="text-[11px] text-gray-400 truncate max-w-[150px]">
            {exercise.category.split('.')[1]?.trim() || exercise.category}
          </span>
        </div>

        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
          {/* Completed toggle */}
          <button
            type="button"
            onClick={(e) => onToggleCompleted(e, exercise.id)}
            title={isCompleted ? 'Marcado como completado' : 'Marcar como completado'}
            className={`p-1.5 rounded-lg border transition-all ${
              isCompleted
                ? 'bg-emerald-500 text-black border-emerald-400 shadow-sm'
                : 'text-gray-400 border-emerald-900/50 hover:text-emerald-400 hover:border-emerald-700/60 bg-emerald-950/30'
            }`}
          >
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </button>

          {/* Favorite toggle */}
          <button
            type="button"
            onClick={(e) => onToggleFavorite(e, exercise.id)}
            title={isFavorite ? 'En favoritos' : 'Añadir a favoritos'}
            className={`p-1.5 rounded-lg border transition-all ${
              isFavorite
                ? 'bg-red-500/20 text-red-500 border-red-500/40'
                : 'text-gray-400 border-emerald-900/50 hover:text-red-400 hover:border-red-900/50 bg-emerald-950/30'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Illustrative Pitch Thumbnail Preview */}
      <div className="mb-2.5 relative group-hover:border-emerald-500/40 transition-colors">
        <PitchThumbnail diagram={diagram} className="transition-transform group-hover:scale-[1.01]" />
        <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 rounded text-[9px] font-medium text-emerald-300 border border-emerald-800/40">
          <Layers className="w-2.5 h-2.5" />
          <span>Ilustrado</span>
        </div>
      </div>

      {/* Name & Goal */}
      <div className="mb-3">
        <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
          {exercise.name}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-2 mt-1 font-normal leading-relaxed">
          {exercise.objetivoPrincipal}
        </p>
      </div>

      {/* Badges and Parameters */}
      <div className="pt-2 border-t border-emerald-950/80 space-y-2.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getLevelBadgeClass(exercise.nivel)}`}>
            {exercise.nivel}
          </span>
          <span className="text-[10px] font-medium text-gray-300 bg-[#09150e] border border-emerald-900/40 px-2 py-0.5 rounded-full">
            {exercise.edad}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px]">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>{exercise.duracion}</span>
            </span>
            <span className="flex items-center gap-1 text-[11px]">
              <Users className="w-3 h-3 text-emerald-400" />
              <span>{exercise.jugadoresLabel} jug.</span>
            </span>
          </div>

          <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            <span>Ver</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
