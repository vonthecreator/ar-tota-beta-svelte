const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function createUser(name, age) {
    const inputs = new Utils.ActionInput()
        .put("$username", name)
        .put("$age", age)

    const actionTx = await kwil
        .actionBuilder()
        .dbid(dbid)
        .name("update_user")
        .concat(inputs)
        .signer(signer)
        .buildTx();

    return await kwil.broadcast(actionTx);
}

createUser("Luis", 23);