const express = require("express");
//app.use(...);

var mongoose = require('mongoose');

const db = require("./src/app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/NewDB", async (req, res) => {
  const allUsers = await monmodel.find()
  res.status(200).send(allUsers)
  // monmodel.find({}, (err,val)=>{
  //   if(err){
  //     console.log(err);
  //   } else {
  //     res.json(val);
  //   }
  // })
});
const monmodel = db.mongoose.model("col", {
  userType: String,
      password: String,
      username: String
});
app.post("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder applications." });
    console.log("inside post");
    const data = new monmodel({
      userType: req.body.userType,
      password: req.body.password,
      username: req.body.username
    })
    const val = data.save();
   // console.log(val);
    res.json(val.then(v=>{
      console.log(v);
    }));
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});