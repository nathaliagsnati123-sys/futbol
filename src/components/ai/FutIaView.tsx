import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Sparkles,
  Bot,
  Send,
  BookOpen,
  Copy,
  Check,
  Volume2,
  VolumeX,
  RotateCcw,
  Search,
  ChevronRight,
  Flame,
  Award,
  HelpCircle,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { allExercises } from '../../data/exercises';
import { Exercise } from '../../types';
import { askFutIa, ChatMessage } from '../../services/futIaService';

interface Props {
  initialExercise?: Exercise | null;
  onSelectExercise?: (exercise: Exercise) => void;
}

export const FutIaView: React.FC<Props> = ({
  initialExercise = null,
  onSelectExercise,
}) => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(initialExercise);
  const [exerciseSearch, setExerciseSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'assistant',
      content: `### 🤖 ¡Hola, Entrenador! Soy FUT IA

Tu asistente de inteligencia artificial especializada en fútbol profesional y fútbol base (UEFA PRO).

**¿Cómo puedo ayudarte en tu sesión?**
1. **Selecciona cualquiera de los 1.000 ejercicios** arriba para generar el **paso a paso completo** (organización del espacio, posicionamiento inicial, dinámica con balón, reglas de provocación, consignas del míster y corrección de errores).
2. O **haz cualquier consulta táctica, técnica o física** en el campo de texto inferior.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // If initialExercise changed externally, set it
  useEffect(() => {
    if (initialExercise) {
      setSelectedExercise(initialExercise);
    }
  }, [initialExercise]);

  // Filter exercises for quick selector
  const filteredExercises = useMemo(() => {
    if (!exerciseSearch.trim()) return allExercises.slice(0, 20);
    const q = exerciseSearch.toLowerCase();
    return allExercises
      .filter((ex) => ex.id.toLowerCase().includes(q) || ex.name.toLowerCase().includes(q) || ex.category.toLowerCase().includes(q))
      .slice(0, 25);
  }, [exerciseSearch]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputPrompt;
    if (!text.trim() && !selectedExercise) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text || `Explica el paso a paso completo del ejercicio ${selectedExercise?.name} (${selectedExercise?.id}).`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      exerciseId: selectedExercise?.id,
      exerciseName: selectedExercise?.name,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const responseText = await askFutIa(text, selectedExercise, messages);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        exerciseId: selectedExercise?.id,
        exerciseName: selectedExercise?.name,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error in FUT IA chat:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Disculpa, ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const cleanText = text
      .replace(/#{1,6}\s?/g, '')
      .replace(/\*\*/g, '')
      .replace(/[-*•]\s/g, '')
      .replace(/`{1,3}/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 1.05;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const quickPrompts = [
    '📋 Paso a Paso Completo de Ejecución',
    '👶 Cómo Adaptar para Fútbol Base (Sub-11/Sub-13)',
    '⚡ Cómo Aumentar la Intensidad y Dificultad',
    '🗣️ Consignas del Entrenador (Qué Decir en el Campo)',
    '⚠️ Errores Más Frecuentes y Cómo Corregirlos',
    '🏆 Transferencia Directa al Partido Real',
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12 animate-fadeIn">
      {/* FUT IA Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2e1b] via-[#081f12] to-[#04120a] border border-emerald-500/50 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-400 p-0.5 shadow-lg shadow-emerald-950 flex items-center justify-center text-black font-black">
                <Bot className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
                Asistente Táctico Oficial • UEFA PRO
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              FUT IA <span className="text-emerald-400 font-extrabold text-xl sm:text-2xl">• Paso a Paso</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Explicación detallada de cualquier ejercicio de fútbol, progresiones prácticas, correcciones biomecánicas y directrices de campo para el entrenador.
            </p>
          </div>

          <div className="flex items-center gap-2 print:hidden shrink-0">
            <button
              type="button"
              onClick={() => {
                setMessages([
                  {
                    id: 'welcome',
                    role: 'assistant',
                    content: 'Conversación reiniciada. ¡Selecciona un ejercicio o haz una consulta táctica!',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  },
                ]);
              }}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#06140b] hover:bg-[#0c2616] text-gray-400 hover:text-gray-200 border border-emerald-950 text-xs font-semibold transition"
              title="Nueva Conversación"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Limpiar Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Exercise Selector Bar */}
      <div className="bg-[#09180f] rounded-2xl border border-emerald-900/60 p-4 sm:p-5 shadow-lg space-y-3 print:hidden">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Ejercicio Seleccionado para que FUT IA lo Explique:</span>
          </label>

          {selectedExercise && (
            <button
              type="button"
              onClick={() => setSelectedExercise(null)}
              className="text-[11px] text-gray-400 hover:text-red-400 transition"
            >
              ✕ Quitar selección de ejercicio
            </button>
          )}
        </div>

        {/* Selected Card or Dropdown Selector */}
        {selectedExercise ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#06120b] border border-emerald-500/40">
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-mono text-xs font-black text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800 shrink-0">
                {selectedExercise.id}
              </span>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {selectedExercise.name}
                </h4>
                <p className="text-[11px] text-gray-400 truncate">
                  {selectedExercise.category} • {selectedExercise.duracion} • {selectedExercise.jugadoresLabel} jug.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {onSelectExercise && (
                <button
                  type="button"
                  onClick={() => onSelectExercise(selectedExercise)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 hover:text-white border border-emerald-800 text-xs font-semibold transition"
                >
                  Ver Ficha Completa
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 py-1.5 rounded-lg bg-[#0a1f12] text-gray-300 hover:text-white border border-emerald-900 text-xs font-semibold transition"
              >
                Cambiar Ejercicio
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
              <input
                type="text"
                value={exerciseSearch}
                onFocus={() => setIsDropdownOpen(true)}
                onChange={(e) => {
                  setExerciseSearch(e.target.value);
                  setIsDropdownOpen(true);
                }}
                placeholder="Buscar por ID (ej: EJC-005), nombre del ejercicio o categoría..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#06120b] border border-emerald-900/60 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-30 mt-1 max-h-60 overflow-y-auto rounded-xl bg-[#07150c] border border-emerald-800 shadow-2xl p-1.5 space-y-1">
                {filteredExercises.map((ex) => (
                  <div
                    key={ex.id}
                    onClick={() => {
                      setSelectedExercise(ex);
                      setIsDropdownOpen(false);
                      setExerciseSearch('');
                    }}
                    className="p-2 rounded-lg hover:bg-emerald-950/70 cursor-pointer flex items-center justify-between text-xs text-gray-200 transition"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800 shrink-0">
                        {ex.id}
                      </span>
                      <span className="font-semibold truncate">{ex.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0 ml-2">{ex.category.split('.')[1] || ex.category}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Quick Action Prompt Chips */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Sugerencias Rápidas para que FUT IA Explique:</span>
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(qp)}
                className="px-3 py-1.5 rounded-xl bg-[#06120b] hover:bg-[#0c2415] text-gray-300 hover:text-white border border-emerald-900/60 text-xs font-medium whitespace-nowrap transition"
              >
                {qp}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="space-y-4">
        {messages.map((message) => {
          const isAssistant = message.role === 'assistant';

          return (
            <div
              key={message.id}
              className={`rounded-2xl p-5 sm:p-6 space-y-3 transition-all ${
                isAssistant
                  ? 'bg-[#09180f] border border-emerald-900/50 shadow-xl print:bg-white print:border-gray-300 print:text-black print-break-inside-avoid'
                  : 'bg-[#0a2416] border border-emerald-600/40 ml-auto max-w-2xl text-white shadow-md'
              }`}
            >
              {/* Message Header */}
              <div className="flex items-center justify-between border-b border-emerald-950 pb-2.5 print:border-gray-200">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black ${
                      isAssistant
                        ? 'bg-emerald-500 text-black shadow'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    }`}
                  >
                    {isAssistant ? <Bot className="w-4 h-4" /> : 'TÚ'}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white print:text-black">
                      {isAssistant ? 'FUT IA • Especialista en Entrenamiento' : 'Tú (Entrenador)'}
                    </span>
                    {message.exerciseName && (
                      <span className="text-[10px] text-emerald-400 block font-mono">
                        Sobre: {message.exerciseId} - {message.exerciseName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 print:hidden">
                  <span className="text-[10px] text-gray-500 font-mono">{message.timestamp}</span>

                  {isAssistant && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleSpeak(message.content)}
                        className={`p-1.5 rounded-lg border text-xs transition ${
                          isSpeaking
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : 'bg-[#06110a] text-gray-400 hover:text-white border-emerald-950'
                        }`}
                        title={isSpeaking ? 'Detener lectura en voz alta' : 'Escuchar explicación en voz alta'}
                      >
                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyText(message.id, message.content)}
                        className="p-1.5 rounded-lg bg-[#06110a] text-gray-400 hover:text-white border border-emerald-950 text-xs transition"
                        title="Copiar explicación"
                      >
                        {copiedId === message.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Message Body with rich formatting */}
              <div className="text-xs sm:text-sm text-gray-200 print:text-black leading-relaxed whitespace-pre-wrap font-sans space-y-2">
                {message.content}
              </div>
            </div>
          );
        })}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="p-5 rounded-2xl bg-[#09180f] border border-emerald-900/50 flex items-center gap-3 text-xs text-emerald-300 animate-pulse">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 animate-spin" />
            </div>
            <div>
              <span className="font-bold block text-white">FUT IA está analizando la biomecánica y táctica...</span>
              <span className="text-[11px] text-gray-400">Estructurando el paso a paso completo para tu sesión de entrenamiento.</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Floating Sticky Input Bar at Bottom */}
      <div className="sticky bottom-20 md:bottom-6 z-30 print:hidden">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center bg-[#07170e]/95 backdrop-blur-md rounded-2xl border border-emerald-600/50 p-2 shadow-2xl"
        >
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder={
              selectedExercise
                ? `Pregunta a FUT IA sobre ${selectedExercise.name} (ej: ¿cómo adaptar para espacio reducido?)...`
                : 'Pide a FUT IA que explique el paso a paso de cualquier ejercicio de fútbol...'
            }
            className="flex-1 bg-transparent px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={isLoading || (!inputPrompt.trim() && !selectedExercise)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black shadow-lg transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none shrink-0"
          >
            <span>Enviar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
