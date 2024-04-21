<template>
  <div>
    <div
      style="text-align: center"
      class="text-h6"
    >
      Суда шлюзования
    </div>
    <VesselsToLockingList :vessels="vessels" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VesselsToLockingList from './VesselsToLockingList.vue'

const vessels = ref([])
</script>

<style scoped></style>
