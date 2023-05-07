'use strict';

const fs = require('fs');

const { parseRom } = require('./server/rom');

const main = async () => {
    const file = '/Users/adam/Downloads/DWRando.7912429283888193.IVIAAVCEKACAAAAAAAAAAEAQ.nes';
    const stream = fs.createReadStream(file);

    const data = await parseRom(stream);

    console.log(JSON.stringify(data, null, 2));
};

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
