<script lang="ts">
    import { Play, Pause, Loader2, CircleAlert } from "lucide-svelte";
    import { untrack } from "svelte";
    import { getAudioUrlById } from "../data/audio";
    import { getCachedAudio } from "../utils/audioCache";
    import Toast from "./Toast.svelte";

    import { audioCacheVersion } from "../store/settings";

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

    let remoteSrc = $derived(getAudioUrlById(`${mode}-${size}`) || "");

    // Check for cached version when source changes or cache version updates
    $effect(() => {
        // We depend on audioCacheVersion to re-check when downloads happen
        const _ = $audioCacheVersion;

        if (remoteSrc) {
            // CRITICAL: specific user request - do not swap src if already playing
            // Use untrack to prevent re-running this effect when isPlaying changes
            const playing = untrack(() => isPlaying);
            if (!playing) {
                checkCache(remoteSrc);
            }
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
                // Just play, cache check happened in effect
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
