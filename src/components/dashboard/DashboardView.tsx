import React, { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Dumbbell,
  Heart,
  CheckCircle2,
  Gift,
  ArrowRight,
  Flame,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';
import { Exercise } from '../../types';
import { ActiveTab } from '../common/Header';
import { PitchThumbnail } from '../common/PitchThumbnail';
import { getExercisePitchDiagram } from '../../utils/diagramGenerator';
import { allExercises } from '../../data/exercises';

interface Props {
  totalExercises: number;
  completedCount: number;
  favoritesCount: number;
  trainingsCount?: number;
  featuredExercise: Exercise;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectExercise: (ex: Exercise) => void;
  onSelectCategory: (catId: string) => void;
  onSearchQuery?: (query: string) => void;
}

// 8 Core Pillars - Clean, non-repetitive classification with valid category IDs
const CORE_PILLARS = [
  {
    id: '03. Pase y Recepción',
    name: 'Pases y Recepción',
    icon: '⚽',
    count: '75 tareas',
    desc: 'Tercer hombre, paredes dinámicas y juego asociativo',
  },
  {
    id: '05. Finalización y Tiro',
    name: 'Finalización y Remate',
    icon: '🎯',
    count: '80 tareas',
    desc: 'Golpeo, remate de centros, segundas jugadas y definición',
  },
  {
    id: '09. Táctica',
    name: 'Táctica y Posición',
    icon: '🧠',
    count: '65 tareas',
    desc: 'Ocupación de espacios, basculación e intervalos',
  },
  {
    id: '07. Defensa',
    name: 'Defensa y Presión',
    icon: '🛡️',
    count: '65 tareas',
    desc: 'Temporización, duelos 1v1, coberturas y repliegue',
  },
  {
    id: '01. Calentamiento',
    name: 'Calentamiento y Rondos',
    icon: '🔄',
    count: '65 tareas',
    desc: 'Activación dinámica, posesión ligera y superioridades',
  },
  {
    id: '04. Regate y 1 contra 1',
    name: 'Regate y 1 contra 1',
    icon: '⚡',
    count: '65 tareas',
    desc: 'Duelos ofensivos, fintas corporales y desbordes',
  },
  {
    id: '10. Velocidad y Agilidad',
    name: 'Velocidad y Agilidad',
    icon: '🏃',
    count: '60 tareas',
    desc: 'Aceleraciones explosivas, cambios de dirección y agilidad',
  },
  {
    id: '12. Porteros',
    name: 'Porteros',
    icon: '🧤',
    count: '60 tareas',
    desc: 'Blocajes, achiques rápidos, juego aéreo y juego con pies',
  },
];

export const DashboardView: React.FC<Props> = ({
  totalExercises,
  completedCount,
  favoritesCount,
  trainingsCount = 0,
  featuredExercise,
  setActiveTab,
  onSelectExercise,
  onSelectCategory,
  onSearchQuery,
}) => {
  const [localSearch, setLocalSearch] = useState('');
  const completionPercentage = Math.round((completedCount / totalExercises) * 100);

  const quickAccessExercises = useMemo(() => {
    return [
      allExercises[102] || allExercises[1],
      allExercises[305] || allExercises[2],
      allExercises[415] || allExercises[3],
      allExercises[510] || allExercises[4],
    ].filter(Boolean);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      if (onSearchQuery) onSearchQuery(localSearch.trim());
      setActiveTab('ejercicios');
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 1. Clean Coach Hub Header */}
      <div className="bg-[#0b1811] rounded-2xl border border-emerald-900/60 p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                FÚTBOL+ • Panel del Entrenador
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              Biblioteca Metodológica y Planificador
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
              1.000 ejercicios técnicos y tácticos con fichas explicadas y pizarra interactiva.
            </p>
          </div>

          {/* Quick Search directly from Dashboard */}
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Buscar por ID, ejercicio o concepto..."
              className="w-full pl-10 pr-20 py-2.5 bg-[#06110a] border border-emerald-900/80 rounded-xl text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-emerald-500 text-black text-xs font-bold rounded-lg hover:bg-emerald-400 transition"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Unified Stats Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-5 border-t border-emerald-900/40 text-xs">
          <div
            onClick={() => setActiveTab('ejercicios')}
            className="p-3 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-700/60 transition cursor-pointer"
          >
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Ejercicios</span>
            <div className="text-xl font-extrabold text-white mt-0.5">{totalExercises}</div>
            <span className="text-[10px] text-emerald-400 font-medium">16 categorías</span>
          </div>

          <div
            onClick={() => setActiveTab('entrenamientos')}
            className="p-3 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-700/60 transition cursor-pointer"
          >
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Mis Entrenamientos</span>
            <div className="text-xl font-extrabold text-white mt-0.5">{trainingsCount}</div>
            <span className="text-[10px] text-emerald-400 font-medium">Planificados</span>
          </div>

          <div
            onClick={() => setActiveTab('favoritos')}
            className="p-3 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-700/60 transition cursor-pointer"
          >
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Favoritos</span>
            <div className="text-xl font-extrabold text-white mt-0.5">{favoritesCount}</div>
            <span className="text-[10px] text-emerald-400 font-medium">Guardados</span>
          </div>

          <div className="p-3 rounded-xl bg-[#06120b] border border-emerald-950">
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Progreso</span>
            <div className="text-xl font-extrabold text-emerald-400 mt-0.5">{completionPercentage}%</div>
            <span className="text-[10px] text-gray-400 font-medium">{completedCount} completados</span>
          </div>
        </div>
      </div>

      {/* 2. Core Pillars (8 Unified Pillars, no duplicate lists!) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <span>Áreas de Entrenamiento</span>
            <span className="text-xs text-gray-400 font-normal">({CORE_PILLARS.length} pilares técnicos)</span>
          </h2>

          <button
            type="button"
            onClick={() => setActiveTab('ejercicios')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>Ver catálogo completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CORE_PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              id={`pillar-${pillar.id.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
              type="button"
              onClick={() => onSelectCategory(pillar.id)}
              className="p-3.5 rounded-xl bg-[#0b1710] border border-emerald-900/50 hover:border-emerald-500/70 hover:bg-[#0f2216] active:scale-[0.98] transition-all text-left flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-emerald-950/50"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                    {pillar.count}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {pillar.name}
                </h3>
                <p className="text-[11px] text-gray-400 line-clamp-2 mt-1 leading-snug">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-emerald-950 flex items-center justify-between text-[10px] text-emerald-400 font-semibold group-hover:text-emerald-300">
                <span>Ver {pillar.name}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Operational Hub: Featured Exercise + Quick Access Drills (Direct Open) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Featured Drill of the Day - ENTIRE CARD OPENS DIRECTLY */}
        <div
          onClick={() => onSelectExercise(featuredExercise)}
          className="lg:col-span-6 bg-[#0b1811] rounded-2xl border border-emerald-900/60 hover:border-emerald-500/80 p-5 space-y-3.5 shadow-lg cursor-pointer transition-all hover:bg-[#0f2216] group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Flame className="w-4 h-4" />
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Ejercicio Recomendado del Día
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                {featuredExercise.id}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full sm:w-44 shrink-0 overflow-hidden rounded-xl border border-emerald-800/50 shadow group-hover:border-emerald-500/60 transition-colors">
                <PitchThumbnail
                  diagram={getExercisePitchDiagram(featuredExercise)}
                  className="w-full transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                  <span>{featuredExercise.category}</span>
                  <span>•</span>
                  <span className="text-gray-400">{featuredExercise.nivel}</span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {featuredExercise.name}
                </h4>

                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {featuredExercise.objetivoPrincipal}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-gray-400 pt-1">
                  <span>⏱️ {featuredExercise.duracion}</span>
                  <span>👥 {featuredExercise.jugadoresLabel} jug.</span>
                  <span>📍 {featuredExercise.espacio}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs">
            <span className="text-emerald-400/90 text-xs font-medium group-hover:text-emerald-300">
              ⚡ Toca la tarjeta para abrir ficha técnica
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectExercise(featuredExercise);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <span>Abrir Ficha</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Quick Access Drills - EVERY DRILL OPENS DIRECTLY */}
        <div className="lg:col-span-6 bg-[#0b1811] rounded-2xl border border-emerald-900/60 p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Ejercicios Destacados • Abrir Directo
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('ejercicios')}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>Ver todos ({totalExercises})</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-2 flex-1">
            {quickAccessExercises.map((exercise) => (
              <div
                key={exercise.id}
                onClick={() => onSelectExercise(exercise)}
                className="p-2.5 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-500/70 hover:bg-[#0c1f14] transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-emerald-900/60 shrink-0 bg-emerald-950/40 flex items-center justify-center">
                    <PitchThumbnail
                      diagram={getExercisePitchDiagram(exercise)}
                      className="w-full h-full object-cover scale-125 group-hover:scale-135 transition-transform duration-200"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span className="font-mono font-bold text-emerald-400 bg-emerald-950 px-1 rounded border border-emerald-800">
                        {exercise.id}
                      </span>
                      <span className="text-gray-400 truncate">
                        {exercise.category.split('.')[1]?.trim() || exercise.category}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                      {exercise.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 truncate">
                      ⏱️ {exercise.duracion} • 👥 {exercise.jugadoresLabel} jug. • {exercise.nivel}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectExercise(exercise);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-black text-emerald-400 text-[11px] font-bold shrink-0 transition"
                >
                  Abrir ↗
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
