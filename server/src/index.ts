import express, { Request, Response } from "express";
const MyRoutes = require("./routes/routes.ts");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const URI =
  "mongodb+srv://ibrahimdoba55:ibrahim123@authdb.kuauwfm.mongodb.net/AuthDB?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Connceted"));

const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use("/a", MyRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (): void => {
  console.log(`Server Running in ${PORT}!`);
});
