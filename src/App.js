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

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   masterBarList:
    //   [
    //     {
    //       name: 'Kelly\'s Olympian',
    //       address: '426 SW Washington St, Portland, OR 97204',
    //       phone: '503-228-3669',
    //       deal: '$1 off draft beer, well drinks and wine',
    //       happyHour: '4pm-7pm',
    //       id: 1
    //     }
    //   ]
    // }
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
            <Route path='/NewBar' render={()=> <NewBarForm/>}/>
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
    masterBarList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
