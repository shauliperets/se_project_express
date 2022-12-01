const express = require("express");
const mongoose = require("mongoose");

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

const constants = require("./constants/index");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use((req, res, next) => {
  req.user = {
    _id: "637e78acb1303580d8bc380a", // paste the _id of the test user created in manually
  };

  next();
});

app.use(express.json());

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
app.use((request, response) => {
  response
    .status(constants.errorStatus.e404)
    .send({ message: constants.errorMessage.e404 });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
