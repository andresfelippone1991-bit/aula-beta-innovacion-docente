
import React from 'react';
import { Link } from 'react-router-dom';

export const InstitutionalEcosystem: React.FC = () => {
  return (
    <section className="bg-[#051122] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-blue-400 text-xl">auto_awesome</span>
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Ecosistema IA Institucional</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Optimización del tiempo <br />
            <span className="text-slate-500">frente al aula.</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            Nuestra infraestructura de IA no solo ayuda al docente; genera una base de conocimiento institucional rica y estructurada para la toma de decisiones basada en evidencia.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <span className="material-icons-round text-blue-500">speed</span>
                </div>
                <h4 className="font-bold text-slate-200">Ahorro de Tiempo</h4>
              </div>
              <p className="text-sm text-slate-500 leading-snug">15h semanales por docente en tareas administrativas.</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <span className="material-icons-round text-blue-500">assignment</span>
                </div>
                <h4 className="font-bold text-slate-200">Consistencia Curricular</h4>
              </div>
              <p className="text-sm text-slate-500 leading-snug">Alineación vertical automática en todos los grados.</p>
            </div>
          </div>

          <Link to="/funcionalidades-core" className="bg-white text-[#051122] px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all active:scale-95 group inline-flex">
            EXPLORAR CAPACIDADES <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Right Side: Dashboard Mockup */}
        <div className="flex-1 relative">
          <div className="bg-[#0b1d33] border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 opacity-40">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              </div>
              <div className="text-[10px] font-mono tracking-widest uppercase">admin-dashboard.aulabeta.cloud</div>
            </div>

            {/* Chart Area */}
            <div className="bg-[#051122] rounded-2xl p-6 border border-slate-800/50 mb-6">
              <div className="flex items-end justify-between h-32 gap-3">
                {[45, 60, 55, 75, 95, 80, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-600/80 rounded-t-sm hover:bg-blue-500 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#051122] rounded-xl p-5 border border-slate-800/50">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Impacto Global</div>
                <div className="text-2xl font-bold">98.4%</div>
              </div>
              <div className="bg-[#051122] rounded-xl p-5 border border-slate-800/50">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Eficiencia IA</div>
                <div className="text-2xl font-bold">2.4<span className="text-slate-500 text-lg">x</span></div>
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};
