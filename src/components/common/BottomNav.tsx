import React from 'react';
import { Home, BookOpen, Heart, Dumbbell, Gift } from 'lucide-react';
import { ActiveTab } from './Header';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  favoritesCount: number;
}

export const BottomNav: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08140d]/95 backdrop-blur-lg border-t border-emerald-900/60 safe-area-bottom">
      <div className="grid grid-cols-5 h-15">
        <button
          type="button"
          onClick={() => setActiveTab('inicio')}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            activeTab === 'inicio' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] tracking-tight">Inicio</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ejercicios')}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            activeTab === 'ejercicios' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-[10px] tracking-tight">Ejercicios</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('favoritos')}
          className={`relative flex flex-col items-center justify-center gap-1 transition-colors ${
            activeTab === 'favoritos' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
          <span className="text-[10px] tracking-tight">Favoritos</span>
          {favoritesCount > 0 && (
            <span className="absolute top-1 right-3.5 min-w-4 h-4 bg-red-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center px-1">
              {favoritesCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('entrenamientos')}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            activeTab === 'entrenamientos' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Dumbbell className="w-4 h-4" />
          <span className="text-[10px] tracking-tight">Sesiones</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('bonos')}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            activeTab === 'bonos' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Gift className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] tracking-tight">Bonos</span>
        </button>
      </div>
    </nav>
  );
};
