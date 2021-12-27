const Router = require("koa-router");

const books = new Router();
const booksCtrl = require('./books.controller');

books.get('/', booksCtrl.list);
// 단일 데이터 조회
books.get('/:id', booksCtrl.get);
books.post('/', booksCtrl.create);
books.delete('/:id', booksCtrl.delete);
books.put('/:id', booksCtrl.replace);
books.patch('/:id', booksCtrl.update);

module.exports = books;
