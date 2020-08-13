import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/home/Main';
import Filme from './components/home/Filme';
import store from './store';
import teste from './components/layout/img/teste.jpg';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ backgroundImage: `url(${teste})`}} >
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/filme/:id" component={Filme} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
