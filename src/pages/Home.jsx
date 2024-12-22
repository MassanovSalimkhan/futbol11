import React from "react";
import "./Home.css"; // Подключаем стили

const Home = () => {
  // Статичные данные для главной страницы
  const news = [
    {
      id: 1,
      title: "«Атлетико» на 90+6-й минуте вырвал победу в матче с «Барселоной»",
      content: "В напряжённом поединке «Атлетико» одержал победу над «Барселоной» благодаря голу на последних минутах матча.",
      date: "22 декабря 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/FC_Barcelona_logo_%282019%29.svg", // Логотип Барселоны
    },
    {
      id: 2,
      title: "Покер Шика помог «Байеру» разгромить «Фрайбург»",
      content: "Нападающий «Байера» Патрик Шик забил четыре гола в матче против «Фрайбурга», обеспечив своей команде уверенную победу.",
      date: "22 декабря 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bayer_Leverkusen_logo.svg", // Логотип Байера
    },
    {
      id: 3,
      title: "«Манчестер Сити» рассматривает Месси в качестве усиления состава",
      content: "Руководство «Манчестер Сити» заинтересовано в подписании Лионеля Месси, рассматривая его как потенциальное усиление атакующей линии.",
      date: "22 декабря 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Manchester_City_FC_badge.svg", // Логотип Манчестер Сити
    },
  ];

  return (
    <div className="home-container">
      <h1>Добро пожаловать на Futbol11!</h1>
      <p>Ваш источник последних новостей, расписания матчей и статистики по футболу.</p>

      <section className="latest-news">
        <h2>Последние новости</h2>
        <div className="news-list">
          {news.map((item) => (
            <div key={item.id} className="news-item">
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-text">{item.content}</p>
                <span className="news-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="statistics">
        <h2>Статистика бомбардиров Лиги Чемпионов 2024/2025</h2>
        <div className="stats-item">
          <h3>Топ-3 бомбардира</h3>
          <ul>
            <li>1. Роберт Левандовски (Барселона) — 7 голов</li>
            <li>2. Рафинья (Барселона) — 6 голов</li>
            <li>3. Гирасси Серу (Боруссия Дортмунд) — 6 голов</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
