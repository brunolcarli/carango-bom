<template>
  <div class="d-flex justify-content-center height container mt-5">
    <div class="row align-items-center w-75">
      <h1 class="text-center">Cadastro de marcas</h1>
      <form @submit.prevent="saveBrand">
        <div class="row mb-3">
          <label for="name" class="form-label">Nome:</label>
          <input class="form-control" id="name" name="name" v-model="nameBrand" ref="camponame">
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center flex-wrap">
            <button type="submit" class="btn btn-dark m-3">Cadastrar</button>
            <button type="button" class="btn btn-dark m-3" @click.prevent="nameBrand = ''">Cancelar</button>
            <RouterLink to="/brands" class="btn btn-success m-3">Marcas cadastradas</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Brand } from '@/model/brand';
import { getBrandsApi, saveBrandApi } from '@/services/brand-service';
import { useBrandStore } from '@/stores/brand-store';
import { ref } from 'vue';

const brandStore = useBrandStore()
const nameBrand = ref('')

function saveBrand() {
  if(nameBrand.value) saveBrandApi(nameBrand.value).then(resp => console.log(resp))
  else alert('Digite um valor válido')
  nameBrand.value = ''
}
</script>
<style>
</style>