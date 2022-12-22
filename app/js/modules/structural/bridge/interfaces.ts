import DeviceEnum from './enums';

export interface IDevice {
    type: DeviceEnum;

    powerOn(): void;
    powerOff(): void;
    setVolume(volume: number): void;
}
