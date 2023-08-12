"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && (
        <div className="h-6 w-6 relative">
          <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
