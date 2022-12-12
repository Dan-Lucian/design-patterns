import { IPattern } from '../../../interfaces/IPattern';
import { Button, Checkbox, GUIFactory } from './interfaces';

export default class AbstractFactory implements IPattern {
    private _env: 'win' | 'mac';

    constructor(env: 'win' | 'mac') {
        this._env = env;
    }

    // - the client code doesn't care which concrete factory is used.
    // - the concrete factory was decided upon earlier based on the environment.
    // - the factory will create products that belong to the same family.
    public main(): void {
        const factory = this._getFactory();
        const button = factory.createButton();
        const checkbox = factory.createCheckbox();

        button.renderButton();
        checkbox.renderCheckbox();
    }

    // decides which factory to use by checking the environment
    private _getFactory(): GUIFactory {
        switch (this._env) {
            case 'win':
                return new WinFactory();
            case 'mac':
                return new MacFactory();
            default:
                throw new Error(`env: ${this._env} - is not supported`);
        }
    }
}

class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

class WinButton implements Button {
    renderButton(): void {
        console.log('REENDERING: win-button');
    }
}

class WinCheckbox implements Checkbox {
    renderCheckbox(): void {
        console.log('REENDERING: win-checkbox');
    }
}

class MacButton implements Button {
    renderButton(): void {
        console.log('REENDERING: mac-button');
    }
}

class MacCheckbox implements Checkbox {
    renderCheckbox(): void {
        console.log('REENDERING: mac-checkbox');
    }
}
