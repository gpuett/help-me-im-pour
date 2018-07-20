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
    this.state = {
      masterBarList:
      [
        {
          name: 'Kelly\'s Olympian',
          address: '426 SW Washington St, Portland, OR 97204',
          phone: '503-228-3669',
          deal: '$1 off draft beer, well drinks and wine',
          happyHour: '4pm-7pm',
          id: 1
        }
      ]
    }
    this.handleAddingNewBarToList = this.handleAddingNewBarToList.bind(this);
  }
  handleAddingNewBarToList(newBar){
    let newMasterBarList = this.state.masterBarList.slice();
    newMasterBarList.push(newBar);
    this.setState({masterBarList: newMasterBarList});
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' render={(props)=><Current
              barList={this.state.masterBarList}
              currentRouterPath={props.location.pathname}/>}
            />
            <Route path='/bars' render={()=><BarList
              barList={this.state.masterBarList}/>}
            />
            <Route path='/NewBar' render={()=> <NewBarForm
              onNewBarFormSubmission={this.handleAddingNewBarToList}/>}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
