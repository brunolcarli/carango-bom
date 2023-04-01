<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="text-center">Marcas cadastradas</h1>
    <table class="table table-striped w-75 mt-5">
      <thead>
        <tr>
          <th>Nome da marca</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="withoutBrands"><td>Não há marcas cadastradas</td></tr>
        <tr v-for="item in arrBrands">
          <td>{{ item.nome }}</td>
          <td>
            <button class="btn btn-sm btn-danger" @click="deleteBrand(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="btn btn-sm btn-secondary ms-1" @click="editBrand(item)">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <RouterLink to="/form-brand" class="nav-link"
      >Cadastrar nova marca</RouterLink
    >
  </div>
</template>
<script setup lang="ts">
import type { Brand } from '@/model/brand';
import { deleteBrandApi, editBrandApi, getBrandsApi } from '@/services/brand-service';
import { computed, onMounted, ref } from 'vue';

let arrBrands = ref<Brand[]>([]) 
const withoutBrands = computed(() => arrBrands.value.length === 0)
onMounted(() => getBrandsApi().then(resp => resp.map(brand => arrBrands.value.push(brand))))

function deleteBrand(id: string) {
  deleteBrandApi(id).then(() => {arrBrands.value = arrBrands.value.filter(item => item.id !== id)})
}

function editBrand(item: Brand){
}
</script>