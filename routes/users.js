const router = require("express").Router();

const path = require("path");

const fsPromises = require("fs").promises;

const USERS_PATH = path.join(__dirname, "../data/users.json");

router.get("/:id", (request, response) => {
  //console.log("response =>", response);
  //response.send("users-12345690 users router res");

  fsPromises
    .readFile(USERS_PATH, { encoding: "utf8" })
    .then((users) => {
      console.log("params.id =>", request.params.id);
      //console.log("users =>", JSON.parse(users));

      /*for (var item in JSON.parse(users)) {
        console.log("item: ", item);
      }*/

      const jsonUsers = JSON.parse(users);

      for (const key in jsonUsers) {
        console.log(`key ===> ${key} : ==> ${jsonUsers[key]._id}`);
        if (jsonUsers[key]._id == request.params.id) {
          //console.log(`${key} find match`);
          response.send(jsonUsers[key]);

          return;
        }
      }

      const user = JSON.parse(users).find((user) => {
        user._id = request.params.id;
      });
      response.send({ data: JSON.parse(user) });
      //response.send({ data: JSON.parse(users) });
    })
    .catch((error) => {
      response.send({ message: `An error has occurred (${error})` });
      //console.log(`An error has occurred (${error})`);
    });
});

/*router.get("/users", (req, res) => {
  console.log("users route response");
  res.send("users-123456");
});*/

module.exports = router;
