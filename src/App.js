//////////////////////////IMPORTS/////////////////////
//Importing in the necessary items
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';
import Flowers from './components/Flowers';
import Dogs from './components/Dogs';
import Tokyo from './components/Tokyo';

class App extends Component {
  
  //Creating the routes
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/flowers" component={Flowers} />
            <Route exact path="/dogs" component={Dogs} />
            <Route path="/tokyo" component={Tokyo} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
