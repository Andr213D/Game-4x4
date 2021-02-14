import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CardsState } from './contracts/state';

export const selectCards = (state: RootState): CardsState => state.cards;

// export const selectCardsItems = createSelector(selectCards, (cards) =>
//     cards.items
// );
