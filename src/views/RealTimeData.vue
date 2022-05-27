<script setup lang="ts">
import { socketData } from '../services/websocket.service';
import RemoteController from './RemoteController.vue';
</script>

<template>
  <div v-for="(value, name) in socketData" class="flex justify-between w-1/2 m-auto">
    <p>{{ name }}</p>
    <p>{{ value }}</p>
  </div>
  <RemoteController/>
</template>
