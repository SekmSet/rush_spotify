import React from 'react'

const Track = ({ tracks }) => {
    return (
        <div>
            <center><h1>Track List</h1></center>
            {tracks.map((track) => (
                <div key={track.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{track.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{track.duration}</h6>
                        <p className="card-text">
                            <a href={track.mp3} target='_blank' rel="noopener noreferrer">LINK</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Track