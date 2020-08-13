import {PESQUISAR_FILME,BUSCAR_FILMES,BUSCAR_FILME,CARREGAR} from '../actions/types';

const initialState = {text: '',filmes: [],loading: false,filme: []};

export default function (state = initialState, action) {
  switch (action.type) {
    case PESQUISAR_FILME:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case BUSCAR_FILMES:
      return {
        ...state,
        filmes: action.payload,
        loading: false
      };
    case BUSCAR_FILME:
      return {
        ...state,
        filme: action.payload,
        loading: false
      };
    case CARREGAR:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
