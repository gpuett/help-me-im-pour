import c from './../constants';


export default (state = {}, action) => {
  let newState;
  const { name, address, phone, deal, happyHour, id } = action;

  switch (action.type) {
    case c.ADD_BAR:
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          address: address,
          phone: phone,
          deal: deal,
          happyHour: happyHour,
          id: id
        }
      });
      return newState;

    case c.RECEIVE_BAR:
        newState = Object.assign({}, state);
        newState[action.bar.id] = action.bar;
        return newState;

  default:
    return state;
  }
}
