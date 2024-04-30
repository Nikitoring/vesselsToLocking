<template>
  <div class="lock-wrapper">
    <div class="row">
      <div
        class="col-8"
        style="text-align: center"
      >
        <h3>{{ props.lockName }}</h3>
        <h4 :class="status.class">{{ status.text }}</h4>
      </div>
      <div
        v-if="date"
        class="col-4 q-mt-xl"
      >
        <div>{{ date }}</div>
      </div>
      <div class="col-8"></div>
    </div>
    <div class="q-pa-md">
      <q-table
        style="height: 200px"
        :rows="rows"
        :columns="columns"
        row-key="id"
        separator="cell"
        hide-pagination
      >
        <template #no-data>
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <span> Нет судов </span>
          </div>
        </template>
      </q-table>
    </div>
    <div class="q-my-md">
      <VesselsToLocking :lockName="props.lockName" />
    </div>
    <div class="q-my-md">
      <VesselsActions :lockName="props.lockName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import VesselsToLocking from './VesselsToLocking.vue'
import VesselsActions from './VesselsActions.vue'
import { useVesselsLocking } from 'src/stores/vesselsLocking'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'LockWrapper'
})
const props = defineProps({
  lockName: {
    type: String,
    default: 'Шлюз 16'
  }
})
const status = computed(() => {
  if (!vessels.value[props.lockName]) return { text: 'Готов к шлюзованию', class: '' }
  return { text: 'Идет шлюзование', class: 'text-positive' }
})

const columns = ref([
  { name: 'id', label: 'Номер', field: 'id' },
  { name: 'direction', label: 'Направление', field: 'direction' },
  { name: 'start', label: 'Начало', field: 'start' },
  { name: 'time', label: 'Время', field: 'time' }
])
const sec = ref(0)
const min = ref(0)
const ms = ref(0)
const interval = ref(null)
const { date, vessels } = storeToRefs(useVesselsLocking())
watch(
  () => vessels.value,
  () => {
    if (interval.value) {
      clearInterval(interval.value)
    }
    interval.value = setInterval(() => {
      if (sec.value === 60) {
        min.value += 1
        sec.value = 0
      }
      if (ms.value === 60) {
        sec.value += 1
        ms.value = 0
      }
      ms.value += 1
    }, 10)
  },
  { deep: true }
)
const time = computed(() => {
  return `${min.value} : ${sec.value}`
})
const rows = computed(() => {
  if (!vessels.value[props.lockName]) return []
  return vessels.value[props.lockName].map((vessel, index) => ({
    id: index + 1,
    ...vessel,
    time: time.value
  }))
})
</script>

<style scoped lang="scss">
.lock-wrapper {
  border: 5px solid $blue-grey-8;
}
</style>
