import React from 'react';
import { ListGroup, Dropdown } from 'react-bootstrap';

const SongList = ({ tracks, onSelect, markFavourite }) => {
    return (
        <ListGroup variant="flush">
            {tracks.map((track, idx) => (
                <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center bg-transparent text-white border-0">
                    <div className="d-flex align-items-center gap-2" onClick={() => onSelect(track)} style={{ cursor: 'pointer' }}>
                        <img src={track.thumbnail} alt={track.title} width={40} height={40} style={{ borderRadius: 5 }} />
                        <div>
                            <div>{track.title}</div>
                            <small>{track.artistName}</small>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <small>{track.duration}</small>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" size="sm"></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => markFavourite(track)}>Add to Favourites</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default SongList;