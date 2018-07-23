import React from 'react';
import './NewBarForm.css';
import PropTypes from 'prop-types';

function NewBarForm(props) {
  let _name = null;
  let _address = null;
  let _phone = null;
  let _deal = null;
  let _happyHour = null;

  function handleNewBarFormSubmission(e) {
    let body = {
      'name': _name.value,
      'address': _address.value,
      'phone': _phone.value,
      'deal': _deal.value,
      'happyHour': _happyHour.value
    }
    e.preventDefault();
    fetch('https://im-pour.herokuapp.com/bars/new', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    })
    console.log(body);
    _name.value = '';
    _address.value = '';
    _phone.value = '';
    _deal.value = '';
    _happyHour.value = '';
  }

  return(
    <div className='form-wrapper'>
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
        <br/>
        <button type='submit'>Submit</button>
        <br/>
      </form>
    </div>
  );
}

NewBarForm.propTypes = {
  onNewBarCreation: PropTypes.func
};


export default NewBarForm;
