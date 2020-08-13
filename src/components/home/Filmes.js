import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmeCard from './FilmeCard';

export class Filmes extends Component {
  render() {
    const { filmes } = this.props;
    let content = '';

    content =
      filmes.Response === 'True'
        ? filmes.Search.map((filme, index) => (
            <FilmeCard key={index} filme={filme} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  filmes: state.filmes.filmes
});

export default connect(mapStateToProps)(Filmes);
