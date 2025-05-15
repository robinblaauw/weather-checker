import React, { useEffect, useState } from "react";
import { DaySwitchButton } from "../DaySwitchButton.tsx/DaySwitchButton";
import { WeatherDisplay } from "../WeatherDisplay/WeatherDisplay";

type weatherByCityProps = {
  city: { name: string; code: string } | null;
};

const WeatherByCity = ({ city }: weatherByCityProps) => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [currentDay, setCurrentDay] = useState(0);

  const getCitiesWeather = async () => {
    const citiesWeatherArr = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=9222f24af35c497e97d81455232107&q=${city.name}_${city.code}&days=3&aqi=no&alerts=no`
    );
    if (citiesWeatherArr.status === 400) {
      console.log("City does not have any current weather data");
      setError(true);
      return;
    }
    const weatherData = await citiesWeatherArr.json();
    const data = await weatherData;
    return data;
  };

  useEffect(() => {
    setError(false);
    if (!city) {
      return;
    }
    getCitiesWeather()
      .then((weather) => {
        setWeather(weather);
      })
      .catch(() => {
        setError(true);
      });
  }, [city]);

  return (
    <section>
      {!error && (
        <>
          <div className="flex gap-2 my-3">
            {weather?.forecast?.forecastday &&
              weather?.forecast?.forecastday.map((day: any, index: number) => {
                return (
                  <div key={index} onClick={() => setCurrentDay(index)}>
                    <DaySwitchButton
                      date={day.date}
                      active={index === currentDay}
                    />
                  </div>
                );
              })}
          </div>
          {weather?.forecast?.forecastday && (
            <WeatherDisplay data={weather?.forecast?.forecastday[currentDay]} />
          )}
        </>
      )}
      {error && (
        <p className="text-red-600">
          This city does not have any current weather measurements
        </p>
      )}
    </section>
  );
};

export default WeatherByCity;
