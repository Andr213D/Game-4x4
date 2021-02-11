
import { CardsActions, CardsActionsType } from './actionCreators';
import { CardsState } from './contracts/state';

const initialCardsState = {
    click: true,
    types: {},
};

export const AddCardsState = (draft: CardsState, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:
            draft.items = action.payload;
            break;
    }
};
