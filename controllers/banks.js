const BankModel = require("../models/bank")
const AccountModel = require("../models/account")
const {validationResult} = require("express-validator")

const listBankController = (req, res) => {
  const { id } = req.params;

  if (id) {
    BankModel.find({ _id: id })
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  } else {
    BankModel.find()
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  }
};
const createBankController = (req, res) => {
  //  validation checks
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    console.log(errors)
    return res.json({message: errors.array()[0].msg})
  }
  const { name, location, branch, phoneNumber, address, accountNumber } =
    req.body;

  const bank = new BankModel({
    name,
    location,
    branch,
    phoneNumber,
    address,
    accountNumber,
  });

  bank
    .save()
    .then((result) => {
      res.json({ message: "create successful", data: result });
    })
    .catch((error) => console.log(error));
};
const updateBankController = (req, res) => {
  const { id, name, location, branch, phoneNumber, address, accountNumber } =
    req.body;

  BankModel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.location = location;
        bank.branch = branch;
        bank.phoneNumber = phoneNumber;
        bank.address = address;
        bank.accountNumber = accountNumber;

        bank.save();
        res.json({ message: "update successful", data: bank });
      }
      res.json({ message: "Document cannot be found" });
    })
    .catch((err) => console.log(err));
  //   const updatedBank = BankModel.update({
  //     name,
  //     location,
  //     branch,
  //     phoneNumber,
  //     address,
  //     accountNumber,
  //   });

  //   res.json({ message: "update successful", data: updatedBank });
};
const deleteBankController = (req, res) => {
  const { id } = req.body;
  BankModel.findByIdAndRemove(id).then((deletedBank) => {
    if (deletedBank) {
      AccountModel.deleteMany({ bankId: deletedBank._id })
        .then((result) => {})
        .catch((err) => console.log(err));
      res.json({ message: "delete successful", data: deletedBank });
      return;
    }
    res.json({ message: "bank not found" });
  });
};


module.exports = {
  listBankController,
  updateBankController,
  createBankController,
  deleteBankController,
};