require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose  from 'mongoose';

import api from './api';

const {PORT, MONGO_URI} = process.env;

const app = new Koa();
const router = new Router();

mongoose.connect(MONGO_URI, {useNewUrlParser: true })
.then(() => {
console.log('Connect to MongoDB');
})
.catch(e => {
    console.error(e);
});
// 라우터 설정 
router.use('/api', api.routes());

// 라우터 적용 전에 bodyparser
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
})