///////////////////IMPORTS///////////////
//importing in the necessary items
import React from 'react';
import Nav from "./Nav";
import PhotoLayout from './PhotoLayout';


////creating the page with Tokyo photos
const Tokyo = props => (
        <div>
            <Nav />
            <PhotoLayout query={'tokyo'} />
        </div>  
);

export default Tokyo;