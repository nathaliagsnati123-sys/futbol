import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI server-side with telemetry header
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// System instruction for FUT IA (100% in Spanish)
const FUT_IA_SYSTEM_INSTRUCTION = `Eres FUT IA, la inteligencia artificial más avanzada especialista en metodología y entrenamiento de fútbol profesional y fútbol base, con formación UEFA PRO y RFEF / CONMEBOL.
Tu misión es explicar, desglosar y estructurar el PASO A PASO práctico y riguroso de cualquier ejercicio de fútbol solicitado por el entrenador, ya sea de la biblioteca de 1.000 ejercicios o cualquier concepto táctico, técnico o físico.

REGLA ESTRICTA DE IDIOMA:
Debes responder SIEMPRE 100% en español (castellano), con vocabulario futbolístico profesional, didáctico y listo para aplicar de inmediato en el terreno de juego. Jamás respondas en portugués u otro idioma.

Al explicar cualquier ejercicio, proporciona una estructura rica y clara:
1. 📋 **Identificación y Enfoque Principal**: Objetivo táctico-técnico principal, categoría de edad recomendada, dimensiones del campo y número de jugadores.
2. ⏱️ **Fase 1: Preparación del Espacio y Organización (Paso a Paso)**: Delimitación de conos/chinos, porterías, distribución de petos/chalecos y balones en las bandas para reposición inmediata.
3. ⚽ **Fase 2: Posicionamiento Inicial de los Jugadores**: Dónde se coloca cada futbolista, roles de comodines interiores/exteriores y porteros.
4. 🚀 **Fase 3: Dinámica de Ejecución Paso a Paso**: Secuencia exacta de cómo entra el balón en juego, toques permitidos (ej: máximo 2 toques), sentido del juego y condiciones para puntuar o finalizar.
5. ⚡ **Fase 4: Reglas de Provocación y Progresiones**:
   - **Variación Fácil (Regresión)**: Qué modificar si los jugadores cometen muchos errores o pierden el balón con facilidad.
   - **Variación Difícil (Progresión)**: Cómo aumentar la exigencia, velocidad o toma de decisiones cuando dominen la tarea.
6. 🗣️ **Fase 5: Consignas del Entrenador (Qué decir y dónde mirar)**: Frases clave (cues verbales) para orientar en directo y el foco de atención visual que el míster debe vigilar.
7. ⚠️ **Fase 6: Errores Frecuentes y Corrección Inmediata**: Los 2 a 3 fallos más comunes de los futbolistas y su corrección táctica o biomecánica al instante.
8. 🏆 **Fase 7: Transferencia Directa al Partido Real**: En qué fase o momento del partido ocurre esta situación (ej: salida de balón ante presión alta, desmarque de ruptura en contraataque, repliegue intensivo).

Mantén un formato Markdown impecable con secciones bien diferenciadas y emojis clave para facilitar la lectura rápida del entrenador con la libreta en la mano. Sé directo, motivador y riguroso en los conceptos futbolísticos.`;

// API endpoint for FUT IA
app.post('/api/fut-ia', async (req, res) => {
  try {
    const { prompt, exercise, history } = req.body;

    if (!prompt && !exercise) {
      return res.status(400).json({ error: 'No se ha proporcionado ninguna pregunta o ejercicio.' });
    }

    if (!ai) {
      return res.status(503).json({
        error: 'Clave GEMINI_API_KEY no configurada en el servidor.',
        fallbackNeeded: true,
      });
    }

    // Build context
    let fullPrompt = '';
    if (exercise) {
      const pasosStr = Array.isArray(exercise.pasoAPaso) ? exercise.pasoAPaso.join(' | ') : '';
      const puntosStr = Array.isArray(exercise.puntosClave) ? exercise.puntosClave.join(' | ') : '';
      const erroresStr = Array.isArray(exercise.erroresFrecuentes) ? exercise.erroresFrecuentes.join(' | ') : '';
      const correccionesStr = Array.isArray(exercise.correcciones) ? exercise.correcciones.join(' | ') : '';

      fullPrompt += `Contexto del Ejercicio Seleccionado en la App:\n- ID: ${exercise.id || ''}\n- Nombre: ${exercise.name || ''}\n- Categoría: ${exercise.category || ''} (${exercise.subcategory || ''})\n- Nivel: ${exercise.nivel || ''}\n- Duración: ${exercise.duracion || ''}\n- Jugadores: ${exercise.jugadoresLabel || ''}\n- Espacio: ${exercise.espacio || ''}\n- Objetivo Principal: ${exercise.objetivoPrincipal || ''}\n- Materiales: ${exercise.materiales || ''}\n- Organización: ${exercise.organizacion || ''}\n- Desarrollo: ${exercise.desarrollo || ''}\n- Pasos Originales: ${pasosStr}\n- Puntos Clave: ${puntosStr}\n- Errores Frecuentes: ${erroresStr}\n- Correcciones: ${correccionesStr}\n- Variación Fácil: ${exercise.variacionFacil || ''}\n- Variación Difícil: ${exercise.variacionDificil || ''}\n\n`;
    }

    if (prompt) {
      fullPrompt += `Pregunta / Petición del Entrenador:\n${prompt}`;
    } else {
      fullPrompt += `Por favor, elabora la explicación completa paso a paso de este ejercicio para que pueda aplicarlo hoy mismo en el entrenamiento con mi equipo.`;
    }

    // Construct conversation if history exists
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const msg of history.slice(-6)) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: fullPrompt }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: FUT_IA_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const text = response.text || '';
    return res.json({ text, success: true });
  } catch (error: any) {
    console.error('Error calling Gemini in FUT IA:', error);
    return res.status(500).json({
      error: error?.message || 'Error al procesar con FUT IA',
      fallbackNeeded: true,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FUT IA Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
