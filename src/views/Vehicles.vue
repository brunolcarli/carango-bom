<template>
    <section class="container">
        <div class="row align-content-center justify-content-center vh-100">
            <div class="col-md-8 p-0">
                <button v-if="userStore.isAuthenticated" @click="router.push('/formVeiculos')" class="btn btn-success m-2">+ Veiculo</button>
                <table class="table table-hover text-center">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Valor</th>
                            <th scope="col" v-if="userStore.isAuthenticated"></th>
                            <th scope="col" v-if="userStore.isAuthenticated"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vehicle in vehicles" :key="vehicle.id">
                            <td><img :src="vehicle.imagemUrl" width="100" height="50"></td>
                            <td>{{ vehicle.marca?.nome }}</td>
                            <td>{{ vehicle.modelo }}</td>
                            <td>{{vehicle.ano}}</td>
                            <td>{{ vehicle.valor }}</td>
                            <td v-if="userStore.isAuthenticated">
                                <span class="icon is-small">
                                    <i class="fas fa-edit" title="Editar" @click="router.push('/formVeiculos/'+ vehicle.id)"></i>
                                </span>
                            </td>
                            <td v-if="userStore.isAuthenticated">
                                <span class="icon is-small">
                                    <i class="fas fa-trash" title="Excluir" @click="removeVehicle(vehicle.id)"></i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Anterior</a>
                    </li>
                    <li class="page-item"><a class="page-link text-secondary" href="#">1</a></li>
                    <li class="page-item"><a class="page-link text-secondary" href="#">2</a></li>
                    <li class="page-item"><a class="page-link text-secondary" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link text-secondary" href="#">Próximo</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script setup lang="ts">

import type { Vehicle } from '@/model/vehicle';
import { onMounted, ref } from 'vue';
import * as vehiclesService from '../services/vehicles-service';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user-store.js';


const vehicles = ref<Vehicle[]>([]);
const router = useRouter();
const userStore = useUserStore();

function removeVehicle(id: string): void {
    if (confirm("Tem certeza que deseja excluir este item?")) {
        vehiclesService.deleteVehicles(id)
        .then(response => listVehicle())
        alert("Item excluído com sucesso!");
    } 
 
}

function listVehicle() : void {
    vehiclesService.getVehicles()
    .then(list => {vehicles.value = list; console.log(vehicles)})
}

onMounted(() => {
    listVehicle()
});

</script>

<style></style>