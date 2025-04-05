import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import Player from './components/Player';
import musicData from './data/musicData';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem("favourites")) || []);
  const [recentlyPlayed, setRecentlyPlayed] = useState(() => JSON.parse(sessionStorage.getItem("recent")) || []);
  const [currentTab, setCurrentTab] = useState("For You");

  const markFavourite = (track) => {
    const updated = [...favourites, track];
    localStorage.setItem("favourites", JSON.stringify(updated));
    setFavourites(updated);
  };

  const filteredTracks = musicData.filter(track =>
    track.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTracksForTab = () => {
    switch (currentTab) {
      case "Favourites": return favourites;
      case "Recently Played": return recentlyPlayed;
      default: return filteredTracks;
    }
  };

  const getBackground = () => {
    if (!currentTrack) return "#000";
    if (currentTrack.title.includes("Ghost")) return "linear-gradient(to right, #2c3e50, #4ca1af)";
    return "#111";
  };

  return (
    <Container fluid className="main-container text-white">
      <Row>
        <Col md={2}><Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} /></Col>
        <Col md={4} className="bg-black p-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SongList tracks={getTracksForTab()} onSelect={setCurrentTrack} markFavourite={markFavourite} />
        </Col>
        <Col md={6}><Player currentTrack={currentTrack} background={getBackground()} setRecentlyPlayed={setRecentlyPlayed} /></Col>
      </Row>
    </Container>
  );
};

export default App;
