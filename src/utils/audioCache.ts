export const AUDIO_CACHE_NAME = 'almatsurat-audio-cache-v1';

function isBrowser(): boolean {
    return typeof window !== 'undefined' && 'caches' in window;
}

export async function cacheAudio(url: string, onProgress?: (percentage: number) => void): Promise<boolean> {
    if (!isBrowser()) return false;

    try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        
        // Fetch the resource
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);

        const contentLengthHeader = response.headers.get('Content-Length');
        const totalLength = contentLengthHeader ? parseInt(contentLengthHeader, 10) : 0;
        
        // If we can't track progress (no content-length) or no callback provided, just put directly
        if (!totalLength || !onProgress) {
             await cache.put(url, response);
             if (onProgress) onProgress(100);
             return true;
        }

        // Clone the response stream
        const [stream1, stream2] = response.body!.tee();

        // Stream 1: Use for caching
        // We need to construct a new Response because the body is used
        const cacheResponse = new Response(stream1, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
        });
        
        // Start caching in "background" (promise 1)
        const cachePromise = cache.put(url, cacheResponse);

        // Stream 2: Read to calculate progress
        const reader = stream2.getReader();
        let receivedLength = 0;

        // Process the stream
        const progressPromise = (async () => {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                receivedLength += value.length;
                const progress = Math.min((receivedLength / totalLength) * 100, 100);
                onProgress(progress);
            }
        })();

        // Wait for both to finish
        await Promise.all([cachePromise, progressPromise]);
        
        // Ensure 100% at end
        onProgress(100);
        return true;
    } catch (e) {
        return false;
    }
}

export async function deleteCachedAudio(url: string): Promise<boolean> {
    if (!isBrowser()) return false;

    try {
        const cache = await caches.open(AUDIO_CACHE_NAME);
        return await cache.delete(url);
    } catch (e) {
        console.error('Failed to delete cached audio:', e);
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
