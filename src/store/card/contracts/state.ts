
export interface Card {
    types: number;
    id: number;
    click: boolean;
}

export interface CardsState {
    items: Card[];
}
