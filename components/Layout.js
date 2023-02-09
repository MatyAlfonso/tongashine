import Head from "next/head";

import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{"Tonga's Shine Detailing"}</title>
        <meta name="author" content="Matias Alfonso" />
        <link rel="shortcut icon" href="/img/tongashine-logo.png" />
        <meta
          name="description"
          content={`Sito web di Tonga's Shine Detailing - servizi di Detailing`}
        />
        <meta
          name="keywords"
          content={`detailing, tonga, tongashine, lucidatura, fanali, lucidatura fanali, one step, two step, correzione totale, pulizia interna, lavaggio auto `}
        />
        <meta property="og:title" content={`Tonga's Shine Detailing`} />
        <meta property="og:description" content={`Servizi di Detailing`} />
        <meta property="og:image" content="/img/tongashine-logo.png" />
      </Head>

      <Navbar />

      <main className='h-[calc(100vh-170px)]'>{children}</main>
    </div>
  );
};
