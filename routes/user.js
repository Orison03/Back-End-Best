const express = require("express");
const {body} = require("express-validator")
const userModel = require("../models/user")

const router = express.Router()

const {signupController} = require("../controllers/user")

router.put(
  "/signup",
  [
    body("name").trim().not().isEmpty().withMessage("User name is required"),
    body("email")
      .isEmail()
      .withMessage("Email invalid")
      .custom((value, { req }) => {
        return userModel.findOne({email: value}).then((userDoc) => {
            if(userDoc){
                   return Promise.reject("this email is already used")
            }
        })
      }),
    body("password").trim().isLength({min: 5})
  ],
  signupController
);

module.exports = router;
