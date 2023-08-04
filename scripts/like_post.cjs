const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function likePost(postid, userid) {
    const inputs = new Utils.ActionInput()
        .put("$post_id", postid)
        .put("$user_id", userid)

    const actionTx = await kwil
        .actionBuilder()
        .dbid(dbid)
        .name("like_post")
        .concat(inputs)
        .signer(signer)
        .buildTx();

    return await kwil.broadcast(actionTx);
}

likePost(1, 1);