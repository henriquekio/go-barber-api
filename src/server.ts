import express, { response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
  return response.json({ home: 'ola marilene' });
});

app.listen(3333, () => {
  console.log('Server started in development mode ');
});
