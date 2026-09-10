import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Trash2,
  Copy,
  Printer,
  Edit,
  Save,
  Calendar,
  UserCheck,
  Users,
  Dumbbell,
  CheckCircle,
  Clock,
  Award,
} from 'lucide-react';
import { FichaTecnica } from '../../types';
import { getStoredFichas, saveFicha, deleteFicha } from '../../utils/storage';

type FichaType =
  | 'ficha_sesion'
  | 'ficha_ejercicio'
  | 'ficha_evaluacion_jugador'
  | 'ficha_evaluacion_equipo'
  | 'plan_semanal';

export const FichasView: React.FC = () => {
  const [fichas, setFichas] = useState<FichaTecnica[]>(() => getStoredFichas());
  const [activeType, setActiveType] = useState<FichaType>('ficha_sesion');
  const [selectedFicha, setSelectedFicha] = useState<FichaTecnica | null>(
    fichas.length > 0 ? fichas[0] : null
  );
  const [isEditing, setIsEditing] = useState(false);

  // Form states for creating or editing
  const [formTitle, setFormTitle] = useState('');
  const [formData, setFormData] = useState<Record<string, any>>({});

  const startNewFicha = (type: FichaType) => {
    setActiveType(type);
    setIsEditing(true);

    if (type === 'ficha_sesion') {
      setFormTitle(`Ficha de Sesión - ${new Date().toISOString().split('T')[0]}`);
      setFormData({
        fecha: new Date().toISOString().split('T')[0],
        horario: '18:00 - 19:30',
        categoria: 'Infantil (12-14 años)',
        jugadores: '16 jugadores + 2 porteros',
        objetivoPrincipal: 'Salida limpia de balón y apoyos en rombo',
        materiales: '18 balones, 20 conos, 10 petos verdes y 10 rojos',
        calentamiento: '15 min de rondos dinámicos 4v2 con límite a 2 toques',
        partePrincipal: '35 min de conservación en rombo con comodín interior',
        partidoFinal: '20 min de partido 8v8 con zonas delimitadas',
        vueltaCalma: '10 min de trote regenerativo y estiramientos',
        observaciones: 'Mantener buena comunicación de espaldas al rival.',
      });
    } else if (type === 'ficha_evaluacion_jugador') {
      setFormTitle(`Evaluación: Jugador - ${new Date().toISOString().split('T')[0]}`);
      setFormData({
        nombreJugador: 'Alejandro Martínez',
        dorsal: '10',
        posicion: 'Mediocentro Ofensivo',
        fecha: new Date().toISOString().split('T')[0],
        tecnicaNota: 8,
        tacticaNota: 9,
        fisicaNota: 7,
        psicologicaNota: 9,
        comentarioTecnico: 'Excelente visión de juego y precisión en pase filtrado.',
        comentarioTatico: 'Ocupa muy bien los espacios entre líneas.',
        comentarioFisico: 'Necesita mejorar resistencia en los últimos 15 minutos.',
        aspectosMejorar: 'Fijar con mayor fuerza el pie de apoyo en golpeos largos.',
      });
    } else if (type === 'ficha_evaluacion_equipo') {
      setFormTitle(`Evaluación Equipo vs Rival`);
      setFormData({
        fecha: new Date().toISOString().split('T')[0],
        rival: 'Atlético Juvenil',
        resultado: '3 - 1 (Victoria)',
        aspectosOfensivos: 'Gran fluidez en bandas y 8 llegadas claras al área.',
        aspectosDefensivos: 'Defensa sólida del área en balones parados.',
        aspectosMejorar: 'Repliegue tras pérdida en los primeros 10 minutos.',
        jugadorDestacado: 'Central #4 por su anticipación aérea.',
      });
    } else if (type === 'plan_semanal') {
      setFormTitle(`Microciclo Semanal - Jornada`);
      setFormData({
        semana: 'Semana 12 - Periodo Competitivo',
        objetivoSemana: 'Transición ofensiva rápida y duelos 1v1',
        lunes: 'MD+1: Recuperación activa y análisis en vídeo (60 min)',
        martes: 'MD-4: Fuerza explosiva y espacios reducidos 3v3 (80 min)',
        miercoles: 'Descanso o gimnasio individual',
        jueves: 'MD-3: Resistencia táctica 8v8 y 11v11 (90 min)',
        viernes: 'MD-2: Velocidad de reacción y finalizaciones (65 min)',
        sabado: 'MD-1: Balón parado y activación neuro-muscular (45 min)',
        domingo: 'DÍA DE PARTIDO OFICIAL (Competición)',
      });
    } else {
      // ficha_ejercicio
      setFormTitle(`Ficha Técnica de Ejercicio`);
      setFormData({
        nombreEjercicio: 'Rondo de Transición 4v4 + 3 Comodines',
        objetivo: 'Atraer para liberar al tercer hombre en lado débil',
        espacio: '25 x 20 metros',
        duracion: '4 series de 4 minutos',
        jugadores: '11 jugadores',
        materiales: '12 setas, 10 balones, 3 juegos de petos',
        explicacion: 'Mantener la posesión con apoyo de comodines exteriores.',
        variantes: 'Límite de toques o cambio de orientación obligatorio.',
        correcciones: 'No dar el pase con bote innecesario.',
      });
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const newFicha: FichaTecnica = {
      id: selectedFicha?.id || `ficha-${Date.now()}`,
      title: formTitle,
      type: activeType,
      createdAt: selectedFicha?.createdAt || new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      data: formData,
    };

    saveFicha(newFicha);
    const updated = getStoredFichas();
    setFichas(updated);
    setSelectedFicha(newFicha);
    setIsEditing(false);
  };

  const handleDuplicate = (ficha: FichaTecnica) => {
    const duplicated: FichaTecnica = {
      ...ficha,
      id: `ficha-${Date.now()}`,
      title: `${ficha.title} (Copia)`,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
    };
    saveFicha(duplicated);
    const updated = getStoredFichas();
    setFichas(updated);
    setSelectedFicha(duplicated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Seguro que deseas eliminar esta ficha técnica?')) {
      deleteFicha(id);
      const updated = getStoredFichas();
      setFichas(updated);
      setSelectedFicha(updated.length > 0 ? updated[0] : null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#09170f] p-5 sm:p-6 rounded-2xl border border-emerald-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <FileText className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Pack de Fichas Técnicas de Entrenamiento
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            Plantillas oficiales para entrenadores: diseña, evalúa, guarda en tu dispositivo e imprime en formato A4 profesional.
          </p>
        </div>

        {/* Quick template triggers */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => startNewFicha('ficha_sesion')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>Nueva Ficha de Sesión</span>
          </button>

          <button
            type="button"
            onClick={() => startNewFicha('ficha_evaluacion_jugador')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0d2216] hover:bg-[#122e1e] text-emerald-300 border border-emerald-800 text-xs font-semibold transition"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Evaluar Jugador</span>
          </button>

          <button
            type="button"
            onClick={() => startNewFicha('plan_semanal')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0d2216] hover:bg-[#122e1e] text-emerald-300 border border-emerald-800 text-xs font-semibold transition"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Plan Semanal</span>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Saved Fichas list */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center justify-between">
            <span>Mis Fichas Guardadas ({fichas.length})</span>
          </h3>

          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1">
            {fichas.length === 0 ? (
              <div className="p-8 text-center bg-[#0a1710] rounded-xl border border-emerald-950 text-gray-400 text-xs">
                No tienes fichas creadas aún. Haz clic en "Nueva Ficha" para empezar.
              </div>
            ) : (
              fichas.map((f) => (
                <div
                  key={f.id}
                  onClick={() => {
                    setSelectedFicha(f);
                    setIsEditing(false);
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition ${
                    selectedFicha?.id === f.id
                      ? 'bg-[#11271b] border-emerald-500 text-white shadow-md'
                      : 'bg-[#09150e] border-emerald-900/40 text-gray-300 hover:border-emerald-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                      {f.type.replace('ficha_', '').replace('_', ' ')}
                    </span>
                    <span className="text-[10px] text-gray-400">{f.createdAt}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{f.title}</h4>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Selected Ficha / Editor */}
        <div className="lg:col-span-8">
          {isEditing ? (
            /* Editing / Creating Form */
            <form onSubmit={handleSave} className="bg-[#09150e] p-5 sm:p-6 rounded-2xl border border-emerald-700/50 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Edit className="w-4 h-4 text-emerald-400" />
                  <span>Editor de Ficha Técnica</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-gray-400 hover:text-white text-xs"
                >
                  Cancelar
                </button>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 block mb-1">Título de la Ficha</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Dynamic form inputs based on type */}
              <div className="space-y-3">
                {Object.entries(formData).map(([key, val]) => (
                  <div key={key}>
                    <label className="text-[10px] font-bold uppercase text-emerald-400 block mb-1">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </label>
                    {typeof val === 'number' ? (
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={val}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, [key]: Number(e.target.value) }))
                          }
                          className="flex-1 accent-emerald-500"
                        />
                        <span className="font-bold text-emerald-400 text-sm">{val}/10</span>
                      </div>
                    ) : (
                      <textarea
                        value={val}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [key]: e.target.value }))
                        }
                        rows={2}
                        className="w-full px-3 py-2 bg-[#06110a] border border-emerald-900/60 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-emerald-900/50">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Guardar Ficha Técnica</span>
                </button>
              </div>
            </form>
          ) : selectedFicha ? (
            /* Printable Preview */
            <div className="bg-[#09150e] p-6 rounded-2xl border border-emerald-900/50 space-y-6 shadow-xl print:p-0 print:border-none print:bg-white print:text-black">
              {/* Top Action Bar */}
              <div className="flex items-center justify-between border-b border-emerald-900/50 pb-4 flex-wrap gap-2 print:hidden">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {selectedFicha.type.replace('ficha_', '').replace('_', ' ')}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{selectedFicha.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormTitle(selectedFicha.title);
                      setFormData(selectedFicha.data);
                      setActiveType(selectedFicha.type);
                      setIsEditing(true);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1f14] text-emerald-300 border border-emerald-800 text-xs font-semibold hover:bg-emerald-900/40"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span>Editar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDuplicate(selectedFicha)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1f14] text-gray-300 border border-emerald-900 text-xs font-semibold hover:bg-white/5"
                    title="Duplicar ficha"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Duplicar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir A4</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(selectedFicha.id)}
                    className="p-2 rounded-lg text-red-400 hover:text-red-300 border border-red-900/40 bg-red-950/20"
                    title="Eliminar"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Official Technical Sheet Content Render */}
              <div className="border border-emerald-800/40 bg-[#06110a] rounded-xl p-5 space-y-4 print:border-black print:p-4 print:bg-white">
                <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⚽</span>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase print:text-black">FÚTBOL+ • FICHA OFICIAL</h4>
                      <p className="text-[10px] text-gray-400 print:text-gray-600">Sistema Profesional de Entrenamiento</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400 print:text-black">{selectedFicha.createdAt}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {Object.entries(selectedFicha.data).map(([k, val]) => (
                    <div key={k} className="p-3 bg-[#09170f] rounded-lg border border-emerald-950 print:bg-gray-100 print:border-gray-300">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1 print:text-emerald-800">
                        {k.replace(/([A-Z])/g, ' $1')}
                      </span>
                      {typeof val === 'number' ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-white print:text-black">{val}/10</span>
                          <span className="text-[10px] text-gray-400">Puntuación de rendimiento</span>
                        </div>
                      ) : (
                        <p className="text-gray-200 leading-relaxed print:text-black text-xs whitespace-pre-line">{String(val)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-[#09150e] rounded-2xl border border-emerald-900/40 text-gray-400 text-xs">
              Selecciona una ficha técnica para visualizar o editar.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
