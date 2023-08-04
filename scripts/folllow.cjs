const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");

async function addPost(followerid, followedid, name) {
    const inputs = new Utils.ActionInput()
        .put("$follower_id", followerid)
        .put("$followed_id", followedid)
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

addPost(1, 2);