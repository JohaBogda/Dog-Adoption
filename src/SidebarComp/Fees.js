import React from 'react';

const Fees = (props) => {
    return (

        <div>
            {props.whatToKnow.map(item =>
                <div>
                    <h1>{item.headline}</h1>
                    <p>{item.explanation}</p>
                </div>)}

        </div>
    );
};

export default Fees;