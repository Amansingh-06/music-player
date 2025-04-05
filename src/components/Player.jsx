import React, { useRef, useEffect } from 'react';

const Player = ({ currentTrack, background, setRecentlyPlayed }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (currentTrack && audioRef.current) {
            audioRef.current.play();
            const history = JSON.parse(sessionStorage.getItem("recent")) || [];
            const updated = [currentTrack, ...history.filter(t => t.title !== currentTrack.title)].slice(0, 10);
            sessionStorage.setItem("recent", JSON.stringify(updated));
            setRecentlyPlayed(updated);
        }
    }, [currentTrack]);

    return (
        <div className={`player-container text-white p-3`} style={{ background: background }}>
            {currentTrack && (
                <>
                    <h4>{currentTrack.title}</h4>
                    <p>{currentTrack.artistName}</p>
                    <img src={currentTrack.thumbnail} alt={currentTrack.title} width={200} className="mb-3" />
                    <audio ref={audioRef} controls src={currentTrack.musicUrl} />
                </>
            )}
        </div>
    );
};

export default Player;