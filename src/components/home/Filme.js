import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BuscarFilme, Carregar } from '../../actions/Pesquisa';
import Spinner from '../layout/Spinner';

export class Filme extends Component {
  componentDidMount() {
    this.props.BuscarFilme(this.props.match.params.id);
    this.props.Carregar();
  }
  render() {
    const { loading, filme } = this.props;

    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body bg-dark">
            <img src={filme.Poster}/>
          </div>
          <div className="col-md-8 bg-dark">
            <h2 className="mb-4 text-light">
              {filme.Title}
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Categoria:</strong> {filme.Genre}
              </li>
              <li className="list-group-item">
                <strong>Duração:</strong> {filme.Runtime}
              </li>
              <li className="list-group-item">
                <strong>Data de lançamento:</strong> {filme.Released}
              </li>
              <li className="list-group-item">
                <strong>Nota:</strong> {filme.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Premios:</strong> {filme.Awards}
              </li>
              <li className="list-group-item">
                <strong>Diretor:</strong> {filme.Writer}
              </li>
              <li className="list-group-item">
                <strong>Atores:</strong> {filme.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>Resumo </h3>
              {filme.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + filme.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
              >
                Veja no IMBD
              </a>
              <Link to="/" className="btn btn-primary text-light">
                Volte para a pesquisa
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.filmes.loading,
  filme: state.filmes.filme
});

export default connect(
  mapStateToProps,
  { BuscarFilme, Carregar }
)(Filme);
