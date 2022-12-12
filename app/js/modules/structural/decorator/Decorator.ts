import { IPattern } from '../../../interfaces/IPattern';

export default class Decorator implements IPattern {
    public main(): void {
        console.log('Decorator');
    }
}
