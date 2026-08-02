<script lang="ts">
    import { onMount } from "svelte";
    import { registerSW } from "virtual:pwa-register";
    import { WifiOff } from "lucide-svelte";
    import Toast from "./Toast.svelte";

    let props = $props();

    let showOfflineToast = $state(false);

    function closeOfflineToast() {
        showOfflineToast = false;
    }

    onMount(() => {
        let intervalId: ReturnType<typeof setInterval> | undefined;
        let handleVisibilityChange: (() => Promise<void>) | undefined;

        registerSW({
            onRegisteredSW(
                swUrl: string,
                registration: ServiceWorkerRegistration | undefined,
            ) {
                if (!registration) return;

                // 1. Periodic background update check every 1 hour
                intervalId = setInterval(
                    async () => {
                        if (registration.installing) return;
                        await registration.update();
                    },
                    60 * 60 * 1000,
                );

                // 2. Check update on tab focus (visibilitychange)
                handleVisibilityChange = async () => {
                    if (document.visibilityState === "visible") {
                        if (registration.installing) return;
                        await registration.update();
                    }
                };
                document.addEventListener("visibilitychange", handleVisibilityChange);
            },
            onOfflineReady() {
                showOfflineToast = true;
                // Auto hide after 5 seconds
                setTimeout(() => {
                    showOfflineToast = false;
                }, 5000);
            },
        });

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (handleVisibilityChange) {
                document.removeEventListener("visibilitychange", handleVisibilityChange);
            }
        };
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
</div>
