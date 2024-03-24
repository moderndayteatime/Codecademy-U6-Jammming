import React from "react";
import Tracklist from '../Tracklist/Tracklist.js';
import "./Playlist.css";
import "../SearchBarResults/SearchBarResults.css";

const Playlist = () => {

    return (
        <div className="container">
            <h2>Playlist</h2>
            <div className = "Content-display">
                <Tracklist/>
            </div>
            <button>Save</button>
        </div>
    )
}

export default Playlist;