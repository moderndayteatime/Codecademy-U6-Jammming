import React from "react";
import "./Track.css";

const Track = () => {
    const fauxTrack = [
        {
            name: "Shake That Booty",
            artist: "Captin Jack",
            album: "Pirate Lore"
        },
        {
            name: "Show me ye chest",
            artist: "Captin Jack",
            album: "Pirate Lore 2"
        },
    ];

    return (
        <>
            <div className="track">
                <h3>{fauxTrack[1].name}</h3>
                <p>
                {fauxTrack[1].artist} | {fauxTrack[1].album}
                </p>
            </div>
            <button id = "trackButton">+</button>
        </>

    )
}

export default Track;