import React from 'react';
import { fetchBarList } from './../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Bar({dispatch}) {
  return(
    <div>
      
    </div>
  );
}

Bar.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(Bar);
