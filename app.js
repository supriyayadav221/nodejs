const express = require("express");
const postsRoute = require("./routes/posts");
const app = express();
const mongoose = require("mongoose");
const Post = require('./models/Post');
require("dotenv/config");
// const fastcsv = require("fast-csv");
// const fs = require("fs");
// const ws = fs.createWriteStream("sups.csv");
// const mongodb = require("mongodb").MongoClient;

//const ExcelJs = require('excelJs')

const PORT = process.env.PORT || 3000;

//middleswares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/posts", postsRoute);

//Connect to Db

mongoose.connect(process.env.MONGO_URI, () =>
  console.log("Connected to Db!")
);


// mongodb.connect(
//   process.env.MONGO_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     if (err) throw err;

//     client
//       .db("rest")
//       .collection("posts")
//       .find({})
//       .toArray((err, data) => {
//         if (err) throw err;

//         console.log(data);
//         fastcsv
//           .write(data, { headers: true })
//           .on("finish", function() {
//             console.log("Write to sups.csv successfully!");
//           })
//           .pipe(ws);

//         client.close();
//       });
//   }
// );





app.listen(PORT);




