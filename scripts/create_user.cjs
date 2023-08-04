const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function createUser(id, name, age) {
    const inputs = new Utils.ActionInput()
        .put("$id", id)
        .put("$username", name)
        .put("$age", age)

    const actionTx = await kwil
        .actionBuilder()
        .dbid(dbid)
        .name("create_user")
        .concat(inputs)
        .signer(signer)
        .buildTx();

    return await kwil.broadcast(actionTx);
}

createUser(3, "John", 23);