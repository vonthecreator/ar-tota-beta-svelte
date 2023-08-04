const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function selectQuery(id, query) {
    return await kwil.selectQuery(id, query);
}

selectQuery(dbid, `SELECT * FROM posts WHERE wallet = ${signer.address}`);
/* 
    {
        status: 200,
        data: [
            {
                "id": 1,
                "message": "Hello World!",
                "wallet": "<your-wallet-address>"
            }
        ]
    }
*/