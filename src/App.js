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
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleEntry(code) {
    this.setState({
      kitDisplay: drumKeys[code].descript,
      kitCode: drumKeys[code]
    });

  }

  handleKeyPress(event) {
    const pressCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
    if (pressCodes.includes(event.keyCode)) {
      this.handleEntry(event.keyCode);
    }
  }
  render() {
    return (
      <div className="container">
      <div className="top">
        <h1>Drum Machine</h1>
      </div>
      <div className="grid">
        <div className="pad">Q</div>
        <div className="pad">W</div>
        <div className="pad">E</div>
        <div className="pad">A</div>
        <div className="pad">S</div>
        <div className="pad">D</div>
        <div className="pad">Z</div>
        <div className="pad">X</div>
        <div className="pad">C</div>
      </div>
      <div className="bottom">
        {this.state.kitDisplay}
      </div>
    </div>
    );
  }
}


export default App;
