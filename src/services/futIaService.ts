import { Exercise } from '../types';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  exerciseId?: string;
  exerciseName?: string;
}

export async function askFutIa(
  prompt: string,
  exercise?: Exercise | null,
  history: ChatMessage[] = []
): Promise<string> {
  try {
    const response = await fetch('/api/fut-ia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        exercise: exercise
          ? {
              id: exercise.id,
              name: exercise.name,
              category: exercise.category,
              subcategory: exercise.subcategory,
              nivel: exercise.nivel,
              duracion: exercise.duracion,
              jugadoresLabel: exercise.jugadoresLabel,
              espacio: exercise.espacio,
              materiales: exercise.materiales,
              organizacion: exercise.organizacion,
              desarrollo: exercise.desarrollo,
              objetivoPrincipal: exercise.objetivoPrincipal,
              objetivoTecnico: exercise.objetivoTecnico,
              objetivoTatico: exercise.objetivoTatico,
              pasoAPaso: exercise.pasoAPaso,
              puntosClave: exercise.puntosClave,
              erroresFrecuentes: exercise.erroresFrecuentes,
              correcciones: exercise.correcciones,
              variacionFacil: exercise.variacionFacil,
              variacionDificil: exercise.variacionDificil,
              progresion: exercise.progresion,
              regresion: exercise.regresion,
            }
          : undefined,
        history: history.map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          content: m.content,
        })),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.text) {
        return data.text;
      }
    }
  } catch (err) {
    console.warn('FUT IA server endpoint unreachable or error, using local football coach engine:', err);
  }

  // Resilient Local UEFA Pro Football Engine Fallback
  return generateLocalExplanation(prompt, exercise);
}

