<script lang="ts">
    import {
        X,
        CircleCheck,
        CircleAlert,
        Info,
        TriangleAlert,
    } from "lucide-svelte";
    import type { Snippet } from "svelte";

    type ToastType = "success" | "info" | "warning" | "error" | "default";

    interface Props {
        type?: ToastType;
        title: string;
        message?: string;
        onClose?: () => void;
        icon?: Snippet;
        actions?: Snippet;
        children?: Snippet;
        class?: string;
    }

    let {
        type = "default",
        title,
        message,
        onClose,
        icon,
        actions,
        children,
        class: className = "",
    }: Props = $props();

    const styles = {
        default: {
            container:
                "border-stone-200 bg-white shadow-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none",
            iconBg: "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400",
            title: "text-stone-900 dark:text-stone-100",
            text: "text-stone-600 dark:text-stone-400",
            close: "text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700",
        },
        success: {
            container:
                "border-emerald-200 bg-white shadow-emerald-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none",
            iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
            title: "text-stone-900 dark:text-stone-100",
            text: "text-stone-600 dark:text-stone-400",
            close: "text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700",
        },
        info: {
            container:
                "border-emerald-200 bg-white shadow-emerald-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none",
            iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
            title: "text-stone-900 dark:text-stone-100",
            text: "text-stone-600 dark:text-stone-400",
            close: "text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700",
        },
        warning: {
            container:
                "border-amber-200 bg-white shadow-amber-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none",
            iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
            title: "text-stone-900 dark:text-stone-100",
            text: "text-stone-600 dark:text-stone-400",
            close: "text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700",
        },
        error: {
            container:
                "border-red-200 bg-white shadow-red-100 dark:border-stone-700 dark:bg-stone-800 dark:shadow-none",
            iconBg: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
            title: "text-stone-900 dark:text-stone-100",
            text: "text-stone-600 dark:text-stone-400",
            close: "text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700",
        },
    };

    let currentStyle = $derived(styles[type]);
</script>

<div
    class="pointer-events-auto flex w-full max-w-sm gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300 {currentStyle.container} {className}"
    role="alert"
>
    <!-- Icon -->
    <div
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full {currentStyle.iconBg}"
    >
        {#if icon}
            {@render icon()}
        {:else if type === "success"}
            <CircleCheck size={18} />
        {:else if type === "info"}
            <Info size={18} />
        {:else if type === "warning"}
            <TriangleAlert size={18} />
        {:else if type === "error"}
            <CircleAlert size={18} />
        {:else}
            <Info size={18} />
        {/if}
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
        <h3 class="text-sm font-semibold {currentStyle.title}">
            {title}
        </h3>
        {#if message}
            <p class="text-xs {currentStyle.text} mt-0.5">
                {message}
            </p>
        {/if}
        {#if children}
            <div class="mt-2">
                {@render children()}
            </div>
        {/if}
        {#if actions}
            <div class="mt-3 flex items-center gap-2">
                {@render actions()}
            </div>
        {/if}
    </div>

    <!-- Close Button -->
    {#if onClose}
        <button
            onclick={onClose}
            class="ml-2 -mt-1 -mr-1 h-6 w-6 rounded-md p-1 transition-colors {currentStyle.close} shrink-0 flex items-center justify-center"
            aria-label="Close"
        >
            <X size={16} />
        </button>
    {/if}
</div>
