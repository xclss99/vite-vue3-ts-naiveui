<template>
  <n-config-provider :theme="theme">
    <n-el tag="div" class="container">
      <n-space vertical align="center">
        <n-text type="success">
          <h1>Vite + Vue3 + TypeScript + NaiveUI</h1>
        </n-text>
        <n-text type="info">
          <p> This template should help get you started developing with Vite + Vue3 + TypeScript + NaiveUI, and ESLint + Prettier. </p>
        </n-text>
        <n-space>
          <n-button @click="theme = darkTheme">
            dark
          </n-button>
          <n-button @click="theme = null">
            light
          </n-button>
        </n-space>
      </n-space>
    </n-el>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'

const theme = ref<typeof darkTheme | null>(darkTheme)
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--body-color);
  transition: .6s var(--cubic-bezier-ease-in-out);
}
p {
  margin: 20px 0;
}
</style>
