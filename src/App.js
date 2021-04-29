import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Blog />
        <Footer/>
      </div>
    );
  }
}

export default App;
