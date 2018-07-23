import React from 'react';

function Current() {

  function liveTime() {
    return new Date().toLocaleTimeString();
    // let now = new Date().toLocaleTimeString();
    // return setInterval(now, 1000);
  }

  return(
    <div>
      <h3>Current time: {liveTime()}</h3>
      <h3>Current Happy Hours:</h3>
    </div>
  );
}

export default Current;
