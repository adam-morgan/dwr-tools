const { MAPS, WARPS, WARPS_FROM } = require('./constants');

const readLocations = (data) => {
    const locations = {};

    for (let i = 0; i < WARPS.length; i++) {
        const warp = WARPS[i];

        if (warp.startsWith('CHARLOCK_') || warp === 'BLANK') {
            continue;
        }

        const map = data.readUInt8(WARPS_FROM + (3 * i));
        const x = data.readUInt8(WARPS_FROM + (3 * i) + 1);
        const y = data.readUInt8(WARPS_FROM + (3 * i) + 2);

        locations[warp] = {
            map: MAPS[map],
            x,
            y
        };
    }

    return locations;
};

module.exports = exports = {
    readLocations
};
