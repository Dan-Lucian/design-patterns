import { IPattern } from '../../../interfaces/IPattern';
import { IClonable } from './interfaces';

export default class Prototype implements IPattern {
    public main(): void {
        const original = new Clonable('original', 1);
        const cloned = original.clone();

        console.log('Original object:');
        original.logData();

        console.log('Cloned object:');
        cloned.logData();
    }
}

class Clonable implements IClonable {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public logData(): void {
        console.log(`Name: ${this.name}, age: ${this.age}.`);
    }

    // The clone is deep or shallow.
    // It is up to you how you want to implement
    public clone(): this {
        // shallow copy
        // const clone = { ...this };

        // deep copy
        // methods are copied only by a deep copy
        const clone = Object.create(
            Object.getPrototypeOf(this),
            Object.getOwnPropertyDescriptors(this)
        );

        return clone;
    }
}
