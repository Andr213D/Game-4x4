import produce, { Draft } from 'immer';
import { CardsActions, CardsActionsType } from './actionCreators';
import { CardsState } from './contracts/state';

const initialCardsState = {
    items: {
        id: [],
        shirtClick: true,
    }
};

export const AddCardsState = produce((draft: Draft<CardsState>, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:{
            draft.items.id = action.payload.id;
            draft.items.shirtClick = false
        }
    }
}, initialCardsState)