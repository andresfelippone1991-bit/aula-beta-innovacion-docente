
import React, { useState } from 'react';

interface ResourceRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ResourceRequestModal: React.FC<ResourceRequestModalProps> = ({ isOpen, onClose }) => {
    const [requestText, setRequestText] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent('Recurso Personalizado');
        const body = encodeURIComponent(requestText);
        const mailtoLink = `mailto:aula.beta1@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
        onClose();
        setRequestText('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                        Solicitar Recurso
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Cuéntanos qué necesitas y nuestro equipo lo diseñará para la comunidad.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none mb-6 transition-all"
                            placeholder="Ej: Necesito una rúbrica para evaluar exposiciones orales en secundaria..."
                            value={requestText}
                            onChange={(e) => setRequestText(e.target.value)}
                            required
                            autoFocus
                        />

                        <div className="flex gap-3 justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-5 py-2.5 rounded-xl font-bold text-white bg-primary hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 active:scale-95"
                            >
                                Enviar Solicitud
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
