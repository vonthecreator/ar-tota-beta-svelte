const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function updatePost(id, msg) {
  const inputs = new Utils.ActionInput()
    .put("$id", id)
    .put("$message", msg);

  const actionTx = await kwil
    .actionBuilder()
    .dbid(dbid)
    .name("posts")
    .concat(inputs)
    .signer(signer)
    .buildTx();

  return await kwil.broadcast(actionTx);
}

updatePost(1, "Hello Kwil!");