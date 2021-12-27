require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = global.Promise; // Node의 네네이이티티브  Promise 사용

// mongodb 연결
mongoose.connect("mongodb://localhost/heurm").then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000;

app.use(bodyParser());

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.use(async ctx => {
    // 아무것도 없으면 {} 가 반환됩니다.
    ctx.body = ctx.request.body;
});

app.listen(4000, () => {
    console.log('heurm server is listening to port ' + port);
});
