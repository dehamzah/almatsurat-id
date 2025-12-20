import { describe, it, expect, vi, beforeEach } from 'vitest';
import { cacheAudio, getCachedAudio, clearAudioCache, getCacheSize, isAudioCached, AUDIO_CACHE_NAME } from './audioCache';

// Mock Blob and URL
global.Blob = class {
    size: number;
    constructor(content: any[], options: any) {
        this.size = content[0].length;
    }
} as any;

global.URL = {
    createObjectURL: vi.fn(() => 'blob:url'),
    revokeObjectURL: vi.fn(),
} as any;

describe('audioCache', () => {
    let cachesMock: any;
    let cacheMock: any;

    beforeEach(() => {
        vi.resetAllMocks();

        cacheMock = {
            add: vi.fn().mockResolvedValue(undefined),
            match: vi.fn(),
            delete: vi.fn().mockResolvedValue(true),
            keys: vi.fn().mockResolvedValue([]),
        };

        cachesMock = {
            open: vi.fn().mockResolvedValue(cacheMock),
            delete: vi.fn().mockResolvedValue(true),
            match: vi.fn(),
        };

        // Mock window.caches
        vi.stubGlobal('caches', cachesMock);
        vi.stubGlobal('window', { caches: cachesMock });
    });

    describe('cacheAudio', () => {
        it('should cache audio successfully', async () => {
            const result = await cacheAudio('/audio.mp3');
            expect(cachesMock.open).toHaveBeenCalledWith(AUDIO_CACHE_NAME);
            expect(cacheMock.add).toHaveBeenCalledWith('/audio.mp3');
            expect(result).toBe(true);
        });

        it('should return false if cache API throws', async () => {
            cacheMock.add.mockRejectedValue(new Error('Failed'));
            const result = await cacheAudio('/audio.mp3');
            expect(result).toBe(false);
        });

        it('should return false if not in browser', async () => {
            vi.stubGlobal('window', undefined);
            const result = await cacheAudio('/audio.mp3');
            expect(result).toBe(false);
        });
    });

    describe('getCachedAudio', () => {
        it('should return blob URL if cached', async () => {
            const blobMock = new Blob(['audio-content'], { type: 'audio/mpeg' });
            cacheMock.match.mockResolvedValue({
                blob: () => Promise.resolve(blobMock)
            });

            const result = await getCachedAudio('/audio.mp3');
            expect(cacheMock.match).toHaveBeenCalledWith('/audio.mp3');
            expect(URL.createObjectURL).toHaveBeenCalledWith(blobMock);
            expect(result).toBe('blob:url');
        });

        it('should return null if not cached', async () => {
            cacheMock.match.mockResolvedValue(undefined);
            const result = await getCachedAudio('/audio.mp3');
            expect(result).toBeNull();
        });

        it('should return null if not in browser', async () => {
            vi.stubGlobal('window', undefined);
            const result = await getCachedAudio('/audio.mp3');
            expect(result).toBeNull();
        });
    });

    describe('clearAudioCache', () => {
        it('should clear cache successfully', async () => {
            const result = await clearAudioCache();
            expect(cachesMock.delete).toHaveBeenCalledWith(AUDIO_CACHE_NAME);
            expect(result).toBe(true);
        });
    });

    describe('isAudioCached', () => {
        it('should return true if cached', async () => {
            cacheMock.match.mockResolvedValue({});
            const result = await isAudioCached('/audio.mp3');
            expect(result).toBe(true);
        });

        it('should return false if not cached', async () => {
            cacheMock.match.mockResolvedValue(undefined);
            const result = await isAudioCached('/audio.mp3');
            expect(result).toBe(false);
        });
    });

    describe('getCacheSize', () => {
        it('should return formatted size', async () => {
            const blob1 = { size: 1024 * 1024 }; // 1MB
            const blob2 = { size: 1024 * 1024 * 1.5 }; // 1.5MB
            
            cacheMock.keys.mockResolvedValue(['req1', 'req2']);
            cacheMock.match
                .mockResolvedValueOnce({ blob: () => Promise.resolve(blob1) })
                .mockResolvedValueOnce({ blob: () => Promise.resolve(blob2) });

            const result = await getCacheSize();
            expect(result).toBe('2.50 MB');
        });

        it('should return 0 MB is empty', async () => {
             cacheMock.keys.mockResolvedValue([]);
             const result = await getCacheSize();
             expect(result).toBe('0 MB');
        });
    });
});
