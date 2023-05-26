import React from 'react';
import PropTypes from 'prop-types';

const RomViewer = (props) => {
    return (
        <div>
            Version: {props.rom.romDetails.version}<br />
            Flags: {props.rom.romDetails.flags}<br />
            Seed: {props.rom.romDetails.seed}
        </div>
    );
};

RomViewer.propTypes = {
    rom: PropTypes.object
};

export default RomViewer;
