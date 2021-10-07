import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt5">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {boxes.map((box) => {
          return (
            <div
              key={box.topRow + Math.random()}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
      {boxes.length !== 0 ? (
        <div className=" f3 mb5 white">
          <p>
            Number of faces in your image is
            <span className="gold"> {boxes.length}</span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FaceRecognition;
