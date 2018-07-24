import React from 'react';
import PropTypes from 'prop-types';

function Bar(props) {
  console.log(props);

  const barInfo =
  <div>
    <h3>{props.name}</h3>
    <h4>{props.deal}</h4>
    <h4>{props.happyHourStart} - {props.happyHourEnd}</h4>
    <h6>{props.address}</h6>
    <h6>{props.phone}</h6>
    <hr/>
  </div>;

  let pmPattern = RegExp(/pm$/i);
  let start;
  let end;
  let hour = new Date().getHours();

  function getStart(props) {
    if (pmPattern.test(props.happyHourStart)) {
      return start = parseInt(props.happyHourStart, 10) + 12;
    } else {
      return start = parseInt(props.happyHourStart, 10);
    }
  }

  function getEnd(props) {
    if (pmPattern.test(props.happyHourEnd)) {
      return end = parseInt(props.happyHourEnd, 10) + 12
    } else {
      return end = parseInt(props.happyHourEnd, 10)
    }
  }

  function currentDeals(props) {
    let filteredProps;
    getStart(props);
    getEnd(props);
    if (start < hour < end) {
      return filteredProps = props;
    }
  }


  if (props.currentRouterPath === '/') {
    currentDeals(props);
    console.log('hi');
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
  } else {
    return (
      <div> {barInfo} </div>
    );
  }
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
