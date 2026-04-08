import { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

interface Company {
  id: string;
  name: string;
  position: string;
  period: string;
  logo?: string;
  color: string;
  contributions: string[];
  learnings: string[];
  technologies: string[];
}

export const Experience = () => {
  const { theme, language } = useTheme();
  const t = translations[language];
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const companies: Company[] = [
    {
      id: 'pandaletec',
      name: 'PANDALETEC',
      position: language === 'es' ? 'Desarrollador Full Stack & Diseñador UI/UX' : 'Full Stack Developer & UI/UX Designer',
      period: language === 'es' ? 'Sep 2024 – Dic 2024' : 'Sep 2024 – Dec 2024',
      color: theme === 'dark' ? '#EC4899' : '#8B5CF6',
      contributions: [
        language === 'es' 
          ? 'Desarrollo de BTools: plataforma web para automotrices con cálculos especializados, diseño y programación completa en React y TypeScript'
          : 'BTools Development: automotive web platform with specialized calculations, full design and programming in React and TypeScript',
        language === 'es'
          ? 'Rediseño y desarrollo de Multinature: aplicación móvil en React Native con integración de endpoints usando Bruno y mejoras significativas en UX'
          : 'Multinature redesign and development: mobile app in React Native with endpoint integration using Bruno and significant UX improvements',
        language === 'es'
          ? 'Maquetado y desarrollo en Odoo y WordPress, documentación técnica, gestión directa con clientes, testing y control de calidad'
          : 'Layout and development in Odoo and WordPress, technical documentation, direct client management, testing and quality control',
      ],
      learnings: [
        language === 'es'
          ? 'Gestión completa de proyectos desde el diseño hasta la implementación y despliegue'
          : 'Complete project management from design to implementation and deployment',
        language === 'es'
          ? 'Integración de APIs y manejo de endpoints con herramientas especializadas como Bruno'
          : 'API integration and endpoint management with specialized tools like Bruno',
        language === 'es'
          ? 'Comunicación efectiva con clientes y documentación de procesos técnicos y pruebas'
          : 'Effective client communication and documentation of technical processes and testing',
      ],
      technologies: ['React', 'TypeScript', 'React Native', 'Figma', 'Odoo', 'WordPress', 'Bruno'],
    },
    {
      id: 'tzedaka',
      name: 'TZEDAKÁ',
      position: language === 'es' ? 'Desarrollador Frontend & Diseñador UI/UX' : 'Frontend Developer & UI/UX Designer',
      period: language === 'es' ? 'Mar 2024 – Ago 2024' : 'Mar 2024 – Aug 2024',
      color: '#3B82F6',
      contributions: [
        language === 'es'
          ? 'Rediseño completo de la landing page corporativa para mejorar la promoción y comunicación de la empresa'
          : 'Complete redesign of corporate landing page to improve company promotion and communication',
        language === 'es'
          ? 'Maquetado profesional en Figma y traducción fiel del diseño a código con TypeScript'
          : 'Professional mockup in Figma and faithful translation of design to code with TypeScript',
        language === 'es'
          ? 'Despliegue exitoso de la plataforma con mejoras significativas en la experiencia de usuario'
          : 'Successful platform deployment with significant improvements in user experience',
      ],
      learnings: [
        language === 'es'
          ? 'Proceso completo de diseño a desarrollo: desde la conceptualización hasta el deployment'
          : 'Complete design to development process: from conceptualization to deployment',
        language === 'es'
          ? 'Optimización de interfaces para comunicación efectiva de información corporativa'
          : 'Interface optimization for effective communication of corporate information',
        language === 'es'
          ? 'Trabajo con TypeScript en proyectos reales y gestión de ciclo de vida completo'
          : 'Working with TypeScript in real projects and full lifecycle management',
      ],
      technologies: ['Figma', 'TypeScript', 'React', 'UI/UX Design', 'Deployment'],
    },
    {
      id: 'hightech',
      name: 'Hightech',
      position: language === 'es' ? 'Desarrollador Junior - Primera Estancia Universitaria' : 'Junior Developer - First University Internship',
      period: language === 'es' ? 'Abr 2024 – May 2024' : 'Apr 2024 – May 2024',
      color: theme === 'dark' ? '#EF4444' : '#3B82F6',
      contributions: [
        language === 'es'
          ? 'Desarrollo de cuestionario digital para activación de nuevos vacantes y gestión de postulantes'
          : 'Development of digital questionnaire for new vacancy activation and applicant management',
        language === 'es'
          ? 'Implementación de sistema de carga de archivos con interfaz intuitiva y funcional'
          : 'Implementation of file upload system with intuitive and functional interface',
        language === 'es'
          ? 'Maquetado y diseño en Figma con desarrollo backend en PHP'
          : 'Layout and design in Figma with backend development in PHP',
      ],
      learnings: [
        language === 'es'
          ? 'Primera experiencia profesional en desarrollo web y trabajo en equipo'
          : 'First professional experience in web development and teamwork',
        language === 'es'
          ? 'Fundamentos de desarrollo backend con PHP y gestión de archivos'
          : 'Backend development fundamentals with PHP and file management',
        language === 'es'
          ? 'Diseño de interfaces funcionales y flujos de usuario en entorno real'
          : 'Functional interface design and user flows in real environment',
      ],
      technologies: ['Figma', 'PHP', 'HTML/CSS', 'JavaScript'],
    },
  ];

  const openModal = (company: Company) => {
    setSelectedCompany(company);
  };

  const closeModal = () => {
    setSelectedCompany(null);
  };

  return (
    <section
      id="experience"
      className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
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
          {t.experience}
        </h2>

        {/* Timeline + Tarjetas */}
        <div className="relative">
          {/* Línea de timeline (solo visible en desktop) */}
          <div
            className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />

          {/* Tarjetas de empresas */}
          <div className="space-y-16">
            {companies.map((company, index) => (
              <div
                key={company.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Punto en el timeline */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-6 h-6 rounded-full border-4 transition-all"
                    style={{
                      backgroundColor: company.color,
                      borderColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
                      boxShadow: `0 0 20px ${company.color}80`,
                    }}
                  />
                </div>

                {/* Tarjeta */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div
                    onClick={() => openModal(company)}
                    className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 hover:bg-gray-800'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    style={{
                      boxShadow: `0 10px 40px ${company.color}40`,
                      border: `2px solid ${company.color}40`,
                    }}
                  >
                    {/* Logo placeholder - CORREGIDO: Más separación del borde */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? 'md:-right-20' : 'md:-left-20'
                      } top-8 w-24 h-24 rounded-2xl items-center justify-center text-4xl transition-all duration-300 group-hover:scale-110 md:flex hidden z-10`}
                      style={{
                        backgroundColor: company.color,
                        boxShadow: `0 10px 30px ${company.color}60`,
                      }}
                    >
                      {company.id === 'hightech' && '💼'}
                      {company.id === 'tzedaka' && '🤝'}
                      {company.id === 'pandaletec' && '🎨'}
                    </div>

                    {/* Contenido */}
                    <div className="space-y-4">
                      <h3
                        className="text-3xl font-bold"
                        style={{ color: company.color }}
                      >
                        {company.name}
                      </h3>

                      <p
                        className={`text-lg font-semibold ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {company.position}
                      </p>

                      <div className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-5 h-5"
                          style={{ color: company.color }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span
                          className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                        >
                          {company.period}
                        </span>
                      </div>

                      {/* Preview de contribuciones */}
                      <div className="pt-4">
                        <p
                          className={`text-sm font-medium mb-2 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {t.mainContributions}:
                        </p>
                        <ul className="space-y-2">
                          {company.contributions.slice(0, 2).map((contrib, i) => (
                            <li
                              key={i}
                              className={`text-sm flex items-start gap-2 ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                              }`}
                            >
                              <span style={{ color: company.color }}>▸</span>
                              <span>{contrib}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Botón ver más */}
                      <button
                        className="mt-4 px-6 py-2 rounded-lg font-medium transition-all hover:scale-105 text-white"
                        style={{ backgroundColor: company.color }}
                      >
                        {t.seeMore}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Espacio para la otra mitad del grid */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal con información completa - MEJORADO */}
     {/* Modal con información completa */}
{selectedCompany && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center p-4 overflow-y-auto"
    onClick={closeModal}
  >
    {/* Botón cerrar FIJO — siempre visible arriba a la derecha */}
    <button
      onClick={closeModal}
      className="fixed top-4 right-4 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all z-[60] backdrop-blur-sm shadow-lg"
      aria-label="Cerrar modal"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div
      className="max-w-4xl w-full my-8"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Contenido del modal */}
      <div
        className={`p-8 md:p-12 rounded-3xl ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
        style={{
          boxShadow: `0 20px 60px ${selectedCompany.color}60`,
          border: `2px solid ${selectedCompany.color}40`,
        }}
      >
              {/* Header - MEJORADO */}
              <div className="text-center mb-8">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-5xl mb-6"
                  style={{
                    backgroundColor: `${selectedCompany.color}20`,
                  }}
                >
                  {selectedCompany.id === 'hightech' && '💼'}
                  {selectedCompany.id === 'tzedaka' && '🤝'}
                  {selectedCompany.id === 'pandaletec' && '🎨'}
                </div>

                <h3
                  className="text-4xl font-bold mb-2"
                  style={{ color: selectedCompany.color }}
                >
                  {selectedCompany.name}
                </h3>

                <p
                  className={`text-xl ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {selectedCompany.position}
                </p>

                <p
                  className={`text-sm mt-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {selectedCompany.period}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contribuciones */}
                <div>
                  <h4
                    className="text-2xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: selectedCompany.color }}
                  >
                    <span>🎯</span>
                    {t.myContributions}
                  </h4>
                  <ul className="space-y-3">
                    {selectedCompany.contributions.map((contrib, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <span
                          className="flex-shrink-0 mt-1"
                          style={{ color: selectedCompany.color }}
                        >
                          ▸
                        </span>
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aprendizajes */}
                <div>
                  <h4
                    className="text-2xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: selectedCompany.color }}
                  >
                    <span>📚</span>
                    {t.whatILearned}
                  </h4>
                  <ul className="space-y-3">
                    {selectedCompany.learnings.map((learning, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <span
                          className="flex-shrink-0 mt-1"
                          style={{ color: selectedCompany.color }}
                        >
                          ▸
                        </span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tecnologías */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4
                  className={`text-lg font-bold mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {t.technologies}:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCompany.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg font-medium text-white"
                      style={{ backgroundColor: selectedCompany.color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};