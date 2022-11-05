const router = require("express").Router();
const path = require("path");

const fsPromises = require("fs").promises;

const CARDS_PATH = path.join(__dirname, "../data/cards.json");

router.get("/", (request, response) => {
  fsPromises
    .readFile(CARDS_PATH, { encoding: "utf8" })
    .then((cards) => {
      const jsonCards = JSON.parse(cards);
      response.send(jsonCards);
    })
    .catch((error) => {
      response
        .status(500)
        .send({ message: `An error has occurred - ${error}` });
    });
});

module.exports = router;
