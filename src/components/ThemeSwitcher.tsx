import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground font-heading hover:bg-secondary/50 transition-colors"
        >
          <span>Select Theme ({themes.length})</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="p-2 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-1 gap-1">
              {themes.map((t, index) => (
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
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <span className="font-medium text-xs">{t.name}</span>
                  <span className="block text-[10px] opacity-70">{t.description}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
