import { useState } from "react";
import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModel from "./DetailModel";
import { motion } from "framer-motion";
import { generateImage } from "../../utils";

type CardProps = {
  car: CarType;
};
const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="car-card group "
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* fiyat alanı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        300
        <span className="text-[14px] self-end font-medium">/gün</span>
      </p>
      {/* resim */}
      <div className="relative w-full 5-40 my-3">
        <img
          src={generateImage(car)}
          alt="car-pic"
          className="w-full h-full object-contain"
        />
      </div>
      {/* alt kısım */}
      <div className="relative flex w-full mt-2">
        <div className=" group-hover:invisible flex justify-between w-full mt-2 text-gray">
          <CarInfo
            icon="/images/steering-wheel.svg"
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
          />
          <CarInfo icon="/images/tire.svg" title={car.drive?.toUpperCase()} />
          <CarInfo icon="/images/gas.svg" title={car.city_mpg + " " + "MPG"} />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px]"
            rIcon="/images/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* detay modal'ı */}
      <DetailModel
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </motion.div>
  );
};

export default Card;
