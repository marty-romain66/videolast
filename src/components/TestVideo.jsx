import React from 'react'

export default function TestVideo() {
  return (
    
    <div className="grid grid-cols-3 gap-4 w-full  h-screen">
      <div className="col-span-1 bg-gray-200">Colonne 1</div>
      <div className="col-span-1 bg-gray-300 flex items-center justify-center">
   
          <video className="object-cover w-full h-[80%]  my-auto" src="/4.mp4" controls></video>
       
      </div>
      <div className="col-span-1 bg-gray-200">Colonne 3</div>
    </div>
  
  )
}
