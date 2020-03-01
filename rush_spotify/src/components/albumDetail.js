import React from 'react'
import {Link} from 'react-router-dom';

const AlbumDetail = ({ album }) => {
    return (
        <div>
            <h1 className="text-center">Albums List</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{album.name}</h5>
                    <p className="card-text">{album.description}</p>
                    <p className="card-text">{album.release_year_date}</p>
                    <p className="card-text">{album.popularity}</p>
                    <p className="card-text">
                        <img src={album.cover} alt={album.name} />
                    </p>
                </div>
                {album.tracks != null && album.tracks.map((Track) => (
                    <div key={Track.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/tracks/${Track.id}`}>{Track.name}</Link>
                            </h5>
                            <audio controls="controls" preload="none">
                                <source src={Track.mp3} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AlbumDetail