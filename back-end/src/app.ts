import Koa from 'koa';
import router from './router';

export default class App {
  public app: Koa;
  constructor() {
    this.app = new Koa();
    this.meddleware();
  }

  public meddleware = (): void => {
    const { app } = this;
    app.use(router.routes()).use(router.allowedMethods());
  };

  public listen = (port: string): void => {
    const { app } = this;
    app.listen(port, () => {
      console.log(`server is running, port number is ${port}`);
    });
  };
}
