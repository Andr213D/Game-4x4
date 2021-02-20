import { Action } from 'redux';
import { CardsState } from './contracts/state';

export enum CardsActionsType {
    SET_CARDS = 'SET_CARDS',
}

export interface SetCardsActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_CARDS;
    payload: CardsState['items'];
}


export const setCards = (payload: CardsState['items']): SetCardsActionInterface => ({
    type: CardsActionsType.SET_CARDS,
    payload,
});


export type CardsActions =
    | SetCardsActionInterface
