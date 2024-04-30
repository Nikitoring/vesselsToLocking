<template>
  <div>
    <div
      style="text-align: center"
      class="text-h6"
    >
      Суда шлюзования
    </div>
    <VesselsToLockingList
      v-if="props.lockName && vesselsToLocking[props.lockName]"
      :vessels="vesselsToLocking[props.lockName]"
    />
    <div
      class="q-pa-md"
      v-else
    >
      <q-banner
        dense
        style="height: 200px"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
      >
        Нет судов готовых к шлюзованию
      </q-banner>
    </div>
  </div>
</template>

<script setup lang="ts">
import VesselsToLockingList from './VesselsToLockingList.vue'
import { useVesselsToLockingStore } from 'src/stores/vesselsPrepareToLocking'
import { storeToRefs } from 'pinia'

const { vesselsToLocking } = storeToRefs(useVesselsToLockingStore())
const props = defineProps({
  lockName: {
    type: String,
    defaul: 'Шлюз 16'
  }
})
</script>

<style scoped></style>
