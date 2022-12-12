import { IPattern } from '../../../interfaces/IPattern';

export default class Flyweight implements IPattern {
    public main(): void {
        console.log('Flyweight');
    }
}
