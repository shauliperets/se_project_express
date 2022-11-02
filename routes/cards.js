// routes.js

const router = require("express").Router();
const path = require("path");

const fsPromises = require("fs").promises;

const CARDS_PATH = path.join(__dirname, "../data/cards.json");

//console.log("CARD_PATH =>", CARDS_PATH);

router.get("/:id", (request, response) => {
  //response.send("cards-123456789");
  fsPromises
    .readFile(CARDS_PATH, { encoding: "utf8" })
    .then((cards) => {
      response.send({ data: JSON.parse(cards) });
    })
    .catch((error) =>
      response.send({ message: `An error has occurred (${error})` })
    );
});

module.exports = router;
