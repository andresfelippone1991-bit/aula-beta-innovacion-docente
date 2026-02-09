
import React, { useState } from 'react';

const PROMPTS = [
    {
        title: 'Generador de Rúbricas',
        description: 'Crea tablas de evaluación detalladas con criterios y niveles de desempeño en segundos.',
        icon: 'assignment',
        color: 'blue',
        prompt: `Actúa como un experto en didáctica y evaluación. 
Crea una rúbrica analítica para evaluar [TEMA O PROYECTO] dirigido a alumnos de [AÑO/EDAD].
La rúbrica debe tener 4 niveles de desempeño (Experto, Avanzado, En proceso, Inicial) y evaluar los siguientes criterios:
1. [CRITERIO 1]
2. [CRITERIO 2]
3. [CRITERIO 3]
Formatea la respuesta como una tabla clara.`
    },
    {
        title: 'Planificador DUA',
        description: 'Diseña una clase inclusiva siguiendo los principios del Diseño Universal para el Aprendizaje.',
        icon: 'looks', // Rainbow-like if available, or 'palette', 'looks' is similar to a rainbow shape
        color: 'indigo',
        prompt: `Actúa como un docente innovador. Diseña una planificación de clase de 80 minutos sobre el tema [TEMA] para alumnos de secundaria.
La estructura debe incluir:
1. Inicio (Gancho motivacional).
2. Desarrollo (Actividad principal diversificada).
3. Cierre (Ticket de salida o reflexión).
Asegúrate de aplicar pautas DUA ofreciendo múltiples formas de representación y expresión.`
    }
];

const ASSISTANTS = [
    {
        title: 'Planificador Docente',
        description: 'Diseña secuencias didácticas completas alineadas al currículo. Olvídate de la burocracia y enfócate en la estrategia.',
        icon: 'calendar_month',
        url: 'https://planificador-docente-ai.vercel.app/'
    },
    {
        title: 'Pensamiento Visible',
        description: 'Genera rutinas y actividades basadas en el Proyecto Zero de Harvard para profundizar la comprensión de tus estudiantes.',
        icon: 'visibility',
        url: 'https://rutinasdepensamiento.netlify.app/'
    }
];

export const IAPlanning: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="pt-24 pb-24 min-h-screen bg-slate-50 dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 space-y-6">
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white uppercase tracking-wide">
                            Herramientas e IA
                        </h1>
                        <div className="h-1.5 w-24 bg-[#2563eb] mx-auto rounded-full mt-4"></div>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-serif max-w-3xl mx-auto leading-relaxed">
                        Prompts probados y asistentes virtuales para automatizar tu trabajo docente.
                    </p>
                </div>

                {/* Banco de Prompts */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-navy-950 dark:text-white text-center mb-12 uppercase tracking-wide">
                        Banco de Prompts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {PROMPTS.map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                        <span className="material-icons-round text-4xl text-[#2563eb]">{item.icon}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-navy-950 dark:text-white text-center mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-center mb-8 leading-relaxed font-serif">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider">Copia y pega en tu IA:</span>
                                        {copiedIndex === idx && (
                                            <span className="text-xs text-green-600 font-bold animate-pulse">¡Copiado!</span>
                                        )}
                                    </div>
                                    <div
                                        className="relative group cursor-pointer"
                                        onClick={() => handleCopy(item.prompt, idx)}
                                    >
                                        <div className="bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-6 text-sm text-slate-600 dark:text-slate-300 font-mono leading-relaxed h-64 overflow-y-auto hover:border-[#2563eb] transition-colors">
                                            {item.prompt}
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                                            <span className="material-icons-round text-slate-400 text-sm">content_copy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Asistentes Especializados */}
                <div>
                    <h2 className="text-3xl font-bold text-navy-950 dark:text-white text-center mb-12 uppercase tracking-wide">
                        Asistentes Especializados
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {ASSISTANTS.map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center h-full">
                                {/* Icon */}
                                <div className="mb-8">
                                    <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                        <span className="material-icons-round text-5xl text-[#2563eb]">{item.icon}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#2563eb] mb-6">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-serif text-lg">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        ABRIR ASISTENTE
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
