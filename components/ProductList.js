import React, { useState } from "react";

import TipoMilaBar from "./TipoMilaBar";
import MenuList from "./MenuList";

const ProductList = ({ carta }) => {
  const [tipoMenu, setTipoMenu] = useState("todas");
  return (
    <div className="w-full">
      <h2 className="text-center py-8 text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide uppercase">
        El Menú más Groso que existe!
      </h2>
      <TipoMilaBar setTipoMenu={setTipoMenu} tipoMenu={tipoMenu} />
      <MenuList carta={carta} tipoMenu={tipoMenu} />
    </div>
  );
};

export default ProductList;
