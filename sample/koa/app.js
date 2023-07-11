const Koa = require("koa");
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
router.get('/test', (ctx, next) => {
    ctx.body = 'test';
});
router.get('/test/:id', (ctx, next) => {
    ctx.body = `params: ${ctx.params.id}`;
});
app.use(router.routes())

app.listen(3000);
