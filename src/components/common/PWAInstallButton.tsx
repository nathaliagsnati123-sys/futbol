import React, { useState } from 'react';
import { Download, Smartphone, X, Check, Share } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface Props {
  className?: string;
  variant?: 'primary' | 'minimal' | 'banner';
}

export const PWAInstallButton: React.FC<Props> = ({ className = '', variant = 'primary' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 4000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // General browser instructions modal
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      {variant === 'banner' ? (
        <div className={`bg-gradient-to-r from-[#0a2e1c] via-[#0f4429] to-[#0a2e1c] border border-emerald-600/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg shadow-black/40 ${className}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                Instalar Fútbol+ en tu dispositivo
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wider">PWA</span>
              </h4>
              <p className="text-xs text-gray-300">Acceso rápido sin conexión, pantalla completa y experiencia de app nativa.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInstallClick}
            className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-black font-semibold text-xs rounded-lg shadow-md transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            Instalar Aplicación
          </button>
        </div>
      ) : variant === 'minimal' ? (
        <button
          type="button"
          onClick={handleInstallClick}
          title="Instalar como app en tu pantalla de inicio"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors ${className}`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Instalar App</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleInstallClick}
          className={`flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-3.5 py-1.5 text-xs font-bold text-black shadow-sm transition active:scale-95 ${className}`}
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Instalar App</span>
        </button>
      )}

      {/* iOS / General installation guide modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-2xl bg-[#111c15] border border-emerald-600/30 p-6 shadow-2xl text-white">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 p-2 shadow-inner border border-emerald-400/30 flex items-center justify-center">
                <span className="text-xl font-black text-white">⚽+</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Instalar Fútbol+</h3>
                <p className="text-xs text-emerald-400">Instalación rápida en tu pantalla de inicio</p>
              </div>
            </div>

            {isIOS ? (
              <div className="space-y-3.5 my-4 text-xs text-gray-200 bg-[#0c1610] p-4 rounded-xl border border-emerald-900/50">
                <p className="font-semibold text-emerald-300">Sigue estos sencillos pasos en Safari (iPhone / iPad):</p>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[11px]">1</span>
                  <p>Toca el botón <strong>Compartir</strong> <Share className="w-3.5 h-3.5 inline mx-1 text-emerald-400" /> en la barra inferior de Safari.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[11px]">2</span>
                  <p>Desplázate hacia abajo y selecciona <strong>"Añadir a la pantalla de inicio"</strong>.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[11px]">3</span>
                  <p>Pulsa <strong>"Añadir"</strong> en la esquina superior derecha. ¡Listo!</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3.5 my-4 text-xs text-gray-200 bg-[#0c1610] p-4 rounded-xl border border-emerald-900/50">
                <p className="font-semibold text-emerald-300">En Chrome, Edge o navegadores móviles:</p>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[11px]">1</span>
                  <p>Abre el menú de opciones del navegador (los <strong>tres puntos ⋮</strong> en la esquina superior).</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[11px]">2</span>
                  <p>Selecciona <strong>"Instalar aplicación"</strong> o <strong>"Añadir a pantalla principal"</strong>.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[11px]">3</span>
                  <p>Confirma para disfrutar de la biblioteca con acceso rápido y sin barras del navegador.</p>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-2.5 text-xs font-bold text-black hover:from-emerald-400 hover:to-green-500 transition shadow-lg active:scale-98"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {showSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 text-black px-4 py-2.5 rounded-xl font-semibold text-xs shadow-xl animate-slideUp">
          <Check className="w-4 h-4 stroke-[3]" />
          ¡Fútbol+ instalado correctamente!
        </div>
      )}
    </>
  );
};
