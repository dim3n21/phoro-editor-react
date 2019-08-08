import React, { Component } from 'react';

import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

import { Slider, InputNumber, Row, Col } from 'antd';

class App extends Component {
  
  state = {
    name: '',
    settings : {
      contrast: 20,
      hue: 0,
      brightness: 0,
      saturate: 0,
      sepia: 0
    }
  }

  onChange = (value) => {
    let newState = {...this.state};
    newState.settings[newState.name] = value;

    this.setState({
     settings: newState.settings
      })
  };

   onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
  }

  onMouse = (value) => {
    let newState = {...this.state};
    newState.name = value;

    this.setState({
      name: newState.name
    })
  }

  render() {
    return (
    <div className="App">
      <Header title="photo editor" />
      <Content settings={this.state.settings} onChange={this.onChange} onAfterChange={this.onAfterChange} onMouse={this.onMouse}/>
    </div>
    )
    
  }
}

export default App;
