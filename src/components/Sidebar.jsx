import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ currentTab, setCurrentTab }) => {
    return (
        <Nav className="flex-column p-3 bg-dark text-white h-100">
            <h4 className="mb-4">Spotify</h4>
            {['For You', 'Top Tracks', 'Favourites', 'Recently Played'].map((tab) => (
                <Nav.Link
                    key={tab}
                    className={`text-white ${currentTab === tab ? 'fw-bold' : ''}`}
                    onClick={() => setCurrentTab(tab)}
                >
                    {tab}
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default Sidebar;