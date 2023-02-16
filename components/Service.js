import Image from "next/image";

export const Service = ({
  title,
  subtitle,
  standard,
  piccolo,
  medio,
  grande,
  src,
}) => {
  return (
    <div className="flex flex-col md:m-8 lg:even:flex-row-reverse lg:odd:flex-row 2xl:w-[50%] 2xl:m-auto">
      <Image
        className="p-6 md:w-8/12 md:m-auto lg:w-3/6 xl:w-5/12 2xl:w-5/12"
        src={src}
        width={1920}
        height={1080}
        alt={`${title} image`}
      />
      <div className="lg:flex lg:flex-col lg:justify-center 2xl:w-[40%] 2xl:m-auto">
        <p className="text-redtsd text-4xl text-center font-bold">{title}</p>
        <p className="text-white text-xl text-center font-bold p-4">
          {subtitle}
        </p>
        <ul className="text-center">
          {standard.length === 1 ? (
            <li className="text-yellowtsd text-2xl p-2">{standard}</li>
          ) : (
            <>
              <li className="text-white text-2xl p-2">
                Piccolo <i className="text-yellowtsd text-2xl">{piccolo}</i>
              </li>
              <li className="text-white text-2xl p-2">
                Medio <i className="text-yellowtsd text-2xl">{medio}</i>
              </li>
              <li className="text-white text-2xl p-2">
                Grande <i className="text-yellowtsd text-2xl">{grande}</i>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
