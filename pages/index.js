import { HeroImage } from "../components/HeroImage";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center h-[calc(100vh-120px)] xs:h-[calc(100vh-140px)] lg:h-4/5 relative md:static">
        <HeroImage />
        <div className="flex flex-col absolute md:left-[17%] md:top-[60%] top-[40%]">
          <h1 className="text-yellowtsd text-6xl font-bold italic text-center md:text-7xl lg:ml-8 lg:text-7xl mb-2">
            CAR DETAILING
          </h1>
          <h3 className="text-redtsd text-2xl font-bold text-center m-2">
            ¡FAI TORNARE LA TUA <br /> AUTO COME NUOVA!
          </h3>
          <Button text={"SCOPRI I NOSTRI SERVIZI"} href={`/servizi`} />
        </div>
      </div>
    </Layout>
  );
}
