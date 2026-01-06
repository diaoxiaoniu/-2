import React from 'react';

export const WindEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Fast Moving Cloud Layers */}
      <div className="absolute top-10 -left-full w-[200%] h-32 bg-teal-900/20 blur-3xl animate-[cloud-drift_8s_ease-in-out_infinite]" />
      <div className="absolute top-32 -left-full w-[200%] h-40 bg-slate-500/10 blur-2xl animate-[cloud-drift_12s_ease-in-out_infinite_reverse]" />

      {/* SVG Wind Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <defs>
          <linearGradient id="windGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Generate multiple wind paths */}
        {[100, 200, 300, 400].map((y, i) => (
          <path
            key={i}
            d={`M -100 ${y + Math.random() * 50} Q 150 ${y - 50} 500 ${y + 20}`}
            stroke="url(#windGrad)"
            strokeWidth="2"
            fill="none"
            className="animate-[wind-gust_3s_linear_infinite]"
            style={{ 
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
      </svg>
      
      {/* Debris / Small particles being blown */}
      {[...Array(5)].map((_, i) => (
         <div 
            key={i}
            className="absolute bg-white/30 rounded-full w-1 h-1"
            style={{
                top: `${20 + Math.random() * 60}%`,
                left: '-10px',
                animation: `snow-fall ${1 + Math.random()}s linear infinite`, // Reusing snow fall but rotating container for horizontal
                transform: 'rotate(90deg)',
                animationDelay: `${Math.random() * 2}s`
            }}
         />
      ))}
    </div>
  );
};