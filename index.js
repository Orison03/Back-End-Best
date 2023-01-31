const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const server = express();
const accountRoutes = require("./routes/account")
const bankRoutes = require("./routes/account")
const userRoutes = require("./routes/user")


server.use(bodyParser.json());

server.use(accountRoutes)
server.use(bankRoutes)
server.use(userRoutes)

// connect to database
mongoose.connect(
  "mongodb+srv://bank-project:eraso1122@cluster0.pk0dpns.mongodb.net/?retryWrites=true&w=majority",
  {useNewUrlParser : true, useUnifiedTopology: true}
).then(result => {
     server.listen(3400, "localhost", () => {
       console.log("server is good to go");
     });
}).catch(err => console.log(err))


