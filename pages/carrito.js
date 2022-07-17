import Layout from "../components/Layout";

const carrito = () => {
  return (
    <Layout>
      <div className="mt-20 w-full h-scren flex justify-center items-center">
        <div className="w-full pt-5 max-w-[85%] flex flex-col justify-between">
          <div className="w-full bg-blue-200">cosas</div>
          <div className="h-20 bg-gray-200 flex flex-col">
            <div className="max-w-[95%] mx-auto border-b border-black">
              Envio a:
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default carrito;
