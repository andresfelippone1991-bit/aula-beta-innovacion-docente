
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Suscripcion');
    const body = encodeURIComponent(email);
    window.location.href = `mailto:aula.beta1@gmail.com?subject=${subject}&body=${body}`;
    setEmail('');
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-1 md:col-span-1">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/fYnj5qZY/Dise-o-sin-t-tulo.png"
                alt="Aula Beta Logo"
                referrerPolicy="no-referrer"
                className="h-12 w-auto"
              />
            </div>
            <p className="leading-relaxed">
              Empoderando docentes con tecnología que funciona. Únete a la comunidad que está redefiniendo el aula moderna.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                href="https://www.instagram.com/aula.beta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="instagram"
                  className="w-5 group-hover:scale-110 transition-transform"
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Explorar</h4>
            <ul className="space-y-4">
              <li>
                <a className="hover:text-primary transition-colors block" href="/ia-planificacion">Planificador IA</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors block" href="/juegos-aula">Juegos de Aula</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors block" href="/biblioteca-docente">Biblioteca Docente</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Innovación Semanal</h4>
            <p className="mb-6">Recibe un tip de IA y un recurso gratis cada lunes.</p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
              <input
                className="flex-1 bg-slate-900 border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary text-white"
                placeholder="tu@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md active:scale-95">
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Aula Beta. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="/privacidad">Privacidad</a>
            <a className="hover:text-white transition-colors" href="/terminos">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
