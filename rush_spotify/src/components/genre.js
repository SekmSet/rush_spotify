import React from 'react'
import {
    Link
} from "react-router-dom";

const Genre = ({ genres }) => {
    return (
        <div>
        <center><h1>Genres list</h1></center>
        {genres.map((genre) => (
            <div key={genre.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                    </h5>
                </div>
            </div>
        ))}
      </div>
    )
};

export default Genre;