
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ebf2ff] dark:bg-blue-900/20 text-[#2563eb] dark:text-blue-400 rounded-full border border-transparent">
            <span className="h-2 w-2 rounded-full bg-[#2563eb] dark:bg-blue-400"></span>
            <span className="text-xs font-bold tracking-wider uppercase">COMUNIDAD BETA V2.0</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-[#1e293b] dark:text-white leading-[1.05] tracking-tight">
              Innovación real <br />
              <span className="text-[#2563eb]">para el aula real</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Recursos, estrategias y herramientas digitales para docentes que quieren transformar su enseñanza sin perder la cabeza.
            </p>
          </div>


        </div>

        {/* Right Content - Updated Image with No-Referrer Policy */}
        <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-in zoom-in duration-700">
          <div className="relative group">
            <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] dark:shadow-blue-900/20 border border-slate-100 dark:border-slate-700 transition-all duration-500 group-hover:scale-[1.01] overflow-hidden">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-slate-50 dark:bg-slate-900">
                <img
                  alt="Laptop con tecnología educativa holográfica"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://i.ibb.co/sdWBvncn/e01b5fed-5f83-4ba4-914b-1530c72c49b1.png"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[20%] bg-blue-400/20 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/5 blur-[120px] rounded-full"></div>

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce hidden md:block" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">IA Activa: Optimizando currículo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
