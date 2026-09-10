import React from 'react';
import {
  CheckCircle2,
  Zap,
  Gift,
  ShieldCheck,
  Star,
  Users,
  Smartphone,
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { PWAInstallButton } from '../common/PWAInstallButton';

interface Props {
  onEnterApp: () => void;
}

export const SalesLandingPage: React.FC<Props> = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-[#06110a] text-gray-100 font-sans pb-24">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 text-black py-2 px-4 text-center text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4" />
        <span>¡OFERTA DE LANZAMIENTO EXCLUSIVA! 50% DE DESCUENTO POR TIEMPO LIMITADO</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider uppercase">
            <span>⚽ La herramienta definitiva de entrenamiento</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            1.000 Ejercicios para Llevar tu Entrenamiento al <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Siguiente Nivel</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            La biblioteca digital profesional para entrenadores y jugadores que desean planificar entrenamientos dinámicos, modernos y efectivos en segundos.
          </p>

          {/* Pricing Box CTA in Hero */}
          <div className="max-w-md mx-auto bg-[#0a1c12] p-6 rounded-2xl border-2 border-emerald-500 shadow-2xl shadow-emerald-950/80 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-base text-gray-400 line-through font-semibold">Antes: US$ 19,90</span>
              <span className="text-xs bg-red-500 text-white font-black px-2 py-0.5 rounded-md uppercase">
                -50% Hoy
              </span>
            </div>

            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold text-emerald-400">US$</span>
              <span className="text-5xl font-black text-white">9,90</span>
              <span className="text-xs text-gray-400 font-medium">/ pago único</span>
            </div>

            <p className="text-xs text-gray-300">
              Acceso de por vida a la aplicación web + 10 bonos incluidos + actualizaciones gratuitas.
            </p>

            <button
              type="button"
              onClick={onEnterApp}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-black font-black text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>OBTENER ACCESO INMEDIATO ($9,90)</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garantía de 7 días</span>
              </span>
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instalable en tu móvil</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers Banner */}
      <section className="bg-[#08150e] border-y border-emerald-900/50 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">1.000</span>
            <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Ejercicios Explicados</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">16</span>
            <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Categorías Tácticas</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">10</span>
            <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Bônus Profesionales</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">100%</span>
            <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">En Español y Offline</span>
          </div>
        </div>
      </section>

      {/* Everything Included Checklist */}
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Todo lo que Recibes al Unirte a FÚTBOL+
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Un ecosistema integral diseñado para transformar tus entrenamientos desde el primer día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {[
            {
              title: '1.000 Ejercicios Profesionales Completos',
              desc: 'Con diagramas interactivos, montaje, desarrollo paso a paso, puntos clave, errores y correcciones.',
            },
            {
              title: 'Los 10 Bônus Profesionales Exclusivos',
              desc: 'Preparación física integral, guía del entrenador, 100 sesiones completas, 150 tiros, 120 ejercicios de técnica, 100 tácticos y plan de 30 días.',
            },
            {
              title: 'Generador Inteligente de Sesiones',
              desc: 'Crea entrenamientos completos en 5 segundos según tu edad, nivel, duración y objetivo del día.',
            },
            {
              title: 'Buscador Ultra Rápido y Filtros Combinables',
              desc: 'Encuentra cualquier ejercicio al instante filtrando por jugadores, espacio, edad, intensidad o tags.',
            },
            {
              title: 'Pack de Fichas Técnicas Interactivas e Imprimibles',
              desc: 'Plantillas oficiales de evaluación de jugador, equipo, sesiones y microciclo semanal en formato A4.',
            },
            {
              title: 'Instalación Inmediata como App (PWA)',
              desc: 'Instálalo en tu teléfono iOS o Android como una app nativa, con acceso rápido desde tu pantalla de inicio.',
            },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#09170f] border border-emerald-900/40 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white text-sm">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison: Without vs With Football+ */}
      <section className="py-14 px-4 max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Cómo Cambia tu Día a Día como Entrenador?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Without */}
          <div className="p-6 rounded-2xl bg-[#180e0e] border border-red-900/50 space-y-3">
            <h3 className="text-base font-bold text-red-400 flex items-center gap-2">
              <span>✕</span>
              <span>Sin FÚTBOL+</span>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Horas perdidas buscando ejercicios sueltos y desorganizados en internet.</li>
              <li>• Repetición constante de los mismos ejercicios aburridos que desmotivan al equipo.</li>
              <li>• Falta de explicaciones técnicas claras, correcciones o variantes de dificultad.</li>
              <li>• Sin registro de evaluaciones de jugadores ni historial de entrenamientos.</li>
            </ul>
          </div>

          {/* With */}
          <div className="p-6 rounded-2xl bg-[#0b2416] border border-emerald-500/60 space-y-3 shadow-lg">
            <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
              <span>✓</span>
              <span>Con FÚTBOL+</span>
            </h3>
            <ul className="space-y-2 text-gray-200">
              <li>• 1.000 ejercicios categorizados listos para usar en cualquier momento.</li>
              <li>• Sesiones variadas, motivantes y con metodología profesional.</li>
              <li>• Fichas técnicas completas con diagramas, pasos y correcciones pedagógicas.</li>
              <li>• Generador automático de sesiones que te ahorra horas de planificación semanal.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <div className="p-6 rounded-2xl bg-[#09180f] border border-emerald-800/50 space-y-3">
          <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-black text-white">Garantía Incondicional de 7 Días</h3>
          <p className="text-xs text-gray-300 max-w-lg mx-auto leading-relaxed">
            Prueba FÚTBOL+ durante 7 días completos. Si por cualquier motivo sientes que no revoluciona la calidad de tus entrenamientos, solicita el reembolso total sin preguntas.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-white">Preguntas Frecuentes</h2>
          <p className="text-xs text-gray-400">Todo lo que necesitas saber antes de empezar</p>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          {[
            {
              q: '¿Cómo accedo al contenido tras el pago?',
              a: 'Recibes acceso instantáneo inmediato. Puedes usarlo en tu navegador web o instalarlo con un solo clic como aplicación en tu móvil, tablet o computadora.',
            },
            {
              q: '¿Hay mensualidades o cargos recurrentes?',
              a: 'No. El pago de US$ 9,90 es único y te otorga acceso permanente de por vida a toda la biblioteca y a los 10 bonos.',
            },
            {
              q: '¿Funciona sin conexión a internet (offline)?',
              a: 'Sí. Gracias a la tecnología PWA, puedes instalar la aplicación en tu dispositivo y consultar todos los ejercicios, sesiones y fichas en el propio campo de fútbol sin necesidad de conexión.',
            },
            {
              q: '¿Para qué edades está recomendado?',
              a: 'Incluye ejercicios categorizados para todas las etapas: desde fútbol base (6-8 años, 9-11 años, 12-14 años) hasta juveniles y adultos senior.',
            },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#09170f] border border-emerald-950 space-y-1">
              <h3 className="font-bold text-white text-sm">{item.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Bottom CTA */}
      <section className="pt-8 pb-12 px-4 text-center max-w-xl mx-auto space-y-4">
        <button
          type="button"
          onClick={onEnterApp}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-black font-black text-lg shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>ENTRAR A LA APLICACIÓN FÚTBOL+</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
        <p className="text-xs text-gray-400">
          Haz clic arriba para acceder directamente a la biblioteca de ejercicios y todas las herramientas.
        </p>
      </section>
    </div>
  );
};
