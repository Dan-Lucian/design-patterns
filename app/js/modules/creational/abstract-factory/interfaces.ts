export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

export interface Button {
    renderButton(): void;
}

export interface Checkbox {
    renderCheckbox(): void;
}
