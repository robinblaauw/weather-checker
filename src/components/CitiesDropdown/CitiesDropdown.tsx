import React, { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";

type CitiesDropdownProps = {
  country?: string | undefined;
  setCity: (val: string) => void;
};

const CitiesDropdown = ({ country, setCity }: CitiesDropdownProps) => {
  const [cities, setCities] = useState<string[]>([]);

  const passCityHandler = (val: string) => {
    setCity(val);
  };

  useEffect(() => {
    if (!country) {
      return;
    }
    const getCitiesData = async () => {
      const citiesArray = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ country: country }),
        }
      );
      const citiesData = await citiesArray.json();
      const data = await citiesData?.data;
      await setCities(data);
    };
    getCitiesData();
  }, [country]);

  return (
    <Dropdown
      setUpstreamValue={passCityHandler}
      placeholder="Cities"
      list={cities}
    />
  );
};

export const Cities = React.memo(CitiesDropdown);
