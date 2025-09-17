// functions/stats.js
exports.handler = async (event, context) => {
  // В реальном проекте здесь нужно загружать данные из базы
  // Для демонстрации возвращаем фиктивные данные
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
  
  return {
    statusCode: 200,
    body: JSON.stringify(stats)
  };
};
