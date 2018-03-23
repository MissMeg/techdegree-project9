///////////////////IMPORTS///////////////
//importing in the necessary items
import React from 'react';
import Nav from "./Nav";
import PhotoLayout from './PhotoLayout';

//creating the page with dog photos
const Dogs = props => (
    <div>
        <Nav />
        <PhotoLayout query={'dogs'} />
    </div>
);

export default Dogs;