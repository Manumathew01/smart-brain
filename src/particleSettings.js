const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 100,
    },
    particle: {
      particleCount: 250,
      color: "#e3d5d5",
      maxSize: 2
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.3
    },
    opacity: {
      minOpacity: 0.5,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }

  export default settings;