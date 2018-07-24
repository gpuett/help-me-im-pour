import React from 'react';
import './Current.css';
import BarList from './BarList';
import PropTypes from 'prop-types';

function Current(props) {

  console.log(props);

  function getDayOfWeek() {
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

  function liveTime() {
    return new Date().toLocaleTimeString();
    // let now = new Date().toLocaleTimeString();
    // return setInterval(now, 1000);
  }

  return(
    <div className='current-wrapper'>
      <div className='current-header'>
        <h3>Current Day: {getDayOfWeek()}</h3>
        <h3>Current time: {liveTime()}</h3>
        <h3>Current Happy Hours:</h3>
      </div>
      <hr/>
      <BarList barList={props.barList}/>
    </div>
  );
}

Current.propTypes = {
  barList: PropTypes.array
};

export default Current;
