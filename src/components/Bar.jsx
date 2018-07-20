import React from 'react';
import { fetchBarList } from './../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Bar(props) {
  return(
    <div>
      <hr/>
      <h3>{props.name}</h3>
      <h4>{props.deal}</h4>
      <h4>{props.happyHour}</h4>
      <h6>{props.address}</h6>
      <h6>{props.phone}</h6>
    </div>
  );
}

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deal: PropTypes.string.isRequired,
  happyHour: PropTypes.string.isRequired
}

export default connect()(Bar);
