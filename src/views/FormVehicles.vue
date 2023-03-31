<template>
    <div class="d-flex justify-content-center shadow">
        <div class="row align-items-center vh-100 ">
            <h3 class="text-center shadow">Cadastro de veículos</h3>
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
                        <button type="submit" class="btn btn-dark w-50 m-3">Cadastrar</button>
                        <button type="button" class="btn btn-dark w-50 m-3">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.text-center{ 
    font-family: 'Bebas Neue', cursiva;
    font-size: 30px;
     box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4)
}
</style>