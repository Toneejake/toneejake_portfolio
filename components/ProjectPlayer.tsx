import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Disc, ArrowLeft, ExternalLink, Clock, Calendar, X } from 'lucide-react';
import { PROJECT_ALBUMS } from '../constants';
import { ProjectAlbum, Project } from '../types';

const ProjectPlayer: React.FC = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<ProjectAlbum | null>(null);

    return (
        <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl flex flex-col h-[700px]">
            {/* Player Header / Controls Simulation */}
            <div className="h-16 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-6 shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">
                {selectedAlbum ? (
                    <AlbumView album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />
                ) : (
                    <AlbumGrid onSelect={setSelectedAlbum} />
                )}
            </div>

            {/* Now Playing Bar (Decorative) */}
            <div className="h-20 bg-zinc-950 border-t border-zinc-800 flex items-center px-6 shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded bg-zinc-800 ${selectedAlbum ? 'bg-cover bg-center' : ''}`}
                        style={{ backgroundImage: selectedAlbum ? `url(${selectedAlbum.cover})` : undefined }}
                    >
                        {!selectedAlbum && <Disc className="w-full h-full p-3 text-zinc-600" />}
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">
                            {selectedAlbum ? selectedAlbum.title : "Select an Album"}
                        </div>
                        <div className="text-xs text-zinc-500">
                            {selectedAlbum ? selectedAlbum.category : "Browse Projects"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-Components ---

const AlbumGrid = ({ onSelect }: { onSelect: (album: ProjectAlbum) => void }) => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6">My Project Playlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECT_ALBUMS.map((album) => (
                <div
                    key={album.id}
                    onClick={() => onSelect(album)}
                    className="group p-4 bg-zinc-900/40 hover:bg-zinc-800/60 rounded-xl transition-all cursor-pointer border border-transparent hover:border-zinc-700/50"
                >
                    <div className="aspect-square w-full mb-4 bg-zinc-800 rounded-lg shadow-lg overflow-hidden relative">
                        <img
                            src={album.cover}
                            alt={album.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <Play className="w-6 h-6 text-black fill-current ml-1" />
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-zinc-100 text-lg truncate">{album.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{album.category}</p>
                </div>
            ))}
        </div>
    </div>
);

const AlbumView = ({ album, onBack }: { album: ProjectAlbum; onBack: () => void }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
                onClick={onBack}
                className="mb-6 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Library
            </button>

            {/* Album Header */}
            <div className="flex flex-col md:flex-row gap-8 items-end mb-8">
                <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 shadow-2xl rounded-lg overflow-hidden bg-zinc-800">
                    <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pb-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-500 mb-2 block">Playlist</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">{album.title}</h1>
                    <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-4">{album.description}</p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                        <span className="text-white">John Kervin</span>
                        <span>•</span>
                        <span>{album.projects.length} Projects</span>
                    </div>
                </div>
            </div>

            {/* Projects List */}
            <div className="space-y-1">
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-2 text-sm text-zinc-500 border-b border-zinc-800 mb-2 uppercase tracking-wider font-medium">
                    <span className="w-8 text-center">#</span>
                    <span>Title</span>
                    <span className="pr-4">Tech</span>
                </div>
                {album.projects.map((project, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 rounded-lg hover:bg-white/5 items-center group cursor-pointer transition-colors"
                    >
                        <span className="w-8 text-center text-zinc-500 group-hover:text-emerald-500 font-mono text-sm">
                            {idx + 1}
                        </span>
                        <div>
                            <div className="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                                {project.title}
                            </div>
                            <div className="text-sm text-zinc-500 line-clamp-1">{project.description}</div>
                        </div>
                        <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            {project.tech.slice(0, 3).map(t => (
                                <span key={t} className="text-xs border border-zinc-700 px-2 py-0.5 rounded text-zinc-400">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Popup */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="h-64 overflow-hidden relative">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-6">
                                <div className="text-sm font-semibold text-emerald-400 mb-1">{selectedProject.category}</div>
                                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                            </div>
                        </div>

                        <div className="p-8 space-y-6">
                            <p className="text-zinc-300 leading-relaxed text-lg">
                                {selectedProject.description}
                            </p>

                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {selectedProject.link && (
                                <div className="pt-4 border-t border-zinc-800">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
                                    >
                                        View Project <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectPlayer;
