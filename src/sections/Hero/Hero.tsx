import { useEffect, useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';
import { BackgroundShapes } from '../../components/Background/BackgroundShapes';

// Hook para el efecto typewriter
function useTypewriter(text: string, speed: number = 40, delay: number = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export const Hero = () => {
  const { theme, language } = useTheme();
  const t = translations[language];

  // Typewriter para cada línea de texto
  const greeting = useTypewriter(t.hello, 50, 200);
  const subtitle = useTypewriter('UX/UI Designer · Software Engineer', 35, 800);
  const tagline = useTypewriter('Frontend & Visual Design Background', 30, 1400);

  // Estado para mostrar botones y chibi después de las animaciones
  const [showButtons, setShowButtons] = useState(false);
  const [showChibi, setShowChibi] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowButtons(true), 1800);
    const t2 = setTimeout(() => setShowChibi(true), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-20 px-8 md:px-10 relative overflow-hidden flex items-center"
    >
      {/* Figuras de fondo animadas */}
      <BackgroundShapes />

      {/* ── Nombre de fondo en capas ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex flex-col items-center justify-center gap-0">
        <span
          aria-hidden="true"
          className={`whitespace-nowrap font-black tracking-tighter leading-none text-[4rem] sm:text-[6rem] md:text-[8rem] ${
            theme === 'dark' ? 'text-white opacity-[0.05]' : 'text-gray-900 opacity-[0.06]'
          }`}
        >
          FERNANDA SUÁREZ
        </span>
        <span
          aria-hidden="true"
          className={`whitespace-nowrap font-black tracking-tighter leading-none text-[5rem] sm:text-[8rem] md:text-[11rem] ${
            theme === 'dark' ? 'text-white opacity-[0.10]' : 'text-gray-900 opacity-[0.11]'
          }`}
        >
          FERNANDA SUÁREZ
        </span>
        <span
          aria-hidden="true"
          className={`whitespace-nowrap font-black tracking-tighter leading-none text-[6rem] sm:text-[9rem] md:text-[13rem] ${
            theme === 'dark' ? 'text-white opacity-[0.07]' : 'text-gray-900 opacity-[0.08]'
          }`}
        >
          FERNANDA SUÁREZ
        </span>
        <span
          aria-hidden="true"
          className={`whitespace-nowrap font-black tracking-tighter leading-none text-[4.5rem] sm:text-[7rem] md:text-[9rem] ${
            theme === 'dark' ? 'text-white opacity-[0.04]' : 'text-gray-900 opacity-[0.05]'
          }`}
        >
          FERNANDA SUÁREZ
        </span>
      </div>

      {/* ── Contenido principal ── */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* Texto con typewriter */}
        <div className="space-y-4">

          {/* Saludo */}
          <p
            className={`text-lg font-medium min-h-[1.75rem] ${
              theme === 'dark' ? 'text-red-400' : 'text-blue-600'
            }`}
          >
            {greeting.displayed}
            {!greeting.done && (
              <span className="inline-block w-0.5 h-5 ml-0.5 align-middle bg-current animate-pulse" />
            )}
          </p>

          {/* Nombre principal – aparece de golpe con fade */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight transition-opacity duration-500 ${
              greeting.done ? 'opacity-100' : 'opacity-0'
            } ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            FERNANDA SUÁREZ
          </h1>

          {/* Cargo con typewriter */}
          <h2
            className={`text-lg sm:text-xl md:text-2xl font-semibold min-h-[2rem] ${
              theme === 'dark' ? 'text-red-400' : 'text-blue-600'
            }`}
          >
            {subtitle.displayed}
            {!subtitle.done && subtitle.displayed.length > 0 && (
              <span className="inline-block w-0.5 h-5 ml-0.5 align-middle bg-current animate-pulse" />
            )}
          </h2>

          {/* Tagline con typewriter */}
          <p
            className={`text-base md:text-lg min-h-[1.5rem] ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {tagline.displayed}
            {!tagline.done && tagline.displayed.length > 0 && (
              <span className="inline-block w-0.5 h-4 ml-0.5 align-middle bg-current animate-pulse" />
            )}
          </p>

          {/* Botones – aparecen con fade después de las animaciones */}
          <div
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
              showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="mailto:fernandasuarez.dev@gmail.com"
              className={`px-6 md:px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>

            <a
              href="https://instagram.com/fernanda_qsuarez"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 md:px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-red-900/50 text-white hover:bg-red-800/50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* ── Chibi / Imagen con fade-in desde abajo ── */}
        <div className="relative">
    

          {/* Contenedor imagen */}
          <div
            className={`
              relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4
              transition-all duration-1000 ease-out
              ${showChibi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              ${theme === 'dark'
                ? 'bg-gradient-to-br from-red-800/80 to-red-900/70 border-red-500/70 shadow-[0_0_40px_8px_rgba(239,68,68,0.45),0_0_80px_20px_rgba(239,68,68,0.2)]'
                : 'bg-gradient-to-br from-blue-400/70 to-blue-500/60 border-blue-300/80 shadow-[0_0_40px_8px_rgba(59,130,246,0.45),0_0_80px_20px_rgba(59,130,246,0.2)]'
              }
            `}
          >
     <img
  src={theme === 'dark' ? '/Feri.png' : '/FeriAzul.png'}
  alt="Fernanda Suárez"
  className="w-full h-full object-cover"
/>
          </div>
        </div>

      </div>
    </section>
  );
};