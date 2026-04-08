import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/useTheme';

interface GalleryImage {
  id: string;
  image: string;
  color: string;
}

export const ParallaxGallery = () => {
  const { theme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const images: GalleryImage[] = [
    { id: '1', image: 'src/assets/gallery/1.jpeg', color: '#3B82F6' },
    { id: '2', image: 'src/assets/gallery/2.jpeg', color: '#10B981' },
    { id: '3', image: 'src/assets/gallery/3.jpeg', color: '#8B5CF6' },
    { id: '4', image: 'src/assets/gallery/4.png', color: '#F59E0B' },
    { id: '5', image: 'src/assets/gallery/5.png', color: '#EF4444' },
    { id: '6', image: 'src/assets/gallery/6.png', color: '#06B6D4' },
    // { id: '7', image: '/gallery/7.jpg', color: '#EC4899' },
    // { id: '8', image: '/gallery/8.jpg', color: '#F97316' },
    // { id: '9', image: '/gallery/9.jpg', color: '#14B8A6' },
    // { id: '10', image: '/gallery/10.jpg', color: '#6366F1' },
    // { id: '11', image: '/gallery/11.jpg', color: '#84CC16' },
    // { id: '12', image: '/gallery/12.jpg', color: '#F43F5E' },
  ];

  // Dividir en 3 columnas
  const column1 = images.filter((_, idx) => idx % 3 === 0);
  const column2 = images.filter((_, idx) => idx % 3 === 1);
  const column3 = images.filter((_, idx) => idx % 3 === 2);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Grid de 3 columnas - Solo imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Columna 1 - Movimiento lento */}
          <div
            className="space-y-4 md:space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {column1.map((item, index) => (
              <ImageCard key={item.id} item={item} index={index} theme={theme} />
            ))}
          </div>

          {/* Columna 2 - Movimiento medio (oculta en mobile) */}
          <div
            className="hidden md:block space-y-4 md:space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {column2.map((item, index) => (
              <ImageCard key={item.id} item={item} index={index} theme={theme} />
            ))}
          </div>

          {/* Columna 3 - Movimiento rápido */}
          <div
            className="space-y-4 md:space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {column3.map((item, index) => (
              <ImageCard key={item.id} item={item} index={index} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente minimalista de imagen
interface ImageCardProps {
  item: GalleryImage;
  index: number;
  theme: 'light' | 'dark';
}

const ImageCard = ({ item, index, theme }: ImageCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  // Alturas variadas para efecto masonry
  const heights = ['250px', '300px', '350px', '280px', '320px'];
  const randomHeight = heights[index % heights.length];

  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{
        height: randomHeight,
      }}
    >
      {/* Solo la imagen - Sin overlay, sin texto, sin nada */}
      <div className={`w-full h-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {/* Placeholder con gradiente sutil */}
        {/* <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`,
          }}
        /> */}
       
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover"
        />
    
      </div>

      {/* Efecto de brillo sutil al pasar el mouse */}
      <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-all duration-500" />
    </div>
  );
};