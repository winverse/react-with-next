import dotenv = require('dotenv');
import App from './app';

dotenv.config();

const { PORT } = process.env;
const app = new App();

app.listen(PORT!);
