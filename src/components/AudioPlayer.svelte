<script lang="ts">
    import { Play, Pause, Loader2 } from "lucide-svelte";
    import { onMount } from "svelte";

    export let mode: "pagi" | "petang";
    export let size: "sughro" | "kubro";

    let audio: HTMLAudioElement;
    let isPlaying = false;
    let isLoading = false;

    const BASE_PATH_AUDIO =
        "https://github.com/dehamzah/almatsurat-audio/raw/refs/heads/main";
    const audioMap: Record<string, string> = {
        "pagi-sughro": BASE_PATH_AUDIO + "/al_matsurat_pagi_sughro.mp3",
        "pagi-kubro": BASE_PATH_AUDIO + "/al_matsurat_pagi_kubro.mp3",
        "petang-sughro": BASE_PATH_AUDIO + "/al_matsurat_petang_sughro.mp3",
        "petang-kubro": BASE_PATH_AUDIO + "/al_matsurat_petang_kubro.mp3",
    };

    $: src = audioMap[`${mode}-${size}`];

    async function togglePlay() {
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            isLoading = true;
            try {
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
        {src}
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
