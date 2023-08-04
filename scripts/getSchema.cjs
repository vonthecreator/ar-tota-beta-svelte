const { kwil, dbid } = require("./index.cjs");
const { Utils } = require("kwil");

async function getSchema(id) {
    return await kwil.getSchema(id);
}

getSchema(dbid);

/*
    {
        status: 200,
        data: {
            owner: <your-wallet-address>,
            name: 'hello_world',
            tables: [ [Object] ],
            actions: [ [Object], [Object], [Object], [Object] ],
        }
    }
*/