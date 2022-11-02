// routes.js

console.log("users route");

const router = require("express").Router();

router.get("/", (request, response) => {
  //console.log("response =>", response);
  response.send("users-12345690 users router res");
});

/*router.get("/users", (req, res) => {
  console.log("users route response");
  res.send("users-123456");
});*/

module.exports = router;
