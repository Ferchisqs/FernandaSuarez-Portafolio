import { useTheme } from '../../context/useTheme';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  color: string;
  comingSoon?: boolean;
}

export const ScrollingGallery = () => {
  const { theme } = useTheme();

  const galleryItems: GalleryItem[] = [
    { id: '1', image: 'src/assets/galleryThree/1.png', title: 'Character', color: '#3B82F6' },
    { id: '2', image: 'src/assets/galleryThree/2.jpg', title: 'Character Design', color: '#10B981', comingSoon: true },
    { id: '3', image: 'src/assets/galleryThree/3.jpg', title: 'Brand Identity', color: '#F59E0B', comingSoon: true },
    { id: '4', image: 'src/assets/galleryThree/4.png', title: 'Portrait', color: '#8B5CF6' },
    { id: '5', image: 'src/assets/galleryThree/5.jpg', title: 'App Design', color: '#EC4899', comingSoon: true },
    { id: '6', image: 'src/assets/galleryThree/6.jpg', title: 'Illustration', color: '#06B6D4', comingSoon: true },
    { id: '7', image: 'src/assets/galleryThree/7.jpg', title: 'Typography', color: '#EF4444', comingSoon: true },
    { id: '8', image: 'src/assets/galleryThree/8.jpg', title: 'Icon Set', color: '#14B8A6', comingSoon: true },
  ];

  const duplicatedItems = [...galleryItems, ...galleryItems];

  const GalleryCard = ({ item, rowPrefix, index }: { item: GalleryItem; rowPrefix: string; index: number }) => (
    <div
      key={`${rowPrefix}-${index}`}
      className="group relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
      style={{
        boxShadow: `0 10px 30px ${item.color}40`,
      }}
    >
      {item.comingSoon ? (
        /* Placeholder Próximamente */
        <div
          className={`w-full h-full flex flex-col items-center justify-center gap-3 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-700 to-gray-800'
              : 'bg-gradient-to-br from-gray-200 to-gray-300'
          }`}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center border-2"
            style={{ borderColor: item.color, color: item.color }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            style={{ color: item.color }}
          >
            Próximamente
          </span>
          <span
            className={`text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            {item.title}
          </span>
        </div>
      ) : (
        <>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h3 className="text-white font-bold text-xl">{item.title}</h3>
          </div>

          {/* Borde con color */}
          <div
            className="absolute inset-0 border-4 border-transparent group-hover:border-current transition-all duration-300"
            style={{ color: item.color }}
          />
        </>
      )}
    </div>
  );

  return (
    <section
      className={`py-16 overflow-hidden relative ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Gradientes en los bordes para efecto de fade */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-900 to-transparent'
            : 'bg-gradient-to-r from-white to-transparent'
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          theme === 'dark'
            ? 'bg-gradient-to-l from-gray-900 to-transparent'
            : 'bg-gradient-to-l from-white to-transparent'
        }`}
      />

      <div className="relative">
        {/* Primera fila - scroll a la derecha */}
        <div className="flex gap-6 mb-6 animate-scroll-right">
          {duplicatedItems.map((item, index) => (
            <GalleryCard key={`row1-${index}`} item={item} rowPrefix="row1" index={index} />
          ))}
        </div>

        {/* Segunda fila - scroll a la izquierda */}
        <div className="flex gap-6 animate-scroll-left">
          {[...duplicatedItems].reverse().map((item, index) => (
            <GalleryCard key={`row2-${index}`} item={item} rowPrefix="row2" index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};