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
import WeatherByCity from "../WeatherByCity/WeatherByCity";

export const WeatherChecker = () => {
  const [currentCountry, setCurrentCountry] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const [currentCity, setCurrentCity] = useState<{
    name: string;
    code: string;
  } | null>(null);

  const setCity = (val: { name: string; code: string }) => {
    setCurrentCity(val);
  };
  const setCountry = (val: { name: string; code: string }) => {
    setCurrentCountry(val);
  };

  return (
    <div className="weather-checker select-none">
      <Card>
        <CardHeader>
          <CardTitle>Weather checker app</CardTitle>
          <CardDescription>
            Look up current and forecast weather around the world.
          </CardDescription>
          <CardDescription>
            <span className="italic">
              Please note that not every city has current weather available.
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <CountriesDropdown setCountry={setCountry} />
            <Cities setCity={setCity} country={currentCountry} />
          </div>
          <div className="mt-4">
            {currentCity?.name && <WeatherByCity city={currentCity} />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
