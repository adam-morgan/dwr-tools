const {
    CHESTS,
    CHEST_CONTENTS,
    MAPS,
    SEARCH_ITEMS,
    WARPS,
    WARPS_FROM
} = require('./constants');

const readChests = (data) => {
    const chests = [];

    for (let i = 0; i < 31; i++) {
        const mapIdx = data.readUInt8(CHESTS + (4 * i));
        const map = MAPS[mapIdx];

        const contentsIdx = data.readUInt8(CHESTS + (4 * i) + 3);
        const contents = CHEST_CONTENTS[contentsIdx];

        chests.push({ location: map, contents });
    }

    return chests;
};

const readSearchItems = (data) => {
    const searchItems = {};

    for (let i = 0; i < 3; i++) {
        const map = MAPS[data.readUInt8(SEARCH_ITEMS + i)];
        const x = data.readUInt8(SEARCH_ITEMS + 3 + i);
        const y = data.readUInt8(SEARCH_ITEMS + 6 + i);
        const item = CHEST_CONTENTS[data.readUInt8(SEARCH_ITEMS + 9 + i)];

        let dx;
        let dy;

        if (map === 'OVERWORLD') {
            const tantegelIdx = WARPS.findIndex((w) => w === 'TANTEGEL');
            const tx = data.readUInt8(WARPS_FROM + (3 * tantegelIdx) + 1);
            const ty = data.readUInt8(WARPS_FROM + (3 * tantegelIdx) + 2);

            dx = x - tx;
            dy = y - ty;
        }

        searchItems[map] = {
            dx, dy, item
        };
    }

    return searchItems;
};

module.exports = exports = {
    readChests,
    readSearchItems
};
