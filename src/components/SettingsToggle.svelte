<script lang="ts">
    import { Settings } from "lucide-svelte";
    import { isSettingsOpen } from "../store/settings";
</script>

<button
    onclick={() => isSettingsOpen.set(true)}
    aria-label="Open settings"
    class="p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
>
    <Settings size={20} />
</button>
