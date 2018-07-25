import React, { Component } from 'react';
import './Current.css';
import BarList from './BarList';
import PropTypes from 'prop-types';

class Current extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.getDayOfWeek = this.getDayOfWeek.bind(this);
    this.liveTime = this.liveTime.bind(this);
  }

  getDayOfWeek() {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[day.getDay()];
  }

  liveTime() {
    return new Date().toLocaleTimeString();
    // let now = new Date().toLocaleTimeString();
    // return setInterval(now, 1000);
  }


  //
  // let pmPattern = RegExp(/pm$/i);
  // let start;
  // let end;
  // let hour = new Date().getHours();
  //
  // function getStart(props) {
  //   if (pmPattern.test(props.happyHourStart)) {
  //     return start = parseInt(props.happyHourStart, 10) + 12;
  //   } else {
  //     return start = parseInt(props.happyHourStart, 10);
  //   }
  // }
  //
  // function getEnd(props) {
  //   if (pmPattern.test(props.happyHourEnd)) {
  //     return end = parseInt(props.happyHourEnd, 10) + 12
  //   } else {
  //     return end = parseInt(props.happyHourEnd, 10)
  //   }
  // }
  //
  // function currentDeals(props) {
  //   let filteredProps;
  //   getStart(props);
  //   getEnd(props);
  //   if (start < hour < end) {
  //     return filteredProps = props;
  //   }
  // }
  //
  //
  render() {
    return(
      <div className='current-wrapper'>
        <div className='current-header'>
          <h3>Current Day: {this.getDayOfWeek()}</h3>
          <h3>Current time: {this.liveTime()}</h3>
          <h3>Current Happy Hours:</h3>
        </div>
        <hr/>
        <BarList barList={this.props.barList}
          currentRouterPath={this.props.currentRouterPath}/>
      </div>
    );
  }
}

Current.propTypes = {
  barList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Current;
