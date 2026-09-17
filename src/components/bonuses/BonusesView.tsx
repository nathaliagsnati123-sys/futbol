import React, { useState } from 'react';
import {
  Gift,
  BookOpen,
  ClipboardList,
  Target,
  Footprints,
  Shield,
  Zap,
  Users,
  Calendar,
  FileSpreadsheet,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Printer,
  Clock,
  Sparkles,
  Search,
  Dumbbell,
  Activity,
} from 'lucide-react';
import {
  BONUSES_METADATA,
  GUIA_ENTRENADOR,
  SESIONES_100,
  EJERCICIOS_FINALIZACION_150,
  EJERCICIOS_TECNICA_120,
  EJERCICIOS_TACTICOS_100,
  PROGRAMA_VELOCIDAD,
  GUIA_FUTBOL_BASE,
  PLAN_30_DIAS,
  PREPARACION_FISICA_INTEGRAL,
} from '../../data/bonuses';
import { FichasView } from '../sheets/FichasView';

interface Props {
  onGoToFichas?: () => void;
}

export const BonusesView: React.FC<Props> = ({ onGoToFichas }) => {
  const [activeBonusId, setActiveBonusId] = useState<number | null>(null);
  const [filterQuery, setFilterQuery] = useState('');

  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-emerald-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-emerald-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-emerald-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-emerald-400" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0d281a] via-[#091b11] to-[#0d281a] p-6 rounded-2xl border border-emerald-700/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-500/30">
                <Gift className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Contenido Exclusivo Incluido
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Los 10 Bonos Profesionales de FÚTBOL+
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
              Manuales metodológicos, preparación física integral, sesiones preconfiguradas, ejercicios tácticos y técnicos avanzados, programa de velocidad y calendario de 30 días.
            </p>
          </div>

          <div className="bg-[#051109] px-4 py-3 rounded-xl border border-emerald-900/60 shrink-0 text-center">
            <span className="text-xs text-gray-400 block font-medium">Acceso Total</span>
            <span className="text-lg font-black text-emerald-400">10 Bonos Pro</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {activeBonusId === null ? (
        /* Grid of 10 Bonuses */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BONUSES_METADATA.map((bonus) => (
            <div
              key={bonus.id}
              onClick={() => setActiveBonusId(bonus.id)}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#09170f] border border-emerald-900/40 p-5 hover:border-emerald-500/50 hover:bg-[#0c1f14] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-emerald-950/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-extrabold text-amber-400 bg-amber-950/40 border border-amber-900/50 px-2.5 py-0.5 rounded-md">
                    {bonus.numberStr}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                    {bonus.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/50">
                    {getBonusIcon(bonus.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {bonus.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  {bonus.shortDesc}
                </p>

                <div className="space-y-1.5 border-t border-emerald-950/80 pt-3">
                  {bonus.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-emerald-950 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                <span>{bonus.id === 9 ? 'Abrir Centro de Fichas' : 'Explorar Contenido'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Individual Bonus Viewer */
        <div className="bg-[#09170f] rounded-2xl border border-emerald-800/50 p-5 sm:p-7 space-y-6 shadow-2xl">
          {/* Top Back bar */}
          <div className="flex items-center justify-between border-b border-emerald-900/50 pb-4 flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveBonusId(null)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 text-xs font-semibold transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a todos los bonos</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-gray-300 hover:text-white border border-emerald-900/60 bg-[#06110a] text-xs font-semibold transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir Bono</span>
              </button>
            </div>
          </div>

          {/* Render specific bonus based on activeBonusId */}
          {activeBonusId === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 1</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Guía Profesional del Entrenador de Fútbol
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Manual de metodología, planificación semanal, morfociclo y corrección técnica.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GUIA_ENTRENADOR.map((cap) => (
                  <div key={cap.id} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2">
                    <h4 className="text-sm font-bold text-emerald-300">{cap.title}</h4>
                    <p className="text-xs font-medium text-gray-400">{cap.summary}</p>
                    <p className="text-xs text-gray-200 whitespace-pre-line leading-relaxed pt-2 border-t border-emerald-950">
                      {cap.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 2 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 2</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  100 Sesiones de Entrenamiento Listas
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Sesiones completas desglosadas en calentamiento, parte principal y vuelta a la calma.
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                <input
                  type="text"
                  placeholder="Buscar en las 100 sesiones por objetivo o categoría..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-3 max-h-[650px] overflow-y-auto pr-1">
                {SESIONES_100
                  .filter((s) => s.titulo.toLowerCase().includes(filterQuery.toLowerCase()) || s.objetivo.toLowerCase().includes(filterQuery.toLowerCase()))
                  .slice(0, 30)
                  .map((ses) => (
                    <div key={ses.id} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                            {ses.id}
                          </span>
                          <h4 className="text-sm font-bold text-white">{ses.titulo}</h4>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-400">
                          <span className="bg-[#06110a] px-2 py-0.5 rounded border border-emerald-950">⏱️ {ses.duracion}</span>
                          <span className="bg-[#06110a] px-2 py-0.5 rounded border border-emerald-950">{ses.edad}</span>
                          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">{ses.nivel}</span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-300">
                        <strong className="text-white">Objetivo:</strong> {ses.objetivo}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-2 border-t border-emerald-950 text-gray-300">
                        <div className="bg-[#07130c] p-2.5 rounded-lg">
                          <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-1">Calentamiento ({ses.calentamiento.duracion})</span>
                          <p className="text-[11px]">{ses.calentamiento.descripcion}</p>
                        </div>
                        <div className="bg-[#07130c] p-2.5 rounded-lg">
                          <span className="text-[10px] font-bold uppercase text-blue-400 block mb-1">Fase Principal</span>
                          <p className="text-[11px]">{ses.partePrincipal[0].descripcion}</p>
                        </div>
                        <div className="bg-[#07130c] p-2.5 rounded-lg">
                          <span className="text-[10px] font-bold uppercase text-purple-400 block mb-1">Vuelta a la calma</span>
                          <p className="text-[11px]">{ses.vueltaCalma.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeBonusId === 3 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 3</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  150 Ejercicios Exclusivos de Finalización
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Chutes, centros, 1v1 con portero, segundas jugadas y remates en movimiento.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[650px] overflow-y-auto pr-1">
                {EJERCICIOS_FINALIZACION_150.slice(0, 40).map((ex) => (
                  <div key={ex.id} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded">
                        {ex.id}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold">{ex.duracion} • {ex.intensidad}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white">{ex.nombre}</h4>
                    <p className="text-xs text-gray-300">{ex.objetivo}</p>
                    <div className="p-2 bg-[#07130b] rounded text-[11px] text-emerald-300 border border-emerald-950">
                      💡 <strong>Consejo Pro:</strong> {ex.consejoPro}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 4 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 4</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  120 Ejercicios de Técnica Individual
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Controles orientados, regates, cambios de dirección, protección de balón y uso de ambas piernas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[650px] overflow-y-auto pr-1">
                {EJERCICIOS_TECNICA_120.slice(0, 40).map((ex) => (
                  <div key={ex.id} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded">
                        {ex.id}
                      </span>
                      <span className="text-[10px] text-gray-400">{ex.repeticiones}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white">{ex.nombre}</h4>
                    <p className="text-xs text-gray-300">{ex.objetivo}</p>
                    <p className="text-[11px] text-gray-400 border-t border-emerald-950 pt-1.5">
                      ⭐ <strong>Puntos clave:</strong> {ex.puntosClave}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 5 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 5</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  100 Ejercicios Tácticos Colectivos
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Presión alta, basculaciones, coberturas, salida de balón, superioridades numéricas y transiciones.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[650px] overflow-y-auto pr-1">
                {EJERCICIOS_TACTICOS_100.slice(0, 30).map((ex) => (
                  <div key={ex.id} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded">
                        {ex.id}
                      </span>
                      <span className="text-[10px] text-gray-400">{ex.jugadores}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white">{ex.nombre}</h4>
                    <p className="text-xs text-gray-300">{ex.objetivo}</p>
                    <p className="text-[11px] text-yellow-300/90 bg-[#07130b] p-2 rounded border border-emerald-950">
                      ⚡ <strong>Regla especial:</strong> {ex.reglaEspecial}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 6 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 6</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {PROGRAMA_VELOCIDAD.titulo}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {PROGRAMA_VELOCIDAD.descripcion}
                </p>
              </div>

              <div className="space-y-4">
                {PROGRAMA_VELOCIDAD.niveles.map((niv, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-sm font-bold text-emerald-300">{niv.nivel}</h4>
                      <span className="text-[11px] bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800">
                        {niv.frecuencia}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300"><strong>Objetivos:</strong> {niv.objetivos}</p>
                    <div className="space-y-1 pt-2 border-t border-emerald-950">
                      <span className="text-[11px] font-bold text-white block">Ejercicios del protocolo:</span>
                      {niv.ejercicios.map((ej, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{ej}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 7 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 7</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Fútbol Base: Guía Pedagógica por Edades
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Objetivos evolutivos, características psicomotoras y recomendaciones formativas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GUIA_FUTBOL_BASE.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0b1d13] border border-emerald-900/50 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-emerald-300">{item.categoria}</h4>
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
                        ⏱️ {item.duracionSesion}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-amber-300 block">{item.etapa}</span>
                    <p className="text-xs text-gray-300"><strong>Objetivos:</strong> {item.objetivos}</p>
                    <p className="text-xs text-gray-400"><strong>Características:</strong> {item.caracteristicas}</p>
                    <div className="p-2.5 bg-[#07130c] rounded text-xs text-emerald-200 border border-emerald-950">
                      💡 <strong>Recomendaciones:</strong> {item.recomendaciones}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 8 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">BONO 8</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Plan de Entrenamiento Completo de 30 Días
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Calendario estructurado día por día para acondicionamiento, técnica y táctica con descansos inteligentes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[650px] overflow-y-auto pr-1">
                {PLAN_30_DIAS.map((d) => (
                  <div
                    key={d.dia}
                    className={`p-3.5 rounded-xl border space-y-2 ${
                      d.dia % 7 === 0
                        ? 'bg-[#141d24] border-blue-900/50 text-gray-300'
                        : 'bg-[#0b1d13] border-emerald-900/50 text-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded">
                        DÍA {d.dia}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${d.intensidad === 'Alta' ? 'bg-red-950 text-red-300' : d.intensidad === 'Baja' ? 'bg-blue-950 text-blue-300' : 'bg-emerald-950 text-emerald-300'}`}>
                        {d.duracion} • {d.intensidad}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white">{d.titulo}</h4>
                    <p className="text-[11px] text-gray-300">{d.objetivo}</p>

                    <div className="text-[11px] text-gray-400 pt-1 border-t border-white/5 space-y-0.5">
                      {d.ejercicios.map((ej, idx) => (
                        <p key={idx}>• {ej}</p>
                      ))}
                    </div>

                    <p className="text-[10px] text-emerald-300 italic pt-1">
                      💬 {d.consejo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBonusId === 10 && (
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded">
                    BONO 10
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Manual Metodológico Exclusivo
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Manual de Preparación Física Integral para Fútbol
                </h3>
                <p className="text-xs text-gray-400 mt-1 max-w-2xl">
                  Protocolos modernos de fuerza funcional, prevención de lesiones (FIFA 11+), resistencia intermitente, pliometría y circuitos físico-técnicos integrados con balón.
                </p>
              </div>

              {/* Modules list */}
              <div className="space-y-4">
                {PREPARACION_FISICA_INTEGRAL.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-5 rounded-2xl bg-[#0b1d13] border border-emerald-900/50 space-y-4 hover:border-emerald-700/60 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-950 pb-3">
                      <div>
                        <span className="text-xs font-mono font-bold text-emerald-400 block">
                          MÓDULO {mod.numero}
                        </span>
                        <h4 className="text-base font-bold text-white mt-0.5">{mod.title}</h4>
                        <p className="text-xs text-emerald-300/90 mt-0.5">{mod.subtitle}</p>
                      </div>
                      <span className="text-[11px] text-gray-400 bg-[#06110a] px-3 py-1 rounded-lg border border-emerald-950 shrink-0">
                        ⏱️ {mod.duracionSugerida}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed bg-[#07140c] p-3 rounded-xl border border-emerald-950">
                      {mod.summary}
                    </p>

                    {/* Objectives */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                        Objetivos Fisiológicos & Tácticos:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {mod.objetivos.map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#08170f] text-xs text-gray-300 border border-emerald-950">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Exercises / Drills */}
                    <div className="space-y-2 pt-2 border-t border-emerald-950">
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        Protocolos y Ejercicios Prácticos:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {mod.ejercicios.map((ej, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-[#08160e] border border-emerald-900/40 space-y-2 hover:border-emerald-700/50 transition"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h5 className="text-xs font-bold text-white">{ej.nombre}</h5>
                              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded shrink-0">
                                {ej.seriesRepeticiones}
                              </span>
                            </div>

                            <div className="text-[11px] text-gray-300 space-y-1">
                              <p>
                                <strong className="text-emerald-400">Técnica & Postura:</strong> {ej.focoTecnico}
                              </p>
                              <p className="text-emerald-200/90 pt-1 border-t border-emerald-950">
                                ⚽ <strong className="text-white">Transferencia al juego:</strong> {ej.transferencia}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Render Bono 10: Plantillas y Fichas Técnicas */}
          {activeBonusId === 9 && (
            <div className="space-y-4">
              <FichasView />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
