const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const {listBankController,createBankController,updateBankController,deleteBankController} = require("./public/controllers")

server.use(bodyParser.json());

server.get("/bank", listBankController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);

server.listen(3000, "localhost", () => {
  console.log("server is good to go");
});
