import { MouseEventHandler } from "react";

// buton bileşeninin aldığı proplaron tipini tanımlama
export type ButtonProps = {
  title: string;
  designs?: string;
  disabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler;
  rIcon?: string;
};

// arabanın bilgileri
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fws" | "rwd" | "awf" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type OptionType = {
  label: string;
  value: string;
};

export type filterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};
