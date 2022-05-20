<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import { Sensor } from '../types/sensor.interface'
import { api } from '../services/api.service'
import { useRouter } from 'vue-router';

const sensors: Ref<Sensor[]> = ref([]);

const router = useRouter();

onMounted(async () => {
  sensors.value = await api.value.getSensors();
})

function showSensor(id: string) {
  router.push({ name: "sensors.show", params: { id } })
  console.log("Redirecting to a sensor route")
}
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <div v-for="sensor in sensors" :key="sensor.id" class="bg-gray-400 text-center py-8" @click="showSensor(sensor.id)">
      {{ sensor.short_name }}
    </div>
  </div>
</template>
