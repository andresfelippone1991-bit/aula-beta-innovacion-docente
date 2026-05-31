
import React, { useState } from 'react';
import { db } from '../src/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 1. Try to save to Firebase Firestore
      if (db) {
        try {
          await addDoc(collection(db, 'newsletter_subscriptions'), {
            email: email,
            createdAt: new Date()
          });
        } catch (dbError) {
          console.error('Firestore save failed, continuing to email:', dbError);
        }
      }

      // 2. Submit to FormSubmit.co
      const response = await fetch("https://formsubmit.co/ajax/aula.beta1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Nueva Suscripción al Newsletter - Aula Beta",
          _captcha: "false",
          _replyto: email,
          "Email del Suscriptor": email,
          "Fecha": new Date().toLocaleString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Reset status to idle after 5 seconds to let them subscribe another email if needed
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      console.error('Error in subscribe:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="space-y-6 col-span-1 md:col-span-1">
            <div className="flex items-center">
              <img
                src="/images/logo.webp"
                alt="Aula Beta Logo"
                referrerPolicy="no-referrer"
                className="h-12 w-auto"
                loading="lazy"
                width="48"
                height="48"
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
                  loading="lazy"
                  width="20"
                  height="20"
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

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Conceptos Clave</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Innovación Docente</li>
              <li>Gamificación Educativa</li>
              <li>Tecnología en el Aula</li>
              <li>IA para Profesores</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Innovación Semanal</h4>
            <p className="mb-6">Recibe un tip de IA y un recurso gratis cada lunes.</p>
            
            {status === 'success' ? (
              <div className="bg-blue-950/40 border border-blue-900/30 rounded-xl p-4 text-sm text-blue-400 font-medium animate-in fade-in duration-300 flex items-center gap-2">
                <span className="material-icons-round text-blue-400">check_circle</span>
                <span>¡Gracias por suscribirte! Te llegará un correo de confirmación.</span>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                <input
                  className="flex-1 bg-slate-900 border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary text-white text-sm"
                  placeholder="tu@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'submitting'}
                />
                <button 
                  disabled={status === 'submitting'}
                  className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-75 flex items-center justify-center gap-2 text-sm min-w-[130px]"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Suscribiendo...</span>
                    </>
                  ) : (
                    <span>Suscribirme</span>
                  )}
                </button>
              </form>
            )}
            
            {status === 'error' && (
              <p className="text-red-400 text-xs mt-2 animate-in fade-in">Ocurrió un error. Por favor, inténtalo de nuevo.</p>
            )}
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
