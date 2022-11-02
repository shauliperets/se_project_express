//const express = require("express");
const express = require("express");
const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

const { PORT = 3000 } = process.env;

const app = express();

/*app.get("/users", (req, res) => {

  console.log("Res from app to users =>", res);
});*/

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
