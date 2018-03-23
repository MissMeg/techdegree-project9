///////////////////IMPORTS///////////////
//importing in the necessary items
import React from 'react';
import Nav from './Nav';
import PhotoLayout from './PhotoLayout';

//creating the page with default photos
const Home = props => {
  
  return(
    <div>
        <Nav />
        <PhotoLayout />
    </div>
  );
}

export default Home;