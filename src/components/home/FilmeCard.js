import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class FilmeCard extends Component {
  render() {
    const { filme } = this.props;
    return (
      <div className="col-md-4 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={filme.Poster} alt="Filme Cover" />
          <h5 className="text-light card-title">
            {filme.Title} - {filme.Year}
          </h5>
            {/* <h4 className="text-light">{"Tipo: " + filme.Type.toUpperCase()}</h4> */}
          <Link className="btn btn-warning" to={'/filme/' + filme.imdbID}>
            Mais detalhes
          </Link>
        </div>
      </div>
    );
  }
}

export default FilmeCard;
