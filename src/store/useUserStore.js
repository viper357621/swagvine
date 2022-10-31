import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
    state: () => ({ isLogin:false,data:null }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })