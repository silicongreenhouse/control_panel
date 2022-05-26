<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import { api } from '../services/api.service';
import { toggleExecutor } from '../services/websocket.service';
import { Executor } from '../types/executor.interface';

let executors: Ref<Executor[]> = ref([]);
onMounted(async () => {
  executors.value = await api.value.getExecutors();
})
</script>

<template>
  <ul class="grid grid-rows-2 gap-2">
    <li v-for="executor in executors" class="text-center bg-blue-200 p-2 rounded" @click="toggleExecutor(executor.id)">
      {{ executor.name }}
    </li>
  </ul>
</template>
