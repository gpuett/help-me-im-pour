import React from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';
import './BarList.css';

function BarList(props) {
  let pmPattern = RegExp(/pm$/i);
  let start;
  let end;
  let hour = new Date().getHours();

  function getStart(props) {
    if (pmPattern.test(props.happyHourStart)) {
      return start = parseInt(props.happyHourStart, 10) + 12;
    } else {
      return start = parseInt(props.happyHourStart, 10);
    }
  }

  function getEnd(props) {
    if (pmPattern.test(props.happyHourEnd)) {
      return end = parseInt(props.happyHourEnd, 10) + 12
    } else {
      return end = parseInt(props.happyHourEnd, 10)
    }
  }

  function currentDeals(props) {
    let filteredProps;
    getStart(props);
    getEnd(props);
    if (start < hour < end) {
      return filteredProps = props;
    }
  }


  if (props.currentRouterPath === '/'){
    return(
      <div className='list-wrapper'>
        {props.barList.map((bar) =>
          <Bar name={bar.name}
            address={bar.address}
            phone={bar.phone}
            deal={bar.deal}
            happyHourStart={bar.happyHourStart}
            happyHourEnd={bar.happyHourEnd}
            currentRouterPath={props.currentRouterPath}
            key={bar.id}/>
        )}
      </div>
    );
  } else {
    return(
      <div className='list-wrapper'>
        {props.barList.map((bar) =>
          <Bar name={bar.name}
            address={bar.address}
            phone={bar.phone}
            deal={bar.deal}
            happyHourStart={bar.happyHourStart}
            happyHourEnd={bar.happyHourEnd}
            currentRouterPath={props.currentRouterPath}
            key={bar.id}/>
        )}
      </div>
    );
  }
}

BarList.propTypes = {
  barList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default BarList;
