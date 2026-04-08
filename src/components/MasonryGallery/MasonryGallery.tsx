import { useTheme } from '../../context/useTheme';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  span?: 'small' | 'medium' | 'large';
  comingSoon?: boolean;
}

export const MasonryGallery = () => {
  const { theme } = useTheme();

  const galleryItems: GalleryItem[] = [
    { id: '1', image: '/galleryTwo/1.png', title: 'UI Design', category: 'Design', span: 'large' },
    { id: '2', image: '/galleryTwo/2.jpg', title: 'Illustration', category: 'Art', span: 'small', comingSoon: true },
    { id: '3', image: '/galleryTwo/3.jpg', title: 'Branding', category: 'Design', span: 'medium', comingSoon: true },
    { id: '4', image: '/galleryTwo/4.png', title: '3D Art', category: '3D', span: 'small' },
    { id: '5', image: '/galleryTwo/5.jpg', title: 'Mobile App', category: 'Development', span: 'large', comingSoon: true },
    { id: '6', image: '/galleryTwo/6.jpg', title: 'Icon Set', category: 'Design', span: 'small', comingSoon: true },
    { id: '7', image: '/galleryTwo/7.png', title: 'Web Design', category: 'Design', span: 'medium' },
    { id: '8', image: '/galleryTwo/8.png', title: 'Map design', category: 'Art', span: 'small' },
  ];

  const getSpanClass = (span?: string) => {
    switch (span) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2';
      case 'small':
      default:
        return '';
    }
  };

  return (
    <section
      className={`py-20 px-6 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-red-500/30' : 'bg-blue-500/30'
          }`}
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-purple-500/30' : 'bg-green-500/30'
          }`}
          style={{ animation: 'float 10s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 ${
                getSpanClass(item.span)
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.comingSoon ? (
                /* Placeholder para "Próximamente" */
                <div
                  className={`w-full h-full flex flex-col items-center justify-center gap-3 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300'
                  }`}
                >
                  {/* Icono de reloj / espera */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      theme === 'dark'
                        ? 'border-gray-500 text-gray-400'
                        : 'border-gray-400 text-gray-500'
                    }`}
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
                    className={`text-xs font-semibold tracking-widest uppercase ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Próximamente
                  </span>
                  <span
                    className={`text-xs ${
                      theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <span
                      className={`text-xs font-semibold mb-2 inline-block px-3 py-1 rounded-full w-fit ${
                        theme === 'dark'
                          ? 'bg-white/20 text-white'
                          : 'bg-black/20 text-white'
                      }`}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p
            className={`text-sm font-medium ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            Desliza para explorar más trabajos
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
};