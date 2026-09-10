import React from 'react';
import { Shield, BookOpen, Heart, Layers, Gift, FileText, Dumbbell } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

export type ActiveTab = 'inicio' | 'ejercicios' | 'favoritos' | 'entrenamientos' | 'bonos' | 'fichas';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  favoritesCount: number;
  completedCount: number;
}

export const Header: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  completedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-900/50 bg-[#09150e]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2">
          {/* Logo & Slogan */}
          <button
            type="button"
            onClick={() => setActiveTab('inicio')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-900 p-0.5 shadow-md shadow-emerald-950/60 border border-emerald-400/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-xl font-black text-white tracking-tighter">⚽+</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  FÚTBOL<span className="text-emerald-400 font-black">+</span>
                </span>
                <span className="hidden xl:inline-block bg-emerald-500/15 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <span className="hidden sm:inline-block text-[11px] text-gray-400 font-medium truncate max-w-[280px] lg:max-w-sm">
                1.000 ejercicios profesionales
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#06120b] p-1.5 rounded-xl border border-emerald-900/40">
            <button
              onClick={() => setActiveTab('inicio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'inicio'
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/10'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>

            <button
              onClick={() => setActiveTab('ejercicios')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ejercicios'
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1.000 Ejercicios</span>
            </button>

            <button
              onClick={() => setActiveTab('favoritos')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'favoritos'
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/10'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${favoritesCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              <span>Favoritos</span>
              {favoritesCount > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'favoritos' ? 'bg-black text-emerald-400' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('entrenamientos')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'entrenamientos'
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/10'
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Entrenamientos</span>
            </button>

            <button
              onClick={() => setActiveTab('bonos')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'bonos'
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/10'
              }`}
            >
              <Gift className="w-3.5 h-3.5 text-amber-400" />
              <span>10 Bonos</span>
            </button>

            <button
              onClick={() => setActiveTab('fichas')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'fichas'
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-emerald-500/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Fichas</span>
            </button>
          </nav>

          {/* Right actions: Install button */}
          <div className="flex items-center gap-2">
            <PWAInstallButton variant="minimal" />
          </div>
        </div>
      </div>
    </header>
  );
};
