import * as types from './../constants/ActionTypes';


// export const requestBar

export const receiveBar = (name, address, phone, deal, happyHour, id) => ({
  type: types.RECEIVE_BAR,
  name,
  address,
  phone,
  deal,
  happyHour,
  id
});

export function fetchBarList(dispatch) {
  return fetch('https://im-pour.herokuapp.com/bars').then(
    response => response.json(),
    error => console.log('Something is wrong', error)
  ).then(function(json) {
    console.log(json);
    dispatch(receiveBar())
  });
}
