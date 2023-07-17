import React, { useState } from "react";
import "./WeatherChecker.css";
import { Cities } from "../CitiesDropdown/CitiesDropdown";

export const WeatherChecker = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="weather-checker">
      <p>Weather checker app</p>
      <button
        className="weather-checker--button"
        onClick={() => setIsOpen((openstate) => !openstate)}
      >
        {isOpen ? "close" : "open"}
      </button>
      {isOpen && <div>I am open</div>}
      <Cities />
    </div>
  );
};
