// routes.js

const cardsRouter = require("express").Router(); // creating a router
//const { users } = require('./db.js'); // since this data is necessary for routing, we need to import it

cardsRouter.get("/cards", (request, response) => {
  console.log("response =>", response);
  res.status(200);
  res.send("cards-123456");
  /*if (!users[request.params.id]) {
    response.send(`Data not found`);
    return;
  }
  const { name, age } = users[request.params.id];
  response.send(`User ${name}, ${age} years old`);*/
});

module.exports = cardsRouter; // exporting the router
