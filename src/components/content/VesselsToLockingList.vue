<template>
  <div class="q-pa-md">
    <q-table
      :rows="props.vessels"
      :columns="columns"
      row-key="name"
      flat
      bordered
      separator="cell"
    >
      <template #no-data>
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <span> Нет судов </span>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  vessels: {
    type: Array,
    default: () => []
  }
})
const columns = [
  { name: 'name', label: 'Наименование', field: 'name' },
  { name: 'barge', label: 'Баржа', field: 'barge' },
  { name: 'sediment', label: 'Осадка', field: 'sediment' }
]
</script>

<style scoped></style>
