import React from 'react';
import { X, Monitor, Sun, Moon, Type, Languages, Minus, Plus } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { 
    theme as themeAtom, 
    arabicFontSize as arabicFontSizeAtom, 
    showTransliteration as showTransliterationAtom, 
    showTranslation as showTranslationAtom,
    isSettingsOpen as isSettingsOpenAtom,
    applyTheme,
    applyFontSize,
    applyVisibility
} from '../store/settings';
import type { Theme } from '../types';

export const SettingsModal: React.FC = () => {
    // Read from store
    const isOpen = useStore(isSettingsOpenAtom);
    const theme = useStore(themeAtom);
    const arabicFontSizeStr = useStore(arabicFontSizeAtom);
    const showTransliterationStr = useStore(showTransliterationAtom);
    const showTranslationStr = useStore(showTranslationAtom);

    // Parse values
    const arabicFontSize = parseInt(arabicFontSizeStr || '2', 10);
    const showTransliteration = showTransliterationStr !== 'false';
    const showTranslation = showTranslationStr !== 'false';

    // Handlers
    const handleSetTheme = (t: Theme) => {
        themeAtom.set(t);
        applyTheme(t);
    };

    const handleSetFontSize = (size: number) => {
        const sizeStr = size.toString();
        arabicFontSizeAtom.set(sizeStr);
        applyFontSize(sizeStr);
    };

    const handleToggleTransliteration = () => {
        const newVal = !showTransliteration;
        showTransliterationAtom.set(String(newVal));
        applyVisibility('transliteration', newVal);
    };

    const handleToggleTranslation = () => {
        const newVal = !showTranslation;
        showTranslationAtom.set(String(newVal));
        applyVisibility('translation', newVal);
    };

    const onClose = () => isSettingsOpenAtom.set(false);

    return (
        <div 
            className={`fixed inset-0 z-[60] flex items-end md:items-center justify-center transition-all duration-300 ${
                isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            }`}
            aria-hidden={!isOpen}
        >
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div 
                className={`relative bg-white dark:bg-stone-900 w-full md:w-96 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar transform transition-all duration-300 ease-out z-10 ${
                    isOpen 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-full md:translate-y-8 md:opacity-0 md:scale-95'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center sticky top-0 bg-white dark:bg-stone-900 z-10">
                    <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100">Pengaturan</h3>
                    <button onClick={onClose} aria-label="Close settings" className="p-1 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    
                    {/* Theme Option */}
                    <div>
                        <label className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block">Tampilan</label>
                        <div className="bg-stone-100 dark:bg-stone-800 p-1 rounded-xl flex" role="radiogroup" aria-label="Tampilan">
                            {(['auto', 'light', 'dark'] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => handleSetTheme(t)}
                                    role="radio"
                                    aria-checked={theme === t}
                                    className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                                        theme === t 
                                        ? 'bg-white dark:bg-stone-700 text-emerald-900 dark:text-emerald-100 shadow-sm' 
                                        : 'text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200'
                                    }`}
                                >
                                    {t === 'auto' && <Monitor size={16} />}
                                    {t === 'light' && <Sun size={16} />}
                                    {t === 'dark' && <Moon size={16} />}
                                    <span className="capitalize">
                                        {t === 'auto' ? 'Otomatis' : t === 'light' ? 'Terang' : 'Gelap'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Display Options */}
                    <div>
                         <label className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block">Tampilan Bacaan</label>
                         <div className="space-y-3">
                            <button 
                                onClick={handleToggleTransliteration}
                                role="switch"
                                aria-checked={showTransliteration}
                                className="w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Type size={18} className="text-stone-400" />
                                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Transliterasi</span>
                                </div>
                                <div className={`w-10 h-6 rounded-full transition-colors relative ${showTransliteration ? 'bg-emerald-500' : 'bg-stone-200 dark:bg-stone-700'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${showTransliteration ? 'left-5' : 'left-1'}`}></div>
                                </div>
                            </button>

                            <button 
                                onClick={handleToggleTranslation}
                                role="switch"
                                aria-checked={showTranslation}
                                className="w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Languages size={18} className="text-stone-400" />
                                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Terjemahan</span>
                                </div>
                                <div className={`w-10 h-6 rounded-full transition-colors relative ${showTranslation ? 'bg-emerald-500' : 'bg-stone-200 dark:bg-stone-700'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${showTranslation ? 'left-5' : 'left-1'}`}></div>
                                </div>
                            </button>
                         </div>
                    </div>

                    {/* Font Size Option */}
                    <div>
                        <label className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block">Ukuran Font Arab</label>
                        <div className="flex items-center justify-between bg-stone-50 dark:bg-stone-800 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                             <button 
                                onClick={() => handleSetFontSize(Math.max(1, arabicFontSize - 1))}
                                disabled={arabicFontSize <= 1}
                                aria-label="Decrease font size"
                                className="w-12 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-stone-700 shadow-sm border border-stone-100 dark:border-stone-600 text-stone-600 dark:text-stone-300 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                             >
                                <Minus size={18} />
                             </button>
                             
                             <div className="flex-1 flex flex-col items-center">
                                 <span className="text-stone-800 dark:text-stone-200 font-bold">{arabicFontSize}</span>
                                 <div className="flex gap-1 mt-1">
                                     {[1,2,3,4,5].map(i => (
                                         <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= arabicFontSize ? 'bg-emerald-500' : 'bg-stone-200 dark:bg-stone-600'}`} />
                                     ))}
                                 </div>
                             </div>

                             <button 
                                onClick={() => handleSetFontSize(Math.min(5, arabicFontSize + 1))}
                                disabled={arabicFontSize >= 5}
                                aria-label="Increase font size"
                                className="w-12 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-stone-700 shadow-sm border border-stone-100 dark:border-stone-600 text-stone-600 dark:text-stone-300 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                             >
                                <Plus size={18} />
                             </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="font-arabic text-emerald-900 dark:text-emerald-100 transition-all duration-300" style={{ fontSize: 'var(--arabic-size)' }}>
                                بِسْمِ اللَّهِ
                            </p>
                        </div>
                    </div>
                    
                    {/* Info */}
                    <div className="pt-4 border-t border-stone-100 dark:border-stone-800 text-center">
                        <p className="text-xs text-stone-400">
                           Al Ma'tsurat v1.5.0
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
