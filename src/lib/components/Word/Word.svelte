<script lang="ts">
  export let word: string[];
  export let wordCursor = 0;
  $: getColorClass = (index) => {
    return index >= wordCursor ? "text-gray-50" : "text-lime-500";
  };
</script>
<div class="flex gap-1 justify-center">
    {#each word as letter, index}
        <div class="{`font-mono text-5xl flex justify-center ${getColorClass(index)}`}">
            {letter}
        </div>
    {/each}
</div>