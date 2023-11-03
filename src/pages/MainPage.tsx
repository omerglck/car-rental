import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../constants";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
  //  state'i ve state'de tutacağımız verinin tipini tanımlama
  const [cars, setCars] = useState<CarType[]>([]);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // urledki bütün pparamlaı alıp obje oluşturur
    const paramsObj = Object.fromEntries(params.entries());
    console.log(paramsObj);
    // araba verilerini al
    fetchCars(paramsObj).then((res: CarType[]) => setCars(res));
  }, [params]);

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        {/* filtereleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Giriniz" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          // arabalar gelmediği durumlarda
          <div className="home__error-container">
            <h2>Üzgünüz herhangi bir sonuç bulunamadı.</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
