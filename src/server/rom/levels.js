'use strict';

const { SPELLS, STATS } = require('./constants');

const readLevels = (data) => {
    const levels = [];

    for (let i = 0; i < 30; i++) {
        const spellFlag = data.readUInt16LE(STATS + (6 * i) + 4);
        const spells = [];

        for (let j = 0; j < SPELLS.length; j++) {
            if (spellFlag & (1 << (j + 8) % 16)) {
                spells.push(SPELLS[j]);
            }
        }

        levels.push({
            level: i + 1,
            str: data.readUInt8(STATS + (6 * i)),
            agi: data.readUInt8(STATS + (6 * i) + 1),
            hp: data.readUInt8(STATS + (6 * i) + 2),
            mp: data.readUInt8(STATS + (6 * i) + 3),
            spells
        });
    }

    return levels;
};

module.exports = exports = {
    readLevels
};
