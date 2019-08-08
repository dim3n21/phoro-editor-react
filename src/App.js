import React, { Component } from 'react';

import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

import { Slider, InputNumber, Row, Col } from 'antd';

class App extends Component {
  
  state = {
    settings : {
      contrast: 20,
      hue: 0,
      brightness: 0,
      saturate: 0,
      sepia: 0
    }
  }

  onChange = value => {

    let newState = {...this.state};

    newState.settings = {
      contrast: value,
      hue: 0,
      brightness: 0,
      saturate: 0,
      sepia: 0
    }

    this.setState({
     settings: newState.settings
      })
  };

  render() {
    return (
    <div className="App">
      <Header title="photo editor" />
      <Content settings={this.state.settings} onChange={this.onChange} />
    </div>
    )
    
  }
}

export default App;
