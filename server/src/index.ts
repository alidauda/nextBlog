import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const MyRoutes = require('./routes/routes.ts');
const mongoose = require('mongoose');
const cors = require('cors');

const URI =
  'mongodb+srv://ibrahimdoba55:ibrahim123@authdb.kuauwfm.mongodb.net/AuthDB?retryWrites=true&w=majority';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongo Connceted'));

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/a', MyRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Running in ${PORT}!`);
});
