
import React from 'react'
import { PrismaClient } from '@prisma/client'
import addVideo from '../_actionVideo'

export default function AdminVideo() {

// const submit= async (e)=>{
//   "use server"
//   const prisma = new PrismaClient();
//   const postVideo = await prisma.video.create({
//     data: {
//       name: e.target.name.value,
//       description: e.target.description.value,
//       url: e.target.url.value,
//       userId : 'clja06fxs0009urtgt14hr016'
//     },
//   })
// }



  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg h-full">
    <div className="px-4 py-5 sm:p-6">
    <form action={(e)=>{addVideo(e,'clja06fxs0009urtgt14hr016')}} >
    <div className="border my-6 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        Nom de la vidéo
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        
      />
      
    </div>
    <div className="border my-6 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        Description de la vidéo
      </label>
      <input
        type="text"
        name="description"
        id="description"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        
      />
      
    </div>
    <div className="border my-6 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
       Url
      </label>
      <input
        type="text"
        name="url"
        id="url"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        
      />
      
    </div>
    <div className="border my-6 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
       Catégorie
      </label>
      <input
        type="text"
        name="categorie"
        id="categorie"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        
      />
      
    </div>
    <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Ajouter
      </button>
    </form>






    </div>
  </div>
  )
}
