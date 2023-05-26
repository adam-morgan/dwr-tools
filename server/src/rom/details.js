const {
    DETAILS_FLAGS,
    DETAILS_SEED,
    DETAILS_VERSION
} = require('./constants');

const titleAlphabet = '0123456789__________________________' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ__________________________________!.c-     ';

const readDetails = (data) => {
    const details = {
        version: _readString(data, DETAILS_VERSION),
        flags: _readString(data, DETAILS_FLAGS),
        seed: _readString(data, DETAILS_SEED)
    };

    return details;
};

const _readString = (data, startPos) => {
    let i = 0;
    const vals = [];
    while (true) {
        const v = data.readUInt8(startPos + (i++));

        if (v === 0xf7) {
            break;
        }

        vals.push(titleAlphabet[v]);
    }

    return vals.join('');
};

module.exports = exports = {
    readDetails
};
