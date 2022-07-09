import React, { useState } from "react";

import TipoMilaBar from "./TipoMilaBar";
import MenuList from "./MenuList";

const ProductList = ({ carta }) => {
  const [tipoMenu, setTipoMenu] = useState("Todos");
  return (
    <div className="w-full">
      <h2 className="text-center py-8 text-lg md:text-2xl xl:text-3xl font-semibold md:tracking-wide 2xl:tracking-widest uppercase">
        El Menú más <span className="text-blue-500">Groso</span> que existe!
      </h2>
      <TipoMilaBar setTipoMenu={setTipoMenu} tipoMenu={tipoMenu} />
      <MenuList carta={carta} tipoMenu={tipoMenu} />
    </div>
  );
};

export default ProductList;
