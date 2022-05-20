import { ref } from 'vue'
import { Executor } from '../types/executor.interface';
import { Sensor } from '../types/sensor.interface'
import { SensorEvent } from '../types/sensorEvent.interface';

export const api = ref({
  domain: `localhost:3000`,

  async getSensorById(id: string): Promise<Sensor> {
    const res = await fetch(`http://${this.domain}/api/sensors/${id}`);
    return await res.json();
  },

  async getSensors(): Promise<Sensor[]> {
    const res = await fetch(`http://${this.domain}/api/sensors`);
    return await res.json();
  },

  async getExecutors(): Promise<Executor[]> {
    const res = await fetch(`http://${this.domain}/api/executors`);
    return await res.json();
  },

  async newEvent(sensorId: string, event: SensorEvent) {
    const res = await fetch(`http://${this.domain}/api/sensors/${sensorId}/events`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    if (res.status >= 400) {
      alert("Invalid form");
    }
  },

  async deleteEvent(sensorId: string, eventId: string) {
    await fetch(`http://${this.domain}/api/sensors/${sensorId}/events/${eventId}`, {method: "DELETE"});
  },

  async getEventById(sensorId: string, eventId: string): Promise<SensorEvent> {
    const res = await fetch(`http://${this.domain}/api/sensors/${sensorId}/events/${eventId}`);
      return await res.json()
  }
})
