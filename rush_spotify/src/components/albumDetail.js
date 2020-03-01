import React from 'react'

const AlbumDetail = ({ album }) => {
    return (
        <div>
            <h1>Albums List</h1>
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
            </div>
        </div>
    )
};

export default AlbumDetail