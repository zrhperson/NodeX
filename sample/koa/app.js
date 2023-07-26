const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();

// 中间件
app.use(async (ctx, next) => {
  console.log("middleware1 - start");
  await next();
  console.log("middleware1 - end");
});

// logger
app.use(async (ctx, next) => {
  console.log("middleware2 - start");
  await next();
  console.log("middleware2 - end");
});

router.get("/test", (ctx, next) => {
  ctx.body = "test";
});
app.use(router.routes());

app.listen(3000);
