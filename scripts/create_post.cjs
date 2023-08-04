const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function addPost(author_id, id, msg, title, dstring) {
    const inputs = new Utils.ActionInput()
        .put("$author_id", author_id)
        .put("$id", id)
        .put("$content", msg)
        .put("$title", title)
        .put("$date_string", dstring);

    const actionTx = await kwil
        .actionBuilder()
        .dbid(dbid)
        .name("create_post")
        .concat(inputs)
        .signer(signer)
        .buildTx();

    return await kwil.broadcast(actionTx);
}

addPost(1, 1, "This year a couple of participants of the Arweave Community Hackathon are joining forces to win some of the bounties that are in place", "Arweave Community Hackathon", "2023-07-30");