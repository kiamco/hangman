import React from 'react';

const WordDisplay = (props) =>{
    return(
        <div className='word-container'>
            <ul>
                {props.map(el => <li>el</li>)}
            </ul>
        </div>
    )
}