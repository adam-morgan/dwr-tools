const { MAP_ENCODED, MAP_POINTERS } = require('./constants');

const readMaps = (data) => {
    return {
        overworld: _readOverworld(data)
    };
};

const _readOverworld = (data) => {
    const tiles = [];

    for (let y = 0; y < 120; y++) {
        const pointer = data.readUInt16LE(MAP_POINTERS + (2 * y)) - 0x9d5d;
        let e = data.readUInt8(MAP_ENCODED + pointer);

        let tile = e >> 4;
        let count = e & 0xf;

        let offset = 0;

        for (let x = 0; x < 120; x++) {
            if (tiles[x] == null) {
                tiles[x] = [];
            }

            tiles[x][y] = tile;

            if (!count) {
                e = data.readUInt8(MAP_ENCODED + pointer + (++offset));
                tile = e >> 4;
                count = e & 0xf;
            } else {
                count--;
            }
        }
    }

    return { tiles };
};

module.exports = exports = {
    readMaps
};
