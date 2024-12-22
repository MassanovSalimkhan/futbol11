import React, { useState, useEffect } from "react";
import "./Personalization.css";

const Personalization = () => {
  // Загружаем данные из localStorage или устанавливаем значения по умолчанию
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [favoriteTeam, setFavoriteTeam] = useState(localStorage.getItem("favoriteTeam") || "");
  const [notifications, setNotifications] = useState(localStorage.getItem("notifications") === "true");
  const [notificationFrequency, setNotificationFrequency] = useState(localStorage.getItem("notificationFrequency") || "daily");
  const [notificationType, setNotificationType] = useState(localStorage.getItem("notificationType") || "push");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Сохраняем изменения в localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("favoriteTeam", favoriteTeam);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("notificationFrequency", notificationFrequency);
    localStorage.setItem("notificationType", notificationType);
    localStorage.setItem("language", language);
  }, [theme, favoriteTeam, notifications, notificationFrequency, notificationType, language]);



  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleFavoriteTeamChange = (event) => {
    setFavoriteTeam(event.target.value);
  };

  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  const handleNotificationFrequencyChange = (event) => {
    setNotificationFrequency(event.target.value);
  };

  const handleNotificationTypeChange = (event) => {
    setNotificationType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={`personalization-container ${theme}`}>
      <h1 className="personalization-title">Настройки персонализации</h1>
      <p className="personalization-description">
        Здесь вы можете настроить ваш опыт на сайте под ваши предпочтения.
      </p>

      {/* Тема оформления */}
      <div className="setting">
        <label htmlFor="theme" className="setting-label">Выберите тему оформления:</label>
        <select id="theme" value={theme} onChange={handleThemeChange} className="setting-input">
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
        </select>
      </div>

      {/* Любимая команда */}
      <div className="setting">
        <label htmlFor="favorite-team" className="setting-label">Выберите любимую команду:</label>
        <select
          id="favorite-team"
          value={favoriteTeam}
          onChange={handleFavoriteTeamChange}
          className="setting-input"
        >
          <option value="">Не выбрано</option>
          <option value="real-madrid">Реал Мадрид</option>
          <option value="man-united">Манчестер Юнайтед</option>
          <option value="bayern-munich">Бавария</option>
          <option value="liverpool">Ливерпуль</option>
          <option value="barcelona">Барселона</option>
        </select>
      </div>

      {/* Уведомления */}
      <div className="setting">
        <label htmlFor="notifications" className="setting-label">Получать уведомления о матчах:</label>
        <input
          type="checkbox"
          id="notifications"
          checked={notifications}
          onChange={handleNotificationsChange}
          className="setting-input"
        />
      </div>

      {/* Частота уведомлений */}
      <div className="setting">
        <label htmlFor="notification-frequency" className="setting-label">Частота уведомлений:</label>
        <select
          id="notification-frequency"
          value={notificationFrequency}
          onChange={handleNotificationFrequencyChange}
          className="setting-input"
        >
          <option value="instant">Мгновенно</option>
          <option value="daily">Ежедневно</option>
          <option value="weekly">Еженедельно</option>
        </select>
      </div>

      {/* Тип уведомлений */}
      <div className="setting">
        <label htmlFor="notification-type" className="setting-label">Тип уведомлений:</label>
        <select
          id="notification-type"
          value={notificationType}
          onChange={handleNotificationTypeChange}
          className="setting-input"
        >
          <option value="push">Push уведомления</option>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
        </select>
      </div>

      {/* Выбор языка */}
      <div className="setting">
        <label htmlFor="language" className="setting-label">Выберите язык:</label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="setting-input"
        >
          <option value="en">Английский</option>
          <option value="ru">Русский</option>
          <option value="es">Испанский</option>
        </select>
      </div>

      <div className="save-settings">
        <button className="save-button">Сохранить настройки</button>
      </div>
    </div>
  );
};

export default Personalization;
