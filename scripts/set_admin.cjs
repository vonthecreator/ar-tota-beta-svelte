const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function createUser(address, access) {
    const inputs = new Utils.ActionInput()
        .put("$address", address)
        .put("$access", access)

    const actionTx = await kwil
        .actionBuilder()
        .dbid(dbid)
        .name("set_admin")
        .concat(inputs)
        .signer(signer)
        .buildTx();

    return await kwil.broadcast(actionTx);
}

createUser("0x2a3bB9f9b1a305F39C917b8a5b7fBa0Be1fe3601", 1);