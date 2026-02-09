import React, { useState } from 'react';
import { CommandCenterModal } from '../components/CommandCenterModal';

export const CoreFeatures: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#0B1120] py-24 sm:py-32 min-h-screen">
            <CommandCenterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-500">Funcionalidades Core</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Tu centro de comando educativo
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Nuestra plataforma unifica las herramientas dispersas en un flujo de trabajo coherente, diseñado específicamente para la realidad escolar.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                        >
                            Obtener Centro de Comando
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                    <div className="col-span-1 sm:col-span-2 relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 p-8 hover:border-blue-500/50 transition-colors duration-300">
                        <div className="max-w-md">
                            <div className="flex items-center gap-x-3 mb-4">
                                <div className="h-10 w-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Planificación Contextual</h3>
                            </div>
                            <p className="mt-2 text-gray-400">Diseña unidades curriculares completas adaptadas al nivel de tus estudiantes. La IA sugiere recursos, cronogramas y objetivos alineados.</p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-64 h-40 bg-blue-900/20 rounded-tl-xl border-t border-l border-blue-500/20 backdrop-blur-sm"></div>
                    </div>

                    <div className="col-span-1 relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 p-8 hover:border-blue-500/50 transition-colors duration-300">
                        <div className="h-10 w-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Insights en Vivo</h3>
                        <p className="mt-2 text-sm text-gray-400">Visualiza la progresión académica y detecta patrones de aprendizaje antes de que sean un problema.</p>
                        <div className="mt-8 flex justify-center">
                            <div className="space-y-2 w-full">
                                <div className="h-2 bg-gray-700 rounded-full w-full"><div className="h-2 bg-blue-500 rounded-full w-3/4"></div></div>
                                <div className="h-2 bg-gray-700 rounded-full w-full"><div className="h-2 bg-purple-500 rounded-full w-1/2"></div></div>
                                <div className="h-2 bg-gray-700 rounded-full w-full"><div className="h-2 bg-green-500 rounded-full w-5/6"></div></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-3xl bg-gray-900 border border-gray-800 p-8 hover:border-blue-500/50 transition-colors duration-300">
                        <h3 className="text-lg font-semibold text-white mb-2">Evaluación 360°</h3>
                        <p className="text-sm text-gray-400">Rúbricas, autoevaluación y pares.</p>
                    </div>

                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 rounded-3xl bg-gray-900 border border-gray-800 p-8 flex items-center justify-between hover:border-blue-500/50 transition-colors duration-300">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Compliance Educativo</h3>
                            <p className="text-sm text-gray-400 mt-1">Tus datos y los de tus alumnos están seguros. Cumplimos con estándares de privacidad.</p>
                        </div>
                        <div className="bg-green-900/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/20">Seguro</div>
                    </div>

                </div>
            </div>
        </section>
    );
};
