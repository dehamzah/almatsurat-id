<script>
    import { Settings } from "lucide-svelte";
    import { isSettingsOpen } from "../store/settings";
</script>

<button
    onclick={() => isSettingsOpen.set(true)}
    aria-label="Open settings"
    class="p-2 text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors rounded-full"
>
    <Settings size={20} />
</button>
