import React, { useState } from "react";
import "./Teams.css";

function Teams({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="teams">
      <button className="teams-button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Teams;
