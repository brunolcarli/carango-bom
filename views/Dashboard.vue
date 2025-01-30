<template>
    <div class="d-flex flex-column align-items-center mt-5 text-center">
        <h1 class="text-center mb-3">Dashboard</h1>
        <h3 class="text-center">Valor consolidado: R$ {{ totalValueOfBrands }}</h3>

        <div class="galeria d-flex flex-wrap justify-content-center w-75">
            <div class="card w-25 m-1" v-for="indicator in indicators">
                <div class="card-body">
                    <h5 class="card-title mb-2">{{ indicator.marca }}</h5>

                    <p class="card-subtitle text-body-secondary">{{ indicator.quantidade }} veículos</p>
                    <p class="card-subtitle text-body-secondary">R$ {{ indicator.montante }} total</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import type { Indicator } from '@/model/dashboard';
import getIndicators from '@/services/dashboard-service';
import { computed, onMounted, ref } from 'vue';

let indicators = ref<Indicator[]>([])
onMounted(() => getIndicators().then(indicatorsApi => {
    console.log(indicators)
    return    indicators.value = indicatorsApi

}))


const totalValueOfBrands = computed(() => indicators.value.reduce((sum, i) => i.montante + sum, 0))

</script>