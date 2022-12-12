import { IPattern } from '../../../interfaces/IPattern';
import { DollInstructionsPartsEnum, DollPartsEnum } from './enums';
import { IBuilder } from './interfaces';

export default class Builder implements IPattern {
    public main(): void {
        const dollBuilder = new DollBuilder();
        const dollInstructionsBuilder = new DollInstructionsBuilder();

        // Since both builders are following the IBuilder interface you can
        // construct related objects using the same director algorithm
        Director.buildHeadlessDoll(dollBuilder);
        Director.buildHeadlessDoll(dollInstructionsBuilder);

        const doll = dollBuilder.getResult();
        const dollInstructions = dollInstructionsBuilder.getResult();

        doll.listParts();
        dollInstructions.listParts();
    }
}

// IBuilder interface does not declare a return type for the `getResult` method
// because different builders can return different products, here we have 2
// builders `DollBuilder` and a `DollInstructionsBuilder`
class DollBuilder implements IBuilder {
    private _doll: Doll;

    constructor() {
        this._doll = new Doll();
    }

    public attachHead(): void {
        this._doll.parts.push(DollPartsEnum.Head);
    }

    public attachBody(): void {
        this._doll.parts.push(DollPartsEnum.Body);
    }

    public attachArms(): void {
        this._doll.parts.push(DollPartsEnum.Arms);
    }

    public attachLegs(): void {
        this._doll.parts.push(DollPartsEnum.Legs);
    }

    // Usually, after returning the end result to the client, a builder instance
    // is expected to be ready to start producing another product. That's why
    // it's a usual practice to call the reset method at the end of the
    // `getResult` method body.
    public getResult(): Doll {
        const result = this._doll;
        this._reset();

        return result;
    }

    private _reset(): void {
        this._doll = new Doll();
    }
}

class DollInstructionsBuilder implements IBuilder {
    private _dollInstructions: DollInstructions;

    constructor() {
        this._dollInstructions = new DollInstructions();
    }

    public attachHead(): void {
        this._dollInstructions.parts.push(DollInstructionsPartsEnum.Head);
    }

    public attachBody(): void {
        this._dollInstructions.parts.push(DollInstructionsPartsEnum.Body);
    }

    public attachArms(): void {
        this._dollInstructions.parts.push(DollInstructionsPartsEnum.Arms);
    }

    public attachLegs(): void {
        this._dollInstructions.parts.push(DollInstructionsPartsEnum.Legs);
    }

    // Usually, after returning the end result to the client, a builder instance
    // is expected to be ready to start producing another product. That's why
    // it's a usual practice to call the reset method at the end of the
    // `getResult` method body.
    public getResult(): DollInstructions {
        const result = this._dollInstructions;
        this._reset();

        return result;
    }

    private _reset(): void {
        this._dollInstructions = new DollInstructions();
    }
}

class Doll {
    public parts: DollPartsEnum[] = [];

    public listParts(): void {
        console.log(`${this.parts.join(', ')} - doll parts.`);
    }
}

class DollInstructions {
    public parts: DollInstructionsPartsEnum[] = [];

    public listParts(): void {
        console.log(`${this.parts.join(', ')} - doll instructions parts.`);
    }
}

class Director {
    public static buildHeadlessDoll(builder: IBuilder): void {
        builder.attachBody();
        builder.attachArms();
        builder.attachLegs();
    }
}
