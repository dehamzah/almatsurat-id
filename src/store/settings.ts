import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';
import type { Theme } from '../types';

export const DEFAULT_SETTINGS = {
    theme: 'auto' as Theme,
    arabicFontSize: '2',
    showTransliteration: 'false',
    showTranslation: 'true'
};

export const isSettingsOpen = atom(false);

export const theme = persistentAtom<Theme>('settings:theme', DEFAULT_SETTINGS.theme);
export const arabicFontSize = persistentAtom<string>('settings:arabicFontSize', DEFAULT_SETTINGS.arabicFontSize);
export const showTransliteration = persistentAtom<string>('settings:showTransliteration', DEFAULT_SETTINGS.showTransliteration);
export const showTranslation = persistentAtom<string>('settings:showTranslation', DEFAULT_SETTINGS.showTranslation);

export function applyTheme(t: Theme) {
    if (typeof document === 'undefined') return;
    if (t === 'dark' || (t === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export function applyFontSize(size: string) {
    if (typeof document === 'undefined') return;
    const sizes: Record<string, string> = {
        '1': '1.5rem',
        '2': '1.875rem',
        '3': '2.25rem',
        '4': '3rem',
        '5': '3.75rem'
    };
    const sizeVal = sizes[size] || '1.875rem';
    document.documentElement.style.setProperty('--arabic-size', sizeVal);
}

export function applyVisibility(type: 'transliteration' | 'translation', show: boolean) {
    if (typeof document === 'undefined') return;
    const cls = `hide-${type}`;
    if (!show) {
        document.documentElement.classList.add(cls);
    } else {
        document.documentElement.classList.remove(cls);
    }
}
