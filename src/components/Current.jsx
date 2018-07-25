import React from 'react';
import './Current.css';
import BarList from './BarList';
import PropTypes from 'prop-types';

function Current(props) {
  function liveTime() {
    return new Date().toLocaleTimeString();
    // let now = new Date().toLocaleTimeString();
    // return setInterval(now, 1000);
  }

  return(
    <div className='current-wrapper'>
      <div className='current-header'>
        <h3>Current time: {liveTime()}</h3>
        <h3>Current Happy Hours:</h3>
      </div>
      <hr/>
      <BarList barList={props.barList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );

}

Current.propTypes = {
  barList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Current;
