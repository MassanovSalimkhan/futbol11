import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Home.css'; // Если нужно добавить стили

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news'); // Обращение к локальному серверу
        setNews(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Ошибка при получении новостей:', err);
        setError('Не удалось загрузить новости. Попробуйте позже.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Последние футбольные новости</h1>
      {loading && <p className="loading-message">Загрузка новостей...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && news.length > 0 && (
        <ul className="news-list">
          {news.map((article) => (
            <li key={article.id} className="news-item">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Читать далее
              </a>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && news.length === 0 && (
        <p className="no-news-message">Новостей пока нет.</p>
      )}
    </div>
  );
};

export default Home;
