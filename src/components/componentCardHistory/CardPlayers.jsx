
import React from "react";
// import {}

export default function CardPlayers({ slug, name, id, image }){
     return (
    
      <section>
      <div className="relative w-[416px] h-[496px] overflow-hidden bg-cover bg-no-repeat shadow-md group mb-9">
        <img
          src={image}
          // src="https://4kwallpapers.com/images/wallpapers/lionel-messi-football-player-argentinian-praying-hands-3840x2160-3275.jpg"
          className="w-full h-[500px] object-cover"
          alt="Lourvre"
        />
        <div className="absolute bottom-0 ps-8 py-4 w-full overflow-hidden bg-white transition-all duration-500 ease-in-out h-[70px] group-hover:h-[100px]">
          <div className="opacity-100  group-hover:opacity-100  group-hover:text-lg transition-opacity duration-500 ease-in-out">
            <h1 className="text-[35px]  font-bold">
              {name}
            </h1>
          </div>
        </div>
        <div className="absolute top-0 right-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
          <span className="text-white font-black text-[120px] pr-5 ">{10}</span>
        </div>
       
        <div className=" relative bottom-40 left-0 ps-8 mb-5 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"
            alt="Cambodia Flag"
            className="w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
    </section> 

  );
}
