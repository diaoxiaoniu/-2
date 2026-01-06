import React, { useState } from 'react';
import { WeatherType } from './types';
import { WeatherCard } from './components/WeatherCard';
import { NavigationRail } from './components/NavigationRail';

const App: React.FC = () => {
  const [activeWeather, setActiveWeather] = useState<WeatherType>(WeatherType.SUNNY);

  // Dynamic background based on weather state for immersion
  const getBackgroundGradient = () => {
    switch (activeWeather) {
      case WeatherType.SUNNY:
        return 'bg-gradient-to-br from-blue-400 via-blue-500 to-amber-500';
      case WeatherType.RAIN:
        return 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900';
      case WeatherType.SNOW:
        return 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800';
      case WeatherType.WIND:
        return 'bg-gradient-to-br from-teal-800 via-emerald-900 to-slate-900';
      default:
        return 'bg-slate-900';
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-all duration-1000 ease-in-out ${getBackgroundGradient()}`}>
      
      {/* Main Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 pb-32 px-4 md:justify-center md:pb-8">
        
        {/* Header / StatusBar Placeholder */}
        <div className="w-full max-w-md flex justify-between items-center mb-6 px-2 opacity-90 text-white">
          <span className="text-sm font-semibold tracking-wider">ZENWEATHER</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-md">PRO</span>
        </div>

        {/* The Hero Card */}
        <div className="w-full max-w-md perspective-1000">
          <WeatherCard type={activeWeather} isActive={true} />
        </div>

        {/* Descriptive Text */}
        <div className="mt-8 text-center max-w-sm">
          <h2 className="text-2xl font-light text-white/90 mb-1">
            {activeWeather === WeatherType.SUNNY && "Clear Skies"}
            {activeWeather === WeatherType.RAIN && "Heavy Rain"}
            {activeWeather === WeatherType.SNOW && "Heavy Snowfall"}
            {activeWeather === WeatherType.WIND && "Windy Conditions"}
          </h2>
          <p className="text-sm text-white/60 font-medium">
             Current location · Feels like {activeWeather === WeatherType.SUNNY ? '32' : activeWeather === WeatherType.SNOW ? '-4' : '18'}°
          </p>
        </div>

      </div>

      {/* Bottom Navigation / Switcher */}
      <NavigationRail activeWeather={activeWeather} onSelect={setActiveWeather} />
      
    </div>
  );
};

export default App;