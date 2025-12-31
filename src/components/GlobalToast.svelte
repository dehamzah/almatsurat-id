<script lang="ts">
    import { toastState, hideToast } from "../store/toast";
    import Toast from "./Toast.svelte";
    import { fly } from "svelte/transition";
</script>

{#if $toastState}
    <div
        class="fixed bottom-4 right-4 z-[100]"
        transition:fly={{ y: 20, duration: 300 }}
    >
        <Toast
            type={$toastState.type}
            title={$toastState.title}
            message={$toastState.message}
            onClose={hideToast}
        />
    </div>
{/if}
