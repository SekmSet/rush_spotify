import React from 'react'
import {
    Link
} from "react-router-dom";

const Home = ({ randomAlbums }) => {
    return (
        <div>
        <h1 className="text-center">Home</h1>
        {randomAlbums.map((album) => (
            <div key={album.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/albums/${album.id}`}>{album.name}</Link>
                    </h5>
                </div>
            </div>
        ))}
      </div>
    )
};

export default Home;