<template>
  <div
    class="q-mx-lg"
    style="margin: 0 auto; max-width: 400px"
  >
    <div class="row justify-center q-gutter-xl">
      <q-btn
        outline
        color="primary"
        label="Старт"
      />
      <q-btn
        outline
        color="primary"
        label="Стоп"
      />
    </div>
    <div class="row justify-center q-my-md q-gutter-xl">
      <q-btn
        outline
        color="primary"
        label="Подготовить"
        @click="isPrepare = true"
      />
      <q-btn
        outline
        color="primary"
        label="Редактироать"
      />
    </div>
  </div>
  <VesselsPrepare
    v-if="isPrepare"
    v-model="isPrepare"
    :lock-name="props.lockName"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VesselsPrepare from './VesselsPrepare/VesselsPrepare.vue'

const props = defineProps({
  lockName: {
    type: String,
    defaul: 'Шлюз 16'
  }
})

const isPrepare = ref(false)
</script>

<style scoped></style>
