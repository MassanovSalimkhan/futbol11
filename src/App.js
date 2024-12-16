import React from "react";
import "./App.css"; // Подключаем ваши CSS-стили

function App() {
  return (
    <div className="App">
      <header>
        <h1>Futbol11</h1>
        <p>Welcome to the ultimate football site!</p>
      </header>

      <main className="main-content">
        <button>Home</button>
        <button>Matches</button>
        <button>Teams</button>
        <button>More</button>
      </main>

      <footer>
        <p>© 2024 Futbol11</p>
        <small>Salimkhan & Ilimbek IT-122</small>
      </footer>
    </div>
  );
}

export default App;
