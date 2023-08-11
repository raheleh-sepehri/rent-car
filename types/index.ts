import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset" 
}

export interface SearchManufactureProps{
  manufacture:string;
  setManufacture:Dispatch<SetStateAction<string>>
  
}
