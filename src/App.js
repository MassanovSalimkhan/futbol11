import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Personalization from "./pages/Personalization";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ReactComponent as PersonalizationIcon } from "./assets/personalization.svg";


function App() {
  const teams = ["Real Madrid", "Manchester United", "Bayern Munich", "Liverpool", "Barcelona"];

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          {/* Логотип */}
          <div className="logo">
            <img src="/ball.ico" alt="icon" className="logo-icon" />
            <span>Futbol11</span>
          </div>

          {/* Навигационные ссылки */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li>
              <Teams title="Teams" items={teams} />
            </li>
            <li><Link to="/about">About</Link></li>
            <li>
              <Link to="/personalization" className="icon-button">
                <PersonalizationIcon />
              </Link>
            </li>
          </ul>

          {/* Search Bar и кнопки авторизации */}
          <div className="auth-and-search">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
            <Link to="/sign-in" className="login-btn">Login</Link>
            <Link to="/sign-up" className="register-btn">SignUp</Link>
          </div>
        </nav>

        {/* Контент страниц */}
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/personalization" element={<Personalization />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>

        {/* Футер */}
        <Footer />
      </div>
    </Router>
  )
}
