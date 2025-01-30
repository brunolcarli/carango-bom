import { defineStore } from 'pinia'
import type { Brand } from '@/model/brand'

export const useBrandStore = defineStore('brand', {
  state: () => ({
    brand: null as Brand | null
  })
})


