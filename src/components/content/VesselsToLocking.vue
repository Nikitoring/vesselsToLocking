<template>
  <div>
    <div
      style="text-align: center"
      class="text-h6"
    >
      Суда шлюзования
    </div>
    <VesselsToLockingList :vessels="vesselsToLocking" />
  </div>
</template>

<script setup lang="ts">
import VesselsToLockingList from './VesselsToLockingList.vue'
import { useVesselsToLockingsStore } from 'src/stores/vesselsPrepareToLocking'
import { storeToRefs } from 'pinia'

const { vesselsToLocking } = storeToRefs(useVesselsToLockingsStore())
</script>

<style scoped></style>
