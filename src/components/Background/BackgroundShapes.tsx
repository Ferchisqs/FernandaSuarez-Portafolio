import { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';

export const BackgroundShapes = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${i % 2 === 0 ? -10 : 'auto'}%`,
            right: `${i % 2 === 1 ? -10 : 'auto'}%`,
            top: `${i * 15}%`,
            background:
              theme === 'dark'
                ? `rgba(${i % 2 === 0 ? '220, 38, 38' : '239, 68, 68'}, 0.3)`
                : `rgba(${i % 2 === 0 ? '59, 130, 246' : '96, 165, 250'}, 0.3)`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      <div
        className="absolute w-64 h-64 rounded-full blur-2xl opacity-30 transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(239, 68, 68, 0.4), transparent)'
              : 'radial-gradient(circle, rgba(96, 165, 250, 0.4), transparent)',
        }}
      />
    </div>
  );
};