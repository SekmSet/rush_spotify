import React from 'react'
import {
    Link
} from "react-router-dom";

const GenreDetail = ({ genre }) => {
    return (
        <div>
            <h1 className="text-center">Genre List</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{genre.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{genre.description}</h6>
                        <p className="card-text">{genre.bio}</p>
                        <p className="card-text">
                            <img src={genre.photo} alt={genre.name} />
                        </p>
                        {genre.albums != null && genre.albums.map((album) => (
                            <div key={album.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to={`/albums/${album.id}`}>{album.name}</Link>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
};

export default GenreDetail