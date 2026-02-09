
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export const PlannerAI: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un asistente experto para docentes. Crea un esquema breve de una unidad didáctica sobre: ${prompt}. Incluye: 1. Objetivo principal, 2. Tres actividades clave, 3. Un criterio de evaluación. Responde en un formato limpio y profesional para un profesor.`,
      });
      setResult(response.text || 'No se pudo generar el contenido.');
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setResult('Lo sentimos, hubo un error al conectar con la IA. Por favor, intenta de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Beta Planner AI</span>
          <h2 className="text-5xl font-bold leading-tight">
            Planifica tu próxima <br /> unidad en <span className="text-blue-400">segundos.</span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
            Nuestra IA ayuda a crear secuencias didácticas, rúbricas de evaluación y objetivos de aprendizaje alineados con la normativa. Deja que la tecnología haga el trabajo pesado.
          </p>
          <ul className="space-y-4">
            {['Generación de Rúbricas Automáticas', 'Secuencias alineadas al DUA', 'Objetivos personalizados por nivel'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <span className="material-icons-round text-primary">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://planificador-docente-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-xl shadow-blue-500/20 active:scale-95 inline-flex"
          >
            Probar Planner AI <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div className="flex-1 relative z-10">
          <div className="bg-slate-50 rounded-2xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-xl overflow-hidden shadow-inner border border-slate-200 min-h-[400px]">
              <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono tracking-tight">planner.aulabeta.com</div>
                <div className="w-10"></div>
              </div>
              <div className="p-8 text-slate-900">
                <h4 className="text-lg font-bold mb-4">¿Qué quieres enseñar hoy?</h4>
                <div className="relative flex items-center mb-6">
                  <input
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-primary focus:border-primary pr-12 transition-all"
                    placeholder="Ej: Ciclo del agua, Revolución Francesa..."
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 transition-colors"
                  >
                    {loading ? (
                      <span className="material-icons-round animate-spin text-sm">sync</span>
                    ) : (
                      <span className="material-icons-round">auto_awesome</span>
                    )}
                  </button>
                </div>

                <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50 min-h-[200px] max-h-[300px] overflow-y-auto">
                  {result ? (
                    <div className="text-slate-700 text-sm whitespace-pre-line animate-in fade-in slide-in-from-top-2 duration-500">
                      {result}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm italic">
                      {loading ? 'Consultando con el oráculo pedagógico...' : 'Ingresa un tema para ver la magia de la IA'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Decorative blurs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 blur-[60px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
