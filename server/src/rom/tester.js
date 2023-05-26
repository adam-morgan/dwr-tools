const fs = require('fs');

const { parseRomFromStream } = require('./index');

const main = async () => {
    const file = '/home/adam/Downloads/DWRando.2932999849029176.IVIAAVCAKACAAAAAAAAAAEAQ.nes';
    const stream = fs.createReadStream(file);

    const data = await parseRomFromStream(stream);

    console.log(JSON.stringify(data.romDetails, null, 2));
};

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
