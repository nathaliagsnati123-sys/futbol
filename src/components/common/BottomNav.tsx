import React from 'react';
import { Home, BookOpen, Heart, Dumbbell, Activity, Bot } from 'lucide-react';
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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08140d]/95 backdrop-blur-lg border-t border-emerald-900/60 safe-area-bottom print:hidden">
      <div className="grid grid-cols-6 h-15 items-center">
        <button
          type="button"
          onClick={() => setActiveTab('inicio')}
          className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
            activeTab === 'inicio' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Inicio</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ejercicios')}
          className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
            activeTab === 'ejercicios' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">1.000 Ej.</span>
        </button>

        {/* FUT IA Highlighted Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('fut-ia')}
          className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
            activeTab === 'fut-ia' ? 'text-emerald-300 font-extrabold' : 'text-emerald-400/80 hover:text-white'
          }`}
        >
          <div className={`p-1 rounded-lg ${activeTab === 'fut-ia' ? 'bg-emerald-500 text-black shadow-sm' : 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'}`}>
            <Bot className="w-3.5 h-3.5 stroke-[2.2]" />
          </div>
          <span className="text-[9px] tracking-tight font-black">FUT IA</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('preparacion-fisica')}
          className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
            activeTab === 'preparacion-fisica' ? 'text-amber-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Activity className="w-4 h-4 text-amber-400" />
          <span className="text-[9px] tracking-tight">Física</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('favoritos')}
          className={`relative flex flex-col items-center justify-center gap-0.5 transition-colors ${
            activeTab === 'favoritos' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
          <span className="text-[9px] tracking-tight">Favs</span>
          {favoritesCount > 0 && (
            <span className="absolute top-1 right-1.5 min-w-3.5 h-3.5 bg-red-500 text-white rounded-full text-[8px] font-bold flex items-center justify-center px-0.5">
              {favoritesCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('entrenamientos')}
          className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
            activeTab === 'entrenamientos' ? 'text-emerald-400 font-bold' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Dumbbell className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Sesiones</span>
        </button>
      </div>
    </nav>
  );
};
