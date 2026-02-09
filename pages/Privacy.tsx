import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 dark:text-white">Política de Privacidad</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="mb-4">Última actualización: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">1. Información que recopilamos</h2>
                    <p className="mb-4">
                        En Aula Beta, recopilamos información que nos proporcionas directamente cuando utilizas nuestros servicios, incluyendo:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Información de registro (nombre, correo electrónico).</li>
                        <li>Contenido que creas o subes a la plataforma.</li>
                        <li>Comunicaciones que mantienes con nosotros.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">2. Cómo utilizamos tu información</h2>
                    <p className="mb-4">
                        Utilizamos la información recopilada para:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                        <li>Personalizar tu experiencia.</li>
                        <li>Enviarte notificaciones técnicas y actualizaciones.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">3. Compartir información</h2>
                    <p className="mb-4">
                        No vendemos tu información personal a terceros. Solo compartimos información en las siguientes circunstancias:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Con tu consentimiento.</li>
                        <li>Para cumplir con obligaciones legales.</li>
                        <li>Para proteger nuestros derechos y seguridad.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">4. Contacto</h2>
                    <p>
                        Si tienes preguntas sobre esta Política de Privacidad, por favor contáctanos a través de nuestros canales oficiales.
                    </p>
                </section>
            </div>
        </div>
    );
};
