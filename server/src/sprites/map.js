const path = require('path');

const sharp = require('sharp');

const BASE_COORDS = {
    0: [2, 1],
    1: [8, 1],
    2: [4, 1],
    3: [5, 1],
    5: [1, 0],
    6: [3, 1],
    7: [9, 1],
    8: [1, 1],
    9: [6, 1],
    10: [0, 1],
    11: [10, 1]
};

const generateMapImage = async (tiles) => {
    const baseTiles = await sharp(path.join(__dirname, 'images', 'tiles.png')).toBuffer();

    const tileWidth = tiles.length;
    const tileHeight = tiles.reduce((acc, t) => Math.max(acc, t.length), 0);
    const width = tileWidth * 16;
    const height = tileHeight * 16;

    const buf = Buffer.alloc(width * 3 * height * 3);

    const tileCache = {};

    const pxi = (x, y, w) => {
        return y * (w * 3) + (x * 3);
    };

    for (let x = 0; x < tiles.length; x++) {
        for (let y = 0; y < tiles[x].length; y++) {
            const tile = tiles[x][y];

            let coords;
            let rotate;

            if (tile === 4) {
                const tileLeft = x > 0 ? tiles[x - 1][y] : null;
                const tileRight = x < tileWidth - 1 ? tiles[x + 1][y] : null;
                const tileTop = y > 0 ? tiles[x][y - 1] : null;
                const tileBottom = y < tileHeight - 1 ? tiles[x][y + 1] : null;

                const waterLeft = tileLeft == null || tileLeft === 4 || tileLeft === 11;
                const waterRight = tileRight == null || tileRight === 4 || tileRight === 11;
                const waterTop = tileTop == null || tileTop === 4 || tileTop === 11;
                const waterBottom = tileBottom == null || tileBottom === 4 || tileBottom === 11;

                if (!waterLeft && !waterRight && !waterTop && !waterBottom) {
                    coords = [9, 2, 10, 2];
                } else if (waterLeft && !waterRight && !waterTop && !waterBottom) {
                    coords = [10, 2];
                } else if (!waterLeft && waterRight && !waterTop && !waterBottom) {
                    coords = [9, 2];
                } else if (!waterLeft && !waterRight && waterTop && !waterBottom) {
                    coords = [9, 2];
                    rotate = -90;
                } else if (!waterLeft && !waterRight && !waterTop && waterBottom) {
                    coords = [10, 2];
                    rotate = -90;
                } else if (waterLeft && waterRight && !waterTop && !waterBottom) {
                    coords = [11, 2];
                    rotate = -90;
                } else if (waterLeft && !waterRight && waterTop && !waterBottom) {
                    coords = [8, 2];
                } else if (waterLeft && !waterRight && !waterTop && waterBottom) {
                    coords = [6, 2];
                } else if (!waterLeft && waterRight && waterTop && !waterBottom) {
                    coords = [2, 2];
                } else if (!waterLeft && !waterRight && waterTop && waterBottom) {
                    coords = [11, 2];
                } else if (!waterLeft && waterRight && !waterTop && waterBottom) {
                    coords = [4, 2];
                } else if (!waterLeft && waterRight && waterTop && waterBottom) {
                    coords = [3, 2];
                } else if (waterLeft && !waterRight && waterTop && waterBottom) {
                    coords = [7, 2];
                } else if (waterLeft && waterRight && !waterTop && waterBottom) {
                    coords = [5, 2];
                } else if (waterLeft && waterRight && waterTop && !waterBottom) {
                    coords = [1, 2];
                } else {
                    coords = [0, 2];
                }
            } else {
                coords = BASE_COORDS[tile];
            }

            if (coords) {
                let tileImg;
                const key = `${coords.join('x')}${rotate ? `|${rotate}` : ''}`;

                if (tileCache[key]) {
                    tileImg = tileCache[key];
                } else if (coords.length === 2) {
                    let s = sharp(baseTiles)
                        .extract({
                            left: 3 + (coords[0] * 17),
                            top: 2 + (coords[1] * 17),
                            width: 16,
                            height: 16
                        });

                    if (rotate) {
                        s = s.rotate(rotate);
                    }

                    tileImg = await s.raw().toBuffer();
                } else {
                    const s1 = await sharp(baseTiles)
                        .extract({
                            left: 3 + (coords[0] * 17),
                            top: 2 + (coords[1] * 17),
                            width: 8,
                            height: 16
                        }).raw().toBuffer();

                    const s2 = await sharp(baseTiles)
                        .extract({
                            left: 3 + (coords[2] * 17) + 8,
                            top: 2 + (coords[3] * 17),
                            width: 8,
                            height: 16
                        }).raw().toBuffer();

                    tileImg = Buffer.alloc(16 * 3 * 16 * 3);

                    for (let posX = 0; posX < 8; posX++) {
                        for (let posY = 0; posY < 16; posY++) {
                            const src = pxi(posX, posY, 8);
                            const dest = pxi(posX, posY, 16);
                            tileImg.writeUInt8(s1.readUInt8(src), dest);
                            tileImg.writeUInt8(s1.readUInt8(src + 1), dest + 1);
                            tileImg.writeUInt8(s1.readUInt8(src + 2), dest + 2);
                        }
                    }

                    for (let posX = 0; posX < 8; posX++) {
                        for (let posY = 0; posY < 16; posY++) {
                            const src = pxi(posX, posY, 8);
                            const dest = pxi(posX + 8, posY, 16);
                            tileImg.writeUInt8(s2.readUInt8(src), dest);
                            tileImg.writeUInt8(s2.readUInt8(src + 1), dest + 1);
                            tileImg.writeUInt8(s2.readUInt8(src + 2), dest + 2);
                        }
                    }

                    if (rotate) {
                        tileImg = await sharp(tileImg, {
                            raw: {
                                width: 16,
                                height: 16,
                                channels: 3
                            }
                        }).rotate(rotate).raw().toBuffer();
                    }
                }

                tileCache[key] = tileImg;

                for (let posX = 0; posX < 16; posX++) {
                    for (let posY = 0; posY < 16; posY++) {
                        const src = pxi(posX, posY, 16);
                        const dest = pxi((x * 16) + posX, (y * 16) + posY, width);
                        buf.writeUInt8(tileImg.readUInt8(src), dest);
                        buf.writeUInt8(tileImg.readUInt8(src + 1), dest + 1);
                        buf.writeUInt8(tileImg.readUInt8(src + 2), dest + 2);
                    }
                }
            } else {
                console.log(`Unsupported tile: ${tile}`);
            }
        }
    }

    const pngBuffer = await sharp(
        buf,
        {
            raw: {
                width,
                height,
                channels: 3
            }
        }
    ).png().toBuffer();

    return {
        mimeType: 'image/png',
        buffer: pngBuffer
    };
};

module.exports = exports = {
    generateMapImage
};
