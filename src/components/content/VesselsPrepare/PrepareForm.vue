<template>
  <q-form
    @submit="onAdd"
    @reset="onRemove"
    class="q-gutter-md"
  >
    <div class="row no-wrap">
      <table class="col-6">
        <tbody>
          <tr
            v-for="element in formConstructor"
            :key="element.id"
          >
            <td>
              <div class="text-h6 q-mr-md">
                {{ element.props.label }}
              </div>
            </td>
            <td>
              <q-select
                style="min-width: 300px"
                v-if="element.component === 'q-select'"
                v-bind="element.props"
                :label="''"
                v-model="form[element.id]"
              />
              <q-input
                style="min-width: 300px"
                v-if="element.component === 'q-input'"
                v-bind="element.props"
                :label="''"
                v-model="form[element.id]"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="q-ml-sm col-6">
        <q-option-group
          :options="typeNameOptions"
          type="radio"
          v-model="form.typeName"
        />
        <div class="row no-wrap q-mt-sm q-ml-sm">
          <q-input
            style="max-width: 150px"
            label="Новое имя"
            outlined
            v-model="form.newName"
            dense
          />
          <q-btn
            class="q-ml-md"
            outline
            no-caps
            color="primary"
            label="База судов"
          />
        </div>
      </div>
    </div>
    <div class="row justify-center q-my-sm q-gutter-xl">
      <q-btn
        color="primary"
        no-caps
        label="Добавить"
      />

      <q-btn
        outline
        no-caps
        color="primary"
        label="Удалить"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IForm {
  type: string
  name: string
  barge: string
  sediment: number
  typeName?: string
  direction?: string
  newName?: string
}
interface IFormElement {
  component: string
  id: keyof IForm
  props: {
    outlined: boolean
    label: string
    options?: string[]
    type?: string
    step?: number
    'options-dense': boolean
    dense: boolean
  }
}
const form = ref<IForm>({
  direction: 'Вверх',
  type: '',
  name: '',
  barge: 'Без Барж',
  sediment: 0,
  typeName: '',
  newName: ''
})
const formConstructor = ref<IFormElement[]>([
  {
    component: 'q-select',
    id: 'direction',
    props: {
      outlined: true,
      label: 'Направление',
      dense: true,
      'options-dense': true,
      options: ['Вверх', 'Вниз']
    }
  },
  {
    component: 'q-select',
    id: 'type',
    props: {
      outlined: true,
      label: 'Тип',
      dense: true,
      'options-dense': true,
      options: ['Сухогрузный', 'Танкер', 'Пассажирский', 'Тех/флот', 'Маломер/флот']
    }
  },
  {
    component: 'q-select',
    id: 'name',
    props: {
      outlined: true,
      label: 'Наименование',
      dense: true,
      'options-dense': true,
      options: []
    }
  },
  {
    component: 'q-select',
    id: 'barge',
    props: {
      outlined: true,
      label: 'Баржа',
      dense: true,
      'options-dense': true,
      options: ['Без Барж', 'Баржа', 'Нефтебаржа']
    }
  },
  {
    component: 'q-input',
    id: 'sediment',
    props: {
      outlined: true,
      label: 'Осадка',
      dense: true,
      'options-dense': true
      // type: 'number'
      // step: 0.01
    }
  }
])
const typeNameOptions = [
  { label: 'Именные', value: 'name' },
  { label: 'Номерные', value: 'numeric' }
]
const onRemove = () => {
  console.log('reset')
}
const onAdd = () => {
  console.log('submit')
}
</script>

<style scoped></style>
