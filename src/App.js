import React, { Component } from 'react';
import Axios from 'axios';
import keys from 'config.js';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import PhotoLayout from './components/PhotoLayout';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    }
  }
  
  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'cats') => {
    Axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.key}&text=${query}&per_page=9&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  
  render() {
    return (
      <div>
        <Form />
        <Nav />
        <PhotoLayout />
      </div>
    );
  }
}

export default App;
