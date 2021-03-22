import { Action } from 'redux';
import { CardsState } from './contracts/state';
import { ThunkAction } from 'redux-thunk'

export enum CardsActionsType {
    SET_CARDS = 'SET_CARDS',
    SET_SHIRT = 'SET_SHIRT',
}

export interface SetCardsActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_CARDS;
    payload: CardsState['items'];
}

export interface SetShirtActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_SHIRT;
}

export const setCards = (payload: CardsState['items']): SetCardsActionInterface => ({
    type: CardsActionsType.SET_CARDS,
    payload,
});

export const setShirt = ():
    ThunkAction <void, CardsActionsType, unknown, SetShirtActionInterface> =>
    (dispatch ) =>  {
    setTimeout(() => dispatch({type: CardsActionsType.SET_SHIRT})
        , 1000)
    }
    
export type CardsActions =
    | SetCardsActionInterface
    | SetShirtActionInterface

