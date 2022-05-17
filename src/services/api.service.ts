import { ref } from 'vue'
import { Executor } from '../types/executor.interface';
import { Sensor } from '../types/sensor.interface'

export const api = ref({
  domain: `localhost:3000`,

  async getSensorById(id: string): Promise<Sensor> {
    const res = await fetch(`http://${this.domain}/api/sensors/${id}`)
    return await res.json();
  },

  async getSensors(): Promise<Sensor[]> {
    const res = await fetch(`http://${this.domain}/api/sensors`)
    return await res.json();
  },

  async getExecutors(): Promise<Executor[]> {
    const res = await fetch(`http://${this.domain}/api/executors`)
    return await res.json()
  }
})
