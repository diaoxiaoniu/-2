import React from 'react';

export const SunnyEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Core Sun Body */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-100 to-amber-500 blur-2xl opacity-80 animate-[ray-pulse_4s_ease-in-out_infinite]" />
      
      {/* Rotating Rays */}
      <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] opacity-30 animate-[sun-rotate_60s_linear_infinite]">
         {[...Array(8)].map((_, i) => (
           <div 
             key={i} 
             className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
             style={{ 
               transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
               filter: 'blur(40px)'
             }}
           />
         ))}
      </div>

      {/* Lens Flares / Bokeh */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-yellow-200 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/2 w-24 h-24 rounded-full bg-amber-400 opacity-20 blur-2xl animate-[ray-pulse_6s_infinite]" />
      
      {/* Brightness overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent mix-blend-overlay" />
    </div>
  );
};