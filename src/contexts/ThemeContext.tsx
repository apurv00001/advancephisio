import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'brutalist' | 'organic' | 'futuristic' | 'minimal' | 'artdeco';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themes: { id: ThemeType; name: string; description: string }[];
}

const themes = [
  { id: 'brutalist' as ThemeType, name: 'Brutalist Industrial', description: 'Raw, bold, neon accents' },
  { id: 'organic' as ThemeType, name: 'Organic Wellness', description: 'Soft curves, earth tones' },
  { id: 'futuristic' as ThemeType, name: 'Futuristic Glass', description: 'Glassmorphism, gradients' },
  { id: 'minimal' as ThemeType, name: 'Minimal Swiss', description: 'Clean, precise grid' },
  { id: 'artdeco' as ThemeType, name: 'Art Deco Luxury', description: 'Gold accents, elegant' },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('brutalist');

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
