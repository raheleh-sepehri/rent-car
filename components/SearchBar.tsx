"use client";

import { useState } from "react";
import { SearchManufacture } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBarBtn = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={38}
        height={38}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [model, setModel] = useState("");
  const [manufacture, setManufacture] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacture === "" && model === "") {
      return alert("please fill in the search bar");
    }
    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacture.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacture: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacture) {
      searchParams.set("manufacture", manufacture);
    } else {
      searchParams.delete("manufacture");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
        <SearchBarBtn otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model icon"
          className="absolute w-[20px] h-[20px] ml-4 "
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
          className="searchbar__input"
        />
        <SearchBarBtn otherClasses="sm:hidden" />
      </div>
      <SearchBarBtn otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
