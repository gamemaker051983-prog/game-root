const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('.'));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'carnage-game.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log('🎮 Carnage Game Server запущен!');
    console.log(`🌐 Откройте браузер: http://localhost:${PORT}`);
    console.log('🎯 Игра готова к использованию!');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Остановка сервера...');
    process.exit(0);
});
