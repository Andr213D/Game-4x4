import { Action } from 'redux';
import { LoadingStatus } from '../types';
import { CardsState } from './contracts/state';

export enum CardsActionsType {
    SET_CARDS = 'tags/SET_CARDS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetCardsActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_CARDS;
    payload: CardsState['items'];
}

export interface SetCardsLoadingStatusActionInterface extends Action<CardsActionsType> {
    type: CardsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
}

export const setCards = (payload: CardsState['items']): SetCardsActionInterface => ({
    type: CardsActionsType.SET_CARDS,
    payload,
});

export const setCardsLoadingStatus = (payload: LoadingStatus): SetCardsLoadingStatusActionInterface => ({
    type: CardsActionsType.SET_LOADING_STATE,
    payload,
});

export type CardsActions =
    | SetCardsActionInterface
    | SetCardsLoadingStatusActionInterface;
