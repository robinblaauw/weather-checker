import React, { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { newCitiesArray } from "../../../src/lib/utils";

type CitiesDropdownProps = {
  country?: { name: string; code: string } | null;
  setCity: (val: { name: string; code: string }) => void;
};

const CitiesDropdown = ({ country, setCity }: CitiesDropdownProps) => {
  const [cities, setCities] = useState<string[]>([]);

  const passCityHandler = (val: { name: string; code: string }) => {
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
          body: JSON.stringify({ country: country.name }),
        }
      );
      const citiesData = await citiesArray.json();
      const data = await citiesData?.data;
      await setCities(data);
    };
    getCitiesData();
  }, [country]);

  const transformedCities = newCitiesArray(cities, country?.code!);

  return (
    <Dropdown
      setUpstreamValue={passCityHandler}
      placeholder="Cities"
      list={transformedCities}
    />
  );
};

export const Cities = React.memo(CitiesDropdown);
