import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


const Display = ({ res }) => (
  <div>
    <ReactJson src={res} />
  </div>
);


Display.propTypes = {
  res: PropTypes.object || PropTypes.array,
};


export default Display; 
