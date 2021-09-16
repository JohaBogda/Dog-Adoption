import React from 'react';

const Footer = (props) => {
    return (
        <div className="Footer"> 
            <h3 style={{fontWeight: "bold"}}>{props.contact.organization}</h3>
            <h3>{props.contact.street}</h3>
            <h3>{props.contact.city}</h3>
            <h3>{props.contact.phone}</h3>
            <h3>{props.contact.email}</h3>

        </div>
    );
};

export default Footer;