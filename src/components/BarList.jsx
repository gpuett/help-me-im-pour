import React from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';
import './BarList.css';

function BarList(props) {


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

BarList.propTypes = {
  barList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default BarList;
