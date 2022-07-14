import Link from "next/link";
import Layout from "../components/Layout";

const notFound = () => {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h2 className="text-blue-600 text-9xl mb-3 font-bold tracking-widest">
          404
        </h2>
        <p className="font-semibold tracking-widest">
          La Pagina a la que estas tratando de acceder
        </p>
        <p className="font-semibold tracking-widest">
          es tan <span className="text-red-700 font-bold">Grosa </span>que
          todavía no la encuentran
        </p>
        <Link href="/">
          {/* <div className="border-t-2 border-gray-600 w-60 flex justify-center mt-10 "> */}
          <button className="border border-black hover:bg-blue-500 text-xs py-3 px-10 rounded-3xl mt-10 text-black font-black tracking-widest cursor-pointer ease-in duration-200 uppercase">
            Volver
          </button>
          {/* </div> */}
        </Link>
      </div>
    </Layout>
  );
};

export default notFound;
