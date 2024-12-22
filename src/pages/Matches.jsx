import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Matches.css"; // Импорт стилей

const Matches = () => {
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Статичные данные на случай, если API не загрузится
  const fallbackSchedule = [
    {
      id: 1,
      home_team: {
        name: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Madrid_CF.svg",
      },
      away_team: {
        name: "Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/FC_Barcelona_%28crest%29.svg",
      },
      starting_at: "2024-12-24T21:00:00Z",
      result: { home_score: 2, away_score: 1 },
    },
    {
      id: 2,
      home_team: {
        name: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Manchester_United_FC_crest.svg",
      },
      away_team: {
        name: "Liverpool",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Liverpool_FC.svg",
      },
      starting_at: "2024-12-25T20:30:00Z",
      result: { home_score: 1, away_score: 1 },
    },
    {
      id: 3,
      home_team: {
        name: "Bayern Munich",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/FC_Bayern_M%C3%BCnchen_logo_2017.svg",
      },
      away_team: {
        name: "Chelsea",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Chelsea_FC_logo.svg",
      },
      starting_at: "2024-12-26T19:45:00Z",
      result: { home_score: 3, away_score: 0 },
    },
  ];

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/schedules/teams/3468",
          {
            params: {
              api_token: "bCKTvPvZlNhSD1IEZXLFZv1Mu62gXIOKdMCC8KYwxaPQn8v8MbmQTQ3bNSk5",
            },
          }
        );
        setSchedule(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setIsLoading(false); // Даже если ошибка, показываем заглушку
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="matches-container">
      <h1>Расписание матчей</h1>

      {isLoading ? (
        <div className="loading">Загрузка данных...</div>
      ) : (
        <div className="matches-list">
          {(schedule.length > 0 ? schedule : fallbackSchedule).map((match) => (
            <div key={match.id} className="match-item">
              <div className="match-header">
                <div className="team-info">
                  <img
                    src={match.home_team.logo}
                    alt={match.home_team.name}
                    className="team-logo"
                  />
                  <span className="team-name">{match.home_team.name}</span>
                </div>

                <div className="match-date">
                  <p>{new Date(match.starting_at).toLocaleString()}</p>
                </div>

                <div className="team-info">
                  <span className="team-name">{match.away_team.name}</span>
                  <img
                    src={match.away_team.logo}
                    alt={match.away_team.name}
                    className="team-logo"
                  />
                </div>
              </div>

              <div className="match-footer">
                {match.result ? (
                  <p className="result">
                    {match.result.home_score} - {match.result.away_score}
                  </p>
                ) : (
                  <p className="not-started">Матч не завершён</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
