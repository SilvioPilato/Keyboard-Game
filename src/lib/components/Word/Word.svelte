<script lang="ts">
  export let word: string[];
  export let wordCursor = 0;
  export let error = false;
  $: getColorClass = (index: number) => {
    if (error && index==wordCursor) return "text-red-500";
    return index >= wordCursor ? "text-gray-50" : "text-lime-500";
  };
  $: getErrorClass = (index: number) => {
    if (!error) return "";
    return index===wordCursor ? "animate-bounce" : "";
  }
</script>
<div class="flex gap-2 justify-center">
    {#each word as letter, index}
        <div class="{`font-mono text-6xl flex justify-center ${getColorClass(index)} ${getErrorClass(index)}`}">
            {letter}
        </div>
    {/each}
</div>