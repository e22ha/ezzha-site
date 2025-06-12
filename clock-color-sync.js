// Функция для применения цвета градиента к тексту часов
function syncClockColorWithGradient() {
    // Получаем текущие цвета градиента
    const [baseColor, lightColor] = gradientConfig.colors;
    
    // Создаем промежуточный цвет между цветами градиента
    // (более близкий к светлому, чтобы текст был ярче)
    const clockColor = interpolateColor(baseColor, lightColor, 0.7);
    
    // Применяем цвет к элементам часов
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    
    // Устанавливаем цвет текста и тени
    timeEl.style.color = clockColor;
    timeEl.style.textShadow = `0 0 10px ${baseColor}`;
    
    dateEl.style.color = clockColor;
    dateEl.style.textShadow = `0 0 5px ${baseColor}`;
}

// Вызываем функцию после изменения цветов
// Добавьте этот вызов в функции updateGradient и randomizeColors
