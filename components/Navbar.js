import { useRouter } from "next/router";

import { TongaShineLogo } from "./TongaShineLogo";
import { HomeIcon } from "./HomeIcon";
import { ChiSiamoIcon } from "./ChiSiamoIcon";
import { ServiziIcon } from "./ServiziIcon";
import { ContattoIcon } from "./ContattoIcon";

export const Navbar = () => {
  const router = useRouter();
  const location = router.pathname;

  return (
    <>
      <TongaShineLogo />
      <nav className="text-white h-[10%] w-full fixed bottom-0 z-40 m-auto bg-black flex justify-evenly items-center">
        <HomeIcon />
        <ChiSiamoIcon />
        <ServiziIcon />
        <ContattoIcon />
      </nav>
    </>
  );
};
