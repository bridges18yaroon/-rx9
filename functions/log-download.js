// functions/log-download.js
exports.handler = async (event, context) => {
  // Для Netlify Functions нам нужно использовать их встроенное хранилище
  // В реальном проекте лучше использовать базу данных
  // Здесь мы будем использовать простой объект в памяти (для демонстрации)
  
  // Получаем страну из заголовков запроса
  const country = event.headers['x-country'] || event.headers['x-country-code'] || 'Unknown';
  
  // В реальном проекте здесь нужно сохранять данные в базу
  // Для демонстрации просто возвращаем фиктивные данные
  const stats = {
    total: 2400 + Math.floor(Math.random() * 100),
    today: 50 + Math.floor(Math.random() * 10),
    byCountry: {
      'United States': 800,
      'Germany': 450,
      'United Kingdom': 350,
      'France': 300,
      'Canada': 200,
      'Japan': 150,
      'Australia': 120,
      'Other': 230
    }
  };
  
  // Обновляем статистику для текущей страны
  if (stats.byCountry[country]) {
    stats.byCountry[country] += 1;
  } else {
    stats.byCountry[country] = 1;
  }
  
  stats.total += 1;
  stats.today += 1;
  
  return {
    statusCode: 200,
    body: JSON.stringify(stats)
  };
};