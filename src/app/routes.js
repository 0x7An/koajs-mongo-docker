import  Router from 'koa-router';
var router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
});

export default router
