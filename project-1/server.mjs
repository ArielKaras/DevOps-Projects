import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors());

app.get('/api/ip', async function (req, res) {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  const ip = data.ip;
  res.send({ ip: ip });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
