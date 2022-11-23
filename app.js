const express = require("express");
const mongoose = require("mongoose");

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

const { PORT = 3300 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
app.use((request, response) => {
  response.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
