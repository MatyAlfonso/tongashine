import { Layout } from "../../components/Layout";

import { Service } from "../../components/Service";

export default function ServiziPage({ data }) {
  return (
    <Layout>
      <h1 className="text-yellowtsd text-center text-4xl font-bold italic m-8">
        I NOSTRI SERVIZI
      </h1>
      {data.services.map((service) => (
        <Service
          key={service.id}
          title={service.title}
          subtitle={service.subtitle}
          standard={service.price.map((p) => p.standard)}
          piccolo={service.price.map((p) => p.piccolo)}
          medio={service.price.map((p) => p.medio)}
          grande={service.price.map((p) => p.grande)}
          src={service.src}
        />
      ))}
      <div className='h-1/6'>""</div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/servizi`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
