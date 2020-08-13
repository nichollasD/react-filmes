import { combineReducers } from 'redux';
import pesquisarReducer from './pesquisarReducer';

export default combineReducers({
  filmes: pesquisarReducer
});
