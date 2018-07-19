import React, { Component } from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Current from './components/Current';
import BarList from './components/BarList';
import Error404 from './components/Error404';
import NewBarForm from './components/NewBarForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddingNewBarToList = this.handleAddingNewBarToList.bind(this);
  }
  handleAddingNewBarToList(newBar){
    // set state => post to API
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Current} />
            <Route path='/bars' component={BarList}/>
            <Route path='/NewBar' render={()=> <NewBarForm
              onNewBarFormSubmission={this.handleAddingNewBarToList}/>} />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
