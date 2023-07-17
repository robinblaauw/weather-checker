import React, { useEffect, useState } from "react";

const CitiesDropdown = () => {
  const [cities, setCities] = useState<any>(null);
  useEffect(() => {
    const getCitiesData = async () => {
      const citiesArray = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ country: "Netherlands" }),
        }
      );
      const citiesData = await citiesArray.json();
      const data = await citiesData?.data;
      await setCities(data);
    };
    getCitiesData();
  }, []);
  console.log(cities);
  return <div>CitiesDropdown</div>;
};

export const Cities = React.memo(CitiesDropdown);
