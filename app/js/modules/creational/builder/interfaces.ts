export interface IBuilder {
    attachHead(): void;
    attachBody(): void;
    attachArms(): void;
    attachLegs(): void;
    getResult(): unknown;
}
