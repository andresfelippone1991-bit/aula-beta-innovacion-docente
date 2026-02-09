
import React, { useState } from 'react';

interface CommandCenterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CommandCenterModal: React.FC<CommandCenterModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent('Centro de Comando');
        const bodyContent = `Solicitud de Centro de Comando\n\nNombre: ${name}\nEmail: ${email}`;
        const body = encodeURIComponent(bodyContent);
        const mailtoLink = `mailto:aula.beta1@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
        onClose();
        setName('');
        setEmail('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Obtener Centro de Comando
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                        >
                            <span className="material-icons-round">close</span>
                        </button>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Completa tus datos para recibir información sobre nuestro Centro de Comando Educativo.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Nombre y Apellido
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                placeholder="Juan Pérez"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Email de Contacto
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                placeholder="tu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-95"
                            >
                                Solicitar Información
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
