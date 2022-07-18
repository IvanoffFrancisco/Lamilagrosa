import Image from "next/image";
import Layout from "../components/Layout";
import Mensaje from "../components/Mensaje";

import { TiHeartOutline } from "react-icons/ti";
import { GiCow, GiChicken } from "react-icons/gi";
import { useState } from "react";

const guarniciones = [
  {
    imagen:
      "https://images.rappi.com.ar/products/3d9120f7-f3ef-455c-8acd-cda3e4098807-1629229510757.png",
    nombre: "Papas fritas",
    ingredientes: ["papa"],
    precio: 688,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/1937429-1617886917008.jpg",
    nombre: "Papas fritas a caballo",
    ingredientes: ["Papa", "huevo frito"],
    precio: 825,
    id: 2,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546594-1617886929209.jpg",
    nombre: "Papas cheddar",
    ingredientes: ["Papa", "cheddar", "panceta crocante", "ciboulette"],
    precio: 825,
    id: 3,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546595-1617886953216.jpg",
    nombre: "Papas Criminales",
    ingredientes: [
      "Papas fritas",
      "cheddar",
      "cebolla de verdeo y colorada",
      "panceta ahumada",
      "huevo revuelto",
      "pimentón dulce",
    ],
    precio: 1100,
    id: 4,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/12368191-8b4c-4336-9b94-42fdb50e09d5-1628272889480.png",
    nombre: "Nachos",
    ingredientes: ["nachos", "salsa a eleccion"],
    precio: 600,
    id: 5,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546599-1617886889264.jpg",
    nombre: "Aros de Cebolla",
    ingredientes: ["Aros de cebolla", "salsa barbacoa"],
    precio: 653,
    id: 6,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/6287d03b-3082-4275-9de6-6a8e4f3d6732-1645118117215.png",
    nombre: "Triángulo de Provolone",
    ingredientes: ["provolone", "salsa criolla"],
    precio: 600,
    id: 7,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/e3cec65d-8bb5-48c5-bbdb-1d22284a3d5e-1650463523409.png",
    nombre: "Bastoncitos de Muzzarella",
    ingredientes: ["muzzarella", "salsa fileto"],
    precio: 600,
    id: 8,
  },
  {
    imagen: "https://images.rappi.com.ar/products/1784419-1617887000030.jpg",
    nombre: "Pechuguitas Crispy",
    ingredientes: ["Pechuguitas pollo", "muzzarella", "salsa barbacoa"],
    precio: 575,
    id: 9,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546624-1617888077361.jpg",
    nombre: "Ensalada Clásica",
    ingredientes: [
      "Cebolla",
      "Huevo",
      "Lechuga",
      "Parmesano",
      "Tomate",
      "Zanahoria",
      "Rúcula",
    ],
    precio: 614,
    id: 10,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546627-1617888105700.jpg",
    nombre: "Ensalada Caesar",
    ingredientes: [
      "lechuga",
      "pollo",
      "croutones",
      "salsa Caesar",
      "parmesano",
    ],
    precio: 800,
    id: 11,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546629-1617888112237.jpg",
    nombre: "Ensalada Caesar de Rúcula",
    ingredientes: [
      "lechuga",
      "pollo",
      "croutones",
      "salsa Caesar",
      "parmesano",
    ],
    precio: 800,
    id: 12,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546622-1617888090814.jpg",
    nombre: "Wrap Milanesitas de Pollo",
    ingredientes: [
      "Wrap de milanesas de pollo",
      "mayonesa",
      "verdes",
      "cebolla caramelizada",
      "tomate confitado",
      "nachos",
    ],
    precio: 700,
    id: 13,
  },
];

const productoPrueba = {
  imagen: "/img/menues/Capresse.jpg",
  nombre: "Milanesa Capresse",
  ingredientes: ["muzzarella", "tomate", "pesto", "albahaca fresca"],
  precio: 1337,
  id: 1,
};

