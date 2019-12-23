import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockwise: true
    };
  }

  componentDidMount() {
    this.setState({
      clockwise: false
    });
  }

  handleChange = () => {
    this.setState({
      clockwise: !this.state.clockwise
    });
  };

  render() {
    console.log('trace this.state:', this.state);
    return (
      <div className='App'>
        <header className='App-header'>
          <img
            src={logo}
            className={`App-logo ${this.state.clockwise ? '' : 'reverse'}`}
            alt='logo'
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button type='button' onClick={this.handleChange}>
            Learn React
          </button>
        </header>
      </div>
    );
  }
}

export default App;
