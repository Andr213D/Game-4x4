
export interface CardProperty {
    types: number;
    id: number;
    shirtClick: any;
}

export interface CardsState {
    items: CardProperty;
    valCards: any;
    shirtPosition: boolean;
    shirtDispatch: any;
    lastShirtType: number;
    lastShirtId: number;
    shirtBlock: boolean,
}