<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <a href="#" class="navbar-brand text-red mx-5">Carango Bom</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-first" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-silver">Home</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/login" class="nav-link text-silver">Entrar</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/vehicles" class="nav-link text-silver">Veículos</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-silver ">Marcas</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-silver ">Usuários</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-silver ">Dashboard</a>
                    </li>
                    <li class="nav-item">
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

<style>
.text-silver {
    color: #C2C2C2 !important;
}

.text-red {
    color: #DC3545 !important;
}
</style>