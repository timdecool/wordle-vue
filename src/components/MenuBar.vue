<template>
    <nav class="navbar">

        <div class="slot start-slot">
            <slot name="start"></slot>
        </div>

        <div>
            <slot name="center"></slot>
        </div>

        <div class="slot end-slot">
            <slot name="end"></slot>
        </div>
    </nav>




</template>

<style>

    .navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 20px;
    }

    .slot {
        display: flex;
        gap: 15px;
    }

    .start-slot>a {
        text-decoration: none;
        font-size: 1.2rem;
        margin-left: 10px;
        padding: 10px;
        border-radius: 30px;
    }

</style>