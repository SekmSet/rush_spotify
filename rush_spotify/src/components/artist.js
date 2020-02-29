import React from 'react'

const Artist = ({ artists }) => {
    return (
        <div>
            <h1>Artists List</h1>
            {artists.map((artist) => (
                <div key={artist.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{artist.description}</h6>
                        <p className="card-text">{artist.bio}</p>
                        <p className="card-text"><a href={artist.photo} target='_blank'>LINK</a></p>

                    </div>
                </div>
            ))}
        </div>
    )
};

export default Artist