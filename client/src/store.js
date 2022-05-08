import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { courListReducer } from './reducers/courReducer'; 


const reducer = combineReducers({
    courList: courListReducer,
  
})
//localStorage.getItem

let initialState = {
   cart: {
    cartItems: localStorage.getItem("cartItems") ? 
    JSON.parse(localStorage.getItem("cartItems"))
    : [],

    shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress') ): {}
   },

//    auth: {
//        isAuthenticated: localStorage.getItem("logAuth") ? JSON.parse(localStorage.getItem("logAuth")) : {}
//    }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

