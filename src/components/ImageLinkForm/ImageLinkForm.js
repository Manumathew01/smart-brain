import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return(
  <div className = 'f3'>
    <p className = 'white'>
      {'Detect faces in images'}
    </p>
    <div className = 'center'>
      <div className = 'form-pattern center pa4 br3 shadow-4 ' >
        <input className ='f4 pa2 w-70 center' type ='text' onChange = {onInputChange} />
        <button className = 'w-30 link f4 ph3 pv2 dib white button' onClick = {onButtonSubmit} >Detect</button>
      </div>
    </div>
    </div>
  
  );
}

export default ImageLinkForm;