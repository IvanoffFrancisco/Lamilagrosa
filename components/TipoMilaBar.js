const TipoMila = ({ setTipoMenu, tipoMenu }) => {
  const handleSeleccion = (e) => {
    setTipoMenu(e.target.innerHTML);
  };

  return (
    <>
      <div className="sticky w-full h-auto bg-blue-500 top-20 z-[800] shadow-sm shadow-blue-900">
        <ul className="max-w-[80%] mx-auto text-white flex justify-around items-center gap-x-2 font-semibold text-xs md:text-sm tracking-wide md:gap-x-7 lg:text-base lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12 2xl:text-lg py-2 ">
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:ring-1 ring-white px-2 rounded-sm ease-in duration-200 ${
                tipoMenu === "Todos" ? "ring-1 ring-white" : ""
              }`}
            >
              Todos
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:ring-1 ring-white px-2 rounded-sm ease-in duration-200 ${
                tipoMenu === "Sándwich" ? "ring-1 ring-white" : ""
              }`}
            >
              Sándwich
            </p>
          </li>
          
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:ring-1 ring-white px-2 rounded-sm ease-in duration-200 ${
                tipoMenu === "Vegana" ? "ring-1 ring-white" : ""
              }`}
            >
              Vegana
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer  hover:ring-1 ring-white px-2 rounded-sm ease-in duration-200 ${
                tipoMenu === "Napolitana" ? "ring-1 ring-white" : ""
              }`}
            >
              Napolitana
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:ring-1 ring-white px-2 rounded-sm ease-in duration-200 ${
                tipoMenu === "Milanesa" ? "ring-1 ring-white" : ""
              }`}
            >
              Milanesa
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:ring-1 ring-white px-2 rounded-sm ease-in duration-200 ${
                tipoMenu === "Guarnicion" ? "ring-1 ring-white" : ""
              }`}
            >
              Guarnicion
            </p>
          </li>
        </ul>
      </div>
      <div className="max-w-[85%] mx-auto my-8 text-2xl tracking-wide font-semibold">
        <p className="capitalize">{tipoMenu}</p>
      </div>
    </>
  );
};

export default TipoMila;
