const express = require('express');
const path = require('path');
const app = express();

app.use('/interface', express.static(path.join(__dirname, 'interface')));
app.use('/game', express.static(path.join(__dirname, 'game')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'interface', 'index.html'));
});

app.listen(3000, () => {
  console.log('Игра запущена: http://localhost:3000');
});