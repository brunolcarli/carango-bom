<template>
    <div class="d-flex justify-content-center shadow">
        <div class="row align-items-center vh-100 ">
            <h3 class="text-center shadow">Cadastro de veículos</h3>
            <form @submit.prevent="saveVehicles">
                <div class="row mb-3">
                    <select class="form-select" aria-label="Default select example" v-model="vehicle.marcaId">
                        <option value="0">Selecione a marca</option>
                        <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.nome }}</option>
                    </select>
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="model" placeholder="Modelo " v-model="vehicle.modelo">
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="year" placeholder="Ano" v-model="vehicle.ano">
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="price" placeholder="Valor" v-model="vehicle.valor">
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="url" placeholder="URL" v-model="vehicle.imagemUrl">
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
import * as brandService from '../services/brand-service';
import { onMounted, reactive, ref } from 'vue';
import type { Brand } from '@/model/brand';
import type { Vehicle } from '@/model/vehicle';
import * as vehiclesService from '../services/vehicles-service';
import router from '@/router';


const brands = ref<Brand[]>([]);

const vehicle = ref<Vehicle>({
    id: '',
    modelo: '',
    ano: null,
    valor: null,
    imagemUrl: '',
    marcaId: '0',
    marca: null
});;


function saveVehicles(){
    if (vehicle.value.imagemUrl && vehicle.value.modelo && vehicle.value.ano && vehicle.value.valor && vehicle.value.marcaId != '0') {
        vehiclesService.postVehicles(vehicle.value)
        .then(vehicle => {
            console.log('Veículo cadastrado', vehicle);
            router.push('/veiculos')
        })
    } else {
        alert("Verifique o preenchimento")
    }
}

onMounted(() => {
    brandService.getBrandsApi()
    .then(list => {brands.value = list; console.log(list)})

});

// criar evento submit no form para salvar o novo veiculo, realizando um post com axios.

</script>

<style scoped>

.text-center{ 
    font-family: 'Bebas Neue', cursiva;
    font-size: 30px;
     box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4)
}
</style>