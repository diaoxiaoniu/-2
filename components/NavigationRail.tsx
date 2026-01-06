import React from 'react';
import { WeatherType } from '../types';

interface NavigationRailProps {
  activeWeather: WeatherType;
  onSelect: (type: WeatherType) => void;
}

const buttons = [
  { type: WeatherType.SUNNY, label: 'Sunny', icon: '☀️' },
  { type: WeatherType.RAIN, label: 'Rain', icon: '🌧️' },
  { type: WeatherType.SNOW, label: 'Snow', icon: '❄️' },
  { type: WeatherType.WIND, label: 'Wind', icon: '💨' },
];

export const NavigationRail: React.FC<NavigationRailProps> = ({ activeWeather, onSelect }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm z-50">
      <div className="max-w-md mx-auto bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-2 flex justify-between shadow-2xl">
        {buttons.map((btn) => {
          const isActive = activeWeather === btn.type;
          return (
            <button
              key={btn.type}
              onClick={() => onSelect(btn.type)}
              className={`
                relative flex flex-col items-center justify-center w-full py-3 rounded-2xl transition-all duration-300
                ${isActive ? 'bg-white/20 shadow-lg scale-105' : 'hover:bg-white/5 active:scale-95'}
              `}
            >
              <span className={`text-2xl mb-1 transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                {btn.icon}
              </span>
              <span className={`text-[10px] font-medium tracking-wide uppercase ${isActive ? 'text-white' : 'text-white/50'}`}>
                {btn.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full opacity-80" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};