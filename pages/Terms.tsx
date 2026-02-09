import React from 'react';

export const Terms: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 dark:text-white">Términos y Condiciones</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="mb-4">Última actualización: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">1. Aceptación de los Términos</h2>
                    <p className="mb-4">
                        Al acceder y utilizar Aula Beta, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al servicio.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">2. Uso del Servicio</h2>
                    <p className="mb-4">
                        Te comprometes a utilizar el servicio solo para fines legales y de acuerdo con estos Términos. No debes usar el servicio de manera que pueda dañar, deshabilitar o sobrecargar nuestros servidores.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">3. Cuentas de Usuario</h2>
                    <p className="mb-4">
                        Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Aceptas notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">4. Propiedad Intelectual</h2>
                    <p className="mb-4">
                        El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Aula Beta y sus licenciantes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">5. Modificaciones</h2>
                    <p className="mb-4">
                        Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Intentaremos avisar con al menos 30 días de antelación antes de que los nuevos términos entren en vigor.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">6. Contacto</h2>
                    <p>
                        Si tienes alguna pregunta sobre estos Términos, por favor contáctanos.
                    </p>
                </section>
            </div>
        </div>
    );
};
