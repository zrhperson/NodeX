let express = require("express");
let app = express();
app.get("/test", function (req, res) {
  res.send("test");
});
app.get("/test/:id", function (req, res) {
  res.send(`params: ${req.params.id}`);
});
app.listen(3000);
