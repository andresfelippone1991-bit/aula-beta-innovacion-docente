import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-white dark:bg-background-dark border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Nuestra Metodología: Innovación Real en el Aula</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-justify space-y-6">
          <p>
            En Aula Beta, definimos la <strong>innovación educativa real</strong> no como la simple adopción de herramientas tecnológicas aisladas, sino como la integración estratégica de la inteligencia artificial, la gamificación y la neuroeducación para resolver desafíos pedagógicos concretos. Nuestro objetivo principal es devolver al docente su recurso más valioso: el tiempo, transformando la teoría abstracta en estrategias inmediatamente aplicables en el salón de clases.
          </p>
          <p>
            Implementamos un marco de trabajo híbrido donde la <em>tecnología educativa</em> funciona como un exoesqueleto para el educador. Mediante el uso de IA en la planificación escolar y la generación automatizada de secuencias didácticas, logramos disminuir drásticamente la carga administrativa. Esto permite que el profesorado se concentre en lo verdaderamente fundamental: el vínculo humano, el acompañamiento continuo y la personalización del aprendizaje de sus estudiantes.
          </p>
          <p>
            Finalmente, nuestra filosofía de <strong>formación docente</strong> rechaza la excesiva burocracia documental y se enfoca en el "hacer". Cada recurso metodológico y propuesta gamificada que desarrollamos parte de los principios del Diseño Universal para el Aprendizaje (DUA), garantizando la inclusión y facilitando estrategias de enseñanza adaptativas y eficaces. Los pilares de nuestro modelo se resumen en las siguientes líneas de acción estratégica:
          </p>
        </div>

        <div className="mt-12 bg-slate-50 dark:bg-navy-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-primary mt-1">check_circle</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Integración Práctica de Inteligencia Artificial:</strong> 
                <span className="text-slate-600 dark:text-slate-400"> Automatización de la planificación pedagógica y desarrollo de materiales didácticos mediante modelos de IA generativa adaptados al currículo escolar.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-primary mt-1">check_circle</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Neuroeducación Aplicada:</strong> 
                <span className="text-slate-600 dark:text-slate-400"> Diseño de experiencias de aprendizaje basadas en el funcionamiento del cerebro para captar la atención y consolidar la memoria significativa a largo plazo.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-primary mt-1">check_circle</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Gamificación y Diseño Lúdico:</strong> 
                <span className="text-slate-600 dark:text-slate-400"> Implementación de dinámicas interactivas y retadores Escape Rooms que elevan dramáticamente la motivación intrínseca en estudiantes.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-primary mt-1">check_circle</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Optimización del Tiempo Docente:</strong> 
                <span className="text-slate-600 dark:text-slate-400"> Reducción de rutinas administrativas repetitivas mediante la curación de herramientas digitales, enfocando el esfuerzo en la didáctica y la enseñanza directa.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-round text-primary mt-1">check_circle</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Accesibilidad Universal (DUA):</strong> 
                <span className="text-slate-600 dark:text-slate-400"> Creación de recursos educativos flexibles que proveen múltiples formas de implicación, representación y expresión para asegurar aprendizajes inclusivos.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
