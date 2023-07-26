let express = require("express");
let app = express();

// 中间件
app.use(function (req, res, next) {
  console.log('middleware')
  next()
})
app.use('/test', function (req, res, next) {
  console.log('middleware - /test')
  next()
})

// 路由
app.get("/test", function (req, res) {
  console.log('/test')
  res.send("test");
});
app.listen(3000);
