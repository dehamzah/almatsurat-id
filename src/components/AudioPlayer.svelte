<script lang="ts">
    import { Play, Pause, Loader2 } from "lucide-svelte";
    import { onMount } from "svelte";
    import { audioCacheEnabled } from "../store/settings";
    import { getCachedAudio, cacheAudio } from "../utils/audioCache";

    export let mode: "pagi" | "petang";
    export let size: "sughro" | "kubro";

    let audio: HTMLAudioElement;
    let isPlaying = false;
    let isLoading = false;
    let currentSrc = "";

    const BASE_PATH_AUDIO = "/audio";
    const audioMap: Record<string, string> = {
        "pagi-sughro": BASE_PATH_AUDIO + "/al_matsurat_pagi_sughro.mp3",
        "pagi-kubro": BASE_PATH_AUDIO + "/al_matsurat_pagi_kubro.mp3",
        "petang-sughro": BASE_PATH_AUDIO + "/al_matsurat_petang_sughro.mp3",
        "petang-kubro": BASE_PATH_AUDIO + "/al_matsurat_petang_kubro.mp3",
    };

    $: remoteSrc = audioMap[`${mode}-${size}`];

    // Check for cached version when source changes
    $: if (remoteSrc) {
        checkCache(remoteSrc);
    }

    async function checkCache(url: string) {
        // Reset to remote first to avoid stale blob
        currentSrc = url;
        const cachedBlob = await getCachedAudio(url);
        if (cachedBlob) {
            console.log("Using cached audio for:", url);
            currentSrc = cachedBlob;
        }
    }

    async function togglePlay() {
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            isLoading = true;
            try {
                // If not using cache yet, and caching allowed, try to cache
                if ($audioCacheEnabled === "true" && currentSrc === remoteSrc) {
                    console.log("Triggering background cache for:", remoteSrc);
                    // Don't await this, let it happen in background
                    cacheAudio(remoteSrc).then((startCaching) => {
                        if (startCaching) {
                            console.log("Cached successfully");
                        }
                    });
                }

                await audio.play();
            } catch (e) {
                console.error("Error playing audio:", e);
                alert("Gagal memutar audio. Periksa koneksi internet anda.");
            } finally {
                isLoading = false;
            }
        }
    }

    function handlePlay() {
        isPlaying = true;
        isLoading = false;
    }

    function handlePause() {
        isPlaying = false;
    }

    function handleEnded() {
        isPlaying = false;
        audio.currentTime = 0;
    }

    function handleError(e: Event) {
        isLoading = false;
        isPlaying = false;
        console.error("Audio error:", e);
    }
</script>

<div class="flex items-center">
    <audio
        bind:this={audio}
        src={currentSrc}
        on:play={handlePlay}
        on:pause={handlePause}
        on:ended={handleEnded}
        on:error={handleError}
        class="hidden"
        preload="none"
    ></audio>

    <button
        on:click={togglePlay}
        class="p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-full transition-colors flex items-center justify-center"
        aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
        title={isPlaying ? "Pause Audio" : "Play Audio"}
        data-testid="audio-player-button"
    >
        {#if isLoading}
            <Loader2
                size={20}
                class="animate-spin text-emerald-600 dark:text-emerald-400"
            />
        {:else if isPlaying}
            <Pause size={20} />
        {:else}
            <Play size={20} />
        {/if}
    </button>
</div>
