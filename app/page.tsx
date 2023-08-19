"use client";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";

import Image from "next/image";

export default async function Home({ searchParams }: FilterProps) {
  const { manufacture, year, limit, fuel, model } = searchParams;
  const allCars = await fetchCars({
    manufacture: manufacture || "",
    year: year || 2020,
    limit: limit || 10,
    fuel: fuel || "",
    model: model || "",
  });

  const isDataEmpty = !allCars || allCars.length < 1 || !Array.isArray(allCars);

  return (
    <main className="overflow-hidden w-full">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
