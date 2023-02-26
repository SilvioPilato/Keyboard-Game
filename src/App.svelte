<script lang="ts">
  import { reduce, words } from "lodash";
  import { onMount } from "svelte";
  import GameInProgress from "./lib/components/Scene/GameInProgress.svelte";
  import StartGame from "./lib/components/Scene/StartGame.svelte";

  let getWords = async() => {
    let res = await fetch("./parole.txt");
    let blob = await res.blob();
    let text = await blob.text();
    return text.split("\n");
  }
</script>

<main class="h-screen w-full px-4 bg-gray-700">
    <div class="container mx-auto h-full">
      <!-- svelte-ignore empty-block -->
      {#await getWords()}
      {:then words}
        <GameInProgress words={words} />
      {/await}
    </div>
</main>

<style>
    
</style>