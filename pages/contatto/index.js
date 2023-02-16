import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function ContattoPage() {
  return (
    <Layout>
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
    </Layout>
  );
}
