import Image from "next/image";
import Layout from "../components/Layout";

const nosotros = () => {
  return (
    <Layout paina={"Nosotros"}>
      <div className="w-full h-auto mt-20">
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] mx-auto">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center py-6 md:py-7 lg:py-8 xl:py-10 tracking-widest">
            Nuestra Historia
          </h2>

          <div className="w-full flex flex-col md:flex-row md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl gap-3">
            <div className="w-full md:min-w-[350x] max-w-[500px] mx-auto">
              <Image
                src="/img/nosotros.jpg"
                alt="nosotros"
                layout="responsive"
                width="600"
                height="800"
                objectFit="cover"
                priority="true"
              />
            </div>

            <div className="md:w-full md:max-w-none leading-6 lg:leading-8 max-w-[500px] mx-auto">
              <p>La Mila Grosa abrió sus puertas en Enero del 2011.</p>
              <p>
                Fieles a la fusión de los mejores ingredientes locales e
                internacionales nos mantenemos firmes con nuestra premisa,
                ofrecerte calidad, frescura y confianza. Atentos al crecimiento
                de paladares exigentes que requieren constantes avances en
                propuestas gastronómicas, innovados en nuestro menú, siguiendo
                las últimas tendencias nutricionales. Así siempre llegaran a tu
                mesa productos sumamente confiables y de inmejorable calidad.
              </p>
              <p>
                Posicionados actualmente como referente en el rubro, La Mila
                Grosa es un emprendimiento gastronomico en plena expansión que
                se consolida día a día y por eso hoy, una vez más, queremos
                darte las gracias por acompañarnos, por elegirnos y confiar en
                nuestra propuesta y sobre todo en nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default nosotros;
