const router = require("express").Router();

const path = require("path");

const fsPromises = require("fs").promises;

const USERS_PATH = path.join(__dirname, "../data/users.json");

router.get("/:id", (request, response) => {
  fsPromises
    .readFile(USERS_PATH, { encoding: "utf8" })
    .then((users) => {
      const jsonUsers = JSON.parse(users);

      /*for (const key in jsonUsers) {
        if (jsonUsers[key]._id == request.params.id) {
          response.status(200).send(jsonUsers[key]);
          return;
        }
      }*/

      const user = jsonUsers.find(
        (element) => element._id == request.params.id
      );

      //console.log(`user: ${user._id}`);

      /*jsonUsers.find((element, index, array) => {
        console.log(
          `element._id: ${element._id}, index: ${index}, array: ${array}`
        );
        element._id === request.params.id;
      });*/

      if (user) {
        response.status(200).send(user);
      } else {
        response.status(404).send({ message: "User not exists" });
      }
    })
    .catch((error) => {
      response
        .status(500)
        .send({ message: `An error has occurred - ${error}` });
    });
});

router.get("/", (request, response) => {
  fsPromises
    .readFile(USERS_PATH, { encoding: "utf8" })
    .then((users) => {
      const jsonUsers = JSON.parse(users);
      response.send(jsonUsers);
    })
    .catch((error) => {
      response.send({ message: `An error has occurred (${error})` });
    });
});

module.exports = router;
