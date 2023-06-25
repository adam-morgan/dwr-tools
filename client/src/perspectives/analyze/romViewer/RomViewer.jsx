import React from 'react';
import PropTypes from 'prop-types';

import CollapsiblePanel from '../../../components/CollapsiblePanel';

import RomDetails from './RomDetails';
import Map from './Map';
import EncounterSpikes from './EncounterSpikes';
import ImportantItems from './ImportantItems';
import Levels from './Levels';
import Locations from './Locations';

import styles from './RomViewer.module.css';

const RomViewer = (props) => {
    return (
        <div className={styles.romViewer}>
            <CollapsiblePanel title="ROM Details" open>
                <RomDetails rom={props.rom} />
            </CollapsiblePanel>
            <CollapsiblePanel title="Map" className={styles.map} open>
                <Map rom={props.rom} mapName="overworld" />
            </CollapsiblePanel>
            <div className={styles.romInfoSections}>
                <CollapsiblePanel title="Encounter Spikes">
                    <EncounterSpikes rom={props.rom} />
                </CollapsiblePanel>
                <CollapsiblePanel title="Important Items">
                    <ImportantItems rom={props.rom} />
                </CollapsiblePanel>
                <CollapsiblePanel title="Levels">
                    <Levels rom={props.rom} />
                </CollapsiblePanel>
                <CollapsiblePanel title="Locations">
                    <Locations rom={props.rom} />
                </CollapsiblePanel>
            </div>
        </div>
    );
};

RomViewer.propTypes = {
    rom: PropTypes.object
};

export default RomViewer;
