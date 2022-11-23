const Users = require("../models/user");

module.exports.getUsers = (request, response) => {
  Users.find({})
    .then((users) => response.send({ data: users }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.getUser = (request, response) => {
  Users.findById(request.params.userId)
    .then((user) => response.send({ data: user }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.createUser = (request, response) => {
  const { name, about, avatar } = request.body;

  Users.create({ name, about, avatar })
    .then((user) => response.send({ data: user }))
    .catch((error) => response.status(500).send({ message: error.message }));
};
