import React from 'react';
import SongList from '../components/SongList';

function RecentlyPlayed() {
    const recentlyPlayed = JSON.parse(sessionStorage.getItem('recentlyPlayed')) || [];

    return (
        <div className="p-3">
            <h2>Recently Played</h2>
            <SongList
                songs={recentlyPlayed}
                onPlay={() => { }}
                onFavourite={() => { }}
                favourites={[]}
            />
        </div>
    );
}

export default RecentlyPlayed;