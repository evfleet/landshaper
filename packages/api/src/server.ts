import express from 'express';
import morgan from './middlewares/morgan';

const app = express();

app.use(morgan);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
