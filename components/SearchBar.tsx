"use client";

import { useState } from "react";
import { SearchManufacture } from ".";

const SearchBarBtn = ({ otherClasses }: { otherClasses: string }) => {
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}></button>;
};

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
        {/* <SearchBarBtn otherClasses="sm:hidden"/> */}
      </div>
    </form>
  );
};

export default SearchBar;
