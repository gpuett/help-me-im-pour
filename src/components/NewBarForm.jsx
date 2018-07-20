import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';
import './NewBarForm.css';
import PropTypes from 'prop-types';
import {addBar} from './../actions';

function NewBarForm({dispatch}) {
  let _name = null;
  let _address = null;
  let _phone = null;
  let _deal = null;
  let _happyHour = null;

  function handleNewBarFormSubmission(e) {
    e.preventDefault();
    const action = {
      type: c.ADD_BAR,
      id: v4(),
      name: _name.value,
      address: _address.value,
      phone: _phone.value,
      deal: _deal.value,
      happyHour: _happyHour.value
    };
    dispatch(action);
    _name.value = '';
    _address.value = '';
    _phone.value = '';
    _deal.value = '';
    _happyHour.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewBarFormSubmission}>
        <h1>Add Happy Hour Info</h1>
        <input
          type="text" placeholder="Name" required
          ref={(input) => {_name = input;}}/>
        <br/>
        <input
          type="text" placeholder="Address" required
          ref={(input) => {_address = input;}}/>
        <br/>
        <input
          type="text" placeholder="Phone Number" required
          ref={(input) => {_phone = input;}}/>
        <br/>
        <input
          type="text" placeholder="Deal" required
          ref={(input) => {_deal = input;}}/>
        <br/>
        <input
          type="text" placeholder="Happy Hour" required
          ref={(input) => {_happyHour = input;}}/>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
      </form>
    </div>
  );
}

NewBarForm.propTypes = {
  dispatch: PropTypes.func
};


export default connect() (NewBarForm);
