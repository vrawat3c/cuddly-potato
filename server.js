import express from 'express';
const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});