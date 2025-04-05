// File: pages/Home.jsx
import React from 'react';
import musicData from '../data/musicData';
import SongCard from '../components/SongCard';

const Home = () => {
    return (
        <div>
            <h2>Discover New Music</h2>
            <div className="songs-grid">
                {musicData.map((song, index) => (
                    <SongCard key={index} song={song} />
                ))}
            </div>
        </div>
    );
};

export default Home;