function generateLocalExplanation(prompt: string, exercise?: Exercise | null): string {
  if (exercise) {
    const cat = exercise.category || 'Táctica';
    const subcat = exercise.subcategory || '';
    const name = exercise.name;
    const id = exercise.id;
    const dur = exercise.duracion || '15 min';
    const players = exercise.jugadoresLabel || '8-12';
    const space = exercise.espacio || 'Medio';
    const obj = exercise.objetivoPrincipal || 'Mejorar la toma de decisiones y la velocidad de circulación del balón';
    const objTec = exercise.objetivoTecnico ? `- **Objetivo Técnico:** ${exercise.objetivoTecnico}\n` : '';
    const objTat = exercise.objetivoTatico ? `- **Objetivo Táctico:** ${exercise.objetivoTatico}\n` : '';
    const materiales = exercise.materiales || 'Conos/chinos, petos y balones';
    const organizacion = exercise.organizacion || 'Delimitar el espacio de juego con conos en las 4 esquinas y situar balones en los fondos para una reposición inmediata.';
    const desarrollo = exercise.desarrollo || 'Circulación fluida de balón buscando constantemente el tercer hombre y la fijación para superar líneas.';
    const pasos = Array.isArray(exercise.pasoAPaso) && exercise.pasoAPaso.length > 0
      ? exercise.pasoAPaso.map((p, i) => `${i + 1}. **Paso ${i + 1}:** ${p}`).join('\n')
      : '1. **Paso 1 (Posicionamiento):** Cada jugador ocupa su zona designada manteniendo líneas de pase abiertas.\n2. **Paso 2 (Dinámica):** Circulación de la posesión con un máximo de 2 toques.\n3. **Paso 3 (Objetivo):** Conectar pases entre líneas y buscar el cambio de orientación o finalización.';
    const puntos = Array.isArray(exercise.puntosClave) && exercise.puntosClave.length > 0
      ? exercise.puntosClave.map((p) => `- 🎯 ${p}`).join('\n')
      : '- 🎯 Perfil corporal orientado antes del control\n- 🎯 Escaneo visual periférico previo a recibir la pelota';
    const errores = Array.isArray(exercise.erroresFrecuentes) && exercise.erroresFrecuentes.length > 0
      ? exercise.erroresFrecuentes.map((e, i) => `- ✕ **Error:** ${e}\n  - ✓ **Corrección:** ${exercise.correcciones?.[i] || 'Corregir orientación corporal y velocidad en la toma de decisiones'}`).join('\n')
      : '- ✕ **Error:** Quedarse estático esperando el balón al pie\n  - ✓ **Corrección:** Atacar el balón y desmarcarse en el intervalo';
    const regr = exercise.regresion || exercise.variacionFacil || 'Aumentar las dimensiones del espacio en 5 metros o conceder toques libres a los comodines.';
    const prog = exercise.progresion || exercise.variacionDificil || 'Limitar a 1 solo toque obligatorio por jugador o reducir el tiempo máximo de finalización a 6 segundos tras recuperación.';

    return `### ⚽ FUT IA • Guía Paso a Paso: ${name} (${id})

---

#### 📋 1. Identificación y Enfoque Principal
- **Objetivo Primario:** ${obj}
${objTec}${objTat}- **Categoría:** ${cat} • **Subcategoría:** ${subcat}
- **Nivel:** **${exercise.nivel || 'Intermedio'}** • **Espacio:** **${space}** • **Jugadores:** **${players}** • **Duración:** **${dur}**
- **Materiales Necesarios:** ${materiales}

---

#### ⏱️ 2. Fase 1: Preparación del Campo y Organización
${organizacion}

---

#### ⚽ 3. Fase 2: Posicionamiento Inicial de los Jugadores
- Distribuir a los futbolistas con petos de colores diferenciados.
- Ubicar comodines interiores y exteriores para asegurar amplitud y profundidad en salida.
- Poner en juego el primer balón desde el entrenador o el iniciador de la posesión.

---

#### 🚀 4. Fase 3: Dinámica de Ejecución Paso a Paso
${desarrollo}

${pasos}

---

#### ⚡ 5. Fase 4: Reglas de Provocación y Progresiones
- **🟢 Regresión / Variante Más Fácil:** ${regr}
- **🔴 Progresión / Variante Más Exigente:** ${prog}

---

#### 🗣️ 6. Fase 5: Consignas del Entrenador (Qué decir y dónde mirar)
${puntos}

---

#### ⚠️ 7. Fase 6: Errores Frecuentes y Correcciones Inmediatas
${errores}

---

#### 🏆 8. Fase 7: Transferencia Directa al Partido Real
¡Tarea fundamental para automatizar la velocidad en la toma de decisiones y la compostura táctica bajo máxima presión en competición oficial!`;
  }

  // General football prompt response
  return `### ⚽ FUT IA • Entrenador y Consultor Táctico

¡Hola, Míster! He analizado tu consulta con metodología UEFA PRO y dirección deportiva de alto rendimiento:

**"${prompt}"**

---

#### 📋 Estructura de Aplicación en la Sesión de Entrenamiento

1. **Objetivo Metodológico Central:**
   Desarrollar la toma de decisiones ultra rápida bajo presión temporal y espacial, integrando componentes técnicos (pase tenso, control orientado, finalización) y tácticos (ocupación racional de intervalos y líneas de pase).

2. **Paso a Paso de Organización y Ejecución:**
   - **Paso 1 (Delimitación):** Marca el rectángulo de juego según la categoría (ej: 20x20m para fútbol base, 35x30m para categoría sénior). Dispersa balones en las bandas con los ayudantes para mantener una intensidad altísima sin interrupciones.
   - **Paso 2 (Explicación a la Plantilla):** Explica la tarea en menos de 60 segundos con una demostración visual clara: indica de dónde arranca el balón y cómo se puntúa.
   - **Paso 3 (Arranque Dinámico):** Comienza con intensidad media durante los primeros 3 minutos para afianzar el mecanismo y eleva la exigencia al 100% en los bloques posteriores.
   - **Paso 4 (Gatillos de Transición):** Aplica la regla de los 5 segundos de presión tras pérdida o búsqueda directa de portería rival.

3. **Correcciones Clave del Entrenador en Directo:**
   - Exige postura atlética (rodillas semiflexionadas, centro de gravedad bajo y perfilado hacia el campo contrario).
   - Comunicación verbal constante: el jugador que no orienta con la voz, regala ventajas al rival.
   - Perfil corporal abierto antes del primer contacto con la pelota.

*Consejo: ¡También puedes seleccionar cualquiera de los 1.000 ejercicios de nuestra biblioteca para que genere el paso a paso detallado al instante!*`;
}
