
import React, { useState } from 'react';

interface ConsultancyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ConsultancyModal: React.FC<ConsultancyModalProps> = ({ isOpen, onClose }) => {
    const [reason, setReason] = useState('');
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent('Consultoria');
        const bodyContent = `motivo de la consultoria: ${reason} - email de contacto: ${email}`;
        const body = encodeURIComponent(bodyContent);
        const mailtoLink = `mailto:aula.beta1@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
        onClose();
        setReason('');
        setEmail('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                        Agendar Consultoría
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Déjanos tus datos y el motivo de la consulta para ponernos en contacto.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
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

                        <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Motivo de la Consultoría
                            </label>
                            <textarea
                                id="reason"
                                className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none transition-all"
                                placeholder="Describe brevemente en qué podemos ayudarte..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex gap-3 justify-end pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-5 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-95"
                            >
                                Agendar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
