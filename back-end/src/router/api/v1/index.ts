import Router from 'koa-router';
import { Context } from 'koa';

const v1 = new Router();

v1.get('/check', (ctx: Context) => {
  console.log('실행');
  ctx.body = 'hello';
});

export default v1;
