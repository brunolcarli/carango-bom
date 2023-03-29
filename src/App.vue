<template>
    <header>
        <NavBar />
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>

    </footer>
</template>
<script setup lang="ts">

import NavBar from './components/NavBar.vue';

</script>

