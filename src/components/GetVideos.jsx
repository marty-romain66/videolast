
import React from 'react'
import { PrismaClient } from '@prisma/client'
import { useEffect } from 'react'
export default  function GetVideos() {
    const prisma = new PrismaClient()
    useEffect(() => {
const videos =  prisma.videos.findMany({
  include: {
    user: true
  }
})
    }, [])
  return (
    <div>{
        videos.map((video) => {
          return (
            <div key={video.id}>
              <h2>{video.name}</h2>
             
            </div>
    
          )
        })
      }</div>
  )
}
