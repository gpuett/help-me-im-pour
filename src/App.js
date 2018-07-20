import React, { Component } from 'react';
import './App.css';
import { Switch, Route, HashRouter, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Current from './components/Current';
import BarList from './components/BarList';
import Error404 from './components/Error404';
import NewBarForm from './components/NewBarForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import v4 from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeals: null,
      error: null,
      isLoaded: false,
      masterBarList: []
    };
    this.handleAddingNewBarToList = this.handleAddingNewBarToList.bind(this);
  }

  componentDidMount() {
    fetch('https://im-pour.herokuapp.com/bars')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          masterBarList: result
        });
        console.log(result);
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
    let newBarId = v4();
    let newMasterBarList = Object.assign({}, this.state.masterBarList, {
      [newBarId]: newBar
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
              barList={this.props.masterBarList}
              currentRouterPath={props.location.pathname}/>}
            />
            <Route path='/bars' render={()=><BarList
              barList={this.props.masterBarList}/>}
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

App.propTypes = {
  masterBarList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBarList: state.masterBarList
  }
}

export default withRouter(connect(mapStateToProps)(App));
