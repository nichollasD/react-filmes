import { PESQUISAR_FILME, BUSCAR_FILMES, BUSCAR_FILME, CARREGAR } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';

export const PesquisarFilme = text => dispatch => {
  dispatch({
    type: PESQUISAR_FILME,
    payload: text
  });
};

export const BuscarFilmes = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: BUSCAR_FILMES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const BuscarFilme = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: BUSCAR_FILME,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const Carregar = () => {
  return {
    type: CARREGAR
  };
};
