import React, { use } from "react";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { InView } from "react-intersection-observer";
import { useSession } from 'next-auth/react'
import { PrismaClient } from "@prisma/client";
import Like from "../Like";
import ModalMap from "../ModalMap";
import ModalArticle from "../ModalArticle";
import ModalDiscount from "../ModalDiscount";


import HeartComponent from "../HeartComponent";
import ModalComment from "../ModalComment";



    const Video2 =  ({ src, id, description, author,map,discount,article,comment }) => {
      const { data: session, status } = useSession()
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [inScreen, setInScreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [deleteLike, setDeleteLike] = useState(false);


  const videoRef = useRef();
  const likeRef = useRef();

  const [isActive, setIsActive] = useState(false);
const allComment = comment.map((comment) => comment.text)
console.log(allComment)


  useEffect(() => {
    console.log("inScreen v", inScreen);
    if (inScreen) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [inScreen]);

  let handleVideo = () => {
    if (!videoRef.current) return false;
    if (videoRef.current.paused) playVideo();
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
    }
  };

  let pauseVideo = () => {
    if (!videoRef.current) return false;
    videoRef.current.pause();
  };

  let playVideo = () => {
    if (!videoRef.current) return false;
    videoRef.current.play();
  };


  const addLike = (userId, videoId) => {
    console.log(session?.user.id )
    fetch("http://localhost:3000/api/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
        setLikeCount(likeCount + 1);
        setIsActive(!isActive);
      })
      .catch((error) => {
        console.error("Une erreur est survenue :", error);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:3000/api/like/${id}/${session?.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Erreur lors de la requête");
        }
        return res.json();
      })
      .then((data) => {
    function test(){
      data.like.map((like) => like.userId === session?.user.id ? setDeleteLike([like.id, session?.user.id]) : null) 
    }
    test()

        setLikeCount(data.count);
       
        if(data.dejaLike===true){
          setIsActive(true)
        }
        console.log(data.dejaLike)
      })
      .catch((error) => {
        console.error("Une erreur est survenue :", error);
      });
  }, [likeCount]);

  
  return (
    <InView
      key={id}
      as="div"
      onChange={(inView, entry) => {
        setInScreen(inView);
        if (inView) {
          playVideo();
        } else {
          pauseVideo();
        }
      }}
      className="  h-[90%]  m-auto mb-36 relative snap-start bg-gray-700 "
      threshold={0.5}
    >
      
      <video
    
        ref={videoRef}
        controls={false}
        className="w-full h-full "
        onClick={handleVideo}
        src={src}
        loop
        playsinline={true}
        disableRemotePlayback={true}
      ></video>
   
      <div className=" absolute bottom-6 left-6 m-2  p-8 bg-white bg-opacity-25 rounded-xl"><p>
        {description? description : null  }
        </p>
        
        <p> {author? author : null} </p>
        
        
        
        </div>
      <div className="absolute top-0  right-0 mr-8  w-[10%] h-full flex flex-col justify-center gap-11 items-center">
      <IconContext.Provider value={{ size: "2.5rem" }}>
      <div className="stage flex flex-col ">
  <div className={`heart ${isActive ? 'is-active' : ''}`} onClick={()=>{addLike(session?.user.id, id)}}></div>
  <p className=" text-center"> {likeCount} </p>
</div>
      
        
        <FaShare/>
        {map?  <ModalMap/> : null}
     
        {article?  <ModalArticle  /> : null}
       
        {discount?  <ModalDiscount discount={discount}/> : null}
        { comment[0]?.id ? <ModalComment userId={session.user.id} videoId={id}  comment={comment} allComment={allComment}/> : null}


       
        </IconContext.Provider>
     
   
      </div>
    
    </InView>
  );
}
export default Video2;
