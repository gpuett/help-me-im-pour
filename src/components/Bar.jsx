import React from 'react';
import PropTypes from 'prop-types';

function Bar(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.deal}</h4>
      <h4>{props.happyHourStart} - {props.happyHourEnd}</h4>
      <h6>{props.address}</h6>
      <h6>{props.phone}</h6>
      <hr/>
    </div>
  );
}

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deal: PropTypes.string.isRequired,
  happyHourStart: PropTypes.string.isRequired,
  happyHourEnd: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
}

export default Bar;
