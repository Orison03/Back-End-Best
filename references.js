// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");

// const server = express();

// const loginHandleRequest = (req, res) => {
//   console.log(req.body.name);
//   console.log(req.body.email);
//   console.log(req.body.password);
//   res.send(`You can proceed`);
// };

// server.use(express.static(path.join(__dirname, "public")));
// server.use(bodyParser.urlencoded({ extended: false }));

// server.post("/login", loginHandleRequest);

// server.listen(3000, "localhost", () => {
//   console.log("server is good to go");
// });
