import anotherReducer from "./another-reducer";
import homeReducer from "./home-reducer";
import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'

let reducers=combineReducers({
    anotherPage:anotherReducer,
    homePage:homeReducer,
    form:formReducer
})

let store =createStore(reducers)

export default store;