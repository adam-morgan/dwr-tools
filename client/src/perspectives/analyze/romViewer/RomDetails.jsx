import React from 'react';
import PropTypes from 'prop-types';

import styles from './RomViewer.module.css';

const RomDetails = (props) => {
    return (
        <div className={styles.romDetails}>
            <span>Version:</span>
            <span>{props.rom.romDetails.version}</span>
            <span>Flags:</span>
            <span>{props.rom.romDetails.flags}</span>
            <span>Seed:</span>
            <span>{props.rom.romDetails.seed}</span>
        </div>
    );
};

RomDetails.propTypes = {
    rom: PropTypes.object
};

export default RomDetails;
