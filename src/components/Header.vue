<script setup lang="ts">
</script>

<template>
  <div class=" bg-green-400 perspective-shadow shadow-md">
    <!--Header-->
    <router-link :to="{ name: 'root' }" class="flex items-center justify-around py-4">
      <img src="/placeholder.png" alt="main logo" class="h-10">
      <h1 class="text-2xl">Silicon Greenhouse</h1>
    </router-link>
    <!--Header-->
    <nav class="flex justify-around text-lg bg-green-600 py-2">
      <router-link :to="{ name: 'sensors' }">Sensors</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
</style>
