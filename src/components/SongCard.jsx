import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';

function SongCard({ song, onPlay, onFavourite, isFavourite }) {
    return (
        <Card className="song-card h-100">
            <Card.Img variant="top" src={song.thumbnail} alt={song.title} />
            <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artistName}</Card.Text>
                <Button variant="primary" onClick={() => onPlay(song)}>
                    Play
                </Button>
                <Button variant="outline-secondary" onClick={() => onFavourite(song)}>
                    <ThreeDots /> {isFavourite ? 'Unfavourite' : 'Favourite'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default SongCard;