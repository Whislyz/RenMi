import React from 'react';

// Previous image arrow & Next image arrow
const Svg = (props) => (
  <div>
    <svg
      onClick={props.handleViewButton}

      viewPort="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="25"
        x2="25"
        y2="1"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="1"
        y1="1"
        x2="25"
        y2="25"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  </div>

);

export default Svg;
