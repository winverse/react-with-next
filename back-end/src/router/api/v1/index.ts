import Router from 'koa-router';
import { Context } from 'koa';

const v1 = new Router();

v1.get('/check', (ctx: Context) => {
  ctx.body = '창주님 반가워요!!';
});

export default v1;
