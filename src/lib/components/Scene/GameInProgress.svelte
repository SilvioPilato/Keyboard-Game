<script lang="ts">
    import { onMount } from "svelte";
    import GameKeyboard from "../Keyboard/GameKeyboard.svelte";
    import Word from "../Word/Word.svelte";
    import {deburr, random} from "lodash";
    export let words: string[] = [];
    let randomIndex = random(0, words.length - 1);
    $: word = deburr(words[randomIndex]).split("");
    let wordTransitionTime = 350;
    let firstRow = ["q", "w", "e", "r","t", "y", "u", "i", "o", "p"];
    let secRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let thirdRow = ["z", "x", "c", "v", "b", "n", "m"];
    let allowedLetters = [...firstRow, ...secRow, ...thirdRow];
    let keys = [
        firstRow,
        secRow,
        thirdRow
    ];
    let cursor = 0;
    let points = 0;
    let enabled = true;
    let error = false;
    let addPoints = (amount = 1) => {
        if (points + amount < 0) {
            points = 0;
            return;
        }
        points += amount;
    }
    let onKeyDown = (event: KeyboardEvent) => {
        if (event.repeat) return;
        if (!enabled) return;
        let key = event.key.toLowerCase();
        if (!allowedLetters.includes(key)) return;
        if (word[cursor] !== key) {
            addPoints(-1);
            setError();
            return;
        }
        addPoints();
        cursor++;
        if (cursor == word.length){
            console.warn("TRIGGER WORD FINISHED");
            resetWritten();
            word = getRandomWord();
        }
        return;
    }
    let resetWritten = () => {
        cursor = 0;
    }
    let setError = () => {
        error = true;
        enabled = false;
        setTimeout(() => {
            error = false;
            enabled = true;
            cursor = 0;
        }, wordTransitionTime);
    }
    let getRandomWord = () => {
        let randomIndex = random(0, words.length);
        return deburr(words[randomIndex]).split("");
    }
    onMount(() => {
        document.addEventListener("keydown", onKeyDown);
    });
</script>

<div class="flex flex-col gap-8 pt-12 h-full justify-evenly">
    <p class="text-center text-3xl text-red-400">{`Punti: ${points}`}</p>
    <Word error={error} wordCursor={cursor} word={word}/>
    <GameKeyboard rows={keys} />
</div>