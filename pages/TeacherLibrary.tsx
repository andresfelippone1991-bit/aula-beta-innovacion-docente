
import React from 'react';
import { Link } from 'react-router-dom';

export const TeacherLibrary: React.FC = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-wide">
                        BIBLIOTECA DOCENTE
                    </h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6 shadow-sm"></div>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Documentos esenciales, normativas y guías prácticas listas para descargar.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Guía DUA Práctica */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-icons-round text-4xl">description</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Guía DUA Práctica
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                            Checklist y estrategias para aplicar el Diseño Universal en el aula sin complicaciones.
                        </p>
                        <a
                            href="/documents/guia-dua.pdf"
                            download
                            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 w-full md:w-auto inline-block"
                        >
                            DESCARGAR PDF
                        </a>
                    </div>

                    {/* Card 2: Normativa Escolar */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-icons-round text-4xl">balance</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Normativa Escolar
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                            Accede al repositorio completo de leyes, estatutos y regímenes académicos actualizados.
                        </p>
                        <Link
                            to="/biblioteca-docente/normativa"
                            className="text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4 flex items-center gap-1"
                        >
                            Explorar Sección
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};
