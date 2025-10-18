const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Отдаём интерфейс из Vite-сборки
app.use('/interface', express.static(path.join(__dirname, '../interface/dist')));

// Отдаём игровую часть
app.use('/game', express.static(path.join(__dirname, '../game')));

// Простой логин
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === '1234') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

// Перенаправление с корня на интерфейс
app.get('/', (req, res) => {
  res.redirect('/interface/index.html');
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});