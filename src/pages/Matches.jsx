import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [schedule, setSchedule] = useState([]);

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
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div>
      <h1>Расписание матчей</h1>
      {schedule.length > 0 ? (
        <ul>
          {schedule.map((match) => (
            <li key={match.id}>
              <h2>
                {match.home_team.name} vs {match.away_team.name}
              </h2>
              <p>{new Date(match.starting_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default Home;
