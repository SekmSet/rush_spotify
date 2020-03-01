import React from 'react'
import {
    Link
} from "react-router-dom";

const Search = ({ search }) => {
    return (
            <div>
                <h1>Page de recherche</h1>
                {search.map((track) => (
                    <div key={track.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{track.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{track.duration}</h6>
                            <p className="card-text">
                                <audio controls="controls" preload="none">
                                    <source src={track.mp3} type="audio/mpeg" />
                                </audio>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
    )
};

export default Search;