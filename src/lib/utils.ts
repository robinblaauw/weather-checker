import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Country, ObjectWithKeyValue, OriginalCountry } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractPropertyValues(
  objects: ObjectWithKeyValue[],
  key: string
): any[] {
  return objects.map((object) => object[key]);
}

export function transformCountries(
  originalCountries: OriginalCountry[]
): Country[] {
  const transformedCountries: Country[] = [];

  originalCountries.forEach((country) => {
    const transformedCountry: Country = {
      name: country.name,
      code: country.Iso2,
    };

    transformedCountries.push(transformedCountry);
  });

  return transformedCountries;
}

export function newCitiesArray(
  inputArray: string[],
  countryCode: string
): Country[] {
  const transformedArray: Country[] = inputArray.map((name) => ({
    name,
    code: countryCode,
  }));
  return transformedArray;
}

export function getAbbreviatedMonth(dateNumber: number): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = dateNumber - 1;

  if (monthIndex >= 0 && monthIndex < months.length) {
    return months[monthIndex];
  } else {
    throw new Error("Invalid date number. It should be between 1 and 12.");
  }
}
