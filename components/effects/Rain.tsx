import React from 'react';

export const RainEffect: React.FC = () => {
  // Generate random rain drops
  const drops = Array.from({ length: 100 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `-${Math.random() * 2}s`,
    duration: `${0.5 + Math.random() * 0.5}s`,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark stormy clouds top gradient */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-900/80 to-transparent z-0" />

      {/* Rain Drops */}
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute top-0 w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-blue-200 to-transparent"
          style={{
            left: drop.left,
            animation: `rain-fall ${drop.duration} linear infinite`,
            animationDelay: drop.delay,
            opacity: drop.opacity,
          }}
        />
      ))}

      {/* Splashes at bottom (simulated) */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-blue-900/30 to-transparent blur-md" />
      
      {/* Lightning Flash (Occasional) */}
      <div className="absolute inset-0 bg-white opacity-0 animate-[pulse_5s_ease-in-out_infinite] mix-blend-overlay" style={{ animationDuration: '8s' }} />
    </div>
  );
};