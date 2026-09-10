import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Maximize2,
  Minimize2,
  Share2,
  ArrowRight,
  Shield,
  Target,
  Zap,
  CheckCircle2,
  Compass,
  Footprints,
} from 'lucide-react';
import { Exercise } from '../../types';
import { PitchDiagram } from '../common/PitchDiagram';
import { getExercisePitchDiagram } from '../../utils/diagramGenerator';

interface Props {
  exercise: Exercise;
}

export const ExerciseIllustrationSection: React.FC<Props> = ({ exercise }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const diagram = getExercisePitchDiagram(exercise);

  // Derive visual phase badges from exercise
  const phases = [
    {
      num: 1,
      title: 'Fase 1: Montaje y Posicionamiento Inicial',
      desc: exercise.organizacion || 'Disposición reglamentaria de jugadores, conos y balones en el terreno.',
      badge: 'Organización Espacial',
      icon: <Compass className="w-4 h-4 text-emerald-400" />,
    },
    {
      num: 2,
      title: 'Fase 2: Ejecución y Flujo del Balón',
      desc: exercise.desarrollo || 'Secuencia técnica de pases, desmarques en apoyo o ruptura y fijación defensiva.',
      badge: 'Dinámica Activa',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
    },
    {
      num: 3,
      title: 'Fase 3: Transición, Rotación y Finalización',
      desc: exercise.variacionDificil || 'Relevos sistemáticos de puestos, cambio de roles ataque-defensa y gol.',
      badge: 'Rotación y Éxito',
      icon: <Target className="w-4 h-4 text-red-400" />,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Pizarra Táctica Ilustrada del Ejercicio
            </h4>
            <p className="text-[11px] text-gray-400">
              Diagrama vectorial interactivo reglamentario ({exercise.espacio})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#09180f] hover:bg-[#0e2417] text-gray-300 hover:text-white border border-emerald-900/60 text-xs transition"
            title={isZoomed ? 'Reducir vista' : 'Ampliar vista'}
          >
            {isZoomed ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Reducir</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Ampliar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Pitch Illustration */}
      <div className={`transition-all duration-300 ${isZoomed ? 'scale-[1.02] shadow-2xl' : ''}`}>
        <PitchDiagram diagram={diagram} showLegend={true} />
      </div>

      {/* Visual Step Sequence Guide */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between">
          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
            <Footprints className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fases Gráficas del Desarrollo</span>
          </h5>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
            3 Fases Guiadas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="p-3 rounded-xl bg-[#09160f] border border-emerald-900/40 space-y-1.5 hover:border-emerald-700/60 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {phase.icon}
                  <span className="text-[11px] font-bold text-white line-clamp-1">{phase.title}</span>
                </div>
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                  {phase.num}
                </span>
              </div>
              <p className="text-[11px] text-gray-300 line-clamp-3 leading-relaxed">
                {phase.desc}
              </p>
              <span className="inline-block text-[9px] uppercase tracking-wider font-semibold text-emerald-400/90 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900/40">
                {phase.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
