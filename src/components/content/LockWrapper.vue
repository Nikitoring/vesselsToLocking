<template>
  <div class="lock-wrapper">
    <div class="row">
      <div
        class="col-8"
        style="text-align: center"
      >
        <h3>{{ props.lockName }}</h3>
        <h4>{{ status }}</h4>
      </div>
      <div class="col-4 q-mt-xl">
        <div>Дата</div>
        <div>Время</div>
      </div>
      <div class="col-8"></div>
    </div>
    <div class="q-pa-md">
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        separator="cell"
      >
        <template #no-data>
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <span> Нет судов </span>
          </div>
        </template>
      </q-table>
    </div>
    <div class="q-my-md">
      <VesselsToLocking />
    </div>
    <div class="q-my-md">
      <VesselsActions :lockName="props.lockName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VesselsToLocking from './VesselsToLocking.vue'
import VesselsActions from './VesselsActions.vue'

defineOptions({
  name: 'LockWrapper'
})
const props = defineProps({
  lockName: {
    type: String,
    default: 'Шлюз 16'
  }
})
const status = ref<string>('Готов к шлюзованию')
const rows = ref([])
const columns = ref([
  { name: 'id', label: 'Номер', field: 'id' },
  { name: 'direction', label: 'Направление', field: 'direction' },
  { name: 'start', label: 'Начало', field: 'start' },
  { name: 'time', label: 'Время', field: 'time' }
])
</script>

<style scoped lang="scss">
.lock-wrapper {
  border: 5px solid $blue-grey-8;
}
</style>
