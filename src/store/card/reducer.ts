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
    }
};

export const AddCardsState = produce((draft: Draft<CardsState>, action: CardsActions) => {
    switch (action.type) {
        case CardsActionsType.SET_CARDS:{
            const id =  action.payload.id
            const types =  action.payload.types
            draft.items.shirtClick = draft.items.shirtClick.splice(id, 1 , false) &&
                draft.items.shirtClick

            //draft.items.shirtClick[draft.items.id] = false
            //const log = draft.items.shirtClick.splice(draft.items.id, 1 , false)
        }
    }
}, initialCardsState)

// const cards = document.querySelectorAll('.memory-card');
//
// let hasFlippedCard = false;
// let firstCard, secondCard;
//
// function flipCard() {
//     this.classList.add('flip');
//
//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//         return;
//     }
//
//     secondCard = this;
//     hasFlippedCard = false;
//
//     checkForMatch();
// }
//
// function checkForMatch() {
//     if (firstCard.dataset.framework === secondCard.dataset.framework) {
//         disableCards();
//         return;
//     }
//
//     unFlipCards();
// }
//
// function disableCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
// }
//
// function unFlipCards() {
//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//     }, 1500);
// }
//
// cards.forEach(card => card.addEventListener('click', flipCard));