import React from 'react'
import {
    Link
} from "react-router-dom";

const Artist = ({ artists }) => {
    return (
        <div>
            <center><h1>Artists List</h1></center>
            {artists.map((artist) => (
                <div key={artist.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Artist