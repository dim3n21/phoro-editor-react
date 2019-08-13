import React, { Component } from 'react';

import './App.css';

import AuthContext from './context/auth-context';
import Header from './containers/Header/Header';
import Content from './containers/Content/Content';
import Footer from './containers/Footer/Footer';
import axios from 'axios';


class App extends Component {

  state = {
    showSearchImages: false,
    loadSpin: false,
    image: 'https://images.unsplash.com/flagged/photo-1565241758499-3bf9d63d9094?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    searchResults: [],
    name: '',
    settings : {
      contrast: 1,
      hue: 1,
      brightness: 100,
      saturate: 100,
      sepia: 1,
      blur: 0
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

  submitLink = (value, e) => {
    // e.preventDefault();
    console.log(value)
    const imgLink = value;
    let newState = {...this.state};
    newState.image = imgLink;
    newState.showSearchImages = false;

    this.setState({
      image:  newState.image,
      showSearchImages: newState.showSearchImages
    })
  }

  onReset = () => {
    let newState = {...this.state}
    newState.settings = {
      contrast: 1,
      hue: 1,
      brightness: 100,
      saturate: 100,
      sepia: 1,
      blur: 0
    }

    this.setState({
      settings: newState.settings
    })
  }

  implementFilter = (settings) => {
    let newState = {...this.state}
    newState.settings = settings;

    this.setState({
      ...newState
    })
  }

  onSearch = (searchValue, e) => {
    console.log(e);
    let newState = {...this.state}
    newState.showSearchImages = true;
    newState.loadSpin = true;

    this.setState({
      loadSpin: newState.loadSpin
    })

    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=${searchValue}&client_id=080c38213e39dad3d8ad53aca3dffe7f13ad187a26e43ff5a00c74cd3b187519`)
      .then(response => {
          console.log(response.data.results)
          let newState = {...this.state}
          newState.searchResults = response.data.results

          this.setState({
            searchResults: newState.searchResults
          })
        })
     
    this.setState({
      showSearchImages: newState.showSearchImages
    })
  }

  inputClear = (val) => {
    val.clear()
  }

  updateImage = (image) => {
    let newState = {...this.state};
    newState.image = image;
    newState.showSearchImages = false;

    this.setState({
      image: newState.image,
      showSearchImages: newState.showSearchImages
    })
  }

  render() {
    return (
    <div className="App">
        <Header title="photo editor" />
        <AuthContext.Provider
          value={{image: this.state.image,
                  implementFilter: this.implementFilter}} >

          <Content settings={this.state.settings} image={this.state.image} onChange={this.onChange} onAfterChange={this.onAfterChange} onMouse={this.onMouse} submitLink={this.submitLink} img={this.state.image} onReset={this.onReset} onSearch={this.onSearch} showSearchImages={this.state.showSearchImages} searchResults={this.state.searchResults} updateImage={this.updateImage} loadSpin={this.loadSpin}/>

        </AuthContext.Provider>
        <Footer />
    </div>
    )
    
  }
}

export default App;
