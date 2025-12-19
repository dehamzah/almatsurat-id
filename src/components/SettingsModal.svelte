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
    } from "../store/settings";

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

    function onClose() {
        isSettingsOpen.set(false);
    }

    // Helpers for checking state
    function handleKeydown(e: KeyboardEvent) {
        if ($isSettingsOpen && e.key === "Escape") {
            onClose();
        }
    }

    $: arabicFontSize = parseInt($arabicFontSizeAtom || "2", 10);
    $: isTransliterationOn = $showTransliterationAtom !== "false";
    $: isTranslationOn = $showTranslationAtom !== "false";

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
