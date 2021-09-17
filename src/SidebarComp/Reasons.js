import React from 'react';

const Home = (props) => {
//    console.log(props)
    return (
        <div>
        {props.reasons.map(item => 
            <div>
                <h1 className="reasonsHeadline">{item.reason}</h1>
                <p>{item.explanation}</p>
             </div> ) }
        
        </div>
    );
};

export default Home;