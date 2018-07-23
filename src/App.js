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
      currentDeals: null,
      error: null,
      isLoaded: false,
      masterBarList: [],
    };
    this.handleAddingNewBarToList = this.handleAddingNewBarToList.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    fetch('https://im-pour.herokuapp.com/bars')
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          masterBarList: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  handleAddingNewBarToList(newBar){
    let newMasterBarList = Object.assign({}, this.state.masterBarList, {
      [newBar.id]: newBar
    });
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
              onNewBarCreation={this.handleAddingNewBarToList}/>}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}


export default App;
