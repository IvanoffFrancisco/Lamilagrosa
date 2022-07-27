import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Mensaje from "../../components/Mensaje";
import { CarritoContext } from "../../contexts/CarritoContext";
import {
  TiHeartOutline,
  TiArrowDown,
  TiArrowLeft,
  TiArrowRight,
} from "react-icons/ti";
import { GiCow, GiChicken } from "react-icons/gi";

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

export default function DetalleProducto(props) {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const [detalleProducto, setDetalleProducto] = useState({});
  const { ingredientes } = detalleProducto;

  const [pedido, setPedido] = useState({
    menu: "",
    imagenMenu: "",
    tipoMila: "",
    cantidad: "1",
    guarnicion: "",
    imagenGuarnicion: "",
    precio: "",
    id: "",
  });

  const [guarnicionSeleccionada, setGuarnicionSeleccionada] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoError, setTipoError] = useState("");

  useEffect(() => {
    obtenerDetalleComida();
  }, [props]);

  const obtenerDetalleComida = async () => {
    try {
      let url = `https://lamilagrosa-app.herokuapp.com/api/comidas/${props.id}`;
      const res = await fetch(url);
      const respuesta = await res.json();
      setDetalleProducto(respuesta);
      // setImagenMenu(String(respuesta.imagen));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuarnicion = (e) => {
    setGuarnicionSeleccionada(e.currentTarget.dataset.guarnicion);
    setPedido({
      ...pedido,
      guarnicion: e.currentTarget.dataset.guarnicion,
      imagenGuarnicion: e.currentTarget.dataset.imagen,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "cantidad") {
      setPedido({
        ...pedido,
        cantidad: e.target.value,
        precio: e.target.value * detalleProducto.precio,
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
    if (guarnicionSeleccionada === undefined || guarnicionSeleccionada === "") {
      setTipoError("error");
      setMensaje("Selecciona una guarnicion");
      eliminarMensaje();
      return;
    }
    if (!detalleProducto.nombre?.includes("Vegana")) {
      if (pedido.tipoMila === undefined || pedido.tipoMila === "") {
        setTipoError("error");
        setMensaje("Selecciona un tipo de carne");
        eliminarMensaje();
        return;
      }
    }

    //genero un id para el pedido
    pedido.id = Date.now().toString(36);
    pedido.menu = detalleProducto.nombre;
    pedido.imagenMenu = detalleProducto.imagen;
    pedido.precio = detalleProducto.precio * pedido.cantidad;

    // Guardo el pedido en el carrito
    setCarrito([...carrito, pedido]);

    // Resetea el formulario
    e.target.reset();
    setPedido({
      ...pedido,
      guarnicion: "",
      tipoMila: "",
    });
    setGuarnicionSeleccionada("");

    setTipoError("correcto");
    setMensaje("Añadido correctamente");
    eliminarMensaje();
  };

  const eliminarMensaje = () => {
    setTimeout(() => {
      setTipoError("");
    }, 2500);
  };

  return (
    <Layout>
      <main className="w-full h-auto mt-20">
        <div className="max-w-[85%] mx-auto w-full flex flex-col md:flex-row md:justify-center md:gap-x-3 pt-3">
          <div className="flex justify-between pt-1">
            <h2 className="text-center text-2xl font-semibold md:hidden">
              {detalleProducto?.nombre}
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
              {ingredientes?.map((ingrediente) => ingrediente?.tipo).join(", ")}
              )
            </span>
          </div>

          {/* columna izquierda */}
          <section className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-2">
            <article className="w-full">
              {detalleProducto.imagen && (
                <Image
                  src={detalleProducto.imagen}
                  layout="responsive"
                  alt="producto"
                  objectFit="cover"
                  width="800"
                  height="500"
                />
              )}
            </article>

            <h3 className="text-center uppercase flex justify-around">
              <TiArrowLeft className="text-red-600 text-2xl" />
              <TiArrowDown className="text-red-600 text-2xl" />
              Elige una guarnición{" "}
              <TiArrowDown className="text-red-600 text-2xl" />
              <TiArrowRight className="text-red-600 text-2xl" />
            </h3>

            <section className="w-full">
              <ul className="snap-x snap-mandatory overflow-x-scroll grid grid-flow-col gap-1">
                {guarniciones.map((item, i) => (
                  <li
                    className={`min-w-[110px] max-w-[100px] md:max-w-[150px] flex-shrink-0 snap-start hover:opacity-80 ${
                      guarnicionSeleccionada === item.nombre
                        ? "border-2 border-red-500 rounded-sm"
                        : ""
                    }`}
                    key={i}
                    data-guarnicion={item.nombre}
                    data-imagen={item.imagen}
                    onClick={handleGuarnicion}
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
                {detalleProducto?.nombre}
              </h2>
              <TiHeartOutline
                size="30px"
                className="cursor-pointer hidden md:block"
                onClick={() => alert("hola")}
              />
            </div>

            <span className="md:flex justify-start pb-2 text-xs 2xl:text-sm hidden ">
              (
              {ingredientes?.map((ingrediente) => ingrediente?.tipo).join(", ")}
              )
            </span>

            {detalleProducto.nombre?.includes("Vegana") ||
            detalleProducto.nombre?.includes("Vegetariana") ? null : (
              <div className="flex-col my-5 md:my-5">
                <p className="w-fit mx-auto text-md md:text-xl font-semibold tracking-widest mb-2 ">
                  Elija el tipo de milanesa
                </p>
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 mr-2 md:mr-16">
                    <input
                      type="radio"
                      name="tipoMila"
                      value="ternera"
                      onChange={handleChange}
                      // checked
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
                      onChange={handleChange}
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
            )}

            <div className="md:my-5">
              <span className="w-fit mx-auto text-md md:text-xl font-semibold tracking-widest">
                Guarnicion seleccionada:
              </span>
              <span className="font-bold text-lg text-red-600">
                {" "}
                {pedido.guarnicion}
              </span>
            </div>

            <div className="mb-2 md:mb-8 mt-5 flex justify-between items-center">
              <div>
                <label className="font-bold">Cantidad:</label>
                <select
                  onChange={handleChange}
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
              <p className="text-black font-bold">
                Total:
                <span className="text-red-700 text-lg md:text-3xl font-bold py-6">
                  {" "}
                  $
                  {detalleProducto?.precio &&
                    detalleProducto?.precio * parseInt(pedido.cantidad)}
                </span>
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-5 xs:mt-10">
              {tipoError !== "" && (
                <div className="w-full my-3">
                  <Mensaje mensaje={mensaje} tipoError={tipoError} />
                </div>
              )}
              <button
                id="añadir"
                className="w-full font-black text-sm md:text-md tracking-widest bg-red-600 text-white py-2 md:py-3 px-10 rounded-md shadow-sm shadow-red-900"
              >
                Añadir al Carrito
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

DetalleProducto.getInitialProps = (context) => {
  const { query } = context;
  const { id } = query;

  return { id };
};
