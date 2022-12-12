import { IPattern } from '../../../interfaces/IPattern';

export default class Proxy implements IPattern {
    public main(): void {
        console.log('Proxy');
    }
}
