import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            email: '',
            nome: ''
        }
    }), 

    actions: {
        clean() {
            this.user.email = '';
            this.user.nome = '';
        }
    }
});