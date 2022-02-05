import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World4!');
});

app.get('/test', (req, res) => {
  res.send('yakup!asdasd');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
