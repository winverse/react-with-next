import App from './app';

import dotenv = require('dotenv');

dotenv.config();

const { PORT } = process.env;
const app = new App();

app.listen(PORT!);
