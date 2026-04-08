import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

export const About = () => {
  const { theme, language } = useTheme();
  const t = translations[language];

  const currentlyLearning = [
    { name: 'Advanced TypeScript & CSS', progress: 70 },
    { name: '3D Design - Blender', progress: 55 },
    { name: 'Motion Design', progress: 50 },
  ];

  const favoriteTools = ['Figma', 'VS Code', 'Notion', 'Spotify'];
  
  const currentMood = {
    song: 'Come Undone - Duran Duran',
    book:  t.currentBook,
    quote: t.currentQuote,
  };

  const hobbies = [
    { label: t.hobby1Label, text: t.hobby1 },
    { label: t.hobby2Label, text: t.hobby2 },
    { label: t.hobby3Label, text: t.hobby3 },
    { label: t.hobby4Label, text: t.hobby4 },
  ];

  const myValues = [
    { title: t.value1Title, desc: t.value1Desc },
    { title: t.value2Title, desc: t.value2Desc },
    { title: t.value3Title, desc: t.value3Desc },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-6 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-red-400' : 'text-blue-600'
            }`}
          >
            {t.aboutMe}
          </h2>
          <p
            className={`text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Grid de secciones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tarjeta principal con foto */}
          <div
            className={`lg:col-span-5 lg:row-span-2 rounded-3xl p-8 relative overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            {/* Decoraciones sutiles */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${
              theme === 'dark' ? 'bg-red-500' : 'bg-blue-500'
            }`} />
            <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${
              theme === 'dark' ? 'bg-red-500' : 'bg-blue-500'
            }`} />

            {/* Foto */}
            <div className="relative w-64 h-64 mx-auto mb-6">
              <div
                className={`absolute inset-0 rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-red-500/20' : 'bg-blue-500/20'
                }`}
                style={{ transform: 'scale(1.1)' }}
              />
              <div
                className={`relative w-full h-full rounded-full overflow-hidden border-4 ${
                  theme === 'dark' ? 'border-red-500/50' : 'border-blue-500/50'
                }`}
              >
                {theme === 'dark' ? (
                  <img
                    src="src/assets/photo-dark.jpeg"
                    alt="Fernanda Suárez - Dark Mode"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="src/assets/photo-light.jpeg"
                    alt="Fernanda Suárez - Light Mode"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Info principal */}
            <div className="text-center">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Fernanda Suárez
              </h3>
              <p
                className={`text-lg mb-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                UX/UI Designer & Developer
              </p>

              {/* Quick facts */}
              <div className="space-y-3">
                <div
                  className={`flex items-center justify-center gap-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className="font-medium">{t.location}:</span>
                  <span>Chiapas, México</span>
                </div>
                <div
                  className={`flex items-center justify-center gap-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className="font-medium">{t.ageLabel}:</span>
                  <span>{t.age}</span>
                </div>
                <div
                  className={`flex items-center justify-center gap-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className="font-medium">{t.status}:</span>
                  <span>{t.available}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.currentlyLearning}
            </h3>
            <div className="space-y-3">
              {currentlyLearning.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span
                      className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                    >
                      {item.name}
                    </span>
                    <span
                      className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
                    >
                      {item.progress}%
                    </span>
                  </div>
                  <div
                    className={`w-full h-2 rounded-full ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        theme === 'dark' ? 'bg-red-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Vibes */}
          <div
            className={`lg:col-span-4 rounded-3xl p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.currentVibes}
            </h3>
            <div className="space-y-3">
              <div>
                <span
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {t.listening}
                </span>
                <p
                  className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {currentMood.song}
                </p>
              </div>
              <div>
                <span
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {t.reading}
                </span>
                <p
                  className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {currentMood.book}
                </p>
              </div>
            </div>
          </div>

          {/* Favorite Tools */}
          <div
            className={`lg:col-span-3 rounded-3xl p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.favoriteTools}
            </h3>
            <div className="flex flex-wrap gap-2">
              {favoriteTools.map((tool, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-blue-500/20 text-blue-600'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.hobbiesTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-white'
                  }`}
                >
                  <span
                    className={`text-sm font-medium block mb-1 ${
                      theme === 'dark' ? 'text-red-400' : 'text-blue-600'
                    }`}
                  >
                    {hobby.label}
                  </span>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {hobby.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* My Values */}
          <div
            className={`lg:col-span-5 rounded-3xl p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.myValues}
            </h3>
            <div className="space-y-4">
              {myValues.map((value, index) => (
                <div key={index}>
                  <h4
                    className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div
            className={`lg:col-span-12 rounded-3xl p-8 text-center relative overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <div className={`absolute top-4 left-8 text-6xl ${
              theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
            }`}>"</div>
            <div className={`absolute bottom-4 right-8 text-6xl ${
              theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
            }`}>"</div>
            <p
              className={`text-2xl md:text-3xl font-bold italic ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {currentMood.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};