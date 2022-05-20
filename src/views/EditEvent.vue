<script setup lang="ts">
import eventFormVue from './eventForm.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, Ref, ref } from 'vue';
import { SensorEvent } from '../types/sensorEvent.interface';
import { api } from '../services/api.service';

const route = useRoute();
const router = useRouter();
const sensorId = route.params.id as string;
const eventId = route.params.eventId as string;
const event: Ref<SensorEvent> = ref({ id: '', executor: '', state: '' });

onMounted(async () => {
  event.value = await api.value.getEventById(sensorId, eventId);
})

async function saveEvent(ev: SensorEvent) {
  await api.value.newEvent(sensorId, ev);
  router.push({name: 'sensors.show', params: {id: sensorId}})
}

async function deleteEvent() {
  await api.value.deleteEvent(sensorId, eventId);
  router.push({name: 'sensors.show', params: {id: sensorId}})
}

</script>

<template>
  <eventFormVue deleteButton="Delete" sendButton="Save" :sensorId="sensorId" :event="event" @sendData="saveEvent" @deleteData="deleteEvent"/>
</template>
