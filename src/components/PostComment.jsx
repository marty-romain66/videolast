
import React, { use, useState } from 'react'

export default function PostComment({videoId, userId}) {
    const  [text,setText] = useState("")

const PostComment = (e) => {
    console.log(userId, videoId);
    
    fetch("http://localhost:3000/api/comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            userId,
            videoId
        }),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Erreur lors de la requête");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            
        })
        .catch((error) => {
            console.error("Une erreur est survenue :", error);
        });
};


  return (
    <div>
    <label  className="block text-sm font-medium text-gray-700">
     Commantaire
    </label>
    <div className="mt-1">
      <input onChange={(e)=>{setText(e.target.value)}}
        type="comment"
        name="comment"
        id="comment"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="votre commantaire"
      />

    </div>
    <div className="mt-4">
    <button onClick={(e)=>{PostComment(e)}}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 mr-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                   
                    >
                     Envoyer ! 
                    </button>
                    </div>
  </div>
  )
}
