import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


const Display = ({ display }) => {
  return (
    <article aria-label="display-response">
      <ReactJson src={display} />
    </article>
  );
};


Display.propTypes = {
  display: PropTypes.object || PropTypes.array,
};


export default Display; 
