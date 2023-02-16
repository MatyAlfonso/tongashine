import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Title } from "../../components/Title";
import { Layout } from "../../components/Layout";

export default function ChisiamoPage() {
  const router = useRouter();
  const location = router.pathname;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <Layout>
      {isDesktop ? (
        <>
          <div className="lg:flex lg:mt-44 lg:mb-20 2xl:w-3/6 2xl:mx-auto">
            <div className="lg:flex lg:flex-col lg:justify-center xl:pl-10">
              <Title title={"CHI SIAMO"} />
              <p className="text-white text-xl m-4 md:m-8 xl:text-2xl">
                Siamo un&apos;azienda che vanta più di 10 anni di esperienza nel
                settore del Car Detailing. <br />
                <br />
                Siamo certificati IDA (International Detailing Association) e ci
                distinguiamo per l&apos;alta qualità del nostro lavoro
                artigianale, personalizzato e curato in ogni dettaglio. <br />
                <br />
                La tua comodità è importante per noi, per questo offriamo
                servizi a domicilio. <br />
                La soddisfazione del cliente è la nostra massima priorità e ci
                impegniamo a fornire sempre un servizio eccellente.
              </p>
            </div>
            <div className="flex flex-col lg:items-center">
              <Image
                className="p-4 md:w-7/12 md:m-auto lg:w-10/12 xl:w-8/12"
                src="/img/chisiamoimg.jpg"
                width={1920}
                height={1080}
                alt="Tonga's Shine - Chi siamo"
              />
            </div>
          </div>
          <h2 className="text-white p-4 text-center font-['Mr_Dafoe'] text-4xl">
            “Esperienza e passione si uniscono <br /> per ottenere il miglior
            risultato”
          </h2>
        </>
      ) : (
        <div className="lg:flex lg:mt-60 lg:mb-20">
          <div className="lg:flex lg:flex-col">
            <Title title={"CHI SIAMO"} />
            <p className="text-white text-xl m-4 md:m-8 xl:pl-20">
              Siamo un&apos;azienda che vanta più di 10 anni di esperienza nel
              settore del Car Detailing. <br />
              <br />
              Siamo certificati IDA (International Detailing Association) e ci
              distinguiamo per l&apos;alta qualità del nostro lavoro
              artigianale, personalizzato e curato in ogni dettaglio. <br />
              <br />
              La tua comodità è importante per noi, per questo offriamo servizi
              a domicilio. <br />
              La soddisfazione del cliente è la nostra massima priorità e ci
              impegniamo a fornire sempre un servizio eccellente.
            </p>
          </div>
          <div className="flex flex-col lg:items-center">
            <Image
              className="p-4 md:w-7/12 md:m-auto lg:w-10/12"
              src="/img/chisiamoimg.jpg"
              width={1920}
              height={1080}
              alt="Tonga's Shine - Chi siamo"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
