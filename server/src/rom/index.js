const { readChests, readSearchItems } = require('./chests');
const { readEnemies, readSpikes } = require('./enemies');
const { readLevels } = require('./levels');
const { readShops } = require('./shops');

const parseRomFromStream = async (stream) => {
    const arr = await stream.toArray();
    const romBuffer = Buffer.concat(arr);
    return parseRomFromBuffer(romBuffer);
};

const parseRomFromBuffer = (romBuffer) => {
    return {
        chests: readChests(romBuffer),
        enemies: readEnemies(romBuffer),
        spikes: readSpikes(romBuffer),
        levels: readLevels(romBuffer),
        searchItems: readSearchItems(romBuffer),
        shops: readShops(romBuffer)
    };
};

module.exports = exports = {
    parseRomFromBuffer,
    parseRomFromStream
};
