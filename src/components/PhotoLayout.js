///////////////////IMPORTS///////////////
//importing in the necessary items
import React, { Component } from 'react';
import Axios from 'axios';
import api_key from '../config';
import LinkList from './LinkList';

class PhotoLayout extends Component {
    
    //hold returned photos, loading state, and photo links
    constructor() {
        super();
        this.state = {
          photos: [],
          links: [],
          loading: true,
        }
    }
  
  //perform the search when the component is on the page
  componentDidMount() {
    this.performSearch(this.props.query);
  }
  
  //perform the search again when it receives a new query
  componentWillReceiveProps(newProps) {
      this.performSearch(newProps.query);
  }
  
  //Create the links from the received info
  createLinks = (args) => {
    let photoLinks = args.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` );
    this.setState({
      links: photoLinks,
      loading: false,
    });
  }
    
    //perform search by requesting from the api
    performSearch = (query = 'cats') => {
    Axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${query}&safe_search=1&content_type=1&per_page=12&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      //set the state with the received data
      this.setState({
        photos: response.data.photos.photo,
      });
      //create the links
      this.createLinks(this.state.photos);
    })
    //send error if there is one
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
    
    
    //render photos if the loading state is false 
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                {
                    this.state.loading 
                    ?
                    <p>Loading...</p>
                    :
                    <LinkList result={this.state.links} />
                }
            </div>   
        );
    }
}

export default PhotoLayout;