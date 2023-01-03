/* eslint-disable @typescript-eslint/no-empty-function */
import { IPattern } from '../../../interfaces/IPattern';
import Price from './constants';

export default class Composite implements IPattern {
    public main(): void {
        const mainBox = new Box();
        const headphonesBox = new Box();
        const glasses = new Glasses();
        const charger = new Charger();
        const pen = new Pen();
        const headphones = new Headphones();

        headphonesBox.add(headphones);
        headphonesBox.add(charger);
        mainBox.add(headphonesBox);
        mainBox.add(glasses);
        mainBox.add(pen);
        /*
         *                 _______ mainBox _____
         *               /           |          \
         *       headphonesBox     glasses       pen
         *         /     \
         *    charger   headphones
         *
         */

        // TODO: ADD COMMENTS AND FILL IN THE EVERNOTE CHAP COMPOSITE

        // Total price gets calculated recursively thanks to the composite structure.
        const totalPrice = mainBox.getPrice();
        console.log('Total price: ', totalPrice);
    }
}

abstract class AComposite {
    protected _parent!: AComposite | null;

    get parent(): AComposite | null {
        return this._parent;
    }

    set parent(parent: AComposite | null) {
        this._parent = parent;
    }

    // These methods are empty because leaf components shouldn't have children.
    // Actual composites will implement those.
    public add(child: AComposite): void {}
    public remove(child: AComposite): void {}

    public isComposite(): boolean {
        return false;
    }

    public abstract getPrice(): number;
}

class Box extends AComposite {
    private _children: AComposite[] = [];

    public add(child: AComposite): void {
        this._children.push(child);
        child.parent = this;
    }

    public remove(child: AComposite): void {
        this._children.push(child);
        child.parent = null;
    }

    public getPrice(): number {
        return this._children.reduce((sum, child) => sum + child.getPrice(), 0);
    }

    public isComposite(): boolean {
        return true;
    }
}

class Glasses extends AComposite {
    public getPrice(): number {
        return Price.GLASSES;
    }
}

class Charger extends AComposite {
    public getPrice(): number {
        return Price.CHARGER;
    }
}

class Pen extends AComposite {
    public getPrice(): number {
        return Price.PEN;
    }
}

class Headphones extends AComposite {
    public getPrice(): number {
        return Price.HEADPHONES;
    }
}
