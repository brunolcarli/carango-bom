<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand text-red mx-5 border shadow p-3" href="#">Carango Bom</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/home" class="nav-link text-silver">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/login" class="nav-link text-silver">Entrar</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/vehicles" class="nav-link text-silver">Veículos</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/brands" class="nav-link text-silver ">Marcas</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/users" class="nav-link text-silver ">Usuários</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/dashboard" class="nav-link text-silver ">Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/logout" class="nav-link text-silver ">Sair</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>

.text-silver {
    color: #C2C2C2 !important;
}

.text-red {
    color: #DC3545 !important;
}

</style>