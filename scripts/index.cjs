const { NodeKwil, Utils } = require("kwil");
const { Wallet } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();


const kwil = new NodeKwil({
  kwilProvider: "https://provider.kwil.com",
});

const walletAddress = "0x2a3bB9f9b1a305F39C917b8a5b7fBa0Be1fe3601"; // Use your own address here
const databaseName = "app_data";

const dbid = Utils.generateDBID(walletAddress, databaseName);

const signer = new Wallet(process.env.PRIVATE_KEY); // Use your own private key here

module.exports = {
  kwil,
  dbid,
  signer,
};
console.log(kwil);
console.log(dbid);
console.log(signer);