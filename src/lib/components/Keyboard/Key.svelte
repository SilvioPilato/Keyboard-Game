
<script lang="ts">
    import { onMount } from "svelte";
    export let letter: string;
    let isPressed = false;
    let animateClass = "animate-press";

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.repeat) return;
        if (event.key.toLowerCase() != letter) return;
        isPressed = true;
    }
    const onKeyUp = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() != letter) return;
        isPressed = false;
    }

    onMount(() => {
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
    });
</script>

<div 
    class="{`
        w-14 
        h-20 
        relative 
        flex 
        justify-center 
        items-center 
        z-10 
        bg-gray-50 
        rounded
        border-b-8
        border-r-4  
        border-gray-500 
        font-mono
        text-lg
        ${isPressed && animateClass}
    `}">
    <p>{letter}</p>
</div>

