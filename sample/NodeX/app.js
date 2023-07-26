const NodeX = require("../../src/main.js");

const app = new NodeX();

app.use(async (req, res, next) => {
  console.log("middleware1 - start");
  next();
  console.log("middleware1 - end");
});

app.use(async (req, res, next) => {
    await Promise.resolve().then(async () => {
        console.log("middleware2 - start");
        await next();
        console.log("middleware2 - end");
    })
});

app.listen(1234);

console.log(app, "NodeX===>");
