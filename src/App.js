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
      currentDeals: [],
      masterBarList: [],
    };
  }

  componentDidMount() {
    fetch('https://help-me-im-pour.herokuapp.com/bars')
    .then(res => {
      return res.json()
    })
    .then(
      (result) => {
        this.setState({
          masterBarList: result
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
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
            <Route path='/bars' render={(props)=><BarList
              currentRouterPath={props.location.pathname}
              barList={this.state.masterBarList}/>}
            />
            <Route path='/NewBar' render={()=> <NewBarForm/>}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}


export default App;
