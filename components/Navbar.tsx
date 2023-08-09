import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center padding-x py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="./logo.svg"
            alt="CarHub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          title="Sign In"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
