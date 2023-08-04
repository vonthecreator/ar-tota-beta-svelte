const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");


const wallet = "<EtheAddress>"; // Use your own address here

async function executeQuery(ownerAddresss, dbName) {
    const dbi = await kwil.selectDatabase(ownerAddresss, dbName);
    const executable = dbi.getQuery("insert_user");

    executable.setInput("id", 2)
    executable.setInput("name", "John Hernandez")

    // check complete executables
    if (!executable.isComplete()) {
        throw new Error("Executable is not complete");
    }

    let tx = executable.netTx();
    tx = await kwil.prepareTx(tx, wallet);
    const res = await kwil.broadcast(tx);
    console.log(res)
}

executeQuery(wallet, "app_data")