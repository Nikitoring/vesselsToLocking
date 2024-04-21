<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="isReady"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
      backdrop-filter="blur(4px) saturate(150%)"
    >
      <q-card style="width: 900px; max-width: 80vw">
        <q-card-section class="row items-center">
          <div
            class="text-h5 col-11"
            style="text-align: center"
          >
            {{ props.lockName }}
          </div>
          <!-- <q-space /> -->
          <q-btn
            class="col-1"
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>

        <q-card-section
          class="q-pa-none"
          style="max-width: 800px; margin: 0 auto"
        >
          <VesselsToLockingList :vessels="vessels" />
        </q-card-section>
        <q-card-section style="max-width: 800px; margin: 0 auto">
          <PrepareForm />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import VesselsToLockingList from '../VesselsToLockingList.vue'
import PrepareForm from './PrepareForm.vue'

import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    defult: false
  },
  lockName: {
    type: String,
    defaul: 'Шлюз 16'
  }
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const isReady = computed({
  get: function () {
    return props.modelValue
  },
  set: function (state: boolean) {
    emit('update:modelValue', state)
  }
})

const vessels = ref([])
</script>
