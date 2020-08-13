import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pesquisar from './Pesquisar';
import Filmes from './Filmes';
import Spinner from '../layout/Spinner';

export class Main extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <Pesquisar />
        {loading ? <Spinner /> : <Filmes />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.filmes.loading
});

export default connect(mapStateToProps)(Main);
