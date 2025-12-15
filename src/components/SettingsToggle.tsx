import React from 'react';
import { Settings } from 'lucide-react';
import { isSettingsOpen } from '../store/settings';

export const SettingsToggle: React.FC = () => {
    return (
        <button 
            onClick={() => isSettingsOpen.set(true)}
            aria-label="Open settings"
            className="p-2 text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
        >
            <Settings size={20} />
        </button>
    );
};
