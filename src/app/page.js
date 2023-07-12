"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import AlaUne from "@/components/AlaUne";
import Test3 from "@/components/Test3";
import ScrollText from "@/components/ScrollText";
import ForPro from "@/components/ForPro";
import VideoIntro from "@/components/VideoIntro";

// eslint-disable-next-line no-unused-vars
export default function Home() {
  const [videos, setVideos] = useState([]);
  const { data: session, status } = useSession();
  const [conect, setConect] = useState(false);
  useEffect(() => {
    if (status === "authenticated") {
      setConect(true);
    } else {
      setConect(false);
    }
    console.log(session?.user.id);
    console.log(session?.user);
  }, [status]);

  useEffect(() => {
    fetch("http://localhost:3000/api/test")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  const like = (e) => {
    // post like fetch

    fetch("http://localhost:3000/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        userId: session.user.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const items = ["/1.jpg", "/1.jpg", "/1.jpg", "./1.jpg"];
  const itemWidth = 300; // Définis ici la largeur de chaque image (en pixels)
  const itemHeight = 200; // Définis ici la hauteur de chaque image (en pixels)

  return (
    <>
      <Card />
      <VideoIntro />
      <AlaUne />
      <ForPro />
    </>
  );
}
