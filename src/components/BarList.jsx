import React from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';

function BarList(props) {
  return(
    <div>
      <hr/>
      {props.barList.map((bar) =>
        <Bar name={bar.name}
          address={bar.address}
          phone={bar.phone}
          deal={bar.deal}
          happyHour={bar.happyHour}
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
