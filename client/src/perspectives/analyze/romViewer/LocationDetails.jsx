import React from 'react';
import PropTypes from 'prop-types';

export const LOCATIONS = [
    { val: 'BRECCONARY', name: 'Brecconary', type: 'town' },
    { val: 'CANTLIN', name: 'Cantlin', type: 'town' },
    { val: 'GARINHAM', name: 'Garinham', type: 'town' },
    { val: 'HAUKSNESS', name: 'Hauksness', type: 'town' },
    { val: 'KOL', name: 'Kol', type: 'town' },
    { val: 'RIMULDAR', name: 'Rimuldar', type: 'town' },
    { val: 'TANTEGEL', name: 'Tantegel', type: 'castle' },
    { val: 'CHARLOCK', name: 'Charlock', type: 'castle' },
    { val: 'GARINS_GRAVE', name: "Garin's Grave", type: 'cave' },
    { val: 'MOUNTAIN_CAVE', name: 'Mountain Cave', type: 'cave' },
    { val: 'JERK_CAVE', name: 'Rainbow Drop Cave', type: 'cave' },
    { val: 'STAFF_SHRINE', name: 'Shrine Cave', type: 'cave' },
    { val: 'TANTEGEL_BASEMENT', name: 'Stones Cave', type: 'cave' },
    { val: 'SWAMP_NORTH', name: 'Swamp North', type: 'cave' },
    { val: 'SWAMP_SOUTH', name: 'Swamp South', type: 'cave' },
    { val: 'ERDRICKS_CAVE', name: 'Tablet Cave', type: 'cave' }
];

const LocationDetails = (props) => {
    return (
        <span>{props.location}</span>
    );
};

LocationDetails.propTypes = {
    rom: PropTypes.object,
    location: PropTypes.string
};

export default LocationDetails;
