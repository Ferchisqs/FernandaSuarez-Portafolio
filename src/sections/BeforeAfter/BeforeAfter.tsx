import { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

interface Comparison {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
}

export const BeforeAfter = () => {
  const { theme, language } = useTheme();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Datos de comparaciones
  const comparisons: Comparison[] = [
    {
      id: 'comp1',
      title: 'E-commerce Homepage',
      beforeImage: '/assets/before-after/ecommerce-before.jpg',
      afterImage: '/assets/before-after/ecommerce-after.jpg',
    },
    {
      id: 'comp2',
      title: 'Dashboard Analytics',
      beforeImage: '/assets/before-after/dashboard-before.jpg',
      afterImage: '/assets/before-after/dashboard-after.jpg',
    },
    {
      id: 'comp3',
      title: 'Mobile App Login',
      beforeImage: '/assets/before-after/login-before.jpg',
      afterImage: '/assets/before-after/login-after.jpg',
    }
  ];

  const currentComparison = comparisons[currentIndex];
  const accentColor = theme === 'dark' ? '#EF4444' : '#3B82F6';

  const nextComparison = () => {
    setCurrentIndex((prev) => (prev + 1) % comparisons.length);
    setSliderPosition(50);
  };

  const prevComparison = () => {
    setCurrentIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);
    setSliderPosition(50);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  return (
    <section
      id="before-after"
      className={`min-h-screen py-20 px-6 flex items-center ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-blue-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: accentColor }}
          >
            {t.beforeAfterTitle}
          </h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.beforeAfterSubtitle}
          </p>
        </div>

        {/* Comparación con Slider */}
        <div className="max-w-5xl mx-auto">
          {/* Contenedor de la imagen comparativa */}
          <div 
            className="relative select-none mb-8"
            style={{
              transform: 'rotate(-2deg)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-2deg) scale(1)';
            }}
          >
            <div
              className="relative rounded-3xl overflow-hidden cursor-ew-resize"
              style={{
                aspectRatio: '16/9',
                boxShadow: theme === 'dark' 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.1)',
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              {/* AFTER - Imagen de fondo completa */}
              <div className="absolute inset-0 w-full h-full">
                {/* <div className="w-full h-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">✨</div>
                    <p className="text-white text-2xl font-bold">AFTER</p>
                    <p className="text-white/80 text-lg mt-2">Diseño Mejorado</p>
                  </div>
                </div> */}
                 {/* Para imagen real: */}
                <img
                  src={currentComparison.afterImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
           
              </div>

              {/* BEFORE - Imagen que se revela con el slider */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    
                  </div>
                </div>
              {/* Para imagen real: */}
                <img
                  src={currentComparison.beforeImage}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
          
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
                style={{
                  left: `${sliderPosition}%`,
                  backgroundColor: 'white',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* Handle circular */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Labels BEFORE / AFTER */}
              <div className="absolute top-6 left-6 z-10">
                <div
                  className="px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                  }}
                >
                  {t.before}
                </div>
              </div>
              <div className="absolute top-6 right-6 z-10">
                <div
                  className="px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#22C55E',
                  }}
                >
                  {t.after}
                </div>
              </div>
            </div>
          </div>

          {/* Título del proyecto */}
          <div className="text-center mb-8">
            <h3
              className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {currentComparison.title}
            </h3>
            <p
              className={`text-sm mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Desliza para ver el antes y después
            </p>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevComparison}
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              style={{ color: accentColor }}
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              {comparisons.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'w-12' : 'w-3 opacity-50'
                  }`}
                  style={{ backgroundColor: accentColor }}
                  aria-label={`Go to comparison ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextComparison}
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              style={{ color: accentColor }}
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sección de descripción */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h3
            className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.designFocusTitle}
          </h3>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.designFocusDesc}
          </p>
        </div>
      </div>
    </section>
  );
};