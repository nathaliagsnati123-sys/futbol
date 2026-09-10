import React, { useState } from 'react';
import { Search, Filter, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { FilterState } from '../../types';
import { CATEGORIES_LIST } from '../../data/exercises';

interface Props {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalMatches: number;
  totalExercises: number;
}

const OBJECTIVES = [
  'Técnica',
  'Pase',
  'Recepción',
  'Regate',
  'Finalización',
  'Ataque',
  'Defensa',
  'Táctica',
  'Transiciones',
  'Velocidad',
  'Agilidad',
  'Preparación Física',
  'Porteros',
];

const AGES = [
  '6–8 años',
  '9–11 años',
  '12–14 años',
  '15–17 años',
  'Adultos',
  'Todas las edades',
];

const LEVELS = ['Principiante', 'Intermedio', 'Avanzado'];
const PLAYERS = ['1', '2', '3–5', '6–10', '11–15', '16+'];
const DURATIONS = ['10 min', '15 min', '20 min', '25 min', '30 min'];
const INTENSITIES = ['Baja', 'Media', 'Alta'];
const SPACES = ['Pequeño', 'Medio', 'Grande'];

export const ExerciseFilters: React.FC<Props> = ({
  filters,
  setFilters,
  totalMatches,
  totalExercises,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasActiveFilters =
    Boolean(filters.searchQuery) ||
    Boolean(filters.category) ||
    Boolean(filters.objective) ||
    Boolean(filters.age) ||
    Boolean(filters.level) ||
    Boolean(filters.players) ||
    Boolean(filters.duration) ||
    Boolean(filters.intensity) ||
    Boolean(filters.space);

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      category: '',
      objective: '',
      age: '',
      level: '',
      players: '',
      duration: '',
      intensity: '',
      space: '',
    });
  };

  return (
    <div className="space-y-3 bg-[#0a1710] p-4 sm:p-5 rounded-2xl border border-emerald-900/50 shadow-lg">
      {/* Top Search Bar & Filter Toggle */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            placeholder="Buscar por nombre, objetivo, táctica, tags (ej: rondo, desmarque, 1v1)..."
            className="w-full pl-10 pr-10 py-2.5 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition ${
              showAdvanced || hasActiveFilters
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-[#06110a] text-gray-300 border-emerald-900/60 hover:border-emerald-700'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Filtros avanzados</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              title="Restablecer todos los filtros"
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-red-950/40 text-red-400 border border-red-900/50 hover:bg-red-900/40 text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Limpiar</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Slider */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin pt-1">
        <button
          type="button"
          onClick={() => setFilters((prev) => ({ ...prev, category: '' }))}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
            !filters.category
              ? 'bg-emerald-500 text-black shadow-sm'
              : 'bg-[#06110a] text-gray-300 hover:text-white border border-emerald-950 hover:border-emerald-800'
          }`}
        >
          Todas las Categorías (1.000)
        </button>

        {CATEGORIES_LIST.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                category: prev.category === cat.id ? '' : cat.id,
              }))
            }
            className={`shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
              filters.category === cat.id
                ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                : 'bg-[#06110a] text-gray-300 hover:text-white border border-emerald-950 hover:border-emerald-800'
            }`}
          >
            {cat.name} <span className="opacity-60 text-[10px]">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Advanced Collapsible Filter Panel */}
      {showAdvanced && (
        <div className="pt-3 border-t border-emerald-900/40 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-xs animate-fadeIn">
          {/* Objetivo */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Objetivo</label>
            <select
              value={filters.objective}
              onChange={(e) => setFilters((prev) => ({ ...prev, objective: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Cualquier objetivo</option>
              {OBJECTIVES.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>
          </div>

          {/* Edad */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Edad</label>
            <select
              value={filters.age}
              onChange={(e) => setFilters((prev) => ({ ...prev, age: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Todas las edades</option>
              {AGES.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Nivel */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Nivel</label>
            <select
              value={filters.level}
              onChange={(e) => setFilters((prev) => ({ ...prev, level: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Todos los niveles</option>
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          {/* Jugadores */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Jugadores</label>
            <select
              value={filters.players}
              onChange={(e) => setFilters((prev) => ({ ...prev, players: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Cualquier cantidad</option>
              {PLAYERS.map((p) => (
                <option key={p} value={p}>
                  {p} jugadores
                </option>
              ))}
            </select>
          </div>

          {/* Duración */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Duración</label>
            <select
              value={filters.duration}
              onChange={(e) => setFilters((prev) => ({ ...prev, duration: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Cualquier duración</option>
              {DURATIONS.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>

          {/* Intensidad */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Intensidad</label>
            <select
              value={filters.intensity}
              onChange={(e) => setFilters((prev) => ({ ...prev, intensity: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Cualquier intensidad</option>
              {INTENSITIES.map((int) => (
                <option key={int} value={int}>
                  {int}
                </option>
              ))}
            </select>
          </div>

          {/* Espacio */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 block">Espacio</label>
            <select
              value={filters.space}
              onChange={(e) => setFilters((prev) => ({ ...prev, space: e.target.value }))}
              className="w-full py-1.5 px-2 bg-[#06110a] border border-emerald-900/60 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="">Cualquier espacio</option>
              {SPACES.map((sp) => (
                <option key={sp} value={sp}>
                  {sp}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Results summary counter */}
      <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
        <span>
          Mostrando <strong className="text-emerald-400 font-bold">{totalMatches}</strong> de {totalExercises} ejercicios
        </span>
        {hasActiveFilters && (
          <span className="text-[11px] text-emerald-400/80">Filtros activos aplicados</span>
        )}
      </div>
    </div>
  );
};
