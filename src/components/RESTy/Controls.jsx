import React from 'react';
import PropTypes from 'prop-types';


const Controls = ({ url, body, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}  
      data-testid="controls-form">

      <input
        aria-label="urlTextbox"
        id="url"
        name="url"
        type="text"
        placeholder="https://"
        value={url}
      />

      <section aria-label="methodSelector">
        <label htmlFor="GET">
          <input
            aria-label="GET"
            id="GET"
            name="method"
            type="radio"
            value="GET"
            onChange={onChange}
          />
          <div className>
              GET
          </div>
        </label>

        <label htmlFor="POST">
          <input
            aria-label="POST"
            id="POST"
            name="method"
            type="radio"
            value="POST"
            onChange={onChange}
          />
          <div className>
              POST
          </div>
        </label>

        <label htmlFor="PUT">
          <input
            aria-label="PUT"
            id="PUT"
            name="method"
            type="radio"
            value="PUT"
            onChange={onChange}
          />
          <div className>
              PUT
          </div>
        </label>

        <label htmlFor="PATCH">
          <input
            aria-label="PATCH"
            id="PATCH"
            name="method"
            type="radio"
            value="PATCH"
            onChange={onChange}
          />
          <div className>
              PATCH
          </div>
        </label>

        <label htmlFor="DELETE">
          <input
            aria-label="DELETE"
            id="DELETE"
            name="method"
            type="radio"
            value="DELETE"
            onChange={onChange}
          />
          <div className>
              DELETE
          </div>
        </label>
        <button className aria-label="submit-button">Submit</button>
      </section>
      <input 
        aria-label="bodytextbox" 
        name="body" 
        type="text" 
        value={body} 
        placeholder="Raw JSON body" 
        className />
    </form>
  </div>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
