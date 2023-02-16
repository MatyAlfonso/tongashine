import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { TongaShineLogo } from "../../components/TongaShineLogo";

export default function ContattoPage() {
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
    <Layout>
      {isDesktop ? (
        <>
          <div className='2xl:w-2/6 2xl:m-auto'>
            <Title title={"CONTATTACI"} />
            <p className="text-white text-center text-2xl font-bold italic w-2/3 mx-auto">
              Scegli il modo che preferisci per comunicarti con noi.
            </p>
          </div>
          <div className="flex flex-col h-[calc(100vh-400px)] md:justify-center lg:flex-row 2xl:w-4/6 2xl:m-auto">
            <TongaShineLogo />
            <div className='lg:border-l-yellowtsd lg:border-2 lg:h-2/4 lg:my-auto'></div>
            <ul className="flex flex-col mx-auto lg:justify-center">
              <a href="https://wa.link/prx28v">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <AiOutlineWhatsApp className="inline m-2" size={"50"} />
                  <p className="inline lg:text-2xl">+39 351 608 7677</p>
                </li>
              </a>
              <a href="https://www.instagram.com/tongashine/?hl=es">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <AiOutlineInstagram className="inline m-2" size={"50"} />
                  <p className="inline lg:text-2xl">@tongashine</p>
                </li>
              </a>
              <a href="https://www.facebook.com/TongasShineDetailing/">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <BsFacebook className="inline m-2" size={"50"} />
                  <p className="inline lg:text-2xl">Tonga&apos;s shine detailing</p>
                </li>
              </a>
              <a href="mailto:tongashine@gmail.com">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <SiGmail className="inline m-2" size={"50"} />
                  <p className="inline lg:text-2xl">tongashine@gmail.com</p>
                </li>
              </a>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Title title={"CONTATTACI"} />
          <div className="flex flex-col h-[calc(100vh-400px)] md:justify-center">
            <p className="text-white text-center text-2xl font-bold italic w-2/3 mx-auto">
              Scegli il modo che preferisci per comunicarti con noi.
            </p>
            <hr className="m-8 h-1 bg-yellowtsd" />
            <ul className="flex flex-col mx-auto">
              <a href="https://wa.link/prx28v">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <AiOutlineWhatsApp className="inline m-2" size={"30"} />
                  <p className="inline">+39 351 608 7677</p>
                </li>
              </a>
              <a href="https://www.instagram.com/tongashine/?hl=es">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <AiOutlineInstagram className="inline m-2" size={"30"} />
                  <p className="inline">@tongashine</p>
                </li>
              </a>
              <a href="https://www.facebook.com/TongasShineDetailing/">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <BsFacebook className="inline m-2" size={"30"} />
                  <p className="inline">Tonga&apos;s shine detailing</p>
                </li>
              </a>
              <a href="mailto:tongashine@gmail.com">
                <li className="text-white text-xl font-bold italic p-2 hover:text-yellowtsd">
                  <SiGmail className="inline m-2" size={"30"} />
                  <p className="inline">tongashine@gmail.com</p>
                </li>
              </a>
            </ul>
          </div>
        </>
      )}
    </Layout>
  );
}
