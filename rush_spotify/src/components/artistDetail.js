import React from 'react'
import {Link} from "react-router-dom";

const ArtistDetail = ({ artist }) => {
    return (
        <div>
            <h1>Artists List</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{artist.description}</h6>
                        <p className="card-text">{artist.bio}</p>
                        <p className="card-text">
                            <img src={artist.photo} alt={artist.name} />
                        </p>
                    </div>
                </div>
        </div>
    )
};

export default ArtistDetail