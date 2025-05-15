import React, { useEffect, useState } from "react";

const getCurrentHour = (): number => {
  const now = new Date();
  const hours = now.getHours();

  return hours;
};

export const WeatherDisplay = (data: any) => {
  const [currentHour, setCurrentHour] = useState<number>(1);

  useEffect(() => {
    setCurrentHour(getCurrentHour());
  }, []);

  const setItem = (i: number) => {
    setCurrentHour(i + 1);
  };

  const createButtons = (): JSX.Element[] => {
    const paragraphs: JSX.Element[] = [];
    for (let i = 0; i < 24; i++) {
      if (i === 23) continue;
      paragraphs.push(
        <div
          className={`px-3 py-1 rounded-xl cursor-pointer flex justify-items-center flex-col ${
            i + 1 === currentHour
              ? "text-slate-700 hover:bg-slate-50 bg-white drop-shadow-xl pt-6 -my-2"
              : "text-white my-3"
          }`}
          onClick={() => setItem(i)}
          key={i}
        >
          <p className="text-[12px] self-center mb-2">
            {getCurrentHour() === i + 1 ? "now" : i + 1 + ":00"}
          </p>
          <p className="flex mb-2">
            {data.data?.hour && data.data.hour[i + 1].temp_c}
            <span> °</span>
          </p>
          <img
            src={data.data.hour[i + 1].condition.icon}
            alt={data.data.hour[i + 1].condition.description}
          ></img>
        </div>
      );
    }
    return paragraphs;
  };

  const buttons = createButtons();

  console.log(data);

  return (
    <div className="bg-sky-100 rounded-xl p-3">
      <div className="bg-sky-600 rounded-xl">
        <div className="flex gap-2">{buttons}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
