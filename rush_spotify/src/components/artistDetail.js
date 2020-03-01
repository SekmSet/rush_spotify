import React from 'react'
import {Link} from "react-router-dom";

const ArtistDetail = ({ artist }) => {
    return (
        <div>
            <h1 className="text-center">Artists List</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{artist.description}</h6>
                        <p className="card-text">{artist.bio}</p>
                        <p className="card-text">
                            <img src={artist.photo} alt={artist.name} />
                        </p>

                        {artist.albums != null && artist.albums.map((album) => (
                            <div key={artist.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={album.cover_small}  alt="Album cover"/>

                                        <Link to={`/albums/${album.id}`}>{album.name}</Link>

                                        <p>Popumarité : {album.popularity}</p>
                                        <p>Nombre de tracks : {album.tracks_number}</p>
                                        <p>Année de réalisation : {album.release_year_date}</p>
                                    </h5>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
        </div>
    )
};

export default ArtistDetail