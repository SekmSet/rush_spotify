import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Spotify</a>
            <div className="collapse navbar-collapse show" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link><span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/albums">Album</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/genres">Genre</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/artists">Artists</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/tracks">Tracks</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;