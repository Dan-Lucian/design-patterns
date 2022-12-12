import { IPattern } from '../../../interfaces/IPattern';

export default class Facade implements IPattern {
    public main(): void {
        console.log('Facade');
    }
}
