import Image from "next/image";

const nosotros = () => {
  return (
    <div className="w-full h-screen ">
      <h2 className="text-2xl font-bold my-10 text-center">
        Acerca de nosotros
      </h2>
      <div className="max-w-[80%] flex justify-center gap-x-2 mx-auto ">
        <div className="w-1/3 h-auto">
          <Image
            src="/img/nosotros.jpg"
            alt="cheff"
            layout="responsive"
            width="600"
            height="800"
            // objectFit="cover"
          />
        </div>
        <div className="max-w-[40%]">
          <p>
            En la Mila Grosa buscamos satisfacer las necesidades gastronómicas
            de los clientes, ofreciendo alimentos y servicios con la más alta
            calidad, donde se sobrepasen las expectativas de los clientes
            pudiendo hacer, que siempre deseen volver a confiar en nuestros
            productos.
          </p>
          <p>
            Tomando como estrategia principal el mejoramiento continúo de los
            estrictos estándares de higiene y buen servicio a un precio justo.
          </p>
          <p>
            Nuestra vision es ser reconocidos en el ámbito nacional, como un
            grupo de trabajo original, sólido y profesional, con calidad humana
            y principios éticos, que ofrece servicios y productos de excelencia
            a sus clientes, posibilidades de desarrollo a su personal, trato
            justo a sus proveedores; transparencia y buenos manejos a las
            autoridades y colaboración en el desarrollo de la atracción
            turística en nuestra región
          </p>
        </div>
      </div>
    </div>
  );
};

export default nosotros;
