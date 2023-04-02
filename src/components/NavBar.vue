<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow ">
        <div class="container-fluid"> 
            <RouterLink to="/"><img src="../assets/logoCarangopng__2_-removebg-preview.png"></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  row" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                    <li v-if="!userStore.isAuthenticated" class="nav-item ">
                        <RouterLink to="/login" class="nav-link text-silver  nav-link-hover">Entrar</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/veiculos" class="nav-link text-silver ">Veículos</RouterLink>
                    </li>
                    <li v-if="userStore.isAuthenticated" class="nav-item">
                        <RouterLink to="/form-brand" class="nav-link text-silver ">Marcas</RouterLink>
                    </li>
                    <li v-if="userStore.isAuthenticated" class="nav-item ">
                        <RouterLink to="/dashboard" class="nav-link text-silver ">Dashboard</RouterLink>
                    </li>
                    <li v-if="userStore.isAuthenticated" class="nav-item ">
                        <a @click="logout" class="nav-link text-silver ">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">

import router from '@/router';
import * as authenticationService from '../services/authentication-service.js';
import { useUserStore } from '../stores/user-store.js';
const userStore = useUserStore();

console.log(userStore.$state)
function logout() {
    authenticationService.logout();
    userStore.clean();
    router.push('/')
}
</script>

<style scoped>
.text-silver {
    color: #C2C2C2 !important;
    
}


.nav-link:hover, .nav-link:focus {
    background-color: #32363c;
}

</style>