<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
  >
    <component
      v-for="element in formConstructor"
      :is="element.component"
      :key="element.id"
      v-bind="element.props"
      v-model="form[element.id]"
    />
  </q-form>
</template>

<script setup lang="ts">
//   <q-select outlined v-model="model" :options="options" label="Outlined" />
import { ref } from 'vue'
interface IForm {
  type: string
  name: string
  barge: string
  sediment: number
}

const form = ref<IForm>({
  type: '',
  name: '',
  barge: 'Без Барж',
  sediment: 0
})
const formConstructor = ref<
  {
    component: string
    id: keyof IForm
    props: { outlined: boolean; label: string; options?: string[]; type?: string; step?: number }
  }[]
>([
  {
    component: 'q-select',
    id: 'type',
    props: {
      outlined: true,
      label: 'Тип',
      options: ['Сухогрузный', 'Танкер', 'Пассажирский', 'Тех/флот', 'Маломер/флот']
    }
  },
  {
    component: 'q-select',
    id: 'name',
    props: {
      outlined: true,
      label: 'Наименование',
      options: []
    }
  },
  {
    component: 'q-select',
    id: 'barge',
    props: {
      outlined: true,
      label: 'Баржа',
      options: ['Без Барж', 'Баржа', 'Нефтебаржа']
    }
  },
  {
    component: 'q-input',
    id: 'sediment',
    props: {
      outlined: true,
      label: 'Осадка',
      type: 'number',
      step: 0.01
    }
  }
])
const onReset = () => {
  console.log('reset')
}
const onSubmit = () => {
  console.log('submit')
}
</script>

<style scoped></style>
