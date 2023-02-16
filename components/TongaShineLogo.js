import Image from "next/image";

export const TongaShineLogo = () => {
  return (
    <Image
      className="flex justify-center m-auto w-2/5 md:w-1/4 xl:w-1/5 2xl:w-[15%]"
      src="/img/tongashine-logo.png"
      width={1920}
      height={1080}
      alt="Tonga's Shine Logo"
    />
  );
};
