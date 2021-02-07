import {createStore , compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
//import { rules } from "./reducers/rules"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
export const rootReducer = combineReducers({
//    rules
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer,
    composeEnhancers( applyMiddleware(thunk)))


export default store