const mongoose = require("mongoose")

const Schema = mongoose.Schema; 

const bankSchema = new Schema({
    name: String,
    location : String,
    branch: String,
    address: String,
    accountNumber : String,
    accounts: [
        {
            accountId : {required:true, type: Schema.Types.ObjectId, ref: "Account"}
        }
    ]
})

const BankModel = mongoose.model("Bank",bankSchema);

module.exports = BankModel