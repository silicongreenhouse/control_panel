<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { Executor } from '../types/executor.interface';
import { SensorEvent } from '../types/sensorEvent.interface';
import { api } from '../services/api.service';

const route = useRoute();

const props = withDefaults(
  defineProps<{ event: SensorEvent, sensorId: string, deleteButton?: string, sendButton?: string }>(), {
  event: () => {
    return { id: '', executor: "e2", state: "on", above: 0, equal: 0, below: 0, value: '' }
  },
  sensorId: "",
  deleteButton: "",
  sendButton: "Send"
})

const emit = defineEmits<{
  (e: "sendData", payload: SensorEvent): void;
  (e: "deleteData"): void;
}>();

const executors: Ref<Executor[]> = ref([]);

onMounted(async () => {
  executors.value = await api.value.getExecutors();
})

function emitSendData() {
  emit("sendData", props.event);
}
function emitDeleteData() {
  emit("deleteData");
}
</script>

<template>
  <!--Executor-->
  <div class="flex flex-col">
    <label>Executor</label>
    <select name="executor" id="executor" class="input bg-white" v-model="event.executor">
      <option v-for="executor in executors" :value="executor.id">{{ executor.name }}</option>
    </select>
  </div>

  <!--State-->
  <div class="flex flex-col">
    <label>State</label>
    <select name="state" id="state" class="input bg-white" v-model="event.state">
      <option value="on">on</option>
      <option value="off">off</option>
    </select>
  </div>

  <!--Form for normal sensors-->
  <ul v-if="props.sensorId !== 's3'">
    <li class="flex flex-col">
      <label for="Below">Above</label>
      <input type="number" placeholder="0" class="input" id="above" v-model="event.above" />
    </li>
    <li class="flex flex-col">
      <label for="Below">Equal</label>
      <input type="number" placeholder="0" class="input" id="equal" v-model="event.equal" />
    </li>
    <li class="flex flex-col">
      <label class="text-xl" for="Below">Below</label>
      <input type="number" placeholder="0" class="input" id="below" v-model="event.below" />
    </li>
  </ul>

  <!--Form for floor humidity-->
  <div v-else class="flex flex-col">
    <label>Value</label>
    <select name="value" id="value" class="input bg-white" v-model="event.value">
      <option value="low">low</option>
      <option value="high">high</option>
    </select>
  </div>

  <div class="flex justify-around mt-2">
    <button v-if="props.deleteButton" class="bg-red-500 p-2 rounded drop-shadow" @click="emitDeleteData">{{
        props.deleteButton
    }}</button>
    <button type="submit" class="bg-blue-400 p-2 rounded drop-shadow" @click="emitSendData">{{ props.sendButton
    }}</button>
  </div>
</template>
