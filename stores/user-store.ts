import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            email: '',
            nome: ''
        }
    }), 
    getters: {
        isAuthenticated: state => state.user.email !== ''
    },
    actions: {
        clean() {
            this.user.email = '';
            this.user.nome = '';
        }
    }
});