'use strict';

const { readChests, readSearchItems } = require('./chests');
const { readEnemies } = require('./enemies');
const { readLevels } = require('./levels');

const parseRom = async (stream) => {
    const arr = await stream.toArray();
    const romBuffer = Buffer.concat(arr);

    return {
        chests: readChests(romBuffer),
        enemies: readEnemies(romBuffer),
        levels: readLevels(romBuffer),
        searchItems: readSearchItems(romBuffer)
    };
};

module.exports = exports = {
    parseRom
};
