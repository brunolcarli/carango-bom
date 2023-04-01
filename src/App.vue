<template>
    <header>
        <NavBar />
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>

    </footer>
</template>
<script setup lang="ts">

import NavBar from './components/NavBar.vue';
import { useUserStore } from '@/stores/user-store'
import { useRouter } from 'vue-router';
import * as auth from './services/authentication-service'
import axios from 'axios'

const userStore = useUserStore()
const router = useRouter()

router.beforeEach((to, from) => {

    if (to.meta.isAuth) {
		const token = auth.getAuth();
		
		if (!token) {
			return { name: 'login' };
		}
	}
})

axios.interceptors.request.use(config => {
    const token = auth.getAuth()    
    if(token) config.headers.Authorization= `Bearer ${token}`
    
    return config
}) 
</script>

