import Image from "next/image";

export const HeroImage = () => {
  return (
    <Image
      className="mt-6"
      src="/img/lambo.png"
      width={1920}
      height={1080}
      alt="Lamborghini picture"
    />
  );
};
