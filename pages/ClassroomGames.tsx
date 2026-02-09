
import React from 'react';

interface Game {
    id: number;
    title: string;
    description: string;
    img: string;
    url?: string;
}

const GAMES: Game[] = [
    {
        id: 1,
        title: "El Cordobazo",
        description: "Revive las jornadas de 1969. Una aventura histórica interactiva.",
        img: "https://files.catbox.moe/mxfus4.png",
        url: "/games/cordobazo.html"
    },
    {
        id: 2,
        title: "Fin de la Edad Media",
        description: "Sobrevive a la crisis feudal y descubre el nacimiento de la burguesía.",
        img: "https://files.catbox.moe/57wknw.png",
        url: "/games/edad-media.html"
    },
    {
        id: 3,
        title: "La Encrucijada",
        description: "No hay respuestas correctas. Pon a prueba tu brújula moral.",
        img: "https://files.catbox.moe/pix636.png",
        url: "/games/la-encrucijada.html"
    },
    {
        id: 4,
        title: "Sombras del Poder",
        description: "Un juego de roles ocultos sobre la dictadura y la resistencia.",
        img: "https://files.catbox.moe/47xit3.png",
        url: "/games/sombras-del-poder.html"
    },
    {
        id: 5,
        title: "Ministerio de la Escasez",
        description: "Gestiona la crisis económica antes de que se agote el tiempo.",
        img: "https://files.catbox.moe/45do3y.png",
        url: "/games/ministerio-escasez.html"
    }
];

export const ClassroomGames: React.FC = () => {
    return (
        <div className="pt-24 pb-24 min-h-screen bg-slate-50 dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 space-y-6">
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white uppercase tracking-wide">
                            Arcade Beta
                        </h1>
                        <div className="h-1.5 w-24 bg-[#2563eb] mx-auto rounded-full mt-4"></div>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-serif max-w-3xl mx-auto leading-relaxed">
                        Dinámicas rápidas para proyectar en el aula.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {GAMES.map((game) => (
                        <div key={game.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all flex flex-col">
                            {/* Image Placeholder */}
                            <div className="bg-gray-100 dark:bg-gray-950 aspect-video relative overflow-hidden group flex items-center justify-center">
                                <img
                                    src={game.img}
                                    alt={game.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-navy-950 dark:text-white">
                                    {game.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-serif text-lg leading-relaxed flex-1">
                                    {game.description}
                                </p>
                            </div>

                            <a
                                href={game.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-sm transition-colors text-center block"
                            >
                                Jugar Ahora
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
