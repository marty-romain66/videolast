import React from "react";
import { useRef, useState, useEffect, useLayoutEffect, useContext } from "react";
import { IconContext } from "react-icons/lib";
import { InView } from "react-intersection-observer";
import { useSession } from "next-auth/react";
import ModalMap from "../ModalMap";
import ModalArticle from "../ModalArticle";
import ModalDiscount from "../ModalDiscount";
import ModalComment from "../ModalComment";
import { MyContext, MyContextProvider } from "@/components/MyContext";

const Video2 = ({

  src,
  id,
  description,
  author,
  map,
  discount,
  article,
  comment,
}) => {
  const { data: session, status } = useSession();
  const [likeCount, setLikeCount] = useState(0);
  const [inScreen, setInScreen] = useState(false);
  const videoRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const {data, setData} = useContext(MyContext);

  const allComment = comment.map((comment) => comment.text);


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
    console.log(session?.user.id);
    fetch("http://localhost:3000/api/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        videoId,
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
        function test() {
          data.like.map((like) =>
            like.userId === session?.user.id
              ? setDeleteLike([like.id, session?.user.id])
              : null
          );
        }
        test();

        setLikeCount(data.count);

        if (data.dejaLike === true) {
          setIsActive(true);
        }
        console.log(data.dejaLike);
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
        console.log("inView", inView, entry);
        if(inView === true && entry.isIntersecting === true){
          setData(data + 1)
          console.log("data", data)
        }
        setInScreen(inView);
       
       
        setData(data + 1)
        if (inView) {
          playVideo();
         
        } else {
          // replay video on start
          videoRef.current.currentTime = 0;
          
          pauseVideo();

        }
      }}
      className="  h-[90%]  m-auto mb-36 relative snap-start bg-gray-700 "
      threshold={0.5}
    >
      <video
      
        ref={videoRef}
        controls
        className="w-full h-full "
        onClick={handleVideo}
        src={src}
        loop
        playsinline={true}
        disableRemotePlayback={true}
      ></video>

      <div className=" absolute bottom-6 left-6 m-2  p-8 bg-white bg-opacity-25 rounded-xl">
        <p>{description ? description : null}</p>

        <p> {author ? author : null} </p>
      </div>
      <div className="absolute top-0  right-0 mr-8  w-[10%] h-full flex flex-col justify-center gap-11 items-center">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <div className="stage flex flex-col ">
            <div
              className={`heart ${isActive ? "is-active" : ""}`}
              onClick={() => {
                addLike(session?.user.id, id);
              }}
            ></div>
            <p className=" text-center"> {likeCount} </p>
          </div>
<p>{id}</p>
          {map ? <ModalMap /> : null}

          {article ? <ModalArticle /> : null}

          {discount ? <ModalDiscount discount={discount} /> : null}
      
            <ModalComment
              userId={session?.user?.id}
              videoId={id}
              comment={comment}
              allComment={allComment}
            />
        
        </IconContext.Provider>
      </div>
    </InView>
  );
};
export default Video2;
