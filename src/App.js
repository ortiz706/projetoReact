import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from './components/botao';

export function add(param){
  return param + 1;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0, 
      clockwise: true
    };
  }

  counterInc = () => {
    this.setState({
      counter: add(this.state.counter)
    });
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
          <Botao texto="Learn React" handleChange={this.handleChange} />
          <br/>
          <Botao texto="Aumenta contador" handleChange={this.counterInc} />            
          <p>
            Resultado {this.state.counter}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
