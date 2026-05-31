
import React, { useState, useEffect } from 'react';
import { db } from '../src/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

interface CommandCenterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CommandCenterModal: React.FC<CommandCenterModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    // Reset state on open/close
    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setName('');
            setEmail('');
            setErrorMsg('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMsg('');

        try {
            // 1. Try to save to Firebase Firestore
            if (db) {
                try {
                    await addDoc(collection(db, 'command_center_requests'), {
                        name: name,
                        email: email,
                        createdAt: new Date(),
                        status: 'new'
                    });
                } catch (dbError) {
                    console.error('Firestore save failed, continuing to email submission:', dbError);
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
                    _subject: "Nueva Solicitud de Centro de Comando - Aula Beta",
                    _captcha: "false",
                    _replyto: email,
                    "Nombre": name,
                    "Email de Contacto": email,
                    "Fecha": new Date().toLocaleString()
                })
            });

            if (response.ok) {
                setStatus('success');
                // Automatically close after 3 seconds
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                throw new Error("No se pudo procesar la solicitud por correo. Inténtalo de nuevo.");
            }
        } catch (error: any) {
            console.error('Error submitting command center request:', error);
            setStatus('error');
            setErrorMsg(error.message || 'Ocurrió un error al enviar tu solicitud. Inténtalo más tarde.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100 border border-slate-100 dark:border-slate-700/50"
                onClick={(e) => e.stopPropagation()}
            >
                {status === 'success' ? (
                    <div className="p-8 text-center flex flex-col items-center justify-center min-h-[360px] animate-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-500 dark:text-green-400 border border-green-100 dark:border-green-800/30 shadow-inner">
                            <span className="material-icons-round text-5xl animate-scale">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            ¡Solicitud Recibida!
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                            Tus datos han sido registrados. Nos pondremos en contacto contigo a la brevedad para brindarte información del Centro de Comando.
                        </p>
                    </div>
                ) : (
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Obtener Centro de Comando
                            </h3>
                            <button
                                onClick={onClose}
                                disabled={status === 'submitting'}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg p-1"
                            >
                                <span className="material-icons-round text-2xl">close</span>
                            </button>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                            Completa tus datos para recibir información sobre nuestro Centro de Comando Educativo.
                        </p>

                        {status === 'error' && (
                            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 p-3 rounded-xl mb-4 text-sm font-medium">
                                {errorMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                                    Nombre y Apellido
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600 text-sm"
                                    placeholder="Juan Pérez"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                                    Email de Contacto
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600 text-sm"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="pt-2 flex gap-3 justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    disabled={status === 'submitting'}
                                    className="px-5 py-2.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors disabled:opacity-50 text-sm"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="px-6 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-95 disabled:opacity-70 disabled:hover:bg-blue-600 flex items-center justify-center gap-2 text-sm min-w-[150px]"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <span>Solicitar Información</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
