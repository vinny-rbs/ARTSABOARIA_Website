<script setup lang="ts"> 

const ButtonsProps = defineProps<{
    label:string
}>();

</script>

<template>
    <input type="submit" :value=ButtonsProps.label>
</template>

<style scoped>

    input[type="submit"] {
        padding: 0.75em 1em;
        background-color: var(--main-color-blue);
        border: none;
        border-radius: 0.5em;
        cursor: pointer;
        color: var(--main-color-white);
        font-weight: bold;
        font-size: 1rem;
        transition: all 0.25s ease-in;
    }

    input[type="submit"]:hover {
        transform: scale(1.05);
        background-color: var(--main-color-blue);
        filter: brightness(110%);
    }

    input[type="submit"]:active {
        transform: scale(0.95);
        transition: all 0.1s ease-in-out;
    }

</style>