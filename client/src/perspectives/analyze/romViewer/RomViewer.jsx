import React from 'react';
import PropTypes from 'prop-types';

import CollapsiblePanel from '../../../components/CollapsiblePanel';

import styles from './RomViewer.module.css';

const RomViewer = (props) => {
    return (
        <div className={styles.romViewer}>
            <CollapsiblePanel title="ROM Details" open>
                <div className={styles.romDetails}>
                    <span>Version:</span>
                    <span>{props.rom.romDetails.version}</span>
                    <span>Flags:</span>
                    <span>{props.rom.romDetails.flags}</span>
                    <span>Seed:</span>
                    <span>{props.rom.romDetails.seed}</span>
                </div>
            </CollapsiblePanel>
        </div>
    );
};

RomViewer.propTypes = {
    rom: PropTypes.object
};

export default RomViewer;
