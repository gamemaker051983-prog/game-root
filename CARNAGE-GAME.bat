@echo off
title Carnage MMORPG - Запуск игры
color 0A

echo.
echo ========================================
echo    CARNAGE MMORPG - Запуск игры
echo ========================================
echo.

echo [1/2] Проверка Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js не установлен!
    echo 📥 Скачайте Node.js с https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo ✅ Node.js найден

echo.
echo [2/2] Запуск игры...
echo 🌐 Открываем браузер...
echo.

start http://localhost:3000

echo 🚀 Запуск сервера...
node simple-server.js

echo.
echo ✅ Игра запущена!
echo 🌐 Адрес: http://localhost:3000
echo.
echo Нажмите Ctrl+C для остановки сервера
echo.
pause