const Producto = () => {
  const [carrito, setCarrito] = useState([""]);

  const [pedido, setPedido] = useState({
    menu: `${productoPrueba.id}`,
    tipoMila: "ternera",
    cantidad: "1",
    guarnicion: "",
    precio: `${productoPrueba.precio}`,
  });

  const [guarnicionSeleccionada, setguarnicionSeleccionada] = useState("");

  //state that saves the error message to print on the screen
  const [mensaje, setMensaje] = useState("");

  //estado que maneja el tipo de error
  const [tipoError, setTipoError] = useState("");

  //extract values ​​from user state
  const { guarnicion, precio } = pedido;

  const handleClick = (e) => {
    setguarnicionSeleccionada(e.currentTarget.dataset.nombre);
    setPedido({
      ...pedido,
      guarnicion: e.currentTarget.dataset.nombre,
    });
  };

  const onChange = (e) => {
    if (e.target.name === "cantidad") {
      setPedido({
        ...pedido,
        precio: e.target.value * productoPrueba.precio,
        cantidad: e.target.value,
      });
      return;
    }
    setPedido({
      ...pedido,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // valida que la guarnicion haya sido seleccionada
    if (guarnicionSeleccionada === undefined || guarnicionSeleccionada === "") {
      setTipoError("error")
      setMensaje("Selecciona una guarnicion");
      return;
    }

    // Guardo el pedido en el carrito
    setCarrito([...carrito, pedido]);

    // Resetea el formulario
    e.target.reset();
    setPedido({
      ...pedido,
      guarnicion: "",
    });
    setguarnicionSeleccionada("");

    //añade mensaje
    setTipoError("correcto")
    setMensaje("Añadido correctamente")

    //Elimina mensaje
    setTimeout(() => {
      setTipoError("")
    }, 3000);
  };

  return (
    <Layout>
      <main className="w-full h-auto mt-20">
        <div className="max-w-[85%] mx-auto w-full flex flex-col md:flex-row md:justify-center md:gap-x-3 pt-3">
          <div className="flex justify-between pt-1">
            <h2 className="text-center text-2xl font-semibold md:hidden">
              {productoPrueba?.nombre}
            </h2>
            <TiHeartOutline
              size="30px"
              className="cursor-pointer md:hidden"
              onClick={() => alert("hola")}
            />
          </div>

          <div>
            <span className="flex justify-start pb-4 text-xs 2xl:text-sm md:hidden">
              (
              {productoPrueba.ingredientes
                .map((ingrediente) => ingrediente)
                .join(", ")}
              )
            </span>
          </div>

          {/* columna izquierda */}
          <section className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-2">
            <article className="w-full">
              <Image
                src={productoPrueba.imagen}
                alt="producto"
                layout="responsive"
                width="500"
                height="300"
                objectFit="cover"
              />
            </article>

            <h3 className="text-center uppercase">
              Elige una guarnición{" "}
              <sapn className="text-red-600 font-semibold">Grosa!</sapn>
            </h3>

            <section className="w-full">
              <ul className="snap-x snap-mandatory overflow-x-scroll grid grid-flow-col gap-1">
                {guarniciones.map((item, i) => (
                  <li
                    className={`min-w-[110px] max-w-[100px] md:max-w-[150px] flex-shrink-0 snap-start hover:opacity-80 ${
                      guarnicionSeleccionada === item.nombre
                        ? "border-2 border-red-600"
                        : ""
                    }`}
                    key={i}
                    data-nombre={item.nombre}
                    onClick={handleClick}
                  >
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      layout="responsive"
                      width="500"
                      height="300"
                      objectFit="cover"
                    />
                    <p className="text-[10px] text-center font-semibold text-blue-600">
                      {item.nombre}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </section>

          {/* columna derecha */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 md:px-2 lg:w-2/5"
          >
            <div className="flex justify-between">
              <h2 className="text-start text-2xl hidden md:block font-semibold">
                {productoPrueba.nombre}
              </h2>
              <TiHeartOutline
                size="30px"
                className="cursor-pointer hidden md:block"
                onClick={() => alert("hola")}
              />
            </div>

            <span className="md:flex justify-start pb-2 text-xs 2xl:text-sm hidden ">
              (
              {productoPrueba.ingredientes
                .map((ingrediente) => ingrediente)
                .join(", ")}
              )
            </span>

            <div className="flex-col my-5 md:my-5">
              <p className="w-fit mx-auto text-md md:text-2xl font-semibold tracking-widest mb-2 ">
                Elija el tipo de milanesa
              </p>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 mr-2 md:mr-16">
                  <input
                    type="radio"
                    name="tipoMila"
                    value="ternera"
                    onChange={onChange}
                    checked
                  />
                  <label
                    htmlFor="ternera"
                    className="text-red-700 md:text-lg font-semibold"
                  >
                    Ternera
                  </label>
                  <GiCow className="text-red-800 text-3xl" />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="tipoMila"
                    value="pollo"
                    onChange={onChange}
                  />
                  <label
                    htmlFor="pollo"
                    className="text-blue-800 md:text-lg font-semibold"
                  >
                    Pollo
                  </label>
                  <GiChicken className="text-blue-800 text-2xl" />
                </div>
              </div>
            </div>

            <div className="md:my-5">
              <span className="w-fit mx-auto text-md md:text-xl font-semibold tracking-widest">
                Guarnicion seleccionada:
              </span>
              <span className="font-bold text-lg text-red-600">
                {" "}
                {guarnicion}
              </span>
            </div>

            <div className="mb-2 md:mb-10 flex justify-between items-center">
              <div>
                <label className="font-bold text-md">Cantidad:</label>
                <select
                  onChange={onChange}
                  className="border border-gray-900"
                  name="cantidad"
                >
                  <option value="1" defaultValue>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <p className="text-black md:text-2xl font-bold py-6">
                Total:
                <span className="text-red-700 text-lg md:text-3xl font-bold py-6">
                  {" "}
                  ${precio}
                </span>
              </p>
            </div>
            {tipoError !== "" && (
              <div className="my-5">
                <Mensaje mensaje={mensaje} tipoError={tipoError} />
              </div>
            )}

            <div className="flex justify-center mt-5 xs:mt-10">
              <button id="añadir" className="font-black text-sm md:text-md tracking-widest bg-red-600 text-white py-2 md:py-3 px-10 rounded-md shadow-sm shadow-red-900">
                Añadir al Carrito
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Producto;
