const TipoMila = ({ setTipoMenu, tipoMenu }) => {
  const handleSeleccion = (e) => {
    setTipoMenu(e.target.innerHTML);
  };

  return (
    <>
      <div className="sticky w-full h-full bg-blue-600 border-t-4 border-b-4 border-gray-400 top-20 z-[800] ">
        <ul className="max-w-[80%] mx-auto text-white flex justify-between items-center p-2 gap-x-5 font-semibold text-xs md:text-sm md:tracking-wide md:gap-x-7 lg:text-base lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12 2xl:text-lg">
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-black ${
                tipoMenu === "Todos" ? "border-b border-b-black" : ""
              }`}
            >
              Todos
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-black ${
                tipoMenu === "Sándwich" ? "border-b border-b-black" : ""
              }`}
            >
              Sándwich
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer  hover:border-b border-black ${
                tipoMenu === "Carne" ? "border-b border-b-black" : ""
              }`}
            >
              Carne
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-black ${
                tipoMenu === "Pollo" ? "border-b border-b-black" : ""
              }`}
            >
              Pollo
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-black ${
                tipoMenu === "Vegana" ? "border-b border-b-black" : ""
              }`}
            >
              Vegana
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer  hover:border-b border-black ${
                tipoMenu === "Rellena" ? "border-b border-b-black" : ""
              }`}
            >
              Rellena
            </p>
          </li>
        </ul>
      </div>
      <div className="max-w-[85%] mx-auto lg:px-8 xl:px-12 2xl:px-16 my-16 text-2xl tracking-wide font-semibold">
        <p className="capitalize">{tipoMenu}</p>
      </div>
    </>
  );
};

export default TipoMila;
