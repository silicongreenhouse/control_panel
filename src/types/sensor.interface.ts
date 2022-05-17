import { SensorEvent } from './sensorEvent.interface';

export interface Sensor {
    id: string;
    name: string;
    short_name: string;
    events?: SensorEvent[];
}
