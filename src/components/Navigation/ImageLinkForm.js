import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
     <div className="warning">
      <p>Notice: due to the recent Clarifai API changes, some options are unavailable right now and are under maintenance.</p>
      </div>
      <div className="center">
        <div className="form pa4 br3 shadow-3">
          <label htmlFor="options"> Link: </label>
          <input className="f4 pa2 w-70" type="text" onChange={onInputChange} />
          <div>
            <br></br>
            <label htmlFor="options"> Detect: </label>
            <button value="Faces" onClick={onButtonSubmit} className="myButton">
              Faces
            </button>
            <button
              value="Demographics"
              onClick={onButtonSubmit}
              className="myButton"

              disabled
            >
              Demographics
            </button>
            <button
              value="Objects"
              onClick={onButtonSubmit}
              className="myButton"
              disabled
            >
              Objects
            </button>
            <button
              value="Colors"
              onClick={onButtonSubmit}
              className="myButton"
              disabled
            >
              Colors
            </button>
            <button
              value="Apparel"
              onClick={onButtonSubmit}
              className="myButton"
              disabled
            >
              Apparel
            </button>
            <button value="Food" onClick={onButtonSubmit} className="myButton" disabled>
              Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
