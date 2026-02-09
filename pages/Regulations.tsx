
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Regulations: React.FC = () => {
    const navigate = useNavigate();

    const generalNorms = [
        {
            title: "Estatuto del Docente",
            desc: "Ley 10.579 y modificatorias (PDF Oficial).",
            url: "https://abc.gob.ar/secretarias/sites/default/files/2021-04/2%20copia_de_estatuto_del_docente.pdf"
        },
        {
            title: "Régimen Académico",
            desc: "Resolución 587/11 - Nivel Secundario.",
            url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-secundaria/educacion-secundaria/regimen-academico"
        },
        {
            title: "Régimen de Licencias",
            desc: "Decreto 688/93 y normativas médicas.",
            url: "https://abc.gob.ar/secretarias/sites/default/files/2021-06/Decreto%20688-93.pdf"
        },
    ];

    const curricularDesigns = [
        { title: "Nivel Inicial", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-inicial/educacion-inicial/disenos-curriculares-inicial" },
        { title: "Nivel Primario", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-primaria/educacion-primaria/disenos-curriculares" },
        { title: "Nivel Secundario", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-secundaria/educacion-secundaria/disenos-curriculares" },
        { title: "Jóvenes y Adultos", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-de-jovenes-adultos-y-adultos-mayores/educacion-de-5" },
        { title: "Técnico Profesional", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-tecnico-profesional/dir-de-ed-tecnica/planes-de-estudios" },
        { title: "Educación Especial", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-especial/educacion-especial/disenos-curriculares" },
        { title: "Educación Artística", url: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-artistica/educacion-artistica/disenos-curriculares" },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary mb-8 transition-colors group"
                >
                    <span className="material-icons-round mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Volver a Biblioteca
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-wide">
                        REPOSITORIO LEGAL
                    </h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Consulta normativa vigente y diseños curriculares de la Provincia de Buenos Aires.
                    </p>
                </div>

                {/* General Normative Section */}
                <div className="mb-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">
                        NORMATIVA GENERAL
                    </h2>
                    <div className="space-y-4">
                        {generalNorms.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-white dark:bg-slate-800 rounded-xl p-0 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer group hover:-translate-y-0.5 overflow-hidden flex"
                            >
                                <div className="w-2 bg-navy-900 dark:bg-primary group-hover:bg-blue-600 transition-colors"></div>
                                <div className="flex-1 p-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <span className="material-icons-round text-primary opacity-50 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                        open_in_new
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* NAP Section */}
                <div className="mb-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">
                        NÚCLEOS DE APRENDIZAJE PRIORITARIOS (NAP)
                    </h2>
                    <a
                        href="https://www.educ.ar/recursos/150199/coleccion-ncleos-de-aprendizajes-prioritarios-nap"
                        target="_blank"
                        rel="noreferrer"
                        className="block bg-white dark:bg-slate-800 rounded-xl p-0 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer group hover:-translate-y-0.5 overflow-hidden flex"
                    >
                        <div className="w-2 bg-navy-900 dark:bg-primary group-hover:bg-blue-600 transition-colors"></div>
                        <div className="flex-1 p-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                    Colección NAP
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Acceso a la colección completa de Núcleos de Aprendizajes Prioritarios en educ.ar.
                                </p>
                            </div>
                            <span className="material-icons-round text-primary opacity-50 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                open_in_new
                            </span>
                        </div>
                    </a>
                </div>

                {/* Curricular Designs Section */}
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">
                        DISEÑOS CURRICULARES POR NIVEL/MODALIDAD
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {curricularDesigns.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-white dark:bg-slate-800 rounded-xl p-0 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer group hover:-translate-y-0.5 overflow-hidden flex"
                            >
                                <div className="w-2 bg-navy-900 dark:bg-primary group-hover:bg-blue-600 transition-colors"></div>
                                <div className="flex-1 p-6 flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="material-icons-round text-primary opacity-50 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                        open_in_new
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
