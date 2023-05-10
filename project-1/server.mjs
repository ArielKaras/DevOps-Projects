import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors());

app.get('/api/ip', async function (req, res) {
  try {
    const response = await fetch('http://ip-api.com/json/?fields=status,query');
    const data = await response.json();

    if (data.status === 'fail') {
      console.error('Error fetching IP:', data);
      res.status(500).send({ error: 'Failed to fetch IP address' });
      return;
    }

    const ip = data.query;
    res.send({ ip: ip });
  } catch (error) {
    console.error('Error fetching IP:', error);
    res.status(500).send({ error: 'Failed to fetch IP address' });
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
