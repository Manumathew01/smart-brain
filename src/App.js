import React, { Component } from "react";
import Clarifai from "clarifai";
import ParticleBackground from "react-particle-backgrounds";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import particleSettings from "./particleSettings";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "a77a26db39fd414eb3e462e4400710a3",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
    };
  }

  calculateFaceLocation = (data) => {
    const allRegions = data.outputs[0].data.regions;
    const faces = allRegions.map((region) => region.region_info.bounding_box);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const boxes = faces.map((face) => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - face.right_col * width,
        bottomRow: height - face.bottom_row * height,
      };
    });
    return boxes;
  };

  displayFaceBox = (boxes) => {
    this.setState({ boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response));
        console.log(response.outputs[0].data.regions); //multiple faces
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <ParticleBackground className="bubbles" settings={particleSettings} />
        <nav>
          <div className="pa4"></div>
        </nav>
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition
          boxes={this.state.boxes}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
