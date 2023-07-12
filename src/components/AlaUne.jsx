import React, { useEffect } from "react";
// import gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function AlaUne() {

   useEffect(() => {
    gsap.fromTo("#test",{
      scale:0.7
    }
    ,{
      scale:1,
      duration:1,
      ease:"ease-in-out",
      scrollTrigger:{
        trigger:"#test",
        start:"top 50%",
        end:"bottom 50%",
        scrub:1,
        onScrubComplete: function () {
          console.log("done");
        }
        
  
      }
    })
  }, [])
  return (
    <div className="flex justify-center h-[130vh] relative mb-14 ">
      <div id="test" className="h-[100vh]  rounded-3xl  bg-black flex flex-col lg:flex-row  sticky top-0  ">
        <div className="lg:w-[50%]  h-[100vh] ">
          {" "}
          <img
            className="w-full h-full object-cover"
            src="./1.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-[50%] bg-[#ff5c7d] h-[100vh] lg:p-12 p-2  flex justify-center items-center flex-col">
            <h2 className="title text-black mb-6">Activitées a la une ! </h2>
            <p className="title text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione earum, quas velit accusantium enim consequatur in temporibus ad cupiditate molestiae sapiente vero voluptatum deserunt eligendi molestias, eum magnam, dolores totam.</p>
        </div>
      </div>
    
    </div>
  );
}
