import { CustomFilter, Hero, SearchBar } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden w-full">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}
