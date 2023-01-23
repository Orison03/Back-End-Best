let banksDB = require("./Database");
class BankModel {
  constructor({ name, location, branch, phoneNumber, address, accountNumber }) {
    this.name = name;
    this.location = location;
    this.branch = branch;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.accountNumber = accountNumber;
  }

  save() {
    banksDB.push(this);
    return this;
  }

  static all() {
    return banksDB;
  }

  static update(updateInfo = {}) {
    banksDB = banksDB.map((bank) => {
      if (bank.name === updateInfo.name) {
        return { ...bank, ...updateInfo };
      }
      return bank;
    });
  }

  static delete({ name }) {
    let deletedBank = null;
    banksDB = banksDB.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deletedBank = bank;

      return false;
    });
    return deletedBank;
  }
}

module.exports = BankModel;
