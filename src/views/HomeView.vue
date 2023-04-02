
<template>
  <div>
    <div class="search row justify-content-center m-4">
      <div class="col-sm-2">
        <select class="form-select" aria-label="Default select example" v-model="filterBrand">
          <option value="0">Marca</option>
          <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.nome }}</option>
        </select>
      </div>
      <div class="col-sm-2">
        <input type="number" class="form-control" placeholder="Valor mínimo" v-model="filterMin">
      </div>
      <div class="col-sm-2 ">
        <input type="number" class="form-control" placeholder="Valor máximo" v-model="filterMax">
      </div>
      <div class="col-sm-4">
        <button class="btn btn-secondary m-1" @click="filter">Filtrar</button> 
        <button class="btn btn-secondary m-1" @click="clean">Limpar</button> 
      </div>
    </div>
    <div class="container-fluid row justify-content-center">
      <div class="card-group p-3 col-md-6 col-xl-3" v-for="vehicle in vehicles" :key="vehicle.id">
        <div class="card">
          <img :src="(vehicle.imagemUrl)" alt="Carro">
          <div class="card-body d-flex flex-column justify-content-end">
            <h4 class="card-title text-center">{{ vehicle.marca?.nome }} </h4>
            <h5 class="card-title text-center">{{ vehicle.modelo }} </h5>
            <p class="card-text text-center">{{ vehicle.valor }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { Brand } from '@/model/brand';
import type { Vehicle } from '@/model/vehicle';
import * as vehiclesService from '../services/vehicles-service';
import { onMounted, ref } from 'vue';
import * as brandService from '../services/brand-service';


const vehicles = ref<Vehicle[]>([]);
const brands = ref<Brand[]>([]);
const filterBrand = ref('0')
let filterMax = ref('')
let filterMin = ref('')
let listVehicles: Vehicle[]


function listVehicle(): void {
  vehiclesService.getVehicles()
    .then(list => {
      vehicles.value = list;
      listVehicles = list
    })
}

function filter(): void {
  console.log('2')
  vehicles.value = listVehicles.filter(v => applyFilter(v))
}

function clean() {
  filterBrand.value = '0'
  filterMax.value = ''
  filterMin.value = ''

  filter()
}

function applyFilter(vehicle: Vehicle): boolean {
  let filterBrandOK = true
  let filterValueOK = true
  if (filterBrand.value != '0') {
    filterBrandOK = vehicle.marca?.id == filterBrand.value 
  }

  if (filterMax.value != '' || filterMin.value != '' ) {
    console.log('1')
    // max recebe o valor do filtro max quando preenchido ou 0 caso esteja vazio
    let max = filterMax.value != '' ? Number(filterMax.value) : 0
    let min = filterMin.value != '' ? Number(filterMin.value) : 0 
    console.log(max)
    console.log(min)
    const vehicleValue = vehicle.valor ? vehicle.valor : 0

   if (max > 0) {
    console.log('a')
    filterValueOK = vehicleValue >= min && vehicleValue <= max

   } else {
    console.log('b')
    filterValueOK = vehicleValue >= min
   }
    

  }
  
  return filterBrandOK && filterValueOK
}


onMounted(() => {
  listVehicle()
  brandService.getBrandsApi()
    .then(list => { brands.value = list; console.log(list) })
});

</script>


