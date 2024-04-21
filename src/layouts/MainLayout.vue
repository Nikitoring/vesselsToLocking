<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import MainHeader from 'src/components/interface/MainHeader.vue'
</script>
