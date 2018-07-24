import React from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';
import './BarList.css';

function BarList(props) {

  console.log(props);

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

      {/* {Object.keys(props.barList).map(function(barId) {
        let bar = props.barList[barId];
        return <Bar name={bar.name}
          address={bar.address}
          phone={bar.phone}
          deal={bar.deal}
          happyHour={bar.happyHour}
          key={bar.id}/>;
      })} */}
    </div>
  );
}

BarList.propTypes = {
  barList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default BarList;
