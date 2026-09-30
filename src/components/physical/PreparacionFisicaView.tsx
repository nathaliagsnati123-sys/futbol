import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Dumbbell,
  Zap,
  Activity,
  Shield,
  Footprints,
  SlidersHorizontal,
  Calculator,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Printer,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  BookOpen,
  Clock,
  Layers,
  Info,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Trophy,
  Gauge,
} from 'lucide-react';
import {
  MODULOS_FISICOS,
  PROTOCOLOS_FISICOS,
  MORFOCICLO_PATRON,
  PhysicalProtocol,
  MorfocicloDay,
} from '../../data/physicalPreparationData';
import { allExercises } from '../../data/exercises';
import { Exercise } from '../../types';
import { ExerciseCard } from '../exercises/ExerciseCard';

interface Props {
  onSelectExercise?: (exercise: Exercise) => void;
  onToggleFavorite?: (id: string) => void;
  onToggleCompleted?: (id: string) => void;
  favorites?: string[];
  completed?: string[];
  onAddToTraining?: (exercise: Exercise) => void;
}

type PhysicalTab =
  | 'todos'
  | 'fuerza'
  | 'velocidad'
  | 'resistencia'
  | 'prevencion'
  | 'circuitos'
  | 'cronometro'
  | 'test-campo'
  | 'morfociclo'
  | 'calculadora'
  | 'catalogo';

