import React from 'react';
import {
  BookOpen,
  Sparkles,
  Heart,
  CheckCircle2,
  Gift,
  FileText,
  Dumbbell,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  Flame,
} from 'lucide-react';
import { Exercise } from '../../types';
import { CATEGORIES_LIST } from '../../data/exercises';
import { ActiveTab } from '../common/Header';
import { PWAInstallButton } from '../common/PWAInstallButton';
import { PitchThumbnail } from '../common/PitchThumbnail';
import { getExercisePitchDiagram } from '../../utils/diagramGenerator';

interface Props {
  totalExercises: number;
  completedCount: number;
  favoritesCount: number;
  featuredExercise: Exercise;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectExercise: (ex: Exercise) => void;
  onSelectCategory: (catId: string) => void;
}

export const DashboardView: React.FC<Props> = ({
  totalExercises,
  completedCount,
  favoritesCount,
  featuredExercise,
  setActiveTab,
  onSelectExercise,
  onSelectCategory,
}) => {
  const completionPercentage = Math.round((completedCount / totalExercises) * 100);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2417] via-[#08170f] to-[#040e08] border border-emerald-700/40 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Biblioteca Profesional para Entrenadores y Jugadores</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
            1.000 Ejercicios para Llevar tu Entrenamiento al{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Siguiente Nivel
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl font-normal">
            Explora la mayor colección clasificada de tareas de fútbol con fichas técnicas, diagramas interactivos, montaje, progresiones y metodología en español.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setActiveTab('ejercicios')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explorar 1.000 Ejercicios</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('entrenamientos')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#091b11] hover:bg-[#0e2719] text-emerald-300 border border-emerald-700/50 font-bold text-xs sm:text-sm transition"
            >
              <Dumbbell className="w-4 h-4" />
              <span>Generar Sesión</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('bonos')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1c1809] hover:bg-[#27210b] text-amber-300 border border-amber-700/50 font-bold text-xs sm:text-sm transition"
            >
              <Gift className="w-4 h-4" />
              <span>10 Bonos Pro</span>
            </button>
          </div>
        </div>

        {/* Decorative Football pitch line pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-white fill-none stroke-2">
            <circle cx="200" cy="100" r="80" />
            <line x1="200" y1="0" x2="200" y2="200" />
            <rect x="120" y="40" width="80" height="120" />
          </svg>
        </div>
      </div>

      {/* Progress & Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Exercises */}
        <div
          onClick={() => setActiveTab('ejercicios')}
          className="p-4 rounded-2xl bg-[#09160f] border border-emerald-900/40 hover:border-emerald-700/60 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] uppercase font-bold text-gray-400">Total Ejercicios</span>
            <BookOpen className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">{totalExercises}</div>
          <span className="text-[10px] text-gray-400 mt-1 block">16 categorías técnicas</span>
        </div>

        {/* Completed Progress */}
        <div className="p-4 rounded-2xl bg-[#09160f] border border-emerald-900/40">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] uppercase font-bold text-gray-400">Completados</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400">{completedCount}</div>
          <div className="w-full bg-[#051009] rounded-full h-1.5 mt-2 overflow-hidden border border-emerald-950">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.max(completionPercentage, 2)}%` }}
            />
          </div>
          <span className="text-[10px] text-gray-400 mt-1 block">{completionPercentage}% del catálogo</span>
        </div>

        {/* Favorites */}
        <div
          onClick={() => setActiveTab('favoritos')}
          className="p-4 rounded-2xl bg-[#09160f] border border-emerald-900/40 hover:border-red-900/60 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] uppercase font-bold text-gray-400">Favoritos</span>
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">{favoritesCount}</div>
          <span className="text-[10px] text-gray-400 mt-1 block">Guardados para tus sesiones</span>
        </div>

        {/* Bonuses & Tools */}
        <div
          onClick={() => setActiveTab('bonos')}
          className="p-4 rounded-2xl bg-[#09160f] border border-emerald-900/40 hover:border-amber-700/60 transition cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] uppercase font-bold text-gray-400">Bônus & Fichas</span>
            <Gift className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-400">10 + 5</div>
          <span className="text-[10px] text-gray-400 mt-1 block">Manuales y plantillas pro</span>
        </div>
      </div>

      {/* Featured Exercise of the Day */}
      <div className="bg-[#09170f] rounded-2xl border border-emerald-800/40 p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Flame className="w-4 h-4" />
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Ejercicio Destacado del Día
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              Pizarra Ilustrada
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              {featuredExercise.id}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Tactical Pitch Thumbnail */}
          <div className="lg:col-span-4 w-full">
            <PitchThumbnail
              diagram={getExercisePitchDiagram(featuredExercise)}
              className="w-full shadow-lg border border-emerald-700/50"
            />
          </div>

          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                {featuredExercise.category}
              </span>
              <span className="text-gray-400">• {featuredExercise.subcategory}</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white">
              {featuredExercise.name}
            </h4>

            <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
              {featuredExercise.objetivoPrincipal}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
              <span>⏱️ {featuredExercise.duracion}</span>
              <span>👥 {featuredExercise.jugadoresLabel} jugadores</span>
              <span>📍 {featuredExercise.espacio}</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              type="button"
              onClick={() => onSelectExercise(featuredExercise)}
              className="w-full lg:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
            >
              <span>Ver Ficha Completa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 16 Categories Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Las 16 Categorías de Ejercicios</span>
          </h3>
          <button
            onClick={() => setActiveTab('ejercicios')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            Ver todos los ejercicios →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                onSelectCategory(cat.id);
                setActiveTab('ejercicios');
              }}
              className="p-3 sm:p-3.5 rounded-xl bg-[#09160f] border border-emerald-900/40 hover:border-emerald-500/50 hover:bg-[#0c1f14] transition text-left group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-emerald-400 font-semibold group-hover:text-emerald-300">
                  {cat.id}
                </span>
                <span className="text-[10px] font-bold text-gray-400 bg-[#051009] px-1.5 py-0.5 rounded border border-emerald-950">
                  {cat.count}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                {cat.name.split('.')[1]?.trim() || cat.name}
              </h4>
            </button>
          ))}
        </div>
      </div>

      {/* PWA Promotion Card */}
      <div className="bg-[#0b1c12] p-5 sm:p-6 rounded-2xl border border-emerald-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-white">Instala FÚTBOL+ en tu Celular o Tablet</h4>
          <p className="text-xs text-gray-300 max-w-lg">
            Accede inmediatamente desde el campo de entrenamiento, incluso sin señal de internet, guardando tus favoritos y notas localmente.
          </p>
        </div>
        <PWAInstallButton />
      </div>
    </div>
  );
};
