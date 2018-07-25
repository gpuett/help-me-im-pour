import React from 'react';
import BarList from './BarList';
import PropTypes from 'prop-types';


function AllBarList(props) {


  return(
    <div className='AllBarList-wrapper'>
      <BarList barList={props.barList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

BarList.propTypes = {
  barList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default AllBarList;
