import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { Service } from "../../components/Service";

export default function ServiziPage() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await fetch("/api/servizi");
    const data = await res.json();
    setServices(data.services);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Layout>
      <button
        onClick={handleScrollToTop}
        className="text-4xl text-yellowtsd bottom-20 right-0 fixed p-6 hover:scale-110"
      >
        <svg width="64" height="64" viewBox="0 0 64 64">
          <path
            d="M29.3333 42.6668H34.6666V31.4668L38.9333 35.7335L42.6666 32.0002L31.9999 21.3335L21.3333 32.0002L25.0666 35.7335L29.3333 31.4668V42.6668ZM31.9999 58.6668C28.311 58.6668 24.8444 57.9664 21.5999 56.5655C18.3555 55.1664 15.5333 53.2668 13.1333 50.8668C10.7333 48.4668 8.8337 45.6446 7.43459 42.4002C6.0337 39.1557 5.33325 35.689 5.33325 32.0002C5.33325 28.3113 6.0337 24.8446 7.43459 21.6002C8.8337 18.3557 10.7333 15.5335 13.1333 13.1335C15.5333 10.7335 18.3555 8.83305 21.5999 7.43216C24.8444 6.03305 28.311 5.3335 31.9999 5.3335C35.6888 5.3335 39.1555 6.03305 42.3999 7.43216C45.6444 8.83305 48.4666 10.7335 50.8666 13.1335C53.2666 15.5335 55.1661 18.3557 56.5652 21.6002C57.9661 24.8446 58.6666 28.3113 58.6666 32.0002C58.6666 35.689 57.9661 39.1557 56.5652 42.4002C55.1661 45.6446 53.2666 48.4668 50.8666 50.8668C48.4666 53.2668 45.6444 55.1664 42.3999 56.5655C39.1555 57.9664 35.6888 58.6668 31.9999 58.6668ZM31.9999 53.3335C37.9555 53.3335 42.9999 51.2668 47.1332 47.1335C51.2666 43.0002 53.3332 37.9557 53.3332 32.0002C53.3332 26.0446 51.2666 21.0002 47.1332 16.8668C42.9999 12.7335 37.9555 10.6668 31.9999 10.6668C26.0444 10.6668 20.9999 12.7335 16.8666 16.8668C12.7333 21.0002 10.6666 26.0446 10.6666 32.0002C10.6666 37.9557 12.7333 43.0002 16.8666 47.1335C20.9999 51.2668 26.0444 53.3335 31.9999 53.3335Z"
            fill="#F2D027"
          />
        </svg>
      </button>
      <Title title={"I NOSTRI SERVIZI"} />
      {services.map((service) => (
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
      <div className="m-20">.</div>
    </Layout>
  );
}

/* export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_FETCH_URL}api/servizi`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
} */
