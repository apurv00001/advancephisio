import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'brutalist' | 'organic' | 'futuristic' | 'minimal' | 'artdeco' | 'cyberpunk' | 'nordic' | 'corporate' | 'synthwave' | 'darkelegance' | 'medicaltrust' | 'wellnessspa' | 'clinicalmodern' | 'healthvitality' | 'carewarmth';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themes: { id: ThemeType; name: string; description: string }[];
}

const themes = [
  { id: 'brutalist' as ThemeType, name: 'Brutalist Industrial', description: 'Raw, bold, neon cyan' },
  { id: 'organic' as ThemeType, name: 'Organic Wellness', description: 'Soft curves, earth tones' },
  { id: 'futuristic' as ThemeType, name: 'Futuristic Glass', description: 'Glassmorphism, purple' },
  { id: 'minimal' as ThemeType, name: 'Minimal Swiss', description: 'Clean, precise grid' },
  { id: 'artdeco' as ThemeType, name: 'Art Deco Luxury', description: 'Gold accents, elegant' },
  { id: 'cyberpunk' as ThemeType, name: 'Cyberpunk Neon', description: 'Hot pink, electric' },
  { id: 'nordic' as ThemeType, name: 'Nordic Clean', description: 'Cool blues, minimal' },
  { id: 'corporate' as ThemeType, name: 'Corporate Pro', description: 'Navy, professional' },
  { id: 'synthwave' as ThemeType, name: 'Retro Synthwave', description: 'Sunset gradients, 80s' },
  { id: 'darkelegance' as ThemeType, name: 'Dark Elegance', description: 'Sophisticated black' },
  { id: 'medicaltrust' as ThemeType, name: 'Medical Trust', description: 'Healthcare blues, trustworthy' },
  { id: 'wellnessspa' as ThemeType, name: 'Wellness Spa', description: 'Calming greens, peaceful' },
  { id: 'clinicalmodern' as ThemeType, name: 'Clinical Modern', description: 'Sharp, clean, efficient' },
  { id: 'healthvitality' as ThemeType, name: 'Health Vitality', description: 'Energetic orange, warm' },
  { id: 'carewarmth' as ThemeType, name: 'Care Warmth', description: 'Gentle rose, compassionate' },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('medicaltrust');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
