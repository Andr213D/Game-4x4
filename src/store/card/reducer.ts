import { LoadingStatus } from '../types';
import { CardsActions, CardsActionsType } from './actionCreators';
import { CardsState } from './contracts/state';

const initialCardsState = {
    click: true,
    types: {},
    LoadingStatus: LoadingStatus.NEVER,
};

export const AddCardsState = (draft: CardsState, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:
            draft.items = action.payload;
            draft.LoadingStatus = LoadingStatus.LOADED;
            break;
    }
};
