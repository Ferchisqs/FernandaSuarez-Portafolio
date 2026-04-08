import { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

interface Project {
  id: string;
  title: string;
  titleColor: string;
  description: string;
  type: 'mobile' | 'web';
  color: string;
  images: string[];
  exhibitionImages?: string[];
  technologies: string[];
  link?: string;
  problem: string;
  solution: string;
  achievements: string[];
  process: string[];
  duration: string;
  role: string;
}

export const Projects = () => {
  const { theme, language } = useTheme();
  const t = translations[language];
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({
    xuma: 0,
    gsoft: 0,
    tzedaka: 0,
  });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'xuma',
      title: "XUMA'A",
      titleColor: '#4ADE80',
      description: t.xumaDescription,
      type: 'mobile',
      color: 'rgba(74, 222, 128, 0.3)',
      images: [
        '/projects/Xuma/XumaPart1.jpeg',
        '/projects/Xuma/XumaPart2.jpeg',
        '/projects/Xuma/XumaPart3.jpeg',
        '/projects/Xuma/XumaPart4.jpeg',
        '/projects/Xuma/XumaPart5.jpeg',
        '/projects/Xuma/XumaPart6.jpeg',
        '/projects/Xuma/XumaPart7.jpeg',
      ],
      exhibitionImages: [
        '/projects/Xuma/Stand1.jpeg',
        '/projects/Xuma/Stand2.jpeg',
        '/projects/Xuma/Premio.jpeg',
        '/projects/Xuma/Presentacion.jpeg',
      ],
      technologies: ['Dart', 'Firebase', 'Figma'],
      problem: 'Se necesitaba una forma innovadora y atractiva de crear conciencia ambiental en jóvenes, utilizando tecnología que captara su atención de manera lúdica.',
      solution: 'Desarrollo de una app móvil con mascotas virtuales que promueve el cuidado del medio ambiente. Las mascotas reaccionan a las acciones ecológicas del usuario, creando un vínculo emocional con la causa ambiental.',
      achievements: [
        '🏆 Primer lugar en convocatoria de proyectos',
        'Stand oficial en presentación pública del proyecto',
        'Alto engagement con las mascotas virtuales diseñadas',
        'Reconocimiento por innovación en conciencia ambiental',
      ],
      process: [
        'Investigación sobre gamificación y conciencia ambiental',
        'Diseño de personajes de mascotas virtuales atractivas',
        'Desarrollo de wireframes y prototipos en Figma',
        'Implementación de la app con dart y Firebase',
        'Diseño de material promocional para el stand',
        'Presentación oficial y participación en convocatoria',
      ],
      duration: '4 meses',
      role: 'UX/UI Designer & Frontend Developer',
    },
    {
      id: 'gsoft',
      title: 'GSOFT',
      titleColor: '#FF8C00',
      description: t.gsoftDescription,
      type: 'web',
      color: 'rgba(251, 146, 60, 0.3)',
      images: [
        '/projects/GSOFT/1.png',
        '/projects/GSOFT/2.png',
        '/projects/GSOFT/3.png',
        '/projects/GSOFT/4.png',
        '/projects/GSOFT/5.png',
        '/projects/GSOFT/6.png',
      ],
      exhibitionImages: [''],
      technologies: ['React', 'TypeScript', 'MUI', 'Figma'],
      problem: 'El proyecto GSOFT necesitaba una landing page atractiva que comunicara efectivamente las funcionalidades y convirtiera visitantes en usuarios.',
      solution: 'Diseño y desarrollo completo de landing page moderna con secciones estratégicas mostrando el sistema de entrada QR, beneficios para gimnasios y proceso de registro.',
      achievements: [
        'Landing page completamente responsive y optimizada',
        'Diseño que destaca el sistema innovador de QR',
        'Secciones claras para diferentes tipos de usuarios',
        'Colaboración en el desarrollo de la aplicación GSOFT',
      ],
      process: [
        'Colaboración en el desarrollo de la app GSOFT',
        'Análisis de competencia en el sector fitness tech',
        'Diseño de estructura de información y wireframes para landing',
        'Creación de diseño visual completo en Figma',
        'Desarrollo frontend de la landing con React y TypeScript',
        'Implementación de componentes MUI personalizados',
      ],
      duration: '4 meses',
      role: 'Landing Page Designer & Developer',
    },
    {
      id: 'tzedaka',
      title: 'TZEDAKÁ',
      titleColor: '#06B6D4',
      description: t.tzedakaDescription,
      type: 'web',
      color: 'rgba(6, 182, 212, 0.3)',
      images: [
        '/projects/tzedaka/1.png',
        '/projects/tzedaka/2.png',
        '/projects/tzedaka/3.png',
        '/projects/tzedaka/4.png',
        '/projects/tzedaka/5.png',
        '/projects/tzedaka/6.png',
      ],
      technologies: ['React', 'TypeScript', 'Figma', 'Tailwind'],
      problem: 'La empresa de préstamos requería una landing page profesional que comunicara confianza, transparencia y facilitara el entendimiento de sus servicios financieros.',
      solution: 'Diseño completo en Figma e implementación de landing page con secciones informativas claras, proceso de solicitud visible y elementos de confianza.',
      achievements: [
        'Diseño profesional que transmite confianza y seguridad',
        'Implementación completa en tiempo récord (2 semanas)',
        'Información clara de servicios y requisitos',
        'Optimización para conversión de leads',
      ],
      process: [
        'Reunión con cliente para definir objetivos y marca',
        'Diseño rápido de wireframes y propuesta visual',
        'Desarrollo del diseño completo en Figma',
        'Implementación frontend con React y TypeScript',
        'Ajustes finales basados en feedback del cliente',
        'Despliegue y entrega del proyecto',
      ],
      duration: '2 semanas',
      role: 'UX/UI Designer & Frontend Developer',
    },
  ];

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 0 ? totalImages - 1 : prev[projectId] - 1,
    }));
  };

  const getVisibleImages = (project: Project) => {
    const currentIndex = currentImageIndexes[project.id];
    const images = project.images;
    const totalImages = images.length;
    const visibleIndexes = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = totalImages + index;
      if (index >= totalImages) index = index - totalImages;
      visibleIndexes.push(index);
    }
    return visibleIndexes;
  };

  const toggleExpand = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Botón reutilizable
  const ToggleButton = ({ projectId, isExpanded, label }: { projectId: string; isExpanded: boolean; label: string }) => {
    const project = projects.find(p => p.id === projectId)!;
    return (
      <div className="flex justify-center">
        <button
          onClick={() => toggleExpand(projectId)}
          className="px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center gap-3"
          style={{ backgroundColor: project.titleColor, color: 'white' }}
        >
          {label}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 px-6 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            theme === 'dark' ? 'text-red-400' : 'text-blue-600'
          }`}
        >
          {t.projects}
        </h2>

        {/* Proyectos en columna */}
        <div className="space-y-20">
          {projects.map((project) => {
            const currentIndex = currentImageIndexes[project.id];
            const visibleIndexes = getVisibleImages(project);
            const isExpanded = expandedProject === project.id;

            return (
              <div
                key={project.id}
                className={`relative rounded-3xl overflow-hidden p-8 md:p-12 transition-all duration-500 ${
                  theme === 'dark' ? 'bg-gray-800/30' : 'bg-white/50'
                }`}
                /* ── Sin boxShadow de color ── */
              >
                {/* Mancha de color de fondo */}
                <div
                  className="absolute inset-0 blur-3xl opacity-20 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
                  }}
                />

                <div className="space-y-8">
                  {/* Título y descripción */}
                  <div className="text-center space-y-4">
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold"
                      style={{ color: project.titleColor }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-base md:text-lg max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Carrusel */}
                  <div className="relative">
                    <div className="flex items-center justify-center gap-4 md:gap-8">
                      <button
                        onClick={() => prevImage(project.id, project.images.length)}
                        className={`flex-shrink-0 p-3 md:p-4 rounded-full transition-all hover:scale-110 z-20 ${
                          theme === 'dark'
                            ? 'bg-gray-800/80 hover:bg-gray-700'
                            : 'bg-white/80 hover:bg-white'
                        }`}
                        style={{ color: project.titleColor }}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <div className="flex-1 relative overflow-hidden max-w-5xl">
                        <div className="flex items-center justify-center gap-4">
                          {visibleIndexes.map((imageIndex, position) => {
                            const isCenter = position === 1;
                            const isLeft = position === 0;
                            return (
                              <div
                                key={`${project.id}-${imageIndex}`}
                                className={`transition-all duration-500 ease-out ${isCenter ? 'z-20' : 'z-10'}`}
                                style={{
                                  transform: isCenter
                                    ? 'scale(1) translateX(0)'
                                    : isLeft
                                    ? 'scale(0.75) translateX(20%)'
                                    : 'scale(0.75) translateX(-20%)',
                                  opacity: isCenter ? 1 : 0.4,
                                }}
                              >
                                <div
                                  className={`rounded-2xl overflow-hidden border-4 ${
                                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                                  }`}
                                  style={{
                                    boxShadow: isCenter ? `0 20px 60px ${project.color}` : 'none',
                                    width: project.type === 'mobile' ? '250px' : '500px',
                                    maxWidth: '90vw',
                                  }}
                                >
                                  <div
                                    className={`relative ${
                                      project.type === 'mobile' ? 'aspect-[9/16]' : 'aspect-[16/9]'
                                    } bg-gray-900`}
                                  >
                                    <img
                                      src={project.images[imageIndex]}
                                      alt={`${project.title} - Screenshot ${imageIndex + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        onClick={() => nextImage(project.id, project.images.length)}
                        className={`flex-shrink-0 p-3 md:p-4 rounded-full transition-all hover:scale-110 z-20 ${
                          theme === 'dark'
                            ? 'bg-gray-800/80 hover:bg-gray-700'
                            : 'bg-white/80 hover:bg-white'
                        }`}
                        style={{ color: project.titleColor }}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setCurrentImageIndexes(prev => ({ ...prev, [project.id]: index }))
                          }
                          className={`h-2 rounded-full transition-all ${
                            index === currentIndex ? 'w-8 md:w-12' : 'w-2 opacity-40'
                          }`}
                          style={{ backgroundColor: project.titleColor }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón Ver Más (arriba) */}
                  <ToggleButton
                    projectId={project.id}
                    isExpanded={isExpanded}
                    label={isExpanded ? 'Ver Menos' : 'Ver Más'}
                  />

                  {/* Contenido expandible */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-8 space-y-8">
                      {/* Duración y Rol + Problemática */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold mb-1" style={{ color: project.titleColor }}>
                                DURACIÓN
                              </h4>
                              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                                {project.duration}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold mb-1" style={{ color: project.titleColor }}>
                                ROL
                              </h4>
                              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                                {project.role}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                          <h4 className="text-sm font-semibold mb-3" style={{ color: project.titleColor }}>
                            PROBLEMÁTICA
                          </h4>
                          <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {project.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solución */}
                      <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: project.titleColor }}>
                          SOLUCIÓN
                        </h4>
                        <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {project.solution}
                        </p>
                      </div>

                      {/* Logros */}
                      <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                        <h4 className="text-sm font-semibold mb-4" style={{ color: project.titleColor }}>
                          LOGROS
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ backgroundColor: `${project.titleColor}30` }}
                              >
                                <svg className="w-3 h-3" style={{ color: project.titleColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Proceso */}
                      <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                        <h4 className="text-sm font-semibold mb-4" style={{ color: project.titleColor }}>
                          PROCESO
                        </h4>
                        <div className="space-y-3">
                          {project.process.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                                style={{ backgroundColor: `${project.titleColor}20`, color: project.titleColor }}
                              >
                                {idx + 1}
                              </div>
                              <p className={`text-sm pt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stand & Reconocimientos */}
                      {project.exhibitionImages && project.exhibitionImages.filter(Boolean).length > 0 && (
                        <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'}`}>
                          <h4 className="text-sm font-semibold mb-4" style={{ color: project.titleColor }}>
                            STAND & RECONOCIMIENTOS
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {project.exhibitionImages.filter(Boolean).map((image, idx) => (
                              <div
                                key={idx}
                                className="relative aspect-video rounded-lg overflow-hidden"
                                style={{ boxShadow: `0 10px 30px ${project.color}` }}
                              >
                                <img
                                  src={image}
                                  alt={`${project.title} - Stand/Premio ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── Botón Ver Menos al final del contenido expandido ── */}
                      <ToggleButton
                        projectId={project.id}
                        isExpanded={isExpanded}
                        label="Ver Menos"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};