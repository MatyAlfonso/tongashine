import { useRouter } from "next/router";

import Link from "next/link";

import { TongaShineLogo } from "./TongaShineLogo";
import { HomeIcon } from "./HomeIcon";
import { ChiSiamoIcon } from "./ChiSiamoIcon";
import { ServiziIcon } from "./ServiziIcon";
import { ContattoIcon } from "./ContattoIcon";

export const Navbar = () => {
  return (
    <>
      <Link href="/">
        <TongaShineLogo />
      </Link>
      <nav className="text-white h-[10%] w-full fixed bottom-0 z-40 m-auto bg-black flex justify-evenly items-center">
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
      </nav>
    </>
  );
};
