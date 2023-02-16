import Image from "next/image";
import {Title} from "../../components/Title";
import { Layout } from "../../components/Layout";

export default function ChisiamoPage() {
  return (
    <Layout>
      <div>
        <Title title={'CHI SIAMO'} />
        <p className="text-white text-xl m-4 md:m-8">
          Siamo un&apos;azienda che vanta più di 10 anni di esperienza nel settore
          del Car Detailing. <br />
          <br />
          Siamo certificati IDA (International Detailing Association) e ci
          distinguiamo per l&apos;alta qualità del nostro lavoro artigianale,
          personalizzato e curato in ogni dettaglio. <br />
          <br />
          La tua comodità è importante per noi, per questo offriamo servizi a
          domicilio. <br />
          La soddisfazione del cliente è la nostra massima priorità e ci
          impegniamo a fornire sempre un servizio eccellente.
        </p>
        <div className="flex flex-col lg:items-center">
          <Image
            className="p-4 md:w-7/12 md:m-auto lg:w-8/12"
            src="/img/chisiamoimg.jpg"
            width={1920}
            height={1080}
            alt="Tonga's Shine - Chi siamo"
          />
          <h2 className="text-white mb-28 p-4 text-center font-['Mr_Dafoe'] text-3xl">
            “Esperienza e passione si uniscono <br /> per ottenere il miglior
            risultato”
          </h2>
        </div>
      </div>
    </Layout>
  );
}
