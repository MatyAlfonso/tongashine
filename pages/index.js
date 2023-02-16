import Link from "next/link";

import { HeroImage } from "../components/HeroImage";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center h-[calc(100vh-120px)] xs:h-[calc(100vh-140px)] lg:h-4/5 relative md:static">
        <HeroImage />
        <div className="flex flex-col absolute top-[40%] md:left-[17%] md:top-[60%] lg:top-[40%] lg:left-20 2xl:left-[25%]">
          <h1 className="text-yellowtsd text-6xl font-bold italic text-center lg:text-left md:text-7xl lg:text-8xl mb-2 2xl:text-9xl">
            CAR <br /> DETAILING
          </h1>
          <h3 className="text-redtsd text-2xl font-bold text-center m-2 lg:text-left lg:text-3xl">
            ¡FAI TORNARE LA TUA AUTO COME NUOVA!
          </h3>
          <Link href={`/servizi`} className='lg:w-3/5 text-center lg:text-left'>
            <Button text={"SCOPRI I NOSTRI SERVIZI"} />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
