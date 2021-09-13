import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="Sidebar">

        <ul>
            <li><Link to="/home">Home</Link> </li>
            <li><Link to="/fees">Costs/ Fees</Link> </li>
            <li><Link to="/dogs">Adoptable Dogs</Link> </li>
            <li><Link to="/application">Apply now!</Link> </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;