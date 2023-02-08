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
    <div className="my-20 flex flex-col">
      <Image
        className="p-6"
        src={src}
        width={1920}
        height={1080}
        alt={`${title} image`}
      />
      <p className="text-redtsd text-4xl font-bold text-center">{title}</p>
      <p className="text-white text-xl text-center font-bold p-4">{subtitle}</p>

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
  );
};
