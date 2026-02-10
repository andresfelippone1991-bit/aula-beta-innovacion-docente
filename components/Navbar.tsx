
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext';
import { auth } from '../src/firebase/config';
import { signOut } from 'firebase/auth';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const { user } = useAuth();

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-navy-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group cursor-pointer">
            <img
              src="https://i.ibb.co/fYnj5qZY/Dise-o-sin-t-tulo.png"
              alt="Aula Beta Logo"
              referrerPolicy="no-referrer"
              className="h-12 w-auto transition-transform group-hover:scale-105"
              width="48"
              height="48"
            />
            <span className="ml-3 text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
              Aula Beta
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 ml-auto mr-6">
            <Link to="/ia-planificacion" className={`${isActive('/ia-planificacion')} transition-colors font-medium`}>
              IA Planificación
            </Link>

            <div className="relative group">
              <button className={`${location.pathname.includes('/juegos-aula') ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'} hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center gap-1 py-4`}>
                Gamificación <span className="material-icons-round text-sm group-hover:rotate-180 transition-transform">keyboard_arrow_down</span>
              </button>

              <div className="absolute top-full right-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 text-right">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden text-left">
                  <Link
                    to="/juegos-aula"
                    className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors border-b border-slate-100 dark:border-slate-800"
                  >
                    <div className="font-medium text-primary">Ver Catálogo Completo</div>
                  </Link>
                  <a href="/games/cordobazo.html" target="_blank" className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">El Cordobazo</a>
                  <a href="/games/edad-media.html" target="_blank" className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Fin de la Edad Media</a>
                  <a href="/games/la-encrucijada.html" target="_blank" className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">La Encrucijada</a>
                  <a href="/games/sombras-del-poder.html" target="_blank" className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Sombras del Poder</a>
                  <a href="/games/ministerio-escasez.html" target="_blank" className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Ministerio de la Escasez</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`${location.pathname.includes('/biblioteca-docente') ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'} hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center gap-1 py-4`}>
                Biblioteca Docente <span className="material-icons-round text-sm group-hover:rotate-180 transition-transform">keyboard_arrow_down</span>
              </button>

              <div className="absolute top-full right-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                  <Link
                    to="/biblioteca-docente"
                    className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                  >
                    <div className="font-medium">Recursos Generales</div>
                    <div className="text-xs text-slate-500 font-normal">Guías DUA y Documentos</div>
                  </Link>
                  <Link
                    to="/biblioteca-docente/normativa"
                    className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors border-t border-slate-100 dark:border-slate-800"
                  >
                    <div className="font-medium">Repositorio Legal</div>
                    <div className="text-xs text-slate-500 font-normal">Normativa, NAP y Diseños</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <span className="material-icons-round text-xl text-yellow-400">light_mode</span>
              ) : (
                <span className="material-icons-round text-xl text-slate-700">dark_mode</span>
              )}
            </button>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="hidden sm:block text-slate-700 dark:text-slate-300 font-medium">Hola, {user.displayName?.split(' ')[0] || 'Docente'}</span>
                <button
                  onClick={handleLogout}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full font-semibold transition-all"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="hidden sm:block bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-primary/30">
                  Acceso Docente
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
