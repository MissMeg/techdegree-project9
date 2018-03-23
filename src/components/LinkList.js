///////////////////IMPORTS///////////////
//importing in the necessary items
import React from 'react';
import NoResults from './NoResults';

const LinkList = props => {
    
    //determine if there are photos to show or not
    //show the photos if so, otherwise, show a message
    const result = props.result;
    let urls;
    if (result.length > 0) {
        urls = result.map((link, index) => 
            <div key={index}>
                <li>
                    <img src={link}  alt="" />
                </li>
            </div>
        );
    } else {
        urls = <NoResults />;
    }
    
    return (
        <ul>
            {urls}
        </ul>
    );
};

export default LinkList;