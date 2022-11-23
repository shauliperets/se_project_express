const Card = require("../models/card");

module.exports.getCards = (request, response) => {
  Card.find({})
    .then((users) => response.send({ data: users }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.createCard = (request, response) => {
  const { name, link } = request.body;
  const userId = request.user._id;

  Card.create({ name, link, owner: userId })
    .then((user) => response.send({ data: user }))
    .catch((error) => response.status(500).send({ message: error.message }));
};
