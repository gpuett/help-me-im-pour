import React from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';
import { fetchBarList } from './../actions';
import './BarList.css';

function BarList(props) {

  return(
    <div className='list-wrapper'>
      {Object.keys(props.barList).map(function(barId) {
        let bar = props.barList[barId];
        return <Bar name={bar.name}
          address={bar.address}
          phone={bar.phone}
          deal={bar.deal}
          happyHour={bar.happyHour}
          key={barId}/>;
      })}
    </div>
  );
}

BarList.propTypes = {
  barList: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default BarList;
