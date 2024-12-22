import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">О нас</h1>
      <p className="about-description">
        Добро пожаловать на <strong>Futbol11</strong>! Мы — ваша платформа для всего, что связано с футболом.
      </p>
      <p className="about-description">
        Наш сайт предлагает последние новости футбола, расписания матчей, результаты и подробную статистику команд и игроков.
        Если вы ищете актуальные результаты или подробные данные о выступлениях, мы вам поможем.
      </p>
      <p className="about-description">
        В будущем мы планируем добавить такие функции, как прогнозы матчей и ставки, чтобы вы могли еще больше погрузиться в мир футбола.
        Также будет возможность подписаться на любимую команду и получать уведомления о её новостях и обновлениях.
      </p>
      <p className="about-description">
        Следите за нами, так как мы продолжаем развиваться и предоставлять лучший футбольный опыт для фанатов по всему миру!
      </p>
    </div>
  );
}

export default About;
