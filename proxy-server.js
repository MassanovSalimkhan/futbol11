const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('https://api.sportmonks.com/v2.0/news', {
      params: {
        api_token: 'bCKTvPvZlNhSD1IEZXLFZv1Mu62gXIOKdMCC8KYwxaPQn8v8MbmQTQ3bNSk5',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при запросе данных:', error.message);
    res.status(500).json({ error: 'Ошибка при запросе данных' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
