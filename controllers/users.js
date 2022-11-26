const User = require("../models/user");

module.exports.getUsers = (request, response) => {
  User.find({})
    .orFail()
    .then((users) => response.send({ data: users }))
    .catch((error) => {
      if (error == DocumentNotFoundError) {
        response.status(404).send({ message: "Data not found" });
        console.log(error);
      } else {
        response.status(500).send({ message: error.message });
      }
    });
};

module.exports.getUser = (request, response) => {
  User.findById(request.params.userId)
    .then((user) => response.send({ data: user }))
    .catch((error) => {
      if (error == DocumentNotFoundError) {
        response.status(404).send({ message: "User not found" });
        console.log(error);
      } else {
        response.status(500).send({ message: error.message });
      }
    });
};

module.exports.createUser = (request, response) => {
  const { name, about, avatar } = request.body;

  User.create({ name, about, avatar })
    .then((user) => response.send({ data: user }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.updateProfile = (request, response) => {
  const { name, about } = request.body;

  User.findByIdAndUpdate(request.user._id, { name: name, about: about })
    .then((user) => response.send({ data: user }))
    .catch((error) => response.status(500).send({ message: error.message }));
};

module.exports.updateAvatar = (request, response) => {
  const { avatar } = request.body;

  User.findByIdAndUpdate(request.user._id, { avatar: avatar })
    .then((user) => response.send({ data: user }))
    .catch((error) => response.status(500).send({ message: error.message }));
};
