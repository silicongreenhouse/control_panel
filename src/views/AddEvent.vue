<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import { useRoute } from 'vue-router'
import { api } from '../services/api.service';
import { Executor } from '../types/executor.interface';

const route = useRoute()
const executors: Ref<Executor[]> = ref([]);

onMounted(async () => {
  executors.value = await api.value.getExecutors();
})

function sendData() {
  console.log("TODO send data to api");
}
</script>

<template>
  <h1 class="text-center text-3xl">Add event</h1>

  <!--Executor-->
  <div class="flex flex-col">
    <label>Executor</label>
    <select name="executor" id="executor" class="input bg-white">
      <option v-for="executor in executors" value="executor.id">{{executor.name}}</option>
    </select>
  </div>
  
  <!--State-->
  <div class="flex flex-col">
    <label>State</label>
    <select name="state" id="state" class="input bg-white">
      <option value="on">on</option>
      <option value="off">off</option>
    </select>
  </div>

  <!--Form for normal sensors-->
  <ul v-if="route.params.id !== 's3'">
    <li class="flex flex-col">
      <label for="Below">Above</label>
      <input type="number" value="0" placeholder="0" class="input" id="above" />
    </li>
    <li class="flex flex-col">
      <label for="Below">Equal</label>
      <input type="number" value="0" placeholder="0" class="input" id="equal" />
    </li>
    <li class="flex flex-col">
      <label class="text-xl" for="Below">Below</label>
      <input type="number" value="0" placeholder="0" class="input" id="below" />
    </li>
  </ul>

  <!--Form for floor humidity-->
  <div v-else class="flex flex-col">
    <label>Value</label>
    <select name="value" id="value" class="input bg-white">
      <option value="low">low</option>
      <option value="high">high</option>
    </select>
  </div>

  <button type="submit" class="m-auto block bg-blue-400 mt-2 p-2 rounded drop-shadow" @click="sendData">Save</button>
</template>
