const express = require("express")
const {body} = require("express-validator")
const {listBankController,createBankController,updateBankController,deleteBankController} = require("../controllers/banks");
const BankModel = require("../models/bank");

const router = express.Router()

router.get("/bank/:id?", listBankController);
router.post(
  "/bank",
  [
    body("name").trim().not().isEmpty().withMessage("the name can't be empty"),
    body("branch")
      .trim()
      .not()
      .isEmpty()
      .withMessage("the branch can't be empty"),
    body("phoneNumber").isMobilePhone("en-GH"),
    body("location")
      .withMessage("the location can't be empty")
      .trim()
      .not()
      .isEmpty()
      .custom((value, { req }) => {
        return BankModel.findOne({ phone: value }).then((bankDoc) => {
          if (bankDoc) {
            return Promise.reject("Phone number already taken");
          }
        });
      }),
  ],
  createBankController
);
router.put("/bank", updateBankController);
router.delete("/bank", deleteBankController);

module.exports = router
