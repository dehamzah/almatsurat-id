<script lang="ts">
    import { Play, Pause, Loader2, CircleAlert } from "lucide-svelte";
    import { onMount } from "svelte";
    import { audioCacheEnabled } from "../store/settings";
    import { getCachedAudio, cacheAudio } from "../utils/audioCache";
    import Toast from "./Toast.svelte";

    interface Props {
        mode: "pagi" | "petang";
        size: "sughro" | "kubro";
    }

    let { mode, size }: Props = $props();

    let audio: HTMLAudioElement;
    let isPlaying = $state(false);
    let isLoading = $state(false);
    let currentSrc = $state("");
    let showErrorToast = $state(false);

    const BASE_PATH_AUDIO =
        "https://github.com/dehamzah/almatsurat-audio/raw/refs/heads/main/aac";
    const audioMap: Record<string, string> = {
        "pagi-sughro": BASE_PATH_AUDIO + "/al_matsurat_pagi_sughro.m4a",
        "pagi-kubro": BASE_PATH_AUDIO + "/al_matsurat_pagi_kubro.m4a",
        "petang-sughro": BASE_PATH_AUDIO + "/al_matsurat_petang_sughro.m4a",
        "petang-kubro": BASE_PATH_AUDIO + "/al_matsurat_petang_kubro.m4a",
    };

    let remoteSrc = $derived(audioMap[`${mode}-${size}`]);

    // Check for cached version when source changes
    $effect(() => {
        if (remoteSrc) {
            checkCache(remoteSrc);
        }
    });

    async function checkCache(url: string) {
        // Reset to remote first to avoid stale blob
        currentSrc = url;
        const cachedBlob = await getCachedAudio(url);
        if (cachedBlob) {
            console.log("Using cached audio for:", url);
            currentSrc = cachedBlob;
        }
    }

    function closeErrorToast() {
        showErrorToast = false;
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
                showErrorToast = true;
                // Auto hide after 5 seconds
                setTimeout(() => {
                    showErrorToast = false;
                }, 5000);
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
        showErrorToast = true;
    }
</script>

{#if showErrorToast}
    <div class="fixed top-4 right-4 z-50">
        <Toast
            type="error"
            title="Gagal Memutar Audio"
            message="Periksa koneksi internet anda atau coba lagi nanti."
            onClose={closeErrorToast}
        >
            {#snippet icon()}
                <CircleAlert size={18} />
            {/snippet}
        </Toast>
    </div>
{/if}

<div class="flex items-center">
    <audio
        bind:this={audio}
        src={currentSrc}
        onplay={handlePlay}
        onpause={handlePause}
        onended={handleEnded}
        onerror={handleError}
        class="hidden"
        preload="none"
    ></audio>

    <button
        onclick={togglePlay}
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
