import { describe, it, expect } from 'vitest';
import { toCapitalized } from './string';

describe('toCapitalized', () => {
    it('capitalizes the first letter of a lowercase word', () => {
        expect(toCapitalized('hello')).toBe('Hello');
    });

    it('handles already capitalized words', () => {
        expect(toCapitalized('World')).toBe('World');
    });

    it('handles mixed case strings', () => {
        expect(toCapitalized('javaScript')).toBe('JavaScript');
    });

    it('handles single character strings', () => {
        expect(toCapitalized('a')).toBe('A');
    });

    it('handles empty strings', () => {
        expect(toCapitalized('')).toBe('');
    });
});
