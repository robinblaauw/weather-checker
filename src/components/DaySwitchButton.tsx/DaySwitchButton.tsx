import React from "react";
import { Card } from "../ui/card";
import { getAbbreviatedMonth } from "../../../src/lib/utils";

type DaySwitchProps = {
  date: string;
  active: boolean;
};

export const DaySwitchButton = ({ date, active = false }: DaySwitchProps) => {
  const stringToDate = (date: string) => {
    const newDate = new Date(date);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;

    return { day, month };
  };

  const dayButtonDate = stringToDate(date);

  return (
    <Card className="overflow-hidden inline-block w-14 relative cursor-pointer">
      <div
        className={`mx-auto text-white w-full text-center ${
          active ? "bg-red-500" : "bg-slate-300"
        }`}
      >
        <h3 className="text-[12px] leading-[16px]">
          {getAbbreviatedMonth(dayButtonDate.month)}
        </h3>
      </div>
      <div>
        <p
          className={`p-1 text-xl text-center ${
            active ? "text-neutral-700" : "text-neutral-300"
          }`}
        >
          {dayButtonDate.day}
        </p>
      </div>
    </Card>
  );
};
