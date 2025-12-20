export const AUDIO_CACHE_NAME = 'almatsurat-audio-cache-v1';

function isBrowser(): boolean {
    return typeof window !== 'undefined' && 'caches' in window;
}

export async function cacheAudio(url: string): Promise<boolean> {
    if (!isBrowser()) return false;

    try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        await cache.add(url);
        return true;
    } catch (e) {
        console.error('Failed to cache audio:', e);
        return false;
    }
}

export async function getCachedAudio(url: string): Promise<string | null> {
    if (!isBrowser()) return null;

    try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        const response = await cache.match(url);
        
        if (response) {
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        }
        return null;
    } catch (e) {
        console.error('Failed to get cached audio:', e);
        return null;
    }
}

export async function clearAudioCache(): Promise<boolean> {
    if (!isBrowser()) return false;

    try {
        await caches.delete(AUDIO_CACHE_NAME);
        return true;
    } catch (e) {
        console.error('Failed to clear audio cache:', e);
        return false;
    }
}

export async function getCacheSize(): Promise<string> {
    if (!isBrowser()) return '0 MB';

    try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        const keys = await cache.keys();
        let totalSize = 0;

        for (const request of keys) {
            const response = await cache.match(request);
            if (response) {
                const blob = await response.blob();
                totalSize += blob.size;
            }
        }

        if (totalSize === 0) return '0 MB';
        
        const sizeInMB = totalSize / (1024 * 1024);
        return `${sizeInMB.toFixed(2)} MB`;
    } catch (e) {
        console.error('Failed to get cache size:', e);
        return 'Unknown';
    }
}

export async function isAudioCached(url: string): Promise<boolean> {
    if (!isBrowser()) return false;
    
    try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        const response = await cache.match(url);
        return !!response;
    } catch {
        return false;
    }
}
