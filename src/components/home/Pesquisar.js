import React, { Component } from 'react';
import { connect } from 'react-redux';
import {PesquisarFilme, BuscarFilmes, Carregar} from '../../actions/Pesquisa';
import logo from '../layout/img/logo.png';
import teste2 from '../layout/img/teste2.jpg';

export class Pesquisar extends Component {
  onChange = e => {
    this.props.PesquisarFilme(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.BuscarFilmes(this.props.text);
    this.props.Carregar();
  };

  render() {
    return (
      <div className="jumbotron bg-dark">
        <div className="text-center">
          <img src={logo} width="100" height="100" />
        </div>
        <form id="Pesquisar" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquise por filmes e séries."
            onChange={this.onChange}
          />
          <div className="text-center">
            <button type="submit" className="btn btn-warning mt-3">
              <h3>Pesquisar</h3>
            </button>
          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.filmes.text
});

export default connect(mapStateToProps,
  { PesquisarFilme, BuscarFilmes, Carregar })(Pesquisar);
