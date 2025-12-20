<script lang="ts">
    import { onMount } from "svelte";

    import { registerSW } from "virtual:pwa-register";

    let props = $props();

    let showOfflineToast = $state(false);
    let showRefreshToast = $state(false);
    let updateSW: (reloadPage?: boolean) => Promise<void>;

    function closeOfflineToast() {
        showOfflineToast = false;
    }

    function closeRefreshToast() {
        showRefreshToast = false;
    }

    async function handleRefresh() {
        if (updateSW) {
            await updateSW(true);
        }
        showRefreshToast = false;
    }

    onMount(() => {
        updateSW = registerSW({
            // 1 hour check interval
            onRegisteredSW(
                swUrl: string,
                registration: ServiceWorkerRegistration | undefined,
            ) {
                setInterval(
                    async () => {
                        if (!registration || !registration.installing) return;
                        await registration.update();
                    },
                    60 * 60 * 1000,
                );
            },
            onOfflineReady() {
                showOfflineToast = true;
                // Auto hide after 5 seconds
                setTimeout(() => {
                    showOfflineToast = false;
                }, 5000);
            },
            onNeedRefresh() {
                showRefreshToast = true;
            },
        });
    });
</script>

<div {...props}>
    {#if showOfflineToast}
        <div
            class="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg border border-emerald-200 bg-white p-4 shadow-lg shadow-emerald-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none"
            role="alert"
            aria-live="polite"
        >
            <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-wifi-off"
                >
                    <path d="M12 20h.01" /><path
                        d="M8.5 16.429a5 5 0 0 1 7 0"
                    /><path d="M5 12.859a10 10 0 0 1 14 0" /><path
                        d="M1.5 9.289a14 14 0 0 1 21 0"
                    /><path d="M2 2l20 20" />
                </svg>
            </div>
            <div class="flex-1">
                <h3
                    class="text-sm font-semibold text-stone-900 dark:text-stone-100"
                >
                    Siap Offline
                </h3>
                <p class="text-xs text-stone-600 dark:text-stone-400">
                    Aplikasi dapat dibuka tanpa internet.
                </p>
            </div>
            <button
                onclick={closeOfflineToast}
                class="ml-2 rounded-md p-1.5 text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700"
                aria-label="Tutup"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
            </button>
        </div>
    {/if}

    {#if showRefreshToast}
        <div
            class="fixed bottom-4 right-4 z-50 flex max-w-sm flex-col gap-3 rounded-lg border border-blue-200 bg-white p-4 shadow-lg shadow-blue-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none sm:flex-row sm:items-center"
            role="alert"
        >
            <div class="flex items-center gap-3">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-refresh-cw"
                        ><path
                            d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                        /><path d="M21 3v5h-5" /><path
                            d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                        /><path d="M3 21v-5h5" /></svg
                    >
                </div>
                <div>
                    <h3
                        class="text-sm font-semibold text-stone-900 dark:text-stone-100"
                    >
                        Update Tersedia
                    </h3>
                    <p class="text-xs text-stone-600 dark:text-stone-400">
                        Versi baru aplikasi tersedia.
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2 sm:ml-auto">
                <button
                    onclick={handleRefresh}
                    class="whitespace-nowrap rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                    Update
                </button>
                <button
                    onclick={closeRefreshToast}
                    class="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-700"
                >
                    Nanti
                </button>
            </div>
        </div>
    {/if}
</div>
