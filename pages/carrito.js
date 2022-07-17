import Layout from "../components/Layout";

const carrito = () => {
  const productosCarrito = [
    {
      menu: "Milanesa a caballo",
      tipoMila: "carne",
      cantidad: "1",
      guarnicion: "papas fritas",
      direccion: "newton 1663",
      precio: 1337,
      envio: 100,
    },
  ];
  const { menu, tipoMila, cantidad, guarnicion, direccion, precio, envio } =
    productosCarrito[0];

  return (
    <Layout>
      <div className="mt-20 w-full h-scren flex justify-center items-center">
        <div className="w-full pt-5 max-w-[95%] flex flex-col justify-between">
          {/* Lista Productos */}
          <div className="flex gap-2">
            <div className="flex flex-col">
              <div>I. menu</div>
              <div>I. Guarnicion</div>
            </div>
            <div className="flex flex-col">
              <h3>
                {menu} + {guarnicion}
              </h3>
              <div>
                <p>{cantidad} unidades</p>
                <p>{precio}</p>
              </div>
            </div>
          </div>

          {/* Resumen a pagar */}
          <div className="w-full h-20 flex flex-col">
            <div className="text-blue-600 text-xs flex justify-between border-b border-gray-300">
              <span>Envio a: {direccion}</span>
              <span>{envio}</span>
            </div>

            <div className="text-black flex justify-between mt-1">
              <span>Total con envio</span>
              <span>$ {precio + envio}</span>
            </div>
            <button className="mt-2 bg-blue-600 text-white py-2 rounded-md">
              Continuar compra
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default carrito;
