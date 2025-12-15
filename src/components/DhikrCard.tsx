import React, { useMemo } from 'react';

import { DhikrItem } from '../types';
import { SimpleSeparator } from './Arts';
import { useSettings } from '../context/SettingsContext';

interface DhikrCardProps {
  data: DhikrItem;
  index: number;
}

export const DhikrCard: React.FC<DhikrCardProps> = ({ 
  data, 
  index,
}) => {
  const { arabicFontSize, showTransliteration, showTranslation } = useSettings();

  // Map font scale to tailwind classes
  const fontClass = useMemo(() => {
     switch(arabicFontSize) {
        case 1: return 'text-2xl md:text-3xl leading-loose';
        case 2: return 'text-3xl md:text-4xl leading-[2.2]'; // Default
        case 3: return 'text-4xl md:text-5xl leading-[2.4]';
        case 4: return 'text-5xl md:text-6xl leading-[2.6]';
        case 5: return 'text-6xl md:text-7xl leading-[2.8]';
        default: return 'text-3xl md:text-4xl leading-[2.2]';
     }
  }, [arabicFontSize]);

  // Combine content from children
  const combinedArabic = data.children.map(c => c.arabic).join(' ');
  const combinedTransliteration = data.children.map(c => c.transliteration).join(' ');
  const combinedTranslation = data.children.map(c => c.translation).join(' ');
  
  return (
    <div 
      className="w-full mx-auto animate-enter opacity-0"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex flex-col items-center justify-center text-center px-2 md:px-0">
          
          {/* Header Info */}
          <div className="mb-6 flex flex-col items-center gap-2">
              <h3 className="font-sans font-bold text-emerald-900 dark:text-emerald-100 text-sm tracking-widest uppercase">
                  {data.title}
              </h3>
              {data.repeat > 1 && (
                  <span className="text-xs text-gold-600 dark:text-gold-400 font-serif italic font-medium">
                      Dibaca {data.repeat} kali
                  </span>
              )}
          </div>

          {/* Arabic Text */}
          <div className="w-full mb-8" dir="rtl">
              <p lang="ar" className={`font-arabic text-stone-800 dark:text-stone-100 transition-all duration-300 ${fontClass}`}>
                  {combinedArabic}
              </p>
          </div>

          {/* Transliteration & Translation */}
          <div className="space-y-6 max-w-xl mx-auto w-full">
               {/* Transliteration Accordion */}
               {combinedTransliteration && (
                 <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${showTransliteration ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                 >
                   <div className="overflow-hidden">
                     <div className="text-emerald-800 dark:text-emerald-300 italic text-sm md:text-base leading-relaxed pb-2">
                       {combinedTransliteration}
                     </div>
                   </div>
                 </div>
               )}

              {/* Translation Accordion */}
              <div 
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${showTranslation ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                  <div className="overflow-hidden">
                    <div className="text-stone-500 dark:text-stone-400 text-sm md:text-base leading-relaxed pb-2">
                      {combinedTranslation}
                    </div>
                  </div>
              </div>
          </div>

          {data.note && (
              <div className="mt-6 text-xs text-stone-400 dark:text-stone-500 italic max-w-lg mx-auto">
                  <span className="font-bold">Keutamaan:</span> {data.note}
              </div>
          )}

          {/* Separator */}
          <SimpleSeparator />
      </div>
    </div>
  );
};
