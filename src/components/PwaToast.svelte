<script lang="ts">
    import { onMount } from "svelte";
    import { registerSW } from "virtual:pwa-register";
    import { WifiOff, RefreshCw } from "lucide-svelte";
    import Toast from "./Toast.svelte";

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
        <div class="fixed bottom-4 right-4 z-50">
            <Toast
                type="success"
                title="Siap Offline"
                message="Aplikasi dapat dibuka tanpa internet."
                onClose={closeOfflineToast}
            >
                {#snippet icon()}
                    <WifiOff size={18} />
                {/snippet}
            </Toast>
        </div>
    {/if}

    {#if showRefreshToast}
        <div class="fixed bottom-4 right-4 z-50">
            <Toast
                type="info"
                title="Update Tersedia"
                message="Versi baru aplikasi tersedia."
            >
                {#snippet icon()}
                    <RefreshCw size={18} />
                {/snippet}
                {#snippet actions()}
                    <button
                        onclick={handleRefresh}
                        class="whitespace-nowrap rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                    >
                        Update
                    </button>
                    <button
                        onclick={closeRefreshToast}
                        class="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-700"
                    >
                        Nanti
                    </button>
                {/snippet}
            </Toast>
        </div>
    {/if}
</div>
