import * as types from './../constants/ActionTypes';
import constants from './../constants';
import axios from 'axios';
const {c} = constants;



// export function addBar(_name, _address, _phone, _deal, _happyHour) {
//   return () => bars.push({
//     name: _name,
//     address: _address,
//     phone: _phone,
//     deal: _deal,
//     happyHour: _happyHour
//   });
// }

export const receiveBar = (name, address, phone, deal, happyHour, id) => ({
  type: types.RECEIVE_BAR,
  name,
  address,
  phone,
  deal,
  happyHour,
  id
});

export function fetchBarList() {
  return function (dispatch) {

    return fetch('https://im-pour.herokuapp.com/bars').then(
      response => response.json(),
      error => console.log('Something is wrong', error)
    ).then(function(json) {
      console.log(json);
      dispatch(receiveBar())
    });
  }
}
