import React, { Component } from 'react';

import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';


class App extends Component {
  
  state = {
    image: 'https://images.unsplash.com/flagged/photo-1565241758499-3bf9d63d9094?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: '',
    settings : {
      contrast: 1,
      hue: 1,
      brightness: 100,
      saturate: 100,
      sepia: 1
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
