///////////////////IMPORTS///////////////
//importing in the necessary items
import React, { Component } from 'react';
import Form from './Form';
import Nav from "./Nav";
import PhotoLayout from './PhotoLayout';



class Search extends Component {
    
    //hold the query info
    constructor() {
        super();
        this.state = {
          query: '',
        }
    }
    
    //set the query as the item being searched for to pass into the photos
    onSearch = searchItem => {
        this.setState({ query: searchItem });
    }
    
    //render the searched photos or request user to search
    render() {
        return (
            <div>
                <Form onSearch={this.onSearch} />
                <Nav />
                {
                    this.state.query !== '' 
                    ?
                    <PhotoLayout query={this.state.query} />
                    :
                    <p>Please enter a search item.</p>
                }
            </div>
        );
    }
}

export default Search;