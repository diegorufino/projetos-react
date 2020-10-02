import { combineReducers } from 'redux'
import { filmesReducer } from './filmesReducer'

const mainReducer = combineReducers({
    filmes: filmesReducer
})

export default mainReducer;