export const PreparacionFisicaView: React.FC<Props> = ({
  onSelectExercise,
  onToggleFavorite,
  onToggleCompleted,
  favorites = [],
  completed = [],
  onAddToTraining,
}) => {
  const [activeTab, setActiveTab] = useState<PhysicalTab>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProtocolId, setExpandedProtocolId] = useState<string | null>(null);

  // Calculator State
  const [calcDuration, setCalcDuration] = useState<number>(75);
  const [calcRpe, setCalcRpe] = useState<number>(7);
  const [calcAthletes, setCalcAthletes] = useState<number>(16);

  // Interval Timer State (HIIT / RSA / Tabata)
  const [timerWorkSec, setTimerWorkSec] = useState<number>(15);
  const [timerRestSec, setTimerRestSec] = useState<number>(15);
  const [timerTotalRounds, setTimerTotalRounds] = useState<number>(8);
  const [timerCurrentRound, setTimerCurrentRound] = useState<number>(1);
  const [timerPhase, setTimerPhase] = useState<'idle' | 'prep' | 'work' | 'rest' | 'finished'>('idle');
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(15);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const [timerSoundEnabled, setTimerSoundEnabled] = useState<boolean>(true);
  const timerIntervalRef = useRef<any>(null);

  // Field Tests State (Yo-Yo & Sprint)
  const [yoyoDistance, setYoyoDistance] = useState<number>(1480);
  const [sprint10m, setSprint10m] = useState<number>(1.74);
  const [sprint30m, setSprint30m] = useState<number>(4.08);
  const [illinoisTime, setIllinoisTime] = useState<number>(15.8);

  // Synthesized Web Audio Beeper for field timer
  const playBeep = useCallback((freq = 880, duration = 0.15) => {
    if (!timerSoundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext not supported
    }
  }, [timerSoundEnabled]);

  // Timer Tick Engine
  useEffect(() => {
    if (!timerIsRunning) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    timerIntervalRef.current = setInterval(() => {
      setTimerSecondsLeft((prev) => {
        // Countdown sound for last 3 seconds
        if (prev <= 4 && prev > 1) {
          playBeep(660, 0.1);
        }

        if (prev > 1) {
          return prev - 1;
        }

        // When reaching 0, transition phases
        if (timerPhase === 'prep') {
          playBeep(1320, 0.3); // High beep: START WORK!
          setTimerPhase('work');
          return timerWorkSec;
        }

        if (timerPhase === 'work') {
          if (timerCurrentRound >= timerTotalRounds) {
            // Finished complete routine
            playBeep(1760, 0.5);
            setTimerPhase('finished');
            setTimerIsRunning(false);
            return 0;
          } else {
            // Go to rest
            playBeep(440, 0.25); // Lower beep: REST
            setTimerPhase('rest');
            return timerRestSec;
          }
        }

        if (timerPhase === 'rest') {
          // Advance round and start work
          playBeep(1320, 0.3);
          setTimerCurrentRound((r) => r + 1);
          setTimerPhase('work');
          return timerWorkSec;
        }

        return 0;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [timerIsRunning, timerPhase, timerCurrentRound, timerTotalRounds, timerWorkSec, timerRestSec, playBeep]);

  const handleStartTimer = () => {
    if (timerPhase === 'idle' || timerPhase === 'finished') {
      setTimerPhase('prep');
      setTimerSecondsLeft(3); // 3 second prep countdown
      setTimerCurrentRound(1);
      playBeep(660, 0.1);
    }
    setTimerIsRunning(true);
  };

  const handlePauseTimer = () => {
    setTimerIsRunning(false);
  };

  const handleResetTimer = () => {
    setTimerIsRunning(false);
    setTimerPhase('idle');
    setTimerCurrentRound(1);
    setTimerSecondsLeft(timerWorkSec);
  };

  const applyTimerPreset = (work: number, rest: number, rounds: number) => {
    setTimerIsRunning(false);
    setTimerWorkSec(work);
    setTimerRestSec(rest);
    setTimerTotalRounds(rounds);
    setTimerCurrentRound(1);
    setTimerPhase('idle');
    setTimerSecondsLeft(work);
  };

  // Filter 55 physical preparation exercises from the 1000 database
  const catalogPhysicalExercises = useMemo(() => {
    return allExercises.filter(
      (ex) =>
        ex.category === '11. Preparación Física' ||
        ex.category.toLowerCase().includes('preparación física')
    );
  }, []);

  // Filter protocols
  const filteredProtocols = useMemo(() => {
    return PROTOCOLOS_FISICOS.filter((p) => {
      // Tab filter
      if (activeTab === 'fuerza' && p.categoria !== 'Fuerza & Core') return false;
      if (activeTab === 'velocidad' && p.categoria !== 'Velocidad & RSA') return false;
      if (activeTab === 'resistencia' && p.categoria !== 'Resistencia & HIIT') return false;
      if (activeTab === 'prevencion' && p.categoria !== 'Prevención & FIFA 11+') return false;
      if (activeTab === 'circuitos' && p.categoria !== 'Circuitos Integrados') return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.nombre.toLowerCase().includes(q);
        const matchesCat = p.categoria.toLowerCase().includes(q);
        const matchesObj = p.objetivoFisiologico.toLowerCase().includes(q);
        const matchesTransfer = p.transferenciaJuego.toLowerCase().includes(q);
        return matchesName || matchesCat || matchesObj || matchesTransfer;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  // Calculated load
  const sessionLoad = calcDuration * calcRpe;
  const getLoadBadge = (load: number) => {
    if (load < 300) {
      return {
        label: 'Carga Baja / Regenerativa',
        color: 'text-emerald-400 bg-emerald-950 border-emerald-800',
        desc: 'Recuperación activa y bajo impacto neuromuscular. Ideal para MD+1.',
      };
    }
    if (load <= 550) {
      return {
        label: 'Carga Óptima de Mantenimiento',
        color: 'text-blue-400 bg-blue-950 border-blue-800',
        desc: 'Desarrollo equilibrado sin sobrecarga acumulativa. Ideal para MD-2 o MD-1.',
      };
    }
    if (load <= 750) {
      return {
        label: 'Carga Alta de Desarrollo',
        color: 'text-amber-400 bg-amber-950 border-amber-800',
        desc: 'Pico de exigencia física semanal. Típica de MD-4 (Fuerza) o MD-3 (Resistencia).',
      };
    }
    return {
      label: 'Carga Crítica / Alarma de Fatiga',
      color: 'text-red-400 bg-red-950 border-red-800',
      desc: 'Carga extenuante. Requiere protocolo riguroso de hidroterapia, nutrición y descanso > 48h.',
    };
  };

  const loadInfo = getLoadBadge(sessionLoad);

  const toggleExpand = (id: string) => {
    setExpandedProtocolId(expandedProtocolId === id ? null : id);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2517] via-[#091a11] to-[#06120b] border border-emerald-600/40 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <Dumbbell className="w-3.5 h-3.5" />
                Módulo Metodológico de Élite
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                FÚTBOL+ Pro Performance
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Preparación Física Integral para Fútbol
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Protocolos de fuerza funcional, prevención de lesiones (FIFA 11+), resistencia
              intermitente (HIIT & RSA), circuitos con balón y planificación del Morfociclo Patrón
              desglosados paso a paso para el campo y el gimnasio.
            </p>

            <div className="flex items-center gap-3 pt-2 flex-wrap text-xs font-semibold text-gray-300">
              <div className="flex items-center gap-1.5 bg-[#07170e] px-3 py-1.5 rounded-xl border border-emerald-900/60">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>6 Módulos Fisiológicos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#07170e] px-3 py-1.5 rounded-xl border border-emerald-900/60">
                <Footprints className="w-4 h-4 text-amber-400" />
                <span>{PROTOCOLOS_FISICOS.length} Protocolos Paso a Paso</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#07170e] px-3 py-1.5 rounded-xl border border-emerald-900/60">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>{catalogPhysicalExercises.length} Ejercicios de Catálogo</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#07170e] px-3 py-1.5 rounded-xl border border-emerald-900/60">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Morfociclo Semanal</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 print:hidden">
            <button
              type="button"
              onClick={() => setActiveTab('calculadora')}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora de Cargas (sRPE)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('morfociclo')}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#091d12] hover:bg-[#0e2d1d] text-emerald-300 border border-emerald-600/50 font-bold text-xs sm:text-sm transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Morfociclo Patrón (MD-4 a MD+1)</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-gray-300 hover:text-white border border-emerald-900/60 bg-[#06120b] text-xs font-semibold transition"
              title="Imprimir guía de preparación física"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Imprimir Fichas Físicas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin border-b border-emerald-900/40 print:hidden">
        <button
          type="button"
          onClick={() => setActiveTab('todos')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'todos'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Todos los Protocolos</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('fuerza')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'fuerza'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
          <span>Fuerza & Core</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('velocidad')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'velocidad'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span>Velocidad & RSA</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('resistencia')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'resistencia'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>Resistencia & HIIT</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('prevencion')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'prevencion'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Shield className="w-3.5 h-3.5 text-red-400" />
          <span>Prevención & FIFA 11+</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('circuitos')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'circuitos'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Footprints className="w-3.5 h-3.5 text-emerald-400" />
          <span>Circuitos con Balón</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('cronometro')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'cronometro'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Timer className="w-3.5 h-3.5 text-amber-400" />
          <span>Cronómetro Intervalos (HIIT / RSA)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('test-campo')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'test-campo'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Trophy className="w-3.5 h-3.5 text-yellow-400" />
          <span>Test Físicos de Campo</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('morfociclo')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'morfociclo'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          <span>Morfociclo Semanal</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('calculadora')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'calculadora'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <Calculator className="w-3.5 h-3.5 text-amber-400" />
          <span>Calculadora RPE</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('catalogo')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'catalogo'
              ? 'bg-emerald-500 text-black shadow-md'
              : 'bg-[#08170f] text-gray-300 hover:bg-[#0d2618] hover:text-white border border-emerald-900/40'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span>Catálogo 55 Ejercicios</span>
        </button>
      </div>

      {/* TAB 1: PROTOCOLOS PASO A PASO (Cards Grid) */}
      {(activeTab === 'todos' ||
        activeTab === 'fuerza' ||
        activeTab === 'velocidad' ||
        activeTab === 'resistencia' ||
        activeTab === 'prevencion' ||
        activeTab === 'circuitos') && (
        <div className="space-y-6">
          {/* Quick Search inside protocols */}
          <div className="flex items-center justify-between gap-4 flex-wrap print:hidden">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por protocolo, ejercicio, objetivo o palabra clave..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#07150c] border border-emerald-900/60 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <span className="text-xs text-gray-400 font-medium">
              Mostrando <strong className="text-white">{filteredProtocols.length}</strong> protocolos
              con paso a paso completo
            </span>
          </div>

          {/* Protocols List */}
          <div className="space-y-4">
            {filteredProtocols.map((protocol) => {
              const isExpanded = expandedProtocolId === protocol.id;

              return (
                <div
                  key={protocol.id}
                  className="rounded-2xl bg-[#09180f] border border-emerald-900/50 hover:border-emerald-600/50 transition-all p-5 space-y-4 shadow-lg print:border-gray-300 print:bg-white print:text-black print-break-inside-avoid"
                >
                  {/* Protocol Card Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-950 pb-3 print:border-gray-300">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800 print:bg-gray-100 print:text-emerald-900">
                          {protocol.id}
                        </span>
                        <span className="text-xs font-bold text-amber-300 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-800/50">
                          {protocol.categoria}
                        </span>
                        <span className="text-xs text-gray-400">
                          • {protocol.moduloNombre}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-white print:text-black">
                        {protocol.nombre}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                      <span className="text-[11px] font-mono text-emerald-300 bg-[#06110a] px-2.5 py-1 rounded-lg border border-emerald-950 print:bg-gray-100 print:text-black">
                        ⏱️ {protocol.duracionEstimada}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
                          protocol.intensidad === 'Máxima'
                            ? 'bg-red-950 text-red-300 border-red-800'
                            : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                        }`}
                      >
                        ⚡ {protocol.intensidad} ({protocol.rpeObjetivo})
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleExpand(protocol.id)}
                        className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition print:hidden"
                      >
                        <span>{isExpanded ? 'Ver Menos' : 'Ver Paso a Paso'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Summary & Dosage Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="bg-[#06130b] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-300">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">
                        Dosificación Sugerida
                      </span>
                      <span className="font-semibold text-white print:text-black">
                        {protocol.seriesRepeticiones}
                      </span>
                      <span className="text-[10px] text-gray-400 block mt-0.5">
                        Pausa: {protocol.descanso}
                      </span>
                    </div>

                    <div className="bg-[#06130b] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-300">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">
                        Material & Organización
                      </span>
                      <p className="text-[11px] text-gray-300 leading-snug print:text-gray-800">
                        {protocol.materiales}
                      </p>
                    </div>

                    <div className="bg-[#06130b] p-3 rounded-xl border border-emerald-950 print:bg-gray-50 print:border-gray-300">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5 print:text-gray-600">
                        Objetivo Fisiológico
                      </span>
                      <p className="text-[11px] text-emerald-300 leading-snug print:text-emerald-900 font-medium">
                        {protocol.objetivoFisiologico}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Detailed Step-by-Step Breakdown */}
                  {(isExpanded || typeof window === 'undefined') && (
                    <div className="space-y-4 pt-3 border-t border-emerald-950 print:border-gray-300">
                      {/* Step-by-step Execution Steps */}
                      <div className="space-y-2">
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 print:text-emerald-950">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Secuencia de Ejecución Paso a Paso:</span>
                        </span>

                        <div className="space-y-1.5">
                          {protocol.pasoAPaso.map((paso, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 rounded-xl bg-[#06130b] border border-emerald-950 text-xs text-gray-200 print:bg-gray-50 print:border-gray-200 print:text-black"
                            >
                              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5 print:bg-emerald-100 print:text-emerald-950">
                                {idx + 1}
                              </span>
                              <p className="leading-relaxed">{paso}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Focus & Common Errors */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-[#08170f] border border-emerald-800/40 space-y-1.5 print:bg-emerald-50/40 print:border-emerald-200">
                          <span className="font-bold text-emerald-300 uppercase text-[10px] flex items-center gap-1 print:text-emerald-900">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            Foco Biomecánico & Clave Postural
                          </span>
                          <p className="text-gray-300 leading-relaxed print:text-gray-800">
                            {protocol.focoTecnico}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#180d0d] border border-red-900/40 space-y-1.5 print:bg-red-50/40 print:border-red-200">
                          <span className="font-bold text-red-300 uppercase text-[10px] flex items-center gap-1 print:text-red-900">
                            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                            Errores Frecuentes y Corrección
                          </span>
                          <div className="space-y-1 text-gray-300 print:text-gray-800">
                            {protocol.erroresFrecuentes.map((ef, i) => (
                              <div key={i} className="text-[11px]">
                                <span className="text-red-400 font-bold">✕ </span>
                                <span>{ef.error}</span>
                                <p className="text-emerald-300 pl-3.5 mt-0.5 print:text-emerald-800">
                                  ✓ {ef.correccion}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Match Transfer & Variations */}
                      <div className="p-3.5 rounded-xl bg-[#06120b] border border-emerald-950 space-y-2 text-xs print:bg-gray-50 print:border-gray-200">
                        <p className="text-gray-300 print:text-gray-800">
                          ⚽ <strong className="text-white print:text-black">Transferencia al partido:</strong>{' '}
                          {protocol.transferenciaJuego}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
                          <div>
                            <span className="text-green-400 font-bold block mb-0.5 print:text-green-800">
                              Variación Fácil (Regresión):
                            </span>
                            <span className="text-gray-400 print:text-gray-700">{protocol.variacionFacil}</span>
                          </div>
                          <div>
                            <span className="text-amber-400 font-bold block mb-0.5 print:text-amber-800">
                              Variación Difícil (Progresión):
                            </span>
                            <span className="text-gray-400 print:text-gray-700">{protocol.variacionDificil}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: MORFOCICLO PATRÓN (Weekly Planning) */}
      {activeTab === 'morfociclo' && (
        <div className="space-y-6">
          <div className="bg-[#091910] p-6 rounded-2xl border border-emerald-900/50 space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>Estructura del Morfociclo Patrón en el Fútbol Moderno</span>
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              La periodización táctica organiza las cargas de entrenamiento en función del día de
              partido (Match Day). Cada jornada tiene una especificidad fisiológica, metabólica y
              cognitiva bien definida para llegar al fin de semana con el 100% de disponibilidad.
            </p>
          </div>

          <div className="space-y-4">
            {MORFOCICLO_PATRON.map((diaItem, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#09180f] border border-emerald-900/40 space-y-3 hover:border-emerald-700/50 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-950 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-black text-amber-400 bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-800/50">
                      {diaItem.dia}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white">{diaItem.fase}</h4>
                      <p className="text-xs text-emerald-300 font-medium">{diaItem.concepto}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs flex-wrap">
                    <span className="bg-[#051109] px-2.5 py-1 rounded border border-emerald-950 text-gray-300">
                      ⏱️ {diaItem.duracion}
                    </span>
                    <span className="bg-[#051109] px-2.5 py-1 rounded border border-emerald-950 text-emerald-400 font-semibold">
                      ⚡ {diaItem.intensidad}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">{diaItem.descripcion}</p>

                {/* Steps */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Secuencia Paso a Paso Recomendada:
                  </span>
                  <div className="space-y-1">
                    {diaItem.pasoAPaso.map((st, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-300 p-2 bg-[#06120b] rounded-lg border border-emerald-950"
                      >
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#140b0b] border border-red-950/60 text-xs text-red-300/90 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>
                    <strong>Precaución metodológica:</strong> {diaItem.precauciones}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CALCULADORA DE CARGA sRPE */}
      {activeTab === 'calculadora' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls */}
            <div className="lg:col-span-7 bg-[#09180f] p-6 rounded-2xl border border-emerald-900/50 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  <span>Calculadora de Carga Interna de Sesión (sRPE)</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Método científico de Carl Foster para cuantificar la carga de entrenamiento:
                  <strong className="text-white"> Carga (UA) = RPE (0–10) × Duración (minutos)</strong>.
                </p>
              </div>

              {/* Slider 1: Duración */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-300 uppercase tracking-wide">
                    1. Duración de la sesión (minutos netos)
                  </span>
                  <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                    ⏱️ {calcDuration} minutos
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="5"
                  value={calcDuration}
                  onChange={(e) => setCalcDuration(Number(e.target.value))}
                  className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>20 min (Activación)</span>
                  <span>60 min</span>
                  <span>90 min (Sesión tipo)</span>
                  <span>120 min (Máximo)</span>
                </div>
              </div>

              {/* Slider 2: RPE Escala Foster */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-300 uppercase tracking-wide">
                    2. Percepción Subjetiva del Esfuerzo (RPE 0–10)
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800">
                    Nivel {calcRpe} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={calcRpe}
                  onChange={(e) => setCalcRpe(Number(e.target.value))}
                  className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="grid grid-cols-5 text-[10px] text-gray-400 text-center gap-1">
                  <span>1-2 (Muy suave)</span>
                  <span>3-4 (Moderado)</span>
                  <span>5-6 (Duro)</span>
                  <span>7-8 (Muy duro)</span>
                  <span>9-10 (Extenuante)</span>
                </div>
              </div>

              {/* Input 3: Jugadores en plantilla */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide">
                  3. Jugadores que realizaron la sesión completa
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="35"
                    value={calcAthletes}
                    onChange={(e) => setCalcAthletes(Math.max(1, Number(e.target.value)))}
                    className="w-24 px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs text-white font-mono text-center focus:outline-none focus:border-emerald-500"
                  />
                  <span className="text-xs text-gray-400">
                    Carga colectiva del grupo acumulada:{' '}
                    <strong className="text-white">{(sessionLoad * calcAthletes).toLocaleString()} UA</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Results & Recommendations */}
            <div className="lg:col-span-5 bg-[#09180f] p-6 rounded-2xl border border-emerald-900/50 space-y-5 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Resultado de la Carga de Entrenamiento:
                </span>

                <div className="text-center p-6 bg-[#051109] rounded-2xl border border-emerald-900/60 space-y-1.5">
                  <span className="text-xs text-gray-400 block font-medium">Carga Interna Individual</span>
                  <div className="text-4xl sm:text-5xl font-black text-white font-mono">
                    {sessionLoad}{' '}
                    <span className="text-lg font-bold text-emerald-400">UA</span>
                  </div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mt-2 ${loadInfo.color}`}>
                    {loadInfo.label}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-[#06130b] border border-emerald-950 text-gray-300">
                    <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="leading-snug">{loadInfo.desc}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#06130b] border border-emerald-950 space-y-1">
                    <span className="font-bold text-white block text-[11px]">
                      Recomendaciones para el Cuerpo Técnico:
                    </span>
                    <ul className="space-y-1 text-gray-300 text-[11px]">
                      <li>• Si la carga supera 650 UA, asegurar 1.2g/kg de carbohidratos post-sesión.</li>
                      <li>• En MD-1 nunca superar 350 UA para no iniciar el partido en deuda glucogénica.</li>
                      <li>• Monitorear a los jugadores suplentes con sesiones compensatorias en MD+1.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-950 text-center">
                <span className="text-[11px] text-gray-400">
                  Fórmula oficial validada por FIFA Medical & UEFA Fitness Guidelines.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: CRONÓMETRO DE INTERVALOS (HIIT / RSA) */}
      {activeTab === 'cronometro' && (
        <div className="space-y-6">
          {/* Quick Presets Bar */}
          <div className="bg-[#09180f] p-4 sm:p-5 rounded-2xl border border-emerald-900/50 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Protocolos Preconfigurados para Campo (1 Clic)</span>
              </span>

              <button
                type="button"
                onClick={() => setTimerSoundEnabled(!timerSoundEnabled)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition border ${
                  timerSoundEnabled
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                    : 'bg-gray-900 text-gray-400 border-gray-800'
                }`}
              >
                {timerSoundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pitidos de Campo Activados</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-gray-500" />
                    <span>Silencio</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              <button
                type="button"
                onClick={() => applyTimerPreset(15, 15, 8)}
                className="p-2.5 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-500/60 text-left transition hover:bg-[#0c2215]"
              >
                <span className="text-[10px] font-bold text-amber-400 block">HIIT VAM Corto</span>
                <span className="text-xs font-black text-white">15s / 15s</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">8 rondas (4 min)</span>
              </button>

              <button
                type="button"
                onClick={() => applyTimerPreset(6, 24, 6)}
                className="p-2.5 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-500/60 text-left transition hover:bg-[#0c2215]"
              >
                <span className="text-[10px] font-bold text-yellow-400 block">RSA Sprints COD</span>
                <span className="text-xs font-black text-white">6s / 24s</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">6 repeticiones (3 min)</span>
              </button>

              <button
                type="button"
                onClick={() => applyTimerPreset(20, 10, 8)}
                className="p-2.5 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-500/60 text-left transition hover:bg-[#0c2215]"
              >
                <span className="text-[10px] font-bold text-red-400 block">Tabata Fútbol</span>
                <span className="text-xs font-black text-white">20s / 10s</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">8 rondas (4 min)</span>
              </button>

              <button
                type="button"
                onClick={() => applyTimerPreset(45, 15, 6)}
                className="p-2.5 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-500/60 text-left transition hover:bg-[#0c2215]"
              >
                <span className="text-[10px] font-bold text-emerald-400 block">Circuitos c/ Balón</span>
                <span className="text-xs font-black text-white">45s / 15s</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">6 estaciones (6 min)</span>
              </button>

              <button
                type="button"
                onClick={() => applyTimerPreset(30, 30, 10)}
                className="p-2.5 rounded-xl bg-[#06120b] border border-emerald-950 hover:border-emerald-500/60 text-left transition hover:bg-[#0c2215]"
              >
                <span className="text-[10px] font-bold text-blue-400 block">Resistencia Intermit.</span>
                <span className="text-xs font-black text-white">30s / 30s</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">10 rondas (10 min)</span>
              </button>
            </div>
          </div>

          {/* Main Visual Chronometer Board */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-[#09180f] rounded-3xl border border-emerald-800/60 p-6 sm:p-8 flex flex-col items-center justify-between text-center space-y-6 shadow-2xl relative overflow-hidden">
              {/* Status Header */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-gray-300">
                    Cronómetro Oficial de Sesión
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                  Ronda {timerCurrentRound} de {timerTotalRounds}
                </div>
              </div>

              {/* Phase Badge */}
              <div>
                {timerPhase === 'idle' && (
                  <span className="px-4 py-1.5 rounded-full bg-gray-800/80 text-gray-300 text-xs sm:text-sm font-bold border border-gray-700 uppercase tracking-widest animate-pulse">
                    Listo para Iniciar
                  </span>
                )}
                {timerPhase === 'prep' && (
                  <span className="px-5 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-black border border-amber-500/40 uppercase tracking-widest animate-bounce">
                    ¡Atentos! Preparación ({timerSecondsLeft}s)
                  </span>
                )}
                {timerPhase === 'work' && (
                  <span className="px-6 py-2.5 rounded-full bg-emerald-500 text-black text-sm font-black uppercase tracking-widest shadow-lg shadow-emerald-500/40 animate-pulse">
                    ⚡ TRABAJO MÁXIMO / SPRINT
                  </span>
                )}
                {timerPhase === 'rest' && (
                  <span className="px-6 py-2.5 rounded-full bg-blue-500/20 text-cyan-300 text-sm font-black border border-cyan-500/40 uppercase tracking-widest">
                    💤 RECUPERACIÓN / PAUSA ACTIVA
                  </span>
                )}
                {timerPhase === 'finished' && (
                  <span className="px-6 py-2.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-black border border-purple-500/40 uppercase tracking-widest">
                    🏆 ¡SESIÓN COMPLETADA CON ÉXITO!
                  </span>
                )}
              </div>

              {/* Massive Numbers Display */}
              <div className="py-2">
                <div
                  className={`font-mono text-7xl sm:text-9xl font-black tracking-tighter transition-colors select-none ${
                    timerPhase === 'work'
                      ? 'text-emerald-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.5)]'
                      : timerPhase === 'rest'
                      ? 'text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                      : timerPhase === 'prep'
                      ? 'text-amber-400 animate-pulse'
                      : 'text-white'
                  }`}
                >
                  {timerSecondsLeft < 10 ? `0${timerSecondsLeft}` : timerSecondsLeft}
                  <span className="text-xl sm:text-2xl text-gray-500 ml-1 font-sans font-bold">seg</span>
                </div>

                <div className="text-xs text-gray-400 font-medium mt-2">
                  {timerPhase === 'work'
                    ? `Mantén la máxima intensidad durante los ${timerWorkSec} segundos.`
                    : timerPhase === 'rest'
                    ? `Caminar, respirar profundo e hidratarse (${timerRestSec}s de pausa).`
                    : 'Configura tus intervalos y pulsa Iniciar cuando los jugadores estén listos.'}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 w-full max-w-sm justify-center">
                {!timerIsRunning ? (
                  <button
                    type="button"
                    onClick={handleStartTimer}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm shadow-xl shadow-emerald-950/80 transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>{timerPhase === 'idle' ? 'Iniciar Intervalo' : 'Reanudar'}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePauseTimer}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm shadow-xl shadow-amber-950/80 transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Pause className="w-5 h-5 fill-current" />
                    <span>Pausar</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleResetTimer}
                  className="flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-2xl bg-[#06130b] hover:bg-[#0c2617] text-gray-300 hover:text-white border border-emerald-900/60 font-bold text-xs transition"
                  title="Reiniciar a valores iniciales"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reiniciar</span>
                </button>
              </div>
            </div>

            {/* Right Settings Form */}
            <div className="lg:col-span-4 bg-[#09180f] rounded-3xl border border-emerald-900/50 p-6 space-y-5 shadow-xl flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                  <span>Ajustes Personalizados</span>
                </h4>

                <div className="space-y-4">
                  {/* Work seconds */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-300">
                      <span>Tiempo de Trabajo (Sprint/Tarea)</span>
                      <span className="text-emerald-400 font-mono">{timerWorkSec}s</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="120"
                      step="5"
                      disabled={timerIsRunning}
                      value={timerWorkSec}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setTimerWorkSec(val);
                        if (timerPhase === 'idle') setTimerSecondsLeft(val);
                      }}
                      className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-emerald-500 disabled:opacity-40"
                    />
                  </div>

                  {/* Rest seconds */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-300">
                      <span>Tiempo de Descanso (Micropausa)</span>
                      <span className="text-cyan-400 font-mono">{timerRestSec}s</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="120"
                      step="5"
                      disabled={timerIsRunning}
                      value={timerRestSec}
                      onChange={(e) => setTimerRestSec(Number(e.target.value))}
                      className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-cyan-500 disabled:opacity-40"
                    />
                  </div>

                  {/* Rounds count */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-300">
                      <span>Número Total de Rondas</span>
                      <span className="text-purple-400 font-mono">{timerTotalRounds}</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="1"
                      disabled={timerIsRunning}
                      value={timerTotalRounds}
                      onChange={(e) => setTimerTotalRounds(Number(e.target.value))}
                      className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-40"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-[#06130b] border border-emerald-950 text-[11px] text-gray-300 space-y-1">
                    <span className="font-bold text-white block">Duración Total Estimada:</span>
                    <p className="font-mono text-emerald-400 font-bold">
                      {Math.floor(((timerWorkSec + timerRestSec) * timerTotalRounds) / 60)} min{' '}
                      {((timerWorkSec + timerRestSec) * timerTotalRounds) % 60} seg
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-950 text-[11px] text-gray-400">
                💡 <strong>Consejo del Preparador:</strong> En sesiones de MD-4 (Fuerza), usa descansos completos (ratio 1:4). En MD-3 (Resistencia), usa micropausas incompletas (ratio 1:1).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: TEST FÍSICOS DE CAMPO (Yo-Yo & Sprint Standards) */}
      {activeTab === 'test-campo' && (
        <div className="space-y-6">
          <div className="bg-[#091910] p-6 rounded-2xl border border-emerald-900/50 space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>Batería de Test Físicos Oficiales para Fútbol con Baremos FIFA</span>
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              Evalúa la potencia aeróbica intermitente (Yo-Yo IR1), la aceleración pura (10m), la velocidad punta (30m) y la agilidad con cambios de dirección para conocer el estado físico exacto de tu plantilla.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Test 1: Yo-Yo Intermittent Recovery Test Nivel 1 */}
            <div className="bg-[#09180f] rounded-2xl border border-emerald-900/50 p-5 sm:p-6 space-y-5 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-950 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      TEST AERÓBICO ESPECÍFICO
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      Yo-Yo Intermittent Recovery Test (Nivel 1)
                    </h4>
                  </div>
                  <span className="text-xs text-amber-400 font-bold bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-900/50">
                    2 x 20m + 10s pausa
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-300">
                    <span>Distancia total alcanzada por el jugador (metros)</span>
                    <span className="text-emerald-400 font-mono text-sm">{yoyoDistance} m</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="2800"
                    step="40"
                    value={yoyoDistance}
                    onChange={(e) => setYoyoDistance(Number(e.target.value))}
                    className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>400m (Base)</span>
                    <span>1400m (Juvenil/Amateur)</span>
                    <span>2000m (Semi-Pro)</span>
                    <span>2600m+ (Élite)</span>
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#06130b] border border-emerald-950 text-center">
                    <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                      VO2 Máx Estimado (Bangsbo)
                    </span>
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      {(yoyoDistance * 0.0084 + 36.4).toFixed(1)}
                    </div>
                    <span className="text-[10px] text-gray-400">ml/kg/min</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#06130b] border border-emerald-950 text-center flex flex-col justify-center">
                    <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                      Nivel Competitivo
                    </span>
                    <span
                      className={`text-xs font-black px-2 py-1 rounded-lg border ${
                        yoyoDistance >= 2000
                          ? 'bg-purple-950 text-purple-300 border-purple-800'
                          : yoyoDistance >= 1500
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          : yoyoDistance >= 1100
                          ? 'bg-blue-950 text-blue-300 border-blue-800'
                          : 'bg-amber-950 text-amber-300 border-amber-800'
                      }`}
                    >
                      {yoyoDistance >= 2200
                        ? '⭐ Profesional Élite'
                        : yoyoDistance >= 1600
                        ? '🔥 Semiprofesional / Tercera'
                        : yoyoDistance >= 1200
                        ? '⚽ Regional / Juvenil Nacional'
                        : '⚠️ Acondicionamiento Requerido'}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#06130b] border border-emerald-950 text-[11px] text-gray-300 space-y-1">
                  <span className="font-bold text-white block">Protocolo de Aplicación:</span>
                  <p>1. Dos conos a 20 metros para las carreras de ida y vuelta.</p>
                  <p>2. Un cono a 5 metros tras la línea de salida para la recuperación activa de 10s.</p>
                  <p>3. El test finaliza cuando el futbolista no llega dos veces a la línea antes del pitido.</p>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-950 text-[11px] text-gray-400">
                Referencia: Bangsbo, J. et al. (2008). The Yo-Yo Intermittent Recovery Test.
              </div>
            </div>

            {/* Test 2: Test de Velocidad Lineal 30m (con split de 10m) */}
            <div className="bg-[#09180f] rounded-2xl border border-emerald-900/50 p-5 sm:p-6 space-y-5 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-950 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                      TEST DE VELOCIDAD PURA
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      Sprint Lineal de 30 Metros (Split 0-10m & 10-30m)
                    </h4>
                  </div>
                  <span className="text-xs text-yellow-400 font-bold bg-yellow-950/40 px-2.5 py-1 rounded-lg border border-yellow-900/50">
                    Aceleración + V-Max
                  </span>
                </div>

                <div className="space-y-4">
                  {/* 10m slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-300">
                      <span>Tiempo a los 10 metros (Aceleración y Primeros Pasos)</span>
                      <span className="text-yellow-400 font-mono text-sm">{sprint10m.toFixed(2)} seg</span>
                    </div>
                    <input
                      type="range"
                      min="1.50"
                      max="2.10"
                      step="0.01"
                      value={sprint10m}
                      onChange={(e) => setSprint10m(Number(e.target.value))}
                      className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-yellow-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>&lt; 1.65s (Élite Mundial)</span>
                      <span>1.75s (Bueno)</span>
                      <span>&gt; 1.85s (Lento)</span>
                    </div>
                  </div>

                  {/* 30m slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-300">
                      <span>Tiempo total a los 30 metros (Velocidad Punta)</span>
                      <span className="text-emerald-400 font-mono text-sm">{sprint30m.toFixed(2)} seg</span>
                    </div>
                    <input
                      type="range"
                      min="3.70"
                      max="4.60"
                      step="0.01"
                      value={sprint30m}
                      onChange={(e) => setSprint30m(Number(e.target.value))}
                      className="w-full h-2 bg-[#06120b] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>&lt; 3.90s (Extremo/Delantero Élite)</span>
                      <span>4.10s (Promedio Fútbol)</span>
                      <span>&gt; 4.30s (Mejorable)</span>
                    </div>
                  </div>
                </div>

                {/* Rating Output */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#06130b] border border-emerald-950 text-center">
                    <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                      Índice de Aceleración (0-10m)
                    </span>
                    <span
                      className={`text-xs font-black px-2 py-1 rounded-lg border block ${
                        sprint10m <= 1.68
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          : sprint10m <= 1.78
                          ? 'bg-blue-950 text-blue-300 border-blue-800'
                          : 'bg-amber-950 text-amber-300 border-amber-800'
                      }`}
                    >
                      {sprint10m <= 1.68 ? '⚡ Explosión Sobresaliente' : sprint10m <= 1.78 ? '✓ Nivel Competitivo Adecuado' : '⚠️ Déficit de Primer Paso'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#06130b] border border-emerald-950 text-center">
                    <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                      Índice de Lanzamiento (10-30m)
                    </span>
                    <span
                      className={`text-xs font-black px-2 py-1 rounded-lg border block ${
                        sprint30m <= 3.98
                          ? 'bg-purple-950 text-purple-300 border-purple-800'
                          : sprint30m <= 4.18
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          : 'bg-amber-950 text-amber-300 border-amber-800'
                      }`}
                    >
                      {sprint30m <= 3.98 ? '🚀 Velocidad de Élite' : sprint30m <= 4.18 ? '✓ Velocidad Buena' : '⚠️ Requiere Trabajo Pliométrico'}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#06130b] border border-emerald-950 text-[11px] text-gray-300 space-y-1">
                  <span className="font-bold text-white block">Indicaciones Clave:</span>
                  <p>• Salida con pie retrasado sin contramovimiento hacia atrás.</p>
                  <p>• 2 a 3 intentos por jugador con 3 minutos de micropausa pasiva completa entre sprints.</p>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-950 text-[11px] text-gray-400">
                Baremo basado en bases de datos de canteras de LaLiga y Premier League.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CATÁLOGO OFICIAL 55 EJERCICIOS */}
      {activeTab === 'catalogo' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>Ejercicios de Preparación Física en la Biblioteca de 1.000</span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Tareas reglamentarias con pizarra táctica vectorial interactiva, parámetros y paso a paso.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              {catalogPhysicalExercises.length} ejercicios registrados
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {catalogPhysicalExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isFavorite={favorites.includes(exercise.id)}
                isCompleted={completed.includes(exercise.id)}
                onToggleFavorite={(e, id) => {
                  e.stopPropagation();
                  onToggleFavorite?.(id);
                }}
                onToggleCompleted={(e, id) => {
                  e.stopPropagation();
                  onToggleCompleted?.(id);
                }}
                onSelect={(ex) => onSelectExercise?.(ex)}
                onAddToTraining={(e, ex) => {
                  e.stopPropagation();
                  onAddToTraining?.(ex);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
