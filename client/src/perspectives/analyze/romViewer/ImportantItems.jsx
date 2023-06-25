import React from 'react';
import PropTypes from 'prop-types';

import styles from './RomViewer.module.css';

const ITEM_ORDER = [
    { val: 'ERDRICKS_SWORD', label: "Erdrick's Sword" },
    { val: 'ERDRICKS_ARMOR', label: "Erdrick's Armor" },
    { val: 'STONES_OF_SUNLIGHT', label: 'Stones of Sunlight' },
    { val: 'ERDRICKS_TOKEN', label: "Erdrick's Token" },
    { val: 'SILVER_HARP', label: 'Silver Harp' },
    { val: 'DEATH_NECKLACE', label: 'Death Necklace' },
    { val: 'FAIRY_FLUTE', label: 'Fairy Flute' },
    { val: 'FIGHTERS_RING', label: "Fighter's Ring" }
];

const LOCATIONS = {
    TANTEGEL: 'Tantegel Treasury',
    TANTEGEL_THRONE_ROOM: 'Tantegel Throne Room',
    RIMULDAR: 'Rimuldar Chest',
    GARINHAM: 'Garinham',
    CHARLOCK_THRONE_ROOM: 'Charlock Treasury',
    TANTEGEL_BASEMENT: 'Stones Cave',
    GARINS_GRAVE_1: "Garin's Grave (Top)",
    GARINS_GRAVE_3: "Garin's Grave (Bottom)",
    CHARLOCK_CAVE_2: 'Charlock (Upstairs)',
    MOUNTAIN_CAVE: 'Mountain Cave (Top)',
    MOUNTAIN_CAVE_2: 'Mountain Cave (Bottom)',
    ERDRICKS_CAVE_2: 'Tablet Cave'
};

const ImportantItems = (props) => {
    const items = {};

    const searchItems = props.rom.searchItems;

    if (searchItems.HAUKSNESS?.item) {
        items[searchItems.HAUKSNESS.item] = 'Hauksness';
    }

    if (searchItems.KOL?.item) {
        items[searchItems.KOL.item] = 'Kol';
    }

    if (searchItems.OVERWORLD?.item) {
        let dx = searchItems.OVERWORLD.dx;
        let dy = searchItems.OVERWORLD.dy;

        dx = `${Math.abs(dx)}${dx < 0 ? 'W' : 'E'}`;
        dy = `${Math.abs(dy)}${dy < 0 ? 'N' : 'S'}`;

        items[searchItems.OVERWORLD.item] = `Overworld (${dx}, ${dy})`;
    }

    for (const chest of props.rom.chests) {
        if (ITEM_ORDER.some((i) => i.val === chest.contents)) {
            items[chest.contents] = LOCATIONS[chest.location] ?? chest.location;
        }
    }

    return (
        <div className={styles.importantItems}>
            {ITEM_ORDER.map((item) => {
                const value = items[item.val];

                if (value != null) {
                    return (
                        <React.Fragment key={item.val}>
                            <span className={styles.generalLabel}>{item.label}:</span>
                            <span className={styles.generalValue}>{value}</span>
                        </React.Fragment>
                    );
                }

                return null;
            }).filter((v) => v != null)}
        </div>
    );
};

ImportantItems.propTypes = {
    rom: PropTypes.object
};

export default ImportantItems;
