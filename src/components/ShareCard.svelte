<script lang="ts">
    import { Share2 } from "lucide-svelte";

    let isCopied = $state(false);

    const handleShare = async () => {
        const shareData = {
            title: "Al Ma'tsurat",
            text: "Daily Prophetic Remembrances - Dzikir Harian Nabi",
            url: window.location.href,
        };

        try {
            if (
                navigator.share &&
                navigator.canShare &&
                navigator.canShare(shareData)
            ) {
                await navigator.share(shareData);
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                isCopied = true;
                setTimeout(() => (isCopied = false), 2000);
            }
        } catch (err) {
            // Ignore AbortError (user cancelled share)
            if (err instanceof Error && err.name !== "AbortError") {
                console.error("Error sharing:", err);
            }
        }
    };
</script>

<div
    class="mt-8 p-6 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl max-w-sm w-full"
>
    <p class="font-serif font-bold text-emerald-900 dark:text-emerald-100 mb-1">
        Merasa aplikasi ini bermanfaat?
    </p>
    <p class="text-xs text-stone-500 dark:text-stone-400 mb-4">
        Bagikan kepada teman dan keluarga. <br />Semoga setiap bacaan mereka
        menjadi pahala jariyah melalui ajakanmu.
    </p>
    <button
        onclick={handleShare}
        class="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-800 dark:bg-emerald-700 text-white rounded-lg hover:bg-emerald-900 dark:hover:bg-emerald-600 transition-colors text-sm font-medium shadow-sm transition-all duration-200"
    >
        <Share2 size={16} class={isCopied ? "hidden" : "block"} />
        {isCopied ? "Tautan Disalin!" : "Bagikan"}
    </button>
</div>
