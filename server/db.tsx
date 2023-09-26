const mongoose = require("mongoose");

export const DbConnect = async () => {
  const URI =
    "mongodb+srv://ibrahimdoba55:ibrahim123@authdb.kuauwfm.mongodb.net/AuthDB?retryWrites=true&w=majority";
  try {
    await mongoose
      .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Mongo Connceted"));
  } catch (err) {
    console.log(err)
  }
};

export default DbConnect;
