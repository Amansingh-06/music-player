import React from 'react';
import SongList from '../components/SongList';

function Favourites() {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    return (
        <div className="p-3">
            <h2>Favourites</h2>
            <SongList
                songs={favourites}
                onPlay={() => { }}
                onFavourite={() => { }}
                favourites={favourites}
            />
        </div>
    );
}

export default Favourites;
