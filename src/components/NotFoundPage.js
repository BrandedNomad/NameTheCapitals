import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NotFoundPage = ()=>{
    return (
        <div className="nfp-container">
            <p className="nfp-code">404</p>
            <p className="nfp-text">Oops! Something went wrong...</p><Link className="nfp-link" to="/">Go Home</Link>
        </div>
    )
}

export default NotFoundPage;