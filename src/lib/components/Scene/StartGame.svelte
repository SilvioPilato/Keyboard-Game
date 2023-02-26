<script lang="ts">
    import GameKeyboard from "../Keyboard/GameKeyboard.svelte";
    import Word from "../Word/Word.svelte";
    let firstRow = ["q", "w", "e", "r","t", "y", "u", "i", "o", "p"];
    let secRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let thirdRow = ["z", "x", "c", "v", "b", "n", "m"];
    let keys = [
        firstRow,
        secRow,
        thirdRow
    ];
</script>

<div>
    <Word word="inizia"/>
    <GameKeyboard rows={keys} />
</div>