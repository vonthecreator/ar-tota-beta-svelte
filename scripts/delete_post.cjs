const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function deletePost(id) {
    const inputs = new Utils.ActionInput().put("$id", id);
    
    const actionTx = await kwil
        .actionBuilder()
        .dbid(dbid)
        .name("delete_post")
        .concat(inputs)
        .signer(signer)
        .buildTx();
    
    return await kwil.broadcast(actionTx);
}

deletePost(1);