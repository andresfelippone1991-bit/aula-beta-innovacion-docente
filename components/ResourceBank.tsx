
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ResourceRequestModal } from './ResourceRequestModal';

const CATEGORIES = [
  {
    key: 'ia-planificacion',
    title: 'IA Y PLANIFICACIÓN',
    description: 'Secuencias didácticas y rúbricas en segundos.',
    icon: 'psychology',
    path: '/ia-planificacion'
  },
  {
    key: 'juegos-aula',
    title: 'JUEGOS DE AULA',
    description: 'Escape Rooms y trivias listas para usar.',
    icon: 'extension',
    path: '/juegos-aula'
  },
  {
    key: 'biblioteca-docente',
    title: 'BIBLIOTECA DOCENTE',
    description: 'Guías DUA, Normativa y Documentos esenciales.',
    icon: 'folder_open',
    path: '/biblioteca-docente'
  }
];

export const ResourceBank: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <ResourceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Banco de Recursos</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl">Herramientas listas para usar mañana en clase.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <Link to={cat.path} key={idx} className="group cursor-pointer text-center p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900 flex flex-col items-center">
              <div className="mb-6">
                <span className="material-icons-outlined text-[80px] text-[#2563eb] font-light">
                  {cat.icon}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#2563eb] mb-3 tracking-wide uppercase">
                {cat.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 font-medium font-serif leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-transform">
          <div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">¿Buscas algo específico?</h3>
            <p className="text-slate-600 dark:text-slate-400">Solicita un recurso a nuestra comunidad y lo diseñaremos por ti.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-primary/30 active:scale-95"
          >
            Solicitar Recurso
          </button>
        </div>
      </div>
    </section>
  );
};
