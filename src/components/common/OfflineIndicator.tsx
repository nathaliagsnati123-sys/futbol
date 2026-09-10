import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <aside
      aria-label="Estado de conexión"
      className="fixed bottom-20 md:bottom-6 left-4 z-50 flex items-center gap-2 rounded-xl bg-emerald-950/90 border border-emerald-500/50 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-2xl backdrop-blur-md"
    >
      <WifiOff className="h-4 w-4 text-emerald-400 animate-pulse" />
      <span>Modo sin conexión activo — Tus ejercicios y fichas locales están disponibles.</span>
    </aside>
  );
};
