import React from 'react';

const WhatToKnow = (props) => {
    return (

        <div className="YouNeedToKnow">
            {props.whatToKnow.map(item =>
                <div className="YouNeedToKnowText">
                    <h1>{item.headline}</h1>
                    <p>{item.explanation}</p>
                </div>)}

        </div>
    );
};

export default WhatToKnow;