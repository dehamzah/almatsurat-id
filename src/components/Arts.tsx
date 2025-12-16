
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// --- BACKGROUND ART ---

type PatternVariant = 'star' | 'hex' | 'circle';

interface IslamicArtBackgroundProps {
    variant?: PatternVariant;
}

export const IslamicArtBackground: React.FC<IslamicArtBackgroundProps> = ({ variant = 'star' }) => (
    <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden -z-10 pointer-events-none select-none">
        {/* SVG Pattern */}
        <svg className="w-full h-full text-stone-700/10 dark:text-stone-100/10" width="100%" height="100%">
            <defs>
                {/* Variant 1: 8-Point Star (Rosette) - Best for general Islamic feel */}
                <pattern id="pattern-star" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M32 0 L48 16 L64 0" />
                        <path d="M0 32 L16 16 L32 0" />
                        <path d="M64 32 L48 16 L32 0" />
                        <path d="M32 64 L48 48 L64 64" />
                        <path d="M0 32 L16 48 L32 64" />
                        <path d="M64 32 L48 48 L32 64" />
                        <path d="M16 16 L48 16" />
                        <path d="M16 48 L48 48" />
                        <path d="M16 16 L16 48" />
                        <path d="M48 16 L48 48" />
                        <path d="M32 8 L56 32 L32 56 L8 32 Z" opacity="0.5" />
                    </g>
                </pattern>

                {/* Variant 2: Hexagonal Weave - More geometric/modern */}
                <pattern id="pattern-hex" x="0" y="0" width="56" height="96" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                         <path d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z" />
                         <path d="M28 32 L56 48 L28 64 L0 48 Z" opacity="0.3"/>
                         <path d="M28 0 V32" />
                         <path d="M28 64 V96" />
                         <path d="M0 16 L28 32 L56 16" />
                         <path d="M0 48 L28 32 L56 48" />
                    </g>
                </pattern>

                {/* Variant 3: Overlapping Circles (Floral) - Softer/Organic */}
                <pattern id="pattern-circle" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="0" cy="0" r="20" />
                        <circle cx="40" cy="0" r="20" />
                        <circle cx="0" cy="40" r="20" />
                        <circle cx="40" cy="40" r="20" />
                        <circle cx="20" cy="20" r="20" />
                    </g>
                </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill={`url(#pattern-${variant})`} />
        </svg>

        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-50/20 dark:via-stone-950/20 to-cream-50 dark:to-stone-950"></div>
    </div>
);

// --- SEPARATOR ---
export const SimpleSeparator: React.FC = () => (
    <div className="flex items-center justify-center gap-3 py-12 opacity-40">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-800 dark:via-emerald-200 to-transparent"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-emerald-800 dark:bg-emerald-200"></div>
        <div className="h-px w-16 bg-gradient-to-r from-emerald-800 dark:from-emerald-200 via-emerald-800 dark:via-emerald-200 to-transparent" style={{ transform: 'scaleX(-1)' }}></div>
    </div>
);

// --- PATTERN BACKGROUND (Small Button Decor) ---
export const GeometricPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0H50L75 25L100 0Z" fillOpacity="0.1"/>
        <path d="M100 50V0L75 25L100 50Z" fillOpacity="0.1"/>
        <path d="M50 0L75 25L50 50L25 25L50 0Z" fillOpacity="0.05"/>
        <circle cx="100" cy="0" r="15" fillOpacity="0.1" />
        <circle cx="100" cy="0" r="30" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
    </svg>
);

