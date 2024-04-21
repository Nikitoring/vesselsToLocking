<template>
  <div>
    <q-btn @click="addShip">Add</q-btn>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
// const list = ref([])
const addShip = async () => {
  // const res = await fetch('http://localhost:3000/addShip', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8'
  //   },
  //   body: JSON.stringify({ param: ['test', 'sss', 12, false] })
  // })
  // const resw = await fetch('http://localhost:3000/getShips')
  // console.log('resw', resw)
}
onBeforeMount(async () => {
  const res = await fetch('http://localhost:3000/getShips')
  console.log('res', res)
})
</script>
