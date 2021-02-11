import produce, { Draft } from 'immer';
import { CardsActions, CardsActionsType } from './actionCreators';
import { CardsState } from './contracts/state';

const initialCardsState = {
    items: []
};

export const AddCardsState = produce((draft: Draft<CardsState>, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:
            draft.items = action.payload;
            //draft.items = draft.items.filter((obj) => obj.click == action.payload);
            console.log(draft.items)
            break;
    }
}, initialCardsState)
