'use strict';

const { ENEMY_LIST, ENEMIES } = require('./constants');

const readEnemies = (data) => {
    const enemies = [];

    for (let i = 0; i < ENEMY_LIST.length; i++) {
        const pattern = data.readUInt8(ENEMIES + (16 * i) + 3);

        const move1PercentFlag = pattern & 0x30;
        let move1Percent;
        let move1;

        if (move1PercentFlag === 0x30) {
            move1Percent = 75;
        } else if (move1PercentFlag === 0x20) {
            move1Percent = 50;
        } else if (move1PercentFlag === 0x10) {
            move1Percent = 25;
        }

        if (move1Percent) {
            const move1Flag = pattern & 0xc0;

            if (move1Flag === 0xc0) {
                move1 = 'HEALMORE';
            } else if (move1Flag === 0x80) {
                move1 = 'HEAL';
            } else if (move1Flag === 0x40) {
                move1 = 'STOPSPELL';
            } else {
                move1 = 'SLEEP';
            }
        }

        const move2PercentFlag = pattern & 0x3;
        let move2Percent;
        let move2;

        if (move2PercentFlag === 0x3) {
            move2Percent = 75;
        } else if (move2PercentFlag === 0x2) {
            move2Percent = 50;
        } else if (move2PercentFlag === 0x1) {
            move2Percent = 25;
        }

        if (move2Percent) {
            const move2Flag = pattern & 0xc;

            if (move2Flag === 0xc) {
                move2 = 'FIRE2';
            } else if (move2Flag === 0x8) {
                move2 = 'FIRE';
            } else if (move2Flag === 0x4) {
                move2 = 'HURTMORE';
            } else {
                move2 = 'HURT';
            }
        }

        enemies.push({
            name: ENEMY_LIST[i],
            str: data.readUInt8(ENEMIES + (16 * i)),
            agi: data.readUInt8(ENEMIES + (16 * i) + 1),
            hp: data.readUInt8(ENEMIES + (16 * i) + 2),
            sleepResistance: data.readUInt8(ENEMIES + (16 * i) + 4) >> 4,
            stopspellResistance: data.readUInt8(ENEMIES + (16 * i) + 4) & 0x0f,
            hurtResistance: data.readUInt8(ENEMIES + (16 * i) + 5) >> 4,
            xp: data.readUInt16LE(ENEMIES + (16 * i) + 6),
            gold: data.readUInt16LE(ENEMIES + (16 * i) + 8),
            move1Percent,
            move1,
            move2Percent,
            move2
        })
    }

    return enemies;
};

module.exports = exports = {
    readEnemies
};
