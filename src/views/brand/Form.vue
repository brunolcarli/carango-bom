<template>
  <div class="d-flex justify-content-center height container mt-5">
    <div class="row align-items-center w-75">
      <h1 class="text-center">{{ isEdit ? 'Cadastro de marcas' : 'Alterando marca' }}</h1>
      <form @submit.prevent="saveBrand">
        <div class="row mb-3">
          <label for="name" class="form-label">Nome:</label>
          <input class="form-control" id="name" name="name" v-model="brand.nome" required>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center flex-wrap">
            <button type="submit" class="btn btn-dark m-3">{{ isEdit ? 'Cadastrar' : 'Alterar' }}</button>
            <button type="button" class="btn btn-dark m-3" @click.prevent="brand.nome = ''">Cancelar</button>
            <RouterLink to="/brands" class="btn btn-success m-3">Marcas cadastradas</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Brand } from '@/model/brand';
import { editBrandApi, getBrandsApi, saveBrandApi } from '@/services/brand-service';
import { computed, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let brand = reactive<Brand>({
  id: '',
  nome: ''
})
const route = useRoute()
const router = useRouter()
const isEdit = computed(() => route.params.id === '')

function saveBrand() {
  if(brand.nome.length > 0) {
    if(route.params.id === '') saveBrandApi(brand.nome).then(resp => {
      alert(`Marca ${brand.nome} cadastrada com sucesso`)
      brand.nome = ''
    })
    else editBrandApi(brand).then(resp => {
      alert(`Marca ${brand.nome} alterada com sucesso`)
      router.push('/brands')
    })  
  }
  else alert('Digite um valor válido')
}

onMounted(() => {
  if(route.params.id !== ''){
    getBrandsApi().then(brands => {
      let brandToUpdate = brands.filter(brand => brand.id === route.params.id)[0]
      brand = brandToUpdate
    })
  }
}) 

</script>
<style>
</style>