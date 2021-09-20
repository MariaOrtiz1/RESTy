import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


const Display = ({ response }) => {
  return (
    <article aria-label="display-response">
      <ReactJson src={response} />
    </article>
  );
};



Display.propTypes = {
  response: PropTypes.oneOfTypes([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};


export default Display; 
