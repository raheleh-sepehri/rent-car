"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetails, CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, model, make, drive, transmission } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-car-card__content">
        <h2 className="car-car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold ">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          alt={model}
          src={generateCarImageUrl(car)}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex mt-2 w-full">
        <div className="flex  text-gray justify-between w-full">
          <div className="flex flex-col items-center gap-2 ">
            <Image
              src="./steering-wheel.svg"
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <Image src="./tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toLocaleUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <Image src="./gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-12">
        <CustomButton
          title="View more"
          containerStyles="rounded-full hover:border-non hover:ring-2 hover:ring-primary-blue  bg-primary-blue w-full py-[16px] text-white text-[14px] leading-[17px] font-bold "
          btnType="button"
          handleClick={() => setIsOpen(true)}
          rightIcon="/right-arrow.svg"
        />
      </div>
      <CarDetails isOpen={isOpen} close={()=>setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
