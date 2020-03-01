import React from 'react'

import {
    Link
} from "react-router-dom"
const Album = ({ albums }) => {
    return (
        <div>
            <h1 className="text-center">Albums List</h1>
            {albums.map((Album) => (
                <div key={Album.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/albums/${Album.id}`}>{Album.name}</Link>
                        </h5>
                    </div>
                </div>
            ))}


        </div>
    )
};

export default Album