import React from 'react'
import {
    Link
} from "react-router-dom";

const Home = ({ randomAlbums }) => {
    return (
        <div>
        <center><h1>Home</h1></center>
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