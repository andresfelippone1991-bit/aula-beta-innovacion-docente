
import React from 'react';

const FEATURE_LIST = [
  {
    icon: 'school',
    title: 'Pedagogía Sólida',
    description: 'Estrategias basadas en evidencia científica aplicables mañana mismo en tu salón.'
  },
  {
    icon: 'psychology',
    title: 'Neuroeducación',
    description: 'Entendemos cómo aprende el cerebro para optimizar cada minuto de tus clases.'
  },
  {
    icon: 'rocket_launch',
    title: 'Tecnología Real',
    description: 'Herramientas digitales curadas y prácticas para potenciar tu labor docente.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-navy-900/50 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 dark:text-white">¿Qué es Aula Beta?</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16">
          Un espacio donde la tecnología y la pedagogía se dan la mano para ahorrarte tiempo administrativo y devolverte la pasión por enseñar. Menos burocracia, más conexión.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURE_LIST.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2 group cursor-default"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                <span className="material-icons-round text-3xl">{feat.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{feat.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
