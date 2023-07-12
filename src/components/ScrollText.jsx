import React, { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const ScrollText = ({widthDef, heightDef,sens,}) => {
  
  const [velo, setVelo] = useState(50);
  const [dir, setDir] = useState(sens);
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    if (sens === false) {
      setDir("left");
    } else {
      setDir("right");
    }
  }, [sens]);
  
  useEffect(() => {
    if (dir === "right") {
      setRotate("");
    } else {
      setRotate("rotate-180");
    }
  }, [dir]);


  return (
    <div style={{width:widthDef}} onMouseOver={()=>{setVelo(200)}}
    onMouseOut={()=>{setVelo(50)}}>
    <Marquee
   
    speed={velo}
    autoFill={true}
    direction={dir}
    className=" rounded-2xl"
      style={{
        height: heightDef,
        width: widthDef,
        backgroundColor: "#ff5c7d",
      }}
    >
     <div className={"mx-2"+ " " + rotate }>
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M20.1022  7.75413C18.3339 7.60911 13.8575 6.00383 11.6599 0.533936L9.34011 1.46596C10.5042 4.36335 12.2262 6.38334 14.0036 7.74995H0V10.2499L14.0036 10.2499C12.2262 11.6166 10.5042 13.6365 9.34011 16.5339L11.6599 17.466C13.8575 11.9961 18.3339 10.3908 20.1022 10.2458L20.0512 8.99995L20.1022 7.75413Z"
          fill="#0F0F0F"
        ></path>{" "}
      </svg>
      </div>
     
     
    </Marquee>
    </div>
  );
};

export default ScrollText;
