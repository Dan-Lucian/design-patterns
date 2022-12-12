import { IPattern } from '../../../interfaces/IPattern';

export default class Adapter implements IPattern {
    public main(): void {
        console.log('Adapter');
    }
}
