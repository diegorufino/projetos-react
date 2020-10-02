import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const ACTIONS = {
    LISTAR: 'FILMES_LISTAR',
    FAVORITOS: 'FILMES_ADD_FAVORITOS',
    DETALHAR: 'FILMES_DETALHAR'
}


const ESTADO_INICIAL = {
    filmes: [],
    favoritos: [],
    detalhes: ''
}

export const filmesReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case ACTIONS.LISTAR:
            return { ...state, filmes: action.filmes, busca: action.busca }
        case ACTIONS.DETALHAR:
            return { ...state, detalhes: action.detalhes }
        case ACTIONS.FAVORITOS:
            return { ...state, favoritos: action.favoritos }
        default:
            return state;
    }
}

export function listar(busca){
    return dispatch => {
        axios.get(`${API_URL}?s=${busca}&apikey=${API_KEY}`).
            then(response => {
                dispatch({
                    type: ACTIONS.LISTAR, 
                    filmes: response.data,
                    busca: busca
                })
            })
    }
}

export function detalhar(id){
    return dispatch => {
        axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`).
            then(response => {
                dispatch({
                    type: ACTIONS.DETALHAR, 
                    detalhes: response.data
                })
            })
    }
}

export function addFavoritos(favoritos) {
    return dispatch => {
        dispatch({
            type: ACTIONS.FAVORITOS,
            favoritos: favoritos,
        })
    }
}