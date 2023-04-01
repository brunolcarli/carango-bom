import { defineStore } from 'pinia'
import type { Brand } from '@/models/interfaces'

export const useBrandStore = defineStore('brand', {
  state: () => ({
    brand: null as Brand | null
  })
})


