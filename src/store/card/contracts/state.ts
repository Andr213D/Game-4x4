import { LoadingStatus } from "../../types";

export interface Card {
    types: number;
    click: boolean;
}

export interface CardsState {
    items: Card[];
    LoadingStatus: LoadingStatus;
}
