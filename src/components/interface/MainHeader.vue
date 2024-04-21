<template>
  <q-header
    elevated
    class="bg-primary text-white"
    height-hint="98"
  >
    <q-toolbar class="main">
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Вахта
      </q-toolbar-title>
    </q-toolbar>
    <div class="main">
      <q-btn-dropdown
        v-for="item in list"
        :key="item.id"
        color="primary"
        :label="item.title"
      >
        <q-list v-if="item.children && item.children.length">
          <q-item
            clickable
            v-close-popup
            v-for="child in item.children"
            :key="child.id"
            v-on="child.events ? child.events : {}"
          >
            <q-item-section>
              <q-item-label>{{ child.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const list = ref([
  { id: 'opetation', title: 'Операции', children: [] },
  {
    id: 'bases',
    title: 'Базы',
    children: [
      {
        id: 'dictionaryShips',
        title: 'Справочник судов',
        events: {
          click: () => {
            router.push({ path: '/ships' })
          }
        }
      },
      {
        id: 'baseShips',
        title: 'База судов'
      }
    ]
  },
  { id: 'reports', title: 'Отчеты', children: [] },
  { id: 'settings', title: 'Настройки', children: [] },
  { id: 'support', title: 'Справка' }
])
</script>

<style scoped></style>
