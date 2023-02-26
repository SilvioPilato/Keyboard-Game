<script lang="ts">
    import Key from "./Key.svelte";
    export let rows: string[][];
    let firstRow = ["q", "w", "e", "r","t", "y", "u", "i", "o", "p"];
    let secRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let thirdRow = ["z", "x", "c", "v", "b", "n", "m"];
</script>

<div class="flex flex-col items-center gap-2">
    {#each rows as row}
        <div class="flex gap-4">
            {#each row as letter}
                <Key letter={letter} />
            {/each}
        </div>
    {/each}
</div>