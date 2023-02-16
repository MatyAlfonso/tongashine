import Image from "next/image";

export const HeroImage = () => {
  return (
    <Image
      className="mt-6 md:w-3/4 md:absolute md:-z-10 md:right-0 lg:w-9/12 lg:m-0"
      src="/img/lambo.png"
      width={1920}
      height={1080}
      alt="Lamborghini picture"
    />
  );
};
