import { IPattern } from '../../../interfaces/IPattern';
import IProduct from './interfaces';

export default class FactoryMethod implements IPattern {
    public main(): void {
        const concreteCreator1 = new ConcreteCreator1();
        this._clientCode(concreteCreator1);

        const concreteCreator2 = new ConcreteCreator2();
        this._clientCode(concreteCreator2);
    }

    // the client code doesn't care which concrete creator was used
    private _clientCode(creator: Creator): void {
        console.log(creator.init());
    }
}

abstract class Creator {
    // it is expected that subclasses will implement their own factoryMethod()
    public abstract factoryMethod(): IProduct;

    // the logic is written only once and passed along to the subclasses
    public init(): string {
        const product = this.factoryMethod();
        return `The same creator's logic has worked with ${product.doOperation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProduct2();
    }
}

class ConcreteProduct1 implements IProduct {
    public doOperation(): string {
        return `- ConcreteProduct1`;
    }
}

class ConcreteProduct2 implements IProduct {
    public doOperation(): string {
        return `- ConcreteProduct2`;
    }
}
