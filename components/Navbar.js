import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { TongaShineLogo } from "./TongaShineLogo";
import { HomeIcon } from "./HomeIcon";
import { ChiSiamoIcon } from "./ChiSiamoIcon";
import { ServiziIcon } from "./ServiziIcon";
import { ContattoIcon } from "./ContattoIcon";

import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const Navbar = () => {
  const router = useRouter();
  const location = router.pathname;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      {isDesktop ? (
        <nav className="flex">
          <Link href="/" className="flex-1">
            <TongaShineLogo />
          </Link>
          <div className="flex p-4 lg:items-center flex-1">
            <Link href="/">
              <p
                className={`font-bold italic p-4 ${
                  location === "/"
                    ? "text-yellowtsd underline decoration-redtsd decoration-2 underline-offset-4"
                    : "text-white"
                }`}
              >
                HOME
              </p>
            </Link>
            <Link href="/chisiamo">
              <p
                className={`font-bold italic p-4 whitespace-nowrap ${
                  location === "/chisiamo"
                    ? "text-yellowtsd underline decoration-redtsd decoration-2 underline-offset-4"
                    : "text-white"
                }`}
              >
                CHI SIAMO
              </p>
            </Link>
            <Link href="/servizi">
              <p
                className={`font-bold italic p-4 ${
                  location === "/servizi"
                    ? "text-yellowtsd underline decoration-redtsd decoration-2 underline-offset-4"
                    : "text-white"
                }`}
              >
                SERVIZI
              </p>
            </Link>
            <Link href="/contatto">
              <p
                className={`font-bold italic p-4 ${
                  location === "/contatto"
                    ? "text-yellowtsd underline decoration-redtsd decoration-2 underline-offset-4"
                    : "text-white"
                }`}
              >
                CONTATTO
              </p>
            </Link>
            <div className="flex p-4">
              <a href="https://www.facebook.com/TongasShineDetailing/">
                <BsFacebook className="inline mx-1 text-white" size={"30"} />
              </a>
              <a href="https://www.instagram.com/tongashine/?hl=es">
                <AiOutlineInstagram
                  className="inline mx-1 text-white"
                  size={"30"}
                />
              </a>
              <a href="https://wa.link/prx28v">
                <AiOutlineWhatsApp
                  className="inline mx-1 text-white"
                  size={"30"}
                />
              </a>
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <Link href="/">
            <TongaShineLogo />
          </Link>
          <div className="text-white h-[10%] w-full fixed bottom-0 z-40 m-auto bg-black flex justify-evenly items-center">
            <Link href="/">
              <HomeIcon />
            </Link>
            <Link href="/chisiamo">
              <ChiSiamoIcon />
            </Link>
            <Link href="/servizi">
              <ServiziIcon />
            </Link>
            <Link href="/contatto">
              <ContattoIcon />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
