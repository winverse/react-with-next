import Router from 'koa-router';
import { Context } from 'koa';

const v2 = new Router();

v2.get('/check', (ctx: Context) => {
  console.log('실행');
  ctx.body = 'hello';
});

export default v2;
