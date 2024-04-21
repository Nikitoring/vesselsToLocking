<template>
  <q-page class="main q-my-lg">
    <div class="h-100 row flex-break">
      <div class="col-6">
        <LockWrapper />
      </div>
      <div class="col-6">
        <LockWrapper lockName="Шлюз 15" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LockWrapper from '../components/content/LockWrapper.vue'
</script>

<style lang="scss">
.h-100 {
  height: 100%;
}
</style>
