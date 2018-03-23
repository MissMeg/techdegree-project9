///////////////////IMPORTS///////////////
//importing in the necessary items
import React from 'react';
import Nav from "./Nav";
import PhotoLayout from './PhotoLayout';

//creating the page with flower photos
const Flowers = props => (
    <div>
        <Nav />
        <PhotoLayout query={'flowers'} />
    </div>
);

export default Flowers;