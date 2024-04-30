<template>
  <div
    class="q-mx-lg"
    style="margin: 0 auto; max-width: 400px"
  >
    <div class="row justify-center q-gutter-xl">
      <q-btn
        outline
        no-caps
        color="primary"
        label="Старт"
        :disable="!disableStart"
        @click="startLocking(props.lockName)"
      />
      <q-btn
        outline
        no-caps
        color="primary"
        label="Стоп"
      />
    </div>
    <div class="row justify-center q-my-md q-gutter-xl">
      <q-btn
        outline
        no-caps
        color="primary"
        label="Подготовить"
        @click="isPrepare = true"
      />
      <q-btn
        outline
        no-caps
        color="primary"
        label="Редактировать"
        :disable="!disableStart"
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
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import VesselsPrepare from './VesselsPrepare/VesselsPrepare.vue'
import { useVesselsToLockingStore } from 'src/stores/vesselsPrepareToLocking'
import { useVesselsLocking } from 'src/stores/vesselsLocking'
const { vesselsToLocking } = storeToRefs(useVesselsToLockingStore())
const { startLocking } = useVesselsLocking()
const props = defineProps({
  lockName: {
    type: String,
    defaul: 'Шлюз 16'
  }
})

const isPrepare = ref(false)
const disableStart = computed(() => {
  return props.lockName && vesselsToLocking.value[props.lockName] && vesselsToLocking.value[props.lockName].length
})
</script>

<style scoped></style>
