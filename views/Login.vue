<template>
  <div class="container">
    <div class="row align-items-center vh-100">
      <div class="col-md-6 mx-auto">
        <form class="border shadow p-3" @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" v-model="email" placeholder="Insira o seu email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Senha</label>
            <input type="password" class="form-control" v-model="password" id="password">
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-dark w-50 m-3" type="submit">Logar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  
<script setup lang="ts">
import { ref } from 'vue';
import * as authenticationService from '../services/authentication-service.js';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user-store.js';


const router = useRouter();
const email = ref('');
const password = ref('');
const userStore = useUserStore();

function login() {
	authenticationService.login(email.value, password.value, userStore)
  .then(() => router.push('/'))
		.catch(alert);
}


</script>
  