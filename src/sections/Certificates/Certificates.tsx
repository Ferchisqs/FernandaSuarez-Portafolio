import { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
}

type CertificateTab = 'ux-ui' | 'cisco-aws';

export const Certificates = () => {
  const { theme, language } = useTheme();
  const t = translations[language];
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<CertificateTab>('ux-ui');

  // Certificados UX/UI - Basados en las imágenes reales
  const uxUiCertificates: Certificate[] = [
    {
      id: 'cert1',
      title: 'Diseño UX/UI',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/DiseñoUX.png',
      credentialUrl: '#',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma']
    },
    {
      id: 'cert2',
      title: 'Primeros pasos en UX Design',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/Empatizar,definir e idear.png',
      credentialUrl: '#',
      skills: ['Figma', 'User Research', 'Prototyping']
    },
    {
      id: 'cert3',
      title: 'Crear Interfaces de Usuario',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/CrearInterfaces.png',
      credentialUrl: '#',
      skills: ['UI Design', 'Wireframes', 'Responsive Design']
    },
    {
      id: 'cert4',
      title: 'Experiencia de Usuario',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/ExperienciaUsuario.png',
      credentialUrl: '#',
      skills: ['Figma', 'UX/UI', 'ClipStuio', 'Framer']
    },
    {
      id: 'cert5',
      title: 'Prototipos en Figma',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/Figma.png',
      credentialUrl: '#',
      skills: ['Figma', 'UX/UI', 'Blender', 'Framer']
    },
    {
      id: 'cert6',
      title: 'Design Thinking Fundamentals',
      issuer: 'Google',
      date: '2024',
      image: '/certificates/DiseñoUX.png',
      credentialUrl: '#',
      skills: ['Design Thinking', 'Innovation', 'Problem Solving']
    }
  ];

  // Certificados CISCO/AWS - Basados en las imágenes
  const ciscoAwsCertificates: Certificate[] = [
    {
      id: 'cisco1',
      title: 'Networking Basics',
      issuer: 'CISCO',
      date: '2023',
      image: '/certificates/NetworkingBasics.png',
      credentialUrl: '#',
      skills: ['Networking', 'TCP/IP', 'Router', 'Switch']
    },
    {
      id: 'cisco2',
      title: 'Introduction to Cybersecurity',
      issuer: 'CISCO',
      date: '2023',
      image: '/certificates/IntroductionCybersecurity.png',
      credentialUrl: '#',
      skills: ['Cybersecurity', 'Network Security', 'Threat Protection']
    },
    {
      id: 'cisco3',
      title: 'Operating Systems Basics',
      issuer: 'CISCO',
      date: '2023',
      image: '/certificates/SystemsBasics.png',
      credentialUrl: '#',
      skills: ['Operating Systems', 'Linux', 'Windows', ]
    },
    {
      id: 'aws1',
      title: 'Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2023',
      image: '/certificates/CloudFoundations.png',
      credentialUrl: '#',
      skills: ['Cloud Computing', 'AWS', 'Infrastructure', 'Services']
    },
    {
      id: 'aws2',
      title: 'Introduction to Cloud Semester 1',
      issuer: 'AWS Academy',
      date: '2023',
      image: '/certificates/CloudSemester1.png',
      credentialUrl: '#',
      skills: ['Cloud Concepts', 'AWS Services', 'Architecture', 'Best Practices']
    },
    {
      id: 'aws3',
      title: 'Cloud Architecting',
      issuer: 'AWS Academy',
      date: '2023',
      image: '/certificates/CloudArchitecting.png',
      credentialUrl: '#',
      skills: ['Architecture', 'Cloud Design', 'Scalability', 'High Availability']
    }
  ];

  const activeCertificates = activeTab === 'ux-ui' ? uxUiCertificates : ciscoAwsCertificates;
  const accentColor = theme === 'dark' ? '#EF4444' : '#3B82F6';
  const bgColor = theme === 'dark' ? '#1F2937' : '#F3F4F6';

  return (
    <section
      id="certificates"
      className={`min-h-screen py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: accentColor }}
          >
            {t.certificatesTitle || 'Certificaciones'}
          </h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600' 
            }`}
          >
            {t.certificatesSubtitle || 'Mi trayectoria de aprendizaje y desarrollo profesional'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex rounded-full p-1.5"
            style={{ backgroundColor: bgColor }}
          >
            <button
              onClick={() => setActiveTab('ux-ui')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'ux-ui'
                  ? 'shadow-lg scale-105'
                  : theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: activeTab === 'ux-ui' ? accentColor : 'transparent',
                color: activeTab === 'ux-ui' ? 'white' : undefined,
              }}
            >
              UX/UI
            </button>
            <button
              onClick={() => setActiveTab('cisco-aws')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'cisco-aws'
                  ? 'shadow-lg scale-105'
                  : theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: activeTab === 'cisco-aws' ? accentColor : 'transparent',
                color: activeTab === 'cisco-aws' ? 'white' : undefined,
              }}
            >
              CISCO / AWS
            </button>
          </div>
        </div>

        {/* Grid de certificados con animación de entrada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCertificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
              style={{
                boxShadow: `0 10px 40px ${accentColor}20`,
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Imagen del certificado */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Placeholder SVG (se muestra si la imagen falla) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-24 h-24 opacity-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>

                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className="px-6 py-3 rounded-lg font-bold transition-transform hover:scale-110"
                    style={{ backgroundColor: accentColor, color: 'white' }}
                  >
                    {t.viewCertificate || 'Ver Certificado'}
                  </button>
                </div>
              </div>

              {/* Información */}
              <div className="p-6">
                <h3
                  className={`font-bold text-xl mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {cert.title}
                </h3>

                <div
                  className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <p className="mb-1">
                    <span className="font-semibold">{t.issuedBy || 'Emitido por'}:</span> {cert.issuer}
                  </p>
                  <p>
                    <span className="font-semibold">{t.completedOn || 'Completado'}:</span> {cert.date}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${accentColor}20`,
                        color: accentColor,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver certificado ampliado */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            >
              <svg
                className="w-8 h-8 text-white"
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

            {/* Contenido del modal */}
            <div className="p-8">
              {/* Imagen del certificado */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <svg
                  className="w-32 h-32 opacity-20 absolute"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              {/* Información detallada */}
              <div className="text-white space-y-4">
                <h3 className="text-3xl font-bold" style={{ color: accentColor }}>
                  {selectedCert.title}
                </h3>

                <div className="text-gray-300">
                  <p className="mb-2">
                    <span className="font-semibold">{t.issuedBy || 'Emitido por'}:</span>{' '}
                    {selectedCert.issuer}
                  </p>
                  <p>
                    <span className="font-semibold">{t.completedOn || 'Completado'}:</span>{' '}
                    {selectedCert.date}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <p className="font-semibold mb-2 text-gray-300">{t.skills || 'Habilidades'}:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: `${accentColor}20`,
                          color: accentColor,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de credencial */}
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-lg font-bold mt-4 transition-transform hover:scale-105"
                    style={{ backgroundColor: accentColor, color: 'white' }}
                  >
                    {t.viewCertificate || 'Ver Certificado'} →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};