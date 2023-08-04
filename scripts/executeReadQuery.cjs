const { data } = require("autoprefixer");
const { kwil, dbid, signer } = require("./index.cjs");
const { Utils } = require("kwil");


const wallet = "0xEthAddress"; // Use your own address here
//get dbID
async function getDBID(addresws, dbName) {
    let dbi = await kwil.selectDatabase(address, dbName);
    return dbi.DBID;
}

// read data
async function readTableData(addresss, database, tableName){
    //getdbID
    let dbId = await getDBID(addresss,database);

    // graphql query
    const res = await kwil.graphql(`query getAllData {
        ${dbId}_${tableName} {
            id
            name
            wallet
        }
    }`)
    console.log(res.data)
}

readTableData(wallet.address, "app_data", "users")