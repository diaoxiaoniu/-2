import React, { useMemo } from 'react';
import { WeatherType, MOCK_DATA } from '../types';
import { SunnyEffect } from './effects/Sunny';
import { RainEffect } from './effects/Rain';
import { SnowEffect } from './effects/Snow';
import { WindEffect } from './effects/Wind';

interface WeatherCardProps {
  type: WeatherType;
  isActive: boolean;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ type, isActive }) => {
  const data = MOCK_DATA[type];

  // Memoize the visualization so it doesn't re-render unnecessarily, though React handles this well
  const VisualEffect = useMemo(() => {
    switch (type) {
      case WeatherType.SUNNY: return <SunnyEffect />;
      case WeatherType.RAIN: return <RainEffect />;
      case WeatherType.SNOW: return <SnowEffect />;
      case WeatherType.WIND: return <WindEffect />;
      default: return null;
    }
  }, [type]);

  return (
    <div 
      className={`
        relative overflow-hidden w-full aspect-[4/5] rounded-[2.5rem]
        bg-white/5 border border-white/10 shadow-2xl
        backdrop-blur-xl transition-all duration-500 ease-out
        group
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
      `}
    >
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        {VisualEffect}
      </div>

      {/* Glass Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60 z-10 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-20 h-full flex flex-col justify-between p-8 text-white">
        
        {/* Top: Location & Time */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium tracking-tight">Cupertino</h3>
            <p className="text-sm text-white/70">10:42 AM</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
             <span className="text-xs font-bold tracking-wider uppercase">{type}</span>
          </div>
        </div>

        {/* Middle: Big Temperature */}
        <div className="flex flex-col items-center justify-center my-auto transform translate-y-4">
          <div className="relative">
            <span className="text-9xl font-thin tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {data.temp}°
            </span>
          </div>
          <div className="flex gap-4 text-sm font-medium text-white/80 mt-2">
            <span>H:{data.high}°</span>
            <span>L:{data.low}°</span>
          </div>
        </div>

        {/* Bottom: Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <MetricItem label="Wind" value={data.windSpeed} icon="🌬️" />
          <MetricItem label="Humidity" value={data.humidity} icon="💧" />
          {data.uv && <MetricItem label="UV Index" value={data.uv.toString()} icon="☀️" />}
          {data.precipitation && <MetricItem label="Precip" value={data.precipitation} icon="🌧️" />}
        </div>
      </div>
    </div>
  );
};

const MetricItem: React.FC<{ label: string; value: string; icon: string }> = ({ label, value, icon }) => (
  <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-3 flex items-center gap-3 transition-colors hover:bg-black/30">
    <span className="text-lg">{icon}</span>
    <div className="flex flex-col">
       <span className="text-[10px] text-white/50 uppercase tracking-wide">{label}</span>
       <span className="text-sm font-semibold">{value}</span>
    </div>
  </div>
);