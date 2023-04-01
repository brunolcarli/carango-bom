<template>
  <div class="container d-flex flex-column">
    <h1 class="text-center">Cadastro de marcas</h1>
    <form @submit.prevent="saveBrand" class="d-flex flex-column align-items-center">
      <div class="w-50 mt-4">
        <label for="name" class="form-label">Nome:</label>
        <div class="input-group">
          <input class="form-control" id="name" name="name" v-model="nameBrand" ref="camponame">
          <button class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
    </form>
    <RouterLink to="/brands" class="nav-link">Marcas cadastradas</RouterLink>
  </div>
</template>
<script setup lang="ts">
import type { Brand } from '@/models/interfaces';
import { getBrandsApi, saveBrandApi } from '@/services/brand-service';
import { useBrandStore } from '@/stores/brand-store';
import { ref } from 'vue';

const brandStore = useBrandStore()
const nameBrand = ref('')

function saveBrand() {
  saveBrandApi(nameBrand.value).then(resp => console.log(resp))
}

</script>