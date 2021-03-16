import produce, { Draft } from 'immer';
import { CardsActions, CardsActionsType } from './actionCreators';
import { CardsState } from './contracts/state';

const valCards = [
    true,true,true,true,
    true,true,true,true,
    true,true,true,true,
    true,true,true,true
]

const initialCardsState = {
    items: {
        shirtClick: valCards,
        shirtPosition: false,
    }
};

export const AddCardsState = produce((draft: Draft<CardsState>, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:{
            const id =  action.payload.id
            const types =  action.payload.types

            if ( draft.shirtPosition == false ) {
                draft.items.shirtClick = draft.items.shirtClick.splice(id, 1, false) &&
                    draft.items.shirtClick
                draft.shirtPosition = true
                draft.lastShirtType = types
                draft.lastShirtId = id
            }
            else if (types == draft.lastShirtType) {
                draft.items.shirtClick = draft.items.shirtClick.splice(id, 1, false) &&
                    draft.items.shirtClick
                draft.shirtPosition = false
            }
            else {
                draft.items.shirtClick = draft.items.shirtClick.splice(id, 1, false) &&
                    draft.items.shirtClick
                draft.items.shirtClick = draft.items.shirtClick.splice(id, 1, true) &&
                    draft.items.shirtClick &&
                    draft.items.shirtClick.splice(draft.lastShirtId, 1, true) &&
                    draft.items.shirtClick
                draft.shirtPosition = false
            }
        }
    }
}, initialCardsState)

