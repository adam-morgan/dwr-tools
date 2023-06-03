import React from 'react';
import PropTypes from 'prop-types';

import styles from './RomViewer.module.css';

const Levels = (props) => {
    const levels = props.rom.levels;

    let prevSpells;

    const rows = levels.map((l) => {
        const newSpells = l.spells?.filter((s) => !prevSpells?.includes(s));
        prevSpells = l.spells;

        return (
            <tr key={`${l.level}`}>
                <td>{l.level}</td>
                <td>{l.str}</td>
                <td>{l.agi}</td>
                <td>{l.hp}</td>
                <td>{l.mp}</td>
                <td>{newSpells?.join(', ')}</td>
            </tr>
        );
    });

    return (
        <div className={styles.levels}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Str</th>
                        <th>Agi</th>
                        <th>HP</th>
                        <th>MP</th>
                        <th>Spells</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

Levels.propTypes = {
    rom: PropTypes.object
};

export default Levels;
