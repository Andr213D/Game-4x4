import {createStore , compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer';
import {CardsState} from "./card/contracts/state";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    cards: CardsState;
}


export const store = createStore(rootReducer,
    composeEnhancers( applyMiddleware(thunk)))

export default store