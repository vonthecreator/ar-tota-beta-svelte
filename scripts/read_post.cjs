const { kwil, dbid, signer } = require("./index.cjs");
const { Utils, action } = require("kwil");

async function readPost() {
    const schema = await kwil.getSchema(dbid)

    // list the tables in the schema
    for (const table of schema.data.tables) {
        console.log(table.name)
    }
    
    // list the available actions
    for (const action of schema.data.actions) {
    //    if action.public {
    //        console.log(action.name)
    //    }
    console.log(action.name)
    }

    const res = await kwil.selectQuery(dbid, "SELECT * FROM posts");
    console.log(res)
}

readPost();
