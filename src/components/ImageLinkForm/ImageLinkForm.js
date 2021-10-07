import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <h1 className="f1 white mb5 mt0">{"Detect faces in images!!"}</h1>
      <div className="center">
        <div className="center mb4" style={{ width: "700px" }}>
          <input
            className="f3 pa2 w-70 center"
            type="text"
            placeholder="Enter image url"
            onChange={onInputChange}
          />
          <button
            className="w-30 link f3 ph3 pv2 pointer"
            style={{ background: "#d3ad56", border: "none"  }}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
