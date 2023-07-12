"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";

const posts = [
  {
    title: "Ou Mangez",
    href: "/manger",
    category: { name: "Restautants, fast-food, spécialitées", href: "#" },
    description:
      "Découvrez des nouveaux restaurants au quel vous n'avez jamais pensé aller. En un coup d'oeil, choisissez votre restaurant en fonction de vos envies . ",
    datetime: "2020-03-16",
    imageUrl: "./imageresto.jpg",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Quoi faire",
    href: "/sortir",
    category: { name: "Evénements, visites, festivitées", href: "#" },
    description:
      "Découvrez les événements, les visites, les festivitées, les activitées à faire, avez le format video, en un coup d'oeil, choisissez votre activité en fonction de vos envies . ",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "./festival.jpg",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Découvrir",
    href: "/decouvrir",
    category: { name: "Randonnées, plages, rivieres...", href: "#" },
    description:
      "Envie d' un bon bol d'air frais, de nature, de verdure, de paysages, de randonnées, de plages, de rivieres, de lacs, de montagnes, de forêts, de cascades, de grottes... C'est par ici !",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "./plage.jpg",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/sortir",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Produits locaux",
    href: "/produits-locaux",
    category: { name: "Artisanat", href: "#" },
    description:
      "Découvrez les produits locaux, les artisans, les producteurs, les créateurs, les artistes, les commerçants des Pyrénées Orientales, sous un autre angle . ",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "./plage.jpg",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/produits-locaux",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

// export default function Card() {
const Card = ({ conect }) => {
  const [idCard, setIdCard] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState("");
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".card", {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.1,
    });
    tl.to(".card", {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, []);
  useEffect(() => {
    if (toggle) {
      console.log("toggle");
    }
  }, [toggle]);

  const chooseId = (id) => {
    if (id === "/manger" || id === "/decouvrir") {
      return "card1";
    } else if (id === "/sortir" || id === "/produits-locaux") {
      return "card2";
    }
  };

  useEffect(() => {
    console.log(conect);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#card",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.5 }
    );
    tl.to("#bg", { opacity: 1, duration: 1, ease: "power2.out" });
  }, []);

  return (
    <div
      id="bg"
      className="relative min-h-[70vh]  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      
      <div className="relative flex h-full  justify-center items-center flex-col mx-auto">
        <div className="text-center">
          <h1 className="mt-3 heading2  title  mx-auto text-6xl lg:text-9xl sm:mt-4">
            Recherchez autrement
          </h1>
        </div>
        <div
          className="mt-12 max-w-lg mx-auto grid gap-12
           lg:grid-cols-4 lg:max-w-none"
        >
          {posts.map((post) => (
            <Link
              onMouseEnter={() => {
                setToggle(true), setToggle2(post.href);
              }}
              onMouseLeave={() => {
                setToggle(false), setToggle2("");
              }}
              href={post.href}
              key={post.href}
              id={chooseId(post.href)}
              className="flex min-h-[35vh] card  flex-col hover:scale-125 rounded-xl shadow-lg "
            >
              <div className="flex-shrink-0 h-full relative ">
                <div className="h-full w-full  rounded-xl relative">
                  <img
                    className="h-full w-full object-cover rounded-xl"
                    src={post.imageUrl}
                    alt=""
                  />
                  {toggle && toggle2 === post.href && (
                    <div className=" ok   bg-black  bg-opacity-50 absolute top-0">
                      <p className="mt-3 title2  ">{post.description}</p>
                    </div>
                  )}
                </div>
                <p className="absolute bottom-[-22px] capitalize w-full text-center title">
                  {post.title}
                </p>
              </div>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
