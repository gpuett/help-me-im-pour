import React from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';
import './BarList.css';

function BarList(props) {
  let pmPattern = RegExp(/pm$/i);
  let start;
  let end;
  let hour = new Date().getHours();

  function getStart(bar) {
    if (pmPattern.test(bar.happyHourStart)) {
      return start = parseInt(bar.happyHourStart, 10) + 12;
    } else {
      return start = parseInt(bar.happyHourStart, 10);
    }
  }

  function getEnd(bar) {
    if (pmPattern.test(bar.happyHourEnd)) {
      return end = parseInt(bar.happyHourEnd, 10) + 12
    } else {
      return end = parseInt(bar.happyHourEnd, 10)
    }
  }

  function currentDeals(bar) {
    getStart(bar);
    getEnd(bar);
    return (start <= hour && hour < end)
  }

  let currentDealsBarList = props.barList.filter((bar) => {
    if (currentDeals(bar)) {
      return bar;
    }
    return null;
  })


  if (props.currentRouterPath === '/'){
    return(
      <div className='list-wrapper'>
        {currentDealsBarList.map((bar) =>
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
