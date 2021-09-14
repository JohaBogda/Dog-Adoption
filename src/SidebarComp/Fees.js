import React from 'react';

const Fees = (props) => {
    return (
        <div>
            <h1>{props.whatToKnow.headline}</h1>
            <p>{props.whatToKnow.explanation}</p>
        </div>
    );
};

export default Fees;