"use client";
import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Video2 from "./Video2";
import addLike from "../LikeCount";
gsap.registerPlugin(ScrollTrigger);
export default function Player({ path }) {
  const snapContainerRef = useRef(null);
  const videoRefs = useRef([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const getVideo = async () => {
      const res = await fetch(`/api/video`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          category: path,
        },
      });
      console.log(path);
      const videos = await res.json();
      console.log(videos);
      setVideo(videos);
    };
    getVideo();
  }, [path]);

  useEffect(() => {
    addLike();
  }, []);

  useEffect(() => {
    const snapContainer = snapContainerRef.current;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: snapContainer,
    });

    videoRefs.current.forEach((videoRef) => {
      ScrollTrigger.create({
        trigger: videoRef,
        start: "top center",
        onEnter: () => {
          setIsVideoPlaying(true);
          console.log("enter");
        },
        onLeave: () => {
          setIsVideoPlaying(false);
        },
        onEnterBack: () => {
          setIsVideoPlaying(true);
        },
        onLeaveBack: () => {
          setIsVideoPlaying(false);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-scroll snap-mandatory snap-y no-scrollbars overflow-x-hidden ">
      {video &&
        video?.map((e, id) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <>
              <Video2
                key={e.id}
                src={e.url}
                id={e.id}
                comment={e.comment}
                description={e.description}
                author={e.author}
                map={e.map}
                article={e.article}
                discount={e.discount}
              />
            </>
          );
        })}
    </div>
  );
}
