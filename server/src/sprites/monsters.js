const path = require('path');

const sharp = require('sharp');

const MONSTER_COORDS = {
    werewolf: [98, 301, 44, 42],
    armored_knight: [108, 399, 50, 52],
    red_dragon: [117, 504, 60, 41],
    dl2: [64, 547, 74, 92]
};

const loadMonsterSprite = async (monster, sharpProcessor) => {
    const coords = MONSTER_COORDS[monster];

    if (!coords) {
        throw new Error(`Invalid monster: ${monster}`);
    }

    let s = sharp(path.join(__dirname, 'images', 'monsters.png'))
        .extract({ left: coords[0], top: coords[1], width: coords[2], height: coords[3] });

    if (sharpProcessor) {
        s = sharpProcessor(s);
    }

    const buffer = await s.toBuffer();

    return {
        mimeType: 'image/png',
        buffer
    };
};

module.exports = exports = {
    loadMonsterSprite
};
