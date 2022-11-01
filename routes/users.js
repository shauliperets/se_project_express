// routes.js

console.log("users route");

const router = require("express").Router(); // creating a router
//const { users } = require('./db.js'); // since this data is necessary for routing, we need to import it

router.get("/users", (request, response) => {
  console.log("response =>", response);
  response.send("users-123456-90");
  response.send("router res");
  /*if (!users[request.params.id]) {
    response.send(`Data not found`);
    return;
  }
  const { name, age } = users[request.params.id];
  response.send(`User ${name}, ${age} years old`);*/
});

/*router.get("/users", (req, res) => {
  console.log("users route response");
  res.send("users-123456");
});*/

console.log("users route ends");

module.exports = router; // exporting the router
