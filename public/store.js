import { createStore } from 'redux'
import AppReducer from './reducers'

let store = createStore(AppReducer)

export default store;