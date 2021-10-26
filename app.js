const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const PORT = process.env.PORT || 3000;

//middleswares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("HomePage");
});
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Connect to Db

mongoose.connect(process.env.MONGO_URI, () =>
  console.log("Connected to Db!")
);

app.listen(PORT);