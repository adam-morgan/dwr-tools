import React from 'react';
import PropTypes from 'prop-types';

import PopupItem from '../../../components/PopupItem';

import LocationDetails, { LOCATIONS } from './LocationDetails';

import styles from './RomViewer.module.css';

const Locations = (props) => {
    const castles = [];
    const towns = [];
    const caves = [];

    for (const l of LOCATIONS) {
        const locationDetails = props.rom.locations[l.val];

        let v;
        if (locationDetails.map === 'OVERWORLD') {
            if (l.type === 'cave') {
                v = `Overworld (${locationDetails.x}, ${locationDetails.y})`;
            } else {
                v = `(${locationDetails.x}, ${locationDetails.y})`;
            }
        } else if (locationDetails.map === 'TANTEGEL') {
            v = 'Tantegel Basement';
        } else if (locationDetails.map === 'GARINHAM') {
            v = 'Garinham';
        }

        const ele = (
            <React.Fragment key={l.val}>
                <PopupItem
                    renderPopup={() => (<LocationDetails rom={props.rom} location={l.val} />)}
                >
                    <span className={`${styles.generalLabel} ${styles.locationLink}`}>
                        {l.name}:
                    </span>
                </PopupItem>
                <span>{v}</span>
            </React.Fragment>
        );

        if (l.type === 'castle') {
            castles.push(ele);
        } else if (l.type === 'town') {
            towns.push(ele);
        } else if (l.type === 'cave') {
            caves.push(ele);
        }
    }

    return (
        <div className={styles.locations}>
            <div className={styles.locationSection}>
                <span className={styles.locationSectionHeader}>Castles:</span>
                <div className={styles.locationSectionBody}>
                    {castles}
                </div>
            </div>
            <div className={styles.locationSection}>
                <span className={styles.locationSectionHeader}>Towns:</span>
                <div className={styles.locationSectionBody}>
                    {towns}
                </div>
            </div>
            <div className={styles.locationSection}>
                <span className={styles.locationSectionHeader}>Caves:</span>
                <div className={styles.locationSectionBody}>
                    {caves}
                </div>
            </div>

        </div>
    );
};

Locations.propTypes = {
    rom: PropTypes.object
};

export default Locations;
