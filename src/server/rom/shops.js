'use strict';

const { SHOPS, SHOP_END, SHOP_ITEMS } = require('./constants');

const readShops = (data) => {
    const shopIndexes = {
        'KOL': 0,
        'BRECCONARY': 1,
        'GARINHAM': 2,
        'CANTLIN_1': 3,
        'CANTLIN_2': 4,
        'CANTLIN_3': 5,
        'RIMULDAR': 6
    };

    const shops = {};
    let ptr = SHOPS;

    for (const [shopName, i] of Object.entries(shopIndexes)) {
        const items = [];

        while (true) {
            const val = data.readUInt8(ptr++);

            if (val === SHOP_END) {
                break;
            }

            items.push(SHOP_ITEMS[val]);
        }

        items.sort((i1, i2) => {
            const idx1 = SHOP_ITEMS.indexOf(i1);
            const idx2 = SHOP_ITEMS.indexOf(i2);

            if (idx1 > idx2) {
                return 1;
            } else if (idx2 > idx1) {
                return -1;
            }

            return 0;
        });

        shops[shopName] = items;
    }

    return shops;
};

module.exports = exports = {
    readShops
};
