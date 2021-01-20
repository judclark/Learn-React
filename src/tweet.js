import React from 'react';
import './App.css';

function Tweet({names, messages}) {
    return(
        <div className="tweet">
            <h3>{names}</h3>
            <p>{messages}</p>
            <h3>Number of Likes</h3>     
        </div>
    );
}

export default Tweet;