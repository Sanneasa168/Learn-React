import React from "react";
import Hero from "../../assets/sportsPage/HeroSectionSport.jpg";

export default function SportClub() {
  return (
    <>
      <header className="relative">
        <img
          className="object-cover h-[585px] w-full top-0 -z-30"
          src={Hero}
          alt="Background image description"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div className="w-10/12 mx-auto">
          <div className="absolute top-[450px] text-white font-extrabold">
            <div className="inline-block">
              <h1 className="text-[56px]">ក្លឹបកីឡា</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
