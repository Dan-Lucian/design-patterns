import { IPattern } from '../../../interfaces/IPattern';

export default class Composite implements IPattern {
    public main(): void {
        console.log('Composite');
    }
}
