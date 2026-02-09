
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b1d33] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Prepare su Institución para el Mañana
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              Agende una consultoría estratégica con nuestros especialistas en innovación educativa y descubra cómo transformar sus métricas.
            </p>
          </div>
          
          <div className="shrink-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-500/20 active:scale-95 whitespace-nowrap">
              AGENDAR CONSULTORÍA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
