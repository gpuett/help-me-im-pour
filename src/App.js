import React, { Component } from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Current from './components/Current';
import BarList from './components/BarList';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Current} />
            <Route path='/bars' component={BarList}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
