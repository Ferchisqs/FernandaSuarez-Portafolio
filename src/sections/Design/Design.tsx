import { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

interface GalleryProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  category: 'ux-ui' | 'illustration' | '3d';
  comingSoon?: boolean;
}

export const Design = () => {
  const { theme, language } = useTheme();
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<'ux-ui' | 'illustration' | '3d'>('ux-ui');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryProjects: GalleryProject[] = [
    // ── UX/UI ──────────────────────────────────────────────────────────────
    {
      id: 'ux1',
      title: t.uxWork1Title || 'Habits App',
      description: t.uxWork1Desc || 'Maquetado completo de una app móvil de hábitos: listado de rutinas, creación de hábitos, seguimiento diario y estadísticas de progreso.',
      thumbnail: '/design/ux-ui/habits/cover.png',
      images: [
        '/design/ux-ui/habits/1.png',
        '/design/ux-ui/habits/2.png',
        '/design/ux-ui/habits/3.png',
        '/design/ux-ui/habits/4.png',
        '/design/ux-ui/habits/5.png',
        '/design/ux-ui/habits/6.png',
      ],
      category: 'ux-ui',
    },
    {
      id: 'ux2',
      title: t.uxWork2Title || 'E-commerce Dashboard',
      description: t.uxWork2Desc || 'Panel administrativo para tienda online',
      thumbnail: '/design/ux-ui/dashboard/cover.png',
      images: ['/design/ux-ui/dashboard/1.png'],
      category: 'ux-ui',
      comingSoon: true,
    },
    {
      id: 'ux3',
      title: t.uxWork3Title || 'Sistema de Diseño',
      description: t.uxWork3Desc || 'Design system completo con componentes',
      thumbnail: '/design/ux-ui/design-system/cover.png',
      images: ['/design/ux-ui/design-system/1.png'],
      category: 'ux-ui',
      comingSoon: true,
    },
    {
      id: 'ux4',
      title: t.uxWork4Title || 'App de Salud',
      description: t.uxWork4Desc || 'Aplicación de seguimiento de salud y bienestar',
      thumbnail: '/design/ux-ui/health-app/cover.png',
      images: ['/design/ux-ui/health-app/1.png'],
      category: 'ux-ui',
      comingSoon: true,
    },
    {
      id: 'ux5',
      title: t.uxWork5Title || 'Red Social',
      description: t.uxWork5Desc || 'Diseño de interfaz para plataforma social',
      thumbnail: '/design/ux-ui/social/cover.png',
      images: ['/design/ux-ui/social/1.png'],
      category: 'ux-ui',
      comingSoon: true,
    },
    {
      id: 'ux6',
      title: t.uxWork6Title || 'Landing Page',
      description: t.uxWork6Desc || 'Diseño de página de aterrizaje responsive',
      thumbnail: '/design/ux-ui/landing/cover.png',
      images: ['/design/ux-ui/landing/1.png'],
      category: 'ux-ui',
      comingSoon: true,
    },

    // ── ILLUSTRATION ───────────────────────────────────────────────────────
    {
      id: 'ill1',
      title: t.illWork1Title || 'Iconos · Icons',
      description: t.illWork1Desc || 'Set de iconos personalizados para aplicación de mascotas',
      thumbnail: '/LogosMascotasVirtuales.png',
      images: [
        '/LogosMascotasVirtuales.png',
        '/design/illustration/icons/Elly_icon.png',
        '/design/illustration/icons/Paxolotl_icon.png',
        '/design/illustration/icons/Yami_icon.png',
        '/design/illustration/icons/Dexter_icon.png',
      ],
      category: 'illustration',
    },
    {
      id: 'ill2',
      title: t.illWork2Title || 'Mascotas Virtuales',
      description: t.illWork2Desc || 'Diseño de personajes y mascotas digitales',
      thumbnail: '/MascotasVirtuales.png',
      images: [
        '/MascotasVirtuales.png',
        '/design/illustration/pets/Dexter.png',
        '/design/illustration/pets/Paxolotl.png',
        '/design/illustration/pets/Yami.png',
        '/design/illustration/pets/Elly.png',
      ],
      category: 'illustration',
    },
    {
      id: 'ill3',
      title: t.illWork3Title || 'Logos',
      description: t.illWork3Desc || 'Diseño de logotipos e identidad visual',
      thumbnail: '/design/illustration/logos/cover.png',
      images: ['/design/illustration/logos/1.png'],
      category: 'illustration',
      comingSoon: true,
    },
    {
      id: 'ill4',
      title: t.illWork4Title || 'Concept Art',
      description: t.illWork4Desc || 'Arte conceptual para videojuegos',
      thumbnail: '/design/illustration/concept/cover.png',
      images: ['/design/illustration/concept/1.png'],
      category: 'illustration',
      comingSoon: true,
    },
    {
      id: 'ill5',
      title: t.illWork5Title || 'Stickers',
      description: t.illWork5Desc || 'Set de stickers animados para mensajería',
      thumbnail: '/design/illustration/stickers/cover.png',
      images: ['/design/illustration/stickers/1.png'],
      category: 'illustration',
      comingSoon: true,
    },
    {
      id: 'ill6',
      title: t.illWork6Title || 'Book Illustrations',
      description: t.illWork6Desc || 'Ilustraciones para libro infantil',
      thumbnail: '/design/illustration/book/cover.png',
      images: ['/design/illustration/book/1.png'],
      category: 'illustration',
      comingSoon: true,
    },

    // ── 3D ────────────────────────────────────────────────────────────────
    {
      id: '3d1',
      title: t.work3d1Title || 'Chibis',
      description: t.work3d1Desc || 'Colección de personajes chibi modelados en 3D en distintas poses y ángulos',
      thumbnail: '/design/3d/chibis/1.png',
      images: [
        '/design/3d/chibis/1.png',
        '/design/3d/chibis/2.png',
        '/design/3d/chibis/3.png',
        '/design/3d/chibis/4.png',
        '/design/3d/chibis/5.png',
      ],
      category: '3d',
    },
    {
      id: '3d2',
      title: t.work3d2Title || 'Mascotas 3D',
      description: t.work3d2Desc || 'Mascotas virtuales modeladas en 3D',
      thumbnail: '/design/3d/mascotas/1.png',
      images: [
        '/design/3d/mascotas/1.png',
        '/design/3d/mascotas/2.png'
      ],
      category: '3d',
    },
    {
      id: '3d3',
      title: t.work3d3Title || 'Guitarra 3D',
      description: t.work3d3Desc || 'Modelado 3D de guitarra',
      thumbnail: '/design/3d/guitarra/cover.png',
      images: ['/design/3d/guitarra/1.png'],
      category: '3d',
      comingSoon: true,
    },
    {
      id: '3d4',
      title: t.work3d4Title || 'Iconos 3D',
      description: t.work3d4Desc || 'Set de iconos modelados en 3D',
      thumbnail: '/design/3d/iconos/cover.png',
      images: ['/design/3d/iconos/1.png'],
      category: '3d',
      comingSoon: true,
    },
    {
      id: '3d5',
      title: t.work3d5Title || 'Product Visualization',
      description: t.work3d5Desc || 'Renders fotorrealistas de productos',
      thumbnail: '/design/3d/product/cover.png',
      images: ['/design/3d/product/1.png'],
      category: '3d',
      comingSoon: true,
    },
    {
      id: '3d6',
      title: t.work3d6Title || 'Low Poly Art',
      description: t.work3d6Desc || 'Arte low poly y escenas estilizadas',
      thumbnail: '/design/3d/lowpoly/cover.png',
      images: ['/design/3d/lowpoly/1.png'],
      category: '3d',
      comingSoon: true,
    },
  ];

  const filteredProjects = galleryProjects.filter(
    (project) => project.category === selectedCategory
  );

  const openModal = (project: GalleryProject) => {
    if (project.comingSoon) return;
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen || !selectedProject) return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };
    if (modalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, selectedProject]);

  const getCategoryColor = () => {
    switch (selectedCategory) {
      case 'ux-ui':
        return theme === 'dark' ? '#EF4444' : '#3B82F6';
      case 'illustration':
        return theme === 'dark' ? '#F59E0B' : '#10B981';
      case '3d':
        return theme === 'dark' ? '#EC4899' : '#8B5CF6';
      default:
        return '#3B82F6';
    }
  };

  return (
    <section
      id="design"
      className={`min-h-screen py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            theme === 'dark' ? 'text-red-400' : 'text-blue-600'
          }`}
        >
          {t.designWork || 'Diseño'}
        </h2>

        <p
          className={`text-center text-lg mb-12 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {t.designWorkSubtitle || 'Proyectos creativos y trabajo de diseño'}
        </p>

        {/* Selector de categorías */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedCategory('ux-ui')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
              selectedCategory === 'ux-ui' ? 'scale-110 shadow-2xl' : 'opacity-60'
            }`}
            style={{
              backgroundColor:
                selectedCategory === 'ux-ui'
                  ? theme === 'dark' ? 'rgba(239,68,68,0.2)' : 'rgba(59,130,246,0.2)'
                  : theme === 'dark' ? 'rgba(31,41,55,0.5)' : 'rgba(243,244,246,0.5)',
              color:
                selectedCategory === 'ux-ui'
                  ? theme === 'dark' ? '#EF4444' : '#3B82F6'
                  : theme === 'dark' ? '#9CA3AF' : '#6B7280',
              border: `2px solid ${selectedCategory === 'ux-ui' ? getCategoryColor() : 'transparent'}`,
            }}
          >
            UX/UI WORK
          </button>

          <button
            onClick={() => setSelectedCategory('illustration')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
              selectedCategory === 'illustration' ? 'scale-110 shadow-2xl' : 'opacity-60'
            }`}
            style={{
              backgroundColor:
                selectedCategory === 'illustration'
                  ? theme === 'dark' ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)'
                  : theme === 'dark' ? 'rgba(31,41,55,0.5)' : 'rgba(243,244,246,0.5)',
              color:
                selectedCategory === 'illustration'
                  ? theme === 'dark' ? '#F59E0B' : '#10B981'
                  : theme === 'dark' ? '#9CA3AF' : '#6B7280',
              border: `2px solid ${selectedCategory === 'illustration' ? getCategoryColor() : 'transparent'}`,
            }}
          >
            {t.illustration || 'ILUSTRACIÓN'}
          </button>

          <button
            onClick={() => setSelectedCategory('3d')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
              selectedCategory === '3d' ? 'scale-110 shadow-2xl' : 'opacity-60'
            }`}
            style={{
              backgroundColor:
                selectedCategory === '3d'
                  ? theme === 'dark' ? 'rgba(236,72,153,0.2)' : 'rgba(139,92,246,0.2)'
                  : theme === 'dark' ? 'rgba(31,41,55,0.5)' : 'rgba(243,244,246,0.5)',
              color:
                selectedCategory === '3d'
                  ? theme === 'dark' ? '#EC4899' : '#8B5CF6'
                  : theme === 'dark' ? '#9CA3AF' : '#6B7280',
              border: `2px solid ${selectedCategory === '3d' ? getCategoryColor() : 'transparent'}`,
            }}
          >
            3D / EXPERIMENTS
          </button>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                project.comingSoon
                  ? 'cursor-default'
                  : 'cursor-pointer hover:scale-105'
              } ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
              style={{
                boxShadow: `0 10px 40px ${getCategoryColor()}40`,
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {project.comingSoon ? (
                /* Placeholder Próximamente */
                <div
                  className={`w-full h-full flex flex-col items-center justify-center gap-3 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                    style={{ borderColor: getCategoryColor(), color: getCategoryColor() }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: getCategoryColor() }}
                  >
                    Próximamente
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {project.title}
                  </span>
                </div>
              ) : (
                <>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                      <div className="mt-3 flex items-center gap-2 text-white/90 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{project.images.length} imágenes</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver proyecto
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Imagen + carrusel */}
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                      style={{ color: getCategoryColor() }}
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                      style={{ color: getCategoryColor() }}
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="space-y-6 text-white">
                <div>
                  <span
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                    style={{
                      backgroundColor: `${getCategoryColor()}40`,
                      color: getCategoryColor(),
                    }}
                  >
                    {selectedCategory === 'ux-ui' && 'UX/UI WORK'}
                    {selectedCategory === 'illustration' && (t.illustration || 'ILUSTRACIÓN').toUpperCase()}
                    {selectedCategory === '3d' && '3D / EXPERIMENTS'}
                  </span>

                  <h3
                    className="text-4xl font-bold mb-4"
                    style={{ color: getCategoryColor() }}
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.images.length > 1 && (
                  <div>
                    <p className="text-gray-400 text-sm mb-3">
                      Navegar por las imágenes del proyecto:
                    </p>
                    <div className="grid grid-cols-6 gap-2">
                      {selectedProject.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                          className={`aspect-square rounded-lg overflow-hidden transition-all ${
                            index === currentImageIndex
                              ? `ring-4 scale-110 ${
                                  selectedCategory === 'ux-ui'
                                    ? theme === 'dark' ? 'ring-red-400' : 'ring-blue-600'
                                    : selectedCategory === 'illustration'
                                    ? theme === 'dark' ? 'ring-yellow-400' : 'ring-green-500'
                                    : theme === 'dark' ? 'ring-pink-400' : 'ring-purple-600'
                                }`
                              : 'opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Miniatura ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'w-8' : 'w-2 opacity-50'
                        }`}
                        style={{ backgroundColor: getCategoryColor() }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        kbd { font-family: monospace; font-weight: 600; }
      `}</style>
    </section>
  );
};