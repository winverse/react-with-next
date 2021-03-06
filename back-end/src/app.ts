import Koa from 'koa';
import cors from '@koa/cors';

import router from './router';

const prod = process.env.NODE_ENV !== 'development';

export default class App {
  public app: Koa;

  constructor() {
    this.app = new Koa();
    this.meddleware();
  }

  public meddleware = (): void => {
    const { app } = this;
    app.use(
      cors({
        origin: prod ? 'https://blogs.openknowl' : 'http://localhost:3000',
        credentials: true,
      }),
    );

    app.use(router.routes()).use(router.allowedMethods());
  };

  public listen = (port: string): void => {
    const { app } = this;
    app.listen(port, () => {
      console.log(`server is running, port number is ${port}`);
    });
  };
}
