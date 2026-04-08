import { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';
import { translations } from '../../i18n/translations';

type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
type SkillCategory = 'frontend' | 'backend' | 'design' | 'tools' | 'languages' | 'soft';

interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  iconType: 'devicon' | 'emoji';
  icon: string;
  color?: string;
  isFavorite?: boolean;
}

export const Skills = () => {
  const { theme, language } = useTheme();
  const t = translations[language];
  const [selectedTab, setSelectedTab] = useState<'technical' | 'soft'>('technical');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'favorites' | 'frontend' | 'backend' | 'languages'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Cargar Devicon
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const skills: Skill[] = [
    // Frontend 
    { id: 'js', name: 'JavaScript', level: 'advanced', category: 'frontend', iconType: 'devicon', icon: 'devicon-javascript-plain', color: '#F7DF1E', isFavorite: true },
    { id: 'ts', name: 'TypeScript', level: 'advanced', category: 'frontend', iconType: 'devicon', icon: 'devicon-typescript-plain', color: '#3178C6', isFavorite:true },
    { id: 'react', name: 'React', level: 'advanced', category: 'frontend', iconType: 'devicon', icon: 'devicon-react-original', color: '#61DAFB' },
    { id: 'html', name: 'HTML5', level: 'advanced', category: 'frontend', iconType: 'devicon', icon: 'devicon-html5-plain', color: '#E34F26' },
    { id: 'css', name: 'CSS3', level: 'advanced', category: 'frontend', iconType: 'devicon', icon: 'devicon-css3-plain', color: '#1572B6' },
    { id: 'tailwind', name: 'Tailwind CSS', level: 'intermediate', category: 'frontend', iconType: 'devicon', icon: 'devicon-tailwindcss-original', color: '#06B6D4' },
    { id: 'react-native', name: 'React Native', level: 'beginner', category: 'frontend', iconType: 'devicon', icon: 'devicon-react-original', color: '#61DAFB' },

    // Backend
    { id: 'python', name: 'Python', level: 'beginner', category: 'backend', iconType: 'devicon', icon: 'devicon-python-plain', color: '#3776AB' },
    { id: 'java', name: 'Java', level: 'beginner', category: 'backend', iconType: 'devicon', icon: 'devicon-java-plain', color: '#007396' },
    { id: 'kotlin', name: 'Kotlin', level: 'beginner', category: 'backend', iconType: 'devicon', icon: 'devicon-kotlin-plain', color: '#7F52FF' },
    { id: 'dart', name: 'Dart', level: 'beginner', category: 'backend', iconType: 'devicon', icon: 'devicon-dart-plain', color: '#0175C2' },
    { id: 'cpp', name: 'C++', level: 'beginner', category: 'backend', iconType: 'devicon', icon: 'devicon-cplusplus-plain', color: '#00599C', isFavorite: true },
    { id: 'mongodb', name: 'MongoDB', level: 'beginner', category: 'backend', iconType: 'devicon', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { id: 'sql', name: 'SQL', level: 'intermediate', category: 'backend', iconType: 'devicon', icon: 'devicon-mysql-plain', color: '#4479A1', isFavorite:true },

    // Design
    { id: 'figma', name: 'Figma', level: 'intermediate', category: 'design', iconType: 'devicon', icon: 'devicon-figma-plain', color: '#F24E1E', isFavorite: true },
    { id: 'photoshop', name: 'Photoshop', level: 'intermediate', category: 'design', iconType: 'devicon', icon: 'devicon-photoshop-plain', color: '#31A8FF', isFavorite: true },
    { id: 'illustrator', name: 'Illustrator', level: 'intermediate', category: 'design', iconType: 'devicon', icon: 'devicon-illustrator-plain', color: '#FF9A00' },
    { id: 'blender', name: 'Blender', level: 'intermediate', category: 'design', iconType: 'devicon', icon: 'devicon-blender-original', color: '#F5792A', isFavorite: true },
    { id: 'wordpress', name: 'WordPress', level: 'intermediate', category: 'design', iconType: 'devicon', icon: 'devicon-wordpress-plain', color: '#21759B' },


    // Tools
    { id: 'git', name: 'Git', level: 'intermediate', category: 'tools', iconType: 'devicon', icon: 'devicon-git-plain', color: '#F05032' },
    { id: 'github', name: 'GitHub', level: 'intermediate', category: 'tools', iconType: 'devicon', icon: 'devicon-github-original', color: theme === 'dark' ? '#FFFFFF' : '#181717' },
    { id: 'vscode', name: 'VS Code', level: 'advanced', category: 'tools', iconType: 'devicon', icon: 'devicon-vscode-plain', color: '#007ACC' },
    { id: 'aws', name: 'AWS', level: 'intermediate', category: 'tools', iconType: 'devicon', icon: 'devicon-amazonwebservices-plain-wordmark', color: '#FF9900' },
    { id: 'spanish', name: t.spanish, level: 'expert', category: 'languages', iconType: 'emoji', icon: '🇲🇽', color: '#D32F2F' },
    { id: 'english', name: t.english, level: 'intermediate', category: 'languages', iconType: 'emoji', icon: '🇺🇸', color: '#1976D2' },
  ];

  const softSkills = [
    { 
      id: 'creativity', 
      name: t.creativity, 
      description: t.creativityDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      id: 'teamwork', 
      name: t.teamwork, 
      description: t.teamworkDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: 'communication', 
      name: t.communication, 
      description: t.communicationDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    { 
      id: 'problem-solving', 
      name: t.problemSolving, 
      description: t.problemSolvingDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    { 
      id: 'adaptability', 
      name: t.adaptability, 
      description: t.adaptabilityDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    { 
      id: 'attention-detail', 
      name: t.attentionToDetail, 
      description: t.attentionToDetailDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
  ];

  const getLevelColor = (level: SkillLevel) => {
    const colors = {
      beginner: theme === 'dark' ? '#F59E0B' : '#F59E0B',
      intermediate: theme === 'dark' ? '#3B82F6' : '#3B82F6',
      advanced: theme === 'dark' ? '#10B981' : '#10B981',
      expert: theme === 'dark' ? '#8B5CF6' : '#8B5CF6',
    };
    return colors[level];
  };

  const getLevelText = (level: SkillLevel) => {
    const levels = {
      beginner: t.beginner,
      intermediate: t.intermediate,
      advanced: t.advanced,
      expert: t.expert,
    };
    return levels[level];
  };

  const filteredSkills = skills.filter((skill) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'favorites') return skill.isFavorite;
    if (selectedFilter === 'frontend') return skill.category === 'frontend' || skill.category === 'design';
    if (selectedFilter === 'backend') return skill.category === 'backend' || skill.category === 'tools';
    if (selectedFilter === 'languages') return skill.category === 'languages';
    return true;
  });

  // Limitar skills cuando selectedFilter es 'all' y showAllSkills es false
  const displayedSkills = selectedFilter === 'all' && !showAllSkills 
    ? filteredSkills.slice(0, 10) 
    : filteredSkills;

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            theme === 'dark' ? 'text-red-400' : 'text-blue-600'
          }`}
        >
          {t.skills}
        </h2>

        {/* Tabs: Technical / Soft Skills */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setSelectedTab('technical')}
            className={`text-xl font-bold pb-2 transition-all ${
              selectedTab === 'technical'
                ? theme === 'dark'
                  ? 'text-red-400 border-b-4 border-red-400'
                  : 'text-blue-600 border-b-4 border-blue-600'
                : theme === 'dark'
                ? 'text-gray-500 hover:text-gray-300'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {t.technical}
          </button>

          <button
            onClick={() => setSelectedTab('soft')}
            className={`text-xl font-bold pb-2 transition-all ${
              selectedTab === 'soft'
                ? theme === 'dark'
                  ? 'text-red-400 border-b-4 border-red-400'
                  : 'text-blue-600 border-b-4 border-blue-600'
                : theme === 'dark'
                ? 'text-gray-500 hover:text-gray-300'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {t.soft}
          </button>
        </div>

        {/* Contenido según tab */}
        {selectedTab === 'technical' ? (
          <>
            {/* Filtros */}
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
              {[
                { id: 'all', label: t.all },
                { id: 'favorites', label: t.favorites },
                { id: 'frontend', label: t.frontend },
                { id: 'backend', label: t.backend },
                { id: 'languages', label: t.languages },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setSelectedFilter(filter.id as 'all' | 'favorites' | 'frontend' | 'backend' | 'languages');
                    setShowAllSkills(false);
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                    selectedFilter === filter.id
                      ? theme === 'dark'
                        ? 'bg-red-500/20 text-red-400 border-2 border-red-400'
                        : 'bg-blue-500/20 text-blue-600 border-2 border-blue-600'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 border-2 border-gray-700 hover:border-gray-600'
                      : 'bg-gray-100 text-gray-600 border-2 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Grid de Skills Técnicas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {displayedSkills.map((skill) => (
                <div
                  key={skill.id}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-gray-800 hover:bg-gray-750'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  style={{
                    boxShadow: hoveredSkill === skill.id 
                      ? `0 20px 40px ${skill.color}60` 
                      : `0 10px 30px ${getLevelColor(skill.level)}40`,
                    transform: hoveredSkill === skill.id ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {/* Favorito badge */}
                  {skill.isFavorite && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs skill-star">
                      ⭐
                    </div>
                  )}

                  {/* Icono */}
                  <div className="text-center mb-4">
                    {skill.iconType === 'devicon' ? (
                      <i 
                        className={`${skill.icon} text-6xl transition-all duration-300`}
                        style={{ 
                          color: hoveredSkill === skill.id ? skill.color : (theme === 'dark' ? '#9CA3AF' : '#6B7280'),
                          transform: hoveredSkill === skill.id ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                        }}
                      />
                    ) : (
                      <div 
                        className="text-5xl transition-transform duration-300"
                        style={{
                          transform: hoveredSkill === skill.id ? 'scale(1.2)' : 'scale(1)',
                        }}
                      >
                        {skill.icon}
                      </div>
                    )}
                  </div>

                  {/* Nombre */}
                  <h3
                    className={`text-center font-bold mb-2 text-sm ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  {/* Nivel */}
                  <div
                    className="text-center text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: `${getLevelColor(skill.level)}20`,
                      color: getLevelColor(skill.level),
                    }}
                  >
                    {getLevelText(skill.level)}
                  </div>

                  {/* Barra de progreso animada */}
                  <div className={`h-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: hoveredSkill === skill.id 
                          ? skill.level === 'expert' ? '100%'
                            : skill.level === 'advanced' ? '75%'
                            : skill.level === 'intermediate' ? '50%'
                            : '25%'
                          : '0%',
                        backgroundColor: skill.color || getLevelColor(skill.level),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Ver más / Ver menos */}
            {selectedFilter === 'all' && filteredSkills.length > 10 && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 text-gray-300 border-2 border-gray-700 hover:bg-gray-800 hover:border-red-500'
                      : 'bg-gray-100/50 text-gray-600 border-2 border-gray-300 hover:bg-gray-100 hover:border-blue-500'
                  }`}
                  style={{
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {showAllSkills ? t.seeLess : t.seeMore}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Grid de Soft Skills */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer soft-skill-card`}
                style={{
                  boxShadow: theme === 'dark' 
                    ? '0 10px 30px rgba(239, 68, 68, 0.3)'
                    : '0 10px 30px rgba(59, 130, 246, 0.3)',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  backgroundColor: theme === 'dark' ? '#1F2937' : '#F9FAFB',
                }}
              >
                {/* Icono */}
                <div 
                  className="mb-4 group-hover:scale-110 transition-transform soft-skill-icon"
                  style={{
                    color: theme === 'dark' ? '#EF4444' : '#3B82F6'
                  }}
                >
                  {skill.icon}
                </div>

                {/* Nombre */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-red-400' : 'text-blue-600'
                  }`}
                >
                  {skill.name}
                </h3>

                {/* Descripción */}
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

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

        .skill-star {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .soft-skill-icon {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .soft-skill-card:hover .soft-skill-icon {
          animation: pulse 0.6s ease-in-out;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};