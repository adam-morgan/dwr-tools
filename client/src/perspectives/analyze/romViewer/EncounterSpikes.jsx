import React from 'react';
import PropTypes from 'prop-types';

import Monster from '../../../components/Monster';

import styles from './RomViewer.module.css';

const EncounterSpikes = (props) => {
    const spikes = props.rom.spikes;

    const hauksnessMonster = props.rom.enemies.find((e) => e.name === spikes.HAUKSNESS);
    const swampMonster = props.rom.enemies.find((e) => e.name === spikes.SWAMP_CAVE);
    const charlockMonster = props.rom.enemies.find((e) => e.name === spikes.CHARLOCK);

    return (
        <div className={styles.encounterSpikes}>
            <span className={styles.generalLabel}>Hauksness:</span>
            <Monster monsterDetails={hauksnessMonster} />
            <span className={styles.generalLabel}>Swamp Cave:</span>
            <Monster monsterDetails={swampMonster} />
            <span className={styles.generalLabel}>Charlock:</span>
            <Monster monsterDetails={charlockMonster} />
        </div>
    );
};

EncounterSpikes.propTypes = {
    rom: PropTypes.object
};

export default EncounterSpikes;
