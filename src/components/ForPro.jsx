
import React, { useState } from "react";
import ScrollText from "./ScrollText";
import Link from "next/link";
import { createContext } from 'react';
export default function ForPro() {
  const [velo, setVelo] = useState(50);
  const VeloContext = createContext(velo);

  return (
    //contexte

  

    <Link href="/pro" onMouseOver={()=> setVelo(200)}  >
      <VeloContext.Provider value={velo}>
    <div id="scale"  className="w-[80%]  mx-auto bg-[#ffe95c] rounded-xl p-4 ">
      <div className="flex items-center justify-center gap-4">
      <ScrollText  widthDef={"200px"} heightDef={"50px"}  /> <div><h2 className="title text-black">Les Pros, vous voullez travailler avec nous, c'est ici!</h2></div><ScrollText widthDef={"200px"} sens={false} heightDef={"50px"} />
      </div>
    
    </div>
    </VeloContext.Provider>
    </Link>
  );
}
