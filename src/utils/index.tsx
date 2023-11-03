import { colors } from "../constants";
import { CarType, filterType } from "../types";

const options = {
  headers: {
    "X-RapidAPI-Key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = "bmw",
    model = "",
    limit = "5",
    year = 5,
    fuel = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&=limit=${limit}&fuel_type=${fuel}`,
    options
  );
  return await res.json();
}

// fotoğraf urli oluşturma
export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // rastgele renk kodu seç
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return String(url);
};
