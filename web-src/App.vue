<template>
  <div class="container">
    <h1>Simple Counter</h1>
    <Counter />
  </div>
</template>

<script setup lang="ts">
import Counter from './components/Counter.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>