<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow ">
        <div class="container-fluid"> 
            <img src="../assets/logoCarangopng__2_-removebg-preview.png" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-first row" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                    <li class="nav-item mx-2">
                        <a href="#" class="nav-link text-silver">Home</a>
                    </li>
                    <li class="nav-item mx-2">
                        <RouterLink to="/login" class="nav-link text-silver  nav-link-hover">Entrar</RouterLink>
                    </li>
                    <li class="nav-item mx-2">
                        <RouterLink to="/vehicles" class="nav-link text-silver">Veículos</RouterLink>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="#" class="nav-link text-silver ">Marcas</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="#" class="nav-link text-silver ">Usuários</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="#" class="nav-link text-silver ">Dashboard</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a @click="logout" class="nav-link text-silver ">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">

import * as authenticationService from '../services/authentication-service.js';

function logout() {
    authenticationService.logout();
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