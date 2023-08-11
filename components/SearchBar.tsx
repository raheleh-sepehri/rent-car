"use client";

import { useState } from "react";
import { SearchManufacture } from ".";

const SearchBar = () => {
    const [manufacture,setManufacture]=useState("")
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacture manufacture={manufacture} setManufacture={setManufacture}  />
      </div>
    </form>
  );
};

export default SearchBar;
