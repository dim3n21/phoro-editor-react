import React, { Component } from 'react';

import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';


class App extends Component {
  
  state = {
    image: 'https://images.unsplash.com/photo-1562617407-2734f156481c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
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
      <Content settings={this.state.settings} image={this.state.image} onChange={this.onChange} onAfterChange={this.onAfterChange} onMouse={this.onMouse}/>
    </div>
    )
    
  }
}

export default App;
