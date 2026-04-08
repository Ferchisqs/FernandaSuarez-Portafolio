import { useState } from 'react'; // Única importación añadida
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

export const Navbar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar
  const t = translations[language];

  const menuItems = [
    { label: t.home, href: '#home' },
    { label: t.projects, href: '#projects' },
    { label: t.design, href: '#design' },
    { label: t.illustration, href: '#design' },
    { label: t.experiments, href: '#design' },
    { label: t.experience, href: '#experience' },
    { label: t.skills, href: '#skills' },
    { label: t.certificates, href: '#certificates' },
    { label: t.aboutMe, href: '#about' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700'
          : 'bg-white/80 backdrop-blur-md border-b border-blue-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className={`font-bold text-xl transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            FernandaSuárez
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`text-sm font-medium transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Controls - SE MANTIENEN IGUAL */}
            <div className="flex items-center gap-3 ml-4 border-l pl-4 border-gray-300 dark:border-gray-600">
              <a
                href="https://github.com/Ferchisqs"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all hover:scale-110 ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/maria-fernanda-quezada-suárez-b7100024a"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all hover:scale-110 ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-lg font-medium transition-all hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {language.toUpperCase()}
              </button>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* Hamburguesa con funcionalidad */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Menú Desplegable Móvil (NUEVO) */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-100 dark:border-gray-800">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium pt-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};