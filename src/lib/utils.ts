import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ObjectWithKeyValue {
  [key: string]: any;
}

export function extractPropertyValues(
  objects: ObjectWithKeyValue[],
  key: string
): any[] {
  return objects.map((object) => object[key]);
}
