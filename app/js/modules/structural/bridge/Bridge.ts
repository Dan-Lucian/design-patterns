import { IPattern } from '../../../interfaces/IPattern';

export default class Bridge implements IPattern {
    public main(): void {
        console.log('Bridge');
    }
}
