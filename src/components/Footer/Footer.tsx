import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

export const Footer = () => {
  const { theme, language } = useTheme();
  const t = translations[language];

  const contactBlocks = [
    {
      id: 'email',
      title: 'Email',
      value: 'fernandasuarez.dev@gmail.com',
      link: 'mailto:fernandasuarez.dev@gmail.com',
      color: theme === 'dark' ? '#EF4444' : '#3B82F6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: '/Maria Fernanda Quezada Suárez',
      link: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      color: theme === 'dark' ? '#0A66C2' : '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeWidth={2} />
        </svg>
      ),
    },
    {
      id: 'github',
      title: 'GitHub',
      value: '@Ferchisqs',
      link: 'https://github.com/Ferchisqs',
      color: theme === 'dark' ? '#F0F6FC' : '#24292F',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      title: 'Instagram',
      value: '@fernanda_qsuarez',
      link: 'https://instagram.com/fernanda_qsuarez',
      color: theme === 'dark' ? '#E4405F' : '#E4405F',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-gray-50'
      }`}
    >
      {/* Sección de Contacto */}
      <div id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <h2
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.letsConnect}
          </h2>
          
          <p
            className={`text-center text-lg md:text-xl mb-16 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.contactSubtitle}
          </p>

          {/* Bloques de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactBlocks.map((block) => (
              <a
                key={block.id}
                href={block.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-gray-900 hover:bg-gray-800'
                    : 'bg-white hover:bg-gray-50'
                }`}
                style={{
                  boxShadow: `0 10px 40px ${block.color}20`,
                  border: `2px solid ${block.color}20`,
                }}
              >
                {/* Icono */}
                <div
                  className="mb-4 transition-transform group-hover:scale-110"
                  style={{ color: block.color }}
                >
                  {block.icon}
                </div>

                {/* Título */}
                <h3
                  className={`text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {block.title}
                </h3>

                {/* Valor */}
                <p
                  className={`font-bold text-lg break-all transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  style={{
                    color: block.color,
                  }}
                >
                  {block.value}
                </p>

                {/* Indicador de hover */}
                <div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: block.color }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Efecto de brillo */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"
                  style={{ backgroundColor: block.color }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Texto marquee grande */}
      <div className="relative py-12 overflow-hidden">
        {/* Primera línea - scroll derecha */}
        <div className="flex whitespace-nowrap animate-marquee mb-4">
          <span
            className={`text-6xl md:text-8xl lg:text-9xl font-bold uppercase mx-8 ${
              theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Let's Work Together · {t.contactMe} · Let's Create ·
          </span>
          <span
            className={`text-6xl md:text-8xl lg:text-9xl font-bold uppercase mx-8 ${
              theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Let's Work Together · {t.contactMe} · Let's Create ·
          </span>
        </div>

        {/* Segunda línea - scroll izquierda */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <span
            className={`text-6xl md:text-8xl lg:text-9xl font-bold uppercase mx-8 ${
              theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Get In Touch · Collaborate · Build Amazing Things ·
          </span>
          <span
            className={`text-6xl md:text-8xl lg:text-9xl font-bold uppercase mx-8 ${
              theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Get In Touch · Collaborate · Build Amazing Things ·
          </span>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        className={`py-8 px-6 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p
            className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            © 2026 Fernanda Suárez. {t.allRightsReserved}
          </p>

          {/* Links rápidos */}
          <div className="flex gap-6">
            <a
              href="#home"
              className={`text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-gray-500 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.home}
            </a>
            <a
              href="#projects"
              className={`text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-gray-500 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.projects}
            </a>
            <a
              href="#about"
              className={`text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-gray-500 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.aboutMe}
            </a>
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};