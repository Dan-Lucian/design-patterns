import { IPattern } from './interfaces/IPattern';

export default function runPattern(patternName: string, pattern: IPattern): void {
    console.log(`|---> ${patternName}`);
    pattern.main();
    console.log('');
}
