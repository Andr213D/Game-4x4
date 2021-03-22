import { Action } from 'redux';
import { CardsState } from './contracts/state';
import { ThunkAction } from 'redux-thunk'

export enum CardsActionsType {
    SET_CARDS = 'SET_CARDS',
    SET_SHIRT = 'SET_SHIRT',
    SET_LOCKS_SHIRT = 'SET_LOCKS_SHIRT',
    SET_UNLOCKS_SHIRT = 'SET_UNLOCKS_SHIRT',
}

export interface SetCardsActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_CARDS;
    payload: CardsState['items'];
}

export interface SetShirtActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_SHIRT;
}

export interface SetShirtLockActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_LOCKS_SHIRT;
}

export interface SetShirtUnlockActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_UNLOCKS_SHIRT;
}

export const setLockShirt = (): SetShirtLockActionInterface => ({
    type: CardsActionsType.SET_LOCKS_SHIRT,
});

export const setUnlockShirt = (): SetShirtUnlockActionInterface => ({
    type: CardsActionsType.SET_UNLOCKS_SHIRT,
});

export const setCards = (payload: CardsState['items']): SetCardsActionInterface => ({
    type: CardsActionsType.SET_CARDS,
    payload,
});

export const setShirt = ():
    ThunkAction <void, any, unknown, SetShirtActionInterface> =>
    (dispatch ) => {
        // @ts-ignore
        dispatch(setLockShirt())
        setTimeout(() => {
                dispatch({type: CardsActionsType.SET_SHIRT})
                // @ts-ignore
                dispatch(setUnlockShirt())
            }
            , 400)



    }

export type CardsActions =
    | SetCardsActionInterface
    | SetShirtActionInterface
    | SetShirtLockActionInterface
    | SetShirtUnlockActionInterface

