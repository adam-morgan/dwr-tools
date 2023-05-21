const { loadMonsterSprite } = require('./monsters');

const loadSprite = async (type, id, options) => {
    let sprite;

    const sharpProcessor = (s) => {
        if (options.resize !== null) {
            s = s.resize({
                kernel: 'nearest',
                background: { r: 255, g: 0, b: 0, alpha: 0.5 },
                ...options.resize
            });
        }

        return s;
    };

    if (type === 'monster') {
        sprite = await loadMonsterSprite(id, sharpProcessor);
    } else {
        throw new Error(`Invalid sprite type: ${type}`);
    }

    return sprite;
};

module.exports = exports = {
    loadSprite
};
