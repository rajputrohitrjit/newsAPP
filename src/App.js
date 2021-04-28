import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <Blog />
      </div>
    );
  }
}

export default App;
