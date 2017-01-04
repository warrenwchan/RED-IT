import express from 'express'
import { resolve } from 'path'

const app = express();

app.use(express.static((resolve(process.cwd(), '../web.browser/build'))));

app.use((req, res, next) => {
  res.status(404).send('Page not found...');
  next();
});

module.exports = app;
