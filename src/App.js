import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import PhotoLayout from './components/PhotoLayout';

class App extends Component {
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
