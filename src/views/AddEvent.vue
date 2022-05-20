<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { api } from '../services/api.service';
import { Executor } from '../types/executor.interface';
import { SensorEvent } from '../types/sensorEvent.interface';
import eventForm from './eventForm.vue';

const route = useRoute();
const router = useRouter();
const executors: Ref<Executor[]> = ref([]);
const sensorId = route.params.id as string;

const event: Ref<SensorEvent> = ref({ id: "", executor: 'e1', state: "off", above: 0, equal: 0, below: 0, value: sensorId == "s3" ? "low" : ""});

onMounted(async () => {
  executors.value = await api.value.getExecutors();
})

function sendData(event: SensorEvent) {
  api.value.newEvent(sensorId, event);
  router.push({name: "sensors.show", params: {id: sensorId}});
}

function deleteData() {
  console.log("Data deleted");
}
</script>

<template>
  <h1 class="text-center text-3xl">Add event</h1>

  <eventForm :event="event" :sensorId="sensorId" @sendData="sendData"/>
</template>
