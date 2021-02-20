import {combineReducers} from "redux";

import {CardsState} from "./card/contracts/state";
import { AddCardsState } from './card/reducer';

//import { userReducer } from './user/reducer';

export interface cardInterface {
    card: CardsState;
}

export const rootReducer = combineReducers <cardInterface>({
// @ts-ignore
    card: AddCardsState,
//    user: userReducer,

});
