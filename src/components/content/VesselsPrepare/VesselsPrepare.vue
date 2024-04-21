<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="isReady"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip
              v-if="maximizedToggle"
              class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip
              v-if="!maximizedToggle"
              class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="close"
            v-close-popup
          >
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div
            style="text-align: center"
            class="text-h6"
          >
            {{ props.lockName }}
          </div>
          <div style="max-width: 200px; margin: 0 auto">
            <q-select
              outlined
              v-model="direction"
              :options="directionOptions"
              :dense="true"
              :options-dense="true"
            />
          </div>
        </q-card-section>

        <q-card-section
          class="q-pa-none"
          style="max-width: 800px; margin: 0 auto"
        >
          <VesselsToLockingList :vessels="vessels" />
        </q-card-section>
        <q-card-section>
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

const direction = ref('Вверх')
const directionOptions = ref(['Вверх', 'Вниз'])
const maximizedToggle = ref(true)

const vessels = ref([])
</script>
