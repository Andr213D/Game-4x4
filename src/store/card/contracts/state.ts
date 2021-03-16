
export interface CardProperty {
    types: number;
    id: number;
    shirtClick: any;
}

export interface CardsState {
    items: CardProperty;
    valCards: any;
    shirtPosition: boolean;
    lastShirtType: number;
    lastShirtId: number;
}