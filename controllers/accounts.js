const AccountModel = require("../models/account")

const createAccountController = (req, res) => {
  const { name, number, accountType, bankId } = req.body;

  const account = new AccountModel({ name, number, accountType, bankId });

  account.save().then((result) => {
    if (result) {
      res.json({ message: "Account created", data: result });
    } else {
      res.json({ message: "fialed to create an account" });
    }
  });
};

const listAccountController = (req, res) => {
  AccountModel.find()
    .populate("bankId")
    .then((accounts) => {
      res.json({ data: accounts }).catch((err) => console.log(err));
    });
};

module.exports = {
  createAccountController,
  listAccountController,
};
