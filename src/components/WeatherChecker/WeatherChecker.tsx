import React, { useState } from "react";
// import "./WeatherChecker.css";
import "../../global.css";
import { Cities } from "../CitiesDropdown/CitiesDropdown";
import { CountriesDropdown } from "../CountriesDropdown/CountriesDropdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const WeatherChecker = () => {
  const [currentCountry, setCurrentCountry] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<string>("");

  const setCity = (val: string) => {
    setCurrentCity(val);
  };
  const setCountry = (val: string) => {
    setCurrentCountry(val);
  };

  return (
    <div className="weather-checker select-none">
      <Card>
        <CardHeader>
          <CardTitle>Weather checker app</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <CountriesDropdown setCountry={setCountry} />
            <Cities setCity={setCity} country={currentCountry} />
          </div>
          <p>{currentCity}</p>
        </CardContent>
      </Card>
    </div>
  );
};
