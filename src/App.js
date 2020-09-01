import React from 'react';
//import logo from './logo.svg';
import './App.css';
import drumKeys from './drumKeys.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kitDisplay: "press a key",
      kitCode: 0
    };
    this.handleEntry = this.handleEntry.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyRelease = this.handleKeyRelease.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyRelease);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyRelease);
  }

  handleEntry(code) {
    this.setState({
      kitDisplay: drumKeys[code].descript,
      kitCode: code
    });

  }

  playSound(code) {
    this.track = new Audio(drumKeys[code].sound);
    this.track.play();
  }

  resetState() {
    this.setState({
      kitCode: 0
    });
  }

  handleKeyPress(event) {
    const pressCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
    if (pressCodes.includes(event.keyCode)) {
      this.handleEntry(event.keyCode);
      this.playSound(event.keyCode);
    }
  }

  handleKeyRelease(event) {
    this.resetState();
  }

  render() {
    return (
      <div className="container">
      <div className="top">
        <h1>Drum Machine</h1>
      </div>
      <div className="grid">
        <div id="q-pad" className={this.state.kitCode === 81 ? 'pad-active': 'pad' }>Q</div>
        <div id="w-pad" className={this.state.kitCode === 87 ? 'pad-active': 'pad' }>W</div>
        <div id="e-pad" className={this.state.kitCode === 69 ? 'pad-active': 'pad' }>E</div>
        <div id="a-pad" className={this.state.kitCode === 65 ? 'pad-active': 'pad' }>A</div>
        <div id="s-pad" className={this.state.kitCode === 83 ? 'pad-active': 'pad' }>S</div>
        <div id="d-pad" className={this.state.kitCode === 68 ? 'pad-active': 'pad' }>D</div>
        <div id="z-pad" className={this.state.kitCode === 90 ? 'pad-active': 'pad' }>Z</div>
        <div id="x-pad" className={this.state.kitCode === 88 ? 'pad-active': 'pad' }>X</div>
        <div id="c-pad" className={this.state.kitCode === 67 ? 'pad-active': 'pad' }>C</div>
      </div>
      <div className="bottom">
        {this.state.kitDisplay}
      </div>
    </div>
    );
  }
}


export default App;
