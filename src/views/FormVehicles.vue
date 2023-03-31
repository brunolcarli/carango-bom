<template>
    <div class="container">
        <div class="row align-items-center vh-100">
            <h3 class="text-center">Cadastro de veículos</h3>
            <form>
                <div class="row mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Marca</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="model" placeholder="Modelo" >
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="year" placeholder="Ano">
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="price" placeholder="Valor">
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary m-2">Cadastrar</button>
                        <button type="button" class="btn btn-primary m-2">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>