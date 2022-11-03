const express = require("express");
const router = require("express").Router();

const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

const { PORT = 3000 } = process.env;

const app = express();

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
app.use((request, response) => {
  response.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
