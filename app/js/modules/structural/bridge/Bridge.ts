import { IPattern } from '../../../interfaces/IPattern';
import { IDevice } from './interfaces';
import DeviceEnum from './enums';

export default class Bridge implements IPattern {
    public main(): void {
        const radio = new Radio();
        const tv = new TV();

        // The idea is that classes can be composed instead of creating
        // a new class for each commbination of properties.

        // Using the bridge a 3x3 will result in 6 classes,
        // not using the bridge will result in 9 for each combination.

        // Now in order to add a new device all you have to do is create 1 class
        // which implements the IDevice interface and pass it to the Remote.
        const radioRemote = new Remote(radio);
        const advancedTVRemote = new AdvancedRemote(tv);

        radioRemote.powerOn();
        advancedTVRemote.powerOn();
        advancedTVRemote.mute();
    }
}

// The bridge pattern usually has an "Abstraction" and an "Implementation".
// Here "Remote" classes are the abstraction and the "Devices" are the implementation.
class Remote {
    protected _device: IDevice;

    constructor(device: IDevice) {
        this._device = device;
    }

    public powerOn(): void {
        // Implementation's method doesn't have to have the same name.
        // Same name accidentaly.
        this._device.powerOn();
    }

    public powerOff(): void {
        this._device.powerOff();
    }
}

// The abtraction can be easily extended and new functionality can be added.
class AdvancedRemote extends Remote {
    public mute(): void {
        this._device.setVolume(0);
    }
}

// Implementations follow a common interface.
class TV implements IDevice {
    public type = DeviceEnum.TV;

    public powerOn(): void {
        console.log(`${this.type}: powering on`);
    }

    public powerOff(): void {
        console.log(`${this.type}: powering off`);
    }

    public setVolume(volume: number): void {
        console.log(`${this.type}: setting volume to ${volume}`);
    }
}

// Here the code repeats because it's just an example, in reality each device
// has it's own custom circuitry to do the logic.
class Radio implements IDevice {
    public type = DeviceEnum.Radio;

    public powerOn(): void {
        console.log(`${this.type}: powering on`);
    }

    public powerOff(): void {
        console.log(`${this.type}: powering off`);
    }

    public setVolume(volume: number): void {
        console.log(`${this.type}: setting volume to ${volume}`);
    }
}
