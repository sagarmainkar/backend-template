const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

//Load Models
const User = require("./models/User");

const app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB Config

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

//Passport middleware
app.use(passport.initialize());

//Passport COnfig
require("./config/passport")(passport);
//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

// app.post("/register", (req, res) => {
//   User.findOne({ email: req.body.email });
// });

app.listen(port, () => console.log(`Server running on port:${port}`));
