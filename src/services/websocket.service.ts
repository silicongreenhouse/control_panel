import { ref } from 'vue';
const socketData = ref({
  temperature: 0,
  water_level: 0,
  floor_humidity: "none",
})
const wsStreamData = new WebSocket("ws://localhost:3000/ws_client");
const wsController = new WebSocket("ws://localhost:3000/ws_client_controller");

wsStreamData.onmessage = ({ data }) => {
  let obj = JSON.parse(data)
  let { temperature, water_level, floor_humidity } = obj;

  socketData.value = { temperature, water_level, floor_humidity };

}

function toggleExecutor(id: string) {
  wsController.send(id)
}

export { socketData, toggleExecutor }
