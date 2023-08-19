import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  rightIcon?: string;
}

export interface SearchManufactureProps {
  manufacture: string;
  setManufacture: Dispatch<SetStateAction<string>>;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CardDetailsProps {
  isOpen: boolean;
  close: () => void;
  car: CarProps;
}

export interface FilterProps {
  manufacture: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
