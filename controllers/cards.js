const Card = require("../models/card");

module.exports.getCards = (request, response) => {
  Card.find({})
    .orFail()
    .then((cards) => response.send({ data: cards }))
    .catch((error) => {
      if (error.name === "DocumentNotFoundError") {
        response.status(404).send({ message: "Data not found" });
        console.log(error);
      } else {
        response.status(500).send({ message: error.message });
        console.log(error);
      }
    });
};

module.exports.createCard = (request, response) => {
  const { name, link } = request.body;
  const userId = request.user._id;

  Card.create({ name, link, owner: userId })
    .then((card) => response.send({ data: card }))
    .catch((error) => {
      if (
        error.message ===
          "card validation failed: name: Path `name` is required., link: Path `link` is required." ||
        error.message ===
          "card validation failed: name: Path `name` is required." ||
        error.message ===
          "card validation failed: name: Path `link` is required."
      ) {
        response.status(400).send({ message: error.message });
      } else {
        response.status(500).send({ message: error.message });
      }
    });
};

module.exports.deleteCard = (request, response) => {
  const cardId = { request };

  Card.create({ _id: cardId })
    .then((card) => response.send({ data: card }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.likeCard = (request, response) => {
  Card.findByIdAndUpdate(
    request.params.cardId,
    { $addToSet: { likes: request.user._id } }, // add _id to the array if it's not there yet
    { new: true }
  )
    .then((card) => response.send({ data: card }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.dislikeCard = (request, response) => {
  Card.findByIdAndUpdate(
    request.params.cardId,
    { $pull: { likes: request.user._id } }, // remove _id from the array
    { new: true }
  )
    .then((card) => response.send({ data: card }))
    .catch((error) => response.status(500).send({ message: error.message }));
};
