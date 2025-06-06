import React, { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { transformCountries } from "../../../src/lib/utils";

type CountriesDropdownProps = {
  setCountry: (val: { name: string; code: string }) => void;
};

export const CountriesDropdown = ({ setCountry }: CountriesDropdownProps) => {
  const [countries, setCountries] = useState<any[]>([]);

  const setCountryHandler = (val: { name: string; code: string }) => {
    setCountry(val);
  };

  useEffect(() => {
    const getCitiesData = async () => {
      const citiesArray = await fetch(
        "https://countriesnow.space/api/v0.1/countries/iso"
      );
      const citiesData = await citiesArray.json();
      const data = await citiesData?.data;
      await setCountries(data);
    };
    getCitiesData();
  }, []);

  const countriesArr = transformCountries(countries);

  return (
    <Dropdown
      setUpstreamValue={setCountryHandler}
      placeholder="Countries"
      list={countriesArr}
    />
  );
};
