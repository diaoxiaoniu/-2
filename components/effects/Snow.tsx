import React from 'react';

export const SnowEffect: React.FC = () => {
  // Generate random snowflakes
  const flakes = Array.from({ length: 60 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 4}px`,
    delay: `-${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 5}s`,
    blur: Math.random() > 0.5 ? 'blur-[1px]' : 'blur-0',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cold hazy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200/10 to-transparent mix-blend-overlay" />

      {flakes.map((flake, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-white ${flake.blur}`}
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            animation: `snow-fall ${flake.duration} linear infinite`,
            animationDelay: flake.delay,
            opacity: 0.8,
            boxShadow: '0 0 4px rgba(255,255,255,0.8)'
          }}
        />
      ))}

      {/* Fog at bottom */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/20 to-transparent blur-xl" />
    </div>
  );
};