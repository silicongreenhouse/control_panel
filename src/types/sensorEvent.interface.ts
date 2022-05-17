export interface SensorEvent {
    id: string;
    executor: string;
    state: string;
    above?: number;
    below?: number;
    equal?: number;
    value?: string;
}
