<template>
  <section class="container">
    <div class="row align-content-center justify-content-center mt-5">
      <div class="col-md-8 p-0">
        <h1 class="text-center mb-3">Marcas cadastradas</h1>
    <table class="table table-hover text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">Nome da marca</th>
          <th scope="col">Ações</th>  
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in arrBrands">
            <td>{{ item.nome }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="deleteBrand(item.id)">
                <i class="fas fa-trash"></i>
              </button>
              <button class="btn btn-sm btn-secondary ms-1" @click="editBrand(item)">
                <i class="fas fa-edit" title="Editar"></i>
              </button>
            </td>
          </tr>
      </tbody>
    </table>
    <RouterLink to="/form-brand" class="btn btn-success mt-4"> Cadastrar nova marca </RouterLink>
  </div>
    </div>
  </section>
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