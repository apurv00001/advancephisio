import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 shadow-xl">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-heading">
          Select Theme
        </p>
        <div className="flex flex-col gap-1">
          {themes.map((t) => (
            <motion.button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`px-3 py-2 text-left text-sm rounded transition-all ${
                theme === t.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary text-foreground'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">{t.name}</span>
              <span className="block text-xs opacity-70">{t.description}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
