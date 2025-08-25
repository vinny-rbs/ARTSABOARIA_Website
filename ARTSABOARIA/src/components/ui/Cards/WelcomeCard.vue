<script setup>
</script>

<template>
    <aside>
        <button class="prev"><</button>
        <button class="next">></button>
        <img id="card-image" src="https://images.pexels.com/photos/7615887/pexels-photo-7615887.jpeg" alt="">
    </aside>
</template>

<style scoped>
aside {
    position: relative;
    height: 30em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(1.5em, 5vw, 3em);
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0.75em;
        box-shadow: 0px 4px 12px 4px rgba(140, 140, 140, 0.125);
    }
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%); /* Centraliza verticalmente */
    height: 2.5em;
    width: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.prev {
    left: clamp(1.5em, 10vw,3em);
}

.next {
    right: clamp(1.5em, 10vw,3em);
}
</style>
