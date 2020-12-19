import React, { Component } from 'react';
import Clarifai from 'clarifai';
import ParticleBackground from 'react-particle-backgrounds';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import particleSettings from './particleSettings';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a77a26db39fd414eb3e462e4400710a3'
 });


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
   this.setState({input: event.target.value});
  
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict( Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then(response => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      })
      .catch(err => {
        console.log(err)
      })

  }
  
  render() {
    return (
      <div className = "App">
        <ParticleBackground className = 'bubbles' settings ={particleSettings}/>
        <Navigation />
        <Logo /> 
        <Rank />
        <ImageLinkForm onInputChange ={this.onInputChange} onButtonSubmit ={this.onButtonSubmit}  />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
     );
  }

}

export default App;
