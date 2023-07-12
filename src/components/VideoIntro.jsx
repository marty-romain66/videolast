import React from "react";

export default function VideoIntro() {
  return (
    <div className=" container flex justify-center flex-col items-center ">
      <div>
        <h2 className=" text-9xl title heading2 mb-4 ">Bon plan</h2>
      </div>
      <div>
        <p className="text-center text-2xl">
            Regardez nos vidéos pour découvrir les bons plans de la région et gagner des bon de réduction !
            </p>
            <p className="text-center text-2xl">
              Chaque proffessionnel vous propose un bon de réduction pour vous faire découvrir son activité.
            </p>

      </div>
      <div className="flexc justify-center">
        <video muted autoPlay loop src="https://familyindustrieslive.com/wp-content/uploads/2023/06/hero-gifs-6-1.webm"></video>
      </div>
      
    </div>
  );
}
