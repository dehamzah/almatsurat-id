<script lang="ts">
    import {
        X,
        Monitor,
        Sun,
        Moon,
        Type,
        Languages,
        Minus,
        Plus,
    } from "lucide-svelte";
    import { version } from "../../package.json";
    import type { Theme } from "../types";
    import { fade, fly, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import {
        theme,
        arabicFontSize as arabicFontSizeAtom,
        showTransliteration as showTransliterationAtom,
        showTranslation as showTranslationAtom,
        isSettingsOpen,
        applyTheme,
        applyFontSize,
        applyVisibility,
        audioCacheVersion,
    } from "../store/settings";
    import {
        getCacheSize,
        clearAudioCache,
        cacheAudio,
        deleteCachedAudio,
        isAudioCached,
    } from "../utils/audioCache";
    import { AUDIO_TRACKS, getAudioUrl } from "../data/audio";
    import { onMount } from "svelte";
    import { Download, Check, Trash2, Loader, PlayCircle } from "lucide-svelte";

    // Derived values (handled automatically by Svelte reactivity with $store)
    // We need to parse strings for logic

    // Handlers
    function handleSetTheme(t: Theme) {
        theme.set(t);
        applyTheme(t);
    }

    function handleSetFontSize(size: number) {
        const sizeStr = size.toString();
        arabicFontSizeAtom.set(sizeStr);
        applyFontSize(sizeStr);
    }

    function handleToggleTransliteration() {
        // Toggle boolean from string state
        const current = $showTransliterationAtom !== "false";
        const newVal = !current;
        showTransliterationAtom.set(String(newVal));
        applyVisibility("transliteration", newVal);
    }

    function handleToggleTranslation() {
        const current = $showTranslationAtom !== "false";
        const newVal = !current;
        showTranslationAtom.set(String(newVal));
        applyVisibility("translation", newVal);
    }

    let audioStatus = $state<Record<string, "idle" | "downloading" | "cached">>(
        {},
    );
    let downloadProgress = $state<Record<string, number>>({});

    function updateAudioStatus() {
        AUDIO_TRACKS.forEach(async (track) => {
            const url = getAudioUrl(track);
            const isCached = await isAudioCached(url);
            if (audioStatus[track.id] !== "downloading") {
                audioStatus[track.id] = isCached ? "cached" : "idle";
            }
        });
    }

    // Initial check
    $effect(() => {
        if ($isSettingsOpen) {
            updateAudioStatus();
            updateCacheSize();
        }
    });

    async function handleDownload(id: string) {
        const track = AUDIO_TRACKS.find((t) => t.id === id);
        if (!track) return;

        audioStatus[id] = "downloading";
        downloadProgress[id] = 0;

        const url = getAudioUrl(track);
        const success = await cacheAudio(url, (progress) => {
            downloadProgress[id] = progress;
        });

        if (success) {
            audioStatus[id] = "cached";
            updateCacheSize();
            const currentVer = $audioCacheVersion;
            audioCacheVersion.set(currentVer + 1);
        } else {
            audioStatus[id] = "idle";
            // Optional: show error toast?
        }
    }

    async function handleDelete(id: string) {
        const track = AUDIO_TRACKS.find((t) => t.id === id);
        if (!track) return;

        const url = getAudioUrl(track);
        await deleteCachedAudio(url);
        audioStatus[id] = "idle";
        updateCacheSize();
        const currentVer = $audioCacheVersion;
        audioCacheVersion.set(currentVer + 1);
    }

    let cacheSize = $state("...");
    let isClearingCache = $state(false);

    async function updateCacheSize() {
        cacheSize = await getCacheSize();
    }

    async function handleClearCache() {
        isClearingCache = true;
        await clearAudioCache();
        await updateCacheSize();
        const currentVer = $audioCacheVersion;
        audioCacheVersion.set(currentVer + 1);
        // Reset status
        AUDIO_TRACKS.forEach((track) => {
            audioStatus[track.id] = "idle";
        });
        isClearingCache = false;
    }

    // Refresh cache size when modal opens
    $effect(() => {
        if ($isSettingsOpen) {
            updateCacheSize();
        }
    });

    function onClose() {
        isSettingsOpen.set(false);
    }

    // Helpers for checking state
    function handleKeydown(e: KeyboardEvent) {
        if ($isSettingsOpen && e.key === "Escape") {
            onClose();
        }
    }

    let arabicFontSize = $derived(parseInt($arabicFontSizeAtom || "2", 10));
    let isTransliterationOn = $derived($showTransliterationAtom !== "false");
    let isTranslationOn = $derived($showTranslationAtom !== "false");

    const themeOptions: Theme[] = ["auto", "light", "dark"];
</script>

<svelte:window onkeydown={handleKeydown} />

{#if $isSettingsOpen}
    <div
        class="fixed inset-0 z-[60] flex items-end md:items-center justify-center"
        role="dialog"
        aria-modal="true"
    >
        <!-- Backdrop -->
        <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
        <!-- Reason: Keyboard users can use the URL hash, existing close button, or Escape key to close the modal. -->
        <div
            class="absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
            role="presentation"
            onclick={onClose}
            transition:fade={{ duration: 300 }}
        ></div>

        <!-- Modal Content -->
        <div
            class="relative bg-white dark:bg-stone-900 w-full md:w-96 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar z-10"
            transition:fly={{ y: 200, duration: 300, easing: quintOut }}
        >
            <div
                class="px-6 py-4 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center sticky top-0 bg-white dark:bg-stone-900 z-10"
            >
                <h3
                    class="font-bold text-lg text-stone-800 dark:text-stone-100"
                >
                    Pengaturan
                </h3>
                <button
                    data-testid="settings-close-button"
                    onclick={onClose}
                    aria-label="Close settings"
                    class="p-1 -mr-1 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
                >
                    <X size={20} />
                </button>
            </div>
            <div class="p-6 space-y-6">
                <!-- Theme Option -->
                <div>
                    <span
                        class="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block"
                        >Tampilan</span
                    >
                    <div
                        class="bg-stone-100 dark:bg-stone-800 p-1 rounded-xl flex"
                        role="radiogroup"
                        aria-label="Tampilan"
                    >
                        {#each themeOptions as t}
                            <button
                                onclick={() => handleSetTheme(t)}
                                role="radio"
                                aria-checked={$theme === t}
                                class="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all {$theme ===
                                t
                                    ? 'bg-white dark:bg-stone-700 text-emerald-900 dark:text-emerald-100 shadow-sm'
                                    : 'text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200'}"
                            >
                                {#if t === "auto"}
                                    <Monitor size={16} />
                                {/if}
                                {#if t === "light"}
                                    <Sun size={16} />
                                {/if}
                                {#if t === "dark"}
                                    <Moon size={16} />
                                {/if}
                                <span class="capitalize">
                                    {t === "auto"
                                        ? "Otomatis"
                                        : t === "light"
                                          ? "Terang"
                                          : "Gelap"}
                                </span>
                            </button>
                        {/each}
                    </div>
                </div>

                <!-- Display Options -->
                <div>
                    <span
                        class="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block"
                        >Tampilan Bacaan</span
                    >
                    <div class="space-y-3">
                        <button
                            onclick={handleToggleTransliteration}
                            role="switch"
                            aria-checked={isTransliterationOn}
                            class="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                        >
                            <div class="flex items-center gap-3">
                                <Type size={18} class="text-stone-400" />
                                <span
                                    class="text-sm font-medium text-stone-700 dark:text-stone-300"
                                    >Transliterasi</span
                                >
                            </div>
                            <div
                                class="w-10 h-6 rounded-full transition-colors relative {isTransliterationOn
                                    ? 'bg-emerald-500'
                                    : 'bg-stone-200 dark:bg-stone-700'}"
                            >
                                <div
                                    class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all {isTransliterationOn
                                        ? 'left-5'
                                        : 'left-1'}"
                                ></div>
                            </div>
                        </button>

                        <button
                            onclick={handleToggleTranslation}
                            role="switch"
                            aria-checked={isTranslationOn}
                            class="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                        >
                            <div class="flex items-center gap-3">
                                <Languages size={18} class="text-stone-400" />
                                <span
                                    class="text-sm font-medium text-stone-700 dark:text-stone-300"
                                    >Terjemahan</span
                                >
                            </div>
                            <div
                                class="w-10 h-6 rounded-full transition-colors relative {isTranslationOn
                                    ? 'bg-emerald-500'
                                    : 'bg-stone-200 dark:bg-stone-700'}"
                            >
                                <div
                                    class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all {isTranslationOn
                                        ? 'left-5'
                                        : 'left-1'}"
                                ></div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Font Size Option -->
                <div>
                    <span
                        class="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block"
                        >Ukuran Font Arab</span
                    >
                    <div
                        class="flex items-center justify-between bg-stone-50 dark:bg-stone-800 p-2 rounded-xl border border-stone-200 dark:border-stone-700"
                    >
                        <button
                            onclick={() =>
                                handleSetFontSize(
                                    Math.max(1, arabicFontSize - 1),
                                )}
                            disabled={arabicFontSize <= 1}
                            aria-label="Decrease font size"
                            class="cursor-pointer w-12 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-stone-700 shadow-sm border border-stone-100 dark:border-stone-600 text-stone-600 dark:text-stone-300 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Minus size={18} />
                        </button>

                        <div class="flex-1 flex flex-col items-center">
                            <span
                                class="text-stone-800 dark:text-stone-200 font-bold"
                                >{arabicFontSize}</span
                            >
                            <div class="flex gap-1 mt-1">
                                {#each [1, 2, 3, 4, 5] as i}
                                    <div
                                        class="w-1.5 h-1.5 rounded-full {i <=
                                        arabicFontSize
                                            ? 'bg-emerald-500'
                                            : 'bg-stone-200 dark:bg-stone-600'}"
                                    ></div>
                                {/each}
                            </div>
                        </div>

                        <button
                            onclick={() =>
                                handleSetFontSize(
                                    Math.min(5, arabicFontSize + 1),
                                )}
                            disabled={arabicFontSize >= 5}
                            aria-label="Increase font size"
                            class="cursor-pointer w-12 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-stone-700 shadow-sm border border-stone-100 dark:border-stone-600 text-stone-600 dark:text-stone-300 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Plus size={18} />
                        </button>
                    </div>
                    <div class="mt-4 text-center">
                        <p
                            class="font-arabic text-emerald-900 dark:text-emerald-100 transition-all duration-300"
                            style="font-size: var(--arabic-size)"
                        >
                            بِسْمِ اللَّهِ
                        </p>
                    </div>
                </div>

                <!-- Audio Cache Option -->
                <div>
                    <span
                        class="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 block"
                        >Audio Offline</span
                    >
                    <div class="space-y-3">
                        <div
                            class="bg-stone-50 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700"
                        >
                            {#each AUDIO_TRACKS as track}
                                <div
                                    class="p-3 border-b border-stone-200 dark:border-stone-700 last:border-0 flex items-center justify-between gap-3"
                                    data-testid={`audio-track-${track.id}`}
                                >
                                    <div class="flex-1 min-w-0">
                                        <div
                                            class="flex items-center gap-2 mb-1"
                                        >
                                            <PlayCircle
                                                size={16}
                                                class="text-stone-400"
                                            />
                                            <span
                                                class="text-sm font-medium text-stone-700 dark:text-stone-300 truncate"
                                            >
                                                {track.label}
                                            </span>
                                        </div>
                                        {#if audioStatus[track.id] === "downloading"}
                                            <div
                                                class="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-1.5 mt-2"
                                            >
                                                <div
                                                    class="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                                                    style="width: {Math.round(
                                                        downloadProgress[
                                                            track.id
                                                        ],
                                                    )}%"
                                                ></div>
                                            </div>
                                            <div
                                                class="flex justify-between mt-1"
                                            >
                                                <span
                                                    class="text-[10px] text-stone-400"
                                                    >Mengunduh...</span
                                                >
                                                <span
                                                    class="text-[10px] text-stone-400"
                                                    >{Math.round(
                                                        downloadProgress[
                                                            track.id
                                                        ],
                                                    )}%</span
                                                >
                                            </div>
                                        {:else if audioStatus[track.id] === "cached"}
                                            <span
                                                class="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1"
                                            >
                                                <Check size={10} />
                                                Tersimpan
                                            </span>
                                        {:else}
                                            <span
                                                class="text-[10px] text-stone-400"
                                            >
                                                Belum diunduh
                                            </span>
                                        {/if}
                                    </div>

                                    <div class="flex items-center">
                                        {#if audioStatus[track.id] === "downloading"}
                                            <div
                                                class="w-8 h-8 flex items-center justify-center"
                                            >
                                                <Loader
                                                    size={16}
                                                    class="animate-spin text-emerald-500"
                                                />
                                            </div>
                                        {:else if audioStatus[track.id] === "cached"}
                                            <button
                                                onclick={() =>
                                                    handleDelete(track.id)}
                                                class="w-8 h-8 flex items-center justify-center rounded-full text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                title="Hapus audio"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        {:else}
                                            <button
                                                onclick={() =>
                                                    handleDownload(track.id)}
                                                class="w-8 h-8 flex items-center justify-center rounded-full text-stone-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                                                title="Unduh audio"
                                            >
                                                <Download size={16} />
                                            </button>
                                        {/if}
                                    </div>
                                </div>
                            {/each}
                        </div>

                        {#if isClearingCache}
                            <div
                                class="flex items-center justify-center p-2 text-sm text-stone-500"
                            >
                                <Loader size={14} class="animate-spin mr-2" />
                                Menghapus semua data...
                            </div>
                        {:else if cacheSize !== "0 MB" && cacheSize !== "..."}
                            <button
                                onclick={handleClearCache}
                                class="w-full text-xs text-red-500 hover:text-red-600 dark:hover:text-red-400 underline decoration-red-200 dark:decoration-red-900 decoration-1 underline-offset-2 transition-colors"
                            >
                                Hapus Semua Audio ({cacheSize})
                            </button>
                        {/if}
                    </div>
                </div>

                <!-- Info -->
                <div
                    class="pt-4 border-t border-stone-100 dark:border-stone-800 text-center flex flex-col items-center gap-2"
                >
                    <a
                        href="/about"
                        class="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                        Tentang Aplikasi
                    </a>
                    <p class="text-xs text-stone-400">
                        v{version}
                    </p>
                </div>
            </div>
        </div>
    </div>
{/if}
