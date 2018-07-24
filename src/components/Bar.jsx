import React from 'react';
import PropTypes from 'prop-types';

function Bar(props) {
  const barInfo =
    <div>
      <h3>{props.name}</h3>
      <h4>{props.deal}</h4>
      <h4>{props.happyHour}</h4>
      <h6>{props.address}</h6>
      <h6>{props.phone}</h6>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/') {
    return (
      <div> {barInfo} </div>
    );
  } else {
    return(
      <div>
        {barInfo}
      </div>
    );
  }
}

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deal: PropTypes.string.isRequired,
  happyHour: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
}

export default Bar;
