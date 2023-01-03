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

        // The sum is calculated recursively thanks to the composite structure.
        const totalPrice = mainBox.getPrice();
        console.log('Total price: ', totalPrice);
    }
}

// The abstract class for actual composites and leaf objects to extend.
abstract class AComposite {
    protected _parent!: AComposite | null;

    get parent(): AComposite | null {
        return this._parent;
    }

    set parent(parent: AComposite | null) {
        this._parent = parent;
    }

    // These methods are empty because leaf objects shouldn't have children.
    // Actual composites will implement these.
    public add(child: AComposite): void {}
    public remove(child: AComposite): void {}

    // "true" = has children, "false" = no children.
    // Actual composites will overwrite this method to return true.
    public isComposite(): boolean {
        return false;
    }

    public abstract getPrice(): number;
}

// An actual composite which will have chidlren.
class Box extends AComposite {
    // Actual composites keep track of children.
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

// A leaf object.
class Glasses extends AComposite {
    public getPrice(): number {
        return Price.GLASSES;
    }
}

// A leaf object.
class Charger extends AComposite {
    public getPrice(): number {
        return Price.CHARGER;
    }
}

// A leaf object.
class Pen extends AComposite {
    public getPrice(): number {
        return Price.PEN;
    }
}

// A leaf object.
class Headphones extends AComposite {
    public getPrice(): number {
        return Price.HEADPHONES;
    }
}
