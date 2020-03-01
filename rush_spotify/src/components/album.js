import React from 'react'

const Album = ({ Albums }) => {
    return (
        <div>
            <h1 className = "text-center">Album List</h1>
            {Albums.map((Album) => (
                <div key={Album.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{Album.name}</h5>
                        <p className="card-text">{Album.description}</p>
                        <p className="card-text">{Album.release_year_date}</p>
                        <p className="card-text">{Album.popularity}</p>
                        <img src={Album.cover} alt="Cover" />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Album