import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="Sidebar">

        <ul>
            <li><Link to="/home">10 Reasons Why You Should Adopt</Link> </li>
            <li><Link to="/fees">Everything You Need To Know</Link> </li>
            <li><Link to="/dogs">Adoptable Dogs</Link> </li>
            <li><Link to="/application">Apply now!</Link> </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;