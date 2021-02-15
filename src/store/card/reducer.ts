import produce, { Draft } from 'immer';
import { CardsActions, CardsActionsType } from './actionCreators';
import { CardsState } from './contracts/state';

const initialCardsState = {
    items:[],
    shirtCard: true
};

export const AddCardsState = produce((draft: Draft<CardsState>, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:{
            draft.items = action.payload;
            const shirtCard = (shirtCard: boolean) => false
        }
            //draft.items = action.payload;
            //draft.items = draft.items.filter((obj) => obj.types = action.payload);
            //draft.items = draft.items.filter((click) => draft.items = action.payload);
            //console.log(draft.items)
            //  return {
            //      // @ts-ignore
            //      shirtCard:boolean
            //  };
    }
}, initialCardsState)

